import { MyStemNetwork } from "@/components/network/MyStemNetwork";

export const metadata = {
  title: "Mi Red STEM",
  description:
    "Mapa personal conceptual para visualizar intereses, perfiles guardados, contactos, instituciones, proyectos, recursos, objetivos y recomendaciones dentro de Archivo STEM.",
};

export default function MyNetworkPage() {
  return (
    <section className="min-h-screen bg-[#05070A] px-5 py-16 md:px-6 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-300">
              Mi Red STEM
            </p>

            <h1 className="mt-5 text-balance text-4xl font-semibold tracking-tight text-white md:text-6xl">
              Un mapa privado para entender tu ecosistema STEM.
            </h1>
          </div>

          <div className="text-base leading-8 text-slate-300">
            <p>
              Mi Red STEM plantea una capa personal del archivo: intereses,
              perfiles guardados, instituciones, contactos, recursos, proyectos
              y objetivos organizados como una red privada.
            </p>

            <p className="mt-4">
              La idea no es copiar LinkedIn. Es ayudar a estudiantes e
              interesados a comprender qué áreas han explorado, qué personas
              siguen, qué recursos consultan y qué conexiones podrían fortalecer
              su desarrollo académico o profesional.
            </p>
          </div>
        </div>

        <div className="mt-12">
          <MyStemNetwork />
        </div>
      </div>
    </section>
  );
}

