import Link from "next/link";
import Image from "next/image";
import { SectionLabel } from "@/components/type/SectionLabel";
import { DisplayHeading } from "@/components/type/DisplayHeading";
import { Placeholder } from "@/components/shared/Placeholder";
import { Stamp } from "@/components/type/Stamp";
import { COACHES } from "@/lib/coaches";

export function CoachesPreview() {
  return (
    <section className="bg-paper text-ink px-5 md:px-10 py-24 md:py-36">
      <div className="max-w-[1600px] mx-auto">
        <SectionLabel
          number="03"
          label="Coaches"
          className="[&>span]:text-ink/60 [&>span:nth-child(2)]:text-ink [&>span:last-child]:text-ink"
        />
        <DisplayHeading
          as="h2"
          className="text-[clamp(3rem,7vw,7rem)] mt-6 mb-16 text-ink"
        >
          Who you&apos;ll train with.
        </DisplayHeading>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-ink/20">
          {COACHES.map((coach) => (
            <div key={coach.slug} className="border-b md:border-b-0 md:border-r border-ink/20 last:border-0 pb-10 md:pb-0 md:pr-10 md:last:pr-0 md:pl-0 md:[&:not(:first-child)]:pl-10 pt-10">
              {coach.imageSlot ? (
                <div className="relative aspect-[3/4] w-full overflow-hidden">
                  <Image
                    src={coach.imageSlot}
                    alt={`${coach.name} — B2T Boxing coach`}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
              ) : (
                <Placeholder
                  aspect="3/4"
                  caption={coach.name}
                  label="Coach photo — 3:4 portrait"
                  alt={`${coach.name} — B2T Boxing coach`}
                />
              )}
              <h3 className="font-display uppercase text-[clamp(1.75rem,3vw,2.5rem)] leading-tight mt-6 text-ink">
                {coach.name}
              </h3>
              {coach.credentials.length > 0 ? (
                <div className="mt-2 space-y-1">
                  {coach.credentials.map((c) => (
                    <Stamp key={c} as="p" className="text-ink/60">
                      {c}
                    </Stamp>
                  ))}
                </div>
              ) : (
                <div className="mt-2 h-4" />
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 border-t border-ink/20 pt-8">
          <Link
            href="/coaches"
            className="font-display uppercase text-2xl hover:text-blood transition-colors inline-flex items-center gap-3"
          >
            Meet the team
            <span className="transition-transform duration-200 group-hover:translate-x-1" aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
