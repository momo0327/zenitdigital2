# Design System

Living document. Update whenever a design decision is made — don't re-derive the system from scratch on each page.

## Principle: fluid over stepped

Prefer CSS `clamp()` for typography and spacing instead of Tailwind's stepped breakpoints (`sm:`/`md:`/`lg:`/`xl:`/`2xl:`). Stepped breakpoints cause:
- Sudden jumps at viewport boundaries (e.g. `xl:text-9xl 2xl:text-[12rem]` — a 50% jump across one breakpoint).
- Easy regressions like `sm:text-[80px] md:text-6xl` where md is *smaller* than sm.
- Disproportion at very wide monitors when one element scales but another doesn't.

`clamp(MIN, PREFERRED, MAX)` scales smoothly between two viewport sizes and clamps at both ends, so proportions stay consistent.

Use stepped breakpoints only when the change is **structural** (e.g. `lg:grid-cols-2` flipping to single column). Don't use them for sizing that should scale linearly.

## Layout caps

- Page-level outer cap: `max-w-[1600px] mx-auto` on the top hero/container. Past 1600px viewport, content centers with margins instead of growing.
- Single-column hero content: `max-w-[60rem]` (960px).
- 2-column inner content: `max-w-[40rem]` per column.
- Contact card: `max-w-[40rem]`.

## Typography

Use the Antonio font for headings (`font-antonio font-bold`), Geist for body (default).

### Scale (clamp-based)

| Role | Class | Effective range |
|---|---|---|
| Hero headline (H1) | `text-[clamp(3rem,9vw,9.5rem)]` | 48px → 152px |
| Section heading (H2) | `text-[clamp(2rem,4.5vw,4.5rem)]` | 32px → 72px |
| Body lead | `text-[clamp(1rem,0.5vw+0.875rem,1.25rem)]` | 16px → 20px |
| Body small | `text-[clamp(0.875rem,0.5vw+0.75rem,1.125rem)]` | 14px → 18px |
| Card emphasis (e.g. email in CTA) | `text-[clamp(1rem,1vw+0.625rem,1.625rem)]` | 16px → 26px |
| Eyebrow / label | `text-[clamp(0.7rem,0.3vw+0.625rem,0.875rem)]` | 11.2px → 14px |
| Caption (e.g. "Replies within 24h") | `text-[clamp(0.8rem,0.3vw+0.7rem,0.95rem)]` | 12.8px → 15.2px |

### Line height

- Hero (H1): `leading-[0.95]` — tight stacking for impact.
- Section (H2): `leading-[1.05]`.
- Body: `leading-relaxed` (Tailwind default ~1.625).

### Eyebrows

Uppercase, wide tracking: `uppercase tracking-[0.2em] text-white/50`.

## Spacing

### Outer page padding

- Horizontal: `px-[clamp(1.5rem,5vw,5rem)]` (24px → 80px).
- Vertical (hero/section): `py-[clamp(6rem,10vw,9rem)]` (96px → 144px).

### Card padding

- Standard card: `p-[clamp(1.25rem,1.75vw,2rem)]` (20px → 32px).
- Wide card: `p-[clamp(1.5rem,2vw,2.5rem)]` (24px → 40px).

### Gaps & spacing between siblings

- Card item gap: `gap-[clamp(0.75rem,1vw,1.25rem)]`.
- Card row spacing: `space-y-[clamp(0.875rem,1.25vw,1.5rem)]`.
- Section spacing within a column: `space-y-[clamp(1rem,1.5vw,1.75rem)]`.
- Heading-to-body gap: `mb-[clamp(1.75rem,2.5vw,2.75rem)]`.
- Body-to-card gap: `mb-[clamp(2.5rem,4vw,4rem)]`.

### Icon sizing

- Standard icon (lucide): `size-[clamp(1rem,1.2vw,1.5rem)]` (16px → 24px).
- Icon background pad: `p-[clamp(0.5rem,0.7vw,0.75rem)]`.
- CTA arrow circle: `size-[clamp(2.5rem,3.5vw,3.75rem)]`.

## Surfaces

### Dark info card (on black bg)
```
bg-[#F5F5F5]/5 border border-white/10 rounded-2xl
```
Used for grouped contact info, secondary panels.

### Light CTA card (on black bg)
```
bg-[#F5F5F5] hover:bg-white transition-colors rounded-2xl
```
Used as the primary action panel — high contrast against the dark page.

### Icon chip (on dark cards)
```
bg-[#F5F5F5] rounded-full
```
White circular background for lucide icons. Icon color: `text-black`.

