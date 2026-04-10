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
    id: 'mutual-funds',
    icon: 'TrendingUp',
    title: 'Mutual Funds & SIP',
    tagline: 'Start from ₹500/month',
    description: 'Build long-term wealth with goal-based mutual fund portfolios and disciplined SIP plans curated to your risk profile.',
    features: ['Goal-based fund selection', 'Risk profiling', 'Quarterly portfolio review', 'Tax-efficient ELSS funds'],
    link: '/services',
  },
  {
    id: 'insurance',
    icon: 'Shield',
    title: 'Life & Health Insurance',
    tagline: 'Protect what matters most',
    description: 'Comprehensive life and health coverage from 15+ leading insurers. We compare, advise, and assist with claims.',
    features: ['Term & ULIP plans', 'Family floater health', 'Critical illness cover', 'Zero-hassle claims'],
    link: '/services',
  },
  {
    id: 'loans',
    icon: 'Home',
    title: 'Home & Personal Loans',
    tagline: 'Best interest rates assured',
    description: 'Access to 20+ banks and NBFCs. We negotiate superior rates and manage the entire documentation process for you.',
    features: ['Home & personal loans', 'Loan against property', 'Business loans', 'Balance transfer'],
    link: '/services',
  },
  {
    id: 'fd',
    icon: 'PiggyBank',
    title: 'Fixed Deposits',
    tagline: 'Safe, guaranteed returns',
    description: 'Maximise your FD returns with access to the highest-interest offerings from AAA-rated banks and NBFCs.',
    features: ['Bank & corporate FDs', 'Senior citizen rates', 'FD laddering strategy', 'Monthly payout options'],
    link: '/services',
  },
  {
    id: 'tax',
    icon: 'FileText',
    title: 'Tax Planning',
    tagline: 'Save more every tax season',
    description: 'Strategic tax planning covering 80C, 80D, HRA, NPS, and capital gains to legally minimise your tax liability.',
    features: ['ELSS & PPF planning', 'Section 80D health benefits', 'Capital gains optimisation', 'ITR filing guidance'],
    link: '/services',
  },
  {
    id: 'financial-planning',
    icon: 'BarChart3',
    title: 'Financial Planning',
    tagline: 'Your roadmap to freedom',
    description: 'A complete, integrated financial plan — from retirement and education to wealth creation and estate succession.',
    features: ['Retirement planning', 'Child education corpus', 'Legacy & estate planning', 'Annual review sessions'],
    link: '/services',
  },
];

const iconMap: Record<string, React.ElementType> = {
  TrendingUp, Shield, Home: HomeIcon, PiggyBank, FileText, BarChart3,
};

const gradients: Record<string, string> = {
  'mutual-funds': 'rgba(59,130,246,0.08)',
  insurance: 'rgba(16,185,129,0.08)',
  loans: 'rgba(249,115,22,0.08)',
  fd: 'rgba(234,179,8,0.08)',
  tax: 'rgba(139,92,246,0.08)',
  'financial-planning': 'rgba(6,182,212,0.08)',
};

const iconColors: Record<string, string> = {
  'mutual-funds': '#3B82F6',
  insurance: '#10B981',
  loans: '#F97316',
  fd: '#EAB308',
  tax: '#8B5CF6',
  'financial-planning': '#06B6D4',
};

interface ServiceCardProps { service: Service; }

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const Icon = iconMap[service.icon];
  const iconColor = iconColors[service.id];
  const iconBg = gradients[service.id];

  return (
    <motion.div
      variants={staggerItemVariant}
      className="group relative flex flex-col rounded-2xl bg-white border border-gray-100 hover:border-gray-200 overflow-hidden"
      style={{
        boxShadow: '0 1px 10px rgba(10,22,40,0.05)',
        transition: 'box-shadow 0.3s ease, transform 0.3s ease',
      }}
      whileHover={{ y: -5, boxShadow: '0 12px 40px rgba(10,22,40,0.10)' }}
    >
      {/* Top accent line */}
      <div
        className="h-0.5 w-0 group-hover:w-full transition-all duration-500"
        style={{ background: `linear-gradient(90deg, transparent, ${iconColor}, transparent)` }}
      />

      <div className="p-7 flex flex-col flex-1">
        {/* Icon */}
        <div
          className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
          style={{ background: iconBg }}
        >
          <Icon size={22} color={iconColor} strokeWidth={1.8} />
        </div>

        {/* Title */}
        <h3 style={{
          fontFamily: '"Playfair Display", serif',
          fontSize: '1.1rem',
          fontWeight: 700,
          color: '#0A1628',
          marginBottom: '0.25rem',
          lineHeight: 1.3,
        }}>
          {service.title}
        </h3>

        {/* Tagline */}
        <p style={{
          fontFamily: '"DM Sans", sans-serif',
          fontSize: '0.78rem',
          fontWeight: 600,
          color: '#C9A84C',
          letterSpacing: '0.03em',
          marginBottom: '0.85rem',
        }}>
          {service.tagline}
        </p>

        {/* Description */}
        <p style={{
          fontFamily: '"DM Sans", sans-serif',
          fontSize: '0.875rem',
          lineHeight: 1.7,
          color: '#495057',
          marginBottom: '1.25rem',
          flex: 1,
        }}>
          {service.description}
        </p>

        {/* Features */}
        <ul className="space-y-1.5 mb-6">
          {service.features.map((feat) => (
            <li key={feat} className="flex items-center gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: iconColor }} />
              <span style={{ fontFamily: '"DM Sans", sans-serif', fontSize: '0.8rem', color: '#343A40' }}>
                {feat}
              </span>
            </li>
          ))}
        </ul>

        {/* Link */}
        <Link
          to={service.link}
          className="inline-flex items-center gap-1.5 group/link"
          style={{
            fontFamily: '"DM Sans", sans-serif',
            fontSize: '0.85rem',
            fontWeight: 600,
            color: '#C9A84C',
          }}
        >
          Learn More
          <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
        </Link>
      </div>
    </motion.div>
  );
};

const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="section-padding" style={{ background: '#F8F9FA' }}>
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
            color: '#0A1628',
            lineHeight: 1.2,
            marginBottom: '1rem',
          }}>
            Comprehensive Financial Services
          </h2>
          <p style={{
            fontFamily: '"DM Sans", sans-serif',
            fontSize: '1rem',
            lineHeight: 1.7,
            color: '#6C757D',
          }}>
            From wealth creation to risk protection — expert advice on every aspect of your financial life.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={staggerContainerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
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
          className="text-center mt-12"
        >
          <Link to="/services" className="btn-gold">
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
