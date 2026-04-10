import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Shield, Phone } from 'lucide-react';
import type { NavLink as NavLinkType } from '../types';

const navLinks: NavLinkType[] = [
  { label: 'Home',        path: '/' },
  { label: 'Services',    path: '/services' },
  { label: 'Calculators', path: '/calculators' },
  { label: 'About',       path: '/about' },
  { label: 'Blog',        path: '/blog' },
  { label: 'Contact',     path: '/contact' },
];

const Navbar: React.FC = () => {
  const [scrolled, setScrolled]       = useState(false);
  const [mobileOpen, setMobileOpen]   = useState(false);
  const location                       = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setMobileOpen(false); }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          background: scrolled
            ? 'rgba(8, 17, 32, 0.97)'
            : '#0A1628',
          backdropFilter: scrolled ? 'blur(14px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(14px)' : 'none',
          boxShadow: scrolled ? '0 1px 20px rgba(0,0,0,0.35)' : 'none',
          transition: 'background 0.3s ease, box-shadow 0.3s ease',
          borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : 'none',
        }}
      >
        <nav
          className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-2"
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', minHeight: '80px' }}
        >
          {/* Logo */}
          {/* <Link to="/" className="flex items-center gap-2.5 group" aria-label="Vinayak Finserv">
            <Shield
              size={30}
              color="#C9A84C"
              fill="rgba(201,168,76,0.12)"
              strokeWidth={1.5}
              style={{ transition: 'transform 0.2s ease' }}
              className="group-hover:scale-110"
            />
            <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
              <span style={{
                fontFamily: '"Playfair Display", serif',
                fontSize: '1.15rem',
                fontWeight: 700,
                color: '#ffffff',
                letterSpacing: '-0.01em',
              }}>
                Vinayak
              </span>
              <span style={{
                fontFamily: '"DM Sans", sans-serif',
                fontSize: '0.67rem',
                fontWeight: 600,
                color: '#C9A84C',
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
              }}>
                Finserv
              </span>
            </div>
          </Link> */}
          <Link to="/" className="flex items-center gap-2.5 group" aria-label="Vinayak Finserv">
            <img src="/Vinayak Finserv logo.png" alt="Vinayak Finserv Logo" className="h-16 lg:h-20 w-auto group-hover:scale-105 transition-transform duration-300 drop-shadow-md" />
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === '/'}
                style={({ isActive }) => ({
                  fontFamily: '"DM Sans", sans-serif',
                  fontSize: '0.88rem',
                  fontWeight: isActive ? 600 : 500,
                  color: isActive ? '#C9A84C' : 'rgba(255,255,255,0.75)',
                  padding: '0.45rem 0.9rem',
                  borderRadius: '8px',
                  background: isActive ? 'rgba(201,168,76,0.08)' : 'transparent',
                  transition: 'all 0.18s ease',
                })}
                className="hover:!text-white hover:!bg-white/5"
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+919876543210"
              className="flex items-center gap-1.5 transition-colors"
              style={{ fontFamily: '"DM Sans", sans-serif', fontSize: '0.82rem', color: 'rgba(255,255,255,0.55)' }}
            >
              <Phone size={13} color="#C9A84C" />
              +91 98765 43210
            </a>
            <Link to="/contact" className="btn-gold" style={{ fontSize: '0.82rem', padding: '0.55rem 1.25rem' }}>
              Free Consultation
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="lg:hidden p-2 rounded-lg text-white hover:bg-white/10 transition-colors"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 lg:hidden"
              style={{ background: 'rgba(0,0,0,0.55)', backdropFilter: 'blur(4px)' }}
              onClick={() => setMobileOpen(false)}
            />

            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 320 }}
              className="fixed top-0 right-0 bottom-0 z-50 lg:hidden flex flex-col"
              style={{ width: '280px', background: '#08111F', borderLeft: '1px solid rgba(255,255,255,0.08)' }}
            >
              {/* Header */}
              <div
                className="flex items-center justify-between px-5 py-4"
                style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}
              >
                <Link to="/" className="flex items-center gap-2" onClick={() => setMobileOpen(false)}>
                  <img src="/Vinayak Finserv logo.png" alt="Vinayak Finserv Logo" className="h-14 w-auto drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]" />
                </Link>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="p-1.5 rounded-lg text-white/60 hover:text-white hover:bg-white/10 transition-colors"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Nav links */}
              <nav className="flex-1 overflow-y-auto px-4 py-5 flex flex-col gap-1">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    end={link.path === '/'}
                    onClick={() => setMobileOpen(false)}
                    style={({ isActive }) => ({
                      fontFamily: '"DM Sans", sans-serif',
                      fontSize: '0.95rem',
                      fontWeight: isActive ? 600 : 500,
                      color: isActive ? '#C9A84C' : 'rgba(255,255,255,0.75)',
                      padding: '0.75rem 1rem',
                      borderRadius: '10px',
                      background: isActive ? 'rgba(201,168,76,0.08)' : 'transparent',
                      display: 'block',
                      transition: 'all 0.18s ease',
                    })}
                    className="hover:!bg-white/5 hover:!text-white"
                  >
                    {link.label}
                  </NavLink>
                ))}
              </nav>

              {/* Footer */}
              <div className="px-4 py-5" style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
                <a
                  href="tel:+919876543210"
                  className="flex items-center gap-2 mb-3"
                  style={{ fontFamily: '"DM Sans", sans-serif', fontSize: '0.85rem', color: 'rgba(255,255,255,0.55)' }}
                >
                  <Phone size={14} color="#C9A84C" />
                  +91 98765 43210
                </a>
                <Link
                  to="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="btn-gold w-full justify-center"
                  style={{ fontSize: '0.85rem' }}
                >
                  Free Consultation
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
