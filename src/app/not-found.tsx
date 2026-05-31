import Link from "next/link";

export default function NotFound() {
  return (
    <section className="min-h-screen bg-[#05070A] px-6 py-24">
      <div className="mx-auto flex min-h-[65vh] max-w-4xl items-center justify-center">
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-300">
            Registro no encontrado
          </p>

          <h1 className="mt-5 text-balance text-5xl font-semibold tracking-tight text-white">
            Esta pieza todavía no forma parte del archivo.
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-300">
            La ruta que intentaste abrir no existe o aún no ha sido catalogada.
            Puedes volver al inicio, explorar personas o revisar el Atlas STEM.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/"
              className="rounded-full bg-blue-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-400"
            >
              Volver al inicio
            </Link>

            <Link
              href="/personas"
              className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Explorar personas
            </Link>

            <Link
              href="/atlas"
              className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Ver Atlas STEM
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
