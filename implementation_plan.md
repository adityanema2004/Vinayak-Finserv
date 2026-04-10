# Vinayak Finserv — Complete Website Implementation Plan

A full production-ready financial services website for Vinayak Finserv, Raipur, Chhattisgarh.

## Overview

The project is a fresh Vite + React + TypeScript scaffold in `c:\Full Stack Project\Vinayak-Finserv\vinayak-finserv-frontend`. We'll install all required dependencies, build the full component tree, and wire up 6 routes with animations, calculators, a contact form (EmailJS), and a blog.

---

## User Review Required

> [!IMPORTANT]
> The workspace already has a Vite + React + TS scaffold with **no extra packages installed yet**. All dependencies below will be installed via `npm install`. This will take a few minutes.

> [!WARNING]
> **EmailJS credentials are placeholders** — the owner must replace `EMAILJS_SERVICE_ID`, `EMAILJS_TEMPLATE_ID`, and `EMAILJS_PUBLIC_KEY` in `src/config/emailjs.ts` with real credentials before the contact form emails will actually be sent.

> [!NOTE]
> TypeScript version in the scaffold is `~6.0.2` (very recent). All packages will be installed to be compatible.

---

## Dependencies to Install

```
npm install react-router-dom framer-motion @emailjs/browser react-hook-form @hookform/resolvers zod recharts react-helmet-async lucide-react
npm install -D tailwindcss @tailwindcss/vite autoprefixer
```

---

## Proposed Changes

### Phase 1 — Config & Tooling

#### [MODIFY] [vite.config.ts](file:///c:/Full%20Stack%20Project/Vinayak-Finserv/vinayak-finserv-frontend/vite.config.ts)
Add Tailwind CSS Vite plugin.

#### [MODIFY] [index.html](file:///c:/Full%20Stack%20Project/Vinayak-Finserv/vinayak-finserv-frontend/index.html)
Add Google Fonts link (Playfair Display + DM Sans), meta viewport, base title.

#### [NEW] `tailwind.config.js`
Custom theme: navy (`#0A1628`), gold (`#C9A84C`), font families.

#### [MODIFY] [src/index.css](file:///c:/Full%20Stack%20Project/Vinayak-Finserv/vinayak-finserv-frontend/src/index.css)
Tailwind directives, global smooth scroll, CSS variables, custom scrollbar.

#### [NEW] `src/config/emailjs.ts`
EmailJS placeholder constants.

---

### Phase 2 — Types & Utilities

#### [NEW] `src/types/index.ts`
TypeScript interfaces: `Service`, `Testimonial`, `BlogPost`, `StatItem`, `WhyChooseItem`.

#### [NEW] `src/utils/calculations.ts`
`calculateEMI()` and `calculateSIP()` pure functions.

#### [NEW] `src/hooks/useCountUp.ts`
Custom hook for animated number counters (IntersectionObserver + RAF).

#### [NEW] `src/hooks/useScrollReveal.ts`
Tiny helper wrapping Framer Motion `useInView` for consistent scroll animations.

---

### Phase 3 — Layout Components

#### [NEW] `src/components/Navbar.tsx`
Sticky navbar with backdrop blur, mobile hamburger drawer, "Get Free Consultation" CTA.

#### [NEW] `src/components/Footer.tsx`
4-column footer, social icons, SEBI disclaimer.

#### [NEW] `src/components/WhatsAppButton.tsx`
Fixed bottom-right, pulse ring animation, tooltip.

#### [NEW] `src/components/BackToTop.tsx`
Appears after 300px scroll, smooth scroll to top.

---

### Phase 4 — Homepage Sections

#### [NEW] `src/components/Hero.tsx`
Full-vh hero, geometric mesh overlay, staggered Framer Motion text reveal, trust badges.

#### [NEW] `src/components/ServicesSection.tsx`
6-card responsive grid, icon + description, hover lift, "Learn More" links.

#### [NEW] `src/components/StatsSection.tsx`
Navy background, 4 animated counters using `useCountUp`.

#### [NEW] `src/components/WhyChooseUs.tsx`
6-item grid with icons, clean card layout.

#### [NEW] `src/components/Testimonials.tsx`
3 cards, auto-sliding carousel on mobile, star ratings.

---

### Phase 5 — Pages

#### [NEW] `src/pages/Home.tsx`
Assembles Hero + ServicesSection + StatsSection + WhyChooseUs + Testimonials.

#### [NEW] `src/pages/Services.tsx`
Full services page with expanded descriptions and all 6 service cards.

#### [NEW] `src/pages/Calculators.tsx`
EMI + SIP calculators with sliders, real-time output, Recharts pie charts, tab switcher.

#### [NEW] `src/pages/Contact.tsx`
Split layout: React Hook Form + Zod + EmailJS (left) / Google Maps embed + address info (right).

#### [NEW] `src/pages/Blog.tsx`
5 hardcoded blog post cards with gradient thumbnails, date, excerpt, "Read More".

#### [NEW] `src/pages/About.tsx`
Company story, team values, milestones, SEBI/AMFI credentials.

#### [NEW] `src/pages/NotFound.tsx`
Custom 404 page with "Go Home" button.

---

### Phase 6 — App Wiring

#### [MODIFY] `src/App.tsx`
React Router v6 with all 6 routes + 404, `HelmetProvider`, page transition wrapper, `<Navbar>`, `<Footer>`, `<WhatsAppButton>`, `<BackToTop>`.

#### [MODIFY] `src/main.tsx`
Wrap with `HelmetProvider`, `BrowserRouter`.

---

## Verification Plan

### Automated
- `npm run build` — must complete with zero TypeScript errors
- `npm run dev` — dev server starts, all routes accessible

### Browser Testing
- All 6 routes render correctly
- Calculator sliders update outputs in real-time
- Pie charts render with correct data
- Navbar collapses on mobile, hamburger opens/closes
- WhatsApp button pulse + tooltip visible
- Back to Top button appears on scroll
- Testimonials carousel works on narrow viewport
- Contact form shows validation errors, then success toast on submit

### Manual
- Animations fire on scroll (stats counter, fade-ups)
- Smooth scroll behavior on all nav link clicks
- Mobile-first responsive layout at 375px, 768px, 1280px breakpoints
