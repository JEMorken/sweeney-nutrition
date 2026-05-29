import { PageHeader } from "@/components/site/page-header";
import { FinalCta } from "@/components/site/final-cta";
import { Card, CardContent } from "@/components/ui/card";
import { PeakMark } from "@/components/site/peak-mark";
import {
  Repeat,
  Compass,
  MessageCircle,
  Heart,
  X as XIcon,
} from "lucide-react";

export const metadata = {
  title: "Approach — Sweeney Nutrition",
  description:
    "Caroline's anti-diet, habit-based approach to nutrition. Slow, sustainable, body-trust-first. No meal plans, no scale, no shame.",
};

const pillars = [
  {
    icon: Repeat,
    title: "Habits over rules",
    body: "We don't memorize lists of allowed foods. We build small, repeatable practices — the kind that quietly compound over months. Your habits are yours; mine wouldn't fit your life anyway.",
  },
  {
    icon: Compass,
    title: "Hormones as compass",
    body: "Energy crashes, mood shifts, cycle disruption — these are signals, not symptoms to medicate around. We treat them as data your body is offering you, and work to support them.",
  },
  {
    icon: MessageCircle,
    title: "Hunger as conversation",
    body: "Hunger and fullness aren't the enemy and aren't optional. We relearn how to recognize, trust, and respond to them — slowly, without judgment.",
  },
  {
    icon: Heart,
    title: "Healing the relationship",
    body: "How you talk to your body matters as much as what you put in it. We tend to that conversation too — because the version of you who's gentle with herself will make different choices than the one fighting herself.",
  },
];

const dontDo = [
  "We don't do meal plans.",
  "We don't recommend tracking apps.",
  "We don't talk about weight unless you bring it up.",
  "We don't have “good” and “bad” foods.",
  "We don't promise quick results.",
  "We don't shame anyone for anything.",
];

const timeline = [
  {
    label: "Week 0",
    title: "Discovery call",
    body: "30 minutes, free, no commitment. Mostly listening on my end — I want to understand what brought you here.",
  },
  {
    label: "Week 1",
    title: "First session",
    body: "90 minutes. We go deep — your history, what's working, what isn't, where you want to end up. You leave with one or two starting practices, not a stack of homework.",
  },
  {
    label: "Weeks 2–12",
    title: "Weekly check-ins",
    body: "45 minutes each. We work in seasons — digestion, hunger, hormones, mindset — depending on what surfaces. You also message me anytime; I read everything.",
  },
  {
    label: "Quarterly",
    title: "Zoom-out review",
    body: "A longer session every three months. We look back at what's shifted, what's still loud, and where to go next.",
  },
];

export default function ApproachPage() {
  return (
    <>
      <PageHeader
        eyebrow="Approach"
        heading="How I actually work."
        subhead="It's slower than you'd like. It works because of that, not in spite of it."
      />

      <section className="mx-auto max-w-3xl px-6 pb-16">
        <div className="space-y-6 text-lg sm:text-xl text-foreground/85 leading-relaxed">
          <p>
            Most nutrition advice assumes you have a willpower problem. I assume
            you have an information problem and a trust problem.
          </p>
          <p>
            The willpower frame says: you know what to do, you just need to do
            it. Push harder. Track more. Restrict longer. The fact that this
            advice has been peddled for forty years and produced an ongoing
            crisis of disordered eating, hormonal dysfunction, and self-hatred
            is rarely mentioned.
          </p>
          <p>
            My approach is the opposite. We assume your body has been giving you
            good information all along — and that you stopped listening because
            the world taught you to. The work is reteaching you to hear it.
          </p>
        </div>
      </section>

      <div className="flex justify-center pb-4">
        <PeakMark variant="divider" className="text-foreground/25 max-w-xs" />
      </div>

      <section className="bg-secondary/45">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <h2 className="font-heading text-3xl sm:text-4xl tracking-tight text-foreground text-center">
            The four pillars.
          </h2>
          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {pillars.map(({ icon: Icon, title, body }) => (
              <Card key={title} className="border-border/60 bg-card/80">
                <CardContent className="p-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/12 text-primary">
                    <Icon className="h-5 w-5" strokeWidth={1.8} />
                  </div>
                  <h3 className="mt-4 font-heading text-xl text-foreground">
                    {title}
                  </h3>
                  <p className="mt-2 text-base text-foreground/80 leading-relaxed">
                    {body}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-20">
        <h2 className="font-heading text-3xl sm:text-4xl tracking-tight text-foreground text-center">
          What we don&rsquo;t do.
        </h2>
        <ul className="mt-10 space-y-3">
          {dontDo.map((line) => (
            <li
              key={line}
              className="flex items-start gap-3 rounded-lg border border-border/60 bg-card/60 px-5 py-4"
            >
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
                <XIcon className="h-4 w-4" strokeWidth={2.5} />
              </span>
              <span className="text-base sm:text-lg text-foreground/85 leading-snug">
                {line}
              </span>
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-secondary/45">
        <div className="mx-auto max-w-3xl px-6 py-20">
          <h2 className="font-heading text-3xl sm:text-4xl tracking-tight text-foreground text-center">
            What it actually looks like.
          </h2>
          <ol className="mt-10 space-y-7">
            {timeline.map((step, i) => (
              <li
                key={step.title}
                className="relative pl-14 sm:pl-16"
              >
                <span className="absolute left-0 top-0 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-primary/15 text-primary font-heading text-base sm:text-lg">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-xs uppercase tracking-widest text-accent/85">
                  {step.label}
                </p>
                <h3 className="mt-1 font-heading text-xl sm:text-2xl text-foreground">
                  {step.title}
                </h3>
                <p className="mt-2 text-base text-foreground/80 leading-relaxed">
                  {step.body}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
