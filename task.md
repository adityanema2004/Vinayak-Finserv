# Vinayak Finserv — Build Task Checklist

## Phase 1 — Install Dependencies
- [x] Install all npm packages (React Router, Framer Motion, Tailwind, Recharts, EmailJS, Zod, Lucide, react-helmet-async)

## Phase 2 — Config & Tooling
- [x] vite.config.ts — add Tailwind Vite plugin
- [x] index.html — Google Fonts, meta tags
- [x] tailwind.config.js — custom theme (navy, gold, fonts)
- [x] src/index.css — Tailwind directives + global styles
- [x] src/config/emailjs.ts

## Phase 3 — Types & Utilities
- [x] src/types/index.ts
- [x] src/utils/calculations.ts
- [x] src/hooks/useCountUp.ts
- [x] src/hooks/useScrollReveal.ts

## Phase 4 — Layout Components
- [x] src/components/Navbar.tsx
- [x] src/components/Footer.tsx
- [x] src/components/WhatsAppButton.tsx
- [x] src/components/BackToTop.tsx

## Phase 5 — Homepage Sections
- [x] src/components/Hero.tsx
- [x] src/components/ServicesSection.tsx
- [x] src/components/StatsSection.tsx
- [x] src/components/WhyChooseUs.tsx
- [x] src/components/Testimonials.tsx

## Phase 6 — Pages
- [x] src/pages/Home.tsx
- [x] src/pages/Services.tsx
- [x] src/pages/Calculators.tsx
- [x] src/pages/Contact.tsx (6 office locations)
- [x] src/pages/Blog.tsx
- [x] src/pages/About.tsx
- [x] src/pages/NotFound.tsx

## Phase 7 — App Wiring
- [x] src/App.tsx
- [x] src/main.tsx

## Phase 8 — Verify
- [x] npm run build — zero errors (✓ built in 671ms)
- [x] Browser test all routes — all 6 pages verified
