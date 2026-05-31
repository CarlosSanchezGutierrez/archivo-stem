import Link from "next/link";
import type { Episode } from "@/data/episodes";

export function EpisodeCard({ episode }: { episode: Episode }) {
  return (
    <Link
      href={`/episodios/${episode.slug}`}
      className="group rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition hover:border-blue-400/40 hover:bg-blue-500/[0.06]"
    >
      <div className="flex items-center justify-between gap-4">
        <span className="rounded-full border border-blue-400/20 bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-100">
          Episodio {String(episode.number).padStart(3, "0")}
        </span>
        <span className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-slate-300">
          {episode.status}
        </span>
      </div>

      <div className="mt-6 flex aspect-video items-center justify-center rounded-3xl border border-white/10 bg-[#061A2F]">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-200">
            {episode.coverLabel}
          </p>
          <p className="mt-2 text-xs text-slate-500">{episode.format}</p>
        </div>
      </div>

      <h2 className="mt-6 text-2xl font-semibold leading-tight text-white transition group-hover:text-blue-100">
        {episode.title}
      </h2>

      <p className="mt-3 text-sm text-slate-400">
        {episode.personName} · {episode.institution}
      </p>

      <p className="mt-4 line-clamp-4 text-sm leading-6 text-slate-300">
        {episode.description}
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        {episode.topics.slice(0, 5).map((topic) => (
          <span
            key={topic}
            className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-slate-300"
          >
            {topic}
          </span>
        ))}
      </div>
    </Link>
  );
}
