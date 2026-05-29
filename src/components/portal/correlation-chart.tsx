import { fourWeekHistory, habitCompletionRate } from "./portal-data";

const W = 720;
const H = 220;
const PAD_X = 24;
const PAD_Y = 28;

function smoothPath(points: [number, number][]) {
  if (points.length < 2) return "";
  let path = `M ${points[0][0]} ${points[0][1]}`;
  for (let i = 1; i < points.length; i++) {
    const [x0, y0] = points[i - 1];
    const [x1, y1] = points[i];
    const cx = (x0 + x1) / 2;
    path += ` C ${cx} ${y0}, ${cx} ${y1}, ${x1} ${y1}`;
  }
  return path;
}

export function CorrelationChart() {
  const days = fourWeekHistory.flat();

  const habitPoints: [number, number][] = days.map((d, i) => {
    const x = PAD_X + ((W - 2 * PAD_X) * i) / (days.length - 1);
    const y = PAD_Y + (H - 2 * PAD_Y) * (1 - habitCompletionRate(d));
    return [x, y];
  });

  const energyPoints: [number, number][] = days.map((d, i) => {
    const x = PAD_X + ((W - 2 * PAD_X) * i) / (days.length - 1);
    const y = PAD_Y + (H - 2 * PAD_Y) * (1 - (d.energy - 1) / 4);
    return [x, y];
  });

  return (
    <div className="rounded-2xl border border-border/60 bg-card/60 p-6 sm:p-8">
      <div>
        <h3 className="font-heading text-xl text-foreground">
          Habits and how you feel, side by side
        </h3>
        <p className="mt-1 text-sm text-muted-foreground max-w-md">
          Energy follows habit days, often a day later. Not a rule — just
          something worth noticing.
        </p>
      </div>

      <div className="mt-6 overflow-x-auto">
        <svg
          viewBox={`0 0 ${W} ${H}`}
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto min-w-[600px]"
          role="img"
          aria-label="Habits versus energy over four weeks"
        >
          {[0, 1, 2, 3].map((wIdx) => (
            <line
              key={wIdx}
              x1={PAD_X + ((W - 2 * PAD_X) * (wIdx * 7)) / (days.length - 1)}
              x2={PAD_X + ((W - 2 * PAD_X) * (wIdx * 7)) / (days.length - 1)}
              y1={PAD_Y}
              y2={H - PAD_Y}
              stroke="oklch(0.88 0.018 75)"
              strokeWidth={1}
              strokeDasharray="3 5"
            />
          ))}

          <path
            d={smoothPath(habitPoints)}
            stroke="oklch(0.50 0.085 155)"
            strokeWidth={2.2}
            fill="none"
            strokeLinecap="round"
          />
          <path
            d={smoothPath(energyPoints)}
            stroke="oklch(0.65 0.115 45)"
            strokeWidth={2.2}
            fill="none"
            strokeLinecap="round"
          />

          {[0, 1, 2, 3].map((wIdx) => {
            const x = PAD_X + ((W - 2 * PAD_X) * (wIdx * 7)) / (days.length - 1);
            const labels = ["4 weeks ago", "3 weeks ago", "Last week", "This week"];
            return (
              <text
                key={wIdx}
                x={x}
                y={H - 6}
                fontSize="10"
                fill="oklch(0.45 0.020 245)"
                textAnchor="start"
              >
                {labels[wIdx]}
              </text>
            );
          })}
        </svg>
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
        <span className="inline-flex items-center gap-2">
          <span className="h-0.5 w-6 bg-primary rounded-full" />
          <span className="text-foreground/75">Habit consistency</span>
        </span>
        <span className="inline-flex items-center gap-2">
          <span className="h-0.5 w-6 bg-accent rounded-full" />
          <span className="text-foreground/75">Energy</span>
        </span>
      </div>
    </div>
  );
}
