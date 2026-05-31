import { featuredPeople } from "@/data/mock";

export function FeaturedProfileSection() {
  const person = featuredPeople[0];

  return (
    <section className="bg-[#061A2F] px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-blue-300">
              Perfil de archivo
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white">
              Una sala digital por cada persona.
            </h2>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8">
            <div className="mb-6 h-24 w-24 rounded-3xl border border-blue-400/25 bg-blue-500/10" />
            <p className="text-sm text-blue-200">{person.role}</p>
            <h3 className="mt-2 text-3xl font-semibold text-white">
              {person.name}
            </h3>
            <p className="mt-2 text-sm text-slate-400">
              {person.institution}
              {person.campus ? ` · ${person.campus}` : ""}
            </p>
            <p className="mt-6 leading-7 text-slate-300">{person.shortBio}</p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-[#05070A] p-8">
            <div className="grid gap-4 sm:grid-cols-4">
              <Stat label="Libros" value={`${person.stats.books}+`} />
              <Stat label="Papers" value={`${person.stats.papers}+`} />
              <Stat label="Patentes" value={`${person.stats.patents}+`} />
              <Stat label="Años" value={`${person.stats.years}+`} />
            </div>

            <div className="mt-8">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-400">
                Áreas conectadas
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                {person.areas.map((area) => (
                  <span
                    key={area}
                    className="rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-100"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <p className="text-sm font-semibold text-white">
                Próxima capa del perfil
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                Línea temporal, entrevista, transcripción, libros, papers,
                patentes, proyectos, cursos, clips, mapa de influencia y
                cápsula del tiempo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
      <p className="text-3xl font-semibold text-white">{value}</p>
      <p className="mt-1 text-sm text-slate-400">{label}</p>
    </div>
  );
}
