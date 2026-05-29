import { Card, CardContent } from "@/components/ui/card";
import { week, messages } from "./portal-data";
import { cn } from "@/lib/utils";

function formatLong(iso: string) {
  const d = new Date(iso + "T12:00:00");
  return d.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });
}

export function Moments() {
  const flagged = week.filter((d) => d.flag !== null);

  return (
    <div>
      <h3 className="font-heading text-xl text-foreground">
        Moments worth a closer look
      </h3>
      <p className="mt-1 text-sm text-muted-foreground max-w-md">
        Days where something stood out — yours or Caroline&rsquo;s noticing.
      </p>

      <div className="mt-5 grid gap-4 md:grid-cols-2">
        {flagged.map((d) => {
          const note = messages.find((m) => m.referencesDate === d.date);
          const isHighlight = d.flag === "highlight";
          return (
            <Card
              key={d.date}
              className={cn(
                "border bg-card/70",
                isHighlight
                  ? "border-primary/35"
                  : "border-accent/40"
              )}
            >
              <CardContent className="p-5">
                <div className="flex items-center gap-2">
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
                <h4 className="mt-3 font-heading text-lg text-foreground">
                  {formatLong(d.date)}
                </h4>
                <p className="mt-2 text-[15px] leading-relaxed text-foreground/85 italic">
                  &ldquo;{d.journal}&rdquo;
                </p>
                {note && (
                  <div className="mt-4 rounded-lg bg-secondary/50 p-3.5">
                    <p className="text-xs uppercase tracking-wider text-muted-foreground">
                      Caroline noticed
                    </p>
                    <p className="mt-1.5 text-sm leading-relaxed text-foreground/85">
                      {note.text}
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
