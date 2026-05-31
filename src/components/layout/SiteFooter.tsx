import Link from "next/link";
import { siteConfig } from "@/config/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-[#030712]">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-10 lg:grid-cols-[1.35fr_0.8fr_0.8fr_0.9fr]">
          <div>
            <div className="flex items-center gap-3">
              <div className="relative h-10 w-10 rounded-2xl border border-blue-400/30 bg-blue-500/10 shadow-[0_0_44px_rgba(47,129,247,0.24)]">
                <div className="absolute inset-2 rounded-xl border border-blue-300/20" />
              </div>
              <div>
                <p className="text-sm font-semibold tracking-[0.28em] text-white">
                  ARCHIVO STEM
                </p>
                <p className="text-xs text-slate-500">
                  Infraestructura cultural de conocimiento
                </p>
              </div>
            </div>

            <p className="mt-6 max-w-xl text-sm leading-7 text-slate-400">
              Plataforma para preservar, explorar y dignificar trayectorias STEM
              mediante entrevistas, perfiles, grafos de conocimiento, recursos
              educativos, líneas temporales y experiencias digitales.
            </p>
          </div>

          <FooterColumn
            title="Explorar"
            links={[
              { label: "Personas", href: "/personas" },
              { label: "Episodios", href: "/episodios" },
              { label: "Biblioteca", href: "/biblioteca" },
              { label: "Atlas STEM", href: "/atlas" },
            ]}
          />

          <FooterColumn
            title="Experiencias"
            links={[
              { label: "Rutas", href: "/rutas" },
              { label: "Instituciones", href: "/instituciones" },
              { label: "Mi Red STEM", href: "/mi-red" },
              { label: "FAQ", href: "/faq" },
            ]}
          />

          <div>
            <p className="text-sm font-semibold text-white">Ecosistema</p>
            <p className="mt-4 text-sm leading-7 text-slate-400">
              Archivo STEM se conecta con educación, orientación vocacional,
              cultura científica, impacto social y ODS 4.
            </p>
            <a
              href={siteConfig.puenteImpactoUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex rounded-full bg-[#F5F1E8] px-4 py-2 text-sm font-medium text-[#001B3A] transition hover:bg-white"
            >
              Puente Impacto ↗
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col justify-between gap-4 border-t border-white/10 pt-6 text-xs text-slate-500 md:flex-row">
          <p>© {new Date().getFullYear()} Archivo STEM. Todos los derechos reservados.</p>
          <p>Diseñado como museo digital de trayectorias STEM.</p>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <p className="text-sm font-semibold text-white">{title}</p>
      <div className="mt-4 flex flex-col gap-2">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-sm text-slate-400 transition hover:text-white"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
