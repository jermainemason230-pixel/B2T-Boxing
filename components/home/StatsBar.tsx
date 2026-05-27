import { SectionLabel } from "@/components/type/SectionLabel";

const STATS = [
  { value: "03", label: "Head\nCoaches" },
  { value: "05", label: "Training\nPrograms" },
  { value: "45–5", label: "Bryan's amateur\nrecord" },
];

export function StatsBar() {
  return (
    <section className="bg-ash border-y border-smoke px-5 md:px-10 py-16 md:py-20">
      <div className="max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-smoke">
          {STATS.map((stat) => (
            <div
              key={stat.value}
              className="px-6 first:pl-0 last:pr-0 flex flex-col gap-3"
            >
              <span className="font-display text-blood text-[clamp(3rem,7vw,7rem)] leading-[0.85]">
                {stat.value}
              </span>
              <span className="stamp text-bone/60 whitespace-pre-line">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
