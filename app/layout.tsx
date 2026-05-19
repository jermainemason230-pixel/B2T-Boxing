import type { Metadata } from "next";
import { Anton, Instrument_Serif, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { BUSINESS, SITE_URL } from "@/lib/config";
import "./globals.css";

const display = Anton({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display",
  display: "swap",
});

const editorial = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["italic", "normal"],
  variable: "--font-editorial",
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${BUSINESS.name} — ${BUSINESS.tagline}`,
    template: `%s — ${BUSINESS.name}`,
  },
  description: BUSINESS.mission,
  openGraph: {
    title: `${BUSINESS.name} — ${BUSINESS.tagline}`,
    description: BUSINESS.mission,
    url: SITE_URL,
    siteName: BUSINESS.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: BUSINESS.name,
    description: BUSINESS.mission,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${editorial.variable} ${body.variable}`}
    >
      <body>
        <div className="grain" aria-hidden />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
