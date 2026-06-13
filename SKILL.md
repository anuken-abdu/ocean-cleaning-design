---
name: ocean-cleaning-design
description: Use this skill to generate well-branded interfaces and assets for Ocean Cleaning (профессиональный клининг для ресторанов и HoReCa в Алматы), either for production or throwaway prototypes/mocks. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping. Все тексты — на русском.
user-invocable: true
---

# Ocean Cleaning — design skill

Read `readme.md` in this skill first — it holds the brand context, content
fundamentals, visual foundations and iconography. Then explore the other files.

## What's here
- `styles.css` + `tokens/` — all design tokens (colors, type, spacing, effects).
  Link `styles.css` to inherit the whole system.
- `components/` — React (JSX) primitives: `Button`, `Icon`, `Logo`,
  `ServiceBadge`, `FeatureCheck`, `DashedCallout`, `ContactCard`, `WaveDivider`,
  `SectionHeading`. Each has a `.prompt.md` with a usage example.
- `ui_kits/landing/` — the full one-page landing assembled from the components.
- `guidelines/` — foundation specimen cards.
- `assets/logo.svg` — placeholder logo (replace with the real brand file).

## How to use it
- **Visual artifacts** (slides, mocks, throwaway prototypes): copy assets out and
  build static HTML for the user to view. Link `styles.css`, load Lucide + the
  components, reuse the existing sections.
- **Production code:** copy assets and read the rules here to design on-brand.

## Brand rules that matter most
- Royal/ocean blue `#1E5FD1` primary, white page, navy contact panel. Aqua tint
  for soft surfaces. No gradients except subtle photo treatments.
- Type: **Onest** (display, headings, hero — hero is UPPERCASE) + **Manrope** (body).
- Icons: **Lucide line icons only**, stroke 1.75. No emoji, no unicode glyphs.
- Signature motifs: wavy section dividers, round blue service badges, dashed-outline notes.
- Voice: Russian, "вы" to the client / "мы" for the company. No stat counters,
  no duplicate CTAs, no animations beyond hover/press micro-states.

## ⚠️ Production handoff spec (IMPORTANT — overrides defaults)
When delivering the production website (e.g. via Claude Code), ship it as:
- **One `index.html`** with **inline CSS and JS** — no build step, no bundler.
- **No frameworks** — plain HTML/CSS/JS. Do **NOT** default to React/Next.js.
  (The React UI kit in this skill is for the design system only.)
- A `/images/` folder for the real photos (restaurant interiors, etc.).
- Footer text: **«Разработка и продвижение Anuken»**, where *Anuken* links to
  WhatsApp `https://wa.me/77074534518`.

## If invoked with no other guidance
Ask the user what they want to build, ask a few focused questions, then act as an
expert Ocean Cleaning designer and output either HTML artifacts or production code,
depending on the need.
