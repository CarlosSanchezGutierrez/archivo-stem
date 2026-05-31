import Link from "next/link";
import type { Episode } from "@/data/episodes";

export function EpisodeHero({ episode }: { episode: Episode }) {
  return (
    <section className="relative overflow-hidden bg-[#05070A] px-6 py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(31,111,235,0.20),transparent_34%)]" />
      <div className="absolute inset-0 museum-grid" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="flex flex-col justify-center">
            <div className="flex flex-wrap gap-3">
              <span className="rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-xs font-medium text-blue-100">
                Registro audiovisual {String(episode.number).padStart(3, "0")}
              </span>

              <span className="rounded-full border border-white/10 bg-black/20 px-4 py-2 text-xs font-medium text-slate-300">
                {episode.status}
              </span>

              <span className="rounded-full border border-white/10 bg-black/20 px-4 py-2 text-xs font-medium text-slate-300">
                {episode.duration}
              </span>
            </div>

            <h1 className="mt-6 max-w-4xl text-balance text-5xl font-semibold tracking-tight text-white md:text-6xl">
              {episode.title}
            </h1>

            <p className="mt-5 max-w-3xl text-xl leading-8 text-blue-100">
              {episode.subtitle}
            </p>

            <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300">
              {episode.description}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href={`/personas/${episode.personSlug}`}
                className="rounded-full bg-blue-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-400"
              >
                Ver sala del invitado
              </Link>

              <Link
                href="/biblioteca"
                className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Recursos conectados
              </Link>
            </div>
          </div>

          <aside className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-5 backdrop-blur">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-300">
              Ficha documental
            </p>

            <div className="relative mt-5 flex aspect-video items-center justify-center overflow-hidden rounded-2xl border border-blue-400/20 bg-black/40">
              <div className="absolute inset-0 museum-grid opacity-35" />

              <div className="relative text-center">
                <p className="text-sm font-semibold text-white">
                  Entrevista principal
                </p>

                <p className="mx-auto mt-2 max-w-xs text-xs leading-5 text-slate-400">
                  Aquí irá el video completo con capítulos, extractos y
                  transcripción navegable.
                </p>
              </div>
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              <MiniFact label="Formato" value={episode.format} />
              <MiniFact label="Invitado" value={episode.personName} />
              <MiniFact label="Archivo" value={episode.coverLabel} />
            </div>

            <div className="mt-5 rounded-2xl border border-blue-400/20 bg-blue-500/10 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-200">
                Uso esperado
              </p>

              <p className="mt-2 text-sm leading-6 text-slate-300">
                Conversación completa, clips educativos, ideas clave, preguntas
                de discusión y recursos para estudiar la trayectoria.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

function MiniFact({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
      <p className="text-xs text-slate-500">{label}</p>
      <p className="mt-1 line-clamp-2 text-sm font-semibold text-white">
        {value}
      </p>
    </div>
  );
}
