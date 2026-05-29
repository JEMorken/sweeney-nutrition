import { rhythms, carolineCelebration } from "./portal-data";
import { Sparkle } from "lucide-react";

export function RhythmsBand() {
  return (
    <section
      aria-label="Rhythms you're building"
      className="rounded-3xl border border-primary/25 bg-gradient-to-br from-primary/10 via-secondary/40 to-primary/5 p-6 sm:p-8"
    >
      <div className="flex items-center gap-2">
        <Sparkle className="h-4 w-4 text-primary" strokeWidth={2} />
        <p className="text-xs uppercase tracking-widest text-primary/80">
          Rhythms you&rsquo;re building
        </p>
      </div>

      <div className="mt-5 grid gap-6 sm:grid-cols-3">
        {rhythms.map((r) => (
          <div key={r.label}>
            <p className="font-heading text-4xl sm:text-5xl text-foreground leading-none">
              {r.value}
            </p>
            <p className="mt-2 text-sm text-foreground/75 leading-snug max-w-[18ch]">
              {r.label}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-7 rounded-xl bg-card/80 border border-primary/20 p-4 sm:p-5">
        <p className="text-xs uppercase tracking-wider text-muted-foreground">
          A note from Caroline
        </p>
        <p className="mt-2 font-heading text-lg sm:text-xl leading-relaxed text-foreground/90 italic">
          &ldquo;{carolineCelebration.text}&rdquo;
        </p>
      </div>
    </section>
  );
}
