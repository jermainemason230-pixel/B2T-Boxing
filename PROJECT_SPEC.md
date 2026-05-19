# B2T Boxing — Project Spec

Marketing website for B2T Boxing, a boxing gym in Portland, OR. Conversion-focused brochure site with a Stripe Payment Link shortcut for existing members. New signups happen in person.

## Goals
1. Drive free trial signups (primary CTA).
2. Make it dead-simple to call, text, or visit in person.
3. Let existing members pay monthly dues online via Stripe Payment Link.
4. Surface gym info (programs, coaches, pricing, location) clearly.

## Tech stack
- Next.js 14 (App Router) + TypeScript (strict)
- Tailwind CSS + shadcn/ui
- react-hook-form + Zod
- Resend (transactional email)
- Stripe Payment Link via env var (no SDK in v1)
- Vercel Analytics
- Hosted on Vercel, private GitHub repo

## Business info
- **Name**: B2T Boxing
- **Address**: 7935 E Burnside St, Portland, OR 97215
- **Hours**: 8am – 8pm daily
- **Phone**: 971-900-3973 (voice + SMS)
- **Mission**: To help youth athletes with gear sponsorship, travel, and upcoming fights.

## Programs
1. Fitness Boxing — conditioning, no contact
2. Fundamentals — stance, footwork, defense, six core punches
3. Sparring — supervised live training
4. Fight Team — amateur/pro prep for sanctioned bouts
5. Kids / Teens — discipline, focus, athleticism

## Coaches
- Bryan Sanchez — 45-5 amateur, 3-0 pro, 3x Golden Gloves champion
- JC Wade — Coach
- Oliver Gradzadi — Coach

## Pricing
- $150/month dues
- $100 one-time enrollment fee
- 30-day cancellation notice
- New signups in person; existing members pay dues online via Stripe Payment Link

## First-timer info
- Wear athletic clothes/shoes
- Gym provides gloves + wraps for first visit
- No experience needed
- Sparring offered

## Visual direction
- Palette: matte black `#0a0a0a`, crimson `#dc2626`, off-white `#fafaf9`
- Type: condensed display (Bebas Neue / Anton / Oswald) + Inter body
- Mood: gritty, high-contrast, bold type, generous whitespace
- Imagery: dark SVG placeholders labeled "photo coming soon"; owner replaces files one-for-one in `/public/images/`
- Logo placeholders at `/public/logo.svg` and `/public/logo.png`

## Pages
- `/` — Hero, mission, programs preview, coaches preview, what-to-expect, map, footer CTA
- `/programs` — All 5 with longer descriptions
- `/coaches` — Full bios with action photo placeholders
- `/schedule` — Coming-soon placeholder, phone/SMS CTAs, swap-ready
- `/pricing` — Dues, enrollment, policy, CTAs to `/contact` and `/pay`
- `/contact` — Free trial / inquiry form → Resend → owner email
- `/waiver` — Note + download button for `/public/waiver.pdf`
- `/pay` — CTA to `NEXT_PUBLIC_STRIPE_PAYMENT_LINK` w/ graceful fallback

## Components
`Header`, `Footer`, `Hero`, `ProgramCard`, `CoachCard`, `PricingCard`, `CTABanner`, `PhoneCTA`, `MapEmbed`, `ContactForm`, `Placeholder`, plus shadcn primitives in `components/ui/`.

## File structure
```
/app
  layout.tsx · page.tsx · sitemap.ts · robots.ts
  programs/page.tsx · coaches/page.tsx · schedule/page.tsx
  pricing/page.tsx · contact/page.tsx · waiver/page.tsx · pay/page.tsx
/components
  ui/ · Header.tsx · Footer.tsx · Hero.tsx
  ProgramCard.tsx · CoachCard.tsx · PricingCard.tsx
  CTABanner.tsx · PhoneCTA.tsx · MapEmbed.tsx
  ContactForm.tsx · Placeholder.tsx
/lib
  config.ts · programs.ts · coaches.ts · email.ts · utils.ts
/public
  logo.svg · logo.png · waiver.pdf · /images/
.env.local.example · README.md
```

## Env vars
```
RESEND_API_KEY=
OWNER_EMAIL=
NEXT_PUBLIC_STRIPE_PAYMENT_LINK=
NEXT_PUBLIC_SITE_URL=
```

## SEO & a11y
- Per-page title + meta description
- OG + Twitter defaults with placeholder OG image
- JSON-LD `LocalBusiness` / `SportsActivityLocation` on home
- `sitemap.ts`, `robots.ts`, Vercel Analytics
- WCAG AA contrast, alt text, keyboard nav, focus rings, form labels, `prefers-reduced-motion`

## Build phases
1. **Scaffold & config** — create-next-app, shadcn init, config files, fonts, tokens, env example, README
2. **Layout & home** — Header, Footer, home page, PhoneCTA, CTABanner, Placeholder
3. **Inner pages** — programs, coaches, pricing, schedule, waiver, pay
4. **Contact form** — RHF + Zod + Server Action + Resend + honeypot
5. **Polish** — SEO/JSON-LD/sitemap/robots, analytics, a11y audit, mobile QA, README

## Deferred to v2
Cal.com scheduling, online membership signup, e-sign waiver, CMS, member portal, blog.

---

## Ambiguities / assumptions to confirm

1. **Email domain** — `info@b2tboxing.com` is a placeholder. Resend requires a verified domain to send from anything other than `onboarding@resend.dev` in test mode. Assumption: ship with `onboarding@resend.dev` as the **from** address in dev, README documents domain verification before launch. The **to** address is `OWNER_EMAIL` (env).
2. **Owner email** — Not provided. Will be supplied via `OWNER_EMAIL` env var; README explains.
3. **Map embed URL** — Not provided. Will use a Google Maps `iframe` pointing at the address with a sensible default `src`; owner can swap for a custom embed URL in `lib/config.ts`.
4. **Display font** — Spec lists three options (Bebas Neue / Anton / Oswald). Picking **Bebas Neue** as default for headlines; one-line swap if owner prefers another.
5. **Logo / images / waiver PDF** — All shipped as placeholders; owner replaces files in `/public/`. README will list exact paths and aspect ratios.
6. **Stripe Payment Link** — Owner creates the $150 recurring link in Stripe and pastes URL into env. Site renders a "coming soon" fallback until the var is set.
7. **Coach bios** — Only Bryan Sanchez has copy. JC Wade and Oliver Gradzadi listed as "Coach" placeholders; owner fills in `lib/coaches.ts`.
8. **Social handles** — Empty placeholders in config; footer hides icons when blank.
9. **Schedule page** — Shipping the coming-soon variant; component structured so a Cal.com embed or static table is a one-component swap.
10. **JSON-LD geo coordinates** — Will use the Burnside St address; lat/lng can be added to config later if owner wants precise coords.
11. **Phone format** — Using `971-900-3973` for `tel:` / `sms:` href and `(971) 900-3973` for display; both in `lib/config.ts`.
12. **`NEXT_PUBLIC_SITE_URL`** — Used for canonical URLs, OG tags, sitemap. Falls back to a sensible localhost default in dev.

None of these block Phase 1.
