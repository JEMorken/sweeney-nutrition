import { Card, CardContent } from "@/components/ui/card";

const placeholders = [
  {
    quote:
      "I came to Caroline thinking I needed a meal plan. What I got was permission to stop counting and start listening. Six months in, I have energy I haven't had in a decade.",
    author: "Megan, 34",
  },
  {
    quote:
      "She's the first person who didn't try to fix me. She asked questions no one had asked before. My cycle is regular for the first time since college, and I genuinely enjoy eating again.",
    author: "Sarah, 41",
  },
];

export function Testimonials() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-24">
      <div className="text-center">
        <h2 className="font-heading text-3xl sm:text-4xl tracking-tight text-foreground">
          What clients are saying.
        </h2>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {placeholders.map((t) => (
          <Card key={t.author} className="border-border/60 bg-card/60">
            <CardContent className="p-8">
              <p className="font-heading text-xl leading-relaxed text-foreground/90 italic">
                &ldquo;{t.quote}&rdquo;
              </p>
              <p className="mt-6 text-sm text-muted-foreground tracking-wide">
                — {t.author}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <p className="mt-6 text-center text-xs text-muted-foreground/70">
        Placeholder testimonials — to be replaced with real client words.
      </p>
    </section>
  );
}
