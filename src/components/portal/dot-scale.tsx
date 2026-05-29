"use client";

import { cn } from "@/lib/utils";

type DotScaleProps = {
  label: string;
  value: number;
  max?: number;
  accent?: "primary" | "accent" | "muted";
  onChange?: (next: number) => void;
};

export function DotScale({
  label,
  value,
  max = 5,
  accent = "primary",
  onChange,
}: DotScaleProps) {
  const interactive = Boolean(onChange);
  return (
    <div>
      <div className="flex items-baseline justify-between">
        <span className="text-sm text-muted-foreground">{label}</span>
        <span className="text-sm font-medium text-foreground/80">
          {value}/{max}
        </span>
      </div>
      <div className="mt-2 flex items-center gap-1.5">
        {Array.from({ length: max }, (_, i) => i + 1).map((i) => {
          const active = i <= value;
          const className = cn(
            "h-3 flex-1 rounded-full transition-colors",
            interactive && "cursor-pointer hover:opacity-90",
            active
              ? accent === "accent"
                ? "bg-accent"
                : accent === "muted"
                  ? "bg-muted-foreground/60"
                  : "bg-primary"
              : "bg-border/70 hover:bg-border"
          );
          if (interactive) {
            return (
              <button
                key={i}
                type="button"
                aria-label={`Set ${label.toLowerCase()} to ${i}`}
                onClick={() => onChange?.(i)}
                className={className}
              />
            );
          }
          return <span key={i} className={className} />;
        })}
      </div>
    </div>
  );
}
