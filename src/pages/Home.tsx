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
          content="Vinayak Finserv — Expert guidance in Loans, Insurance & Financial Planning."
        />
      </Helmet>

      <Hero />
      <ServicesSection />
      <StatsSection />
      <WhyChooseUs />
      <Testimonials />

      {/* Blue CTA Banner */}
      <section style={{ background: 'linear-gradient(150deg, #0D2447 0%, #1A3A6B 55%, #2563B0 100%)', padding: '5rem 1.25rem' }}>
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-label">Get Started Today</span>
            <h2 style={{
              fontFamily: '"Playfair Display", serif',
              fontSize: 'clamp(1.7rem, 4vw, 2.3rem)',
              fontWeight: 700,
              color: '#ffffff',
              marginBottom: '0.85rem',
              lineHeight: 1.25,
            }}>
              Ready to Start Your Financial Journey?
            </h2>
            <p style={{
              fontFamily: '"DM Sans", sans-serif',
              fontSize: '1rem',
              lineHeight: 1.7,
              color: 'rgba(255,255,255,0.65)',
              maxWidth: '560px',
              margin: '0 auto 2.25rem',
            }}>
              Book a free 30-minute consultation with our certified advisors. No commitment — just clarity and a personalised plan.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link to="/contact" className="btn-gold w-full sm:w-auto justify-center">
                Book Free Consultation
                <ArrowRight size={16} />
              </Link>
              <Link to="/calculators" className="btn-outline-white w-full sm:w-auto justify-center">
                <Calculator size={16} />
                Try Our Calculators
              </Link>
              <a
                href="tel:+919876543210"
                className="flex items-center gap-2 hover:underline"
                style={{ fontFamily: '"DM Sans", sans-serif', fontSize: '0.875rem', fontWeight: 600, color: 'rgba(255,255,255,0.7)' }}
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
