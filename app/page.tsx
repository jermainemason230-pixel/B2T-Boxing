import { BUSINESS } from "@/lib/config";

export default function HomePage() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-3xl">
        <p className="stamp text-blood">PHASE 1 SCAFFOLD</p>
        <h1 className="font-display text-[clamp(4rem,12vw,10rem)] leading-[0.85] mt-4">
          {BUSINESS.name.toUpperCase()}
        </h1>
        <p className="font-body text-base mt-6 max-w-prose text-bone/70">
          Foundation only. Home page replaces this in Phase 3.
        </p>
      </div>
    </main>
  );
}
