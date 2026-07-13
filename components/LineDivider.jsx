export default function LineDivider({ label }) {
  return (
    <div className="flex items-center gap-4 py-2">
      {label && <span className="eyebrow text-steel whitespace-nowrap">{label}</span>}
      <div className="line-divider flex-1" />
    </div>
  );
}
