export const BUSINESS = {
  name: "B2T Boxing",
  tagline: "Portland's youth-first boxing gym.",
  mission:
    "To help youth athletes with gear sponsorship, travel, and upcoming fights.",
  phone: {
    raw: "9719003973",
    href: "971-900-3973",
    display: "(971) 900-3973",
  },
  email: "info@b2tboxing.com",
  address: {
    street: "7935 E Burnside St",
    streetDisplay: "7935 E. BURNSIDE ST.",
    city: "Portland",
    state: "OR",
    zip: "97215",
    cityStateZipDisplay: "PORTLAND, OR 97215",
  },
  hours: {
    display: "8AM – 8PM Daily",
    short: "8AM–8PM",
    full: "Open daily, 8:00 AM to 8:00 PM",
  },
  mapEmbedUrl:
    "https://www.google.com/maps/embed/v1/place?key=&q=7935+E+Burnside+St,+Portland,+OR+97215",
  mapLinkUrl: "https://www.google.com/maps/place/7935+E+Burnside+St,+Portland,+OR+97215",
  pricing: {
    monthly: 150,
    enrollment: 100,
    cancellationNoticeDays: 30,
  },
  social: {
    instagram: "",
    facebook: "",
  },
  legal: {
    foundingYear: 2024,
  },
} as const;

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const STRIPE_PAYMENT_LINK =
  process.env.NEXT_PUBLIC_STRIPE_PAYMENT_LINK ?? "";

export const NAV_LINKS = [
  { href: "/programs", label: "Programs" },
  { href: "/coaches", label: "Coaches" },
  { href: "/schedule", label: "Schedule" },
  { href: "/pricing", label: "Pricing" },
  { href: "/contact", label: "Contact" },
] as const;
