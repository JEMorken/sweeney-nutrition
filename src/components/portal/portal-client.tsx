"use client";

import { useState } from "react";
import { DayView } from "./day-view";
import { WeekView } from "./week-view";
import { cn } from "@/lib/utils";

type Tab = "day" | "week";

export function PortalClient() {
  const [tab, setTab] = useState<Tab>("day");

  const today = new Date("2026-05-31T12:00:00");
  const formattedDate = today.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });

  return (
    <section className="mx-auto max-w-6xl px-6 py-12 lg:py-16">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm uppercase tracking-widest text-muted-foreground">
            Your portal
          </p>
          <h1 className="mt-2 font-heading text-3xl sm:text-4xl tracking-tight text-foreground">
            Welcome back, Megan.
          </h1>
          <p className="mt-1 text-base text-muted-foreground">
            {formattedDate}
          </p>
        </div>

        <div
          role="tablist"
          aria-label="Portal view"
          className="inline-flex self-start rounded-full border border-border/70 bg-card/60 p-1 backdrop-blur-sm"
        >
          {(["day", "week"] as const).map((t) => (
            <button
              key={t}
              role="tab"
              aria-selected={tab === t}
              onClick={() => setTab(t)}
              className={cn(
                "rounded-full px-5 py-1.5 text-sm transition-colors",
                tab === t
                  ? "bg-primary text-primary-foreground"
                  : "text-foreground/70 hover:text-foreground"
              )}
            >
              {t === "day" ? "Today" : "This month"}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-10">
        {tab === "day" ? <DayView /> : <WeekView />}
      </div>

      <p className="mt-16 text-center text-xs text-muted-foreground/70">
        Demo portal — data is illustrative. The real portal is coming.
      </p>
    </section>
  );
}
