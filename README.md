# B2T Boxing

Marketing site for B2T Boxing in Portland, OR. Next.js 14 (App Router) + TypeScript + Tailwind.

Source-of-truth design docs:
- **[`DESIGN_BRIEF.md`](./DESIGN_BRIEF.md)** — visual direction. Read before touching CSS.
- **[`PROJECT_SPEC.md`](./PROJECT_SPEC.md)** — pages, components, file structure, build phases.

## Local development

```bash
cp .env.local.example .env.local      # fill in keys
npm install
npm run dev
```

Open <http://localhost:3000>.

## Environment variables

| Var | Required | Notes |
|---|---|---|
| `RESEND_API_KEY` | for contact form | Sign up at <https://resend.com>, verify a sending domain. |
| `OWNER_EMAIL` | for contact form | Inbox that receives free-trial / contact-form submissions. |
| `NEXT_PUBLIC_STRIPE_PAYMENT_LINK` | for `/pay` | Create at <https://dashboard.stripe.com/payment-links> as `$150/mo` recurring. |
| `NEXT_PUBLIC_SITE_URL` | yes | Public base URL — canonical tags, OG, sitemap. |

## Editing site content

Owner-editable data lives in `lib/` — no JSX changes required for routine updates.

| File | What it controls |
|---|---|
| `lib/config.ts` | Business name, phone, address, hours, mission, pricing, social handles |
| `lib/programs.ts` | The five programs (name, short + long descriptions, lists) |
| `lib/coaches.ts` | Coach names, credentials, bios |

## Replacing placeholder assets

| Placeholder | Replace with | Path |
|---|---|---|
| Logo (SVG) | Final logo SVG | `/public/logo.svg` |
| Logo (PNG) | Final logo PNG (transparent) | `/public/logo.png` |
| Waiver | Signed waiver PDF | `/public/waiver.pdf` |
| Coach photos | 4:5 portrait, B&W treatment preferred | `/public/images/coaches/<slug>.jpg` |
| Action photos | 3:4 or 4:3, high contrast | `/public/images/action/<descriptive-name>.jpg` |

Drop files in at the exact paths above and rebuild — no code changes required.

## Deploy

1. Push to GitHub (private).
2. Import the repo into Vercel.
3. Add the four env vars from the table above in the Vercel project settings.
4. Production deploys auto-trigger on push to `main`.

## Domain

Register the domain → in Vercel, add the domain → Vercel surfaces the DNS records to point at it.

## Future work (deferred)

- Cal.com / online class scheduling
- Online signup with Stripe Checkout
- E-sign waiver flow
- CMS (Sanity / Payload)
- Member login portal
- Blog / news
