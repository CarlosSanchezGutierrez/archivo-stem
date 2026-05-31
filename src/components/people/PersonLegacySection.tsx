import type { StemPersonProfile } from "@/types/archive";

export function PersonLegacySection({ person }: { person: StemPersonProfile }) {
  return (
    <section className="bg-[#05070A] px-6 py-24">
      <div className="mx-auto max-w-5xl rounded-[2rem] border border-white/10 bg-white/[0.04] p-10 text-center shadow-2xl shadow-blue-950/20">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-300">
          Cápsula del tiempo
        </p>

        <h2 className="mt-5 text-balance text-4xl font-semibold tracking-tight text-white md:text-5xl">
          La pregunta que cierra cada sala de archivo.
        </h2>

        <p className="mx-auto mt-7 max-w-3xl text-xl leading-9 text-slate-200">
          “{person.archiveQuestion}”
        </p>

        <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-slate-400">
          La respuesta a esta pregunta no se trata como cierre decorativo. Se
          conserva como una pieza de legado: una síntesis de experiencia,
          advertencia, criterio y visión para futuras generaciones.
        </p>
      </div>
    </section>
  );
}
