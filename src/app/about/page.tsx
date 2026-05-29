import Link from "next/link";

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-28 text-center">
      <p className="text-sm uppercase tracking-widest text-muted-foreground">
        About
      </p>
      <h1 className="mt-4 font-heading text-4xl sm:text-5xl tracking-tight text-foreground">
        More about Caroline.
      </h1>
      <p className="mt-6 text-lg text-foreground/75 leading-relaxed">
        This page is on its way — the long version of who I am, how I trained,
        and how I ended up doing this work. In the meantime, the homepage has
        the short version.
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
