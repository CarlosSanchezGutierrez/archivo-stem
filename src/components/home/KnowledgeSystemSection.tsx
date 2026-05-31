import { platformModules } from "@/data/mock";

export function KnowledgeSystemSection() {
  return (
    <section className="bg-[#05070A] px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-blue-300">
            Arquitectura de conocimiento
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white">
            Una plataforma construida alrededor de personas, relaciones y
            aprendizaje.
          </h2>
          <p className="mt-5 text-base leading-8 text-slate-300">
            Archivo STEM modela trayectorias como grafos de conocimiento:
            personas, instituciones, campus, temas, proyectos, libros, papers,
            patentes, cursos y episodios conectados entre sí.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {platformModules.map((module) => (
            <div
              key={module.title}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-blue-400/30 hover:bg-blue-500/[0.06]"
            >
              <p className="text-lg font-semibold text-white">{module.title}</p>
              <p className="mt-3 text-sm leading-6 text-slate-400">
                {module.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
