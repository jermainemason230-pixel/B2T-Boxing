import { Button } from "@/components/ui/Button";

export function FinalCTA() {
  return (
    <section className="bg-blood px-5 md:px-10 py-24 md:py-36">
      <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row md:items-end md:justify-between gap-12">
        <h2 className="font-display uppercase text-[clamp(2.5rem,6vw,7rem)] leading-[0.85] text-bone max-w-3xl">
          Walk in. Suit up. Step in the ring.
        </h2>
        <div className="flex-shrink-0">
          <Button href="/pay" variant="invert" className="border-bone">
            Join Now
          </Button>
        </div>
      </div>
    </section>
  );
}
