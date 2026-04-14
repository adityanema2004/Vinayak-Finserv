import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  TrendingUp, Shield, Home as HomeIcon, FileText,
  CheckCircle2, ArrowRight, Phone,
} from 'lucide-react';
import { staggerContainerVariant, staggerItemVariant } from '../hooks/useScrollReveal';

const servicesDetail = [
  {
    id: 'secured-loans',
    icon: HomeIcon,
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
  },
  {
    id: 'unsecured-loans',
    icon: TrendingUp,
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
  },
  {
    id: 'cv-loans',
    icon: FileText,
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
  },
  {
    id: 'insurance',
    icon: Shield,
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
  },
];

const Services: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Our Services | Vinayak Finserv</title>
        <meta
          name="description"
          content="Explore Vinayak Finserv's complete range of financial services: Secured Loans, Unsecured Loans, Commercial Vehicle Loans, and Insurance."
        />
      </Helmet>

      {/* Page Hero */}
      <section
        className="relative overflow-hidden"
        style={{
          background: 'linear-gradient(150deg, #0D2447 0%, #1A3A6B 55%, #2563B0 100%)',
          paddingTop: '7.5rem',
          paddingBottom: '4.5rem'
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
            style={{ fontFamily: '"DM Sans", sans-serif', fontSize: '1rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, maxWidth: '560px', margin: '0 auto' }}
          >
            Comprehensive solutions across Loans and Insurance, tailored for your goals — all under one roof.
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
            className="flex flex-col gap-10 md:gap-12 xl:gap-14"
          >
            {servicesDetail.map((service, idx) => {
              const Icon = service.icon;
              const isEven = idx % 2 === 0;
              return (
                <motion.div
                  key={service.id}
                  variants={staggerItemVariant}
                  className="group relative mx-auto w-full max-w-[72rem] overflow-hidden transition-all duration-400"
                  style={{
                    background: '#ffffff',
                    borderRadius: '28px',
                    border: '1px solid rgba(13,36,71,0.08)',
                    boxShadow: '0 10px 40px rgba(13,36,71,0.06)',
                  }}
                  whileHover={{ y: -6, boxShadow: '0 20px 60px rgba(13,36,71,0.12)' }}
                >
                  <div
                    className="absolute inset-x-6 top-0 h-px"
                    style={{ background: 'linear-gradient(90deg, transparent 0%, rgba(232,169,32,0.6) 50%, transparent 100%)' }}
                  />
                  
                  <div className={`grid grid-cols-1 lg:grid-cols-2 ${isEven ? '' : 'lg:flex-row-reverse'}`}>
                    
                    {/* Image Side */}
                    <div className={`relative overflow-hidden ${isEven ? 'lg:order-1' : 'lg:order-2'} min-h-[350px] lg:min-h-full`}>
                      <img 
                        src={service.image} 
                        alt={service.title} 
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                      />
                      <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(13,36,71,0.85) 0%, rgba(13,36,71,0.3) 100%)' }} />
                      
                      {/* Floating content over image */}
                      <div className="absolute inset-0 p-8 sm:p-12 flex flex-col justify-end text-white">
                        <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center mb-6 shadow-lg">
                          <Icon className="w-8 h-8 text-[#E8A920]" />
                        </div>
                        <span className="mb-2 text-[#E8A920] font-sans text-sm font-bold tracking-widest uppercase">
                          Premium Advisory
                        </span>
                        <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-3 drop-shadow-md text-[#E8A920]">
                          {service.title}
                        </h2>
                        <p className="font-body text-white/90 text-sm sm:text-base max-w-sm leading-relaxed">
                          {service.tagline}
                        </p>
                      </div>
                    </div>

                    {/* Content Side */}
                    <div className={`relative p-8 sm:p-10 lg:p-12 xl:p-14 flex flex-col justify-center ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                      <p
                        className="font-body text-[#475569] text-[0.95rem] leading-[1.8] mb-8"
                      >
                        {service.description}
                      </p>
                      
                      <h3 className="font-heading text-[#0D2447] text-lg font-bold mb-5 flex items-center gap-2">
                        <span className="w-6 h-px bg-[#E8A920]" />
                        What's Included
                      </h3>
                      
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                        {service.benefits.map((benefit) => (
                          <li
                            key={benefit}
                            className="flex items-start gap-3 rounded-2xl px-4 py-3 transition-colors duration-200"
                            style={{ background: '#F8FAFC', border: '1px solid #E2E8F0' }}
                          >
                            <div
                              className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full mt-0.5"
                              style={{ background: 'rgba(232,169,32,0.15)' }}
                            >
                              <CheckCircle2 size={13} style={{ color: '#C9891A', flexShrink: 0 }} />
                            </div>
                            <span className="font-body text-[#334155] text-sm leading-relaxed">
                              {benefit}
                            </span>
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
    </>
  );
};

export default Services;
