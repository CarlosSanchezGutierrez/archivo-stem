import Link from "next/link";

export function FinalCtaSection() {
  return (
    <section className="bg-[#05070A] px-6 py-24">
      <div className="mx-auto max-w-5xl rounded-[2rem] border border-white/10 bg-white/[0.04] p-10 text-center shadow-2xl shadow-blue-950/20">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-300">
          Invitados y colaboraciones
        </p>

        <h2 className="mt-5 text-balance text-4xl font-semibold tracking-tight text-white md:text-5xl">
          Hay trayectorias que merecen ser documentadas antes de perderse.
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-300">
          Archivo STEM busca profesores, investigadores, directores, ingenieros,
          científicos y profesionistas cuya experiencia pueda orientar a nuevas
          generaciones.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href="/personas"
            className="rounded-full bg-blue-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-400"
          >
            Explorar perfiles
          </Link>

          <Link
            href="/instituciones"
            className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            Uso institucional
          </Link>
        </div>
      </div>
    </section>
  );
}
