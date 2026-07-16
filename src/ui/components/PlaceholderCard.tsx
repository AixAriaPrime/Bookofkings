// UI: PlaceholderCard
interface PlaceholderCardProps {
  label: string;
  height?: string;
  className?: string;
}

export function PlaceholderCard({
  label,
  height = "h-32",
  className = "",
}: PlaceholderCardProps) {
  return (
    <div
      className={`flex items-center justify-center rounded-2xl border border-dashed border-border/50 bg-surface-subtle ${height} ${className}`}
      role="presentation"
      aria-hidden="true"
    >
      <span className="text-xs font-mono text-onSurface/30 tracking-widest uppercase">
        {label}
      </span>
    </div>
  );
}
