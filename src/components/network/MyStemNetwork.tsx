"use client";

import { useMemo, useState } from "react";
import {
  Background,
  Controls,
  ReactFlow,
  type Edge,
  type Node,
  type NodeProps,
} from "@xyflow/react";
import {
  personalNetworkEdges,
  personalNetworkNodes,
  savedStemItems,
  stemRecommendations,
  type PersonalNetworkNode,
  type PersonalNetworkNodeType,
} from "@/data/my-stem-network";

type PersonalFlowNode = Node<{ personalNode: PersonalNetworkNode }, "personalNode">;

const nodeTypeLabels: Record<PersonalNetworkNodeType, string> = {
  user: "Usuario",
  person: "Persona",
  contact: "Contacto",
  institution: "Institución",
  topic: "Tema",
  project: "Proyecto",
  resource: "Recurso",
  goal: "Objetivo",
};

const nodeTypeStyles: Record<PersonalNetworkNodeType, string> = {
  user: "border-blue-300/70 bg-blue-500/20 text-blue-50",
  person: "border-cyan-300/50 bg-cyan-500/14 text-cyan-50",
  contact: "border-teal-300/50 bg-teal-500/14 text-teal-50",
  institution: "border-sky-300/50 bg-sky-500/14 text-sky-50",
  topic: "border-violet-300/50 bg-violet-500/14 text-violet-50",
  project: "border-emerald-300/50 bg-emerald-500/14 text-emerald-50",
  resource: "border-amber-300/50 bg-amber-500/14 text-amber-50",
  goal: "border-rose-300/50 bg-rose-500/14 text-rose-50",
};

const nodeTypeOrder: Array<PersonalNetworkNodeType | "all"> = [
  "all",
  "user",
  "person",
  "contact",
  "institution",
  "topic",
  "project",
  "resource",
  "goal",
];

function PersonalNodeCard({ data, selected }: NodeProps<PersonalFlowNode>) {
  const node = data.personalNode;

  return (
    <div
      className={`w-[156px] rounded-xl border px-3 py-2 shadow-lg backdrop-blur ${nodeTypeStyles[node.type]} ${
        selected ? "ring-2 ring-blue-300/60" : ""
      }`}
    >
      <p className="truncate text-[9px] font-medium uppercase tracking-[0.16em] opacity-70">
        {nodeTypeLabels[node.type]}
      </p>
      <p className="mt-1 line-clamp-2 text-xs font-semibold leading-snug">
        {node.label}
      </p>
    </div>
  );
}

const nodeTypes = {
  personalNode: PersonalNodeCard,
};

function getPosition(node: PersonalNetworkNode, index: number) {
  const centerX = 420;
  const centerY = 300;

  if (node.type === "user") {
    return { x: centerX, y: centerY };
  }

  const radiusByType: Record<PersonalNetworkNodeType, number> = {
    user: 0,
    person: 150,
    contact: 195,
    institution: 230,
    topic: 270,
    project: 310,
    resource: 350,
    goal: 390,
  };

  const angle = (index / personalNetworkNodes.length) * Math.PI * 2 - Math.PI / 2;
  const radius = radiusByType[node.type];

  return {
    x: centerX + Math.cos(angle) * radius,
    y: centerY + Math.sin(angle) * radius,
  };
}

function capitalize(text: string) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

