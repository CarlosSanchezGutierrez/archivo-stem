import Link from "next/link";
import type { StemPersonProfile } from "@/types/archive";

export function PersonCard({ person }: { person: StemPersonProfile }) {
  return (
    <Link
      href={`/personas/${person.slug}`}
      className="group rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-blue-400/40 hover:bg-blue-500/[0.06]"
    >
      <div className="mb-6 h-20 w-20 rounded-3xl border border-blue-400/25 bg-blue-500/10 shadow-[0_0_40px_rgba(47,129,247,0.18)]" />

      <p className="text-sm text-blue-200">{person.role}</p>
      <h2 className="mt-2 text-2xl font-semibold text-white transition group-hover:text-blue-100">
        {person.name}
      </h2>
      <p className="mt-2 text-sm text-slate-400">
        {person.institution}
        {person.campus ? ` · ${person.campus}` : ""}
      </p>

      <p className="mt-5 line-clamp-4 text-sm leading-6 text-slate-300">
        {person.shortBio}
      </p>

      <div className="mt-6 grid grid-cols-3 gap-3">
        <Stat label="Libros" value={person.stats.books} />
        <Stat label="Papers" value={person.stats.papers} />
        <Stat label="Patentes" value={person.stats.patents} />
      </div>
    </Link>
  );
}

function Stat({ label, value }: { label: string; value?: number }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/20 p-3">
      <p className="text-lg font-semibold text-white">{value ? `${value}+` : "—"}</p>
      <p className="text-xs text-slate-500">{label}</p>
    </div>
  );
}
