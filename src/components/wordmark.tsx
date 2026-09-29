import { cn } from "@/lib/utils";

export function Wordmark({
  className,
  compact = false,
}: {
  className?: string;
  compact?: boolean;
}) {
  return (
    <span className={cn("flex flex-col leading-none", className)}>
      <span className="font-display text-[1.65rem] tracking-wide sm:text-[1.85rem]">
        <span className="text-primary">DISCO</span>
        <span className="text-gold"> LASER</span>
      </span>
      {compact ? null : (
        <span className="mt-0.5 text-[0.625rem] font-medium tracking-[0.22em] text-muted uppercase">
          Jukebox e Karaokê
        </span>
      )}
    </span>
  );
}
