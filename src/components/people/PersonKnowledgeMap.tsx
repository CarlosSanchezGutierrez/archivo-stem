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
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-300">
              Red de conocimiento
            </p>

            <h2 className="mt-5 text-balance text-4xl font-semibold tracking-tight text-white md:text-5xl">
              Una trayectoria también se entiende por sus conexiones.
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-300">
              Esta vista resume conceptos, tecnologías, instituciones y
              aplicaciones relacionadas con la persona. En una siguiente etapa,
              estas relaciones alimentarán el Atlas STEM interactivo.
            </p>
          </div>

          <div className="rounded-[1.75rem] border border-white/10 bg-[#05070A] p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-300">
              Nodos registrados
            </p>

            <div className="mt-5 grid gap-2 sm:grid-cols-2">
              {nodes.map((node) => (
                <div
                  key={node}
                  className="rounded-xl border border-white/10 bg-white/[0.035] px-3 py-2 text-sm text-slate-300"
                >
                  {node}
                </div>
              ))}
            </div>

            <div className="mt-8">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-300">
                Relaciones
              </p>

              <div className="mt-5 space-y-3">
                {connections.map((connection) => (
                  <div
                    key={`${connection.source}-${connection.relation}-${connection.target}`}
                    className="grid gap-2 rounded-2xl border border-white/10 bg-black/20 p-4 md:grid-cols-[1fr_auto_1fr]"
                  >
                    <span className="text-sm font-medium text-white">
                      {connection.source}
                    </span>

                    <span className="text-xs uppercase tracking-[0.16em] text-blue-300">
                      {connection.relation}
                    </span>

                    <span className="text-sm font-medium text-slate-200">
                      {connection.target}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
