import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Shield, Award, Users, Target, CheckCircle2, ArrowRight, MapPin,
  Mail,
} from 'lucide-react';

import { staggerContainerVariant, staggerItemVariant } from '../hooks/useScrollReveal';

const milestones = [
  { year: '2014', event: 'Founded in Raipur, CG', desc: 'Vinayak Finserv started with a vision to democratise quality financial advice in Chhattisgarh.' },
  { year: '2016', event: 'Regulatory Checkpoints Met', desc: 'Obtained all regulatory certifications, establishing ourselves as a compliance-first firm.' },
  { year: '2018', event: 'Crossed 100 Clients', desc: 'Word-of-mouth trust brought us to our first 100 client families managed with care.' },
  { year: '2020', event: 'Bhilai & Bilaspur Offices', desc: 'Expanded operations within Chhattisgarh to serve clients across the state more effectively.' },
  { year: '2022', event: 'Pan-India Expansion', desc: 'Opened offices in Nagpur, Indore, and Mumbai, growing our client base nationally.' },
  { year: '2024', event: '₹50 Cr+ AUM Milestone', desc: 'Crossed ₹50 Crore in assets under management, serving 500+ families across 6 cities.' },
];

const teamValues = [
  {
    icon: Shield,
    title: 'Client First, Always',
    description: 'Every decision we make starts and ends with one question: is this in the best interest of our client? We never push products — we recommend solutions.',
  },
  {
    icon: Award,
    title: 'Compliance & Ethics',
    description: 'We maintain the highest standards of regulatory compliance. Core industry guidelines are not just requirements for us — they are our operating philosophy.',
  },
  {
    icon: Users,
    title: 'Long-term Relationships',
    description: 'We don\'t see clients as transactions. We build multi-decade relationships, guiding families through every life stage and financial milestone.',
  },
  {
    icon: Target,
    title: 'Goal-Driven Advice',
    description: 'No two clients are alike. Our advice is always tailored to specific, measurable financial goals — not generic recommendations from a product catalog.',
  },
];

const topManagement = [
  {
    name: 'Rajesh Vinayak Sharma',
    title: 'Founder & Managing Director',
    photo: '/team-director.png',
    bio: 'With over 20 years of experience in the finance sector, Rajesh founded Vinayak Finserv in 2014 with a vision to make premium financial products accessible to every Indian family. An expert Financial Intermediary and Loan Specialist.',
    credentials: ['Finance Specialist', 'Loan & Insurance Expert', 'Financial Consultant', 'MBA Finance – IIM Calcutta'],
    linkedin: '#',
    email: 'rajesh@vinayakfinserv.com',
  },
  {
    name: 'Priya Mehta',
    title: 'Chief Financial Officer',
    photo: '/team-cfo.png',
    bio: 'Priya brings 15+ years of expertise in corporate finance, corporate funding, and strategic advisory. As CFO, she oversees all financial operations and ensures regulatory compliance across all offices. Passionate about women\'s financial literacy.',
    credentials: ['CA (ICAI)', 'CFA Level III', 'IRDAI Certified', 'NISM Series V-A'],
    linkedin: '#',
    email: 'priya@vinayakfinserv.com',
  },
  {
    name: 'Arjun Patel',
    title: 'Head of Investments',
    photo: '/team-investment-head.png',
    bio: 'Arjun is a certified financial consultant with deep expertise in personal and business financing. He leads the advisory team and is responsible for matching clients with the best third-party financial products across segments.',
    credentials: ['NISM Research Analyst', 'MBA (Finance)', 'CFA Charterholder', 'FRM Certified'],
    linkedin: '#',
    email: 'arjun@vinayakfinserv.com',
  },
];

