import Link from "next/link";

export default function ApproachPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-28 text-center">
      <p className="text-sm uppercase tracking-widest text-muted-foreground">
        Approach
      </p>
      <h1 className="mt-4 font-heading text-4xl sm:text-5xl tracking-tight text-foreground">
        How I actually work.
      </h1>
      <p className="mt-6 text-lg text-foreground/75 leading-relaxed">
        This is where the full philosophy lives — the science, the values, and
        what working together really looks like week to week. Coming soon.
      </p>
      <Link
        href="/"
        className="mt-10 inline-block text-base font-medium text-primary hover:underline"
      >
        ← Back home
      </Link>
    </section>
  );
}
