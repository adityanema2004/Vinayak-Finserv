import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Shield, Award, Users, Target, CheckCircle2, ArrowRight, MapPin,
} from 'lucide-react';

import { staggerContainerVariant, staggerItemVariant } from '../hooks/useScrollReveal';

const milestones = [
  { year: '2014', event: 'Founded in Raipur, CG', desc: 'Vinayak Finserv started with a vision to democratise quality financial advice in Chhattisgarh.' },
  { year: '2016', event: 'AMFI & SEBI Registration', desc: 'Obtained all regulatory certifications, establishing ourselves as a compliance-first firm.' },
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
    description: 'We maintain the highest standards of regulatory compliance. SEBI and AMFI guidelines are not just requirements for us — they are our operating philosophy.',
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

const About: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>About Us | Vinayak Finserv</title>
        <meta
          name="description"
          content="Learn about Vinayak Finserv's story, mission, values, and the team behind Chhattisgarh's most trusted financial advisory firm. SEBI Registered & AMFI Certified."
        />
      </Helmet>

      {/* Page Hero */}
      <section
        className="relative overflow-hidden"
        style={{ background: 'linear-gradient(160deg, #06101E 0%, #0A1628 100%)', paddingTop: '7.5rem', paddingBottom: '5rem' }}
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
              <span className="inline-block font-body text-[#C9A84C] font-semibold text-sm tracking-widest uppercase mb-4">
                Our Story
              </span>
              <h1 className="font-heading text-white text-4xl sm:text-5xl font-bold leading-tight mb-6">
                A Decade of Building{' '}
                <span className="text-gold-gradient">Financial Trust</span>
              </h1>
              <p className="font-body text-white/70 text-lg leading-relaxed mb-8">
                Founded in 2014 in Raipur, Vinayak Finserv began with a simple mission: to make quality financial advice accessible to every Indian family — not just the wealthy few. A decade later, we manage over ₹50 crore for 500+ families across 6 cities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="btn-gold font-body">
                  Work With Us
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link to="/services" className="btn-outline font-body">
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
                  <p className="font-heading text-[#C9A84C] text-3xl font-bold mb-1">{stat.value}</p>
                  <p className="font-body text-white/60 text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-white">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {[
              {
                title: 'Our Mission',
                icon: Target,
                text: 'To empower every Indian family — regardless of income level — with personalised, transparent, and goal-driven financial advisory services. We believe that good financial advice should not be a luxury.',
                bg: 'bg-[#0A1628]',
                textColor: 'text-white',
                descColor: 'text-white/70',
                iconBg: 'bg-[#C9A84C]',
                iconColor: 'text-[#0A1628]',
              },
              {
                title: 'Our Vision',
                icon: Award,
                text: 'To become India\'s most trusted regional financial advisory network, where every client feels like their financial well-being is our personal responsibility. Quality, compliance, and care — in every interaction.',
                bg: 'bg-[#C9A84C]',
                textColor: 'text-[#0A1628]',
                descColor: 'text-[#0A1628]/80',
                iconBg: 'bg-[#0A1628]',
                iconColor: 'text-[#C9A84C]',
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

      {/* Values */}
      <section className="section-padding bg-gray-50">
        <div className="container-site">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto mb-14"
          >
            <span className="inline-block font-body text-[#C9A84C] font-semibold text-sm tracking-widest uppercase mb-3">
              What We Stand For
            </span>
            <h2 className="font-heading text-[#0A1628] text-3xl sm:text-4xl font-bold">
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
                  className="group bg-white rounded-2xl p-7 border border-gray-100 hover:border-[#C9A84C]/30 hover:shadow-[0_8px_40px_rgba(10,22,40,0.08)] hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#0A1628] group-hover:bg-[#C9A84C] flex items-center justify-center mb-5 transition-colors duration-300">
                    <Icon className="w-6 h-6 text-[#C9A84C] group-hover:text-[#0A1628] transition-colors duration-300" />
                  </div>
                  <h3 className="font-heading text-[#0A1628] text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="font-body text-gray-600 text-sm leading-relaxed">{value.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding" style={{ background: '#0A1628' }}>
        <div className="container-site" style={{ maxWidth: '860px' }}>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <span className="inline-block font-body text-[#C9A84C] font-semibold text-sm tracking-widest uppercase mb-3">
              Our Journey
            </span>
            <h2 className="font-heading text-white text-3xl sm:text-4xl font-bold">
              10 Years of Growth
            </h2>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-[#C9A84C] via-[#C9A84C]/40 to-transparent" />

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
                    <div className="w-4 h-4 rounded-full bg-[#C9A84C] border-4 border-[#0A1628] shadow-[0_0_0_2px_#C9A84C] mt-1" />
                  </div>

                  {/* Content */}
                  <div className="glass-card rounded-2xl p-5 flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="font-heading text-[#C9A84C] text-2xl font-bold">{m.year}</span>
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

      {/* Office Locations Preview */}
      <section className="section-padding bg-white">
        <div className="container-site">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-[#0A1628] text-3xl sm:text-4xl font-bold mb-4">
              Where to Find Us
            </h2>
            <p className="font-body text-gray-600">
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
                className="flex flex-col items-center text-center p-4 rounded-2xl border border-gray-100 bg-gray-50 hover:bg-white hover:border-[#C9A84C]/30 hover:shadow-md transition-all duration-200"
              >
                <div className="w-10 h-10 rounded-full bg-[#0A1628] flex items-center justify-center mb-3">
                  <MapPin className="w-5 h-5 text-[#C9A84C]" />
                </div>
                <p className="font-heading text-[#0A1628] font-semibold text-sm">{loc.city}</p>
                <p className="font-body text-gray-400 text-xs">{loc.state}</p>
                {loc.hq && (
                  <span className="mt-1.5 text-xs font-body font-medium text-[#C9A84C] bg-[#C9A84C]/10 px-2 py-0.5 rounded-full">
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
              { icon: Shield, title: 'SEBI Registered', desc: 'Registered Investment Advisor under SEBI (RA) Regulations, 2013' },
              { icon: Award, title: 'AMFI Certified', desc: 'AMFI Registration Number (ARN) holder since 2016 — NISM certified advisors' },
              { icon: CheckCircle2, title: 'IRDAI Authorised', desc: 'Authorised insurance intermediary for life and general insurance products' },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="flex gap-4 items-start p-5 rounded-2xl bg-gray-50 border border-gray-100">
                <div className="w-10 h-10 rounded-xl bg-[#0A1628] flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5 text-[#C9A84C]" />
                </div>
                <div>
                  <h4 className="font-heading text-[#0A1628] font-semibold text-base mb-1">{title}</h4>
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
