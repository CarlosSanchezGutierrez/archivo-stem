import { EpisodeExplorer } from "@/components/episodes/EpisodeExplorer";

export const metadata = {
  title: "Episodios",
  description:
    "Episodios de Archivo STEM con entrevistas, clips, transcripciones, ideas clave, recursos conectados y preguntas de discusión.",
};

export default function EpisodesPage() {
  return (
    <section className="min-h-screen bg-[#05070A] px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-blue-300">
          Episodios
        </p>

        <div className="mt-4 grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <h1 className="text-5xl font-semibold tracking-tight text-white md:text-6xl">
              Conversaciones convertidas en piezas de archivo.
            </h1>
          </div>

          <div className="text-base leading-8 text-slate-300">
            <p>
              Cada episodio de Archivo STEM debe funcionar como entrevista,
              clase, transcripción, colección de clips, biblioteca conectada y
              recurso educativo para estudiantes e instituciones.
            </p>
            <p className="mt-4">
              El objetivo no es publicar conversaciones sueltas, sino convertir
              cada entrevista en conocimiento navegable, reutilizable y
              preservable.
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
