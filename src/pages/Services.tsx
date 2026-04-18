import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  TrendingUp, Shield, Home as HomeIcon, FileText,
  CheckCircle2, ArrowRight, Phone, X, ChevronDown,
  Info, Percent, Clock, Users, BadgeCheck, Star, FileCheck, Heart, Zap,
} from 'lucide-react';
import { staggerContainerVariant, staggerItemVariant } from '../hooks/useScrollReveal';

/* ─── Detailed info for each benefit ───────────────────────────────── */
const benefitDetails: Record<string, {
  summary: string;
  eligibility?: string;
  documents?: string[];
  rate?: string;
  tenure?: string;
  highlights?: string[];
}> = {
  /* ── Secured Loans ── */
  'Loan Against Property (LAP)': {
    summary: 'Unlock the value of your residential or commercial property to meet business or personal financial needs at lower interest rates compared to unsecured loans.',
    eligibility: 'Salaried employees, self-employed professionals, and business owners with property in their name.',
    rate: '8.5% – 13% p.a.',
    tenure: 'Up to 20 years',
    documents: ['Property documents', 'KYC & address proof', 'Income proof / ITR (3 years)', 'Bank statements (12 months)'],
    highlights: ['No end-use restriction', 'Up to 65–70% of property value', 'Part-prepayment allowed'],
  },
  'Home Loans up to ₹5 Crore': {
    summary: 'Finance your dream home with competitive rates sourced from 20+ banks and HFCs. We manage the entire application lifecycle from document collection to final disbursement.',
    eligibility: 'Indian residents aged 21–65 with stable income. NRI applications also accepted.',
    rate: '8.35% – 9.75% p.a.',
    tenure: 'Up to 30 years',
    documents: ['Sale agreement / allotment letter', 'NOC from society/builder', 'KYC documents', 'ITR + salary slips'],
    highlights: ['Tax benefit under Sec 24(b) & 80C', 'Balance transfer with top-up', 'Free legal & technical valuation'],
  },
  'Overdraft (OD) & Cash Credit (CC)': {
    summary: 'Revolving credit facility against property or FD, ideal for businesses needing flexible working capital. Pay interest only on the amount utilised.',
    eligibility: 'Business entities (Pvt Ltd, LLP, Proprietorship) with 2+ years of operations.',
    rate: '9.5% – 14% p.a. on utilised amount',
    tenure: 'Annual renewal',
    documents: ['Business registration proof', 'Audited financials (2 years)', 'Bank statements (12 months)', 'Security asset documents'],
    highlights: ['Flexible drawdown & repayment', 'No foreclosure charges', 'Limit up to ₹5 Crore'],
  },
  'Balance Transfer at lower rates': {
    summary: 'Transfer your existing high-interest loan to a lender offering lower rates and save significantly on EMI outgo. We negotiate the best terms on your behalf.',
    eligibility: 'Existing loan borrowers with a clean repayment track record of 12+ months.',
    rate: 'Rate reduction of 0.5% – 2%',
    tenure: 'Depends on existing tenure',
    documents: ['Existing loan statement', 'Foreclosure letter', 'KYC documents', 'Income proof'],
    highlights: ['Zero processing fee options available', 'Top-up facility at the time of transfer', 'Same-day approval in select cases'],
  },
  'Top-up loan facility': {
    summary: 'Already have a home or LAP loan? Get additional funds on top of your existing loan at the same competitive rates, with minimal documentation.',
    eligibility: 'Existing loan customers with a regular repayment history of 12+ months.',
    rate: 'Linked to existing loan rate + 0.25%',
    tenure: 'Co-terminus with primary loan',
    documents: ['Latest 6-month bank statements', 'KYC update if needed'],
    highlights: ['Quick sanction — 48 to 72 hours', 'No additional security required', 'Can be used for any purpose'],
  },
  'Minimum processing fees': {
    summary: 'We have tie-ups with multiple lenders who offer zero or minimal processing fees, especially during promotional periods. We also negotiate waivers on your behalf.',
    highlights: ['Fee waivers negotiated directly with lender', 'Transparent fee structure disclosed upfront', 'No hidden charges policy'],
  },

  /* ── Unsecured Loans ── */
  'Personal Loans for any purpose': {
    summary: 'Get instant personal loans for travel, medical emergencies, weddings, education, or any personal need — no collateral required, disbursed directly to your account.',
    eligibility: 'Salaried employees with minimum monthly income ₹25,000 or self-employed with ₹3L+ annual income.',
    rate: '10.5% – 24% p.a.',
    tenure: '12 – 60 months',
    documents: ['Aadhaar & PAN', 'Salary slips (3 months)', 'Bank statements (6 months)'],
    highlights: ['Approval in 2–4 hours', 'Disbursement within 24 hours', 'Loan from ₹50,000 to ₹25 Lakh'],
  },
  'Business Loans for working capital': {
    summary: 'Keep your business running smoothly with working capital loans for inventory, payable management, or operational expenses — without pledging any asset.',
    eligibility: 'Business with 2+ years vintage, minimum annual turnover ₹40 Lakh.',
    rate: '12% – 26% p.a.',
    tenure: '12 – 48 months',
    documents: ['GST returns (1 year)', 'ITR (2 years)', 'Bank statements (12 months)', 'Business registration'],
    highlights: ['Loan up to ₹50 Lakh', 'Collateral-free', 'Overdraft options also available'],
  },
  'Professional Loans (Doctors, CAs)': {
    summary: 'Specially designed loans for qualified professionals — doctors, chartered accountants, architects, engineers — to expand practice, buy equipment, or upgrade clinic infrastructure.',
    eligibility: 'Qualified professionals with valid practice registration and 1+ year income proof.',
    rate: '10% – 18% p.a.',
    tenure: 'Up to 60 months',
    documents: ['Degree / professional certificate', 'Practice registration', 'ITR + bank statements'],
    highlights: ['Loan up to ₹1 Crore for doctors', 'Minimal documentation', 'Equipment finance included'],
  },
  'Short-term funding solutions': {
    summary: 'Need bridging finance quickly? We arrange short-term loans repayable in 3–12 months with flexible EMI or bullet repayment options from NBFCs and digital lenders.',
    eligibility: 'Individuals or businesses with strong credit profile or adequate security.',
    rate: '1.5% – 3% per month',
    tenure: '3 – 12 months',
    highlights: ['Same-day disbursal possible', 'Bullet repayment available', 'No part-payment penalty'],
  },
  'Digital verification process': {
    summary: 'Our technology-driven onboarding process ensures you can apply, upload documents, and track your loan status entirely online without visiting any branch.',
    highlights: ['eKYC via Aadhaar OTP', 'Digital document upload portal', 'Real-time status tracking via SMS/email'],
  },
  'Flexible repayment tenures': {
    summary: 'We work with 30+ banks and NBFCs to find the repayment tenure that perfectly matches your cash flow — from as short as 6 months to as long as 5 years.',
    highlights: ['Step-up EMI for growing income profiles', 'Step-down EMI for near-retirement profiles', 'Bullet repayment for seasonal businesses'],
  },

  /* ── Commercial Vehicle Loans ── */
  'Funding for New & Used CVs': {
    summary: 'Finance the purchase of brand-new or pre-owned commercial vehicles — trucks, buses, tankers — at up to 100% on-road price for new CVs and up to 80% for used.',
    eligibility: 'Individual operators, fleet owners, or transport companies with valid commercial driving licence.',
    rate: '9% – 15% p.a.',
    tenure: 'Up to 60 months',
    documents: ['RC book (for used vehicles)', 'Driving licence', 'Route permit', 'Bank statements (6 months)'],
    highlights: ['100% on-road funding for new CVs', 'Minimal margin money', 'Delivery same day as disbursement'],
  },
  'Light & Heavy Commercial Vehicles': {
    summary: 'Whether you operate light goods vehicles, heavy trucks, multi-axle vehicles, or earth-movers, we have tailored loan products from 15+ financiers.',
    eligibility: 'Valid commercial vehicle operator with 1+ year transport business vintage.',
    rate: '9.5% – 16% p.a.',
    tenure: '12 – 60 months',
    highlights: ['LCV, MCV, HCV all covered', 'Fleet discounts for 3+ vehicles', 'Top-up after 6 EMIs'],
  },
  'Construction Equipment Loans': {
    summary: 'Finance excavators, cranes, tippers, concrete mixers, and other construction machinery. Special tie-ups with OEMs ensure competitive subvention rates.',
    eligibility: 'Contractors and infrastructure companies with proven project track record.',
    rate: '10% – 17% p.a.',
    tenure: 'Up to 48 months',
    documents: ['Purchase order / Work order', 'Equipment proforma invoice', 'KYC + financials'],
    highlights: ['Subvention schemes from OEMs', 'Moratorium up to 6 months available', 'Refinance on existing equipment possible'],
  },
  'Refinance on existing vehicles': {
    summary: 'Already own a commercial vehicle? Raise funds against it through refinancing — ideal for fleet expansion or working capital without purchasing a new vehicle.',
    rate: '11% – 18% p.a.',
    tenure: 'Up to 36 months',
    highlights: ['Up to 80% of vehicle value', 'No end-use restriction', 'Fast disbursement in 24–48 hours'],
  },
  'Customised EMI schedules': {
    summary: 'We design EMI plans that respect the seasonality of transport business — lower EMIs during lean periods and higher during peak months.',
    highlights: ['Seasonal EMI structure available', 'Step-up EMI for new operators', 'Balloon repayment options'],
  },
  'Quick approvals & disbursement': {
    summary: 'Our dedicated commercial vehicle desk ensures in-principle approval within 4 hours and disbursal within 24–48 hours of document submission.',
    highlights: ['Dedicated CV loan desk', 'Field team for document pickup', 'Direct payment to dealer/seller'],
  },

  /* ── Insurance ── */
  'Pure term insurance planning': {
    summary: 'A pure term plan provides the highest life cover at the lowest cost — ensuring your family maintains their lifestyle even in your absence.',
    eligibility: 'Indian residents aged 18–65 with income proof.',
    rate: 'From ₹600/month for ₹1 Crore cover (age 30)',
    highlights: ['Tax benefit under 80C', 'Critical illness rider available', 'Cover up to age 85 in select plans'],
  },
  'Family floater health plans': {
    summary: 'One policy, entire family covered. We compare plans from 12+ insurers and recommend the plan with best claim settlement ratio, network hospitals, and premiums.',
    rate: 'From ₹9,000/year for a family of 4',
    highlights: ['No-claim bonus up to 100%', 'Day care and OPD cover options', 'Super top-up for enhanced coverage'],
  },
  'Motor & Commercial Insurance': {
    summary: 'Comprehensive motor insurance for private cars, two-wheelers, and commercial vehicles — with instant issuance and cashless repair at 4,000+ network garages.',
    highlights: ['Instant policy issuance', 'Zero depreciation cover add-on', 'Engine & gear box protection'],
  },
  'Critical illness & disability cover': {
    summary: 'Provides a lump sum on diagnosis of listed critical illnesses (cancer, heart attack, stroke, etc.) allowing you to focus on recovery without financial stress.',
    highlights: ['Cover from ₹10 Lakh to ₹1 Crore', 'Lump-sum payout on diagnosis', 'Premiums eligible for 80D deduction'],
  },
  'Group health for employees': {
    summary: 'Affordable group mediclaim for companies of all sizes — attract and retain talent with a comprehensive employee benefit package starting from 7 employees.',
    highlights: ['No medical check-up required', 'Covers pre-existing conditions from day 1', 'Maternity cover available', 'Flexible sum insured options'],
  },
  'Zero-hassle claims assistance': {
    summary: 'Our dedicated claims team assists you at every step — from filling the form to ensuring you receive the rightful settlement. We advocate on your behalf.',
    highlights: ['24×7 claim intimation support', 'Claims tracking dashboard', 'Escalation assistance if rejected'],
  },
};