### Action button circle (on light CTA cards)
```
bg-black rounded-full grid place-items-center
group-hover:scale-110 transition-transform
```
With white arrow icon inside.

## Colors

Brand and theme colors live in `app/constants/theme.ts` (BRAND_COLORS, BACKGROUND_COLORS, GRADIENTS). Do not hardcode brand hexes elsewhere — import them.

Common surface tints (not in theme.ts because they're alpha-on-black, used directly):
- `text-white` — primary text on dark bg
- `text-white/70` — secondary text on dark bg
- `text-white/50` — labels/eyebrows on dark bg
- `border-white/10` — subtle dividers on dark bg
- `bg-[#F5F5F5]/5` — barely-there panel surface on dark bg
- `bg-[#F5F5F5]` — light card surface (almost-white)

## Page patterns

### Single-column hero + contact (ContactPage)

Centered hero with headline, subtitle, contact info card below. Use when there's one primary action and the messaging is simple. Avoids the "two columns saying the same thing" trap.

```
<flex centered, max-w-[1600px] outer cap>
  <max-w-[60rem] text-center>
    <h1 hero clamp>HEADLINE</h1>
    <p body lead, max-w-[36rem] mx-auto>...</p>
    <info card, max-w-[40rem] mx-auto, text-left>
      <icon row × N>
    </info card>
    <caption>...</caption>
```

### Two-column split (when each side has distinct content)

Only use when left and right have genuinely different roles (e.g. message vs visual, content vs media). If both columns are saying the same thing or both contain contact info, collapse to single column. Don't pad a 2-column layout with redundant copy.

## When NOT to use clamp

- **Layout structure**: `lg:grid-cols-2`, `hidden lg:block`, etc. — these are structural breakpoints. Use Tailwind's stepped variants.
- **Tiny ranges**: if a value barely changes between mobile and desktop (e.g. `0.5rem` to `0.75rem`), a single static value is fine.
- **Border radius**: keep `rounded-2xl` static; fluid radii read as broken.

## Ambient background effects (dark pages)

For dark hero sections that need atmosphere without being loud, layer two pointer-events-none elements behind the content:

1. **Dot grid texture** — radial-gradient dots tiled at `28px 28px`, `rgba(255,255,255,0.08)`, masked with a radial gradient (`black 30%, transparent 75%`) so the dots fade at the edges. Adds quiet texture, reads as "intentional design", no animation.
2. **Ambient brand glow** — single radial-gradient ellipse using the accent brand color at low alpha (`rgba(154,194,255,0.14)`), positioned behind the headline (`50% 35%`), fading to transparent. Feels like ambient light without being a "spotlight".

Wrap the section in `relative overflow-hidden` and put content above with `relative z-10`. CSS-only, zero JS, costs nothing at render time.

Use sparingly — one section per page max, only on dark pages where the surface would otherwise feel flat.

## Image edge blending

Photos with a near-white background placed on a near-white page produce a visible rectangle (slight color/compression mismatch). To blend the edges seamlessly, apply a `mask-image` linear-gradient on the image.

```
[mask-image:linear-gradient(to_bottom,black_75%,transparent_100%)]
[-webkit-mask-image:linear-gradient(to_bottom,black_75%,transparent_100%)]
```

Tune the `75%` stop:
- Higher (e.g. 85%) — fade only the very bottom edge.
- Lower (e.g. 60%) — softer, longer fade.

Use any direction (`to top` / `to right` / etc.) for the edge that's visible. Works on any background since it actually goes to transparent — not a color-match.

Prefer this over `mix-blend-mode: multiply` for white-on-white shots: `multiply` is fragile (breaks if you change the page bg to dark) and can tint mid-tones. `mask-image` is bg-agnostic.

The "right" fix is re-exporting the asset with a transparent alpha channel; reach for that if you ever re-process the source.

## Decision log

Add a new bullet whenever the system changes. Link to commit/PR if useful.

- **2026-05-04** — Initial system documented. Migrated ContactPage from stepped breakpoints to clamp(). Capped page max-width at 1600px. Switched ContactPage from 2-column form layout to single-column hero + contact card after deciding to remove the contact form (using `mailto:hello@zenitdigital.se` instead).
- **2026-05-04** — Added ambient background pattern (dot grid + brand glow) on ContactPage hero. Documented as the "Ambient background effects" pattern.
- **2026-05-04** — Applied bottom `mask-image` fade to the homepage hero image (`/dinfarsa.png`) to hide the visible JPEG edge. Documented as the "Image edge blending" pattern.
