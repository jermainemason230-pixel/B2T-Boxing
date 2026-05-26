import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Marquee } from "@/components/layout/Marquee";
import { FinalCTA } from "@/components/home/FinalCTA";
import { SectionLabel } from "@/components/type/SectionLabel";
import { DisplayHeading } from "@/components/type/DisplayHeading";
import { Placeholder } from "@/components/shared/Placeholder";
import { Stamp } from "@/components/type/Stamp";
import { COACHES } from "@/lib/coaches";
import { BUSINESS } from "@/lib/config";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Coaches",
  description: `Meet the coaches at B2T Boxing Portland. Bryan Sanchez: 45-5 amateur, 3-0 pro, 3x Golden Gloves champion. Call ${BUSINESS.phone.display}.`,
};

const TICKER_ITEMS = [
  "Bryan Sanchez · 45-5 Amateur",
  "3× Golden Gloves Champion",
  "3-0 Professional",
  "Portland, OR",
  BUSINESS.address.streetDisplay,
];

export default function CoachesPage() {
  return (
    <>
      <Marquee items={TICKER_ITEMS} />
      <Header />
      <main>
        {/* page header */}
        <section className="bg-ink px-5 md:px-10 pt-16 pb-24">
          <div className="max-w-[1600px] mx-auto">
            <SectionLabel number="03" label="Coaches" />
            <DisplayHeading as="h1" className="text-[clamp(3.5rem,9vw,10rem)] mt-6">
              Who you&apos;ll train with.
            </DisplayHeading>
          </div>
        </section>

        {/* coach spreads — alternating left/right photo placement */}
        {COACHES.map((coach, i) => {
          const photoLeft = i % 2 === 0;
          return (
            <section
              key={coach.slug}
              id={coach.slug}
              className={cn(
                "px-5 md:px-10 py-24 md:py-36 border-t border-smoke",
                i % 2 !== 0 ? "bg-ash" : "bg-ink",
              )}
            >
              <div className="max-w-[1600px] mx-auto">
                <div
                  className={cn(
                    "grid md:grid-cols-12 gap-12 lg:gap-20 items-start",
                  )}
                >
                  {/* photo */}
                  <div
                    className={cn(
                      "md:col-span-4",
                      !photoLeft && "md:order-last",
                    )}
                  >
                    <Placeholder
                      aspect="4/5"
                      caption={coach.name}
                      label="Coach photo — 4:5 portrait"
                      alt={`${coach.name} — B2T Boxing`}
                    />
                  </div>

                  {/* bio */}
                  <div className="md:col-span-8 flex flex-col justify-center">
                    <Stamp className="text-bone/40">Coach</Stamp>
                    <h2 className="font-display uppercase text-[clamp(2.5rem,6vw,7rem)] leading-[0.85] mt-4">
                      {coach.name}
                    </h2>

                    {coach.credentials.length > 0 && (
                      <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 border-t border-smoke pt-6">
                        {coach.credentials.map((c) => (
                          <Stamp key={c} className="text-bone/70">{c}</Stamp>
                        ))}
                      </div>
                    )}

                    {coach.bio ? (
                      <p className="font-body text-lg text-bone/80 leading-relaxed mt-8 max-w-prose">
                        {coach.bio}
                      </p>
                    ) : (
                      <p className="font-body text-lg text-bone/30 leading-relaxed mt-8 italic">
                        {/* [OWNER: add bio here in lib/coaches.ts] */}
                        Bio coming soon.
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </section>
          );
        })}

        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
