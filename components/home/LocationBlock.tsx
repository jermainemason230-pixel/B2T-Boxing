import { MapPin } from "lucide-react";
import { SectionLabel } from "@/components/type/SectionLabel";
import { MapEmbed } from "@/components/shared/MapEmbed";
import { PhoneCTA } from "@/components/shared/PhoneCTA";
import { BUSINESS } from "@/lib/config";

export function LocationBlock() {
  return (
    <section
      id="location"
      className="bg-ink px-5 md:px-10 py-24 md:py-36"
    >
      <div className="max-w-[1600px] mx-auto">
        <SectionLabel number="05" label="Find Us" />

        <div className="mt-12 grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* left — typographic address block */}
          <div className="space-y-8">
            <div>
              <p className="stamp text-bone/40 mb-4">
                <MapPin className="inline size-3 mr-1" aria-hidden />
                Address
              </p>
              <address className="not-italic space-y-1">
                <p className="font-display uppercase text-[clamp(2rem,5vw,4rem)] leading-[0.9]">
                  {BUSINESS.address.streetDisplay}
                </p>
                <p className="font-display uppercase text-[clamp(2rem,5vw,4rem)] leading-[0.9] text-bone/70">
                  {BUSINESS.address.cityStateZipDisplay}
                </p>
              </address>
            </div>

            <div className="border-t border-smoke pt-8 space-y-1">
              <p className="stamp text-bone/40 mb-4">Hours</p>
              <p className="font-display uppercase text-[clamp(1.75rem,4vw,3.5rem)] leading-[0.9]">
                {BUSINESS.hours.display}
              </p>
            </div>

            <div className="border-t border-smoke pt-8">
              <p className="stamp text-bone/40 mb-4">Contact</p>
              <a
                href={`tel:${BUSINESS.phone.href}`}
                className="font-display uppercase text-[clamp(1.75rem,4vw,3.5rem)] leading-[0.9] hover:text-blood transition-colors block"
              >
                {BUSINESS.phone.display}
              </a>
              <div className="mt-6">
                <PhoneCTA variant="buttons" />
              </div>
            </div>
          </div>

          {/* right — map */}
          <MapEmbed className="aspect-[4/3] lg:aspect-auto lg:min-h-[480px]" />
        </div>
      </div>
    </section>
  );
}
