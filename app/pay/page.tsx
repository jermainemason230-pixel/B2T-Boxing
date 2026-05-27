import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Marquee } from "@/components/layout/Marquee";
import { SectionLabel } from "@/components/type/SectionLabel";
import { DisplayHeading } from "@/components/type/DisplayHeading";
import { Button } from "@/components/ui/Button";
import { Stamp } from "@/components/type/Stamp";
import { BUSINESS, STRIPE_PAYMENT_LINK, STRIPE_SIGNUP_LINK, DONATE_LINK } from "@/lib/config";

export const metadata: Metadata = {
  title: "Join & Pay",
  description: `Sign up for B2T Boxing online. $100 enrollment + $150/month. Portland, OR — ${BUSINESS.address.streetDisplay}.`,
};

const TICKER_ITEMS = [
  "Sign Up Online",
  "$100 Enrollment · $150/mo",
  "Pay Dues Online",
  "Support the Gym",
  BUSINESS.address.streetDisplay,
];

const INCLUDED = [
  "Unlimited classes — all five programs",
  "Coach supervision every session",
  "Gloves and wraps for your first visit",
  "Open gym access",
];

export default function PayPage() {
  return (
    <>
      <Marquee items={TICKER_ITEMS} />
      <Header />
      <main>
        <section className="bg-ink px-5 md:px-10 pt-16 pb-24">
          <div className="max-w-[1600px] mx-auto">
            <SectionLabel number="09" label="Join & Pay" />
            <DisplayHeading as="h1" className="text-[clamp(3.5rem,9vw,10rem)] mt-6">
              Join the gym.
            </DisplayHeading>
          </div>
        </section>

        {/* join — new members */}
        <section className="bg-ash px-5 md:px-10 py-24 md:py-36 border-t border-smoke">
          <div className="max-w-[1600px] mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24">
            <div>
              <Stamp className="text-blood">New Members</Stamp>
              <h2 className="font-display uppercase text-[clamp(2rem,5vw,5rem)] leading-[0.85] mt-4">
                Sign up online.
              </h2>

              <div className="mt-10 space-y-4">
                <div className="flex items-baseline gap-4 border-b border-smoke pb-6">
                  <span className="font-display text-blood text-5xl">$100</span>
                  <span className="font-display uppercase text-xl text-bone/60">One-time enrollment</span>
                </div>
                <div className="flex items-baseline gap-4 pb-6">
                  <span className="font-display text-blood text-5xl">$150</span>
                  <span className="font-display uppercase text-xl text-bone/60">Per month</span>
                </div>
              </div>

              <div className="mt-8">
                {STRIPE_SIGNUP_LINK ? (
                  <Button href={STRIPE_SIGNUP_LINK}>
                    Sign Up & Pay Online
                  </Button>
                ) : (
                  <div className="border border-smoke p-8 space-y-4">
                    <p className="font-display uppercase text-xl">Online signup coming soon.</p>
                    <p className="font-body text-bone/60 text-base">
                      Walk in during open hours or call us to get started now.
                    </p>
                    <a
                      href={`tel:${BUSINESS.phone.href}`}
                      className="font-display uppercase text-xl hover:text-blood transition-colors block"
                    >
                      {BUSINESS.phone.display}
                    </a>
                    <p className="stamp text-bone/40">{BUSINESS.hours.display} · Walk-ins welcome</p>
                  </div>
                )}
              </div>
            </div>

            <div className="border-t border-smoke pt-10 lg:border-t-0 lg:pt-0 space-y-8">
              <div>
                <Stamp className="text-bone/40">What&apos;s included</Stamp>
                <ul className="mt-6 space-y-4">
                  {INCLUDED.map((item) => (
                    <li key={item} className="flex items-start gap-3 font-body text-bone/70 text-base">
                      <span className="text-blood mt-0.5 font-bold" aria-hidden>+</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="border-t border-smoke pt-8">
                <Stamp className="text-bone/40">Cancellation</Stamp>
                <p className="font-body text-bone/60 mt-2 text-base leading-relaxed">
                  Month-to-month. 30-day written notice required to cancel. No long-term contracts.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* existing member dues */}
        <section className="bg-ink px-5 md:px-10 py-24 border-t border-smoke">
          <div className="max-w-[1600px] mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div>
              <Stamp className="text-bone/40">Existing Members</Stamp>
              <h2 className="font-display uppercase text-[clamp(2rem,5vw,4rem)] leading-[0.85] mt-4">
                Pay monthly dues.
              </h2>
              <p className="font-body text-bone/60 text-base leading-relaxed mt-6 max-w-md">
                Already a member? Pay your $150 monthly dues here.
              </p>
              <div className="mt-8">
                {STRIPE_PAYMENT_LINK ? (
                  <Button href={STRIPE_PAYMENT_LINK}>
                    Pay $150 Dues
                  </Button>
                ) : (
                  <div className="border border-smoke p-8 space-y-3">
                    <p className="font-display uppercase text-xl">Pay in person or by phone.</p>
                    <a
                      href={`tel:${BUSINESS.phone.href}`}
                      className="font-display uppercase text-xl hover:text-blood transition-colors block"
                    >
                      {BUSINESS.phone.display}
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* donate */}
        <section className="bg-ash px-5 md:px-10 py-24 border-t border-smoke">
          <div className="max-w-[1600px] mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24">
            <div>
              <Stamp className="text-blood">Community</Stamp>
              <h2 className="font-display uppercase text-[clamp(2rem,5vw,4rem)] leading-[0.85] mt-4">
                Support the gym.
              </h2>
              <p className="font-body text-bone/70 text-lg leading-relaxed mt-8 max-w-md">
                B2T&apos;s youth and community programs run on support from people who believe in what we&apos;re building. Every dollar goes directly toward keeping kids in the gym.
              </p>
              <div className="mt-8">
                {DONATE_LINK ? (
                  <Button href={DONATE_LINK}>
                    Donate
                  </Button>
                ) : (
                  <div className="border border-smoke p-8 space-y-4">
                    <p className="font-display uppercase text-xl">Donate by phone or in person.</p>
                    <p className="font-body text-bone/60 text-base">
                      Online donations coming soon. To support the gym now, call or visit us.
                    </p>
                    <a
                      href={`tel:${BUSINESS.phone.href}`}
                      className="font-display uppercase text-xl hover:text-blood transition-colors block"
                    >
                      {BUSINESS.phone.display}
                    </a>
                  </div>
                )}
              </div>
            </div>

            <div className="border-t border-smoke pt-10 lg:border-t-0 lg:pt-0 space-y-6">
              <Stamp className="text-bone/40">Where it goes</Stamp>
              <ul className="space-y-4">
                {[
                  "Youth and teen boxing programs",
                  "Equipment for kids who can't afford it",
                  "Competition entry fees for young athletes",
                  "Keeping the gym open and accessible",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 font-body text-bone/70 text-base">
                    <span className="text-blood mt-0.5 font-bold" aria-hidden>+</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
