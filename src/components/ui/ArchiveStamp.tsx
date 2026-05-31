type ArchiveStampProps = {
  code: string;
  label: string;
};

export function ArchiveStamp({ code, label }: ArchiveStampProps) {
  return (
    <div className="inline-flex rotate-[-1deg] flex-col rounded-xl border border-blue-300/30 bg-blue-500/10 px-4 py-3 text-left shadow-[0_0_24px_rgba(47,129,247,0.10)]">
      <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-blue-200">
        {label}
      </span>
      <span className="mt-1 font-mono text-sm font-semibold tracking-[0.16em] text-white">
        {code}
      </span>
    </div>
  );
}
