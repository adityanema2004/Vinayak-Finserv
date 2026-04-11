import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight, Search, BookOpen } from 'lucide-react';
import { staggerContainerVariant, staggerItemVariant } from '../hooks/useScrollReveal';

/* ─── Data ───────────────────────────────────────────────────────────────── */

interface Post {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  category: string;
  readTime: string;
  color: string;       // accent colour for text
  image: string;       // thumbnail image
}

const posts: Post[] = [
  {
    id: 'loan-business',
    title: '5 Reasons to Leverage Business Loans for Expansion',
    date: 'March 15, 2024',
    excerpt:
      'The right financing can scale your operations exponentially. Discover why strategic business loans can accelerate your market growth and multiply profitability.',
    category: 'Analysis',
    readTime: '5 min read',
    color: '#2563EB',
    image: '/service-loans.png',
  },
  {
    id: 'term-vs-whole',
    title: "Term vs Whole Life Insurance — What's Right for You?",
    date: 'February 28, 2024',
    excerpt:
      'Choosing between term and whole life insurance is one of the most important financial decisions. We break down costs, benefits, and which one suits different life stages.',
    category: 'Insurance',
    readTime: '7 min read',
    color: '#059669',
    image: '/service-insurance.png',
  },
  {
    id: 'personal-loan-guide',
    title: '5 Factors Lenders Check Before Approving Your Personal Loan',
    date: 'February 10, 2024',
    excerpt:
      'Understanding what banks look for can significantly improve your loan approval odds. Here\'s a comprehensive guide to CIBIL scores, FOIR, and documentation requirements.',
    category: 'Analysis',
    readTime: '8 min read',
    color: '#7C3AED',
    image: '/service-financial-planning.png',
  },
  {
    id: 'home-loan-cg',
    title: 'Home Loan Tips for First-Time Buyers in India',
    date: 'January 22, 2024',
    excerpt:
      "Buying your first home is one of life's biggest milestones. This guide covers eligibility, documentation, the best lenders, and how to negotiate the lowest possible interest rate.",
    category: 'Loans',
    readTime: '6 min read',
    color: '#EA580C',
    image: '/service-loans.png',
  },
  {
    id: 'secured-loans-guide',
    title: 'Understanding Secured Loans — A Beginner\'s Guide',
    date: 'January 5, 2024',
    excerpt:
      "Collateral valuation is a core component of secured loans. Many new borrowers misunderstand the appraisal process. This guide explains Loan-to-Value (LTV), how it's calculated, and why it matters.",
    category: 'Secured Loans',
    readTime: '4 min read',
    color: '#0891B2',
    image: '/service-financial-planning.png',
  },
  {
    id: 'secured-vs-unsecured',
    title: 'Secured vs Unsecured Business Loans — Which Should You Choose?',
    date: 'December 18, 2023',
    excerpt:
      'Both secured and unsecured loans have their place in business financing. We compare interest rates, collateral, processing time, and loan size to help you decide what\'s best for your company.',
    category: 'Loans',
    readTime: '6 min read',
    color: '#C9891A',
    image: '/service-fd.png',
  },
];

const categories = ['All', ...Array.from(new Set(posts.map((p) => p.category)))];

/* ─── Category badge colours ─────────────────────────────────────────────── */
// const badgeStyle: Record<string, { bg: string; text: string; border: string }> = {
//   'Secured Loans': { bg: 'rgba(59,130,246,0.1)',  text: '#2563EB', border: 'rgba(59,130,246,0.2)'  },
//   'Analysis': { bg: 'rgba(59,130,246,0.1)',  text: '#2563EB', border: 'rgba(59,130,246,0.2)'  },
//   Insurance:      { bg: 'rgba(16,185,129,0.1)',  text: '#059669', border: 'rgba(16,185,129,0.2)'  },

