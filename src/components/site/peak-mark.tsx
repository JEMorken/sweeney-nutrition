import { cn } from "@/lib/utils";

type PeakMarkProps = {
  className?: string;
  variant?: "mark" | "divider";
};

export function PeakMark({ className, variant = "mark" }: PeakMarkProps) {
  if (variant === "divider") {
    return (
      <svg
        viewBox="0 0 400 60"
        xmlns="http://www.w3.org/2000/svg"
        className={cn("w-full max-w-md text-foreground/30", className)}
        aria-hidden="true"
      >
        <path
          d="M0 60 L60 30 L90 45 L140 12 L175 35 L210 8 L250 32 L290 18 L330 40 L370 25 L400 60 Z"
          fill="currentColor"
          fillOpacity="0.55"
        />
        <path
          d="M0 60 L40 42 L80 52 L120 30 L160 48 L200 28 L240 46 L280 36 L320 50 L360 38 L400 60 Z"
          fill="currentColor"
          fillOpacity="0.35"
        />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 48 32"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-6 w-9 text-foreground", className)}
      aria-hidden="true"
    >
      <path
        d="M0 32 L10 12 L16 20 L22 6 L30 18 L36 10 L48 32 Z"
        fill="currentColor"
      />
    </svg>
  );
}
