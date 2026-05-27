import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Marquee } from "@/components/layout/Marquee";
import { Hero } from "@/components/home/Hero";
import { MissionBlock } from "@/components/home/MissionBlock";
import { VideoReel } from "@/components/home/VideoReel";
import { ProgramsList } from "@/components/home/ProgramsList";
import { CoachesPreview } from "@/components/home/CoachesPreview";
import { StatsBar } from "@/components/home/StatsBar";
import { FirstVisit } from "@/components/home/FirstVisit";
import { LocationBlock } from "@/components/home/LocationBlock";
import { FinalCTA } from "@/components/home/FinalCTA";
import { BUSINESS, SITE_URL } from "@/lib/config";
import { JsonLd } from "@/components/shared/JsonLd";

export const metadata: Metadata = {
  title: `${BUSINESS.name} — Portland's Boxing Gym`,
  description: `${BUSINESS.mission} Located at ${BUSINESS.address.street}, Portland OR. Call or text ${BUSINESS.phone.display}. Walk-ins always welcome.`,
  openGraph: {
    title: `${BUSINESS.name} — Portland's Boxing Gym`,
    description: BUSINESS.mission,
    url: SITE_URL,
  },
};

const TICKER_ITEMS = [
  "Walk-Ins Always Welcome",
  "All Levels Welcome",
  BUSINESS.address.streetDisplay,
  BUSINESS.phone.display,
  BUSINESS.hours.display,
];

export default function HomePage() {
  return (
    <>
      <Marquee items={TICKER_ITEMS} />
      <Header />
      <JsonLd />
      <main>
        <Hero />
        <MissionBlock />
        <VideoReel />
        <ProgramsList />
        <CoachesPreview />
        <StatsBar />
        <FirstVisit />
        <LocationBlock />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
