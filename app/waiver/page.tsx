import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Marquee } from "@/components/layout/Marquee";
import { SectionLabel } from "@/components/type/SectionLabel";
import { WaiverForm } from "@/components/forms/WaiverForm";
import { BUSINESS } from "@/lib/config";

export const metadata: Metadata = {
  title: "Waiver",
  description: `Sign the B2T Boxing liability waiver online before your first session. Portland, OR.`,
};

const TICKER_ITEMS = [
  "Waiver Required — First Session",
  "Sign Online",
  BUSINESS.address.streetDisplay,
  BUSINESS.hours.display,
];

const WAIVER_TEXT = [
  "I/We hereby understand and acknowledge that the training, programs and events held by B2T BOXING may expose me to many inherent risks, including accidents, injury, illness or even death. I/We assume all risk of injuries associated with participation including, but not limited to falls, contact with other participants, the effects of the weather, including high heat and/or humidity, and all other such risks being known and appreciated by me.",
  "We hereby acknowledge my responsibility in communicating any physical and psychological concerns that might conflict with participation in activity. I/We acknowledge that I am physically fit and mentally capable of performing the physical activity I choose to participate in.",
  "After having read this waiver and knowing these facts, and in consideration of acceptance of my participation and the B2T BOXING LLC. furnishing services to me, I agree, for myself and anyone entitled to act on my behalf, to HOLD HARMLESS, WAIVE AND RELEASE the B2T BOXING LLC its officers, agents, employees, organizers, representatives, and successors from any responsibility, liabilities, demands, or claims of any kind arising out of my participation in the B2T Boxing Gym training, programs and/or events.",
  "By my signature I/We indicate that I/we have read and understand this Waiver of Liability. I am aware that this is a waiver and a release of liability and voluntarily agree to its terms.",
];

export default function WaiverPage() {
  return (
    <>
      <Marquee items={TICKER_ITEMS} />
      <Header />
      <main>
        {/* page header */}
        <section className="bg-ink px-5 md:px-10 pt-16 pb-24">
          <div className="max-w-[1600px] mx-auto">
            <SectionLabel number="08" label="Waiver" />
            <h1 className="font-display uppercase text-[clamp(3.5rem,9vw,10rem)] leading-[0.85] mt-6">
              Sign the waiver.
            </h1>
            <p className="font-body text-bone/60 text-lg mt-8 max-w-xl leading-relaxed">
              A liability waiver is required before your first training session.
              Read the full waiver below and sign digitally — your submission goes
              directly to the gym.
            </p>
          </div>
        </section>

        {/* waiver text */}
        <section className="bg-bone text-ink px-5 md:px-10 py-16 border-t border-smoke">
          <div className="max-w-[1600px] mx-auto">
            <h2 className="font-display uppercase text-3xl md:text-4xl mb-10 tracking-tight">
              Waiver of Liability
            </h2>
            <div className="space-y-6 max-w-3xl">
              {WAIVER_TEXT.map((para, i) => (
                <p key={i} className="font-body text-ink/80 text-base leading-relaxed">
                  {para}
                </p>
              ))}
            </div>
          </div>
        </section>

        {/* signature form */}
        <section className="bg-ash px-5 md:px-10 py-16 md:py-24 border-t border-smoke">
          <div className="max-w-[1600px] mx-auto">
            <h2 className="font-display uppercase text-3xl md:text-4xl mb-2 tracking-tight">
              Sign below
            </h2>
            <p className="stamp text-bone/40 mb-10">All fields required unless noted</p>
            <div className="max-w-3xl">
              <WaiverForm />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
