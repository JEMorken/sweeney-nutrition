import { PeakMark } from "./peak-mark";

const steps = [
  {
    n: "01",
    title: "A discovery call",
    desc: "30 minutes, free, no commitment. We talk about what you're carrying and whether I'm the right person to help.",
  },
  {
    n: "02",
    title: "A personalized approach",
    desc: "Caroline meets you where you are — your life, your kitchen, your body. No copy-pasted protocols.",
  },
  {
    n: "03",
    title: "Weekly check-ins",
    desc: "Sustainable change at a sustainable pace. We adjust as you grow, with steady support along the way.",
  },
];

export function HowItWorks() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-24">
      <div className="text-center">
        <h2 className="font-heading text-3xl sm:text-4xl tracking-tight text-foreground">
          How it works.
        </h2>
      </div>

      <div className="mt-14 grid gap-10 md:grid-cols-3">
        {steps.map(({ n, title, desc }) => (
          <div key={n} className="text-center md:text-left">
            <span className="font-heading text-3xl text-accent">{n}</span>
            <h3 className="mt-2 font-heading text-xl text-foreground">{title}</h3>
            <p className="mt-2 text-base text-muted-foreground leading-relaxed">
              {desc}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-16 flex justify-center">
        <PeakMark variant="divider" className="text-foreground/25" />
      </div>
    </section>
  );
}
