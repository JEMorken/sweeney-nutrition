import { fourWeekHistory, wellbeingScore, type DayEntry } from "./portal-data";
import { cn } from "@/lib/utils";

function cellStyle(score: number): React.CSSProperties {
  const t = Math.max(0, Math.min(1, (score - 1.5) / 3));
  const lightness = 0.55 + t * 0.3;
  const chroma = 0.025 + t * 0.06;
  const hue = 80 + t * 60;
  return {
    background: `oklch(${lightness.toFixed(3)} ${chroma.toFixed(3)} ${hue.toFixed(1)})`,
  };
}

const dayLabels = ["M", "T", "W", "T", "F", "S", "S"];

export function PatternGrid() {
  return (
    <div className="rounded-2xl border border-border/60 bg-card/60 p-6 sm:p-8">
      <div className="flex items-baseline justify-between">
        <div>
          <h3 className="font-heading text-xl text-foreground">
            How the last four weeks felt
          </h3>
          <p className="mt-1 text-sm text-muted-foreground max-w-md">
            Each square is a day. Warmer means you felt more like yourself.
            Cooler means it was a harder day. No numbers — just the pattern.
          </p>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-[2rem_1fr] gap-x-3 gap-y-2 max-w-2xl">
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

        {fourWeekHistory.map((wk, weekIdx) => (
          <FragmentRow key={weekIdx} weekIdx={weekIdx} weekData={wk} />
        ))}
      </div>

      <div className="mt-6 flex items-center gap-3 text-xs text-muted-foreground">
        <span>Harder</span>
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
  );
}

function FragmentRow({
  weekIdx,
  weekData,
}: {
  weekIdx: number;
  weekData: DayEntry[];
}) {
  const labels = ["4w ago", "3w ago", "Last", "This"];
  return (
    <>
      <span className="self-center text-[11px] text-muted-foreground">
        {labels[weekIdx]}
      </span>
      <div className="grid grid-cols-7 gap-1.5">
        {weekData.map((d) => {
          const score = wellbeingScore(d);
          const isCurrent = weekIdx === 3;
          return (
            <div
              key={d.date}
              className={cn(
                "aspect-square rounded-md transition-transform hover:scale-105",
                isCurrent && d.flag === "concern" && "ring-2 ring-accent/60",
                isCurrent && d.flag === "highlight" && "ring-2 ring-primary/60"
              )}
              style={cellStyle(score)}
              title={`${d.dayOfWeek}: mood ${d.mood}, energy ${d.energy}, ${d.sleepHours}h sleep`}
            />
          );
        })}
      </div>
    </>
  );
}
