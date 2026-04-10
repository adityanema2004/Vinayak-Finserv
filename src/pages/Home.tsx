import React from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '../components/Hero';
import ServicesSection from '../components/ServicesSection';
import StatsSection from '../components/StatsSection';
import WhyChooseUs from '../components/WhyChooseUs';
import Testimonials from '../components/Testimonials';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Calculator, Phone } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Vinayak Finserv | Trusted Financial Partner</title>
        <meta
          name="description"
          content="Vinayak Finserv — Expert guidance in Mutual Funds, Insurance, Loans & Tax Planning. SEBI Registered, AMFI Certified."
        />
      </Helmet>

      <Hero />
      <ServicesSection />
      <StatsSection />
      <WhyChooseUs />
      <Testimonials />

      {/* Gold CTA Banner */}
      <section style={{ background: 'linear-gradient(135deg, #C9A84C 0%, #d9bc6a 60%, #C9A84C 100%)', padding: '5rem 1.25rem' }}>
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
          >
            <h2 style={{
              fontFamily: '"Playfair Display", serif',
              fontSize: 'clamp(1.7rem, 4vw, 2.3rem)',
              fontWeight: 700,
              color: '#0A1628',
              marginBottom: '0.85rem',
              lineHeight: 1.25,
            }}>
              Ready to Start Your Financial Journey?
            </h2>
            <p style={{
              fontFamily: '"DM Sans", sans-serif',
              fontSize: '1rem',
              lineHeight: 1.7,
              color: 'rgba(10,22,40,0.72)',
              maxWidth: '560px',
              margin: '0 auto 2.25rem',
            }}>
              Book a free 30-minute consultation with our certified advisors. No commitment — just clarity and a personalised plan.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link to="/contact" className="btn-navy w-full sm:w-auto justify-center">
                Book Free Consultation
                <ArrowRight size={16} />
              </Link>
              <Link to="/calculators" className="flex items-center justify-center gap-2 w-full sm:w-auto rounded-full px-6 py-2.5 font-semibold text-[#0A1628] border border-[#0A1628]/20 hover:bg-[#0A1628]/10 transition-all"
                style={{ fontFamily: '"DM Sans", sans-serif', fontSize: '0.875rem', background: 'rgba(255,255,255,0.25)' }}
              >
                <Calculator size={16} />
                Try Our Calculators
              </Link>
              <a
                href="tel:+919876543210"
                className="flex items-center gap-2 hover:underline"
                style={{ fontFamily: '"DM Sans", sans-serif', fontSize: '0.875rem', fontWeight: 600, color: '#0A1628' }}
              >
                <Phone size={15} />
                +91 98765 43210
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Home;
