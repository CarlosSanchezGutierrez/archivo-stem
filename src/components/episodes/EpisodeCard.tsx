import Link from "next/link";
import type { Episode } from "@/data/episodes";

export function EpisodeCard({ episode }: { episode: Episode }) {
  return (
    <Link
      href={`/episodios/${episode.slug}`}
      className="group block rounded-[1.75rem] border border-white/10 bg-white/[0.035] p-6 transition hover:border-blue-400/35 hover:bg-blue-500/[0.055]"
    >
      <div className="flex flex-wrap items-center justify-between gap-3">
        <span className="rounded-full border border-blue-400/20 bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-100">
          Registro audiovisual {String(episode.number).padStart(3, "0")}
        </span>

        <span className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-slate-300">
          {episode.status}
        </span>
      </div>

      <div className="mt-6 rounded-2xl border border-white/10 bg-[#061A2F] p-5">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-300">
          Dossier de episodio
        </p>

        <h2 className="mt-4 text-2xl font-semibold leading-tight text-white">
          {episode.title}
        </h2>

        <p className="mt-3 text-sm leading-6 text-slate-400">
          {episode.personName} · {episode.institution}
        </p>

        <div className="mt-5 grid grid-cols-2 gap-3">
          <SmallFact label="Formato" value={episode.format} />
          <SmallFact label="Duración" value={episode.duration} />
        </div>
      </div>

      <p className="mt-6 line-clamp-4 text-sm leading-7 text-slate-300">
        {episode.description}
      </p>

      <div className="mt-6 border-t border-white/10 pt-5">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
          Temas documentados
        </p>

        <div className="mt-3 flex flex-wrap gap-2">
          {episode.topics.slice(0, 6).map((topic) => (
            <span
              key={topic}
              className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-slate-300"
            >
              {topic}
            </span>
          ))}
        </div>
      </div>

      <p className="mt-6 text-sm font-semibold text-blue-200">
        Abrir ficha documental
      </p>
    </Link>
  );
}

function SmallFact({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-white/10 bg-black/20 p-3">
      <p className="text-xs text-slate-500">{label}</p>
      <p className="mt-1 text-sm font-semibold text-white">{value}</p>
    </div>
  );
}
