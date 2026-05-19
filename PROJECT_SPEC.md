# B2T Boxing — Project Spec (v2)

Marketing website for B2T Boxing, a boxing gym in Portland, OR. Conversion-focused brochure site with a Stripe Payment Link for existing members. New signups happen in person. **This site must not look AI-generated.**

---

## Goals
1. Drive free trial signups (primary CTA).
2. Dead-simple call / text / visit CTAs (secondary).
3. Existing members pay monthly dues via Stripe Payment Link.
4. Surface gym info: programs, coaches, pricing, location.

---

## Tech Stack
| Layer | Choice |
|---|---|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript (strict) |
| Styling | Tailwind CSS — brand tokens, not defaults |
| Components | shadcn/ui — **heavily restyled**, never stock |
| Motion | Framer Motion (scroll reveals, marquee, button hovers) |
| Forms | react-hook-form + Zod |
| Email | Resend |
| Payments | Stripe Payment Link (env-var URL, no SDK) |
| Analytics | Vercel Analytics |
| Hosting | Vercel + private GitHub |

---

## Business Info (`lib/config.ts` — single source of truth)
| Field | Value |
|---|---|
| Name | B2T Boxing |
| Address | 7935 E Burnside St, Portland, OR 97215 |
| Hours | 8AM – 8PM Daily |
| Phone | 971-900-3973 (call + text) |
| Mission | To help youth athletes with gear sponsorship, travel, and upcoming fights. |

---

## Programs (source: `lib/programs.ts`)
1. **Fitness Boxing** — Boxing-style conditioning that builds power, endurance, and confidence. No contact required.
2. **Fundamentals** — Stance, footwork, defense, and the six core punches. Where every fighter starts.
3. **Sparring** — Supervised live training for athletes ready to test what they've learned.
4. **Fight Team** — Competitive training for amateur and pro athletes preparing for sanctioned bouts.
5. **Kids / Teens** — Age-appropriate instruction. Discipline, focus, athleticism.

---

## Coaches (source: `lib/coaches.ts`)
- **Bryan Sanchez** — 45-5 amateur. 3-0 pro. 3× Golden Gloves champion.
- **JC Wade** — Coach. (placeholder bio)
- **Oliver Gradzadi** — Coach. (placeholder bio)

---

## Pricing
- $150/month dues
- $100 one-time enrollment fee
- 30-day cancellation notice
- New signups in person; existing members pay via Stripe Payment Link

---

## First-Timer Info
- Wear athletic clothes and shoes
- Gloves + hand wraps provided for first visit
- No experience needed
- Sparring offered

---

## Pages
| Route | Purpose |
|---|---|
| `/` | Home — hero, mission, programs list, coaches preview, stats bar, first-visit, location, final CTA |
| `/programs` | All 5 programs, editorial sections, alternating `ink`/`bone` backgrounds |
| `/coaches` | Full-bleed photo + bio sections, alternating left/right layout |
| `/schedule` | Coming-soon placeholder, swap-ready for Cal.com or static table |
| `/pricing` | Oversized typographic pricing layout, CTAs to `/contact` and `/pay` |
| `/contact` | Free trial / inquiry form → Resend → `OWNER_EMAIL` |
| `/waiver` | Explanation + download button for `/public/waiver.pdf` |
| `/pay` | CTA to `NEXT_PUBLIC_STRIPE_PAYMENT_LINK`, graceful fallback |

---

## Components
```
/components
  ui/                      # restyled shadcn primitives
  layout/
    Header.tsx             # sticky, blur on scroll, hamburger mobile
    Footer.tsx             # multi-row magazine style
    Marquee.tsx            # CSS-animated top ticker
  type/
    SectionLabel.tsx       # "01 / PROGRAMS" — Inter caps, tracked
    DisplayHeading.tsx     # Anton wrapper with Framer Motion reveal
    PulledQuote.tsx        # Instrument Serif italic
  home/
    Hero.tsx
    MissionBlock.tsx
    ProgramsList.tsx       # editorial row list, not cards
    CoachesPreview.tsx
    StatsBar.tsx
    FirstVisit.tsx
    LocationBlock.tsx
    FinalCTA.tsx
  shared/
    PhoneCTA.tsx           # tel: + sms: buttons
    MapEmbed.tsx
    Placeholder.tsx        # typed aspect-ratio placeholders
    Stamp.tsx              # small-caps tracked label
  forms/
    ContactForm.tsx
```

---

## File Structure
```
/app
  layout.tsx               # fonts, grain overlay, global metadata
  page.tsx                 # home
  programs/page.tsx
  coaches/page.tsx
  schedule/page.tsx
  pricing/page.tsx
  contact/page.tsx
  waiver/page.tsx
  pay/page.tsx
  sitemap.ts
  robots.ts
  globals.css              # tokens, base type, grain, prefers-reduced-motion
/components
  (see above)
/lib
  config.ts
  programs.ts
  coaches.ts
  email.ts
  utils.ts
/public
  logo.svg / logo.png      # placeholders — owner replaces
  waiver.pdf               # placeholder — owner replaces
  grain.png                # film grain overlay (~3% opacity)
  /images/                 # owner-supplied photos, one-for-one swap
.env.local.example
README.md
DESIGN_BRIEF.md
PROJECT_SPEC.md
```

---

## Environment Variables
```
RESEND_API_KEY=
OWNER_EMAIL=
NEXT_PUBLIC_STRIPE_PAYMENT_LINK=
NEXT_PUBLIC_SITE_URL=
```

---

## SEO & Metadata
- Per-page `<title>` and `<meta description>`
- Open Graph + Twitter card with brand-colored OG image (Anton on `ink`)
- JSON-LD `SportsActivityLocation` + `LocalBusiness` on home
- `sitemap.ts`, `robots.ts`
- Vercel Analytics

---

## Accessibility
- WCAG AA on every pair: `bone`/`ink`, `bone`/`blood`, `ink`/`paper`, `blood`/`ink`
- Alt text on all images (sensible placeholder defaults)
- Keyboard nav — custom focus rings (heavy blood outline)
- Form labels + `aria-` + error states
- `prefers-reduced-motion` disables marquee + scroll reveals

---

## Build Phases
| Phase | Scope |
|---|---|
| 1 | Foundation — scaffold, deps, fonts, Tailwind tokens, globals, lib files, env example, README |
| 2 | Type system + shared components — SectionLabel, DisplayHeading, PulledQuote, Stamp, Marquee, Header, Footer, PhoneCTA, MapEmbed, Placeholder, Button/Input restyled |
| 3 | Home page — all sections per design brief. Most time spent here. |
| 4 | Inner pages — programs, coaches, pricing, schedule, waiver, pay |
| 5 | Contact form — RHF + Zod + Server Action + Resend + honeypot |
| 6 | Polish — SEO, JSON-LD, OG image, sitemap, robots, analytics, a11y audit, mobile QA, Lighthouse |

---

## Deferred to v2
- Cal.com scheduling
- Online membership signup (Stripe Checkout)
- E-sign waiver
- CMS
- Member login portal
- Blog / news
