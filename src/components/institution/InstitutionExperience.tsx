"use client";

import { useMemo, useState } from "react";
import {
  classActivities,
  impactMetrics,
  institutionCollections,
  type InstitutionAudience,
  type InstitutionCollection,
} from "@/data/institution-experience";

const audienceOptions: Array<InstitutionAudience | "Todas"> = [
  "Todas",
  "Preparatoria",
  "Universidad",
  "Profesor",
  "Grupo estudiantil",
  "Dirección académica",
  "Empresa aliada",
];

export function InstitutionExperience() {
  const [selectedAudience, setSelectedAudience] =
    useState<InstitutionAudience | "Todas">("Todas");
  const [selectedCollection, setSelectedCollection] =
    useState<InstitutionCollection>(institutionCollections[0]);

  const filteredCollections = useMemo(() => {
    if (selectedAudience === "Todas") {
      return institutionCollections;
    }

    return institutionCollections.filter((collection) =>
      collection.audience.includes(selectedAudience),
    );
  }, [selectedAudience]);

  return (
    <div className="space-y-16">
      <section className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-300">
            Colecciones educativas
          </p>

          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white">
            Material listo para clases, orientación y actividades STEM.
          </h2>

          <p className="mt-4 text-sm leading-7 text-slate-300">
            Las instituciones pueden usar Archivo STEM como una biblioteca viva
            de entrevistas, clips, perfiles, preguntas, actividades y rutas de
            aprendizaje.
          </p>

          <div className="mt-8 flex flex-wrap gap-2">
            {audienceOptions.map((audience) => (
              <button
                key={audience}
                onClick={() => setSelectedAudience(audience)}
                className={`rounded-full px-4 py-2 text-xs font-medium transition ${
                  selectedAudience === audience
                    ? "bg-blue-500 text-white"
                    : "border border-white/10 text-slate-300 hover:bg-white/10"
                }`}
              >
                {audience}
              </button>
            ))}
          </div>

          <div className="mt-8 space-y-4">
            {filteredCollections.map((collection) => (
              <button
                key={collection.id}
                onClick={() => setSelectedCollection(collection)}
                className={`w-full rounded-3xl border p-5 text-left transition ${
                  selectedCollection.id === collection.id
                    ? "border-blue-400 bg-blue-500/15"
                    : "border-white/10 bg-black/20 hover:bg-white/10"
                }`}
              >
                <p className="text-lg font-semibold text-white">
                  {collection.title}
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  {collection.subtitle}
                </p>
              </button>
            ))}
          </div>
        </div>

        <CollectionDetail collection={selectedCollection} />
      </section>

      <section>
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-300">
            Actividades para clase
          </p>
          <h2 className="mt-3 text-4xl font-semibold tracking-tight text-white">
            Convertir entrevistas en aprendizaje activo.
          </h2>
          <p className="mt-4 text-base leading-8 text-slate-300">
            Cada entrevista puede transformarse en actividades de discusión,
            reflexión, mapas de conocimiento, proyectos cortos o ejercicios de
            orientación vocacional.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {classActivities.map((activity) => (
            <article
              key={activity.id}
              className="rounded-3xl border border-white/10 bg-white/[0.04] p-6"
            >
              <div className="flex flex-wrap gap-2">
                <Badge>{activity.format}</Badge>
                <Badge>{activity.duration}</Badge>
              </div>

              <h3 className="mt-5 text-2xl font-semibold text-white">
                {activity.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-300">
                {activity.objective}
              </p>

              <div className="mt-5">
                <p className="text-sm font-semibold text-white">
                  Instrucciones
                </p>
                <ol className="mt-3 space-y-2 text-sm leading-6 text-slate-400">
                  {activity.instructions.map((instruction, index) => (
                    <li key={instruction}>
                      <span className="text-blue-300">{index + 1}.</span>{" "}
                      {instruction}
                    </li>
                  ))}
                </ol>
              </div>

              <div className="mt-5 rounded-2xl border border-blue-400/20 bg-blue-500/10 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-200">
                  Entregable
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  {activity.output}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-white/10 bg-[#061A2F] p-8">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-300">
              Impacto medible
            </p>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight text-white">
              Para premios, alianzas y reportes institucionales.
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-300">
              Archivo STEM debe medir su impacto desde el inicio. Esto permite
              demostrar valor educativo, cultural e institucional con datos, no
              solo con narrativa.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {impactMetrics.map((metric) => (
              <div
                key={metric.label}
                className="rounded-3xl border border-white/10 bg-white/[0.04] p-5"
              >
                <p className="text-lg font-semibold text-white">
                  {metric.label}
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  {metric.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function CollectionDetail({ collection }: { collection: InstitutionCollection }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-[#061A2F] p-6">
      <div className="rounded-3xl border border-blue-400/20 bg-blue-500/10 p-6">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-200">
          Colección seleccionada
        </p>

        <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white">
          {collection.title}
        </h2>

        <p className="mt-3 text-lg text-blue-100">{collection.subtitle}</p>

        <p className="mt-5 text-sm leading-7 text-slate-300">
          {collection.description}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {collection.audience.map((audience) => (
            <Badge key={audience}>{audience}</Badge>
          ))}
          <Badge>{collection.duration}</Badge>
        </div>
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <DetailBlock title="Objetivo">
          <p>{collection.objective}</p>
        </DetailBlock>

        <DetailBlock title="Temas relacionados">
          <div className="flex flex-wrap gap-2">
            {collection.relatedTopics.map((topic) => (
              <Badge key={topic}>{topic}</Badge>
            ))}
          </div>
        </DetailBlock>

        <DetailBlock title="Materiales incluidos">
          <ul className="space-y-2">
            {collection.includedMaterials.map((material) => (
              <li key={material}>• {material}</li>
            ))}
          </ul>
        </DetailBlock>

        <DetailBlock title="Usos sugeridos">
          <ul className="space-y-2">
            {collection.suggestedUse.map((use) => (
              <li key={use}>• {use}</li>
            ))}
          </ul>
        </DetailBlock>
      </div>
    </div>
  );
}

function DetailBlock({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
      <p className="text-sm font-semibold text-white">{title}</p>
      <div className="mt-3 text-sm leading-6 text-slate-400">{children}</div>
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
