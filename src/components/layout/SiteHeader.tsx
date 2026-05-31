import Link from "next/link";
import { siteConfig } from "@/config/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#05070A]/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="group flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl border border-blue-400/30 bg-blue-500/10 shadow-[0_0_40px_rgba(47,129,247,0.25)]" />
          <div>
            <p className="text-sm font-semibold tracking-[0.28em] text-white">
              ARCHIVO STEM
            </p>
            <p className="text-xs text-slate-400">
              Museo digital de trayectorias
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-slate-300 transition hover:text-white"
            >
              {item.label}
            </Link>
          ))}

          <a
            href={siteConfig.puenteImpactoUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-[#F5F1E8] px-4 py-2 text-sm font-medium text-[#001B3A] transition hover:bg-white"
          >
            Puente Impacto ↗
          </a>
        </nav>
      </div>
    </header>
  );
}
