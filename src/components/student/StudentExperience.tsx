"use client";

import { useMemo, useState, type ReactNode } from "react";
import {
  goalOptions,
  interestOptions,
  stageOptions,
  studentRoadmaps,
  type StudentGoal,
  type StudentInterest,
  type StudentRoadmap,
  type StudentStage,
} from "@/data/student-experience";

type StudentAnswers = {
  interest: StudentInterest | null;
  stage: StudentStage | null;
  goal: StudentGoal | null;
};

const initialAnswers: StudentAnswers = {
  interest: null,
  stage: null,
  goal: null,
};

function getBestRoadmap(answers: StudentAnswers): StudentRoadmap {
  const scored = studentRoadmaps.map((roadmap) => {
    let score = 0;

    if (answers.interest && roadmap.primaryInterest === answers.interest) {
      score += 6;
    }

    if (answers.goal && roadmap.recommendedFor.includes(answers.goal)) {
      score += 3;
    }

    if (answers.stage === "secundaria" || answers.stage === "prepa") {
      if (roadmap.difficulty === "Inicial") score += 2;
    }

    if (
      answers.stage === "universidad" ||
      answers.stage === "egresado" ||
      answers.stage === "profesional"
    ) {
      if (roadmap.difficulty === "Intermedio") score += 2;
    }

    return { roadmap, score };
  });

  return scored.sort((a, b) => b.score - a.score)[0]?.roadmap ?? studentRoadmaps[0];
}

