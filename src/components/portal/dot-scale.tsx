import { cn } from "@/lib/utils";

type DotScaleProps = {
  label: string;
  value: number;
  max?: number;
  accent?: "primary" | "accent" | "muted";
};

export function DotScale({
  label,
  value,
  max = 5,
  accent = "primary",
}: DotScaleProps) {
  return (
    <div>
      <div className="flex items-baseline justify-between">
        <span className="text-sm text-muted-foreground">{label}</span>
        <span className="text-sm font-medium text-foreground/80">
          {value}/{max}
        </span>
      </div>
      <div className="mt-1.5 flex items-center gap-1.5">
        {Array.from({ length: max }, (_, i) => i + 1).map((i) => {
          const active = i <= value;
          return (
            <span
              key={i}
              className={cn(
                "h-2.5 flex-1 rounded-full transition-colors",
                active
                  ? accent === "accent"
                    ? "bg-accent"
                    : accent === "muted"
                      ? "bg-muted-foreground/60"
                      : "bg-primary"
                  : "bg-border/70"
              )}
            />
          );
        })}
      </div>
    </div>
  );
}
