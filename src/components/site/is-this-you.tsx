import { Card, CardContent } from "@/components/ui/card";
import { Repeat, BatteryLow, Moon, Calculator } from "lucide-react";

const items = [
  {
    icon: Repeat,
    text: "You've tried every diet — and gained it all back.",
  },
  {
    icon: BatteryLow,
    text: "Your energy crashes by 3pm and you can't figure out why.",
  },
  {
    icon: Moon,
    text: "Your cycle feels off and your bloodwork is “normal.”",
  },
  {
    icon: Calculator,
    text: "You're tired of counting almonds.",
  },
];

export function IsThisYou() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-24">
      <div className="text-center">
        <h2 className="font-heading text-3xl sm:text-4xl tracking-tight text-foreground">
          Does any of this sound familiar?
        </h2>
      </div>

      <div className="mt-12 grid gap-5 sm:grid-cols-2">
        {items.map(({ icon: Icon, text }) => (
          <Card
            key={text}
            className="border-border/60 bg-card/60 backdrop-blur-sm"
          >
            <CardContent className="flex items-start gap-4 p-6">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary text-accent">
                <Icon className="h-5 w-5" strokeWidth={1.8} />
              </div>
              <p className="text-lg text-foreground/85 leading-relaxed">
                {text}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <p className="mt-12 text-center font-heading text-xl sm:text-2xl text-accent italic">
        You&rsquo;re not broken. The approach is.
      </p>
    </section>
  );
}
