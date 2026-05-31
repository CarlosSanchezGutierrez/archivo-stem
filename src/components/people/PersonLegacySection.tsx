import type { StemPersonProfile } from "@/types/archive";

export function PersonLegacySection({ person }: { person: StemPersonProfile }) {
  return (
    <section className="bg-[#05070A] px-6 py-24">
      <div className="mx-auto max-w-5xl rounded-3xl border border-white/10 bg-white/[0.04] p-10 text-center shadow-2xl shadow-blue-950/30">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-blue-300">
          Cápsula del tiempo
        </p>
        <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white">
          La pregunta de legado
        </h2>
        <p className="mx-auto mt-6 max-w-3xl text-xl leading-9 text-slate-200">
          “{person.archiveQuestion}”
        </p>
        <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-slate-400">
          Esta pregunta será parte central de cada entrevista. Archivo STEM no
          solo busca documentar qué hizo una persona, sino qué conocimiento cree
          que debe sobrevivir para las siguientes generaciones.
        </p>
      </div>
    </section>
  );
}
