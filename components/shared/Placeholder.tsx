import { cn } from "@/lib/utils";

type Aspect = "3/4" | "4/5" | "4/3" | "16/9" | "1/1";

type Props = {
  /** Aspect ratio of the placeholder. */
  aspect?: Aspect;
  /** Label rendered on the placeholder ("photo coming soon" by default). */
  label?: string;
  /** Optional caption above the label (e.g. coach name). */
  caption?: string;
  className?: string;
  /** Alt text for screen readers, even though it's not yet an image. */
  alt?: string;
};

const ASPECT_CLASS: Record<Aspect, string> = {
  "3/4": "aspect-[3/4]",
  "4/5": "aspect-[4/5]",
  "4/3": "aspect-[4/3]",
  "16/9": "aspect-[16/9]",
  "1/1": "aspect-square",
};

/**
 * Dark editorial placeholder. Used everywhere a photo will eventually live.
 * Owner replaces the file at the corresponding path in /public/images/.
 *
 * No rounded corners. No drop shadow. Just a flat ash block with a stamped
 * label. Subtle crosshairs anchor the eye to center.
 */
export function Placeholder({
  aspect = "3/4",
  label = "Photo coming soon",
  caption,
  className,
  alt,
}: Props) {
  return (
    <div
      role="img"
      aria-label={alt ?? label}
      className={cn(
        "relative w-full overflow-hidden bg-ash border border-smoke",
        ASPECT_CLASS[aspect],
        className,
      )}
    >
      {/* corner ticks */}
      <span className="absolute top-3 left-3 size-2 border-l border-t border-bone/30" />
      <span className="absolute top-3 right-3 size-2 border-r border-t border-bone/30" />
      <span className="absolute bottom-3 left-3 size-2 border-l border-b border-bone/30" />
      <span className="absolute bottom-3 right-3 size-2 border-r border-b border-bone/30" />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        {caption ? (
          <span className="font-display uppercase text-2xl md:text-3xl text-bone/80 leading-tight">
            {caption}
          </span>
        ) : null}
        <span className="stamp text-bone/40 mt-2">{label}</span>
      </div>
    </div>
  );
}
