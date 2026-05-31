import Link from "next/link";
import { featuredPeople } from "@/data/mock";

const archiveItems = [
  "Formación",
  "Instituciones",
  "Libros",
  "Papers",
  "Patentes",
  "Proyectos",
  "Cursos",
  "Preguntas de legado",
];

export function FeaturedProfileSection() {
  const person = featuredPeople[0];

  return (
    <section className="bg-[#061A2F] px-5 py-16 md:px-6 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-300">
              Sala piloto
            </p>

            <h2 className="mt-5 text-balance text-4xl font-semibold tracking-tight text-white md:text-5xl">
              El perfil no presenta a una persona. Presenta una obra completa.
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-300">
              Un investigador no se entiende solo por su cargo actual. Se
              entiende por su formación, sus problemas de investigación, sus
              publicaciones, sus laboratorios, sus estudiantes, sus proyectos y
              las instituciones que atravesaron su carrera.
            </p>

            <Link
              href={`/personas/${person.slug}`}
              className="mt-8 inline-flex rounded-full bg-blue-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-400"
            >
              Abrir perfil de muestra
            </Link>
          </div>

          <div className="archive-panel rounded-[1.75rem] p-6">
            <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
              <div>
                <div className="h-28 w-28 rounded-2xl border border-blue-400/25 bg-[#07111f] shadow-[0_0_44px_rgba(47,129,247,0.16)]" />

                <p className="mt-6 text-sm text-blue-200">{person.role}</p>

                <h3 className="mt-2 text-3xl font-semibold text-white">
                  {person.name}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-400">
                  {person.institution}
                  {person.campus ? ` · ${person.campus}` : ""}
                </p>

                <div className="mt-6 grid grid-cols-2 gap-3">
                  <Stat label="Libros" value={person.stats.books} />
                  <Stat label="Papers" value={person.stats.papers} />
                  <Stat label="Patentes" value={person.stats.patents} />
                  <Stat label="Años" value={person.stats.years} />
                </div>
              </div>

              <div>
                <p className="text-sm leading-7 text-slate-300">
                  {person.shortBio}
                </p>

                <div className="mt-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-300">
                    Áreas documentadas
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {person.areas.map((area) => (
                      <span
                        key={area}
                        className="rounded-full border border-blue-400/20 bg-blue-500/10 px-3 py-1 text-xs text-blue-100"
                      >
                        {area}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-8 rounded-2xl border border-white/10 bg-black/20 p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-300">
                    Piezas del archivo
                  </p>

                  <div className="mt-4 grid grid-cols-2 gap-2">
                    {archiveItems.map((item) => (
                      <div
                        key={item}
                        className="rounded-xl border border-white/10 bg-white/[0.035] px-3 py-2 text-xs text-slate-300"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ label, value }: { label: string; value?: number }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
      <p className="text-2xl font-semibold text-white">
        {value ? `${value}+` : "—"}
      </p>
      <p className="mt-1 text-xs text-slate-500">{label}</p>
    </div>
  );
}

