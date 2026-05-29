import Link from "next/link";
import { PageHeader } from "@/components/site/page-header";
import { FinalCta } from "@/components/site/final-cta";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

export const metadata = {
  title: "Work With Me — Sweeney Nutrition",
  description:
    "Packages, pricing, and how to start. 1:1 holistic nutrition coaching with Caroline. Discovery call is free.",
};

type Tier = {
  name: string;
  blurb: string;
  price: string;
  cadence: string;
  features: string[];
  featured?: boolean;
  cta: string;
  ctaHref: string;
};

const tiers: Tier[] = [
  {
    name: "Initial Reset",
    blurb: "A guided three-month start for clients new to this work.",
    price: "$1,800",
    cadence: "3 months · billed upfront",
    features: [
      "First 90-minute deep-dive session",
      "Eleven weekly 45-minute sessions",
      "Async messaging in between",
      "Welcome materials and practice guides",
      "Quarterly review at the close",
    ],
    cta: "Book a discovery call",
    ctaHref: "/contact",
  },
  {
    name: "Ongoing Partnership",
    blurb: "The longer arc. For clients ready to commit to real change.",
    price: "$450",
    cadence: "per month · 6-month minimum",
    features: [
      "Bi-weekly 45-minute sessions",
      "Unlimited async messaging",
      "Quarterly zoom-out review",
      "Priority scheduling",
      "First access to workshops",
    ],
    featured: true,
    cta: "Book a discovery call",
    ctaHref: "/contact",
  },
  {
    name: "Maintenance",
    blurb: "Single sessions for past clients who want occasional check-ins.",
    price: "$200",
    cadence: "per session",
    features: [
      "60-minute single session",
      "Available to past clients",
      "Booked as you need it",
      "Practice updates and reflection",
    ],
    cta: "Email me",
    ctaHref: "/contact",
  },
];

const faqs = [
  {
    q: "How are sessions held?",
    a: "Over Zoom video. I work with clients across the US and a handful internationally. The portal is where you write reflections and message me between sessions.",
  },
  {
    q: "What if I need to cancel a session?",
    a: "With 24 hours' notice, no fee — we reschedule. Less than 24 hours, the session fee applies. Life happens; I extend grace once.",
  },
  {
    q: "Do you take insurance?",
    a: "Not directly. I can provide a superbill for HSA / FSA reimbursement, and many clients are reimbursed at least partially. I'm happy to talk through it on the discovery call.",
  },
  {
    q: "What if I'm not sure which package is right?",
    a: "That's exactly what the discovery call is for. Most clients start with the Initial Reset or move into the Ongoing Partnership; we figure it out together.",
  },
  {
    q: "Can I switch between packages later?",
    a: "Yes. Many clients start in the Initial Reset and roll into the Ongoing Partnership when those three months end. We re-decide at the quarterly review.",
  },
];

export default function WorkWithMePage() {
  return (
    <>
      <PageHeader
        eyebrow="Work with me"
        heading="Packages, pricing, and how to start."
        subhead="Long-term work, structured to actually land. The discovery call is free."
      />

      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="grid gap-6 md:grid-cols-3 items-stretch">
          {tiers.map((t) => (
            <Card
              key={t.name}
              className={cn(
                "flex flex-col border bg-card/70",
                t.featured
                  ? "border-primary/45 shadow-lg shadow-primary/8 md:scale-[1.02]"
                  : "border-border/60"
              )}
            >
              <CardContent className="flex flex-1 flex-col p-6 sm:p-7">
                {t.featured && (
                  <Badge
                    variant="secondary"
                    className="self-start bg-primary text-primary-foreground border-primary/0"
                  >
                    Most chosen
                  </Badge>
                )}
                <h3 className="mt-3 font-heading text-2xl text-foreground">
                  {t.name}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {t.blurb}
                </p>
                <div className="mt-5 flex items-baseline gap-2">
                  <span className="font-heading text-4xl text-foreground leading-none">
                    {t.price}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    {t.cadence}
                  </span>
                </div>

                <ul className="mt-6 space-y-2.5 text-sm text-foreground/85">
                  {t.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <Check
                        className="mt-0.5 h-4 w-4 shrink-0 text-primary"
                        strokeWidth={2.5}
                      />
                      <span className="leading-snug">{f}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={t.ctaHref}
                  className={cn(
                    buttonVariants({
                      variant: t.featured ? "default" : "outline",
                    }),
                    "mt-7 h-auto text-base py-3 px-5 justify-center"
                  )}
                >
                  {t.cta}
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-muted-foreground max-w-xl mx-auto">
          All packages include the client portal and full access to me between
          sessions. No package locks you in beyond its term.
        </p>
      </section>

      <section className="bg-secondary/45">
        <div className="mx-auto max-w-3xl px-6 py-20">
          <h2 className="font-heading text-3xl sm:text-4xl tracking-tight text-foreground text-center">
            Practical questions.
          </h2>
          <Accordion className="mt-10">
            {faqs.map(({ q, a }, i) => (
              <AccordionItem
                key={q}
                value={`item-${i}`}
                className="border-border/60"
              >
                <AccordionTrigger className="font-heading text-lg text-foreground hover:no-underline text-left">
                  {q}
                </AccordionTrigger>
                <AccordionContent className="text-base text-foreground/80 leading-relaxed">
                  {a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
