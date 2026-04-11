import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  TrendingUp, Shield, Home as HomeIcon, PiggyBank, FileText, BarChart3, ArrowRight,
} from 'lucide-react';
import { staggerContainerVariant, staggerItemVariant } from '../hooks/useScrollReveal';
import type { Service } from '../types';

const services: Service[] = [
  {
    id: 'secured-loans',
    icon: 'Home',
    title: 'Secured Loans',
    tagline: 'Lowest interest rates & maximum tenure',
    description: 'We help you secure funds against your assets with competitive rates from India\'s top lenders, ensuring maximum LTV and minimal hassle.',
    features: ['Loan Against Property (LAP)', 'Home Loans', 'Overdraft (OD) / Cash Credit (CC)', 'Balance Transfer & Top-up'],
    link: '/services',
    image: '/service-loans.png',
    category: 'Loan',
  },
  {
    id: 'unsecured-loans',
    icon: 'TrendingUp',
    title: 'UnSecured Loans',
    tagline: 'Quick approval, zero collateral',
    description: 'When you need funds instantly without pledging assets, we arrange hassle-free personal and business loans from leading NBFCs and banks.',
    features: ['Personal Loans', 'Business Loans without collateral', 'Professional Loans (Doctors/CAs)', 'Short-term working capital'],
    link: '/services',
    image: '/service-financial-planning.png',
    category: 'Loan',
  },
  {
    id: 'cv-loans',
    icon: 'FileText',
    title: 'Commercial Vehicle Loan',
    tagline: 'Accelerate your business growth',
    description: 'Expand your transport business with flexible funding for all types of commercial vehicles, tailored for fleet owners and individual operators.',
    features: ['Funding for New & Used CVs', 'Construction Equipment Loans', 'Refinance on existing vehicles', 'Customised repayment schedules'],
    link: '/services',
    image: '/service-fd.png',
    category: 'Loan',
  },
  {
    id: 'insurance',
    icon: 'Shield',
    title: 'Life & Health Insurance',
    tagline: 'Protect what matters most',
    description: 'Comprehensive life and health coverage from 15+ leading insurers. We compare, advise, and assist with claims for your peace of mind.',
    features: ['Term & ULIP plans', 'Family floater health', 'Motor & Commercial Insurance', 'Zero-hassle claims'],
    link: '/services',
    image: '/service-insurance.png',
    category: 'Insurance',
  },
];

const iconMap: Record<string, React.ElementType> = {
  TrendingUp, Shield, Home: HomeIcon, PiggyBank, FileText, BarChart3,
};

const iconColors: Record<string, string> = {
  'secured-loans':      '#2563B0',
  'unsecured-loans':    '#D97706',
  'cv-loans':           '#E8A920',
  insurance:            '#059669',
};

const iconBgs: Record<string, string> = {
  'secured-loans':      'rgba(37,99,176,0.1)',
  'unsecured-loans':    'rgba(217,119,6,0.1)',
  'cv-loans':           'rgba(232,169,32,0.1)',
  insurance:            'rgba(5,150,105,0.1)',
};

