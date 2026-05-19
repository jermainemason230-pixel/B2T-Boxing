# B2T Boxing — Design Brief

**This document is the design authority for the project. Any session building this site should read it before touching a line of CSS.**

---

## Reference Aesthetic

This site is the intersection of three things:

1. **Vintage fight poster** — Tyson/Ali era, Madison Square Garden, hand-stamped, oversized type, fight cards. Ink on paper. Nothing digital about it.
2. **Modern editorial publication** — *The Players' Tribune*, *Hypebeast*, *GQ Sports*, ESPN Cover Story long-reads. Deliberate layouts, numbered sections, text as the primary visual medium.
3. **Serious athletic brand** — Everlast, Title Boxing, Cuts Boxing Gym (NYC), Gleason's Gym. Not a boutique. Not a wellness brand.

**The visitor should feel:** This is a real gym run by real fighters who take the craft seriously. Gritty but not sloppy. Confident but not corporate.

**It must not feel like:**
- A SaaS landing page
- A boutique fitness studio (Barry's, Rumble)
- A wellness app
- A startup pitch deck

---

## Design Principles

### 1. Editorial over template
Layouts are asymmetric. Sections are numbered like magazine features (`01 / PROGRAMS`). Heavy horizontal rules separate sections. Whitespace is used as a deliberate design move, not as filler.

### 2. Type is the design
The headline on the home page should hit `clamp(5rem, 14vw, 14rem)`. These are billboards. Hierarchy is created through size, weight, and tracking contrast — not color blocks or boxes.

### 3. Photos are treated when they arrive
When the owner drops photos in, they get a consistent B&W + high-contrast + subtle film grain treatment. Photos bleed to the edge. Photos are never trapped in rounded cards with drop shadows.

### 4. Numbers are graphic elements
`45-5`, `$150/mo`, `8AM–8PM`, `7935 E BURNSIDE`, `971-900-3973`. Oversize them. Stamp them. Frame them. They are visual content, not data.

### 5. One accent color, used with restraint
Red (`blood`) is for: primary CTAs, the underline/dot on section numbers, one or two oversized numerical accents per page. Nothing else. No red hover states on every element. No red backgrounds except the final CTA banner.

### 6. No decoration
Every line, rule, and animation must earn its place. If a Lucide icon would sit next to a headline as "spice," it should be deleted.

---

## Typography

Loaded via `next/font/google`.

| Role | Font | Notes |
|---|---|---|
| **Display** | Anton | All headlines, section titles, logotype lockup, large numbers. Tight tracking at huge sizes. |
| **Editorial accent** | Instrument Serif (italic only) | Pulled quotes — mission statement, any coach quotes added later. ~1 in 30 text elements max. |
| **Body** | Inter | Paragraphs, nav, form fields, footer info. Weights 400 and 500 only. |

### Size reference
| Element | Font | Desktop size | Notes |
|---|---|---|---|
| Home hero headline | Anton | `clamp(5rem, 14vw, 14rem)` | line-height 0.85, tight tracking |
| Section title | Anton | `clamp(3rem, 7vw, 7rem)` | Always paired with a numbered label above |
| Subsection / card title | Anton | `2rem`–`3rem` | |
| Numbered label | Inter | `0.75rem`, uppercase, tracking `0.2em` | `01 / PROGRAMS` above section title |
| Body | Inter | `1rem`–`1.125rem` | weight 400, line-height 1.6 |
| Pulled quote | Instrument Serif italic | `2rem`–`3rem` | 1–3 places site-wide maximum |
| Stats / numbers | Anton | `clamp(4rem, 10vw, 9rem)` | Often blood-colored |

---

## Color Tokens

Added to `tailwind.config.ts` — not relying on Tailwind palette defaults.

```ts
colors: {
  ink:   "#0a0908",   // warm near-black — primary background
  bone:  "#f4f1ea",   // warm off-white — primary foreground / inverse bg
  blood: "#c1272d",   // vintage poster red — single accent
  ash:   "#1a1a1a",   // section/card bg on dark
  smoke: "#2a2a2a",   // borders and dividers on dark
  paper: "#e8e3d8",   // warm paper for inverse sections
}
```

### Usage rules
- **Default**: `ink` background, `bone` text.
- **Inversions**: Some sections flip to `bone` or `paper` background with `ink` text. The contrast itself is the design move.
- **`blood`**: Primary CTAs, section number accent, oversized stats. Nothing else.
- **No gradients. Anywhere. Ever.**

### Contrast verification (WCAG AA)
- `bone` (#f4f1ea) on `ink` (#0a0908): ✓ passes (contrast ~18:1)
- `bone` on `blood` (#c1272d): ✓ passes for large text; verify for body text
- `ink` on `paper` (#e8e3d8): ✓ passes
- `blood` on `ink`: acceptable for display/headline sizes; do not use for body text

---

## Texture

A barely-perceptible film grain overlay applied site-wide:
- Fixed-position element, full viewport, pointer-events none
- `grain.png` at ~3% opacity, `mix-blend-mode: overlay`
- Its absence should be perceptible even if the grain itself isn't

---

## Iconography

Lucide icons used only where they clearly earn it:
- `Phone` — call CTA
- `MessageSquare` — text CTA
- `MapPin` — address
- `ArrowUpRight` — external link arrows

No decorative icons next to headlines. No icon-per-feature grids.

---

## Motion

Framer Motion — sparse, purposeful.

- **Scroll reveals**: `y: 40 → 0`, `opacity: 0 → 1`, `ease: [0.16, 1, 0.3, 1]`. Staggered for multi-line headlines.
- **Marquee ticker**: CSS `animation: marquee linear infinite`. No JS required.
- **Buttons**: Background fill transition on hover, arrow translates `2px` right.
- **`prefers-reduced-motion`**: All animation disabled. Marquee paused.

---

## Component-Specific Notes

### Header
- Left: `B2T BOXING` in Anton until real logo arrives
- Nav: center or right — `Programs / Coaches / Schedule / Pricing / Contact` in Inter caps, tracked
- Right: `BOOK FREE TRIAL` button — blood fill, sharp corners, white Anton text, arrow
- Sticky with background blur at `scrollY > 100px`
- Mobile: hamburger drawer

### Top Marquee (above header)
`FREE TRIAL AVAILABLE  •  WALK-INS WELCOME  •  7935 E BURNSIDE ST  •  971-900-3973  •  8AM – 8PM DAILY`
- Anton, tracking `0.15em`, ~0.875rem
- `blood`-red bullet separators (`•`)
- Continuous CSS scroll, paused on `prefers-reduced-motion`

### Hero
- Full viewport height, `ink` bg
- Headline left-aligned, `clamp(5rem, 14vw, 14rem)`, line-height 0.85:
  ```
  STEP IN
  THE RING.
  ```
- Below headline: Inter caps subline — `PORTLAND'S YOUTH-FIRST BOXING GYM  —  EST. ON E. BURNSIDE`
- Tall portrait placeholder right of headline (B&W treated when photo lands)
- Bottom row, magazine-cover style: `ISSUE 01  /  PORTLAND, OR  /  EST. 8AM–8PM DAILY  /  971-900-3973`
- CTA row bottom-left: `BOOK A FREE TRIAL →` (blood filled), then `CALL  •  TEXT  •  VISIT` as text links

### Programs List (home page)
Not cards — a vertical editorial list. Each row:
```
01  FITNESS BOXING ——————————————— Conditioning. Power. Confidence.  →
```
- Anton for name (~3rem), Inter for description
- On hover: row bg fills `blood`, text inverts to `bone`, arrow translates right
- Full-width, no grid

### Coaches Preview (home page)
Three vertical photo blocks side-by-side:
- 3:4 aspect placeholder, full-bleed (no border, no radius)
- Name in Anton (~2.5rem) below
- Credentials in Inter caps, tracked, below that
- `MEET THE TEAM →` text link

### Stats Bar
Four cells, heavy vertical rules between:
```
| 03            | 5          | 45-5               | 30                   |
| HEAD COACHES  | PROGRAMS   | BRYAN'S AMATEUR    | DAY CANCELLATION     |
|               |            | RECORD             | NOTICE               |
```
Big Anton number in `blood`, label in Inter caps, small.

### First Visit block
Two-column. Left: editorial paragraph. Right: stamped list using `+` or custom glyph (not Lucide):
```
+ ATHLETIC CLOTHES + SHOES
+ AN OPEN MIND
—
WE PROVIDE
GLOVES + HAND WRAPS
```

### Final CTA Banner
Full-width `blood` background. Oversized Anton: `WALK IN. SUIT UP. STEP IN THE RING.`
Button: white bg, `ink` text, hover inverts.

### Footer
`ink` bg, multi-row magazine style:
- Top: logo lockup + tagline
- Middle: address / hours / contact / nav columns
- Bottom: copyright + social text links (hidden when handles are blank)
- Heavy horizontal rules between rows

### Button (restyled shadcn)
- `rounded-none` (sharp corners)
- Anton text, uppercase, tracked
- Blood fill, bone text as default
- Hover: slight background lightening or full invert
- Animated arrow (`→`) translates `2px` right on hover

### Input (restyled shadcn)
- No input box — `border-b border-smoke` only
- `focus:border-blood` transition
- No background fill, no border-radius

---

## Anti-Patterns (Forbidden)

Anything matching these patterns must be revised before merging:

- ❌ Centered hero with headline + subhead + two pill buttons
- ❌ Equal three-column grid of rounded program cards
- ❌ `rounded-2xl` anywhere — use `rounded-none` or `rounded-sm`
- ❌ Drop shadows, glassmorphism, frosted blur cards
- ❌ Gradient backgrounds (any direction, any colors)
- ❌ Stock testimonial cards with quote marks and avatar circles
- ❌ Emoji used decoratively
- ❌ Lucide icons next to every headline
- ❌ Generic CTA copy ("Get Started", "Learn More", "Explore") — write specific action text
- ❌ shadcn defaults used unmodified — every component must be restyled
- ❌ Everything centered — break the grid intentionally
- ❌ Soft pastels or any color outside the six defined tokens

---

## The Standard

A designer looking at the home page should not be able to tell it was built by an AI. If something starts to feel generic while building — stop. Reconsider the type sizes, the asymmetry, or the use of color before continuing.