export function StudentExperience() {
  const [answers, setAnswers] = useState<StudentAnswers>(initialAnswers);
  const [hasStarted, setHasStarted] = useState(false);

  const selectedRoadmap = useMemo(() => getBestRoadmap(answers), [answers]);

  const completedAnswers = [
    answers.interest,
    answers.stage,
    answers.goal,
  ].filter(Boolean).length;

  const isComplete = completedAnswers === 3;

  return (
    <div className="space-y-10">
      <section className="grid gap-5 lg:grid-cols-3">
        <ExperiencePrinciple
          label="Diagnóstico"
          title="Primero se entiende al estudiante."
          text="La ruta no empieza con contenido. Empieza con intereses, etapa académica y propósito."
        />
        <ExperiencePrinciple
          label="Curaduría"
          title="El archivo recomienda caminos."
          text="Los perfiles, conceptos, recursos y proyectos se organizan como una secuencia de aprendizaje."
        />
        <ExperiencePrinciple
          label="Aplicación"
          title="La exploración termina en acción."
          text="Cada ruta debe llevar a estudiar algo, ver una entrevista, leer un recurso o construir un proyecto."
        />
      </section>

      <section className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr]">
        <aside className="rounded-[1.75rem] border border-white/10 bg-white/[0.035] p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-300">
            Diagnóstico inicial
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white">
            Construir una ruta a partir de intereses reales.
          </h2>

          <p className="mt-3 text-sm leading-7 text-slate-400">
            Esta experiencia está pensada para que un estudiante pueda pasar de
            una curiosidad general a una ruta concreta de perfiles, conceptos,
            recursos y proyectos.
          </p>

          <div className="mt-8 rounded-2xl border border-blue-400/20 bg-blue-500/10 p-4">
            <p className="text-sm font-semibold text-white">
              Progreso del diagnóstico
            </p>
            <p className="mt-1 text-xs leading-5 text-slate-400">
              {completedAnswers} de 3 criterios seleccionados.
            </p>

            <div className="mt-4 h-2 rounded-full bg-black/30">
              <div
                className="h-2 rounded-full bg-blue-400 transition-all"
                style={{ width: `${(completedAnswers / 3) * 100}%` }}
              />
            </div>
          </div>

          <div className="mt-8 space-y-8">
            <QuestionBlock
              eyebrow="Criterio 01"
              title="Área de interés"
              description="Selecciona el punto de entrada más cercano a lo que quieres explorar."
            >
              <div className="grid gap-3">
                {interestOptions.map((option) => (
                  <OptionButton
                    key={option.value}
                    active={answers.interest === option.value}
                    title={option.label}
                    description={option.description}
                    onClick={() => {
                      setAnswers((current) => ({
                        ...current,
                        interest: option.value,
                      }));
                      setHasStarted(true);
                    }}
                  />
                ))}
              </div>
            </QuestionBlock>

            <QuestionBlock
              eyebrow="Criterio 02"
              title="Etapa académica"
              description="El nivel de profundidad cambia según tu momento actual."
            >
              <div className="grid grid-cols-2 gap-3">
                {stageOptions.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => {
                      setAnswers((current) => ({
                        ...current,
                        stage: option.value,
                      }));
                      setHasStarted(true);
                    }}
                    className={`rounded-2xl border p-4 text-left text-sm transition ${
                      answers.stage === option.value
                        ? "border-blue-400 bg-blue-500/20 text-white"
                        : "border-white/10 bg-black/20 text-slate-300 hover:bg-white/10"
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </QuestionBlock>

            <QuestionBlock
              eyebrow="Criterio 03"
              title="Objetivo"
              description="No es lo mismo elegir carrera, crear un proyecto o prepararse profesionalmente."
            >
              <div className="grid gap-3">
                {goalOptions.map((option) => (
                  <OptionButton
                    key={option.value}
                    active={answers.goal === option.value}
                    title={option.label}
                    description={option.description}
                    onClick={() => {
                      setAnswers((current) => ({
                        ...current,
                        goal: option.value,
                      }));
                      setHasStarted(true);
                    }}
                  />
                ))}
              </div>
            </QuestionBlock>
          </div>

          <button
            onClick={() => {
              setAnswers(initialAnswers);
              setHasStarted(false);
            }}
            className="mt-8 rounded-full border border-white/10 px-5 py-3 text-sm font-medium text-slate-300 transition hover:bg-white/10"
          >
            Reiniciar diagnóstico
          </button>
        </aside>

        <section className="rounded-[1.75rem] border border-white/10 bg-[#061A2F] p-6">
          <div className="rounded-[1.5rem] border border-blue-400/20 bg-blue-500/10 p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-200">
              Cuaderno de ruta
            </p>

            <h2 className="mt-4 text-balance text-4xl font-semibold tracking-tight text-white">
              {hasStarted ? selectedRoadmap.title : "Tu ruta aparecerá aquí"}
            </h2>

            <p className="mt-3 text-lg leading-8 text-blue-100">
              {hasStarted
                ? selectedRoadmap.subtitle
                : "Selecciona tus criterios para generar una primera ruta de exploración."}
            </p>

            {hasStarted ? (
              <>
                <p className="mt-5 text-sm leading-7 text-slate-300">
                  {selectedRoadmap.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <Badge>{selectedRoadmap.difficulty}</Badge>
                  <Badge>{selectedRoadmap.duration}</Badge>
                  <Badge>{isComplete ? "Ruta completa" : "Ruta preliminar"}</Badge>
                </div>
              </>
            ) : null}
          </div>

          {hasStarted ? (
            <div className="mt-8 space-y-8">
              <RoadmapSection
                eyebrow="Itinerario"
                title="Secuencia sugerida"
                description="La ruta se presenta como una secuencia de estudio, no como una lista de enlaces."
              >
                <div className="space-y-4">
                  {selectedRoadmap.steps.map((step, index) => (
                    <article
                      key={`${step.title}-${index}`}
                      className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-5"
                    >
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-blue-400/25 bg-blue-500/10 text-sm font-semibold text-blue-100">
                          {String(index + 1).padStart(2, "0")}
                        </div>

                        <span className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-slate-300">
                          {step.type}
                        </span>
                      </div>

                      <h4 className="mt-4 text-lg font-semibold text-white">
                        {step.title}
                      </h4>

                      <p className="mt-2 text-sm leading-7 text-slate-400">
                        {step.description}
                      </p>
                    </article>
                  ))}
                </div>
              </RoadmapSection>

              <RoadmapList
                eyebrow="Personas"
                title="Perfiles sugeridos"
                items={selectedRoadmap.suggestedProfiles}
              />

              <RoadmapList
                eyebrow="Conceptos"
                title="Lenguaje que debes dominar"
                items={selectedRoadmap.suggestedConcepts}
              />

              <RoadmapList
                eyebrow="Aplicación"
                title="Proyectos recomendados"
                items={selectedRoadmap.suggestedProjects}
              />
            </div>
          ) : (
            <div className="mt-8 rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-6">
              <p className="text-sm font-semibold text-white">
                Qué debe lograr esta experiencia
              </p>

              <p className="mt-3 text-sm leading-7 text-slate-400">
                El Modo Estudiante debe ayudar a convertir curiosidad dispersa
                en una ruta concreta: a quién escuchar, qué conceptos entender,
                qué recursos revisar y qué proyecto intentar.
              </p>
            </div>
          )}
        </section>
      </section>
    </div>
  );
}

function ExperiencePrinciple({
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

function QuestionBlock({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: string;
  description: string;
  children: ReactNode;
}) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-300">
        {eyebrow}
      </p>
      <h3 className="mt-2 text-xl font-semibold text-white">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-400">{description}</p>
      <div className="mt-4">{children}</div>
    </div>
  );
}

function OptionButton({
  active,
  title,
  description,
  onClick,
}: {
  active: boolean;
  title: string;
  description: string;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`rounded-2xl border p-4 text-left transition ${
        active
          ? "border-blue-400 bg-blue-500/20"
          : "border-white/10 bg-black/20 hover:bg-white/10"
      }`}
    >
      <p className="text-sm font-semibold text-white">{title}</p>
      <p className="mt-1 text-xs leading-5 text-slate-400">{description}</p>
    </button>
  );
}

function RoadmapSection({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: string;
  description: string;
  children: ReactNode;
}) {
  return (
    <section>
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-300">
        {eyebrow}
      </p>
      <h3 className="mt-2 text-2xl font-semibold text-white">{title}</h3>
      <p className="mt-2 text-sm leading-7 text-slate-400">{description}</p>
      <div className="mt-5">{children}</div>
    </section>
  );
}

function RoadmapList({
  eyebrow,
  title,
  items,
}: {
  eyebrow: string;
  title: string;
  items: string[];
}) {
  return (
    <section>
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-300">
        {eyebrow}
      </p>
      <h3 className="mt-2 text-2xl font-semibold text-white">{title}</h3>

      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        {items.map((item) => (
          <div
            key={item}
            className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-sm text-slate-300"
          >
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}

function Badge({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-xs font-medium text-blue-100">
      {children}
    </span>
  );
}