//   Loans:          { bg: 'rgba(249,115,22,0.1)',  text: '#EA580C', border: 'rgba(249,115,22,0.2)'  },
//   Investing:      { bg: 'rgba(232,169,32,0.12)', text: '#C9891A', border: 'rgba(232,169,32,0.25)' },
// };

/* ─── Blog card ──────────────────────────────────────────────────────────── */
const BlogCard: React.FC<{ post: Post }> = ({ post }) => {

  return (
    <motion.article
      variants={staggerItemVariant}
      className="group flex flex-col rounded-2xl overflow-hidden bg-white"
      style={{
        border: '1px solid #E2E8F0',
        boxShadow: '0 2px 16px rgba(13,36,71,0.05)',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      }}
      whileHover={{ y: -6, boxShadow: '0 20px 60px rgba(13,36,71,0.10)' }}
    >
      {/* Thumbnail */}
      <div className="relative h-48 flex items-center justify-center overflow-hidden flex-shrink-0 bg-[#F8FAFC]">
        <img 
          src={post.image} 
          alt={post.title} 
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(13,36,71,0.6) 0%, transparent 100%)' }} />
        
        {/* Category pill on thumbnail */}
        <div className="absolute top-3 left-3">
          <span
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-white"
            style={{
              fontFamily: '"DM Sans", sans-serif',
              fontSize: '0.72rem',
              fontWeight: 600,
              letterSpacing: '0.03em',
              background: 'rgba(13,36,71,0.6)',
              backdropFilter: 'blur(8px)',
              border: '1px solid rgba(255,255,255,0.15)',
            }}
          >
            <BookOpen size={10} />
            {post.category}
          </span>
        </div>
        
        {/* Read time pill */}
        <div className="absolute bottom-3 right-3">
          <span
            style={{
              fontFamily: '"DM Sans", sans-serif',
              fontSize: '0.7rem',
              fontWeight: 500,
              color: 'rgba(255,255,255,0.9)',
              background: 'rgba(0,0,0,0.5)',
              backdropFilter: 'blur(4px)',
              border: '1px solid rgba(255,255,255,0.2)',
              borderRadius: '50px',
              padding: '0.25rem 0.75rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.35rem',
            }}
          >
            <Clock size={10} />
            {post.readTime}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6">
        {/* Category badge (optional if retained, but we placed it on the image instead) */}
        
        {/* Title */}
        <h2
          className="group-hover:text-[#E8A920] transition-colors duration-200 line-clamp-2 mb-3 flex-0"
          style={{
            fontFamily: '"Playfair Display", serif',
            fontSize: '1.2rem',
            fontWeight: 700,
            color: '#0D2447',
            lineHeight: 1.35,
          }}
        >
          {post.title}
        </h2>

        {/* Excerpt */}
        <p
          className="line-clamp-3 flex-1"
          style={{
            fontFamily: '"DM Sans", sans-serif',
            fontSize: '0.9rem',
            lineHeight: 1.7,
            color: '#475569',
            marginBottom: '1.25rem',
          }}
        >
          {post.excerpt}
        </p>

        {/* Footer */}
        <div
          className="flex items-center justify-between"
          style={{ paddingTop: '1rem', borderTop: '1px solid #E2E8F0' }}
        >
          <div className="flex items-center gap-3">
            <span
              className="flex items-center gap-1.5"
              style={{ fontFamily: '"DM Sans", sans-serif', fontSize: '0.8rem', color: '#64748B' }}
            >
              <Calendar size={13} />
              {post.date}
            </span>
          </div>
          <button
            className="flex items-center gap-1.5 group/link transition-colors"
            style={{ fontFamily: '"DM Sans", sans-serif', fontSize: '0.82rem', fontWeight: 700, color: '#1A3A6B' }}
          >
            Read More
            <ArrowRight size={14} className="group-hover/link:translate-x-1.5 transition-transform duration-200" />
          </button>
        </div>
      </div>
    </motion.article>
  );
};

