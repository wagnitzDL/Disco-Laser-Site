import { cn } from "@/lib/utils";

export function Wordmark({
  className,
}: {
  className?: string;
  compact?: boolean;
}) {
  return (
    <img
      src="/images/logo.png"
      alt="Discolaser"
      className={cn(
        "h-16 w-auto max-w-full object-contain outline-none",
        className,
      )}
    />
  );
}
