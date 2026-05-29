"use client";

import { useActionState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  submitLead,
  initialContactState,
} from "@/app/actions/contact";

export function ContactForm() {
  const [state, action, pending] = useActionState(
    submitLead,
    initialContactState
  );

  if (state.ok) {
    return (
      <div className="text-center py-8">
        <p className="font-heading text-2xl text-foreground">
          Thank you for reaching out.
        </p>
        <p className="mt-3 text-base text-foreground/80 leading-relaxed">
          I read every message. I&rsquo;ll be in touch within 1–2 business
          days.
        </p>
      </div>
    );
  }

  return (
    <form action={action} className="space-y-5">
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute -left-[9999px] opacity-0 pointer-events-none"
      />

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            name="name"
            placeholder="Your name"
            autoComplete="name"
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="you@example.com"
            autoComplete="email"
            required
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">What&rsquo;s on your mind?</Label>
        <Textarea
          id="message"
          name="message"
          placeholder="A few sentences is plenty — what you've been carrying, what you're hoping for."
          rows={6}
          required
        />
      </div>

      {state.error && (
        <p className="text-sm text-accent">{state.error}</p>
      )}

      <Button
        type="submit"
        disabled={pending}
        className="h-auto w-full text-base py-3"
      >
        {pending ? "Sending…" : "Send message"}
      </Button>
    </form>
  );
}
