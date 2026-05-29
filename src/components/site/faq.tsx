import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Do you give meal plans?",
    a: "No. Meal plans are short-term scaffolding that fall apart the moment life happens. Instead, we build your own internal sense of what your body needs — meal by meal, season by season. You leave with skills, not a printout.",
  },
  {
    q: "Is this just for weight loss?",
    a: "It's almost never about weight. Clients come in worried about energy, hormones, digestion, mood, their relationship with food. Those are the things we actually work on. Bodies do what they do as you take care of them.",
  },
  {
    q: "What if I don't live near Wyoming?",
    a: "Everything is virtual — calls happen over video, messaging in between. I have clients across the country and a handful internationally.",
  },
  {
    q: "How much does it cost?",
    a: "Full pricing is on the Work With Me page. The discovery call is free, and there's no pressure on it — sometimes we decide together that I'm not the right fit, and that's a useful outcome too.",
  },
  {
    q: "Will you tell me to stop drinking wine?",
    a: "No. I'm not in the business of taking things away. We'll talk honestly about what serves you and what doesn't — and you decide.",
  },
];

export function Faq() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-24">
      <div className="text-center">
        <h2 className="font-heading text-3xl sm:text-4xl tracking-tight text-foreground">
          Things people ask.
        </h2>
      </div>

      <Accordion className="mt-10">
        {faqs.map(({ q, a }, i) => (
          <AccordionItem key={q} value={`item-${i}`} className="border-border/60">
            <AccordionTrigger className="font-heading text-lg text-foreground hover:no-underline text-left">
              {q}
            </AccordionTrigger>
            <AccordionContent className="text-base text-foreground/80 leading-relaxed">
              {a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
