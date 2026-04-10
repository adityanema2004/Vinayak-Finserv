import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, TrendingUp, BadgeCheck } from 'lucide-react';

const trustBadges = [
  { icon: ShieldCheck, label: 'SEBI Registered' },
  { icon: BadgeCheck, label: 'AMFI Certified' },
  { icon: TrendingUp, label: '10+ Years Experience' },
];

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #06101E 0%, #0A1628 45%, #0D1E38 100%)' }}
    >
      {/* Layered backgrounds */}
      <div className="absolute inset-0 mesh-overlay pointer-events-none" />
      <div className="absolute inset-0 grid-overlay pointer-events-none" />

      {/* Decorative blurred orbs */}
      <div className="absolute -top-32 -left-32 w-[480px] h-[480px] rounded-full bg-[#C9A84C]/8 blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-[520px] h-[520px] rounded-full bg-[#C9A84C]/6 blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-[#122040]/40 blur-[80px] pointer-events-none" />

      {/* Main content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-5 sm:px-8 lg:px-10 text-center py-28 sm:py-32">

        {/* Eyebrow pill */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="inline-flex items-center gap-2.5 rounded-full px-4 py-1.5 mb-8"
          style={{
            background: 'rgba(201,168,76,0.1)',
            border: '1px solid rgba(201,168,76,0.28)',
          }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#C9A84C] animate-pulse" />
          <span style={{ color: '#E8C878', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.04em', fontFamily: '"DM Sans", sans-serif' }}>
            Trusted by 5000+ families across India
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          style={{
            fontFamily: '"Playfair Display", Georgia, serif',
            fontSize: 'clamp(2.4rem, 6vw, 4.5rem)',
            fontWeight: 700,
            lineHeight: 1.15,
            color: '#FFFFFF',
            marginBottom: '1.5rem',
            wordSpacing: 'normal',
            letterSpacing: '-0.01em',
          }}
        >
          Your Trusted{' '}
          <span className="text-gold-gradient">Financial Partner</span>
          <br />
          in India
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.22 }}
          style={{
            fontFamily: '"DM Sans", sans-serif',
            fontSize: 'clamp(1rem, 2.2vw, 1.2rem)',
            lineHeight: 1.75,
            color: 'rgba(255,255,255,0.65)',
            maxWidth: '660px',
            margin: '0 auto 2.5rem',
            wordSpacing: 'normal',
          }}
        >
          Expert guidance in Mutual Funds, Insurance, Loans &amp; Tax Planning —
          tailored for your goals, backed by 10+ years of local expertise.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.34 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-14"
        >
          <Link to="/services" className="btn-gold text-sm w-full sm:w-auto justify-center">
            Explore Our Services
            <ArrowRight size={16} />
          </Link>
          <Link to="/contact" className="btn-outline text-sm w-full sm:w-auto justify-center">
            Book Free Consultation
          </Link>
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-3"
        >
          {trustBadges.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-2 rounded-full px-3.5 py-1.5"
              style={{
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.1)',
              }}
            >
              <Icon size={13} color="#C9A84C" />
              <span style={{
                color: 'rgba(255,255,255,0.7)',
                fontSize: '0.78rem',
                fontFamily: '"DM Sans", sans-serif',
                fontWeight: 500,
              }}>
                {label}
              </span>
            </div>
          ))}
          <div
            className="flex items-center gap-2 rounded-full px-3.5 py-1.5"
            style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}
          >
            <span style={{ color: '#C9A84C', fontSize: '0.88rem', fontWeight: 700 }}>500+</span>
            <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.78rem', fontFamily: '"DM Sans", sans-serif', fontWeight: 500 }}>
              Happy Clients
            </span>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.5 }}
        className="absolute bottom-7 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
        style={{ color: 'rgba(255,255,255,0.3)' }}
      >
        <span style={{ fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', fontFamily: '"DM Sans", sans-serif' }}>
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
          style={{ width: '1.5px', height: '24px', background: 'linear-gradient(to bottom, #C9A84C88, transparent)', borderRadius: '2px' }}
        />
      </motion.div>

      {/* Bottom fade into white */}
      <div
        className="absolute bottom-0 left-0 right-0 h-28 pointer-events-none"
        style={{ background: 'linear-gradient(to top, #ffffff, transparent)' }}
      />
    </section>
  );
};

export default Hero;
