import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function AboutPreview() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-24">
      <div className="grid items-center gap-12 md:grid-cols-2">
        <div
          aria-hidden="true"
          className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl"
        >
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(160deg, oklch(0.78 0.060 75) 0%, oklch(0.68 0.080 50) 45%, oklch(0.45 0.040 230) 100%)",
            }}
          />
          <svg
            viewBox="0 0 400 500"
            preserveAspectRatio="xMidYMax slice"
            className="absolute inset-0 w-full h-full"
          >
            <path
              d="M0 500 L0 320 L60 240 L110 290 L160 200 L220 270 L270 180 L320 250 L360 220 L400 280 L400 500 Z"
              fill="oklch(0.32 0.025 245)"
              fillOpacity="0.85"
            />
            <path
              d="M0 500 L0 400 L70 360 L140 400 L220 350 L300 395 L380 360 L400 380 L400 500 Z"
              fill="oklch(0.50 0.030 130)"
              fillOpacity="0.85"
            />
          </svg>
        </div>

        <div>
          <h2 className="font-heading text-3xl sm:text-4xl tracking-tight text-foreground">
            Hi, I&rsquo;m Caroline.
          </h2>
          <div className="mt-5 space-y-4 text-lg text-foreground/85 leading-relaxed">
            <p>
              I&rsquo;m a holistic nutritionist who works with women who are done
              with crash diets, color-coded meal plans, and the quiet shame that
              comes with both. My approach is patient, evidence-grounded, and
              fundamentally about trust — yours, in your body.
            </p>
            <p>
              I live in Wyoming, work with clients everywhere, and believe the
              best nutrition advice usually sounds less like a prescription and
              more like a long, honest conversation.
            </p>
          </div>
          <Link
            href="/about"
            className="mt-6 inline-flex items-center gap-2 text-base font-medium text-primary hover:gap-3 transition-all"
          >
            Read more about my approach
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
