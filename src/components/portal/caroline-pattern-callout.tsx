import { Card, CardContent } from "@/components/ui/card";
import { Sparkle } from "lucide-react";
import { carolinePatternCallout } from "./portal-data";

export function CarolinePatternCallout() {
  return (
    <Card className="border-accent/40 bg-gradient-to-br from-accent/8 via-card/60 to-secondary/30">
      <CardContent className="p-6 sm:p-7">
        <div className="flex items-start gap-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
            <Sparkle className="h-5 w-5" strokeWidth={2} />
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-accent/85">
              {carolinePatternCallout.title}
            </p>
            <p className="mt-2 font-heading text-lg sm:text-xl leading-relaxed text-foreground/90">
              {carolinePatternCallout.text}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
