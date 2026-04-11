import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, BadgeCheck, TrendingUp, Star, Phone } from 'lucide-react';

const trustBadges = [
  { icon: ShieldCheck, label: 'Trusted Advisors' },
  { icon: BadgeCheck,  label: 'Expert Strategies'  },
  { icon: TrendingUp,  label: '10+ Yrs Experience' },
];

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative overflow-hidden"
      style={{
        background: 'linear-gradient(150deg, #0D2447 0%, #1A3A6B 50%, #2563B0 100%)',
        paddingTop: '100px',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 mesh-overlay pointer-events-none" />
      <div className="absolute inset-0 grid-overlay opacity-20 pointer-events-none" />

      {/* Decorative blurred orbs */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: '-10%', right: '-5%',
          width: '500px', height: '500px',
          background: 'radial-gradient(circle, rgba(232,169,32,0.18) 0%, transparent 65%)',
          filter: 'blur(40px)',
        }}
      />
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: '-10%', left: '-5%',
          width: '450px', height: '450px',
          background: 'radial-gradient(circle, rgba(59,130,246,0.2) 0%, transparent 65%)',
          filter: 'blur(50px)',
        }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ─── LEFT: Firm Info ─── */}
          <div className="text-white order-2 lg:order-1 flex flex-col items-center text-center">

            {/* Eyebrow pill */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="inline-flex items-center gap-2.5 rounded-full px-4 py-1.5 mb-6"
              style={{
                background: 'rgba(232,169,32,0.15)',
                border: '1px solid rgba(232,169,32,0.4)',
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#E8A920] animate-pulse" />
              <span style={{ color: '#F5C842', fontSize: '0.82rem', fontWeight: 600, letterSpacing: '0.05em', fontFamily: '"DM Sans", sans-serif' }}>
                Trusted by 5,000+ families across India
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
              style={{
                fontFamily: '"Playfair Display", Georgia, serif',
                fontSize: 'clamp(2.2rem, 5vw, 4rem)',
                fontWeight: 800,
                lineHeight: 1.15,
                color: '#FFFFFF',
                marginBottom: '1.4rem',
                letterSpacing: '-0.02em',
              }}
            >
              Your Trusted{' '}
              <span className="text-gold-gradient">Financial</span>
              <br />
              Partner in India
            </motion.h1>

            {/* Sub-headline */}
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.22 }}
              style={{
                fontFamily: '"DM Sans", sans-serif',
                fontSize: 'clamp(0.95rem, 1.8vw, 1.1rem)',
                lineHeight: 1.8,
                color: 'rgba(255,255,255,0.72)',
                marginBottom: '2.25rem',
                maxWidth: '500px',
              }}
            >
              Expert guidance in Insurance & Loans —
              tailored for your goals, backed by a decade of trusted expertise.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.34 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-10"
            >
              <Link to="/services" className="btn-gold">
                Explore Our Services
                <ArrowRight size={16} />
              </Link>
              <Link to="/contact" className="btn-outline-white">
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
                    background: 'rgba(255,255,255,0.09)',
                    border: '1px solid rgba(255,255,255,0.18)',
                  }}
                >
                  <Icon size={13} color="#E8A920" />
                  <span style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.78rem', fontFamily: '"DM Sans", sans-serif', fontWeight: 500 }}>
                    {label}
                  </span>
                </div>
              ))}

              {/* Phone */}
              <a
                href="tel:+919876543210"
                className="flex items-center gap-2 rounded-full px-3.5 py-1.5 hover:bg-white/10 transition-colors"
                style={{ background: 'rgba(255,255,255,0.09)', border: '1px solid rgba(255,255,255,0.18)' }}
              >
                <Phone size={13} color="#E8A920" />
                <span style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.78rem', fontFamily: '"DM Sans", sans-serif', fontWeight: 500 }}>
                  +91 98765 43210
                </span>
              </a>
            </motion.div>
          </div>

          {/* ─── RIGHT: Human Photo ─── */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="order-1 lg:order-2 relative flex justify-center lg:justify-end"
          >
            {/* Decorative ring behind photo */}
            <div
              className="absolute pointer-events-none"
              style={{
                width: '110%', height: '110%',
                top: '50%', left: '50%',
                transform: 'translate(-50%, -50%)',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(232,169,32,0.12) 0%, transparent 65%)',
              }}
            />

            {/* Photo container */}
            <div
              className="relative"
              style={{
                borderRadius: '2rem',
                overflow: 'hidden',
                width: '100%',
                maxWidth: '480px',
                aspectRatio: '4/5',
                boxShadow: '0 32px 80px rgba(13,36,71,0.5), 0 0 0 1px rgba(232,169,32,0.3)',
              }}
            >
              <img
                src="/hero-advisor.png"
                alt="Expert Financial Advisor at Vinayak Finserv"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'top center',
                }}
              />

              {/* Gradient overlay at bottom */}
              <div
                className="absolute inset-x-0 bottom-0"
                style={{
                  height: '45%',
                  background: 'linear-gradient(to top, rgba(13,36,71,0.95) 0%, transparent 100%)',
                }}
              />

              {/* Floating stats card */}
              <div
                className="absolute bottom-5 left-5 right-5 flex items-center justify-between"
              >
                {[
                  { value: '10+', label: 'Years' },
                  { value: '5K+', label: 'Clients' },
                  { value: '₹50Cr', label: 'AUM' },
                  { value: '6', label: 'Cities' },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <p style={{ fontFamily: '"Playfair Display", serif', fontSize: '1.3rem', fontWeight: 800, color: '#E8A920', lineHeight: 1 }}>
                      {stat.value}
                    </p>
                    <p style={{ fontFamily: '"DM Sans", sans-serif', fontSize: '0.68rem', color: 'rgba(255,255,255,0.65)', fontWeight: 500, marginTop: '2px' }}>
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating rating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.75 }}
              className="absolute -left-4 top-12 lg:-left-8"
              style={{
                background: '#ffffff',
                borderRadius: '1rem',
                padding: '0.7rem 1rem',
                boxShadow: '0 8px 32px rgba(13,36,71,0.25)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
              }}
            >
              <div className="flex" style={{ gap: '1px' }}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={13} color="#E8A920" fill="#E8A920" />
                ))}
              </div>
              <div>
                <p style={{ fontFamily: '"DM Sans", sans-serif', fontSize: '0.72rem', fontWeight: 700, color: '#0D2447', lineHeight: 1.2 }}>4.9 / 5.0</p>
                <p style={{ fontFamily: '"DM Sans", sans-serif', fontSize: '0.63rem', color: '#64748B', lineHeight: 1.2 }}>500+ reviews</p>
              </div>
            </motion.div>

            {/* Floating trust badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="absolute -right-2 bottom-28 lg:-right-6"
              style={{
                background: 'linear-gradient(135deg, #E8A920, #F5C842)',
                borderRadius: '1rem',
                padding: '0.7rem 1rem',
                boxShadow: '0 8px 32px rgba(232,169,32,0.4)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <ShieldCheck size={22} color="#0D2447" />
              <p style={{ fontFamily: '"DM Sans", sans-serif', fontSize: '0.68rem', fontWeight: 700, color: '#0D2447', marginTop: '3px', whiteSpace: 'nowrap' }}>Trusted Advisory</p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom fade into white */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
        style={{ background: 'linear-gradient(to top, #ffffff, transparent)' }}
      />
    </section>
  );
};

export default Hero;
