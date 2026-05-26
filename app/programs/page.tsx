import type { Metadata } from "next";
import Image from "next/image";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Marquee } from "@/components/layout/Marquee";
import { FinalCTA } from "@/components/home/FinalCTA";
import { SectionLabel } from "@/components/type/SectionLabel";
import { DisplayHeading } from "@/components/type/DisplayHeading";
import { Placeholder } from "@/components/shared/Placeholder";
import { PROGRAMS } from "@/lib/programs";
import { BUSINESS } from "@/lib/config";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Programs",
  description: `Boxing programs at B2T Boxing in Portland, OR: Fitness Boxing, Fundamentals, Sparring, Fight Team, and Kids/Teens. ${BUSINESS.phone.display}.`,
};

const TICKER_ITEMS = [
  "5 Programs",
  "All Levels Welcome",
  "No Experience Needed",
  "Sparring Available",
  BUSINESS.address.streetDisplay,
];

export default function ProgramsPage() {
  return (
    <>
      <Marquee items={TICKER_ITEMS} />
      <Header />
      <main>
        {/* page header */}
        <section className="bg-ink px-5 md:px-10 pt-16 pb-24">
          <div className="max-w-[1600px] mx-auto">
            <SectionLabel number="02" label="Programs" />
            <DisplayHeading
              as="h1"
              className="text-[clamp(3.5rem,9vw,10rem)] mt-6"
            >
              What we train.
            </DisplayHeading>
            <p className="font-body text-bone/60 text-lg mt-8 max-w-xl leading-relaxed">
              Five programs. Every level. From your first session to your next
              sanctioned bout. There&apos;s a place for you at B2T.
            </p>
          </div>
        </section>

        {/* programs */}
        {PROGRAMS.map((program, i) => {
          const inverted = i % 2 !== 0;
          return (
            <section
              key={program.slug}
              id={program.slug}
              className={cn(
                "px-5 md:px-10 py-24 md:py-36 scroll-mt-20",
                inverted ? "bg-bone text-ink" : "bg-ash text-bone",
              )}
            >
              <div className="max-w-[1600px] mx-auto">
                <SectionLabel
                  number={program.number}
                  label={program.name}
                  className={cn(
                    inverted
                      ? "[&>span]:text-ink/60 [&>span:nth-child(2)]:text-ink [&>span:last-child]:text-ink"
                      : "",
                  )}
                />
                <DisplayHeading
                  as="h2"
                  className={cn(
                    "text-[clamp(2.5rem,6vw,7rem)] mt-6 mb-14",
                    inverted && "text-ink",
                  )}
                >
                  {program.name}
                </DisplayHeading>

                <div className="grid md:grid-cols-12 gap-12 lg:gap-20">
                  <div className="md:col-span-4">
                    {program.image ? (
                      <div className="relative aspect-[4/5] w-full overflow-hidden">
                        <Image
                          src={program.image}
                          alt={`${program.name} at B2T Boxing`}
                          fill
                          className="object-cover object-center"
                          sizes="(max-width: 768px) 100vw, 33vw"
                        />
                      </div>
                    ) : (
                      <Placeholder
                        aspect="4/5"
                        label={`${program.name} photo`}
                        alt={`${program.name} at B2T Boxing`}
                      />
                    )}
                  </div>

                  <div className="md:col-span-8 space-y-12">
                    <p
                      className={cn(
                        "font-body text-lg leading-relaxed max-w-prose",
                        inverted ? "text-ink/80" : "text-bone/80",
                      )}
                    >
                      {program.longDescription}
                    </p>

                    <div className="grid sm:grid-cols-2 gap-10">
                      <div>
                        <p
                          className={cn(
                            "stamp mb-4",
                            inverted ? "text-ink/40" : "text-bone/40",
                          )}
                        >
                          Who it&apos;s for
                        </p>
                        <ul className="space-y-2">
                          {program.forWho.map((item) => (
                            <li
                              key={item}
                              className={cn(
                                "flex items-start gap-3 font-body text-base",
                                inverted ? "text-ink/80" : "text-bone/80",
                              )}
                            >
                              <span className="text-blood mt-0.5 font-bold" aria-hidden>+</span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <p
                          className={cn(
                            "stamp mb-4",
                            inverted ? "text-ink/40" : "text-bone/40",
                          )}
                        >
                          What you&apos;ll work on
                        </p>
                        <ul className="space-y-2">
                          {program.whatYouLearn.map((item) => (
                            <li
                              key={item}
                              className={cn(
                                "flex items-start gap-3 font-body text-base",
                                inverted ? "text-ink/80" : "text-bone/80",
                              )}
                            >
                              <span className="text-blood mt-0.5 font-bold" aria-hidden>+</span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
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
