import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Marquee } from "@/components/layout/Marquee";
import { SectionLabel } from "@/components/type/SectionLabel";
import { MapEmbed } from "@/components/shared/MapEmbed";
import { PhoneCTA } from "@/components/shared/PhoneCTA";
import { ContactForm } from "@/components/forms/ContactForm";
import { BUSINESS } from "@/lib/config";

export const metadata: Metadata = {
  title: "Book a Free Trial",
  description: `Book a free trial or ask a question. B2T Boxing in Portland, OR. Call or text ${BUSINESS.phone.display}, or fill out the form and we'll get back to you.`,
};

const TICKER_ITEMS = [
  "Free Trial Available",
  "Walk-Ins Welcome",
  BUSINESS.address.streetDisplay,
  BUSINESS.phone.display,
  BUSINESS.hours.display,
];

export default function ContactPage() {
  return (
    <>
      <Marquee items={TICKER_ITEMS} />
      <Header />
      <main>
        <section className="bg-ink px-5 md:px-10 pt-16 pb-24">
          <div className="max-w-[1600px] mx-auto">
            <SectionLabel number="10" label="Contact" />
            <h1 className="font-display uppercase text-[clamp(3.5rem,9vw,10rem)] leading-[0.85] mt-6">
              Book a<br />free trial.
            </h1>
          </div>
        </section>

        <section className="bg-ash px-5 md:px-10 py-24 border-t border-smoke">
          <div className="max-w-[1600px] mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24">
            {/* left — form */}
            <div>
              <p className="font-body text-bone/70 text-lg leading-relaxed mb-12 max-w-md">
                Fill out the form and we&apos;ll reach out to schedule your first
                session. Rather talk directly? Call or text us.
              </p>
              <ContactForm />
            </div>

            {/* right — contact info + map */}
            <div className="space-y-10">
              <div className="space-y-3">
                <p className="stamp text-bone/40">Or reach us directly</p>
                <PhoneCTA variant="buttons" />
              </div>

              <div className="border-t border-smoke pt-10 space-y-1">
                <p className="stamp text-bone/40 mb-3">Find us</p>
                <address className="not-italic space-y-0.5">
                  <p className="font-display uppercase text-2xl">{BUSINESS.address.streetDisplay}</p>
                  <p className="font-display uppercase text-2xl text-bone/70">{BUSINESS.address.cityStateZipDisplay}</p>
                  <p className="font-display uppercase text-2xl mt-2">{BUSINESS.hours.display}</p>
                </address>
              </div>

              <MapEmbed className="aspect-[4/3]" />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
