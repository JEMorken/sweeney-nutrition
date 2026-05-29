import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function PortalPreview() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-24">
      <div className="grid items-center gap-12 md:grid-cols-2">
        <div>
          <p className="text-sm uppercase tracking-widest text-accent/85">
            The client portal
          </p>
          <h2 className="mt-3 font-heading text-3xl sm:text-4xl tracking-tight text-foreground">
            What tracking looks like with me.
          </h2>
          <div className="mt-5 space-y-4 text-lg text-foreground/85 leading-relaxed">
            <p>
              No weight number. No calorie count. No progress ring. Just
              habits, mood, energy, hunger, and the sentence you wrote about
              how the day actually went.
            </p>
            <p>
              I read your reflections. My replies show up next to them. It&rsquo;s
              a conversation, not a dashboard.
            </p>
          </div>
          <div className="mt-7 flex flex-col sm:flex-row sm:items-center gap-4">
            <Link
              href="/portal/dashboard"
              className={cn(
                buttonVariants({ variant: "default" }),
                "h-auto text-base px-6 py-3"
              )}
            >
              Peek inside the demo
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <span className="text-sm text-muted-foreground">
              No login. Just a look.
            </span>
          </div>
        </div>

        <PreviewTile />
      </div>
    </section>
  );
}

function PreviewTile() {
  return (
    <div className="relative" aria-hidden="true">
      <div className="absolute -right-3 -top-3 h-full w-full rounded-2xl bg-secondary/55 border border-border/40" />

      <div className="relative rounded-2xl bg-card/95 border border-border/60 p-6 shadow-xl shadow-foreground/8 backdrop-blur-sm">
        <div className="rounded-xl bg-gradient-to-br from-primary/12 via-secondary/40 to-primary/5 border border-primary/25 p-4">
          <p className="text-[10px] uppercase tracking-widest text-primary/80">
            Rhythms you&rsquo;re building
          </p>
          <p className="mt-2 font-heading text-3xl text-foreground leading-none">
            12 days
          </p>
          <p className="mt-1.5 text-sm text-foreground/75 leading-snug">
            of pausing for hunger before eating
          </p>
        </div>

        <div className="mt-5 space-y-2">
          <HabitRow label="Move my body, however felt right" done />
          <HabitRow label="Notice hunger before eating" done />
          <HabitRow label="Get outside (10+ minutes)" />
        </div>

        <div className="mt-5 rounded-xl bg-secondary/50 p-4">
          <p className="text-[10px] uppercase tracking-wider text-muted-foreground">
            Your reflection on the day
          </p>
          <p className="mt-1.5 font-heading text-[15px] leading-relaxed text-foreground/85 italic">
            &ldquo;Something is loosening. It hasn&rsquo;t been easy. But something is.&rdquo;
          </p>
        </div>

        <div className="mt-3 flex items-start gap-2 text-sm">
          <span className="font-medium text-foreground">Caroline:</span>
          <span className="italic text-foreground/75">
            &ldquo;Exactly the language I hoped you&rsquo;d find.&rdquo;
          </span>
        </div>
      </div>
    </div>
  );
}

function HabitRow({ label, done = false }: { label: string; done?: boolean }) {
  return (
    <div
      className={cn(
        "flex items-center gap-3 rounded-lg border px-3 py-2.5",
        done
          ? "border-primary/35 bg-primary/8"
          : "border-border/70 bg-background/40"
      )}
    >
      <span
        className={cn(
          "flex h-5 w-5 shrink-0 items-center justify-center rounded-full border",
          done
            ? "border-primary bg-primary text-primary-foreground"
            : "border-foreground/30"
        )}
      >
        {done && <Check className="h-3 w-3" strokeWidth={3} />}
      </span>
      <span
        className={cn(
          "text-sm leading-snug",
          done ? "text-foreground" : "text-foreground/65"
        )}
      >
        {label}
      </span>
    </div>
  );
}
