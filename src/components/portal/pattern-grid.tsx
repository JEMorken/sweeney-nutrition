"use client";

import { useState } from "react";
import { fourWeekHistory, wellbeingScore, type DayEntry } from "./portal-data";
import { cn } from "@/lib/utils";
import { MessageCircle, X } from "lucide-react";

function cellStyle(score: number): React.CSSProperties {
  const t = Math.max(0, Math.min(1, (score - 1.5) / 3));
  let l: number, c: number, h: number;
  if (t < 0.5) {
    const u = t / 0.5;
    l = 0.42 + u * 0.43;
    c = 0.085 - u * 0.065;
    h = 250 - u * 80;
  } else {
    const u = (t - 0.5) / 0.5;
    l = 0.85 - u * 0.05;
    c = 0.020 + u * 0.095;
    h = 170 - u * 30;
  }
  return {
    background: `oklch(${l.toFixed(3)} ${c.toFixed(3)} ${h.toFixed(1)})`,
  };
}

const dayLabels = ["M", "T", "W", "T", "F", "S", "S"];
const rowLabels = ["4 weeks ago", "3 weeks ago", "Last week", "This week"];

function formatLong(iso: string) {
  return new Date(iso + "T12:00:00").toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });
}

export function PatternGrid() {
  const [selected, setSelected] = useState<string | null>("2026-05-27");

  const flat = fourWeekHistory.flat();
  const selectedDay = flat.find((d) => d.date === selected) ?? null;

  return (
    <div className="rounded-2xl border border-border/60 bg-card/60 p-6 sm:p-8">
      <div>
        <h3 className="font-heading text-xl text-foreground">
          How the last four weeks felt
        </h3>
        <p className="mt-1 text-sm text-muted-foreground max-w-md">
          Each square is a day. Warmer sage means you felt more like yourself,
          cooler slate means it was a harder day. Days with a dot have a
          reflection — tap one to read it.
        </p>
      </div>

      <div className="mt-6 grid gap-8 lg:grid-cols-[minmax(0,1fr)_18rem]">
        <div>
          <div className="grid grid-cols-[3.5rem_1fr] gap-x-3 gap-y-2 max-w-2xl">
            <div />
            <div className="grid grid-cols-7 gap-1.5">
              {dayLabels.map((d, i) => (
                <span
                  key={i}
                  className="text-center text-[11px] uppercase tracking-wider text-muted-foreground"
                >
                  {d}
                </span>
              ))}
            </div>

            {fourWeekHistory.map((wkData, weekIdx) => (
              <PatternRow
                key={weekIdx}
                label={rowLabels[weekIdx]}
                weekData={wkData}
                selected={selected}
                onSelect={setSelected}
              />
            ))}
          </div>

          <div className="mt-6 flex items-center gap-3 text-xs text-muted-foreground">
            <span>Harder day</span>
            <div className="flex h-3 w-44 overflow-hidden rounded-full">
              {Array.from({ length: 12 }, (_, i) => i / 11).map((t) => (
                <span
                  key={t}
                  className="h-full flex-1"
                  style={cellStyle(1.5 + t * 3)}
                />
              ))}
            </div>
            <span>Like yourself</span>
          </div>
        </div>

        <DayPanel day={selectedDay} onClose={() => setSelected(null)} />
      </div>
    </div>
  );
}

function PatternRow({
  label,
  weekData,
  selected,
  onSelect,
}: {
  label: string;
  weekData: DayEntry[];
  selected: string | null;
  onSelect: (date: string) => void;
}) {
  return (
    <>
      <span className="self-center text-[11px] text-muted-foreground">
        {label}
      </span>
      <div className="grid grid-cols-7 gap-1.5">
        {weekData.map((d) => {
          const score = wellbeingScore(d);
          const hasJournal = Boolean(d.journal);
          const isSelected = selected === d.date;
          const isHighlight = d.flag === "highlight";
          const isConcern = d.flag === "concern";
          return (
            <button
              key={d.date}
              type="button"
              onClick={() => hasJournal && onSelect(d.date)}
              disabled={!hasJournal}
              aria-label={`${d.dayOfWeek} ${d.date}${hasJournal ? " — has reflection" : ""}`}
              className={cn(
                "relative aspect-square rounded-md transition-all",
                hasJournal && "cursor-pointer hover:scale-110 hover:z-10",
                isSelected && "ring-2 ring-foreground/70 ring-offset-2 ring-offset-card scale-105",
                !isSelected && isHighlight && "ring-2 ring-primary/55",
                !isSelected && isConcern && "ring-2 ring-accent/55"
              )}
              style={cellStyle(score)}
            >
              {hasJournal && (
                <span
                  className={cn(
                    "absolute right-1 top-1 h-1.5 w-1.5 rounded-full",
                    isHighlight ? "bg-foreground/70" :
                    isConcern ? "bg-foreground/70" :
                    "bg-foreground/60"
                  )}
                />
              )}
            </button>
          );
        })}
      </div>
    </>
  );
}

function DayPanel({
  day,
  onClose,
}: {
  day: DayEntry | null;
  onClose: () => void;
}) {
  if (!day) {
    return (
      <aside className="rounded-xl border border-dashed border-border/70 bg-background/40 p-5 text-sm text-muted-foreground flex items-center justify-center text-center min-h-[12rem]">
        <p>
          Tap a day with a dot to read the reflection and any note from
          Caroline.
        </p>
      </aside>
    );
  }

  const isHighlight = day.flag === "highlight";
  const isConcern = day.flag === "concern";

  return (
    <aside
      className={cn(
        "rounded-xl border bg-background/70 p-5",
        isHighlight && "border-primary/35",
        isConcern && "border-accent/45",
        !isHighlight && !isConcern && "border-border/70"
      )}
    >
      <div className="flex items-start justify-between">
        <div>
          {(isHighlight || isConcern) && (
            <div className="flex items-center gap-2 mb-1.5">
              <span
                className={cn(
                  "inline-block h-2 w-2 rounded-full",
                  isHighlight ? "bg-primary" : "bg-accent"
                )}
              />
              <span className="text-xs uppercase tracking-wider text-muted-foreground">
                {isHighlight ? "Highlight" : "Worth attention"}
              </span>
            </div>
          )}
          <h4 className="font-heading text-lg text-foreground leading-tight">
            {formatLong(day.date)}
          </h4>
        </div>
        <button
          type="button"
          aria-label="Close"
          onClick={onClose}
          className="text-muted-foreground hover:text-foreground"
        >
          <X className="h-4 w-4" />
        </button>
      </div>

      <p className="mt-4 text-[15px] leading-relaxed text-foreground/90 italic">
        &ldquo;{day.journal}&rdquo;
      </p>

      {day.carolineResponse && (
        <div className="mt-4 rounded-lg bg-secondary/55 p-3.5">
          <p className="flex items-center gap-1.5 text-xs uppercase tracking-wider text-muted-foreground">
            <MessageCircle className="h-3 w-3" />
            Caroline noticed
          </p>
          <p className="mt-1.5 text-sm leading-relaxed text-foreground/90">
            {day.carolineResponse}
          </p>
        </div>
      )}
    </aside>
  );
}
