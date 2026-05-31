import Link from "next/link";
import { ArchiveMark } from "@/components/ui/ArchiveMark";
import { ArchiveStamp } from "@/components/ui/ArchiveStamp";
import { MetadataStrip } from "@/components/ui/MetadataStrip";

const dossierRows = [
  ["Persona", "Investigador / Profesor / Ingeniero"],
  ["Obra", "Libros / Papers / Patentes / Cursos"],
  ["Registro", "Entrevista / Transcripción / Clips"],
  ["Relaciones", "Instituciones / Temas / Proyectos"],
];

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#05070A]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(31,111,235,0.20),transparent_34%),radial-gradient(circle_at_bottom_left,rgba(0,27,58,0.82),transparent_36%)]" />
      <div className="absolute inset-0 museum-grid" />

      <div className="relative mx-auto grid min-h-[calc(100vh-73px)] max-w-7xl items-center gap-12 px-5 py-16 md:px-6 md:py-20 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <div className="mb-6 flex flex-wrap items-center gap-3">
            <ArchiveMark />

            <div className="rounded-full border border-blue-400/25 bg-blue-500/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.22em] text-blue-200">
              Archivo académico de trayectorias STEM
            </div>
          </div>

          <h1 className="max-w-5xl text-balance text-4xl font-semibold tracking-tight text-white md:text-7xl">
            Preservar la obra de quienes construyen conocimiento.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Archivo STEM documenta trayectorias de investigadores, profesores,
            ingenieros y científicos mediante entrevistas, bibliotecas, líneas
            temporales, fichas documentales y redes de conocimiento.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/personas"
              className="rounded-full bg-blue-500 px-6 py-3 text-sm font-semibold text-white shadow-[0_0_34px_rgba(47,129,247,0.18)] transition hover:bg-blue-400"
            >
              Explorar personas
            </Link>
            <Link
              href="/atlas"
              className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Ver red de conocimiento
            </Link>
          </div>

          <div className="mt-10">
            <MetadataStrip
              items={[
                { label: "Unidad mínima", value: "Trayectoria" },
                { label: "Método", value: "Archivo + entrevista" },
                { label: "Uso", value: "Educación STEM" },
              ]}
            />
          </div>
        </div>

        <div className="archive-dossier rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-4 backdrop-blur">
          <div className="relative rounded-[1.35rem] border border-white/10 bg-[#061A2F] p-5">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-blue-300">
                  Dossier de archivo
                </p>
                <h2 className="mt-3 text-2xl font-semibold text-white">
                  Sala digital de trayectoria
                </h2>
              </div>

              <ArchiveStamp code="ASTEM-0001" label="Registro piloto" />
            </div>

            <div className="archive-blueprint mt-6 rounded-2xl border border-blue-400/20 p-5">
              <div className="grid gap-3">
                {dossierRows.map(([label, value]) => (
                  <div
                    key={label}
                    className="grid gap-2 rounded-xl border border-white/10 bg-black/25 p-3 sm:grid-cols-[120px_1fr]"
                  >
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-blue-300">
                      {label}
                    </p>
                    <p className="text-sm font-medium text-slate-200">
                      {value}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-5 h-8 rounded-full border border-white/10 bg-black/25 p-1">
                <div className="archive-measure h-full rounded-full opacity-80" />
              </div>
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              {[
                ["Línea temporal", "Hitos"],
                ["Biblioteca", "Obra"],
                ["Atlas", "Relaciones"],
              ].map(([title, subtitle]) => (
                <div
                  key={title}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-4"
                >
                  <p className="text-sm font-medium text-white">{title}</p>
                  <p className="mt-1 text-xs text-slate-400">{subtitle}</p>
                </div>
              ))}
            </div>

            <div className="mt-5 rounded-2xl border border-blue-400/20 bg-blue-500/10 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-200">
                Pregunta de legado
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                ¿Qué conocimiento debería preservarse para las próximas
                generaciones de estudiantes, ingenieros e investigadores?
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
