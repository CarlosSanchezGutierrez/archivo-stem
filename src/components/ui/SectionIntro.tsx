type SectionIntroProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export function SectionIntro({ eyebrow, title, description }: SectionIntroProps) {
  return (
    <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-300">
          {eyebrow}
        </p>

        <h1 className="mt-5 text-balance text-5xl font-semibold tracking-tight text-white md:text-6xl">
          {title}
        </h1>
      </div>

      {description ? (
        <div className="text-base leading-8 text-slate-300">
          <p>{description}</p>
        </div>
      ) : null}
    </div>
  );
}
