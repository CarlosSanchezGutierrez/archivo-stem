const principles = [
  {
    title: "Trayectoria",
    text: "La carrera de una persona se documenta como una secuencia de decisiones, instituciones, proyectos, mentores y problemas técnicos.",
  },
  {
    title: "Obra",
    text: "Libros, papers, patentes, cursos, laboratorios y proyectos se tratan como piezas de conocimiento, no como enlaces secundarios.",
  },
  {
    title: "Relaciones",
    text: "Cada perfil se conecta con temas, campus, universidades, tecnologías, estudiantes, colaboradores y líneas de investigación.",
  },
];

export function ConceptSection() {
  return (
    <section className="bg-[#05070A] px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-300">
              Propósito
            </p>

            <h2 className="mt-5 text-balance text-4xl font-semibold tracking-tight text-white md:text-5xl">
              Documentar lo que normalmente queda fuera de la memoria pública.
            </h2>
          </div>

          <div>
            <p className="text-lg leading-8 text-slate-300">
              Muchas trayectorias STEM viven dispersas en currículums,
              artículos, clases, laboratorios, anécdotas, libros, tesis y
              proyectos institucionales. Archivo STEM reúne esas piezas para que
              estudiantes e instituciones puedan explorarlas con contexto.
            </p>

            <div className="mt-8 grid gap-4">
              {principles.map((principle) => (
                <article
                  key={principle.title}
                  className="rounded-3xl border border-white/10 bg-white/[0.035] p-6"
                >
                  <p className="text-lg font-semibold text-white">
                    {principle.title}
                  </p>
                  <p className="mt-2 text-sm leading-7 text-slate-400">
                    {principle.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
