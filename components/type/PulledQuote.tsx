import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
  className?: string;
  attribution?: string;
};

/**
 * Editorial pulled quote in Instrument Serif italic. Used 1-3 places
 * site-wide max; treat as a load-bearing typographic gesture, not decoration.
 */
export function PulledQuote({ children, className, attribution }: Props) {
  return (
    <figure className={cn("relative", className)}>
      <span
        aria-hidden
        className="font-editorial italic text-blood select-none absolute -top-12 -left-2 text-[12rem] leading-none"
      >
        “
      </span>
      <blockquote className="font-editorial italic text-[clamp(2rem,5vw,5rem)] leading-[1.1] text-pretty">
        {children}
      </blockquote>
      {attribution ? (
        <figcaption className="stamp mt-6 text-bone/60">
          — {attribution}
        </figcaption>
      ) : null}
    </figure>
  );
}
