import { SectionLabel } from "@/components/type/SectionLabel";
import { PulledQuote } from "@/components/type/PulledQuote";
import { BUSINESS } from "@/lib/config";

export function MissionBlock() {
  return (
    <section className="bg-bone text-ink px-5 md:px-10 py-24 md:py-36">
      <div className="max-w-[1600px] mx-auto">
        <SectionLabel
          number="01"
          label="Our Mission"
          className="[&>span]:text-ink/60 [&>span:nth-child(2)]:text-ink [&>span:last-child]:text-ink"
        />
        <div className="mt-10 md:mt-16 max-w-4xl">
          <PulledQuote
            className="[&_blockquote]:text-ink [&_.font-editorial]:text-blood/80"
          >
            {BUSINESS.mission}
          </PulledQuote>
          <div className="mt-10 h-1 w-24 bg-blood" />
        </div>
        <p className="mt-10 font-body text-ink/70 text-base md:text-lg max-w-xl leading-relaxed">
          B2T Boxing is Portland&apos;s home for serious boxing instruction —
          from first-timers to competitive fighters. Our coaches have been in
          the ring. They know what it takes.
        </p>
      </div>
    </section>
  );
}
