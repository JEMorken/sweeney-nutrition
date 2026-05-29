import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

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
        <Link
          href="/contact"
          className={cn(
            buttonVariants({ variant: "secondary" }),
            "mt-8 h-auto text-base px-7 py-3"
          )}
        >
          Book a discovery call
        </Link>
      </div>
    </section>
  );
}
