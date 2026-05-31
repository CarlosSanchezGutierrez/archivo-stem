import Link from "next/link";
import type { Episode } from "@/data/episodes";

export function EpisodeHero({ episode }: { episode: Episode }) {
  return (
    <section className="relative overflow-hidden bg-[#05070A] px-6 py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(47,129,247,0.24),transparent_32%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:48px_48px]" />

      <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="flex flex-col justify-center">
          <div className="flex flex-wrap gap-3">
            <span className="rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-xs font-medium text-blue-100">
              Episodio {String(episode.number).padStart(3, "0")}
            </span>
            <span className="rounded-full border border-white/10 bg-black/20 px-4 py-2 text-xs font-medium text-slate-300">
              {episode.status}
            </span>
            <span className="rounded-full border border-white/10 bg-black/20 px-4 py-2 text-xs font-medium text-slate-300">
              {episode.duration}
            </span>
          </div>

          <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight text-white md:text-6xl">
            {episode.title}
          </h1>

          <p className="mt-5 max-w-3xl text-xl leading-8 text-blue-100">
            {episode.subtitle}
          </p>

          <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300">
            {episode.description}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href={`/personas/${episode.personSlug}`}
              className="rounded-full bg-blue-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-400"
            >
              Ver perfil del invitado
            </Link>
            <Link
              href="/biblioteca"
              className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Explorar biblioteca
            </Link>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-4 shadow-2xl shadow-blue-950/40 backdrop-blur">
          <div className="flex aspect-video items-center justify-center rounded-3xl border border-blue-400/20 bg-black/40">
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-200">
                {episode.coverLabel}
              </p>
              <p className="mt-2 text-2xl font-semibold text-white">
                Video principal
              </p>
              <p className="mt-2 text-sm text-slate-400">
                Aquí irá el embed de YouTube.
              </p>
            </div>
          </div>

          <div className="mt-5 grid gap-3 sm:grid-cols-3">
            <MiniStat label="Formato" value={episode.format} />
            <MiniStat label="Invitado" value={episode.personName} />
            <MiniStat label="Institución" value="Tec de Monterrey" />
          </div>
        </div>
      </div>
    </section>
  );
}

function MiniStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
      <p className="text-xs text-slate-500">{label}</p>
      <p className="mt-1 text-sm font-semibold text-white">{value}</p>
    </div>
  );
}
