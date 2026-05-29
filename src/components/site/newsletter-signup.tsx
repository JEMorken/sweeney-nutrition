"use client";

import { useActionState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  subscribeToNewsletter,
  initialNewsletterState,
} from "@/app/actions/newsletter";

export function NewsletterSignup() {
  const [state, action, pending] = useActionState(
    subscribeToNewsletter,
    initialNewsletterState
  );

  if (state.ok) {
    return (
      <p className="text-sm text-foreground/85 leading-relaxed">
        You&rsquo;re on the list. Look for the next note from Caroline soon.
      </p>
    );
  }

  return (
    <form action={action} className="space-y-2">
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute -left-[9999px] opacity-0 pointer-events-none"
      />
      <div className="flex flex-col sm:flex-row gap-2">
        <Input
          name="email"
          type="email"
          placeholder="you@example.com"
          required
          autoComplete="email"
          className="bg-background/70"
        />
        <Button
          type="submit"
          disabled={pending}
          variant="secondary"
          className="h-auto text-sm py-2.5 px-4 whitespace-nowrap"
        >
          {pending ? "Adding…" : "Subscribe"}
        </Button>
      </div>
      {state.error && (
        <p className="text-xs text-accent">{state.error}</p>
      )}
    </form>
  );
}
