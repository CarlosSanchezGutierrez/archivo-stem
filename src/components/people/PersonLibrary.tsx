import type { ArchiveResource } from "@/types/archive";

export function PersonLibrary({
  resources,
  projects,
}: {
  resources: ArchiveResource[];
  projects: ArchiveResource[];
}) {
  return (
    <section className="bg-[#05070A] px-5 py-16 md:px-6 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-300">
              Obra y proyectos
            </p>

            <h2 className="mt-5 text-balance text-4xl font-semibold tracking-tight text-white md:text-5xl">
              La producción de conocimiento también forma parte de la entrevista.
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-300">
              Libros, cursos, patentes y proyectos no son anexos. Son piezas
              que explican cómo una persona piensa, enseña, investiga y transfiere
              conocimiento.
            </p>
          </div>

          <div className="space-y-10">
            <ArchiveGroup
              title="Biblioteca asociada"
              label="Obra publicada"
              items={resources}
            />

            <ArchiveGroup
              title="Proyectos representativos"
              label="Aplicaciones"
              items={projects}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function ArchiveGroup({
  title,
  label,
  items,
}: {
  title: string;
  label: string;
  items: ArchiveResource[];
}) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-300">
        {label}
      </p>

      <h3 className="mt-3 text-3xl font-semibold text-white">{title}</h3>

      <div className="mt-6 grid gap-4">
        {items.map((item, index) => (
          <article
            key={item.title}
            className="rounded-[1.5rem] border border-white/10 bg-white/[0.035] p-5 transition hover:border-blue-400/30 hover:bg-blue-500/[0.05]"
          >
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full border border-blue-400/20 bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-100">
                  {item.type}
                </span>

                {item.year ? (
                  <span className="text-xs text-slate-500">{item.year}</span>
                ) : null}
              </div>

              <span className="text-xs font-medium text-slate-500">
                REG-{String(index + 1).padStart(3, "0")}
              </span>
            </div>

            <h4 className="mt-4 text-xl font-semibold text-white">
              {item.title}
            </h4>

            <p className="mt-2 text-sm leading-7 text-slate-400">
              {item.description}
            </p>
          </article>
        ))}
      </div>
    </div>
  );
}

