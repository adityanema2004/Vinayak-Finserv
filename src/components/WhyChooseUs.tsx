import React from 'react';
import { motion } from 'framer-motion';
import { UserCheck, BadgeCheck, HeadphonesIcon, Wallet, MapPin, Cpu } from 'lucide-react';
import { staggerContainerVariant, staggerItemVariant } from '../hooks/useScrollReveal';
import type { WhyChooseItem } from '../types';

const whyItems: WhyChooseItem[] = [
  {
    id: 'personalised',
    icon: 'UserCheck',
    title: 'Personalised Advice',
    description: 'Every client gets a bespoke strategy tailored to their income, goals, and risk appetite — never a one-size-fits-all pitch.',
  },
  {
    id: 'registered',
    icon: 'BadgeCheck',
    title: 'Strictly Compliant',
    description: 'Fully compliant with core industry regulations. Your investments are managed with complete transparency and legal accountability.',
  },
  {
    id: 'support',
    icon: 'HeadphonesIcon',
    title: 'End-to-End Support',
    description: 'From KYC and investment setup to periodic reviews and insurance claims — we support you at every stage of the journey.',
  },
  {
    id: 'transparent',
    icon: 'Wallet',
    title: 'Transparent Fee Structure',
    description: 'No hidden charges. We maintain complete transparency about fees, commissions, and how we are compensated.',
  },
  {
    id: 'local',
    icon: 'MapPin',
    title: 'Local Expertise',
    description: 'HQ in Raipur with offices across India. We understand the financial landscape and aspirations of families in central India.',
  },
  {
    id: 'tech',
    icon: 'Cpu',
    title: 'Technology-Driven Planning',
    description: 'Digital onboarding, real-time portfolio dashboards, and advanced planning tools — a modern fintech experience with a human touch.',
  },
];

const iconMap: Record<string, React.ElementType> = { UserCheck, BadgeCheck, HeadphonesIcon, Wallet, MapPin, Cpu };

const WhyChooseUs: React.FC = () => {
  return (
    <section id="why-choose-us" className="section-padding" style={{ background: '#ffffff' }}>
      <div className="container-site">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
          style={{ maxWidth: '540px', marginLeft: 'auto', marginRight: 'auto' }}
        >
          <span className="section-label">Why Vinayak Finserv</span>
          <h2 style={{
            fontFamily: '"Playfair Display", serif',
            fontSize: 'clamp(1.8rem, 4vw, 2.75rem)',
            fontWeight: 700,
            color: '#0A1628',
            lineHeight: 1.2,
            marginBottom: '1rem',
          }}>
            The Vinayak Advantage
          </h2>
          <p style={{
            fontFamily: '"DM Sans", sans-serif',
            fontSize: '1rem',
            lineHeight: 1.7,
            color: '#6C757D',
          }}>
            Six pillars that make us the most trusted financial partner across Chhattisgarh and beyond.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={staggerContainerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {whyItems.map((item) => {
            const Icon = iconMap[item.icon];
            return (
              <motion.div
                key={item.id}
                variants={staggerItemVariant}
                className="group rounded-2xl p-7 border cursor-default"
                style={{
                  background: '#F8F9FA',
                  borderColor: '#EAECEF',
                  boxShadow: '0 1px 6px rgba(10,22,40,0.04)',
                  transition: 'all 0.3s ease',
                }}
                whileHover={{
                  background: '#ffffff',
                  y: -4,
                  boxShadow: '0 8px 40px rgba(10,22,40,0.09)',
                  borderColor: 'rgba(232,169,32,0.3)',
                }}
              >
                {/* Icon */}
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 group-hover:bg-[#C9A84C] transition-colors duration-300"
                  style={{ background: '#0D2447' }}
                >
                  <Icon
                    size={20}
                    className="text-[#E8A920] group-hover:text-[#0D2447] transition-colors duration-300"
                    strokeWidth={1.7}
                  />
                </div>

                <h3 style={{
                  fontFamily: '"Playfair Display", serif',
                  fontSize: '1.1rem',
                  fontWeight: 700,
                  color: '#0D2447',
                  marginBottom: '0.65rem',
                  lineHeight: 1.3,
                }}>
                  {item.title}
                </h3>
                <p style={{
                  fontFamily: '"DM Sans", sans-serif',
                  fontSize: '0.875rem',
                  lineHeight: 1.7,
                  color: '#64748B',
                }}>
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