const About: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>About Us | Vinayak Finserv</title>
        <meta
          name="description"
          content="Learn about Vinayak Finserv's story, mission, values, and the team behind India's most trusted financial advisory firm."
        />
      </Helmet>

      {/* ─── Page Hero ─── */}
      <section
        className="relative overflow-hidden"
        style={{
          background: 'linear-gradient(150deg, #0D2447 0%, #1A3A6B 55%, #2563B0 100%)',
          paddingTop: '7.5rem',
          paddingBottom: '5rem',
        }}
      >
        <div className="absolute inset-0 mesh-overlay" />
        <div className="absolute inset-0 grid-overlay opacity-15" />
        <div className="container-site relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <div>
              <span className="inline-block font-body text-[#E8A920] font-semibold text-sm tracking-widest uppercase mb-4">
                Our Story
              </span>
              <h1 className="font-heading text-white text-4xl sm:text-5xl font-bold leading-tight mb-6">
                A Decade of Building{' '}
                <span className="text-gold-gradient">Financial Trust</span>
              </h1>
              <p className="font-body text-white/70 text-lg leading-relaxed mb-8">
                Founded in 2014 in Raipur, Vinayak Finserv began with a simple mission: to make quality financial and loan products accessible to every Indian family. A decade later, we have facilitated financing for 500+ families and businesses across 6 cities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="btn-gold font-body">
                  Work With Us
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link to="/services" className="btn-outline-white font-body">
                  Our Services
                </Link>
              </div>
            </div>

            {/* Stats panel */}
            <div className="glass-card rounded-3xl p-8 grid grid-cols-2 gap-6">
              {[
                { value: '10+', label: 'Years of Excellence' },
                { value: '500+', label: 'Happy Clients' },
                { value: '₹50 Cr+', label: 'Assets Managed' },
                { value: '6', label: 'Cities Served' },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="font-heading text-[#E8A920] text-3xl font-bold mb-1">{stat.value}</p>
                  <p className="font-body text-white/60 text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── Mission & Vision ─── */}
      <section className="section-padding bg-white">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {[
              {
                title: 'Our Mission',
                icon: Target,
                text: 'To empower every Indian family — regardless of income level — with personalised, transparent, and goal-driven financial advisory services. We believe that good financial advice should not be a luxury.',
                bg: 'bg-[#0D2447]',
                textColor: 'text-white',
                descColor: 'text-white/70',
                iconBg: 'bg-[#E8A920]',
                iconColor: 'text-[#0D2447]',
              },
              {
                title: 'Our Vision',
                icon: Award,
                text: 'To become India\'s most trusted regional financial advisory network, where every client feels like their financial well-being is our personal responsibility. Quality, compliance, and care — in every interaction.',
                bg: 'bg-[#E8A920]',
                textColor: 'text-[#0D2447]',
                descColor: 'text-[#0D2447]/80',
                iconBg: 'bg-[#0D2447]',
                iconColor: 'text-[#E8A920]',
              },
            ].map(({ title, icon: Icon, text, bg, textColor, descColor, iconBg, iconColor }) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className={`${bg} rounded-3xl p-10`}
              >
                <div className={`w-14 h-14 rounded-2xl ${iconBg} flex items-center justify-center mb-6`}>
                  <Icon className={`w-7 h-7 ${iconColor}`} />
                </div>
                <h2 className={`font-heading ${textColor} text-2xl font-bold mb-4`}>{title}</h2>
                <p className={`font-body ${descColor} text-base leading-relaxed`}>{text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TOP MANAGEMENT TEAM ─── */}
      <section className="section-padding" style={{ background: '#F8FAFC' }}>
        <div className="container-site">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <span className="section-label">Leadership</span>
            <h2 className="font-heading text-[#0D2447] text-3xl sm:text-4xl font-bold mb-4">
              Meet Our Top Management
            </h2>
            <p className="font-body text-gray-500 text-base leading-relaxed">
              Our leadership team brings decades of combined experience in financial intermediation, loan distribution, and insurance planning.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainerVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {topManagement.map((member) => (
              <motion.div
                key={member.name}
                variants={staggerItemVariant}
                className="group bg-white rounded-3xl overflow-hidden shadow-[0_2px_20px_rgba(13,36,71,0.07)] border border-[#E2E8F0] hover:shadow-[0_12px_50px_rgba(13,36,71,0.13)] hover:-translate-y-2 transition-all duration-400"
              >
                {/* Photo */}
                <div
                  className="relative overflow-hidden"
                  style={{ height: '280px' }}
                >
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Gradient overlay */}
                  <div
                    className="absolute inset-0"
                    style={{ background: 'linear-gradient(to top, rgba(13,36,71,0.85) 0%, rgba(13,36,71,0.2) 55%, transparent 100%)' }}
                  />

                  {/* Name + title overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <h3 style={{ fontFamily: '"Playfair Display", serif', fontSize: '1.2rem', fontWeight: 700, color: '#ffffff', lineHeight: 1.2, marginBottom: '3px' }}>
                      {member.name}
                    </h3>
                    <p style={{ fontFamily: '"DM Sans", sans-serif', fontSize: '0.78rem', fontWeight: 600, color: '#E8A920', letterSpacing: '0.04em' }}>
                      {member.title}
                    </p>
                  </div>
                </div>

                {/* Body */}
                <div className="p-6">
                  <p style={{ fontFamily: '"DM Sans", sans-serif', fontSize: '0.85rem', lineHeight: 1.75, color: '#475569', marginBottom: '1.2rem' }}>
                    {member.bio}
                  </p>

                  {/* Credentials */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {member.credentials.map((c) => (
                      <span
                        key={c}
                        style={{
                          fontFamily: '"DM Sans", sans-serif',
                          fontSize: '0.68rem',
                          fontWeight: 600,
                          color: '#1A3A6B',
                          background: 'rgba(26,58,107,0.08)',
                          padding: '0.2rem 0.6rem',
                          borderRadius: '50px',
                          letterSpacing: '0.02em',
                        }}
                      >
                        {c}
                      </span>
                    ))}
                  </div>

                  {/* Social links */}
                  <div className="flex gap-3">
                    <a
                      href={member.linkedin}
                      className="w-8 h-8 rounded-full flex items-center justify-center transition-colors hover:bg-blue-100"
                      style={{ background: 'rgba(26,58,107,0.08)', color: '#1A3A6B' }}
                      aria-label={`${member.name} LinkedIn`}
                    >
                      <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>
                    <a
                      href={`mailto:${member.email}`}
                      className="w-8 h-8 rounded-full flex items-center justify-center transition-colors"
                      style={{ background: 'rgba(232,169,32,0.12)', color: '#C9891A' }}
                      aria-label={`Email ${member.name}`}
                    >
                      <Mail size={15} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── Values ─── */}
      <section className="section-padding bg-white">
        <div className="container-site">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto mb-14"
          >
            <span className="section-label">What We Stand For</span>
            <h2 className="font-heading text-[#0D2447] text-3xl sm:text-4xl font-bold">
              Our Core Values
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainerVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {teamValues.map((value) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  variants={staggerItemVariant}
                  className="group bg-white rounded-2xl p-7 border border-[#E2E8F0] hover:border-[#E8A920]/40 hover:shadow-[0_8px_40px_rgba(13,36,71,0.08)] hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#0D2447] group-hover:bg-[#E8A920] flex items-center justify-center mb-5 transition-colors duration-300">
                    <Icon className="w-6 h-6 text-[#E8A920] group-hover:text-[#0D2447] transition-colors duration-300" />
                  </div>
                  <h3 className="font-heading text-[#0D2447] text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="font-body text-gray-600 text-sm leading-relaxed">{value.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ─── Timeline ─── */}
      <section className="section-padding" style={{ background: 'linear-gradient(150deg, #0D2447 0%, #1A3A6B 100%)' }}>
        <div className="container-site" style={{ maxWidth: '860px' }}>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <span className="section-label">Our Journey</span>
            <h2 className="font-heading text-white text-3xl sm:text-4xl font-bold">
              10 Years of Growth
            </h2>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-[#E8A920] via-[#E8A920]/40 to-transparent" />

            <div className="space-y-10">
              {milestones.map((m, idx) => (
                <motion.div
                  key={m.year}
                  initial={{ opacity: 0, x: -24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  className="flex items-start gap-6 pl-2"
                >
                  {/* Dot */}
                  <div className="relative flex-shrink-0 w-14 flex justify-center">
                    <div className="w-4 h-4 rounded-full bg-[#E8A920] border-4 border-[#0D2447] shadow-[0_0_0_2px_#E8A920] mt-1" />
                  </div>

                  {/* Content */}
                  <div className="glass-card rounded-2xl p-5 flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="font-heading text-[#E8A920] text-2xl font-bold">{m.year}</span>
                      <span className="font-heading text-white font-semibold text-base">{m.event}</span>
                    </div>
                    <p className="font-body text-white/60 text-sm leading-relaxed">{m.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Office Locations ─── */}
      <section className="section-padding bg-white">
        <div className="container-site">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-[#0D2447] text-3xl sm:text-4xl font-bold mb-4">
              Where to Find Us
            </h2>
            <p className="font-body text-gray-500">
              Six offices across India — always close to you.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainerVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4"
          >
            {[
              { city: 'Raipur', state: 'CG', hq: true },
              { city: 'Bhilai', state: 'CG', hq: false },
              { city: 'Bilaspur', state: 'CG', hq: false },
              { city: 'Nagpur', state: 'MH', hq: false },
              { city: 'Indore', state: 'MP', hq: false },
              { city: 'Mumbai', state: 'MH', hq: false },
            ].map((loc) => (
              <motion.div
                key={loc.city}
                variants={staggerItemVariant}
                className="flex flex-col items-center text-center p-4 rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] hover:bg-white hover:border-[#E8A920]/40 hover:shadow-md transition-all duration-200"
              >
                <div className="w-10 h-10 rounded-full bg-[#0D2447] flex items-center justify-center mb-3">
                  <MapPin className="w-5 h-5 text-[#E8A920]" />
                </div>
                <p className="font-heading text-[#0D2447] font-semibold text-sm">{loc.city}</p>
                <p className="font-body text-gray-400 text-xs">{loc.state}</p>
                {loc.hq && (
                  <span className="mt-1.5 text-xs font-body font-medium text-[#E8A920] bg-[#E8A920]/10 px-2 py-0.5 rounded-full">
                    HQ
                  </span>
                )}
              </motion.div>
            ))}
          </motion.div>

          {/* Credentials */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6"
          >
            {[
              { icon: Shield, title: 'Strict Compliance', desc: 'Operating with complete transparency and adhering to industry standards' },
              { icon: Award, title: 'Certified Experts', desc: 'Seasoned professionals connecting you with the right financial institutions' },
              { icon: CheckCircle2, title: 'IRDAI Authorised', desc: 'Authorised insurance intermediary for life and general insurance products' },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="flex gap-4 items-start p-5 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0]">
                <div className="w-10 h-10 rounded-xl bg-[#0D2447] flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5 text-[#E8A920]" />
                </div>
                <div>
                  <h4 className="font-heading text-[#0D2447] font-semibold text-base mb-1">{title}</h4>
                  <p className="font-body text-gray-500 text-xs leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default About;
