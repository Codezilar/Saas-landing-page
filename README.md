# Pasar Marketing Landing Page

A Next.js (App Router) + TypeScript landing page for Pasar Marketing, styled
with plain CSS Modules (no Tailwind/CSS frameworks) and a light/dark theme
toggle in the navigation. The site loads in **light mode by default**; the
toggle persists the choice in `localStorage`.

## Getting started

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Theming

- `app/globals.css` defines all design tokens as CSS variables under `:root`
  (light) and `[data-theme="dark"]` (dark).
- `components/ThemeProvider.tsx` is a client context that flips
  `document.documentElement`'s `data-theme` attribute and remembers the
  choice.
- `components/ThemeToggle.tsx` is the sun/moon switch rendered in the header.
- Every component's CSS module references the shared `var(--token)` values,
  so no per-component dark-mode overrides are needed.

## Structure

- `app/layout.tsx` – root layout, fonts (Sora display / Inter body), wraps
  the tree in `ThemeProvider`
- `app/page.tsx` – assembles all sections
- `components/Header.tsx` – nav with theme toggle + Contact button
- `components/Hero.tsx` + `DashboardPreview.tsx` – headline, CTAs, dashboard
  mockup (sidebar, stat cards, bar chart, top-seller list)
- `components/TrustedBy.tsx` – logo strip
- `components/Pricing.tsx` – Personal/Business tabs + Startup/Scaleup/
  Enterprise plan cards
- `components/Features.tsx` – 4-card grid with mock stat/line/bar/donut
  charts, plus the floating keyword tags
- `components/Solution.tsx` – 3-card "Ultimate Digital Marketing Solution"
- `components/FAQ.tsx` – accordion
- `components/Help.tsx` – "Hello, How can we help you" contact cards
- `components/Footer.tsx` – dark footer with link columns

Every section is its own component + co-located `.module.css` file for clear
boundaries and easy editing.
