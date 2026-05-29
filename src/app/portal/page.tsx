import Link from "next/link";

export default function PortalPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-28 text-center">
      <p className="text-sm uppercase tracking-widest text-muted-foreground">
        Client Portal
      </p>
      <h1 className="mt-4 font-heading text-4xl sm:text-5xl tracking-tight text-foreground">
        Your private space.
      </h1>
      <p className="mt-6 text-lg text-foreground/75 leading-relaxed">
        The client portal — where you&rsquo;ll track habits, mood, energy, and
        the week&rsquo;s reflections — is being built. It&rsquo;ll be ready
        soon.
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
