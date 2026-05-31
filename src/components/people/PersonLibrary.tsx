import type { ArchiveResource } from "@/types/archive";

export function PersonLibrary({
  resources,
  projects,
}: {
  resources: ArchiveResource[];
  projects: ArchiveResource[];
}) {
  return (
    <section className="bg-[#05070A] px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-blue-300">
              Biblioteca y obra
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white">
              Libros, cursos, proyectos y piezas de conocimiento.
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-300">
              Cada elemento se trata como un objeto de archivo: no solo como un
              enlace, sino como una pieza que ayuda a entender la trayectoria,
              el pensamiento y el impacto de la persona.
            </p>
          </div>

          <div className="space-y-10">
            <ResourceGroup title="Biblioteca curada" items={resources} />
            <ResourceGroup title="Proyectos representativos" items={projects} />
          </div>
        </div>
      </div>
    </section>
  );
}

function ResourceGroup({
  title,
  items,
}: {
  title: string;
  items: ArchiveResource[];
}) {
  return (
    <div>
      <h3 className="text-2xl font-semibold text-white">{title}</h3>
      <div className="mt-5 grid gap-4">
        {items.map((item) => (
          <article
            key={item.title}
            className="rounded-3xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-blue-400/30 hover:bg-blue-500/[0.05]"
          >
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full border border-blue-400/20 bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-100">
                {item.type}
              </span>
              {item.year ? (
                <span className="text-xs text-slate-500">{item.year}</span>
              ) : null}
            </div>

            <h4 className="mt-3 text-lg font-semibold text-white">{item.title}</h4>
            <p className="mt-2 text-sm leading-6 text-slate-400">
              {item.description}
            </p>
          </article>
        ))}
      </div>
    </div>
  );
}