/* ─── Service data ──────────────────────────────────────────────────── */
const servicesDetail = [
  {
    id: 'secured-loans',
    icon: HomeIcon,
    badge: 'Most Popular',
    badgeColor: '#E8A920',
    title: 'Secured Loans',
    tagline: 'Lowest interest rates & maximum tenure',
    description: 'We help you secure funds against your assets with competitive rates from India\'s top lenders, ensuring maximum LTV and minimal hassle. Our team handles complete end-to-end documentation.',
    benefits: [
      'Loan Against Property (LAP)',
      'Home Loans up to ₹5 Crore',
      'Overdraft (OD) & Cash Credit (CC)',
      'Balance Transfer at lower rates',
      'Top-up loan facility',
      'Minimum processing fees',
    ],
    image: '/service-loans.png',
    stats: [{ label: 'Interest Rate', value: '8.5%+' }, { label: 'Max Tenure', value: '30 yrs' }, { label: 'Loan Up To', value: '₹5 Cr' }],
  },
  {
    id: 'unsecured-loans',
    icon: TrendingUp,
    badge: 'Quick Approval',
    badgeColor: '#3B82F6',
    title: 'UnSecured Loans',
    tagline: 'Quick approval, zero collateral',
    description: 'When you need funds instantly without pledging assets, we arrange hassle-free personal and business loans from leading NBFCs and banks with fast disbursement turnarounds.',
    benefits: [
      'Personal Loans for any purpose',
      'Business Loans for working capital',
      'Professional Loans (Doctors, CAs)',
      'Short-term funding solutions',
      'Digital verification process',
      'Flexible repayment tenures',
    ],
    image: '/service-financial-planning.png',
    stats: [{ label: 'Disbursal', value: '24 hrs' }, { label: 'Max Loan', value: '₹25 L' }, { label: 'No Collateral', value: '✓' }],
  },
  {
    id: 'cv-loans',
    icon: FileText,
    badge: 'Fleet Friendly',
    badgeColor: '#10B981',
    title: 'Commercial Vehicle Loan',
    tagline: 'Accelerate your business growth',
    description: 'Expand your transport business with flexible funding for all types of commercial vehicles, tailored for fleet owners and individual operators. We finance up to 100% of chassis value.',
    benefits: [
      'Funding for New & Used CVs',
      'Light & Heavy Commercial Vehicles',
      'Construction Equipment Loans',
      'Refinance on existing vehicles',
      'Customised EMI schedules',
      'Quick approvals & disbursement',
    ],
    image: '/service-fd.png',
    stats: [{ label: 'Funding', value: '100%' }, { label: 'Approval', value: '4 hrs' }, { label: 'Max Tenure', value: '60 mo' }],
  },
  {
    id: 'insurance',
    icon: Shield,
    badge: 'Comprehensive',
    badgeColor: '#8B5CF6',
    title: 'Life & Health Insurance',
    tagline: 'Protect what matters most',
    description: 'Comprehensive life and health insurance solutions from 15+ leading insurers. We conduct a thorough needs analysis and compare plans to ensure you get the best coverage at the most competitive premiums.',
    benefits: [
      'Pure term insurance planning',
      'Family floater health plans',
      'Motor & Commercial Insurance',
      'Critical illness & disability cover',
      'Group health for employees',
      'Zero-hassle claims assistance',
    ],
    image: '/service-insurance.png',
    stats: [{ label: 'Insurers', value: '15+' }, { label: 'Claim Support', value: '24×7' }, { label: 'Plans from', value: '₹600/mo' }],
  },
];

