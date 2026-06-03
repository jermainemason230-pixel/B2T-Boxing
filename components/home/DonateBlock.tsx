import { Button } from "@/components/ui/Button";
import { SectionLabel } from "@/components/type/SectionLabel";
import { DONATE_LINK } from "@/lib/config";

export function DonateBlock() {
  if (!DONATE_LINK) return null;

  return (
    <section className="bg-ink text-bone px-5 md:px-10 py-24 md:py-36 border-t border-smoke">
      <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row md:items-end md:justify-between gap-12">
        <div>
          <SectionLabel number="02" label="Support B2T" />
          <h2 className="font-display uppercase text-[clamp(2.5rem,6vw,7rem)] leading-[0.85] mt-6 max-w-3xl">
            Help us keep the gym open.
          </h2>
          <p className="mt-6 font-body text-bone/70 text-base md:text-lg max-w-xl leading-relaxed">
            Your donation keeps the doors open for kids and adults who can&apos;t
            always afford membership. Every dollar stays in Portland and goes
            directly toward training.
          </p>
        </div>
        <div className="flex-shrink-0">
          <Button href={DONATE_LINK} variant="invert" className="border-bone">
            Donate
          </Button>
        </div>
      </div>
    </section>
  );
}
