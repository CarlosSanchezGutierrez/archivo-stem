"use client";

import { useMemo, useState, type ReactNode } from "react";
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
      <section className="grid gap-5 lg:grid-cols-3">
        <InstitutionPrinciple
          label="Curaduría"
          title="El archivo se convierte en material de clase."
          text="Cada entrevista puede transformarse en clips, preguntas, actividades, guías y rutas temáticas."
        />
        <InstitutionPrinciple
          label="Aplicación"
          title="El profesor no empieza desde cero."
          text="Las colecciones organizan recursos por público, duración, objetivo y uso sugerido."
        />
        <InstitutionPrinciple
          label="Impacto"
          title="El uso institucional debe medirse."
          text="La plataforma debe registrar estudiantes alcanzados, recursos generados y horas de conocimiento preservado."
        />
      </section>

      <section className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr]">
        <aside className="rounded-[1.75rem] border border-white/10 bg-white/[0.035] p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-300">
            Colecciones institucionales
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white">
            Elegir material según público y objetivo.
          </h2>

          <p className="mt-3 text-sm leading-7 text-slate-400">
            Una colección reúne episodios, perfiles, conceptos, clips,
            actividades y preguntas para usarse en clase, orientación vocacional,
            seminarios o programas institucionales.
          </p>

          <div className="mt-8">
            <p className="text-sm font-medium text-white">Público objetivo</p>

            <div className="mt-3 flex flex-wrap gap-2">
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
          </div>

          <div className="mt-8 space-y-4">
            {filteredCollections.map((collection) => (
              <button
                key={collection.id}
                onClick={() => setSelectedCollection(collection)}
                className={`w-full rounded-[1.5rem] border p-5 text-left transition ${
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
        </aside>

        <CollectionDetail collection={selectedCollection} />
      </section>

      <section>
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-300">
              Actividades
            </p>

            <h2 className="mt-4 text-balance text-4xl font-semibold tracking-tight text-white">
              Convertir entrevistas en aprendizaje activo.
            </h2>
          </div>

          <p className="text-base leading-8 text-slate-300">
            Las actividades permiten que el archivo se use en clase sin depender
            de que el estudiante solo vea un video. Cada actividad produce un
            entregable: mapa, reflexión, grafo, propuesta o mini proyecto.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {classActivities.map((activity) => (
            <article
              key={activity.id}
              className="rounded-[1.75rem] border border-white/10 bg-white/[0.035] p-6"
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

              <div className="mt-6">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-300">
                  Secuencia sugerida
                </p>

                <ol className="mt-4 space-y-3 text-sm leading-6 text-slate-400">
                  {activity.instructions.map((instruction, index) => (
                    <li
                      key={instruction}
                      className="grid grid-cols-[32px_1fr] gap-3"
                    >
                      <span className="flex h-7 w-7 items-center justify-center rounded-full border border-blue-400/20 bg-blue-500/10 text-xs text-blue-100">
                        {index + 1}
                      </span>
                      <span>{instruction}</span>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="mt-6 rounded-2xl border border-blue-400/20 bg-blue-500/10 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-200">
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

      <section className="rounded-[1.75rem] border border-white/10 bg-[#061A2F] p-8">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-300">
              Evidencia de impacto
            </p>

            <h2 className="mt-4 text-balance text-4xl font-semibold tracking-tight text-white">
              La educación STEM también necesita trazabilidad.
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-300">
              Para que Archivo STEM pueda aspirar a alianzas, premios o uso
              institucional serio, debe medir su alcance educativo desde el
              inicio.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {impactMetrics.map((metric) => (
              <div
                key={metric.label}
                className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-5"
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
    <section className="rounded-[1.75rem] border border-white/10 bg-[#061A2F] p-6">
      <div className="rounded-[1.5rem] border border-blue-400/20 bg-blue-500/10 p-6">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-200">
          Dossier de colección
        </p>

        <h2 className="mt-4 text-balance text-4xl font-semibold tracking-tight text-white">
          {collection.title}
        </h2>

        <p className="mt-3 text-lg leading-8 text-blue-100">
          {collection.subtitle}
        </p>

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
    </section>
  );
}

function InstitutionPrinciple({
  label,
  title,
  text,
}: {
  label: string;
  title: string;
  text: string;
}) {
  return (
    <article className="rounded-[1.5rem] border border-white/10 bg-white/[0.035] p-5">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-300">
        {label}
      </p>
      <h3 className="mt-3 text-lg font-semibold text-white">{title}</h3>
      <p className="mt-2 text-sm leading-7 text-slate-400">{text}</p>
    </article>
  );
}

function DetailBlock({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-5">
      <p className="text-sm font-semibold text-white">{title}</p>
      <div className="mt-3 text-sm leading-6 text-slate-400">{children}</div>
    </div>
  );
}

function Badge({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-full border border-blue-400/20 bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-100">
      {children}
    </span>
  );
}
