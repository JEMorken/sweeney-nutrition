import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { PeakMark } from "@/components/site/peak-mark";
import { LoginForm } from "@/components/portal/login-form";

export const metadata = {
  title: "Client Login — Sweeney Nutrition",
};

export default function PortalLoginPage() {
  return (
    <section className="relative isolate min-h-[calc(100vh-4rem)] overflow-hidden flex items-center">
      <svg
        aria-hidden="true"
        viewBox="0 0 1440 600"
        preserveAspectRatio="xMidYMax slice"
        className="absolute inset-x-0 bottom-0 -z-10 w-full h-[45%] opacity-50"
      >
        <path
          d="M0 600 L0 380 L130 280 L210 360 L300 220 L400 320 L500 180 L620 300 L760 130 L880 280 L1000 200 L1100 320 L1230 240 L1320 340 L1440 280 L1440 600 Z"
          fill="oklch(0.45 0.025 240)"
          fillOpacity="0.35"
        />
        <path
          d="M0 600 L0 470 L100 410 L200 480 L320 380 L440 460 L560 360 L680 450 L820 360 L960 460 L1100 400 L1220 480 L1360 420 L1440 470 L1440 600 Z"
          fill="oklch(0.55 0.040 130)"
          fillOpacity="0.35"
        />
      </svg>

      <div className="mx-auto w-full max-w-md px-6 py-16">
        <div className="flex justify-center">
          <PeakMark className="h-8 w-12 text-primary" />
        </div>

        <div className="mt-4 text-center">
          <p className="text-xs uppercase tracking-widest text-muted-foreground">
            Sweeney Nutrition
          </p>
          <h1 className="mt-2 font-heading text-3xl sm:text-4xl tracking-tight text-foreground">
            Welcome back.
          </h1>
          <p className="mt-2 text-base text-foreground/75">
            Sign in to your client portal.
          </p>
        </div>

        <Card className="mt-8 border-border/60 bg-card/90 backdrop-blur-sm shadow-lg shadow-foreground/5">
          <CardContent className="p-7 sm:p-8">
            <LoginForm />

            <div className="my-6 flex items-center gap-3">
              <span className="h-px flex-1 bg-border" />
              <span className="text-xs uppercase tracking-widest text-muted-foreground">
                or
              </span>
              <span className="h-px flex-1 bg-border" />
            </div>

            <Link
              href="/portal/dashboard"
              className="block text-center text-base font-medium text-primary hover:underline"
            >
              View the demo without an account →
            </Link>
          </CardContent>
        </Card>

        <p className="mt-6 text-center text-xs text-muted-foreground">
          This is a demo site — sign-in is not yet wired to a real account
          system.
        </p>

        <p className="mt-3 text-center text-sm">
          <Link
            href="/contact"
            className="text-muted-foreground hover:text-foreground"
          >
            Not a client yet? Book a discovery call →
          </Link>
        </p>
      </div>
    </section>
  );
}
