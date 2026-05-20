import { Phone, MessageSquare } from "lucide-react";
import { BUSINESS } from "@/lib/config";
import { cn } from "@/lib/utils";

type Props = {
  /** When `compact`, renders inline text links instead of full buttons. */
  variant?: "buttons" | "compact";
  className?: string;
};

export function PhoneCTA({ variant = "buttons", className }: Props) {
  if (variant === "compact") {
    return (
      <div
        className={cn(
          "flex items-center gap-6 font-display uppercase tracking-wider",
          className,
        )}
      >
        <a
          href={`tel:${BUSINESS.phone.href}`}
          className="inline-flex items-center gap-2 hover:text-blood transition-colors"
        >
          <Phone className="size-4" aria-hidden /> Call
        </a>
        <span className="text-bone/30" aria-hidden>
          •
        </span>
        <a
          href={`sms:${BUSINESS.phone.href}`}
          className="inline-flex items-center gap-2 hover:text-blood transition-colors"
        >
          <MessageSquare className="size-4" aria-hidden /> Text
        </a>
      </div>
    );
  }

  return (
    <div className={cn("flex flex-wrap gap-3", className)}>
      <a
        href={`tel:${BUSINESS.phone.href}`}
        className="group inline-flex items-center gap-3 h-12 md:h-14 px-6 border border-bone/40 hover:bg-bone hover:text-ink hover:border-bone transition-colors font-display uppercase tracking-wider text-base md:text-lg"
      >
        <Phone className="size-4" aria-hidden />
        Call {BUSINESS.phone.display}
      </a>
      <a
        href={`sms:${BUSINESS.phone.href}`}
        className="group inline-flex items-center gap-3 h-12 md:h-14 px-6 border border-bone/40 hover:bg-bone hover:text-ink hover:border-bone transition-colors font-display uppercase tracking-wider text-base md:text-lg"
      >
        <MessageSquare className="size-4" aria-hidden />
        Text Us
      </a>
    </div>
  );
}
