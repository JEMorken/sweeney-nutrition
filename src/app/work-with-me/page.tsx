import Link from "next/link";

export default function WorkWithMePage() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-28 text-center">
      <p className="text-sm uppercase tracking-widest text-muted-foreground">
        Work With Me
      </p>
      <h1 className="mt-4 font-heading text-4xl sm:text-5xl tracking-tight text-foreground">
        Packages &amp; pricing.
      </h1>
      <p className="mt-6 text-lg text-foreground/75 leading-relaxed">
        The full breakdown of how to work with me — packages, what&rsquo;s
        included, and pricing — lives here. Still being written.
      </p>
      <p className="mt-4 text-base text-muted-foreground">
        In the meantime, the discovery call is free.
      </p>
      <Link
        href="/contact"
        className="mt-10 inline-block text-base font-medium text-primary hover:underline"
      >
        Book a discovery call →
      </Link>
    </section>
  );
}
