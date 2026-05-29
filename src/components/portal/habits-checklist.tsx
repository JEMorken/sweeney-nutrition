"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { habits as defaultHabits } from "./portal-data";
import { cn } from "@/lib/utils";

export function HabitsChecklist({
  initial,
}: {
  initial: Record<string, boolean>;
}) {
  const [state, setState] = useState(initial);

  return (
    <ul className="space-y-2">
      {defaultHabits.map((h) => {
        const done = state[h.id];
        return (
          <li key={h.id}>
            <button
              type="button"
              onClick={() => setState((s) => ({ ...s, [h.id]: !s[h.id] }))}
              className={cn(
                "w-full flex items-center gap-3 rounded-lg border px-3.5 py-3 text-left transition-colors",
                done
                  ? "border-primary/40 bg-primary/8 text-foreground"
                  : "border-border/70 bg-background hover:bg-secondary/40"
              )}
            >
              <span
                className={cn(
                  "flex h-5 w-5 shrink-0 items-center justify-center rounded-full border transition-colors",
                  done
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-foreground/30"
                )}
              >
                {done && <Check className="h-3.5 w-3.5" strokeWidth={2.5} />}
              </span>
              <span
                className={cn(
                  "text-[15px] leading-snug",
                  done ? "text-foreground" : "text-foreground/80"
                )}
              >
                {h.label}
              </span>
            </button>
          </li>
        );
      })}
    </ul>
  );
}
