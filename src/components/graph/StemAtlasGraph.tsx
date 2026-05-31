"use client";

import { useMemo, useState } from "react";
import {
  Background,
  Controls,
  MiniMap,
  ReactFlow,
  type Edge,
  type Node,
} from "@xyflow/react";
import { atlasEdges, atlasNodes, type AtlasNode, type AtlasNodeType } from "@/data/atlas";

const typeStyles: Record<AtlasNodeType, string> = {
  person: "border-blue-300/60 bg-blue-500/20 text-blue-50",
  institution: "border-cyan-300/50 bg-cyan-500/15 text-cyan-50",
  campus: "border-sky-300/50 bg-sky-500/15 text-sky-50",
  topic: "border-indigo-300/50 bg-indigo-500/15 text-indigo-50",
  book: "border-amber-300/50 bg-amber-500/15 text-amber-50",
  project: "border-emerald-300/50 bg-emerald-500/15 text-emerald-50",
  technology: "border-violet-300/50 bg-violet-500/15 text-violet-50",
  course: "border-rose-300/50 bg-rose-500/15 text-rose-50",
  patent: "border-orange-300/50 bg-orange-500/15 text-orange-50",
};

const typeLabels: Record<AtlasNodeType, string> = {
  person: "Persona",
  institution: "Institución",
  campus: "Campus",
  topic: "Tema",
  book: "Libro",
  project: "Proyecto",
  technology: "Tecnología",
  course: "Curso",
  patent: "Patente",
};

const typeOrder: AtlasNodeType[] = [
  "person",
  "institution",
  "campus",
  "topic",
  "technology",
  "book",
  "project",
  "course",
  "patent",
];

function getNodePosition(node: AtlasNode, index: number) {
  const centerX = 520;
  const centerY = 300;

  if (node.type === "person") {
    return { x: centerX, y: centerY };
  }

  const typeIndex = typeOrder.indexOf(node.type);
  const radius = 210 + typeIndex * 28;
  const angle = (index / atlasNodes.length) * Math.PI * 2 - Math.PI / 2;

  return {
    x: centerX + Math.cos(angle) * radius,
    y: centerY + Math.sin(angle) * radius,
  };
}

export function StemAtlasGraph() {
  const [selectedNode, setSelectedNode] = useState<AtlasNode | null>(atlasNodes[0]);
  const [activeType, setActiveType] = useState<AtlasNodeType | "all">("all");

  const visibleNodeIds = useMemo(() => {
    if (activeType === "all") {
      return new Set(atlasNodes.map((node) => node.id));
    }

    const directNodes = new Set(
      atlasNodes
        .filter((node) => node.type === activeType || node.type === "person")
        .map((node) => node.id),
    );

    atlasEdges.forEach((edge) => {
      if (directNodes.has(edge.source) || directNodes.has(edge.target)) {
        directNodes.add(edge.source);
        directNodes.add(edge.target);
      }
    });

    return directNodes;
  }, [activeType]);

  const nodes: Node[] = useMemo(
    () =>
      atlasNodes
        .filter((node) => visibleNodeIds.has(node.id))
        .map((node, index) => ({
          id: node.id,
          position: getNodePosition(node, index),
          data: {
            label: (
              <div className="max-w-[180px]">
                <p className="text-[10px] uppercase tracking-[0.18em] opacity-70">
                  {typeLabels[node.type]}
                </p>
                <p className="mt-1 text-sm font-semibold leading-tight">{node.label}</p>
              </div>
            ),
          },
          className: `rounded-2xl border px-4 py-3 shadow-lg backdrop-blur ${typeStyles[node.type]}`,
        })),
    [visibleNodeIds],
  );

  const edges: Edge[] = useMemo(
    () =>
      atlasEdges
        .filter((edge) => visibleNodeIds.has(edge.source) && visibleNodeIds.has(edge.target))
        .map((edge) => ({
          id: edge.id,
          source: edge.source,
          target: edge.target,
          label: edge.label,
          animated: edge.source === "pedro-ponce" || edge.target === "pedro-ponce",
          style: {
            stroke: "rgba(147, 197, 253, 0.55)",
            strokeWidth: 1.5,
          },
          labelStyle: {
            fill: "rgb(203, 213, 225)",
            fontSize: 11,
          },
          labelBgStyle: {
            fill: "rgba(5, 7, 10, 0.85)",
          },
        })),
    [visibleNodeIds],
  );

  return (
    <div className="grid gap-6 xl:grid-cols-[1fr_360px]">
      <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#030712]">
        <div className="flex flex-wrap gap-2 border-b border-white/10 p-4">
          <button
            onClick={() => setActiveType("all")}
            className={`rounded-full px-4 py-2 text-xs font-medium transition ${
              activeType === "all"
                ? "bg-blue-500 text-white"
                : "border border-white/10 text-slate-300 hover:bg-white/10"
            }`}
          >
            Todo
          </button>

          {typeOrder.map((type) => (
            <button
              key={type}
              onClick={() => setActiveType(type)}
              className={`rounded-full px-4 py-2 text-xs font-medium transition ${
                activeType === type
                  ? "bg-blue-500 text-white"
                  : "border border-white/10 text-slate-300 hover:bg-white/10"
              }`}
            >
              {typeLabels[type]}
            </button>
          ))}
        </div>

        <div className="h-[720px]">
          <ReactFlow
            nodes={nodes}
            edges={edges}
            fitView
            onNodeClick={(_, node) => {
              const found = atlasNodes.find((item) => item.id === node.id);
              setSelectedNode(found ?? null);
            }}
            proOptions={{ hideAttribution: true }}
          >
            <Background color="rgba(148, 163, 184, 0.22)" gap={28} />
            <Controls />
            <MiniMap
              pannable
              zoomable
              nodeStrokeWidth={3}
              maskColor="rgba(5, 7, 10, 0.7)"
            />
          </ReactFlow>
        </div>
      </div>

      <aside className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-300">
          Nodo seleccionado
        </p>

        {selectedNode ? (
          <div className="mt-6">
            <span className={`inline-flex rounded-full border px-3 py-1 text-xs ${typeStyles[selectedNode.type]}`}>
              {typeLabels[selectedNode.type]}
            </span>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white">
              {selectedNode.label}
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-300">
              {selectedNode.description ?? "Nodo registrado dentro del Atlas STEM."}
            </p>

            <div className="mt-8">
              <p className="text-sm font-semibold text-white">
                Conexiones directas
              </p>

              <div className="mt-4 space-y-3">
                {atlasEdges
                  .filter(
                    (edge) =>
                      edge.source === selectedNode.id || edge.target === selectedNode.id,
                  )
                  .map((edge) => {
                    const otherId = edge.source === selectedNode.id ? edge.target : edge.source;
                    const otherNode = atlasNodes.find((node) => node.id === otherId);

                    return (
                      <div
                        key={edge.id}
                        className="rounded-2xl border border-white/10 bg-black/20 p-4"
                      >
                        <p className="text-xs text-blue-200">{edge.label}</p>
                        <p className="mt-1 text-sm font-medium text-white">
                          {otherNode?.label ?? otherId}
                        </p>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        ) : (
          <p className="mt-6 text-sm text-slate-400">
            Selecciona un nodo para explorar sus conexiones.
          </p>
        )}
      </aside>
    </div>
  );
}
