import { Card, CardContent } from "@/components/ui/card";
import { Calendar } from "lucide-react";
import { HabitsChecklist } from "./habits-checklist";
import { DotScale } from "./dot-scale";
import { MessagesThread } from "./messages-thread";
import { rhythms, week, messages } from "./portal-data";

export function DayView() {
  const today = week[week.length - 1];

  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_22rem]">
      <div className="space-y-8">
        <Card className="border-border/60 bg-card/70">
          <CardContent className="p-6">
            <div className="flex items-baseline justify-between">
              <h2 className="font-heading text-2xl text-foreground">
                Today&rsquo;s habits
              </h2>
              <span className="text-sm text-muted-foreground">
                Tap to toggle
              </span>
            </div>
            <div className="mt-5">
              <HabitsChecklist initial={today.habits} />
            </div>
          </CardContent>
        </Card>

        <div className="grid gap-4 sm:grid-cols-3">
          <Card className="border-border/60 bg-card/70">
            <CardContent className="p-5">
              <DotScale label="Mood" value={today.mood} accent="primary" />
            </CardContent>
          </Card>
          <Card className="border-border/60 bg-card/70">
            <CardContent className="p-5">
              <DotScale label="Energy" value={today.energy} accent="accent" />
            </CardContent>
          </Card>
          <Card className="border-border/60 bg-card/70">
            <CardContent className="p-5">
              <DotScale
                label="Hunger today"
                value={today.hunger}
                accent="muted"
              />
            </CardContent>
          </Card>
        </div>

        <Card className="border-border/60 bg-card/70">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <h2 className="font-heading text-2xl text-foreground">
                Today&rsquo;s reflection
              </h2>
              <span className="text-sm text-muted-foreground">Sunday</span>
            </div>
            <p className="mt-4 font-heading text-lg leading-relaxed text-foreground/85 italic">
              &ldquo;{today.journal}&rdquo;
            </p>
            <button className="mt-5 text-sm text-primary hover:underline">
              Edit reflection →
            </button>
          </CardContent>
        </Card>
      </div>

      <aside className="space-y-6">
        <MessagesThread messages={messages} />

        <Card className="border-primary/30 bg-primary/8">
          <CardContent className="p-5">
            <div className="flex items-start gap-3">
              <Calendar className="mt-0.5 h-5 w-5 text-primary" />
              <div>
                <h3 className="font-heading text-base text-foreground">
                  Your check-in is Tuesday
                </h3>
                <p className="mt-1 text-sm text-foreground/80 leading-relaxed">
                  10:00 AM, video. Start your reflection ahead of time so we can
                  go deeper in the session.
                </p>
                <button className="mt-3 text-sm font-medium text-primary hover:underline">
                  Start reflection →
                </button>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-border/60 bg-card/70">
          <CardContent className="p-5">
            <h3 className="font-heading text-lg text-foreground">Rhythms</h3>
            <ul className="mt-4 space-y-3.5">
              {rhythms.map((r) => (
                <li key={r.label}>
                  <div className="flex items-baseline gap-2">
                    <span className="font-heading text-2xl text-accent">
                      {r.value}
                    </span>
                    <span className="text-sm text-foreground/75 leading-snug">
                      {r.label}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </aside>
    </div>
  );
}
