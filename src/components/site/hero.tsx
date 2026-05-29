import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20"
        style={{
          background:
            "linear-gradient(180deg, oklch(0.28 0.055 260) 0%, oklch(0.38 0.080 295) 22%, oklch(0.52 0.115 25) 50%, oklch(0.68 0.105 50) 72%, oklch(0.82 0.060 70) 100%)",
        }}
      />

      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 -z-20 h-[50%]"
        style={{
          background:
            "radial-gradient(ellipse at 60% 70%, oklch(0.85 0.095 55 / 0.45) 0%, transparent 60%)",
        }}
      />

      <svg
        aria-hidden="true"
        viewBox="0 0 1440 600"
        preserveAspectRatio="xMidYMax slice"
        className="absolute inset-x-0 bottom-0 -z-10 w-full h-[62%]"
      >
        <path
          d="M0 600 L0 360 L120 270 L195 340 L290 200 L390 300 L490 170 L610 280 L750 110 L870 270 L990 190 L1090 305 L1220 230 L1310 325 L1440 270 L1440 600 Z"
          fill="oklch(0.20 0.030 255)"
          fillOpacity="0.97"
        />
        <path
          d="M0 600 L0 460 L100 400 L200 470 L320 370 L440 450 L560 350 L680 440 L820 350 L960 450 L1100 390 L1220 470 L1360 410 L1440 460 L1440 600 Z"
          fill="oklch(0.28 0.030 240)"
          fillOpacity="0.95"
        />
        <path
          d="M0 600 L0 540 L160 510 L320 545 L480 515 L640 545 L800 520 L960 550 L1120 525 L1280 555 L1440 530 L1440 600 Z"
          fill="oklch(0.38 0.045 135)"
          fillOpacity="1"
        />
      </svg>

      <div className="relative mx-auto max-w-5xl px-6 pt-32 pb-44 sm:pt-40 sm:pb-52 text-center">
        <Badge
          variant="secondary"
          className="bg-white/12 text-white/95 border-white/20 backdrop-blur-sm"
        >
          Currently accepting new 1:1 clients
        </Badge>
        <h1
          className="mt-6 font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight text-white leading-[1.05]"
          style={{ textShadow: "0 2px 18px oklch(0.18 0.020 250 / 0.45)" }}
        >
          A way of eating you don&rsquo;t have to escape from.
        </h1>
        <p
          className="mt-6 mx-auto max-w-2xl text-lg sm:text-xl text-white/90 leading-relaxed"
          style={{ textShadow: "0 1px 10px oklch(0.18 0.020 250 / 0.4)" }}
        >
          Holistic nutrition for women ready to stop fighting their body and start
          trusting it.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
          <Button asChild size="lg" className="text-base px-7 py-6 shadow-lg shadow-black/20">
            <Link href="/contact">Book a free discovery call</Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="text-base px-7 py-6 bg-white/10 backdrop-blur-sm border-white/35 text-white hover:bg-white/20 hover:text-white"
          >
            <Link href="/approach">See the approach</Link>
          </Button>
        </div>
        <p className="mt-6 text-sm text-white/75">
          30 minutes · free · no commitment
        </p>
      </div>
    </section>
  );
}
