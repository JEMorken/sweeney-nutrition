type PageHeaderProps = {
  eyebrow: string;
  heading: string;
  subhead?: string;
};

export function PageHeader({ eyebrow, heading, subhead }: PageHeaderProps) {
  return (
    <section className="mx-auto max-w-3xl px-6 pt-20 pb-12 sm:pt-28 sm:pb-16 text-center">
      <p className="text-sm uppercase tracking-widest text-accent/85">
        {eyebrow}
      </p>
      <h1 className="mt-4 font-heading text-4xl sm:text-5xl md:text-6xl tracking-tight text-foreground leading-[1.05]">
        {heading}
      </h1>
      {subhead && (
        <p className="mt-5 text-lg sm:text-xl text-foreground/75 leading-relaxed">
          {subhead}
        </p>
      )}
    </section>
  );
}
