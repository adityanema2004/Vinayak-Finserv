// ─── Service ────────────────────────────────────────────────────────────────

export interface Service {
  id: string;
  icon: string; // Lucide icon name
  title: string;
  tagline: string;
  description: string;
  features: string[];
  link: string;
}

// ─── Testimonial ─────────────────────────────────────────────────────────────

export interface Testimonial {
  id: string;
  name: string;
  city: string;
  rating: number;
  quote: string;
  initials: string;
}

// ─── Blog Post ───────────────────────────────────────────────────────────────

export interface BlogPost {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  category: string;
  readTime: string;
  gradientFrom: string;
  gradientTo: string;
}

// ─── Stat ────────────────────────────────────────────────────────────────────

export interface StatItem {
  id: string;
  value: number;
  suffix: string;
  prefix: string;
  label: string;
  description: string;
}

// ─── Why Choose Us ───────────────────────────────────────────────────────────

export interface WhyChooseItem {
  id: string;
  icon: string;
  title: string;
  description: string;
}

// ─── Office Location ─────────────────────────────────────────────────────────

export interface OfficeLocation {
  id: string;
  city: string;
  state: string;
  address: string;
  phone: string;
  email: string;
  hours: string;
  isHeadquarters: boolean;
  mapUrl: string;
}

// ─── EMI Calculator ──────────────────────────────────────────────────────────

export interface EMIResult {
  monthlyEMI: number;
  totalInterest: number;
  totalAmount: number;
  principalAmount: number;
}

// ─── SIP Calculator ──────────────────────────────────────────────────────────

export interface SIPResult {
  investedAmount: number;
  estimatedReturns: number;
  totalValue: number;
}

// ─── Contact Form ────────────────────────────────────────────────────────────

export interface ContactFormData {
  fullName: string;
  phone: string;
  email: string;
  service: string;
  message: string;
}

// ─── Navigation Link ─────────────────────────────────────────────────────────

export interface NavLink {
  label: string;
  path: string;
}
