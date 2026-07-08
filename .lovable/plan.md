## PV Lumens India — Landing Page Plan

Modern, editorial B2B landing page built on the existing TanStack Start + Tailwind stack. Deep navy palette drawn from your logo. Lightweight — SVG illustrations where possible, one hero image, CDN-hosted brand logos. I'll take creative liberty on polish (motion, spacing, micro-typography) while keeping the structure below.

### Color & Type System
- Navy `#0F1B3D` (primary), mid navy `#1E3A6F`, cyan-blue accent `#3B82F6`, ice highlight `#7DD3FC`, off-white `#F5F7FA`, near-black text `#0A0F1F`.
- Tokens registered in `src/styles.css` (oklch): `--primary`, `--accent`, `--brand-navy-deep`, `--brand-cyan`, plus `--gradient-hero`, `--shadow-glow`, `--shadow-elegant`.
- Type: **Space Grotesk** (headings, tight tracking) + **Inter** (body) via `@fontsource-variable`. Large display sizes on hero + section headers, generous line-height on body.
- Light theme default; dark navy bands for Hero, Stats/Why, and Final CTA for rhythm.

### Sections

**1. Header (sticky, translucent → solid on scroll)**
- Left: circular PV Lumens logo mark + wordmark "PV LUMENS INDIA PVT LTD" on one line, tight tracking, white on navy.
- Right nav: Brands · Solutions · Downloads · About Us · Contact Us. Cyan underline slide-in on hover. Mobile: slide-down sheet.

**2. Hero (dark)**
- Full-bleed AI-generated "digital metropolis" cityscape at dusk with faint blue network lines (generated once, JPEG ~1600px, lazy).
- Dark gradient overlay for legibility; subtle animated particle/line grain.
- H1 (display): "Empowering Industry Excellence Through Nationwide Technology Distribution."
- Two CTAs: primary "Explore Ecosystem" (scrolls to Brands), ghost "Book a Conversation".
- Below the hero image on a light band: paragraph "India's trusted value-added distributor, connecting 2,500+ channel partners with 25+ global technology leaders in network infrastructure, safety & security, and test & measurement — for over 35 years." Centered, max-width 780px.

**3. Brands — Strategic Brand Partnerships (drag-to-rotate 3D cube)**
- Two-column layout. Left (40%): eyebrow "PARTNERSHIPS", H2 "Strategic Brand Partnerships", short body, ghost button "View Solutions".
- Right (60%): CSS 3D cube — drag on X/Y with pointer, auto-slow-rotate when idle, momentum on release. Pure CSS transforms + ~60-line pointer handler; no 3D library.
- 28 brands scraped from pvlumens.com via Firecrawl (map + scrape) → real logos saved as lovable-assets. Distribution across 6 faces: 6·6·6·6 on front/back/left/right (3×2 grids) and 2·2 on top/bottom, each face a frosted-glass tile with logo centered. Missing/low-res marks regenerated as clean monochrome SVG.
- Small hint "drag to rotate" + subtle glow under cube.

**4. Solutions — "Our Solutions" (light band, glass-cylinder motif)**
- Section header "Our Solutions" + sub "Five focused domains, one distribution partner."
- 5 cards in a responsive grid (3+2 on desktop, 1 col mobile), each with a small SVG glass-cylinder icon in cyan:
  1. **Network Infrastructure** — Cabling, racks, power, and thermal management for reliable data centres.
  2. **Testing & Measurement** — Electrical, thermal, and power-quality instruments for accurate diagnostics.
  3. **Safety & Security** — Fire alarm, access control, video surveillance, intrusion systems.
  4. **Productivity Solutions** — Barcode scanners, mobile computers, RFID, printing.
  5. **WiFi & Network Testing** — Wi-Fi planning, copper & fibre certification tools.
- Cards: white surface, subtle border, hover lifts + cyan edge glow, "Learn more →".

**5. Stats + Why PV Lumens (dark navy band)**
- Left: eyebrow "SINCE 1989", H2 "India's Trusted Technology Distribution Partner", sub "PV Lumens delivers network infrastructure, safety & security, and test & measurement solutions to 2,500+ channel partners across 18 cities in India.", plus a stylized SVG India map with softly pulsing cyan dot markers.
- Right: 2×3 grid of frosted-glass stat tiles:
  - 35+ Years — Distribution expertise across India
  - 18 Cities — Pan-India network reach
  - 2,500+ Partners — Trusted channel network
  - 25+ Global Brands — Authorized distributor
  - 2,500+ Products — Curated technology portfolio
  - 25+ Certified Brands — Full authorized coverage
- Closing line under grid: "Backed by technical support, warranty services, and e-waste management — a complete distribution partner, not just a supplier."

**6. E-Waste Callout (short strip, light)**
- Green-tinted band with recycle icon: "Responsible E-Waste Management — Compliant collection & recycling for enterprise customers." → link.

**7. Final CTA (dark navy, with sparkle motif)**
- H2 "Want to Know More?"
- Sub: "Let's talk about how PV Lumens can support your business with the right technology and the right partner."
- Pill button "Book a Conversation →" opens `mailto:info@pvlumens.com?subject=Book a Conversation`.
- Decorative cyan sparkle bottom-right.

**8. Footer (deep navy)**
- Col 1: logo + address
  - PV Lumens India Pvt Ltd
  - Times Tower, 8th Floor, Kamla Mill, Lower Parel, Mumbai 400013
  - +91-22-4170 0000 · info@pvlumens.com
- Col 2 (Sitemap): Home, About Us, Blog, News & Events, E-Waste Management, Media, FAQ, Contact Us, Downloads.
- Col 3 (Social): LinkedIn, Twitter/X, YouTube icon links.
- Bottom bar: © 2026 PV Lumens India Pvt Ltd.

### SEO / Head
- Route head on `/`: title "PV Lumens India — Technology Distribution Partner Since 1989", meta description matching hero sub, og:title/description/type, twitter:card, og:image = hero image URL (absolute).
- JSON-LD `Organization` (name, address, phone, sameAs socials).

### Technical Structure
```text
src/
  routes/
    __root.tsx           # minimal shell + head defaults
    index.tsx            # composes landing sections + head()
  components/landing/
    Header.tsx
    Hero.tsx
    BrandsCube.tsx       # CSS 3D + pointer drag
    Solutions.tsx
    StatsWhy.tsx
    EWasteCallout.tsx
    FinalCTA.tsx
    Footer.tsx
  lib/brands.ts          # 28 × { name, logoUrl }
  assets/
    hero-city.jpg.asset.json
    india-map.svg
    brand-logos/*.asset.json
```
- Firecrawl connector used once during build to fetch brand names + logos from pvlumens.com; results committed as static data + asset pointers (no runtime Firecrawl calls).
- Hero + any generated marks produced via imagegen → uploaded via `lovable-assets` CLI (no binaries in repo).
- Cube is ~120 lines total, zero npm deps.
- All colors via tokens; dark sections use `bg-primary`/`text-primary-foreground` — no hex in JSX.
- Motion: subtle scroll-reveal fades, cube inertia, hover lifts. No heavy libraries.

### Out of Scope (this pass)
- CMS / editable content (copy in code).
- Real form backend (mailto only).
- Sub-pages (About, Blog, Downloads) — nav links scroll to anchors for now; can be built next.
