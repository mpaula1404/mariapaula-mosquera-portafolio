interface ProgressBarProps {
  percentage: number;
}

export default function ProgressBar({
  percentage,
}: ProgressBarProps) {
  return (
    <div className="h-2 w-full overflow-hidden rounded-full bg-[var(--beige-soft)]">
      <div
        className="h-full rounded-full bg-[var(--primary)]"
        style={{ width: `${percentage}%` }}
      />
    </div>
  );
}