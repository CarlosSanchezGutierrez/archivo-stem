type ArchiveMarkProps = {
  compact?: boolean;
};

export function ArchiveMark({ compact = false }: ArchiveMarkProps) {
  return (
    <div
      className={`relative shrink-0 border border-blue-400/30 bg-[#07111f] shadow-[0_0_30px_rgba(47,129,247,0.16)] ${
        compact ? "h-9 w-9 rounded-xl" : "h-12 w-12 rounded-2xl"
      }`}
      aria-hidden="true"
    >
      <div
        className={`absolute border border-blue-300/20 ${
          compact ? "inset-2 rounded-lg" : "inset-2.5 rounded-xl"
        }`}
      />

      <div className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-200" />

      <div className="absolute left-1/2 top-1/2 h-px w-5 -translate-x-1/2 -translate-y-1/2 bg-blue-300/30" />
      <div className="absolute left-1/2 top-1/2 h-5 w-px -translate-x-1/2 -translate-y-1/2 bg-blue-300/30" />
    </div>
  );
}
