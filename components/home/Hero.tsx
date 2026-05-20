"use client";

import { useRef } from "react";
import Link from "next/link";
import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { PhoneCTA } from "@/components/shared/PhoneCTA";
import { Placeholder } from "@/components/shared/Placeholder";
import { BUSINESS } from "@/lib/config";

export function Hero() {
  const targetRef = useRef<HTMLElement | null>(null);

  const scrollToMap = () => {
    const el = document.getElementById("location");
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="relative min-h-screen bg-ink flex flex-col justify-between pt-8 pb-10 px-5 md:px-10 overflow-hidden"
      aria-label="Hero"
    >
      {/* main content row */}
      <div className="flex-1 flex flex-col lg:flex-row lg:items-stretch gap-8 lg:gap-0 mt-4 lg:mt-8">

        {/* headline block */}
        <div className="flex-1 flex flex-col justify-between">
          <div>
            <h1 className="font-display uppercase leading-[0.85] text-[clamp(5rem,14vw,14rem)] tracking-tight text-bone">
              STEP IN<br />
              <span className="text-blood">THE</span> RING.
            </h1>
            <p className="stamp mt-6 text-bone/60 max-w-md">
              Portland&apos;s youth-first boxing gym&nbsp;&nbsp;—&nbsp;&nbsp;Est. on E. Burnside
            </p>
          </div>

          {/* CTA row */}
          <div className="mt-12 lg:mt-0 flex flex-col sm:flex-row sm:items-center gap-6">
            <Button href="/contact" className="self-start">
              Book a Free Trial
            </Button>
            <div className="flex items-center gap-6 font-display uppercase tracking-wider text-sm">
              <PhoneCTA variant="compact" />
              <span className="text-bone/30" aria-hidden>•</span>
              <button
                onClick={scrollToMap}
                className="inline-flex items-center gap-2 hover:text-blood transition-colors"
              >
                <MapPin className="size-4" aria-hidden />
                Visit
              </button>
            </div>
          </div>
        </div>

        {/* photo block — right column, bleeds top on large screens */}
        <div className="w-full lg:w-[38%] lg:self-stretch lg:-mt-8 lg:-mb-10 lg:ml-10 flex-shrink-0">
          <Placeholder
            aspect="4/5"
            label="Fighter photo — 4:5 portrait"
            alt="B2T Boxing fighter in action"
            className="h-full max-h-[70vh] lg:max-h-none"
          />
        </div>
      </div>

      {/* bottom metadata strip — magazine cover style */}
      <div className="mt-10 pt-6 border-t border-smoke flex flex-wrap gap-4 gap-y-2">
        {[
          "Issue 01",
          "Portland, OR",
          `Est. ${BUSINESS.hours.short} Daily`,
          BUSINESS.phone.display,
        ].map((item, i) => (
          <span key={i} className="stamp text-bone/50">
            {item}
            {i < 3 && (
              <span className="ml-4 text-smoke" aria-hidden>
                /
              </span>
            )}
          </span>
        ))}
      </div>
    </section>
  );
}
