import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-[#05070A]">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-12 md:grid-cols-[1.5fr_1fr_1fr]">
        <div>
          <p className="text-sm font-semibold tracking-[0.28em] text-white">
            ARCHIVO STEM
          </p>
          <p className="mt-4 max-w-xl text-sm leading-6 text-slate-400">
            Plataforma para preservar, explorar y dignificar trayectorias STEM
            mediante entrevistas, perfiles, grafos de conocimiento, recursos
            educativos y experiencias digitales.
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold text-white">Explorar</p>
          <div className="mt-4 flex flex-col gap-2 text-sm text-slate-400">
            <Link href="/personas">Personas</Link>
            <Link href="/episodios">Episodios</Link>
            <Link href="/biblioteca">Biblioteca</Link>
            <Link href="/atlas">Atlas STEM</Link>
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold text-white">Proyecto</p>
          <div className="mt-4 flex flex-col gap-2 text-sm text-slate-400">
            <Link href="/rutas">Rutas</Link>
            <Link href="/faq">FAQ</Link>
            <a href="https://puenteimpacto.com" target="_blank" rel="noreferrer">
              Puente Impacto ↗
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
