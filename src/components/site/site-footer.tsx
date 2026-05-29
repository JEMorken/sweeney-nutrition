import Link from "next/link";
import { Camera, Mail } from "lucide-react";
import { PeakMark } from "./peak-mark";
import { Separator } from "@/components/ui/separator";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-secondary/40">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2">
              <PeakMark className="h-5 w-8" />
              <span className="font-heading text-xl tracking-tight">
                Sweeney Nutrition
              </span>
            </div>
            <p className="mt-3 text-sm text-muted-foreground max-w-xs leading-relaxed">
              Holistic nutrition for women ready to stop fighting their body
              and start trusting it.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-medium text-foreground">Explore</h3>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/about" className="hover:text-foreground transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/approach" className="hover:text-foreground transition-colors">
                  Approach
                </Link>
              </li>
              <li>
                <Link href="/work-with-me" className="hover:text-foreground transition-colors">
                  Work With Me
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-foreground transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-medium text-foreground">Get in touch</h3>
            <div className="mt-3 flex items-center gap-3 text-muted-foreground">
              <a
                href="#"
                aria-label="Instagram"
                className="hover:text-foreground transition-colors"
              >
                <Camera className="h-5 w-5" />
              </a>
              <a
                href="#"
                aria-label="Email"
                className="hover:text-foreground transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
            <p className="mt-3 text-sm text-muted-foreground">
              Wyoming-based · available everywhere.
            </p>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between text-xs text-muted-foreground">
          <p>
            © {new Date().getFullYear()} Sweeney Nutrition. All rights reserved.
          </p>
          <p>Wyoming-based · available everywhere.</p>
        </div>
      </div>
    </footer>
  );
}
