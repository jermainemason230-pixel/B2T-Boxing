import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Marquee } from "@/components/layout/Marquee";
import { SectionLabel } from "@/components/type/SectionLabel";
import { DisplayHeading } from "@/components/type/DisplayHeading";
import { Button } from "@/components/ui/Button";
import { Stamp } from "@/components/type/Stamp";
import { BUSINESS, STRIPE_SIGNUP_LINK } from "@/lib/config";

export const metadata: Metadata = {
  title: "Pricing",
  description: `B2T Boxing membership: $150/month dues, $100 one-time enrollment fee. 30-day cancellation notice. Walk in to enroll at ${BUSINESS.address.street}, Portland OR.`,
};

const TICKER_ITEMS = [
  "$150 / Month",
  "$100 Enrollment Fee",
  "30-Day Cancellation",
  "Sign Up Online",
  BUSINESS.address.streetDisplay,
];

const INCLUDED = [
  "Unlimited classes per month",
  "Access to all five programs",
  "Gloves and hand wraps for first visit",
  "Open gym sessions",
  "Coach supervision every session",
];

export default function PricingPage() {
  return (
    <>
      <Marquee items={TICKER_ITEMS} />
      <Header />
      <main>
        {/* page header */}
        <section className="bg-ink px-5 md:px-10 pt-16 pb-24">
          <div className="max-w-[1600px] mx-auto">
            <SectionLabel number="07" label="Pricing" />
            <DisplayHeading
              as="h1"
              className="text-[clamp(3.5rem,9vw,10rem)] mt-6"
            >
              Simple pricing.
            </DisplayHeading>
          </div>
        </section>

        {/* oversized number typographic block */}
        <section className="bg-ash px-5 md:px-10 py-24 md:py-36 border-t border-smoke">
          <div className="max-w-[1600px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-smoke">
              {[
                {
                  value: "$150",
                  unit: "Per Month",
                  sub: "Dues",
                },
                {
                  value: "$100",
                  unit: "One-Time",
                  sub: "Enrollment Fee",
                },
                {
                  value: "30",
                  unit: "Days",
                  sub: "Cancellation Notice",
                },
              ].map((item) => (
                <div
                  key={item.value}
                  className="px-0 py-12 md:py-0 md:px-12 first:pl-0 last:pr-0"
                >
                  <span className="font-display text-blood text-[clamp(5rem,10vw,9rem)] leading-[0.85]">
                    {item.value}
                  </span>
                  <p className="font-display uppercase text-2xl md:text-3xl mt-2 text-bone">
                    {item.unit}
                  </p>
                  <p className="stamp text-bone/50 mt-2">{item.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* what's included + CTA */}
        <section className="bg-bone text-ink px-5 md:px-10 py-24 md:py-36">
          <div className="max-w-[1600px] mx-auto grid md:grid-cols-2 gap-16 md:gap-24 items-start">
            <div>
              <Stamp className="text-ink/40">What&apos;s included</Stamp>
              <ul className="mt-6 space-y-4">
                {INCLUDED.map((item) => (
                  <li key={item} className="flex items-start gap-4">
                    <span className="text-blood mt-0.5 font-bold text-xl" aria-hidden>+</span>
                    <span className="font-body text-ink/80 text-lg">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-12 p-8 border border-ink/20 bg-paper">
                <Stamp className="text-ink/50">Cancellation policy</Stamp>
                <p className="font-body text-ink/70 mt-3 text-base leading-relaxed">
                  A 30-day written notice is required to cancel membership.
                  Membership is month-to-month. No long-term contracts.
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="font-display uppercase text-4xl md:text-5xl text-ink">
                  Ready to start?
                </h2>
                <p className="font-body text-ink/70 mt-4 text-lg leading-relaxed">
                  Sign up online or walk in during open hours. No appointment needed.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <Button
                  href={STRIPE_SIGNUP_LINK || "/pay"}
                  className="bg-blood border-blood text-bone hover:bg-ink hover:border-ink self-start"
                >
                  Sign Up Online
                </Button>
                <p className="stamp text-ink/50">
                  Or walk in at {BUSINESS.address.streetDisplay}, {BUSINESS.hours.display}
                </p>
              </div>

              <div className="border-t border-ink/20 pt-8">
                <p className="stamp text-ink/40">Already a member?</p>
                <Link
                  href="/pay"
                  className="font-display uppercase text-2xl hover:text-blood transition-colors mt-2 inline-flex items-center gap-2"
                >
                  Pay dues online →
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
