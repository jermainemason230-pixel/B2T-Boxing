import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Marquee } from "@/components/layout/Marquee";
import { SectionLabel } from "@/components/type/SectionLabel";
import { DisplayHeading } from "@/components/type/DisplayHeading";
import { Button } from "@/components/ui/Button";
import { Stamp } from "@/components/type/Stamp";
import {
  BUSINESS,
  STRIPE_PAYMENT_LINK,
  STRIPE_SIGNUP_LINK,
  PRIVATE_LESSONS_LINK,
  DONATE_LINK,
} from "@/lib/config";

export const metadata: Metadata = {
  title: "Pricing",
  description: `B2T Boxing membership: $100 enrollment + $150/month. Private lessons available. Sign up online. Portland, OR — ${BUSINESS.address.streetDisplay}.`,
};

const TICKER_ITEMS = [
  "$100 Enrollment · $150/mo",
  "Sign Up Online",
  "Private Lessons Available",
  "Pay Dues Online",
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
        {/* page header */}
        <section className="bg-ink px-5 md:px-10 pt-16 pb-24">
          <div className="max-w-[1600px] mx-auto">
            <SectionLabel number="07" label="Pricing" />
            <DisplayHeading as="h1" className="text-[clamp(3.5rem,9vw,10rem)] mt-6">
              Simple pricing.
            </DisplayHeading>
          </div>
        </section>

        {/* pricing overview */}
        <section className="bg-ash px-5 md:px-10 py-24 md:py-36 border-t border-smoke">
          <div className="max-w-[1600px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-smoke mb-20">
              {[
                { value: "$100", unit: "One-Time", sub: "Enrollment Fee" },
                { value: "$150", unit: "Per Month", sub: "Membership Dues" },
              ].map((item) => (
                <div key={item.value} className="py-12 md:py-0 md:px-12 first:pl-0 last:pr-0">
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

            <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-start border-t border-smoke pt-16">
              {/* what's included */}
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
                <div className="mt-10 border-t border-smoke pt-8">
                  <Stamp className="text-bone/40">Cancellation</Stamp>
                  <p className="font-body text-bone/60 mt-2 text-base leading-relaxed">
                    Month-to-month. 30-day written notice to cancel. No long-term contracts.
                  </p>
                </div>
              </div>

              {/* sign up CTA */}
              <div className="space-y-6">
                <Stamp className="text-blood">New Members</Stamp>
                <h2 className="font-display uppercase text-[clamp(2rem,4vw,4rem)] leading-[0.85]">
                  Sign up online.
                </h2>
                <p className="font-body text-bone/60 text-base leading-relaxed max-w-sm">
                  Sign up and pay your enrollment fee online. Walk in during open hours and we&apos;ll get you started — {BUSINESS.hours.display}.
                </p>
                <div>
                  {STRIPE_SIGNUP_LINK ? (
                    <Button href={STRIPE_SIGNUP_LINK}>Sign Up & Pay Online</Button>
                  ) : (
                    <div className="border border-smoke p-6 space-y-3">
                      <p className="font-display uppercase text-lg">Walk in or call us.</p>
                      <a href={`tel:${BUSINESS.phone.href}`} className="font-display uppercase text-xl hover:text-blood transition-colors block">
                        {BUSINESS.phone.display}
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* private lessons */}
        <section className="bg-ink px-5 md:px-10 py-24 md:py-36 border-t border-smoke">
          <div className="max-w-[1600px] mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24">
            <div>
              <Stamp className="text-blood">One-on-One</Stamp>
              <h2 className="font-display uppercase text-[clamp(2rem,5vw,5rem)] leading-[0.85] mt-4">
                Private lessons.
              </h2>
              <p className="font-body text-bone/70 text-lg leading-relaxed mt-8 max-w-md">
                Work directly with a coach. Private lessons run 45–60 minutes and are tailored to your skill level and goals — whether you&apos;re just starting out or preparing for competition.
              </p>
              <div className="mt-10">
                {PRIVATE_LESSONS_LINK ? (
                  <Button href={PRIVATE_LESSONS_LINK}>Book a Private Lesson</Button>
                ) : (
                  <div className="border border-smoke p-6 space-y-3">
                    <p className="font-display uppercase text-lg">Call to book.</p>
                    <a href={`tel:${BUSINESS.phone.href}`} className="font-display uppercase text-xl hover:text-blood transition-colors block">
                      {BUSINESS.phone.display}
                    </a>
                  </div>
                )}
              </div>
            </div>
            <div className="border-t border-smoke pt-10 lg:border-t-0 lg:pt-0 space-y-6">
              <Stamp className="text-bone/40">What to expect</Stamp>
              <ul className="space-y-4">
                {[
                  "45–60 minute one-on-one session",
                  "Tailored to your skill level and goals",
                  "Available for all levels — beginner to competitive",
                  "Technique, footwork, pad work, or fight prep",
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

        {/* existing member dues */}
        <section className="bg-ash px-5 md:px-10 py-24 border-t border-smoke">
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
                  <Button href={STRIPE_PAYMENT_LINK}>Pay $150 Dues</Button>
                ) : (
                  <div className="border border-smoke p-6 space-y-3">
                    <p className="font-display uppercase text-lg">Pay in person or by phone.</p>
                    <a href={`tel:${BUSINESS.phone.href}`} className="font-display uppercase text-xl hover:text-blood transition-colors block">
                      {BUSINESS.phone.display}
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* donate */}
        <section className="bg-ink px-5 md:px-10 py-24 border-t border-smoke">
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
                  <Button href={DONATE_LINK}>Donate</Button>
                ) : (
                  <div className="border border-smoke p-6 space-y-4">
                    <p className="font-display uppercase text-lg">Donate by phone or in person.</p>
                    <a href={`tel:${BUSINESS.phone.href}`} className="font-display uppercase text-xl hover:text-blood transition-colors block">
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
