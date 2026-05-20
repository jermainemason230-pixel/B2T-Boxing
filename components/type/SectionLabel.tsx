import { cn } from "@/lib/utils";

type Props = {
  number: string;
  label: string;
  className?: string;
};

/**
 * Numbered editorial label: "01 / PROGRAMS"
 * The number sits before a slash. A blood dot anchors the eye.
 */
export function SectionLabel({ number, label, className }: Props) {
  return (
    <div
      className={cn(
        "stamp flex items-center gap-3 text-bone/70",
        className,
      )}
    >
      <span className="inline-block h-2 w-2 bg-blood" aria-hidden />
      <span className="text-bone">{number}</span>
      <span className="text-bone/40">/</span>
      <span className="text-bone">{label}</span>
    </div>
  );
}
