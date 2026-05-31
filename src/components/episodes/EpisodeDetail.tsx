import type { Episode } from "@/data/episodes";

export function EpisodeDetail({ episode }: { episode: Episode }) {
  return (
    <div className="bg-[#05070A]">
      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-300">
              Síntesis editorial
            </p>

            <h2 className="mt-5 text-balance text-4xl font-semibold tracking-tight text-white md:text-5xl">
              Ideas que justifican conservar esta conversación.
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-300">
              Esta sección no resume por resumir. Extrae los puntos que pueden
              convertirse en aprendizaje, discusión, rutas de estudio o futuras
              investigaciones.
            </p>
          </div>

          <div className="grid gap-4">
            {episode.keyIdeas.map((idea, index) => (
              <article
                key={idea}
                className="rounded-[1.5rem] border border-white/10 bg-white/[0.035] p-5"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-300">
                  Idea clave {String(index + 1).padStart(2, "0")}
                </p>

                <p className="mt-3 text-base leading-7 text-slate-300">
                  {idea}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#061A2F] px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-300">
                Capítulos
              </p>

              <h2 className="mt-5 text-balance text-4xl font-semibold tracking-tight text-white md:text-5xl">
                La entrevista como recorrido de estudio.
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-300">
                Los capítulos permiten navegar la conversación por bloques:
                origen, herramientas, proyectos, instituciones, obra y legado.
              </p>
            </div>

            <div className="relative">
              <div className="absolute left-4 top-0 h-full w-px bg-blue-400/20" />

              <div className="space-y-5">
                {episode.chapters.map((chapter) => (
                  <article
                    key={`${chapter.time}-${chapter.title}`}
                    className="relative pl-12"
                  >
                    <div className="absolute left-0 top-6 h-8 w-8 rounded-full border border-blue-300/40 bg-[#07111f] shadow-[0_0_24px_rgba(47,129,247,0.18)]" />

                    <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-6">
                      <div className="flex flex-wrap items-center gap-3">
                        <p className="text-2xl font-semibold text-blue-100">
                          {chapter.time}
                        </p>

                        <span className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-slate-300">
                          Capítulo
                        </span>
                      </div>

                      <h3 className="mt-4 text-2xl font-semibold text-white">
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
          </div>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-300">
                Extractos
              </p>

              <h2 className="mt-5 text-balance text-4xl font-semibold tracking-tight text-white md:text-5xl">
                Fragmentos diseñados para circular sin perder contexto.
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-300">
                Cada clip debe poder usarse en redes, clases o presentaciones,
                pero siempre conectado al episodio completo y al perfil del
                invitado.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              {episode.clips.map((clip, index) => (
                <article
                  key={clip.title}
                  className="rounded-[1.5rem] border border-white/10 bg-white/[0.035] p-5"
                >
                  <div className="flex flex-wrap gap-2">
                    <Badge>{clip.timeRange}</Badge>
                    <Badge>{clip.theme}</Badge>
                  </div>

                  <div className="mt-5 flex aspect-video items-center justify-center rounded-2xl border border-white/10 bg-black/30">
                    <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                      Extracto {String(index + 1).padStart(2, "0")}
                    </p>
                  </div>

                  <h3 className="mt-5 text-xl font-semibold text-white">
                    {clip.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-400">
                    {clip.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#061A2F] px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-300">
              Transcripción de estudio
            </p>

            <h2 className="mt-5 text-balance text-4xl font-semibold tracking-tight text-white md:text-5xl">
              La conversación también debe poder leerse, buscarse y citarse.
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-300">
              La transcripción permitirá búsqueda semántica, capítulos
              navegables, citas, resúmenes, mapas conceptuales y materiales
              educativos.
            </p>
          </div>

          <div className="rounded-[1.75rem] border border-white/10 bg-[#05070A] p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-300">
              Vista preliminar
            </p>

            <div className="mt-6 space-y-5">
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
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-300">
              Recursos conectados
            </p>

            <h2 className="mt-5 text-balance text-4xl font-semibold tracking-tight text-white">
              Material para estudiar después de la entrevista.
            </h2>

            <div className="mt-8 grid gap-4">
              {episode.connectedResources.map((resource, index) => (
                <article
                  key={resource.title}
                  className="rounded-[1.5rem] border border-white/10 bg-white/[0.035] p-5"
                >
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <Badge>{resource.type}</Badge>

                    <span className="text-xs font-medium text-slate-500">
                      REC-{String(index + 1).padStart(3, "0")}
                    </span>
                  </div>

                  <h3 className="mt-4 text-xl font-semibold text-white">
                    {resource.title}
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-slate-400">
                    {resource.description}
                  </p>
                </article>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-300">
              Uso educativo
            </p>

            <h2 className="mt-5 text-balance text-4xl font-semibold tracking-tight text-white">
              Preguntas para clase, orientación o reflexión.
            </h2>

            <div className="mt-8 grid gap-4">
              {episode.discussionQuestions.map((question, index) => (
                <article
                  key={question}
                  className="rounded-[1.5rem] border border-white/10 bg-white/[0.035] p-5"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-300">
                    Pregunta {String(index + 1).padStart(2, "0")}
                  </p>

                  <p className="mt-3 text-base leading-7 text-slate-300">
                    {question}
                  </p>
                </article>
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
