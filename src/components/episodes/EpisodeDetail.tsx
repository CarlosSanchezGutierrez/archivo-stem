import type { Episode } from "@/data/episodes";

export function EpisodeDetail({ episode }: { episode: Episode }) {
  return (
    <div className="bg-[#05070A]">
      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-blue-300">
              Ideas clave
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white">
              Lo que este episodio debe preservar.
            </h2>
          </div>

          <div className="grid gap-4">
            {episode.keyIdeas.map((idea, index) => (
              <div
                key={idea}
                className="rounded-3xl border border-white/10 bg-white/[0.04] p-5"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-300">
                  Idea {String(index + 1).padStart(2, "0")}
                </p>
                <p className="mt-3 text-base leading-7 text-slate-300">{idea}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#061A2F] px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-blue-300">
              Timestamps
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white">
              Navega la conversación como una clase documentada.
            </h2>
          </div>

          <div className="mt-12 grid gap-4">
            {episode.chapters.map((chapter) => (
              <article
                key={`${chapter.time}-${chapter.title}`}
                className="grid gap-5 rounded-3xl border border-white/10 bg-white/[0.04] p-6 md:grid-cols-[120px_1fr]"
              >
                <p className="text-3xl font-semibold text-blue-200">
                  {chapter.time}
                </p>
                <div>
                  <h3 className="text-2xl font-semibold text-white">
                    {chapter.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-300">
                    {chapter.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-blue-300">
              Clips
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white">
              Fragmentos pensados para circular, enseñar y recordar.
            </h2>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {episode.clips.map((clip) => (
              <article
                key={clip.title}
                className="rounded-3xl border border-white/10 bg-white/[0.04] p-6"
              >
                <div className="flex flex-wrap gap-2">
                  <Badge>{clip.timeRange}</Badge>
                  <Badge>{clip.theme}</Badge>
                </div>

                <h3 className="mt-5 text-2xl font-semibold text-white">
                  {clip.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {clip.description}
                </p>

                <div className="mt-5 flex aspect-video items-center justify-center rounded-2xl border border-white/10 bg-black/30">
                  <p className="text-sm text-slate-500">Clip placeholder</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#061A2F] px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-blue-300">
              Transcripción
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white">
              Texto navegable para estudiar la entrevista.
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-300">
              La transcripción completa permitirá buscar conceptos, generar
              resúmenes, extraer citas, construir mapas conceptuales y alimentar
              la búsqueda semántica del archivo.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-[#05070A] p-6">
            <div className="space-y-5">
              {episode.transcriptPreview.map((paragraph, index) => (
                <p key={paragraph} className="text-sm leading-7 text-slate-300">
                  <span className="mr-3 text-blue-300">
                    [{String(index + 1).padStart(2, "0")}]
                  </span>
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-blue-300">
              Recursos conectados
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white">
              Lo que se puede leer, estudiar o explorar después.
            </h2>

            <div className="mt-8 grid gap-4">
              {episode.connectedResources.map((resource) => (
                <article
                  key={resource.title}
                  className="rounded-3xl border border-white/10 bg-white/[0.04] p-5"
                >
                  <Badge>{resource.type}</Badge>
                  <h3 className="mt-4 text-xl font-semibold text-white">
                    {resource.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {resource.description}
                  </p>
                </article>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-blue-300">
              Preguntas para estudiantes
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white">
              Convertir la entrevista en discusión y aprendizaje.
            </h2>

            <div className="mt-8 grid gap-4">
              {episode.discussionQuestions.map((question, index) => (
                <div
                  key={question}
                  className="rounded-3xl border border-white/10 bg-white/[0.04] p-5"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-300">
                    Pregunta {String(index + 1).padStart(2, "0")}
                  </p>
                  <p className="mt-3 text-base leading-7 text-slate-300">
                    {question}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-blue-400/20 bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-100">
      {children}
    </span>
  );
}
