import { PageHeader } from "@/components/site/page-header";
import { FinalCta } from "@/components/site/final-cta";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export const metadata = {
  title: "About Caroline — Sweeney Nutrition",
  description:
    "Holistic nutritionist, recovering perfectionist, and the friend you wish you'd had on every diet. Caroline's story, training, and how she works.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        heading="Hi, I’m Caroline."
        subhead="Holistic nutritionist, recovering perfectionist, and the friend you wish you’d had on every diet."
      />

      <section className="mx-auto max-w-5xl px-6 pb-20">
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

          <div className="space-y-5 text-lg text-foreground/85 leading-relaxed">
            <p>
              I&rsquo;m Caroline Sweeney. I work with women who are tired of the
              diet rollercoaster and ready to do something that actually lasts —
              even though it&rsquo;s slower than they&rsquo;d like, and harder
              than they&rsquo;d hoped.
            </p>
            <p>
              I&rsquo;m a Nutritional Therapy Practitioner trained through the
              Nutritional Therapy Association. I work with clients across the US
              from my home in Wilson, Wyoming. Most of what I do isn&rsquo;t
              about food at all. It&rsquo;s about teaching you to listen to a
              body you&rsquo;ve been arguing with for years.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-secondary/45">
        <div className="mx-auto max-w-3xl px-6 py-20">
          <h2 className="font-heading text-3xl sm:text-4xl tracking-tight text-foreground">
            How I got here.
          </h2>
          <div className="mt-7 space-y-6 text-lg text-foreground/85 leading-relaxed">
            <p>
              I spent eight years in corporate marketing — the kind of career
              that rewarded being smaller, sharper, more controlled. I was at
              what I called my &ldquo;best weight&rdquo; and quietly miserable.
              Every morning started with the scale, every meal with a calorie
              count, every evening with the same negotiation: how much did I
              deserve to eat? It didn&rsquo;t feel like an eating disorder,
              because nothing was &ldquo;severe.&rdquo; It just felt like life.
            </p>
            <p>
              In my early thirties, after a year of unexplained fatigue and a
              cycle that had gone quietly silent, I found a nutritionist who
              didn&rsquo;t hand me a meal plan. She asked me how I felt. She
              asked me what hunger was like. She asked me what I thought my
              body had been trying to tell me. I cried for most of the first
              session.
            </p>
            <p>
              Two years later, I&rsquo;d quit my job, sold most of my apartment
              in Seattle, and moved to Wyoming to train. I started seeing
              clients in 2022. Almost all of them are women in their late
              twenties, thirties, and forties who recognize themselves in some
              version of my story. Most of the work isn&rsquo;t about food.
              It&rsquo;s about repairing trust.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20">
        <h2 className="font-heading text-3xl sm:text-4xl tracking-tight text-foreground text-center">
          Training &amp; credentials.
        </h2>
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          <Card className="border-border/60 bg-card/70">
            <CardContent className="p-6">
              <p className="text-xs uppercase tracking-wider text-accent/85">
                Primary certification
              </p>
              <h3 className="mt-2 font-heading text-xl text-foreground">
                Nutritional Therapy Practitioner (NTP)
              </h3>
              <p className="mt-2 text-base text-muted-foreground leading-relaxed">
                Nutritional Therapy Association · 2022. Foundational training in
                whole-food nutrition, digestion, blood-sugar regulation, and
                bio-individual practice.
              </p>
            </CardContent>
          </Card>
          <Card className="border-border/60 bg-card/70">
            <CardContent className="p-6">
              <p className="text-xs uppercase tracking-wider text-accent/85">
                Continuing education
              </p>
              <h3 className="mt-2 font-heading text-xl text-foreground">
                Women&rsquo;s health &amp; behavior change
              </h3>
              <p className="mt-2 text-base text-muted-foreground leading-relaxed">
                Ongoing training in women&rsquo;s hormonal health, gut-brain
                connection, and behavior-change frameworks rooted in motivational
                interviewing.
              </p>
            </CardContent>
          </Card>
        </div>
        <Separator className="mt-12" />
        <p className="mt-6 text-center text-sm text-muted-foreground max-w-xl mx-auto">
          Member, National Association of Nutritional Professionals. Bound by
          its code of ethics and scope-of-practice guidelines.
        </p>
      </section>

      <section className="bg-secondary/40">
        <div className="mx-auto max-w-3xl px-6 py-20">
          <h2 className="font-heading text-3xl sm:text-4xl tracking-tight text-foreground">
            Outside the work.
          </h2>
          <p className="mt-6 text-lg text-foreground/85 leading-relaxed">
            I live in Wilson with my partner and a hopeful-but-uncoordinated
            dog. I run badly, ski reasonably, and cook most nights — usually
            with too much olive oil and not enough planning. On the best days I
            forget to think about my body at all. Those are the days I want for
            my clients too.
          </p>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
