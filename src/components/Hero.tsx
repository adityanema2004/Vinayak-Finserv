import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, BadgeCheck, TrendingUp, Star, Phone } from 'lucide-react';

const trustBadges = [
  { icon: ShieldCheck, label: 'Trusted Advisors' },
  { icon: BadgeCheck,  label: 'Expert Strategies' },
  { icon: TrendingUp,  label: '10+ Yrs Experience' },
];

const loanBadges = ['Personal', 'Home', 'Business', 'Vehicle'];

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative overflow-hidden"
      style={{
        background: 'linear-gradient(150deg, #0D2447 0%, #1A3A6B 50%, #2563B0 100%)',
        paddingTop: '10px',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <div className="absolute inset-0 mesh-overlay pointer-events-none" />
      <div className="absolute inset-0 grid-overlay opacity-20 pointer-events-none" />

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

        {/* ─── FIRM NAME BAR — spans full width above both columns ─── */}
         <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center mb-12 lg:mb-14"
        >
          {/* Est. pill */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              background: 'rgba(232,169,32,0.12)',
              border: '1px solid rgba(232,169,32,0.35)',
              borderRadius: '999px',
              padding: '3px 12px 3px 8px',
              marginBottom: '12px',
            }}
          >
            <span
              className="animate-pulse"
              style={{
                width: '6px', height: '6px',
                borderRadius: '50%',
                background: '#E8A920',
                display: 'inline-block',
              }}
            />
            <span style={{
              fontFamily: '"DM Sans", sans-serif',
              fontSize: '0.72rem',
              fontWeight: 600,
              color: '#F5C842',
              letterSpacing: '0.08em',
              textTransform: 'uppercase' as const,
            }}>
              Est. 2014 · IRDAI Registered
            </span>
          </div>

          {/* Big name row with flanking lines */}
          <div className="flex items-center gap-4 w-full max-w-3xl">
            <div
              style={{
                flex: 1,
                height: '1px',
                background: 'linear-gradient(90deg, transparent, rgba(232,169,32,0.5))',
              }}
            />
            <h1
              style={{
                fontFamily: '"Playfair Display", Georgia, serif',
                fontSize: 'clamp(2.4rem, 7vw, 5rem)',
                fontWeight: 900,
                color: '#FFFFFF',
                letterSpacing: '0.04em',
                lineHeight: 1,
                textAlign: 'center',
                textShadow: '0 4px 32px rgba(0,0,0,0.3)',
                whiteSpace: 'nowrap' as const,
              }}
            >
              Vinayak{' '}
              <span style={{ color: '#E8A920' }}>Finserv</span>
            </h1>
            <div
              style={{
                flex: 1,
                height: '1px',
                background: 'linear-gradient(90deg, rgba(232,169,32,0.5), transparent)',
              }}
            />
          </div>

          {/* Tagline dots row */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              marginTop: '8px',
            }}
          >
            {['Insurance', 'Loans', 'Trusted by 5,000+ Families'].map((item, i, arr) => (
              <React.Fragment key={item}>
                <span style={{
                  fontFamily: '"DM Sans", sans-serif',
                  fontSize: '0.72rem',
                  fontWeight: 600,
                  color: 'rgba(255,255,255,0.4)',
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase' as const,
                }}>
                  {item}
                </span>
                {i < arr.length - 1 && (
                  <span style={{
                    width: '4px', height: '4px',
                    borderRadius: '50%',
                    background: 'rgba(232,169,32,0.5)',
                    display: 'inline-block',
                    flexShrink: 0,
                  }} />
                )}
              </React.Fragment>
            ))}
          </div>
        </motion.div>

        {/* ─── TWO COLUMN LAYOUT ─── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ─── LEFT ─── */}
          <div className="text-white order-2 lg:order-1 flex flex-col items-center text-center">

            <motion.h2
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
              style={{
                fontFamily: '"Playfair Display", Georgia, serif',
                fontSize: 'clamp(1.8rem, 4vw, 3rem)',
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
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
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

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.35 }}
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

          {/* ─── RIGHT: Photo Card ─── */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="order-1 lg:order-2 relative flex justify-center lg:justify-end"
          >
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
              {/* Advisor photo */}
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

              {/* ─── TOP OVERLAY: minimal — just specialty line ─── */}
              <div
                style={{
                  position: 'absolute',
                  top: 0, left: 0, right: 0,
                  zIndex: 10,
                  background: 'linear-gradient(to bottom, rgba(6,14,32,0.7) 0%, transparent 100%)',
                  padding: '14px 16px 32px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <div style={{ width: '22px', height: '1px', background: 'rgba(232,169,32,0.5)' }} />
                  <span style={{
                    fontFamily: '"DM Sans", sans-serif',
                    fontSize: '0.68rem',
                    fontWeight: 600,
                    color: 'rgba(255,255,255,0.55)',
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase' as const,
                  }}>
                    Insurance &amp; Loans Expert
                  </span>
                  <div style={{ width: '22px', height: '1px', background: 'rgba(232,169,32,0.5)' }} />
                </div>
              </div>

              {/* ─── BOTTOM OVERLAY: Tagline + Badges + Stats ─── */}
              <div
                style={{
                  position: 'absolute',
                  bottom: 0, left: 0, right: 0,
                  background: 'linear-gradient(to top, rgba(6,14,32,0.97) 0%, rgba(6,14,32,0.85) 60%, transparent 100%)',
                  padding: '48px 16px 16px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '10px',
                }}
              >
                {/* Tagline */}
                <div
                  style={{
                    background: 'rgba(255,255,255,0.07)',
                    border: '1px solid rgba(255,255,255,0.13)',
                    borderRadius: '8px',
                    padding: '6px 14px',
                    textAlign: 'center',
                  }}
                >
                  <span style={{ fontFamily: '"DM Sans", sans-serif', fontSize: '0.75rem', fontWeight: 500, color: 'rgba(255,255,255,0.75)', lineHeight: 1.5 }}>
                    Every Loan. Every Need.{' '}
                    <span style={{ color: '#F5C842', fontWeight: 600 }}>One Trusted Name.</span>
                  </span>
                </div>

                {/* Loan badges */}
                <div style={{ display: 'flex', gap: '5px', flexWrap: 'wrap' as const, justifyContent: 'center' }}>
                  {loanBadges.map((badge) => (
                    <div
                      key={badge}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '4px',
                        background: 'rgba(255,255,255,0.07)',
                        border: '1px solid rgba(255,255,255,0.13)',
                        borderRadius: '999px',
                        padding: '2px 8px',
                      }}
                    >
                      <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#E8A920', display: 'inline-block' }} />
                      <span style={{ fontFamily: '"DM Sans", sans-serif', fontSize: '0.68rem', fontWeight: 500, color: 'rgba(255,255,255,0.6)' }}>
                        {badge}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Divider */}
                <div style={{ width: '100%', height: '1px', background: 'rgba(255,255,255,0.08)' }} />

                {/* Stats row */}
                <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  {[
                    { value: '10+', label: 'Years' },
                    { value: '5K+', label: 'Clients' },
                    { value: '₹50Cr', label: 'AUM' },
                    { value: '6', label: 'Cities' },
                  ].map((stat, i, arr) => (
                    <React.Fragment key={stat.label}>
                      <div style={{ textAlign: 'center' }}>
                        <p style={{ fontFamily: '"Playfair Display", serif', fontSize: '1.3rem', fontWeight: 800, color: '#E8A920', lineHeight: 1 }}>
                          {stat.value}
                        </p>
                        <p style={{ fontFamily: '"DM Sans", sans-serif', fontSize: '0.68rem', color: 'rgba(255,255,255,0.65)', fontWeight: 500, marginTop: '2px' }}>
                          {stat.label}
                        </p>
                      </div>
                      {i < arr.length - 1 && (
                        <div style={{ width: '1px', height: '28px', background: 'rgba(255,255,255,0.1)' }} />
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating rating badge — desktop only */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.75 }}
              className="hidden lg:flex absolute -left-8 top-12"
              style={{
                background: '#ffffff',
                borderRadius: '1rem',
                padding: '0.7rem 1rem',
                boxShadow: '0 8px 32px rgba(13,36,71,0.25)',
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

            {/* Floating trust badge — desktop only */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="hidden lg:flex absolute -right-6 bottom-28"
              style={{
                background: 'linear-gradient(135deg, #E8A920, #F5C842)',
                borderRadius: '1rem',
                padding: '0.7rem 1rem',
                boxShadow: '0 8px 32px rgba(232,169,32,0.4)',
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

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
        style={{ background: 'linear-gradient(to top, #ffffff, transparent)' }}
      />
    </section>
  );
};

export default Hero;
