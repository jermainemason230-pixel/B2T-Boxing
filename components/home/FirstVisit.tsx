import { SectionLabel } from "@/components/type/SectionLabel";
import { DisplayHeading } from "@/components/type/DisplayHeading";

const BRING = [
  "Athletic clothes + shoes",
  "An open mind",
];

const PROVIDED = [
  "Gloves",
  "Hand wraps",
];

export function FirstVisit() {
  return (
    <section className="bg-bone text-ink px-5 md:px-10 py-24 md:py-36">
      <div className="max-w-[1600px] mx-auto">
        <SectionLabel
          number="04"
          label="First Visit"
          className="[&>span]:text-ink/60 [&>span:nth-child(2)]:text-ink [&>span:last-child]:text-ink"
        />
        <DisplayHeading
          as="h2"
          className="text-[clamp(3rem,7vw,7rem)] mt-6 text-ink"
        >
          What to bring.
        </DisplayHeading>

        <div className="mt-16 grid md:grid-cols-2 gap-16 md:gap-24">
          {/* left — editorial paragraph */}
          <div className="space-y-6">
            <p className="font-body text-ink/80 text-lg leading-relaxed max-w-prose">
              No experience needed. Walk in wearing athletic clothes. We&apos;ll
              handle the rest — gloves and hand wraps are on us for your first
              session.
            </p>
            <p className="font-body text-ink/80 text-lg leading-relaxed max-w-prose">
              Sparring is available for those who want it. All levels work at
              the gym — from first-timers to amateur competitors. No one is
              going to make you feel out of place.
            </p>
          </div>

          {/* right — stamped lists */}
          <div className="space-y-10">
            <div>
              <p className="stamp text-ink/40 mb-4">You bring</p>
              <ul className="space-y-3">
                {BRING.map((item) => (
                  <li
                    key={item}
                    className="font-display uppercase text-2xl md:text-3xl flex items-start gap-4"
                  >
                    <span className="text-blood mt-1 text-xl" aria-hidden>+</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t border-ink/20 pt-10">
              <p className="stamp text-ink/40 mb-4">We provide</p>
              <ul className="space-y-3">
                {PROVIDED.map((item) => (
                  <li
                    key={item}
                    className="font-display uppercase text-2xl md:text-3xl flex items-start gap-4"
                  >
                    <span className="text-blood mt-1 text-xl" aria-hidden>+</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
