# malcolmsheehan.com — Build Spec

## Overview
Personal site for Malcolm Sheehan. Single page. No CMS. Deployed on Cloudflare Pages via GitHub.

## Stack
- **Framework**: Astro (static output)
- **Deployment**: Cloudflare Pages, connected to GitHub repo (auto-deploy on push)
- **Fonts**: EB Garamond + DM Sans via Google Fonts

---

## Design Reference
See `malcolmsheehan_site_v2.html` — match this exactly. Do not deviate from the layout, typography, spacing, or color palette.

Key design decisions already made:
- Background: `#f2f0ea` (warm parchment)
- Text: `#1c1c1a`
- Muted: `#7a7a72`
- Subtle (borders): `#c8c6be`
- Fixed dark top bar (`#1c1c1a`) with name left, location right
- Large EB Garamond name in hero, no other hero content
- Section labels: 10px uppercase tracked
- Essay titles: EB Garamond 18px, no italic
- All borders: 1px `#c8c6be`

---

## Structure

```
/
├── public/
│   └── reading.json
├── src/
│   └── pages/
│       └── index.astro
├── astro.config.mjs
└── package.json
```

---

## Reading List

Sourced from `/public/reading.json` at build time (Astro reads and renders it server-side). When Malcolm updates the JSON and pushes to GitHub, Cloudflare Pages rebuilds automatically.

Use the provided `reading.json` file as-is.

---

## Writing Section — Substack RSS

Fetch Malcolm's Substack RSS feed **client-side on page load** (not at build time) so new posts appear without a rebuild.

- **Feed URL**: `https://malcolmsheehan.substack.com/feed`
- Parse the XML, extract `<item>` entries: `<title>`, `<link>`, `<pubDate>`
- Format date as `Mon YYYY` (e.g. "May 2026")
- Render as list items matching the design: title left (links to Substack post), date right
- While loading: show 3 placeholder rows at reduced opacity (skeleton state)
- On error: show nothing — do not display an error message to the user
- Limit to 6 most recent posts

---

## Contact Section

Two links: Email and LinkedIn.

- Email: `malcolm.sheehan@outlook.com`
- LinkedIn: `https://www.linkedin.com/in/malcolmsheehan`

---

## Accessibility Requirements

- `<header>`, `<main>`, `<footer>` landmarks
- All sections use `aria-labelledby` pointing to their label element
- Contact nav wrapped in `<nav aria-label="Contact links">`
- Top bar `<header role="banner">`
- Sufficient color contrast on all text (WCAG AA minimum)
- Focus styles visible on all interactive elements (links)
- Writing list items: each `<a>` has descriptive text (the essay title itself is sufficient)
- Reading list: `<ul>` with `<li>` items, no redundant ARIA

---

## Responsive

- Max width 580px, centered
- Below 600px: top bar padding reduces to 16px; hero name scales to 32px
- No horizontal scroll at any viewport width

---

## Notes
- No JavaScript frameworks — vanilla JS only for the RSS fetch
- No analytics, no tracking, no cookies
- No dark mode toggle (single theme)
- `<title>` tag: `Malcolm Sheehan`
- `<meta name="description">`: `Malcolm Sheehan — writing and reading.`
