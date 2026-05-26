import Image from "next/image";
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
        <div className="mt-10 md:mt-16 grid md:grid-cols-2 gap-16 md:gap-24 items-start">
          <div>
            <PulledQuote
              className="[&_blockquote]:text-ink [&_.font-editorial]:text-blood/80"
            >
              {BUSINESS.mission}
            </PulledQuote>
            <div className="mt-10 h-1 w-24 bg-blood" />
            <p className="mt-10 font-body text-ink/70 text-base md:text-lg max-w-xl leading-relaxed">
              B2T Boxing is Portland&apos;s home for serious boxing instruction.
              First-timers to competitive fighters. Our coaches have been in
              the ring. They know what it takes.
            </p>
          </div>
          <div className="relative aspect-[4/3] w-full overflow-hidden">
            <Image
              src="/images/gym/golden-gloves-2019.jpg"
              alt="B2T Boxing team at Oregon Golden Gloves 2019"
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <span className="absolute bottom-4 left-4 stamp text-bone/80 bg-ink/60 px-2 py-1">
              Oregon Golden Gloves 2019
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
