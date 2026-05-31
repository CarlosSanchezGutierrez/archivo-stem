type MetadataItem = {
  label: string;
  value: string;
};

type MetadataStripProps = {
  items: MetadataItem[];
};

export function MetadataStrip({ items }: MetadataStripProps) {
  return (
    <div className="grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-3">
      {items.map((item) => (
        <div key={`${item.label}-${item.value}`} className="bg-[#05070A]/80 p-4">
          <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-500">
            {item.label}
          </p>
          <p className="mt-1 text-sm font-semibold text-white">{item.value}</p>
        </div>
      ))}
    </div>
  );
}
