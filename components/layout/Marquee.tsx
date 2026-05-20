import { cn } from "@/lib/utils";

type Props = {
  items: string[];
  className?: string;
};

/**
 * Edge-to-edge scrolling ticker. Pure CSS animation, paused on
 * prefers-reduced-motion via the global override in globals.css.
 *
 * Items are rendered twice so the animation can translate `-50%`
 * without seam visible to the viewer.
 */
export function Marquee({ items, className }: Props) {
  return (
    <div
      className={cn(
        "w-full overflow-hidden border-y border-smoke bg-ink",
        className,
      )}
      role="marquee"
      aria-label="Gym info ticker"
    >
      <div className="flex w-max animate-marquee">
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            className="font-display tracking-ticker uppercase text-sm py-3 px-6 whitespace-nowrap text-bone flex items-center gap-6"
          >
            {item}
            <span className="text-blood text-lg leading-none" aria-hidden>
              •
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