interface ServiceCardProps { service: Service; }

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const Icon = iconMap[service.icon];
  const iconColor = iconColors[service.id];
  const iconBg    = iconBgs[service.id];

  return (
    <motion.div
      variants={staggerItemVariant}
      className="group relative flex flex-col rounded-2xl bg-white overflow-hidden"
      style={{
        boxShadow: '0 2px 16px rgba(13,36,71,0.07)',
        border: '1px solid #E2E8F0',
        transition: 'box-shadow 0.3s ease, transform 0.3s ease, border-color 0.3s ease',
      }}
      whileHover={{ y: -6, boxShadow: '0 20px 60px rgba(13,36,71,0.14)' }}
    >
      {/* Image section */}
      <div
        className="relative overflow-hidden"
        style={{ height: '185px', flexShrink: 0 }}
      >
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        {/* Blue-to-transparent overlay so card body looks clean */}
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to bottom, rgba(13,36,71,0.08) 0%, rgba(13,36,71,0.02) 100%)' }}
        />

        {/* Category pill on top of image */}
        <div
          className="absolute top-3 left-3 flex items-center gap-1.5 rounded-full px-3 py-1"
          style={{ background: 'rgba(255,255,255,0.92)', backdropFilter: 'blur(8px)' }}
        >
          <div
            className="w-5 h-5 rounded-full flex items-center justify-center"
            style={{ background: iconBg }}
          >
            <Icon size={11} color={iconColor} strokeWidth={2} />
          </div>
          <span style={{ fontFamily: '"DM Sans", sans-serif', fontSize: '0.7rem', fontWeight: 700, color: '#0D2447', letterSpacing: '0.02em' }}>
            {service.category || service.title.split(' ')[0]}
          </span>
        </div>
      </div>

      {/* Top accent line on hover */}
      <div
        className="h-0.5 w-0 group-hover:w-full transition-all duration-500"
        style={{ background: `linear-gradient(90deg, transparent, ${iconColor}, transparent)` }}
      />

      {/* Card body */}
      <div className="p-6 flex flex-col flex-1">

        {/* Tagline */}
        <p style={{
          fontFamily: '"DM Sans", sans-serif',
          fontSize: '0.72rem',
          fontWeight: 700,
          color: iconColor,
          letterSpacing: '0.06em',
          textTransform: 'uppercase',
          marginBottom: '0.4rem',
        }}>
          {service.tagline}
        </p>

        {/* Title */}
        <h3 style={{
          fontFamily: '"Playfair Display", serif',
          fontSize: '1.15rem',
          fontWeight: 700,
          color: '#0D2447',
          marginBottom: '0.75rem',
          lineHeight: 1.3,
        }}>
          {service.title}
        </h3>

        {/* Description */}
        <p style={{
          fontFamily: '"DM Sans", sans-serif',
          fontSize: '0.86rem',
          lineHeight: 1.72,
          color: '#475569',
          marginBottom: '1.1rem',
          flex: 1,
        }}>
          {service.description}
        </p>

        {/* Features */}
        <ul className="space-y-1.5 mb-5">
          {service.features.map((feat) => (
            <li key={feat} className="flex items-center gap-2">
              <span
                className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ background: iconBg }}
              >
                <span className="w-1.5 h-1.5 rounded-full" style={{ background: iconColor }} />
              </span>
              <span style={{ fontFamily: '"DM Sans", sans-serif', fontSize: '0.8rem', color: '#334155' }}>
                {feat}
              </span>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <Link
          to={service.link}
          className="inline-flex items-center gap-1.5 rounded-full px-4 py-2 font-semibold text-sm transition-all duration-200 hover:gap-2.5"
          style={{
            fontFamily: '"DM Sans", sans-serif',
            fontSize: '0.82rem',
            fontWeight: 700,
            color: '#ffffff',
            background: `linear-gradient(135deg, ${iconColor}DD, ${iconColor})`,
            boxShadow: `0 4px 14px ${iconColor}55`,
            alignSelf: 'flex-start',
          }}
        >
          Learn More
          <ArrowRight size={14} />
        </Link>
      </div>
    </motion.div>
  );
};

const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="section-padding" style={{ background: '#F8FAFC' }}>
      <div className="container-site">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] }}
          className="text-center mb-14"
          style={{ maxWidth: '560px', marginLeft: 'auto', marginRight: 'auto' }}
        >
          <span className="section-label">What We Offer</span>
          <h2 style={{
            fontFamily: '"Playfair Display", serif',
            fontSize: 'clamp(1.8rem, 4vw, 2.75rem)',
            fontWeight: 700,
            color: '#0D2447',
            lineHeight: 1.2,
            marginBottom: '1rem',
          }}>
            Comprehensive Financial Services
          </h2>
          <p style={{
            fontFamily: '"DM Sans", sans-serif',
            fontSize: '1rem',
            lineHeight: 1.7,
            color: '#64748B',
          }}>
            From securing ideal loans to robust risk protection — expert guidance on every aspect of your financial life.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={staggerContainerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7"
        >
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mt-14"
        >
          <Link to="/services" className="btn-gold" style={{ fontSize: '0.95rem', padding: '0.8rem 2rem' }}>
            View All Services
            <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export { services, iconMap };
export default ServicesSection;
