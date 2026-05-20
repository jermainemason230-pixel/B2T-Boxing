import { BUSINESS, SITE_URL } from "@/lib/config";

export function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": ["SportsActivityLocation", "LocalBusiness"],
    name: BUSINESS.name,
    description: BUSINESS.mission,
    url: SITE_URL,
    telephone: BUSINESS.phone.display,
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS.address.street,
      addressLocality: BUSINESS.address.city,
      addressRegion: BUSINESS.address.state,
      postalCode: BUSINESS.address.zip,
      addressCountry: "US",
    },
    openingHours: "Mo-Su 08:00-20:00",
    priceRange: "$$",
    sport: "Boxing",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
