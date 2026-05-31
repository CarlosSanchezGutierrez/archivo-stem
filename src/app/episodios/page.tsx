import { EpisodeExplorer } from "@/components/episodes/EpisodeExplorer";

export const metadata = {
  title: "Episodios",
  description:
    "Registros audiovisuales de Archivo STEM con entrevistas, capítulos, extractos, transcripciones, ideas clave, recursos conectados y preguntas educativas.",
};

export default function EpisodesPage() {
  return (
    <section className="min-h-screen bg-[#05070A] px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-300">
              Episodios
            </p>

            <h1 className="mt-5 text-balance text-5xl font-semibold tracking-tight text-white md:text-6xl">
              Conversaciones tratadas como registros documentales.
            </h1>
          </div>

          <div className="text-base leading-8 text-slate-300">
            <p>
              Un episodio de Archivo STEM no termina en el video publicado. Cada
              conversación se organiza como una ficha documental con capítulos,
              extractos, transcripción, ideas clave, recursos conectados y
              preguntas de uso educativo.
            </p>

            <p className="mt-4">
              La intención es que cada entrevista pueda verse, estudiarse,
              citarse, discutirse y reutilizarse dentro de rutas de aprendizaje
              o colecciones institucionales.
            </p>
          </div>
        </div>

        <div className="mt-12">
          <EpisodeExplorer />
        </div>
      </div>
    </section>
  );
}
