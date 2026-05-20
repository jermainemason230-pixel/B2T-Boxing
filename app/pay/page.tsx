import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Marquee } from "@/components/layout/Marquee";
import { SectionLabel } from "@/components/type/SectionLabel";
import { DisplayHeading } from "@/components/type/DisplayHeading";
import { Button } from "@/components/ui/Button";
import { Stamp } from "@/components/type/Stamp";
import { BUSINESS, STRIPE_PAYMENT_LINK } from "@/lib/config";

export const metadata: Metadata = {
  title: "Pay Dues",
  description: `Pay your $150 monthly dues online. B2T Boxing, Portland OR. New signups happen in person.`,
};

const TICKER_ITEMS = [
  "Pay Monthly Dues",
  "$150 / Month",
  "Existing Members Only",
  "New Signups In Person",
];

export default function PayPage() {
  return (
    <>
      <Marquee items={TICKER_ITEMS} />
      <Header />
      <main>
        <section className="bg-ink min-h-[80vh] flex items-center px-5 md:px-10 py-24">
          <div className="max-w-[1600px] mx-auto w-full">
            <SectionLabel number="09" label="Pay Dues" />
            <DisplayHeading
              as="h1"
              className="text-[clamp(3.5rem,9vw,10rem)] mt-6"
            >
              Pay monthly dues.
            </DisplayHeading>

            <div className="mt-12 border-t border-smoke pt-12 max-w-2xl space-y-8">
              <div className="space-y-4">
                <p className="font-body text-bone/70 text-lg leading-relaxed">
                  Active members can pay their{" "}
                  <span className="text-bone font-medium">$150 monthly dues</span>{" "}
                  here. New members still sign up in person at the gym.
                </p>
              </div>

              {STRIPE_PAYMENT_LINK ? (
                <Button href={STRIPE_PAYMENT_LINK} className="self-start">
                  Pay $150 Monthly Dues
                </Button>
              ) : (
                <div className="border border-smoke p-8 space-y-4">
                  <p className="font-display uppercase text-2xl">
                    Payment link coming soon.
                  </p>
                  <p className="font-body text-bone/60 text-base">
                    Online payment isn&apos;t set up yet. Please pay in person or
                    call us.
                  </p>
                  <a
                    href={`tel:${BUSINESS.phone.href}`}
                    className="font-display uppercase text-xl hover:text-blood transition-colors block"
                  >
                    {BUSINESS.phone.display}
                  </a>
                </div>
              )}

              <div className="border-t border-smoke pt-8">
                <Stamp className="text-bone/40">Not a member yet?</Stamp>
                <p className="font-display uppercase text-2xl mt-2">
                  New signups happen in person.
                </p>
                <a
                  href="/contact"
                  className="stamp text-blood hover:text-bone transition-colors mt-2 inline-block"
                >
                  Book a free trial →
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
