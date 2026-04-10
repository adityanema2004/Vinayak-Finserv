import React from 'react';
import { motion } from 'framer-motion';
import { useCountUp } from '../hooks/useCountUp';
import type { StatItem } from '../types';

const statsData: StatItem[] = [
  { id: 'clients',    value: 500,  suffix: '+',     prefix: '',  label: 'Happy Clients',       description: 'Families served across India' },
  { id: 'assets',     value: 50,   suffix: ' Cr+',  prefix: '₹', label: 'Assets Managed',      description: 'Total AUM across all portfolios' },
  { id: 'experience', value: 10,   suffix: '+',     prefix: '',  label: 'Years Experience',     description: 'Delivering consistent results' },
  { id: 'partners',   value: 15,   suffix: '+',     prefix: '',  label: 'Insurance Partners',   description: 'Leading insurers for best coverage' },
];

interface StatCounterProps { stat: StatItem; isLast: boolean; }

const StatCounter: React.FC<StatCounterProps> = ({ stat, isLast }) => {
  const { count, ref } = useCountUp(stat.value, 2200);

  return (
    <div
      ref={ref}
      className="relative flex flex-col items-center text-center px-6 py-2"
    >
      {/* Divider (hidden for last) */}
      {!isLast && (
        <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-12 bg-white/10" />
      )}

      {/* Number */}
      <div style={{ marginBottom: '0.35rem', lineHeight: 1 }}>
        <span style={{
          fontFamily: '"Playfair Display", serif',
          fontSize: 'clamp(2.5rem, 5vw, 3.75rem)',
          fontWeight: 700,
          color: '#C9A84C',
          letterSpacing: '-0.02em',
        }}>
          {stat.prefix}
        </span>
        <span style={{
          fontFamily: '"Playfair Display", serif',
          fontSize: 'clamp(2.5rem, 5vw, 3.75rem)',
          fontWeight: 700,
          color: '#ffffff',
          letterSpacing: '-0.02em',
        }}>
          {count}
        </span>
        <span style={{
          fontFamily: '"Playfair Display", serif',
          fontSize: 'clamp(2.5rem, 5vw, 3.75rem)',
          fontWeight: 700,
          color: '#C9A84C',
          letterSpacing: '-0.02em',
        }}>
          {stat.suffix}
        </span>
      </div>

      {/* Label */}
      <p style={{
        fontFamily: '"DM Sans", sans-serif',
        fontSize: '0.95rem',
        fontWeight: 600,
        color: '#ffffff',
        marginBottom: '0.25rem',
      }}>
        {stat.label}
      </p>

      {/* Description */}
      <p style={{
        fontFamily: '"DM Sans", sans-serif',
        fontSize: '0.78rem',
        color: 'rgba(255,255,255,0.45)',
        lineHeight: 1.4,
        maxWidth: '160px',
        margin: '0 auto',
      }}>
        {stat.description}
      </p>
    </div>
  );
};

const StatsSection: React.FC = () => {
  return (
    <section
      id="stats"
      className="relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #06101E 0%, #0A1628 50%, #0E1F3A 100%)' }}
    >
      {/* Background texture */}
      <div className="absolute inset-0 grid-overlay opacity-15 pointer-events-none" />
      <div className="absolute top-0 left-1/3 w-80 h-80 rounded-full bg-[#C9A84C]/5 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/3 w-80 h-80 rounded-full bg-[#C9A84C]/5 blur-[100px] pointer-events-none" />

      <div className="container-site py-20 lg:py-24">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-label">Our Impact</span>
          <h2 style={{
            fontFamily: '"Playfair Display", serif',
            fontSize: 'clamp(1.8rem, 4vw, 2.75rem)',
            fontWeight: 700,
            color: '#ffffff',
            lineHeight: 1.25,
          }}>
            Numbers That Speak for Themselves
          </h2>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-10 lg:gap-0">
          {statsData.map((stat, idx) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, delay: idx * 0.1 }}
            >
              <StatCounter stat={stat} isLast={idx === statsData.length - 1} />
            </motion.div>
          ))}
        </div>

        {/* Compliance badges */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="flex flex-wrap items-center justify-center gap-3 mt-16 pt-10"
          style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}
        >
          {['SEBI Registered Investment Advisor', 'AMFI ARN Holder', 'IRDAI Authorised'].map((badge) => (
            <span
              key={badge}
              style={{
                fontFamily: '"DM Sans", sans-serif',
                fontSize: '0.75rem',
                fontWeight: 500,
                color: 'rgba(255,255,255,0.5)',
                border: '1px solid rgba(255,255,255,0.12)',
                borderRadius: '50px',
                padding: '0.35rem 1rem',
              }}
            >
              {badge}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;
