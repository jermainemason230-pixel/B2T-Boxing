import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Marquee } from "@/components/layout/Marquee";
import { SectionLabel } from "@/components/type/SectionLabel";
import { DisplayHeading } from "@/components/type/DisplayHeading";
import { Button } from "@/components/ui/Button";
import { Stamp } from "@/components/type/Stamp";
import { BUSINESS, STRIPE_PAYMENT_LINK, DONATE_LINK } from "@/lib/config";

export const metadata: Metadata = {
  title: "Pay & Support",
  description: `Pay monthly dues or support B2T Boxing. Portland's boxing gym — ${BUSINESS.address.streetDisplay}.`,
};

const TICKER_ITEMS = [
  "Pay Monthly Dues · $150/mo",
  "Support the Gym",
  "Youth Program Donations Welcome",
  "New Signups In Person",
];

export default function PayPage() {
  return (
    <>
      <Marquee items={TICKER_ITEMS} />
      <Header />
      <main>
        <section className="bg-ink px-5 md:px-10 pt-16 pb-24">
          <div className="max-w-[1600px] mx-auto">
            <SectionLabel number="09" label="Pay & Support" />
            <DisplayHeading as="h1" className="text-[clamp(3.5rem,9vw,10rem)] mt-6">
              Pay & support.
            </DisplayHeading>
          </div>
        </section>

        {/* membership dues */}
        <section className="bg-ash px-5 md:px-10 py-24 border-t border-smoke">
          <div className="max-w-[1600px] mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24">
            <div>
              <Stamp className="text-bone/40">Members</Stamp>
              <h2 className="font-display uppercase text-[clamp(2rem,5vw,5rem)] leading-[0.85] mt-4">
                Monthly dues.
              </h2>
              <p className="font-body text-bone/70 text-lg leading-relaxed mt-8 max-w-md">
                Active members pay{" "}
                <span className="text-bone font-medium">$150 per month.</span>{" "}
                New members sign up in person at the gym — come during open hours and we&apos;ll get you started.
              </p>

              <div className="mt-10">
                {STRIPE_PAYMENT_LINK ? (
                  <Button href={STRIPE_PAYMENT_LINK}>
                    Pay $150 Monthly Dues
                  </Button>
                ) : (
                  <div className="border border-smoke p-8 space-y-4">
                    <p className="font-display uppercase text-xl">Pay in person or by phone.</p>
                    <p className="font-body text-bone/60 text-base">
                      Online payment is coming soon. Until then, pay at the gym or call us.
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

            <div className="border-t border-smoke pt-10 lg:border-t-0 lg:pt-0 lg:border-l lg:border-smoke lg:pl-16 space-y-4">
              <Stamp className="text-bone/40">Not a member yet?</Stamp>
              <p className="font-display uppercase text-2xl">New signups happen in person.</p>
              <p className="font-body text-bone/60 text-base leading-relaxed">
                Walk in during open hours — {BUSINESS.hours.display}. No appointment needed.
              </p>
              <div className="pt-2">
                <Button href="/contact" variant="outline">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* donate */}
        <section className="bg-ink px-5 md:px-10 py-24 border-t border-smoke">
          <div className="max-w-[1600px] mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24">
            <div>
              <Stamp className="text-blood">Community</Stamp>
              <h2 className="font-display uppercase text-[clamp(2rem,5vw,5rem)] leading-[0.85] mt-4">
                Support the gym.
              </h2>
              <p className="font-body text-bone/70 text-lg leading-relaxed mt-8 max-w-md">
                B2T&apos;s youth and community programs run on support from people who believe in what we&apos;re building. Every dollar goes directly toward keeping kids in the gym.
              </p>

              <div className="mt-10">
                {DONATE_LINK ? (
                  <Button href={DONATE_LINK}>
                    Donate
                  </Button>
                ) : (
                  <div className="border border-smoke p-8 space-y-4">
                    <p className="font-display uppercase text-xl">Donate by phone or in person.</p>
                    <p className="font-body text-bone/60 text-base">
                      Online donations are coming soon. To support the gym now, call or visit us.
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
