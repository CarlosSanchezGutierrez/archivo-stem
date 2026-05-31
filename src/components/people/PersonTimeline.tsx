import type { TimelineEvent } from "@/types/archive";

export function PersonTimeline({ timeline }: { timeline: TimelineEvent[] }) {
  return (
    <section className="bg-[#061A2F] px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-300">
              Línea temporal
            </p>

            <h2 className="mt-5 text-balance text-4xl font-semibold tracking-tight text-white md:text-5xl">
              Una carrera STEM se construye por capas.
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-300">
              La línea temporal permite leer una trayectoria como una secuencia
              de formación, instituciones, proyectos, publicaciones, patentes y
              cambios de enfoque.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-4 top-0 h-full w-px bg-blue-400/20" />

            <div className="space-y-5">
              {timeline.map((event) => (
                <article
                  key={`${event.year}-${event.title}`}
                  className="relative pl-12"
                >
                  <div className="absolute left-0 top-6 h-8 w-8 rounded-full border border-blue-300/40 bg-[#07111f] shadow-[0_0_24px_rgba(47,129,247,0.18)]" />

                  <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-6">
                    <div className="flex flex-wrap items-center gap-3">
                      <p className="text-3xl font-semibold text-white">
                        {event.year}
                      </p>

                      <span className="rounded-full border border-blue-400/20 bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-100">
                        {event.category}
                      </span>
                    </div>

                    <h3 className="mt-4 text-2xl font-semibold text-white">
                      {event.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-slate-300">
                      {event.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
