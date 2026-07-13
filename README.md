# KASI Technical Services Ltd — Website

A Next.js 14 (App Router) site built from the company profile PDF, styled
to match the approved design reference (dropdown nav, icon-driven sections,
dedicated quote/certifications/structure pages).

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Pages

- `/` — home (full-bleed hero, why-choose-us, quick services, featured
  projects, capability ladder, trusted-by clients)
- `/services` — all 8 service lines, anchor-linked from the nav dropdown
- `/projects` — all 12 executed contracts with photos, filterable by category
- `/clients` — full 20-institution client grid
- `/certifications` — dated policy statements + corporate/regulatory
  document list ("on file, available on request" — see note below)
- `/structure` — visual organisational chart
- `/policies` — full text of the H&S, Environmental and Quality policies
- `/about` — company background, facts, mission/vision/values
- `/contact` — contact details, socials, map, message form
- `/quote` — detailed "Request a Quotation" form + info panel

## Deploy

Easiest path is Vercel (built by the Next.js team, free tier is enough for a
site like this):

1. Push this folder to a GitHub repo.
2. Import the repo at vercel.com → New Project.
3. No environment variables needed for the current build. Deploy.

## Structure

- `app/` — one folder per route
- `data/content.js` — **all site copy lives here**, pulled directly from
  the company profile PDF plus a few UI-only datasets (why-choose-us,
  socials, project category filters, icon names). Edit this file to
  update services, clients, projects, policies, or contact details.
- `components/` — shared UI, including `Icon.jsx` (lucide-react icon
  lookup by name) and `OrgBox.jsx` (used on `/structure`)
- `public/logo.png`, `public/wave.png` — real brand assets supplied by
  the client
- `public/projects/*.jpg` — real project photos extracted from the
  original PDF via `pdfimages`

## Honesty note on `/certifications`

The PDF only gives specific dates for the three policy statements
(Health & Safety, Environmental, Quality — all dated 2 Jan 2026). The
corporate/regulatory documents (Certificate of Incorporation, Trading
License, Tax Clearance, etc.) aren't dated in the source material, so
the page marks them "On file / available on request" rather than
inventing issue and expiry dates. If you have the real dates, add them
to the `legalDocuments` entries in `data/content.js` and update the
certifications table to show them.

## Contact form / Quote form

Both forms are currently front-end only (no submit handler). To make
them actually send enquiries, wire them to one of:
- Formspree / Web3Forms (no backend needed, quickest)
- A Next.js API route + email service (Resend, SendGrid, etc.)

The WhatsApp links on the nav, homepage and quote page already work —
they open `wa.me/256760065902` directly.

## Map

`/contact` embeds an OpenStreetMap iframe (no API key required) centred
on Namirembe Hill, Kampala. Swap in a Google Maps embed with your own
API key if preferred.

## Design system

- **Colors:** sampled directly from the real logo/wave assets —
  `#3AB54A` (brand green), `#D0DB57` (lime accent, used on dark
  backgrounds only), `#1E1B1B` (ink, from the logo's black road), warm
  white paper background. Text-color pairings were checked against
  WCAG contrast ratios so small text stays readable.
- **Type:** Space Grotesk (display/headings), Inter (body), IBM Plex Mono
  (data, labels, voltage ratings) — self-hosted via `@fontsource`.
- **Icons:** lucide-react, looked up by name through `components/Icon.jsx`
  (note: lucide has no brand/social icons, so LinkedIn uses a small
  inline SVG glyph — see that file).
- **Signature element:** the capability ladder on the homepage and the
  "transmission line" section dividers, echoing single-line diagrams
  used in electrical engineering.

