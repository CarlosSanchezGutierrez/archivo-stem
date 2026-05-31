import type { KnowledgeConnection } from "@/types/archive";

export function PersonKnowledgeMap({
  connections,
}: {
  connections: KnowledgeConnection[];
}) {
  const nodes = Array.from(
    new Set(connections.flatMap((connection) => [connection.source, connection.target])),
  );

  return (
    <section className="bg-[#061A2F] px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-blue-300">
              Knowledge Graph
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white">
              Una red de temas, instituciones, tecnologías y proyectos.
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-300">
              Esta primera versión visualiza relaciones de forma curada. Más
              adelante, estas conexiones podrán convertirse en un grafo
              interactivo con búsqueda semántica, recomendaciones y GraphRAG.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-[#05070A] p-6">
            <div className="grid gap-3 sm:grid-cols-2">
              {nodes.map((node) => (
                <div
                  key={node}
                  className="rounded-2xl border border-blue-400/20 bg-blue-500/10 p-4 text-sm font-medium text-blue-100"
                >
                  {node}
                </div>
              ))}
            </div>

            <div className="mt-8 space-y-3">
              {connections.map((connection) => (
                <div
                  key={`${connection.source}-${connection.relation}-${connection.target}`}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm text-slate-300"
                >
                  <span className="font-semibold text-white">{connection.source}</span>
                  <span className="px-2 text-blue-300">— {connection.relation} →</span>
                  <span className="font-semibold text-white">{connection.target}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
