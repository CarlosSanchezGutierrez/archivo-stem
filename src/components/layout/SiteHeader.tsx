"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";
import { siteConfig } from "@/config/site";
import { ArchiveMark } from "@/components/ui/ArchiveMark";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname.startsWith(href);
}

export function SiteHeader() {
  const pathname = usePathname();
  const [moreOpen, setMoreOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const allLinks = [...siteConfig.primaryNav, ...siteConfig.secondaryNav];

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#05070A]/90 backdrop-blur-2xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3.5 lg:px-6">
        <Link
          href="/"
          className="group flex min-w-0 items-center gap-3"
          onClick={() => setMobileOpen(false)}
        >
          <ArchiveMark compact />

          <div className="min-w-0">
            <p className="truncate text-sm font-semibold tracking-[0.22em] text-white">
              ARCHIVO STEM
            </p>
            <p className="hidden truncate text-xs text-slate-500 sm:block">
              Archivo de conocimiento
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 xl:flex">
          {siteConfig.primaryNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`rounded-full px-4 py-2 text-sm transition ${
                isActive(pathname, item.href)
                  ? "bg-white/10 text-white"
                  : "text-slate-300 hover:bg-white/10 hover:text-white"
              }`}
            >
              {item.label}
            </Link>
          ))}

          <div className="relative">
            <button
              onClick={() => setMoreOpen((value) => !value)}
              onBlur={() => {
                window.setTimeout(() => setMoreOpen(false), 160);
              }}
              className="flex items-center gap-1 rounded-full px-4 py-2 text-sm text-slate-300 transition hover:bg-white/10 hover:text-white"
            >
              Más
              <ChevronDown className="h-4 w-4" />
            </button>

            {moreOpen ? (
              <div className="absolute right-0 mt-3 w-64 rounded-2xl border border-white/10 bg-[#07111f]/96 p-2 shadow-2xl shadow-black/40 backdrop-blur-xl">
                {siteConfig.secondaryNav.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`block rounded-xl px-4 py-3 text-sm transition ${
                      isActive(pathname, item.href)
                        ? "bg-blue-500/18 text-white"
                        : "text-slate-300 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            ) : null}
          </div>

          <a
            href={siteConfig.puenteImpactoUrl}
            target="_blank"
            rel="noreferrer"
            className="ml-2 rounded-full bg-[#F5F1E8] px-4 py-2 text-sm font-medium text-[#001B3A] transition hover:bg-white"
          >
            Puente Impacto
          </a>
        </nav>

        <button
          onClick={() => setMobileOpen((value) => !value)}
          className="rounded-xl border border-white/10 bg-white/[0.04] p-2 text-white xl:hidden"
          aria-label="Abrir menú"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {mobileOpen ? (
        <div className="border-t border-white/10 bg-[#05070A]/96 px-5 py-4 backdrop-blur-2xl xl:hidden">
          <div className="mx-auto grid max-w-7xl gap-2">
            {allLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className={`rounded-xl px-4 py-3 text-sm transition ${
                  isActive(pathname, item.href)
                    ? "bg-blue-500/18 text-white"
                    : "text-slate-300 hover:bg-white/10 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            ))}

            <a
              href={siteConfig.puenteImpactoUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-2 rounded-xl bg-[#F5F1E8] px-4 py-3 text-sm font-medium text-[#001B3A]"
            >
              Puente Impacto
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
