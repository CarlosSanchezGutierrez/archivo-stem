"use client";

import { useMemo, useState } from "react";
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

    if (
      answers.stage === "secundaria" ||
      answers.stage === "prepa"
    ) {
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

  const isComplete = answers.interest && answers.stage && answers.goal;

  return (
    <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
      <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-300">
            Iniciar experiencia
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white">
            Crea tu primer roadmap STEM.
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-300">
            Responde tres preguntas básicas. Archivo STEM te recomendará una
            ruta inicial basada en tus intereses, etapa y objetivo.
          </p>
        </div>

        <div className="space-y-8">
          <QuestionBlock
            title="1. ¿Qué área te interesa más?"
            description="Elige el punto de entrada que más te llame la atención."
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
            title="2. ¿En qué etapa estás?"
            description="Esto ayuda a ajustar el nivel del roadmap."
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
            title="3. ¿Qué quieres lograr?"
            description="El objetivo cambia la forma de recomendar perfiles, recursos y proyectos."
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
          Reiniciar respuestas
        </button>
      </div>

      <div className="rounded-3xl border border-white/10 bg-[#061A2F] p-6">
        <div className="rounded-3xl border border-blue-400/20 bg-blue-500/10 p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-200">
            Roadmap recomendado
          </p>

          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white">
            {hasStarted ? selectedRoadmap.title : "Tu ruta aparecerá aquí"}
          </h2>

          <p className="mt-3 text-lg text-blue-100">
            {hasStarted
              ? selectedRoadmap.subtitle
              : "Selecciona tus intereses para generar una recomendación inicial."}
          </p>

          {hasStarted ? (
            <>
              <p className="mt-5 text-sm leading-7 text-slate-300">
                {selectedRoadmap.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Badge label={selectedRoadmap.difficulty} />
                <Badge label={selectedRoadmap.duration} />
                <Badge label={isComplete ? "Recomendación completa" : "Recomendación parcial"} />
              </div>
            </>
          ) : null}
        </div>

        {hasStarted ? (
          <div className="mt-8 space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-white">
                Secuencia sugerida
              </h3>

              <div className="mt-5 space-y-4">
                {selectedRoadmap.steps.map((step, index) => (
                  <article
                    key={`${step.title}-${index}`}
                    className="rounded-3xl border border-white/10 bg-white/[0.04] p-5"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-blue-400/25 bg-blue-500/10 text-sm font-semibold text-blue-100">
                        {index + 1}
                      </div>
                      <span className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-slate-300">
                        {step.type}
                      </span>
                    </div>

                    <h4 className="mt-4 text-lg font-semibold text-white">
                      {step.title}
                    </h4>
                    <p className="mt-2 text-sm leading-6 text-slate-400">
                      {step.description}
                    </p>
                  </article>
                ))}
              </div>
            </div>

            <RoadmapList
              title="Perfiles sugeridos"
              items={selectedRoadmap.suggestedProfiles}
            />

            <RoadmapList
              title="Conceptos clave"
              items={selectedRoadmap.suggestedConcepts}
            />

            <RoadmapList
              title="Proyectos recomendados"
              items={selectedRoadmap.suggestedProjects}
            />
          </div>
        ) : (
          <div className="mt-8 rounded-3xl border border-white/10 bg-white/[0.04] p-6">
            <p className="text-sm font-semibold text-white">
              Qué hará esta experiencia
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-400">
              En esta versión inicial, el roadmap se genera con reglas simples.
              Después podrá usar perfiles reales, episodios vistos, embeddings,
              knowledge graphs y recomendaciones con IA.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

function QuestionBlock({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h3 className="text-xl font-semibold text-white">{title}</h3>
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

function Badge({ label }: { label: string }) {
  return (
    <span className="rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-xs font-medium text-blue-100">
      {label}
    </span>
  );
}

function RoadmapList({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h3 className="text-2xl font-semibold text-white">{title}</h3>
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
    </div>
  );
}