/* ─── Benefit Detail Drawer ─────────────────────────────────────────── */
interface BenefitDrawerProps {
  benefit: string;
  onClose: () => void;
}

const BenefitDrawer: React.FC<BenefitDrawerProps> = ({ benefit, onClose }) => {
  const detail = benefitDetails[benefit];
  if (!detail) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        style={{
          position: 'fixed', inset: 0, zIndex: 9000,
          background: 'rgba(13,36,71,0.72)',
          backdropFilter: 'blur(6px)',
          display: 'flex', alignItems: 'flex-end', justifyContent: 'center',
        }}
      >
        <motion.div
          initial={{ y: '100%', opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: '100%', opacity: 0 }}
          transition={{ type: 'spring', stiffness: 320, damping: 34 }}
          onClick={(e) => e.stopPropagation()}
          style={{
            background: '#ffffff',
            borderRadius: '28px 28px 0 0',
            padding: '2rem 2.25rem 2.5rem',
            width: '100%',
            maxWidth: '680px',
            maxHeight: '88vh',
            overflowY: 'auto',
            boxShadow: '0 -24px 80px rgba(13,36,71,0.18)',
          }}
        >
          {/* Handle */}
          <div style={{ width: '44px', height: '4px', borderRadius: '99px', background: '#E2E8F0', margin: '0 auto 1.5rem' }} />

          {/* Close */}
          <button
            onClick={onClose}
            style={{
              position: 'absolute', top: '1.4rem', right: '1.4rem',
              background: '#F1F5F9', border: 'none', borderRadius: '50%',
              width: '36px', height: '36px', cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}
          >
            <X size={18} color="#475569" />
          </button>

          {/* Title */}
          <h3 style={{
            fontFamily: '"Playfair Display", serif',
            fontSize: '1.5rem',
            fontWeight: 800,
            color: '#0D2447',
            marginBottom: '0.5rem',
            paddingRight: '2rem',
          }}>
            {benefit}
          </h3>

          {/* Summary */}
          <p style={{
            fontFamily: '"DM Sans", sans-serif',
            fontSize: '0.95rem',
            lineHeight: 1.75,
            color: '#475569',
            marginBottom: '1.5rem',
            borderLeft: '3px solid #E8A920',
            paddingLeft: '1rem',
          }}>
            {detail.summary}
          </p>

          {/* Quick stats row */}
          {(detail.rate || detail.tenure || detail.eligibility) && (
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
              gap: '0.75rem',
              marginBottom: '1.5rem',
            }}>
              {detail.rate && (
                <div style={{ background: '#F0F9FF', border: '1px solid #BAE6FD', borderRadius: '12px', padding: '0.75rem 1rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '4px' }}>
                    <Percent size={14} color="#0369A1" />
                    <span style={{ fontFamily: '"DM Sans"', fontSize: '0.68rem', fontWeight: 700, color: '#0369A1', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Interest Rate</span>
                  </div>
                  <p style={{ fontFamily: '"Playfair Display"', fontSize: '1rem', fontWeight: 700, color: '#0D2447' }}>{detail.rate}</p>
                </div>
              )}
              {detail.tenure && (
                <div style={{ background: '#F0FDF4', border: '1px solid #BBF7D0', borderRadius: '12px', padding: '0.75rem 1rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '4px' }}>
                    <Clock size={14} color="#16A34A" />
                    <span style={{ fontFamily: '"DM Sans"', fontSize: '0.68rem', fontWeight: 700, color: '#16A34A', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Tenure</span>
                  </div>
                  <p style={{ fontFamily: '"Playfair Display"', fontSize: '1rem', fontWeight: 700, color: '#0D2447' }}>{detail.tenure}</p>
                </div>
              )}
              {detail.eligibility && (
                <div style={{ background: '#FFFBEB', border: '1px solid #FDE68A', borderRadius: '12px', padding: '0.75rem 1rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '4px' }}>
                    <Users size={14} color="#B45309" />
                    <span style={{ fontFamily: '"DM Sans"', fontSize: '0.68rem', fontWeight: 700, color: '#B45309', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Who Can Apply</span>
                  </div>
                  <p style={{ fontFamily: '"DM Sans"', fontSize: '0.82rem', lineHeight: 1.5, color: '#1E293B' }}>{detail.eligibility}</p>
                </div>
              )}
            </div>
          )}

          {/* Highlights */}
          {detail.highlights && (
            <div style={{ marginBottom: '1.5rem' }}>
              <h4 style={{ fontFamily: '"DM Sans"', fontSize: '0.75rem', fontWeight: 700, color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '0.75rem' }}>
                Key Highlights
              </h4>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {detail.highlights.map((h, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
                    <Star size={13} color="#E8A920" fill="#E8A920" style={{ marginTop: '3px', flexShrink: 0 }} />
                    <span style={{ fontFamily: '"DM Sans"', fontSize: '0.88rem', color: '#334155', lineHeight: 1.6 }}>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Documents required */}
          {detail.documents && (
            <div style={{ marginBottom: '2rem' }}>
              <h4 style={{ fontFamily: '"DM Sans"', fontSize: '0.75rem', fontWeight: 700, color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '0.75rem' }}>
                Documents Required
              </h4>
              <ul style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.4rem 1rem' }}>
                {detail.documents.map((doc, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <FileCheck size={13} color="#C9891A" style={{ flexShrink: 0 }} />
                    <span style={{ fontFamily: '"DM Sans"', fontSize: '0.82rem', color: '#475569' }}>{doc}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* CTA */}
          <Link
            to="/contact"
            className="btn-gold"
            style={{ width: '100%', justifyContent: 'center', fontSize: '0.9rem' }}
            onClick={onClose}
          >
            Apply for {benefit.split('(')[0].trim()}
            <ArrowRight size={16} />
          </Link>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

/* ─── Services Page ─────────────────────────────────────────────────── */
const Services: React.FC = () => {
  const [activeDrawer, setActiveDrawer] = useState<string | null>(null);

  return (
    <>
      <Helmet>
        <title>Our Services | Vinayak Finserv</title>
        <meta
          name="description"
          content="Explore Vinayak Finserv's complete range of financial services: Secured Loans, Unsecured Loans, Commercial Vehicle Loans, and Life & Health Insurance."
        />
      </Helmet>

      {/* ── Page Hero ── */}
      <section
        className="relative overflow-hidden"
        style={{
          background: 'linear-gradient(150deg, #0D2447 0%, #1A3A6B 55%, #2563B0 100%)',
          paddingTop: '7.5rem',
          paddingBottom: '4.5rem',
        }}
      >
        <div className="absolute inset-0 mesh-overlay" />
        <div className="absolute inset-0 grid-overlay opacity-15" />
        <div className="container-site relative z-10 text-center">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="section-label"
          >
            What We Offer
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            style={{ fontFamily: '"Playfair Display", serif', fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 700, color: '#ffffff', lineHeight: 1.2, marginBottom: '0.85rem' }}
          >
            Our Financial Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.16 }}
            style={{ fontFamily: '"DM Sans", sans-serif', fontSize: '1rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, maxWidth: '560px', margin: '0 auto 2rem' }}
          >
            Comprehensive solutions across Loans and Insurance, tailored for your goals — all under one roof.
          </motion.p>

          {/* Quick nav pills */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem', justifyContent: 'center' }}
          >
            {servicesDetail.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                style={{
                  fontFamily: '"DM Sans", sans-serif',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  color: 'rgba(255,255,255,0.7)',
                  background: 'rgba(255,255,255,0.1)',
                  border: '1px solid rgba(255,255,255,0.2)',
                  borderRadius: '999px',
                  padding: '0.4rem 1.1rem',
                  transition: 'all 0.2s',
                  cursor: 'pointer',
                  textDecoration: 'none',
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(232,169,32,0.18)'; (e.currentTarget as HTMLElement).style.borderColor = 'rgba(232,169,32,0.5)'; (e.currentTarget as HTMLElement).style.color = '#F5C842'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.1)'; (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.2)'; (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.7)'; }}
              >
                {s.title}
              </a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Services Detail ── */}
      <section className="section-padding" style={{ background: '#F8F9FA' }}>
        <div className="container-site">
          <motion.div
            variants={staggerContainerVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05 }}
            className="flex flex-col gap-10 md:gap-14 xl:gap-16"
          >
            {servicesDetail.map((service, idx) => {
              const Icon = service.icon;
              const isEven = idx % 2 === 0;
              return (
                <motion.div
                  key={service.id}
                  id={service.id}
                  variants={staggerItemVariant}
                  className="group relative mx-auto w-full max-w-[76rem] overflow-hidden"
                  style={{
                    background: '#ffffff',
                    borderRadius: '32px',
                    border: '1px solid rgba(13,36,71,0.07)',
                    boxShadow: '0 8px 40px rgba(13,36,71,0.07)',
                    scrollMarginTop: '6rem',
                  }}
                  whileHover={{ y: -4, boxShadow: '0 20px 64px rgba(13,36,71,0.13)' }}
                >
                  {/* Gold top shimmer */}
                  <div
                    className="absolute inset-x-6 top-0 h-px"
                    style={{ background: 'linear-gradient(90deg, transparent 0%, rgba(232,169,32,0.7) 50%, transparent 100%)' }}
                  />

                  <div className={`grid grid-cols-1 lg:grid-cols-2`}>

                    {/* ── Image Panel ── */}
                    <div className={`relative overflow-hidden ${isEven ? 'lg:order-1' : 'lg:order-2'} min-h-[340px] lg:min-h-full`}>
                      <img
                        src={service.image}
                        alt={service.title}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(13,36,71,0.92) 0%, rgba(13,36,71,0.35) 60%, rgba(13,36,71,0.15) 100%)' }} />

                      {/* Badge */}
                      <div
                        style={{
                          position: 'absolute', top: '1.5rem', left: '1.5rem',
                          background: service.badgeColor,
                          borderRadius: '999px',
                          padding: '0.3rem 0.9rem',
                          fontFamily: '"DM Sans", sans-serif',
                          fontSize: '0.7rem',
                          fontWeight: 700,
                          color: '#0D2447',
                          letterSpacing: '0.06em',
                          textTransform: 'uppercase',
                          boxShadow: `0 4px 16px ${service.badgeColor}55`,
                        }}
                      >
                        {service.badge}
                      </div>

                      {/* Content over image */}
                      <div className="absolute inset-0 p-8 sm:p-10 lg:p-12 flex flex-col justify-end text-white">
                        <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center mb-5 shadow-lg">
                          <Icon className="w-7 h-7 text-[#E8A920]" />
                        </div>
                        <span className="mb-1.5 text-[#E8A920] font-sans text-xs font-bold tracking-widest uppercase">Premium Advisory</span>
                        <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-2 drop-shadow-md text-white">
                          {service.title}
                        </h2>
                        <p className="font-body text-white/80 text-sm sm:text-base max-w-sm leading-relaxed mb-5">
                          {service.tagline}
                        </p>

                        {/* Stats */}
                        <div style={{ display: 'flex', gap: '1rem' }}>
                          {service.stats.map((stat, i) => (
                            <div key={i} style={{
                              background: 'rgba(255,255,255,0.1)',
                              backdropFilter: 'blur(8px)',
                              border: '1px solid rgba(255,255,255,0.18)',
                              borderRadius: '12px',
                              padding: '0.5rem 0.85rem',
                              textAlign: 'center',
                              minWidth: '72px',
                            }}>
                              <p style={{ fontFamily: '"Playfair Display"', fontSize: '1.1rem', fontWeight: 800, color: '#F5C842', lineHeight: 1 }}>{stat.value}</p>
                              <p style={{ fontFamily: '"DM Sans"', fontSize: '0.62rem', color: 'rgba(255,255,255,0.6)', marginTop: '3px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em' }}>{stat.label}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* ── Content Panel ── */}
                    <div className={`relative p-8 sm:p-10 lg:p-12 xl:p-14 flex flex-col justify-center ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                      <p className="font-body text-[#475569] text-[0.95rem] leading-[1.85] mb-8">
                        {service.description}
                      </p>

                      <h3 className="font-heading text-[#0D2447] text-lg font-bold mb-5 flex items-center gap-2">
                        <span className="w-6 h-px bg-[#E8A920]" />
                        What's Included
                        <span style={{ fontFamily: '"DM Sans"', fontSize: '0.7rem', fontWeight: 600, color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.1em', marginLeft: '4px' }}>
                          — click any item to learn more
                        </span>
                      </h3>

                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
                        {service.benefits.map((benefit) => (
                          <li
                            key={benefit}
                            className="group/item flex items-start gap-3 rounded-2xl px-4 py-3 cursor-pointer transition-all duration-200"
                            style={{ background: '#F8FAFC', border: '1px solid #E2E8F0' }}
                            onMouseEnter={e => {
                              const el = e.currentTarget as HTMLElement;
                              el.style.background = '#FFFBEB';
                              el.style.borderColor = 'rgba(232,169,32,0.5)';
                              el.style.transform = 'translateY(-1px)';
                              el.style.boxShadow = '0 4px 16px rgba(232,169,32,0.12)';
                            }}
                            onMouseLeave={e => {
                              const el = e.currentTarget as HTMLElement;
                              el.style.background = '#F8FAFC';
                              el.style.borderColor = '#E2E8F0';
                              el.style.transform = 'translateY(0)';
                              el.style.boxShadow = 'none';
                            }}
                            onClick={() => setActiveDrawer(benefit)}
                          >
                            <div
                              className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full mt-0.5"
                              style={{ background: 'rgba(232,169,32,0.15)' }}
                            >
                              <CheckCircle2 size={13} style={{ color: '#C9891A', flexShrink: 0 }} />
                            </div>
                            <div style={{ flex: 1, minWidth: 0 }}>
                              <span className="font-body text-[#334155] text-sm leading-relaxed block">
                                {benefit}
                              </span>
                              <span style={{
                                fontFamily: '"DM Sans"',
                                fontSize: '0.68rem',
                                color: '#E8A920',
                                fontWeight: 600,
                                display: 'flex',
                                alignItems: 'center',
                                gap: '3px',
                                marginTop: '2px',
                              }}>
                                <Info size={10} />
                                View details
                              </span>
                            </div>
                            <ChevronDown
                              size={14}
                              color="#CBD5E1"
                              style={{ marginTop: '4px', flexShrink: 0, transform: 'rotate(-90deg)', transition: 'color 0.2s' }}
                            />
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 pt-2">
                        <Link to="/contact" className="btn-gold" style={{ fontSize: '0.875rem' }}>
                          Apply Now
                          <ArrowRight size={16} />
                        </Link>
                        <a
                          href="tel:+919876543210"
                          className="flex items-center justify-center gap-2.5 rounded-full px-5 py-3 transition-colors hover:bg-white"
                          style={{
                            fontFamily: '"DM Sans", sans-serif',
                            fontSize: '0.875rem',
                            fontWeight: 600,
                            color: '#0D2447',
                            background: '#F8FAFC',
                            border: '1px solid #E2E8F0',
                          }}
                        >
                          <Phone size={15} color="#E8A920" />
                          Call Us: +91 98765 43210
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ── Why Choose Section ── */}
      <section className="section-padding" style={{ background: '#ffffff' }}>
        <div className="container-site">
          <div className="text-center mb-12">
            <span className="section-label">Our Promise</span>
            <h2 style={{ fontFamily: '"Playfair Display", serif', fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 800, color: '#0D2447', marginBottom: '0.75rem' }}>
              Why Clients Choose Vinayak Finserv
            </h2>
            <p style={{ fontFamily: '"DM Sans"', fontSize: '1rem', color: '#64748B', maxWidth: '560px', margin: '0 auto', lineHeight: 1.7 }}>
              Over a decade of trusted guidance, transparent processes, and client-first advisory.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: BadgeCheck, title: '20+ Banking Partners', desc: 'Access to the best rates from a wide network of banks, NBFCs, and insurers.', color: '#E8A920' },
              { icon: Zap, title: 'Fast Turnaround', desc: 'In-principle approval in as little as 4 hours for most loan products.', color: '#3B82F6' },
              { icon: FileCheck, title: 'End-to-End Support', desc: 'From application to disbursement — we handle every step of the process.', color: '#10B981' },
              { icon: Heart, title: 'Client-First Approach', desc: 'We recommend what\'s best for you, not what earns us the highest commission.', color: '#8B5CF6' },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  style={{
                    background: '#F8FAFC',
                    border: '1px solid #E2E8F0',
                    borderRadius: '20px',
                    padding: '2rem 1.75rem',
                    textAlign: 'center',
                    transition: 'all 0.25s ease',
                  }}
                  whileHover={{ y: -6, boxShadow: '0 16px 48px rgba(13,36,71,0.1)' }}
                >
                  <div style={{
                    width: '56px', height: '56px', borderRadius: '16px',
                    background: `${item.color}18`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    margin: '0 auto 1.25rem',
                  }}>
                    <Icon size={26} color={item.color} />
                  </div>
                  <h3 style={{ fontFamily: '"Playfair Display"', fontSize: '1.1rem', fontWeight: 700, color: '#0D2447', marginBottom: '0.6rem' }}>
                    {item.title}
                  </h3>
                  <p style={{ fontFamily: '"DM Sans"', fontSize: '0.875rem', color: '#64748B', lineHeight: 1.7 }}>
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section
        style={{
          background: 'linear-gradient(135deg, #0D2447 0%, #1A3A6B 60%, #2563B0 100%)',
          padding: '4rem 0',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div className="absolute inset-0 mesh-overlay opacity-60" />
        <div className="container-site relative z-10 text-center">
          <h2 style={{ fontFamily: '"Playfair Display", serif', fontSize: 'clamp(1.6rem, 4vw, 2.5rem)', fontWeight: 800, color: '#fff', marginBottom: '0.75rem' }}>
            Not sure which product is right for you?
          </h2>
          <p style={{ fontFamily: '"DM Sans"', fontSize: '1rem', color: 'rgba(255,255,255,0.65)', marginBottom: '2rem', maxWidth: '520px', margin: '0 auto 2rem' }}>
            Book a free 30-minute consultation with our experts. We'll analyse your needs and recommend the best solution.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn-gold">
              Book Free Consultation
              <ArrowRight size={16} />
            </Link>
            <a
              href="tel:+919876543210"
              className="btn-outline-white"
            >
              <Phone size={16} />
              Call +91 98765 43210
            </a>
          </div>
        </div>
      </section>

      {/* ── Benefit Detail Drawer ── */}
      {activeDrawer && (
        <BenefitDrawer
          benefit={activeDrawer}
          onClose={() => setActiveDrawer(null)}
        />
      )}
    </>
  );
};

export default Services;