export function MyStemNetwork() {
  const [selectedType, setSelectedType] =
    useState<PersonalNetworkNodeType | "all">("all");
  const [selectedNode, setSelectedNode] =
    useState<PersonalNetworkNode | null>(personalNetworkNodes[0]);

  const visibleNodeIds = useMemo(() => {
    if (selectedType === "all") {
      return new Set(personalNetworkNodes.map((node) => node.id));
    }

    const ids = new Set(
      personalNetworkNodes
        .filter((node) => node.type === selectedType || node.type === "user")
        .map((node) => node.id),
    );

    personalNetworkEdges.forEach((edge) => {
      if (ids.has(edge.source) || ids.has(edge.target)) {
        ids.add(edge.source);
        ids.add(edge.target);
      }
    });

    return ids;
  }, [selectedType]);

  const nodes: PersonalFlowNode[] = useMemo(
    () =>
      personalNetworkNodes
        .filter((node) => visibleNodeIds.has(node.id))
        .map((node, index) => ({
          id: node.id,
          type: "personalNode",
          position: getPosition(node, index),
          data: { personalNode: node },
        })),
    [visibleNodeIds],
  );

  const edges: Edge[] = useMemo(
    () =>
      personalNetworkEdges
        .filter((edge) => visibleNodeIds.has(edge.source) && visibleNodeIds.has(edge.target))
        .map((edge) => ({
          id: edge.id,
          source: edge.source,
          target: edge.target,
          animated: edge.source === "me" || edge.target === "me",
          style: {
            stroke: "rgba(125, 171, 232, 0.42)",
            strokeWidth: 1.35,
          },
        })),
    [visibleNodeIds],
  );

  return (
    <div className="space-y-12">
      <section className="grid gap-6 xl:grid-cols-[1fr_360px]">
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#030712]">
          <div className="flex flex-wrap gap-2 border-b border-white/10 p-4">
            {nodeTypeOrder.map((type) => (
              <button
                key={type}
                onClick={() => setSelectedType(type)}
                className={`rounded-full px-4 py-2 text-xs font-medium transition ${
                  selectedType === type
                    ? "bg-blue-500 text-white"
                    : "border border-white/10 text-slate-300 hover:bg-white/10"
                }`}
              >
                {type === "all" ? "Todo" : nodeTypeLabels[type]}
              </button>
            ))}
          </div>

          <div className="h-[680px]">
            <ReactFlow
              nodes={nodes}
              edges={edges}
              nodeTypes={nodeTypes}
              fitView
              fitViewOptions={{ padding: 0.16 }}
              onNodeClick={(_, node) => {
                const found = personalNetworkNodes.find((item) => item.id === node.id);
                setSelectedNode(found ?? null);
              }}
              proOptions={{ hideAttribution: true }}
            >
              <Background color="rgba(148, 163, 184, 0.18)" gap={28} />
              <Controls />
            </ReactFlow>
          </div>
        </div>

        <aside className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-300">
            Nodo seleccionado
          </p>

          {selectedNode ? (
            <div className="mt-6">
              <span className={`inline-flex rounded-full border px-3 py-1 text-xs ${nodeTypeStyles[selectedNode.type]}`}>
                {nodeTypeLabels[selectedNode.type]}
              </span>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white">
                {selectedNode.label}
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-300">
                {selectedNode.description}
              </p>

              <div className="mt-5 rounded-2xl border border-white/10 bg-black/20 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-200">
                  Fuerza de conexión
                </p>
                <p className="mt-2 text-sm text-slate-300">
                  {selectedNode.strength}
                </p>
              </div>

              <div className="mt-8">
                <p className="text-sm font-semibold text-white">
                  Conexiones directas
                </p>

                <div className="mt-4 space-y-3">
                  {personalNetworkEdges
                    .filter(
                      (edge) =>
                        edge.source === selectedNode.id || edge.target === selectedNode.id,
                    )
                    .map((edge) => {
                      const otherId = edge.source === selectedNode.id ? edge.target : edge.source;
                      const otherNode = personalNetworkNodes.find((node) => node.id === otherId);

                      return (
                        <div
                          key={edge.id}
                          className="rounded-2xl border border-white/10 bg-black/20 p-4"
                        >
                          <p className="text-xs text-blue-200">{capitalize(edge.label)}</p>
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
      </section>

      <section className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-300">
            Guardados
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white">
            Biblioteca personal STEM
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-300">
            En una versión real, aquí vivirán perfiles, episodios, libros,
            conceptos, rutas y proyectos guardados por el usuario.
          </p>

          <div className="mt-8 space-y-4">
            {savedStemItems.map((item) => (
              <article
                key={item.id}
                className="rounded-3xl border border-white/10 bg-black/20 p-5"
              >
                <Badge>{item.type}</Badge>
                <h3 className="mt-4 text-xl font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  {item.description}
                </p>
                <div className="mt-4 rounded-2xl border border-blue-400/20 bg-blue-500/10 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-200">
                    Criterio de guardado
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    {item.reason}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-[#061A2F] p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-300">
            Recomendaciones
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white">
            Próximos movimientos sugeridos
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-300">
            Más adelante, estas recomendaciones podrán generarse con embeddings,
            historial de navegación, relaciones del Atlas STEM y GraphRAG.
          </p>

          <div className="mt-8 space-y-4">
            {stemRecommendations.map((recommendation) => (
              <article
                key={recommendation.id}
                className="rounded-3xl border border-white/10 bg-white/[0.04] p-5"
              >
                <Badge>{recommendation.type}</Badge>
                <h3 className="mt-4 text-xl font-semibold text-white">
                  {recommendation.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  {recommendation.description}
                </p>
                <div className="mt-4 rounded-2xl border border-white/10 bg-black/20 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-200">
                    Motivo
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {recommendation.why}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="rounded-3xl border border-white/10 bg-white/[0.04] p-8">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-300">
              Privacidad
            </p>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight text-white">
              La red personal debe ser privada por defecto.
            </h2>
          </div>

          <div className="space-y-4 text-sm leading-7 text-slate-300">
            <p>
              Mi Red STEM no debe depender de scraping ni de importar contactos
              sin consentimiento. La versión seria debe permitir que el usuario
              agregue contactos manualmente, guarde perfiles y decida qué
              información es privada o visible.
            </p>
            <p>
              La visión es que cada estudiante pueda entender su propio
              ecosistema: a quién conoce, qué temas domina, qué áreas le faltan,
              qué perfiles debería explorar y qué conexiones podrían abrirle
              puertas académicas o profesionales.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-blue-400/20 bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-100">
      {children}
    </span>
  );
}
