import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  TrendingUp, Shield, Home as HomeIcon, PiggyBank, FileText, BarChart3,
  CheckCircle2, ArrowRight, Phone,
} from 'lucide-react';
import { staggerContainerVariant, staggerItemVariant } from '../hooks/useScrollReveal';

const servicesDetail = [
  {
    id: 'mutual-funds',
    icon: TrendingUp,
    title: 'Mutual Funds & SIP',
    tagline: 'Start investing from ₹500/month',
    description:
      'Systematic Investment Plans (SIPs) are the most disciplined way to build long-term wealth. We analyse your financial goals, risk appetite, and time horizon to recommend the right funds from India\'s top AMCs. Our regular portfolio reviews ensure you stay on track.',
    benefits: [
      'Goal-based portfolio construction',
      'ELSS funds for tax saving under 80C',
      'Risk-profiled fund selection',
      'Regular quarterly portfolio reviews',
      'Direct vs Regular fund advisory',
      'Switch and redemption support',
    ],
    color: 'from-blue-500 to-indigo-600',
  },
  {
    id: 'insurance',
    icon: Shield,
    title: 'Life & Health Insurance',
    tagline: 'Protect what matters most',
    description:
      'Comprehensive life and health insurance solutions from 15+ leading insurers. We conduct a thorough needs analysis and compare plans to ensure you get the best coverage at the most competitive premiums. We also assist with claims — when it matters most.',
    benefits: [
      'Pure term insurance planning',
      'Family floater health plans',
      'Critical illness & disability cover',
      'ULIP & endowment plans',
      'Group health insurance for businesses',
      'Zero-hassle claims assistance',
    ],
    color: 'from-emerald-500 to-teal-600',
  },
  {
    id: 'loans',
    icon: HomeIcon,
    title: 'Home & Personal Loans',
    tagline: 'Get the best interest rates',
    description:
      'Access to 20+ leading banks and NBFCs means we can negotiate better interest rates than you could get on your own. We handle documentation, verification, and disbursement — making the loan process completely hassle-free.',
    benefits: [
      'Home loans up to ₹5 Crore',
      'Personal loans for any purpose',
      'Loan against property',
      'Business loans & CC facility',
      'Balance transfer at lower rates',
      'Top-up loan facility',
    ],
    color: 'from-orange-500 to-red-500',
  },
  {
    id: 'fd',
    icon: PiggyBank,
    title: 'Fixed Deposits',
    tagline: 'Safe, guaranteed returns',
    description:
      'For risk-averse investors, FDs remain a cornerstone of financial planning. We provide access to the highest-interest FDs from top-rated banks and AAA-rated NBFCs, with laddering strategies to maximise liquidity and returns.',
    benefits: [
      'Bank FDs with DICGC insurance',
      'High-yield corporate FDs',
      'Special senior citizen rates',
      'FD laddering strategy',
      'Quarterly/monthly payout options',
      'Digital FD with major banks',
    ],
    color: 'from-yellow-500 to-amber-600',
  },
  {
    id: 'tax',
    icon: FileText,
    title: 'Tax Planning',
    tagline: 'Save more, stress less this tax season',
    description:
      'Smart tax planning goes beyond just investing in 80C instruments. We create a comprehensive tax strategy covering deductions, exemptions, and tax-efficient investments to legally minimise your tax liability throughout the year.',
    benefits: [
      'Section 80C investments (ELSS, PPF)',
      'Section 80D health insurance',
      'HRA and housing loan benefits',
      'NPS tax deduction planning',
      'Capital gains tax optimisation',
      'ITR filing guidance & support',
    ],
    color: 'from-purple-500 to-violet-600',
  },
  {
    id: 'financial-planning',
    icon: BarChart3,
    title: 'Financial Planning',
    tagline: 'Roadmap to your financial freedom',
    description:
      'A complete, integrated financial plan that addresses every dimension of your financial life. From retirement planning to children\'s education and wealth succession — we create a structured roadmap and review it annually.',
    benefits: [
      'Comprehensive financial health check',
      'Retirement corpus planning',
      'Child education & marriage planning',
      'Legacy & estate planning',
      'Annual financial review sessions',
      'Emergency fund strategy',
    ],
    color: 'from-cyan-500 to-blue-600',
  },
];