/* ─── Page ───────────────────────────────────────────────────────────────── */
const Blog: React.FC = () => {
  const [searchTerm, setSearchTerm]       = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = posts.filter((p) => {
    const matchCat  = activeCategory === 'All' || p.category === activeCategory;
    const matchText = p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                      p.category.toLowerCase().includes(searchTerm.toLowerCase());
    return matchCat && matchText;
  });

  return (
    <>
      <Helmet>
        <title>Blog & Insights | Vinayak Finserv</title>
        <meta
          name="description"
          content="Financial insights, tips, and guides from Vinayak Finserv's certified advisors. Learn about SIP, insurance, loans, and more."
        />
      </Helmet>

      {/* ── Hero ── */}
      <section
        className="relative overflow-hidden"
        style={{
          background: 'linear-gradient(150deg, #0D2447 0%, #1A3A6B 55%, #2563B0 100%)',
          paddingTop: '7.5rem',
          paddingBottom: '5rem',
        }}
      >
        <div className="absolute inset-0 mesh-overlay pointer-events-none" />
        <div className="absolute inset-0 grid-overlay opacity-10 pointer-events-none" />

        <div className="container-site relative z-10 text-center">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="section-label"
          >
            Knowledge Centre
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            style={{
              fontFamily: '"Playfair Display", serif',
              fontSize: 'clamp(2rem, 5vw, 3.25rem)',
              fontWeight: 700,
              color: '#ffffff',
              lineHeight: 1.2,
              marginBottom: '0.9rem',
            }}
          >
            Financial Insights & Blog
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.16 }}
            style={{
              fontFamily: '"DM Sans", sans-serif',
              fontSize: '1rem',
              color: 'rgba(255,255,255,0.7)',
              lineHeight: 1.7,
              maxWidth: '560px',
              margin: '0 auto 2.5rem',
            }}
          >
            Expert analysis and practical guides to help you make smarter financial decisions.
          </motion.p>

          {/* Search bar */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.24 }}
            className="relative mx-auto"
            style={{ maxWidth: '460px' }}
          >
            <Search
              size={18}
              style={{ position: 'absolute', left: '1.25rem', top: '50%', transform: 'translateY(-50%)', color: 'rgba(255,255,255,0.4)' }}
            />
            <input
              type="search"
              id="blog-search"
              placeholder="Search articles…"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                width: '100%',
                paddingLeft: '3rem',
                paddingRight: '1.5rem',
                paddingTop: '0.85rem',
                paddingBottom: '0.85rem',
                borderRadius: '50px',
                background: 'rgba(255,255,255,0.1)',
                border: '1px solid rgba(255,255,255,0.25)',
                color: '#ffffff',
                fontFamily: '"DM Sans", sans-serif',
                fontSize: '0.95rem',
                outline: 'none',
              }}
              className="placeholder:text-white/40 focus:border-[#E8A920] focus:bg-white/15 transition-all shadow-lg"
            />
          </motion.div>
        </div>
      </section>

      {/* ── Category Filter Bar ── */}
      <div style={{ background: '#ffffff', borderBottom: '1px solid #E2E8F0', position: 'sticky', top: '70px', zIndex: 30 }}>
        <div className="container-site">
          <div className="flex items-center gap-2 overflow-x-auto py-4 no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  fontFamily: '"DM Sans", sans-serif',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  padding: '0.4rem 1.15rem',
                  borderRadius: '50px',
                  whiteSpace: 'nowrap',
                  flexShrink: 0,
                  transition: 'all 0.2s ease',
                  background: activeCategory === cat ? '#0D2447' : '#F8FAFC',
                  color: activeCategory === cat ? '#ffffff' : '#475569',
                  border: activeCategory === cat ? '1px solid #0D2447' : '1px solid #E2E8F0',
                  cursor: 'pointer',
                  boxShadow: activeCategory === cat ? '0 4px 12px rgba(13,36,71,0.15)' : 'none',
                }}
                className={activeCategory !== cat ? 'hover:bg-blue-50 hover:text-[#0D2447] hover:border-[#0D2447]/20' : ''}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── Blog Grid ── */}
      <section className="section-padding" style={{ background: '#F8FAFC' }}>
        <div className="container-site">

          {/* Results count */}
          <div style={{ marginBottom: '2rem' }}>
            <p style={{ fontFamily: '"DM Sans", sans-serif', fontSize: '0.85rem', color: '#64748B', fontWeight: 500 }}>
              {filtered.length === 0
                ? 'No articles found'
                : `Showing ${filtered.length} article${filtered.length !== 1 ? 's' : ''}${activeCategory !== 'All' ? ` in ${activeCategory}` : ''}`}
            </p>
          </div>

          {filtered.length === 0 ? (
            <div className="text-center py-20 bg-white rounded-3xl border border-[#E2E8F0]">
              <p
                style={{
                  fontFamily: '"Playfair Display", serif',
                  fontSize: '1.5rem',
                  color: '#64748B',
                  marginBottom: '1rem',
                }}
              >
                No articles match your search
              </p>
              <button
                onClick={() => { setSearchTerm(''); setActiveCategory('All'); }}
                className="btn-gold px-6"
                style={{ fontSize: '0.9rem' }}
              >
                Clear all filters
              </button>
            </div>
          ) : (
            <motion.div
              variants={staggerContainerVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.05 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filtered.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </motion.div>
          )}

          {/* ── Newsletter CTA ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative overflow-hidden rounded-3xl mt-20"
            style={{ background: 'linear-gradient(135deg, #0D2447 0%, #1A3A6B 100%)', padding: 'clamp(2.5rem, 5vw, 4.5rem)' }}
          >
            <div className="absolute inset-0 grid-overlay opacity-10 pointer-events-none" />
            <div
              className="absolute -top-20 -right-20 w-80 h-80 rounded-full pointer-events-none"
              style={{ background: 'radial-gradient(circle, rgba(232,169,32,0.15) 0%, transparent 70%)' }}
            />
            <div
              className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full pointer-events-none"
              style={{ background: 'radial-gradient(circle, rgba(232,169,32,0.1) 0%, transparent 70%)' }}
            />

            <div className="relative z-10 flex flex-col lg:flex-row items-center gap-8 lg:gap-14">
              <div className="lg:flex-1 text-center lg:text-left">
                <h3
                  style={{
                    fontFamily: '"Playfair Display", serif',
                    fontSize: 'clamp(1.6rem, 3.5vw, 2.25rem)',
                    fontWeight: 700,
                    color: '#ffffff',
                    marginBottom: '0.75rem',
                    lineHeight: 1.25,
                  }}
                >
                  Never Miss a Financial Update
                </h3>
                <p
                  style={{
                    fontFamily: '"DM Sans", sans-serif',
                    fontSize: '1rem',
                    color: 'rgba(255,255,255,0.7)',
                    lineHeight: 1.65,
                    maxWidth: '500px',
                    margin: '0 auto lg:mx-0',
                  }}
                >
                  Get expert financial tips delivered to your inbox every two weeks. Join 2,000+ informed subscribers today.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto" style={{ minWidth: '340px' }}>
                <input
                  type="email"
                  id="newsletter-email"
                  placeholder="Enter your email address"
                  className="flex-1 transition-all placeholder:text-white/40 focus:border-[#E8A920] focus:bg-white/10"
                  style={{
                    padding: '0.85rem 1.25rem',
                    borderRadius: '50px',
                    background: 'rgba(255,255,255,0.08)',
                    border: '1px solid rgba(255,255,255,0.2)',
                    color: '#ffffff',
                    fontFamily: '"DM Sans", sans-serif',
                    fontSize: '0.95rem',
                    outline: 'none',
                  }}
                />
                <button className="btn-gold" style={{ fontSize: '0.95rem', whiteSpace: 'nowrap' }}>
                  Subscribe
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Blog;
