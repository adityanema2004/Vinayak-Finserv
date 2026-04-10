import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, MapPin, Phone, Mail, Clock } from 'lucide-react';


const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Calculators', path: '/calculators' },
    { label: 'Blog', path: '/blog' },
    { label: 'Contact', path: '/contact' },
  ];

  const services = [
    { label: 'Mutual Funds & SIP', path: '/services' },
    { label: 'Life & Health Insurance', path: '/services' },
    { label: 'Home & Personal Loans', path: '/services' },
    { label: 'Fixed Deposits', path: '/services' },
    { label: 'Tax Planning', path: '/services' },
    { label: 'Financial Planning', path: '/services' },
  ];

  return (
    <footer className="bg-[#0A1628] text-white">
      {/* Main Footer */}
      <div className="container-site py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1 — Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2.5 mb-5 group">
              <img src="/Vinayak Finserv logo.png" alt="Vinayak Finserv Logo" className="h-16 w-auto group-hover:scale-105 transition-transform" />
            </Link>
            <p className="font-body text-white/60 text-sm leading-relaxed mb-6">
              Your trusted financial partner since 2014. We help individuals and families in India build lasting wealth through expert, personalised financial guidance.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-3">
              {[
                { label: 'Facebook', href: '#', svg: <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg> },
                { label: 'Instagram', href: '#', svg: <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg> },
                { label: 'LinkedIn', href: '#', svg: <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg> },
                { label: 'YouTube', href: '#', svg: <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg> },
              ].map(({ label, href, svg }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#C9A84C]/20 border border-white/10 hover:border-[#C9A84C]/40 flex items-center justify-center text-white/60 hover:text-[#C9A84C] transition-all duration-200"
                >
                  {svg}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2 — Quick Links */}
          <div>
            <h3 className="font-heading text-white font-semibold text-lg mb-5 pb-2 border-b border-[#C9A84C]/30">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="font-body text-white/60 hover:text-[#C9A84C] text-sm transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#C9A84C]/50 group-hover:bg-[#C9A84C] transition-colors" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Services */}
          <div>
            <h3 className="font-heading text-white font-semibold text-lg mb-5 pb-2 border-b border-[#C9A84C]/30">
              Our Services
            </h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.label}>
                  <Link
                    to={service.path}
                    className="font-body text-white/60 hover:text-[#C9A84C] text-sm transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#C9A84C]/50 group-hover:bg-[#C9A84C] transition-colors" />
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Contact */}
          <div>
            <h3 className="font-heading text-white font-semibold text-lg mb-5 pb-2 border-b border-[#C9A84C]/30">
              Head Office
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#C9A84C] mt-0.5 flex-shrink-0" />
                <span className="font-body text-white/60 text-sm leading-relaxed">
                  Vinayak Finserv,<br />
                  Civil Lines, Raipur,<br />
                  Chhattisgarh – 492 001
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#C9A84C] flex-shrink-0" />
                <a href="tel:+919876543210" className="font-body text-white/60 hover:text-[#C9A84C] text-sm transition-colors">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#C9A84C] flex-shrink-0" />
                <a href="mailto:info@vinayakfinserv.com" className="font-body text-white/60 hover:text-[#C9A84C] text-sm transition-colors">
                  info@vinayakfinserv.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-[#C9A84C] flex-shrink-0" />
                <span className="font-body text-white/60 text-sm">
                  Mon – Sat, 9:30 AM – 6:30 PM
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="border-t border-white/10">
        <div className="container-site py-4">
          <p className="font-body text-white/35 text-xs text-center leading-relaxed">
            <strong className="text-white/50">Disclaimer:</strong> Mutual fund investments are subject to market risks. Please read all scheme-related documents carefully before investing. Past performance is not indicative of future results. Insurance is the subject matter of solicitation. Vinayak Finserv is a SEBI Registered Investment Advisor. AMFI ARN: XXXXXX.
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 bg-black/20">
        <div className="container-site py-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="font-body text-white/50 text-xs">
              © {currentYear} Vinayak Finserv. All rights reserved.
            </p>
            <div className="flex items-center gap-4 flex-wrap justify-center">
              {['SEBI Registered', 'AMFI Certified', 'IRDAI Authorised'].map((badge) => (
                <span
                  key={badge}
                  className="text-xs font-body font-medium text-[#C9A84C]/80 border border-[#C9A84C]/20 px-3 py-1 rounded-full"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
