import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Marquee } from "@/components/layout/Marquee";
import { SectionLabel } from "@/components/type/SectionLabel";
import { DisplayHeading } from "@/components/type/DisplayHeading";
import { Button } from "@/components/ui/Button";
import { BUSINESS } from "@/lib/config";

export const metadata: Metadata = {
  title: "Waiver",
  description: `A liability waiver is required before your first session at B2T Boxing Portland. Download it here or sign in person at the gym.`,
};

const TICKER_ITEMS = [
  "Waiver Required — First Session",
  "Sign in Person or Download",
  BUSINESS.address.streetDisplay,
  BUSINESS.hours.display,
];

export default function WaiverPage() {
  return (
    <>
      <Marquee items={TICKER_ITEMS} />
      <Header />
      <main>
        <section className="bg-ink min-h-[80vh] flex items-center px-5 md:px-10 py-24">
          <div className="max-w-[1600px] mx-auto w-full">
            <SectionLabel number="08" label="Waiver" />
            <DisplayHeading
              as="h1"
              className="text-[clamp(3.5rem,9vw,10rem)] mt-6"
            >
              Sign the waiver.
            </DisplayHeading>

            <div className="mt-12 border-t border-smoke pt-12 grid md:grid-cols-2 gap-12 max-w-4xl">
              <div className="space-y-4">
                <p className="font-body text-bone/70 text-lg leading-relaxed">
                  A liability waiver is required before your first training
                  session. You can download and print the form below, or sign
                  it in person when you arrive.
                </p>
                <p className="font-body text-bone/70 text-lg leading-relaxed">
                  Bring the signed form to the gym, or we&apos;ll have a copy
                  waiting at the front desk.
                </p>
                <p className="stamp text-bone/40 mt-4">
                  E-sign available in a future update.
                </p>
              </div>

              <div className="flex flex-col gap-6">
                <Button
                  href="/waiver.pdf"
                  arrow={false}
                  className="self-start"
                >
                  Download Waiver (PDF)
                </Button>
                <div className="border-t border-smoke pt-6">
                  <p className="stamp text-bone/40">Questions?</p>
                  <a
                    href={`tel:${BUSINESS.phone.href}`}
                    className="font-display uppercase text-2xl hover:text-blood transition-colors block mt-2"
                  >
                    {BUSINESS.phone.display}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
