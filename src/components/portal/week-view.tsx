import { Card, CardContent } from "@/components/ui/card";
import { PatternGrid } from "./pattern-grid";
import { CorrelationChart } from "./correlation-chart";
import { Moments } from "./moments";
import { CarolinePatternCallout } from "./caroline-pattern-callout";
import { patternObservations } from "./portal-data";
import { Sparkle } from "lucide-react";

export function WeekView() {
  return (
    <div className="space-y-10">
      <PatternGrid />
      <CarolinePatternCallout />
      <CorrelationChart />
      <Moments />

      <Card className="border-border/60 bg-secondary/50">
        <CardContent className="p-6 sm:p-7">
          <div className="flex items-start gap-3">
            <Sparkle className="mt-0.5 h-5 w-5 text-accent" />
            <div>
              <h3 className="font-heading text-lg text-foreground">
                Patterns you might be noticing
              </h3>
              <ul className="mt-3 space-y-2 text-[15px] text-foreground/85 leading-relaxed">
                {patternObservations.map((p) => (
                  <li key={p} className="flex items-start gap-2">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
