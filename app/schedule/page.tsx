import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Marquee } from "@/components/layout/Marquee";
import { SectionLabel } from "@/components/type/SectionLabel";
import { PhoneCTA } from "@/components/shared/PhoneCTA";
import { BUSINESS } from "@/lib/config";

export const metadata: Metadata = {
  title: "Schedule",
  description: `Class schedule for B2T Boxing in Portland, OR. Call or text ${BUSINESS.phone.display} for current class times.`,
};

const TICKER_ITEMS = [
  "Schedule Coming Soon",
  "Call for Current Times",
  BUSINESS.phone.display,
  BUSINESS.address.streetDisplay,
  BUSINESS.hours.display,
];

export default function SchedulePage() {
  return (
    <>
      <Marquee items={TICKER_ITEMS} />
      <Header />
      <main>
        <section className="bg-ink min-h-[80vh] flex items-center px-5 md:px-10 py-24">
          <div className="max-w-[1600px] mx-auto w-full">
            <SectionLabel number="06" label="Schedule" />

            <h1 className="font-display uppercase text-[clamp(3.5rem,10vw,11rem)] leading-[0.85] mt-8">
              Schedule<br />
              <span className="text-bone/30">Coming Soon.</span>
            </h1>

            <div className="mt-12 border-t border-smoke pt-12 max-w-2xl">
              <p className="font-body text-bone/70 text-lg leading-relaxed">
                We&apos;re finalizing the class schedule. In the meantime, call
                or text us to ask about current session times — we&apos;ll get
                you set up.
              </p>
              <div className="mt-8">
                <PhoneCTA variant="buttons" />
              </div>
              <p className="stamp text-bone/40 mt-8">
                {BUSINESS.phone.display}&nbsp;&nbsp;·&nbsp;&nbsp;{BUSINESS.hours.display}
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
