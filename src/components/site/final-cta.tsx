import Link from "next/link";
import { Button } from "@/components/ui/button";

export function FinalCta() {
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-3xl px-6 py-20 text-center">
        <h2 className="font-heading text-3xl sm:text-4xl tracking-tight">
          Curious if this might be a fit?
        </h2>
        <p className="mt-5 text-lg sm:text-xl leading-relaxed text-primary-foreground/85">
          The discovery call is free, low-pressure, and 30 minutes. You&rsquo;ll
          know quickly whether we&rsquo;re right for each other.
        </p>
        <Button
          asChild
          size="lg"
          variant="secondary"
          className="mt-8 text-base px-7 py-6"
        >
          <Link href="/contact">Book a discovery call</Link>
        </Button>
      </div>
    </section>
  );
}
