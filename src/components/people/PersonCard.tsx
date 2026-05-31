import Link from "next/link";
import type { StemPersonProfile } from "@/types/archive";

export function PersonCard({ person }: { person: StemPersonProfile }) {
  return (
    <Link
      href={`/personas/${person.slug}`}
      className="group block rounded-[1.75rem] border border-white/10 bg-white/[0.035] p-6 transition hover:border-blue-400/35 hover:bg-blue-500/[0.055]"
    >
      <div className="flex items-start justify-between gap-5">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-300">
            Ficha de archivo
          </p>

          <h2 className="mt-4 text-2xl font-semibold leading-tight text-white">
            {person.name}
          </h2>

          <p className="mt-2 text-sm leading-6 text-slate-400">
            {person.role} · {person.institution}
            {person.campus ? ` · ${person.campus}` : ""}
          </p>
        </div>

        <div className="shrink-0 rounded-xl border border-blue-400/25 bg-blue-500/10 px-3 py-2 text-xs font-medium text-blue-100">
          {person.id.slice(0, 3).toUpperCase()}
        </div>
      </div>

      <p className="mt-6 line-clamp-4 text-sm leading-7 text-slate-300">
        {person.shortBio}
      </p>

      <div className="mt-6 grid grid-cols-3 gap-3">
        <ArchiveStat label="Libros" value={person.stats.books} />
        <ArchiveStat label="Papers" value={person.stats.papers} />
        <ArchiveStat label="Patentes" value={person.stats.patents} />
      </div>

      <div className="mt-6 border-t border-white/10 pt-5">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
          Áreas principales
        </p>

        <div className="mt-3 flex flex-wrap gap-2">
          {person.areas.slice(0, 5).map((area) => (
            <span
              key={area}
              className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-slate-300"
            >
              {area}
            </span>
          ))}
        </div>
      </div>

      <p className="mt-6 text-sm font-semibold text-blue-200">
        Abrir sala de archivo
      </p>
    </Link>
  );
}

function ArchiveStat({ label, value }: { label: string; value?: number }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/20 p-3">
      <p className="text-xl font-semibold text-white">{value ? `${value}+` : "—"}</p>
      <p className="mt-1 text-xs text-slate-500">{label}</p>
    </div>
  );
}
