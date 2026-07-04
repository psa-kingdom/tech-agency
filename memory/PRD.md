# Altios Labs — Marketing Site PRD

## Original Problem Statement
Build a tech agency landing page. Source of truth for functionality/content:
master_prompt.md. Source of truth for UI/UX/visual design: DESIGN.md (an
Origin Financial / useorigin.com-derived dark "midnight gallery" design
system).

## User Choices Collected
1. Scope: Homepage + all 5 service pages (full master_prompt sitemap)
2. Agency name: **Altios Labs**
3. Logo: simple text/wordmark (name not finalized) — CSS-based mark, no image
4. Trust strip: text-only, no client logos
5. CTA link `https://cal.com/souravdash` and email `srv.uxd@gmail.com`: used as defaults (not explicitly confirmed by user)
6. Explicit instruction: leave every hero/deep-dive visual as a styled
   placeholder block (dashed border + icon + caption) — do NOT generate/insert
   real images anywhere on the site.

## Architecture
- Frontend-only build (React 19 + react-router-dom v7 + Tailwind + shadcn/ui
  + framer-motion). No backend/DB features needed for Phase 1 (static
  content site, all CTAs are external links/mailto).
- Design tokens (Origin-inspired dark theme) implemented via CSS variables in
  `index.css` + Tailwind config extensions (`iris`, `periwinkle`, `orchid`,
  `signal`, `obsidian`, `abyss`, `graphite`, `steel`, `silver`, `ash`, `cloud`,
  `fog`). Fonts: Fraunces (display, weight 300), Inter (sans/body), Roboto
  Mono (uppercase labels).
- Content fully separated from markup in `src/data/siteData.js` (per
  master_prompt Phase 2 prep — future CMS/admin panel can plug in).
- Reusable component system: Layout (Navbar/Footer/GetInTouch), Hero,
  BentoGrid, WhyUs, Process, Testimonials (home); ServiceHero, WhatsIncluded,
  DeepDive, WhoItsFor, ServiceFAQ (generic, driven by siteData per slug).
- Routes: `/` (HomePage), `/services/:slug` (ServicePage, generic template
  driven by `getServiceBySlug`). Invalid slugs redirect to `/`.
- Anchor nav (Process/About/Contact) implemented via `location.hash` +
  scrollIntoView effect in Layout.jsx — works cross-page and same-page.

## What's Been Implemented (Feb 2026)
- Sticky glassmorphic navbar: logo, Services dropdown (shadcn DropdownMenu,
  all 5 services), Process/About/Contact anchor links, "Book a Call" CTA
  (opens cal.com in new tab), mobile Sheet-based hamburger menu.
- Homepage: centered Hero (eyebrow, H1, subhead, primary+secondary CTA, hero
  visual placeholder, text-only trust strip), Bento grid (3 large + 2 small
  tiles, correct mobile stacking order), Why Us (4 differentiators), Process
  (4-step timeline), Testimonials (3 placeholder cards), global Get in Touch
  CTA section.
- 5 service pages (`websites`, `ai-automation`, `custom-software`,
  `sap-transformation`, `digital-marketing`) — each with hero, What's
  Included grid, alternating Deep-dive sections (visual placeholders), Who
  It's For, Mini FAQ accordion, Get in Touch.
- Footer with Services/Company/Connect columns + copyright bar.
- All interactive elements have data-testid attributes.
- Tested end-to-end via testing_agent_v3 — 1 bug found (anchor-scroll not
  working) and fixed (Layout.jsx hash-scroll effect). Re-verified working.

## Prioritized Backlog / Next Steps (Phase 2 per master_prompt)
- P0: Swap VisualPlaceholder blocks for real hero mockups/screenshots once
  agency has real product visuals or brand assets.
- P0: Confirm/replace default CTA link (cal.com/souravdash) and contact
  email (srv.uxd@gmail.com) — user has not explicitly confirmed these.
- P1: Real testimonials to replace placeholder quotes.
- P1: Contact/lead-gen form (Get in Touch section designed to swap from
  plain calendar link to form + calendar combo without restructuring).
- P1: Light/dark theme toggle in nav (tokens already defined as CSS vars to
  support this without rewriting component styles).
- P2: Blog (CMS-driven), admin panel for content/leads management.
- P2: Finalized agency logo/brand identity (current logo is a placeholder
  wordmark).

## Notes
- No backend/auth/DB was touched — default FastAPI hello-world server.py
  remains untouched.
- No 3rd-party integrations were required for this build.