const Services: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Our Services | Vinayak Finserv</title>
        <meta
          name="description"
          content="Explore Vinayak Finserv's complete range of financial services: Mutual Funds, Insurance, Loans, Fixed Deposits, Tax Planning, and Financial Planning in Raipur."
        />
      </Helmet>

      {/* Page Hero */}
      <section
        className="relative overflow-hidden"
        style={{ background: 'linear-gradient(160deg, #06101E 0%, #0A1628 100%)', paddingTop: '7.5rem', paddingBottom: '4.5rem' }}
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
            style={{ fontFamily: '"DM Sans", sans-serif', fontSize: '1rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, maxWidth: '560px', margin: '0 auto' }}
          >
            Comprehensive, SEBI-compliant financial solutions tailored for your goals — all under one roof.
          </motion.p>
        </div>
      </section>

      {/* Services Detail */}
      <section className="section-padding" style={{ background: '#F8F9FA' }}>
        <div className="container-site">
          <motion.div
            variants={staggerContainerVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05 }}
            className="flex flex-col gap-10 md:gap-12 xl:gap-8"
          >
            {servicesDetail.map((service, idx) => {
              const Icon = service.icon;
              const isEven = idx % 2 === 0;
              return (
                <motion.div
                  key={service.id}
                  variants={staggerItemVariant}
                  className="group relative mx-auto w-full max-w-[72rem] overflow-hidden transition-shadow duration-300"
                  style={{
                    background: '#ffffff',
                    borderRadius: '28px',
                    border: '1px solid rgba(10,22,40,0.08)',
                    boxShadow: '0 14px 44px rgba(10,22,40,0.08)',
                  }}
                  whileHover={{ y: -6, boxShadow: '0 24px 70px rgba(10,22,40,0.14)' }}
                >
                  <div
                    className="absolute inset-x-6 top-0 h-px"
                    style={{ background: 'linear-gradient(90deg, transparent 0%, rgba(201,168,76,0.85) 50%, transparent 100%)' }}
                  />
                  <div
                    className="absolute -top-20 right-8 h-44 w-44 rounded-full blur-3xl opacity-50 transition-opacity duration-300 group-hover:opacity-70"
                    style={{ background: 'radial-gradient(circle, rgba(201,168,76,0.18) 0%, rgba(201,168,76,0) 72%)' }}
                  />
                  <div className={`grid grid-cols-1 lg:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)] ${isEven ? '' : 'lg:flex-row-reverse'}`}>
                    {/* Color band */}
                    <div className={`relative overflow-hidden bg-gradient-to-br ${service.color} px-8 py-10 sm:px-10 sm:py-12 lg:px-12 lg:py-14 flex flex-col justify-center items-center text-white ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.22),transparent_52%)] opacity-90" />
                      <div className="absolute -bottom-16 left-1/2 h-36 w-36 -translate-x-1/2 rounded-full bg-white/10 blur-2xl" />
                      <div className="relative z-10 w-20 h-20 rounded-[1.35rem] border border-white/20 bg-white/15 backdrop-blur-sm flex items-center justify-center mb-6 shadow-[0_14px_30px_rgba(10,22,40,0.16)]">
                        <Icon className="w-10 h-10 text-white" />
                      </div>
                      <span className="relative z-10 mb-3 rounded-full border border-white/25 bg-white/10 px-3.5 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-white/85">
                        Tailored Advisory
                      </span>
                      <h2 className="relative z-10 font-heading text-3xl font-bold text-center mb-3">
                        {service.title}
                      </h2>
                      <p className="relative z-10 font-body text-white/85 text-center text-base max-w-sm leading-7">
                        {service.tagline}
                      </p>
                    </div>

                    {/* Content */}
                    <div className={`relative p-8 sm:p-10 lg:p-12 xl:p-14 flex flex-col justify-center ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                      <div
                        className="mb-6 inline-flex items-center self-start rounded-full px-3.5 py-1.5"
                        style={{
                          background: 'linear-gradient(135deg, rgba(201,168,76,0.14) 0%, rgba(201,168,76,0.04) 100%)',
                          border: '1px solid rgba(201,168,76,0.18)',
                        }}
                      >
                        <span
                          style={{
                            fontFamily: '"DM Sans", sans-serif',
                            fontSize: '0.72rem',
                            fontWeight: 700,
                            letterSpacing: '0.16em',
                            textTransform: 'uppercase',
                            color: '#9A7A24',
                          }}
                        >         Designed Around Your Goals
                        </span>
                      </div>
                      <p
                        style={{
                          fontFamily: '"DM Sans", sans-serif',
                          fontSize: '0.985rem',
                          lineHeight: 1.8,
                          color: '#495057',
                          marginBottom: '1.9rem',
                        }}
                      >
                        {service.description}
                      </p>
                      <h3
                        style={{
                          fontFamily: '"Playfair Display", serif',
                          fontSize: '1.05rem',
                          fontWeight: 700,
                          color: '#0A1628',
                          marginBottom: '1rem',
                        }}
                      >
                        What's Included
                      </h3>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-9">
                        {service.benefits.map((benefit) => (
                          <li
                            key={benefit}
                            className="flex items-start gap-3 rounded-2xl px-3.5 py-3 transition-colors duration-200"
                            style={{ background: '#FAFBFC', border: '1px solid #EEF1F4' }}
                          >
                            <div
                              className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full"
                              style={{ background: 'rgba(201,168,76,0.14)', marginTop: '1px' }}
                            >
                              <CheckCircle2
                                size={14}
                                style={{ color: '#C9A84C', flexShrink: 0 }}
                              />
                            </div>
                            <span
                              style={{
                                fontFamily: '"DM Sans", sans-serif',
                                fontSize: '0.875rem',
                                color: '#343A40',
                                lineHeight: 1.5,
                              }}
                            >
                              {benefit}
                            </span>
                          </li>
                        ))}
                      </ul>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 pt-2">
                        <Link to="/contact" className="btn-gold" style={{ fontSize: '0.875rem' }}>
                          Get Started
                          <ArrowRight size={16} />
                        </Link>
                        <a
                          href="tel:+919876543210"
                          className="flex items-center gap-2.5 rounded-full px-4 py-3 transition-colors"
                          style={{
                            fontFamily: '"DM Sans", sans-serif',
                            fontSize: '0.875rem',
                            color: '#6C757D',
                            background: '#F8F9FA',
                            border: '1px solid #EEF1F4',
                          }}
                        >
                          <Phone size={15} style={{ color: '#C9A84C' }} />
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
    </>
  );
};

export default Services;
