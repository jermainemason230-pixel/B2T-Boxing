"use client";

import Link from "next/link";
import { SectionLabel } from "@/components/type/SectionLabel";
import { DisplayHeading } from "@/components/type/DisplayHeading";
import { PROGRAMS } from "@/lib/programs";

export function ProgramsList() {
  return (
    <section className="bg-ink px-5 md:px-10 py-24 md:py-36">
      <div className="max-w-[1600px] mx-auto">
        <SectionLabel number="02" label="Programs" />
        <DisplayHeading
          as="h2"
          className="text-[clamp(3rem,7vw,7rem)] mt-6 mb-16"
        >
          What we train.
        </DisplayHeading>

        <ul role="list" className="divide-y divide-smoke border-t border-smoke">
          {PROGRAMS.map((program) => (
            <li key={program.slug}>
              <Link
                href={`/programs#${program.slug}`}
                className="group flex items-center gap-6 py-6 md:py-8 hover:bg-blood transition-colors px-0 hover:px-4 duration-200"
              >
                <span className="stamp text-bone/40 group-hover:text-bone/70 w-8 flex-shrink-0">
                  {program.number}
                </span>
                <span className="font-display uppercase text-[clamp(1.75rem,4vw,3rem)] leading-tight tracking-tight flex-1 group-hover:text-bone">
                  {program.name}
                </span>
                <span className="hidden md:block font-body text-sm text-bone/60 group-hover:text-bone/90 max-w-xs flex-shrink-0">
                  {program.shortDescription}
                </span>
                <span
                  className="font-display text-xl ml-auto flex-shrink-0 transition-transform duration-200 group-hover:translate-x-1"
                  aria-hidden
                >
                  →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
