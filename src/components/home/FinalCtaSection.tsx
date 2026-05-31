import Link from "next/link";

export function FinalCtaSection() {
  return (
    <section className="bg-[#061A2F] px-6 py-24">
      <div className="mx-auto max-w-5xl rounded-3xl border border-white/10 bg-white/[0.04] p-10 text-center shadow-2xl shadow-blue-950/30">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-blue-300">
          Construyamos memoria STEM
        </p>
        <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white">
          ¿Conoces a alguien que debería formar parte del archivo?
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-300">
          Buscamos profesores, investigadores, directores, profesionistas,
          emprendedores, científicos e ingenieros cuyas trayectorias puedan
          orientar a nuevas generaciones.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href="/personas"
            className="rounded-full bg-blue-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-400"
          >
            Explorar perfiles
          </Link>
          <Link
            href="/faq"
            className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            Conocer el proyecto
          </Link>
        </div>
      </div>
    </section>
  );
}
