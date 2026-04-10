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
  color: string;       // accent colour for card top bar
  bgColor: string;     // thumbnail bg gradient
}

const posts: Post[] = [
  {
    id: 'sip-in-20s',
    title: '5 Reasons to Start a SIP in Your 20s',
    date: 'March 15, 2024',
    excerpt:
      'The power of compounding is most effective when you start early. Discover why beginning your SIP journey in your 20s can build life-changing wealth by the time you turn 40.',
    category: 'Mutual Funds',
    readTime: '5 min read',
    color: '#3B82F6',
    bgColor: 'linear-gradient(135deg, #1D4ED8 0%, #4338CA 100%)',
  },
  {
    id: 'term-vs-whole',
    title: "Term vs Whole Life Insurance — What's Right for You?",
    date: 'February 28, 2024',
    excerpt:
      'Choosing between term and whole life insurance is one of the most important financial decisions. We break down costs, benefits, and which one suits different life stages.',
    category: 'Insurance',
    readTime: '7 min read',
    color: '#10B981',
    bgColor: 'linear-gradient(135deg, #059669 0%, #0D9488 100%)',
  },
  {
    id: 'tax-80c',
    title: 'How to Save Tax Under Section 80C in 2024',
    date: 'February 10, 2024',
    excerpt:
      'Section 80C allows you to claim deductions up to \u20b91.5 lakh per year. Here\'s a comprehensive guide to all eligible investments and expenses to maximise your tax saving.',
    category: 'Tax Planning',
    readTime: '8 min read',
    color: '#8B5CF6',
    bgColor: 'linear-gradient(135deg, #7C3AED 0%, #6D28D9 100%)',
  },
  {
    id: 'home-loan-cg',
    title: 'Home Loan Tips for First-Time Buyers in Chhattisgarh',
    date: 'January 22, 2024',
    excerpt:
      "Buying your first home is one of life's biggest milestones. This guide covers eligibility, documentation, the best lenders in CG, and how to negotiate the lowest possible interest rate.",
    category: 'Loans',
    readTime: '6 min read',
    color: '#F97316',
    bgColor: 'linear-gradient(135deg, #EA580C 0%, #DC2626 100%)',
  },
  {
    id: 'nav-guide',
    title: 'Understanding Mutual Fund NAV — A Beginner\'s Guide',
    date: 'January 5, 2024',
    excerpt:
      "NAV (Net Asset Value) is the price of one unit of a mutual fund. Many new investors misunderstand it. This guide explains NAV, how it's calculated, and why it shouldn't be your only deciding factor.",
    category: 'Mutual Funds',
    readTime: '4 min read',
    color: '#06B6D4',
    bgColor: 'linear-gradient(135deg, #0891B2 0%, #2563EB 100%)',
  },
  {
    id: 'fd-vs-mf',
    title: 'Fixed Deposit vs Mutual Fund — Where Should You Invest?',
    date: 'December 18, 2023',
    excerpt:
      'Both FDs and mutual funds have their place in a smart portfolio. We compare returns, risk, liquidity, and tax treatment to help you decide what\'s right for your financial goals.',
    category: 'Investing',
    readTime: '6 min read',
    color: '#C9A84C',
    bgColor: 'linear-gradient(135deg, #B45309 0%, #92400E 100%)',
  },
];

const categories = ['All', ...Array.from(new Set(posts.map((p) => p.category)))];

/* ─── Category badge colours ─────────────────────────────────────────────── */
const badgeStyle: Record<string, { bg: string; text: string; border: string }> = {
  'Mutual Funds': { bg: 'rgba(59,130,246,0.1)',  text: '#2563EB', border: 'rgba(59,130,246,0.2)'  },
  Insurance:      { bg: 'rgba(16,185,129,0.1)',  text: '#059669', border: 'rgba(16,185,129,0.2)'  },
  'Tax Planning': { bg: 'rgba(139,92,246,0.1)',  text: '#7C3AED', border: 'rgba(139,92,246,0.2)'  },
  Loans:          { bg: 'rgba(249,115,22,0.1)',  text: '#EA580C', border: 'rgba(249,115,22,0.2)'  },
  Investing:      { bg: 'rgba(201,168,76,0.12)', text: '#92400E', border: 'rgba(201,168,76,0.25)' },
};

/* ─── Blog card ──────────────────────────────────────────────────────────── */
const BlogCard: React.FC<{ post: Post }> = ({ post }) => {
  const badge = badgeStyle[post.category] ?? { bg: '#F1F3F5', text: '#495057', border: '#E9ECEF' };

  return (
    <motion.article
      variants={staggerItemVariant}
      className="group flex flex-col rounded-2xl overflow-hidden bg-white"
      style={{
        border: '1px solid #EAECEF',
        boxShadow: '0 1px 12px rgba(10,22,40,0.05)',
        transition: 'transform 0.28s ease, box-shadow 0.28s ease',
      }}
      whileHover={{ y: -6, boxShadow: '0 16px 48px rgba(10,22,40,0.11)' }}
    >
      {/* Thumbnail */}
      <div
        className="relative h-44 flex items-center justify-center overflow-hidden flex-shrink-0"
        style={{ background: post.bgColor }}
      >
        {/* Grid texture overlay */}
        <div className="absolute inset-0 grid-overlay opacity-20" />
        {/* Large letter */}
        <span
          className="select-none relative z-0"
          style={{
            fontFamily: '"Playfair Display", serif',
            fontSize: '6rem',
            fontWeight: 700,
            color: 'rgba(255,255,255,0.15)',
            lineHeight: 1,
          }}
        >
          {post.title.charAt(0)}
        </span>
        {/* Category pill on thumbnail */}
        <div className="absolute top-3 left-3">
          <span
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-white"
            style={{
              fontFamily: '"DM Sans", sans-serif',
              fontSize: '0.72rem',
              fontWeight: 600,
              letterSpacing: '0.03em',
              background: 'rgba(0,0,0,0.3)',
              backdropFilter: 'blur(6px)',
              WebkitBackdropFilter: 'blur(6px)',
              border: '1px solid rgba(255,255,255,0.2)',
            }}
          >
            <BookOpen size={10} />
            {post.category}
          </span>
        </div>
        {/* Read time pill */}
        <div className="absolute top-3 right-3">
          <span
            style={{
              fontFamily: '"DM Sans", sans-serif',
              fontSize: '0.7rem',
              fontWeight: 500,
              color: 'rgba(255,255,255,0.8)',
              background: 'rgba(0,0,0,0.3)',
              backdropFilter: 'blur(6px)',
              WebkitBackdropFilter: 'blur(6px)',
              border: '1px solid rgba(255,255,255,0.15)',
              borderRadius: '50px',
              padding: '0.22rem 0.6rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.25rem',
            }}
          >
            <Clock size={9} />
            {post.readTime}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5">
        {/* Category badge */}
        <span
          className="inline-flex items-center self-start mb-3 px-2.5 py-0.5 rounded-full"
          style={{
            fontFamily: '"DM Sans", sans-serif',
            fontSize: '0.7rem',
            fontWeight: 600,
            background: badge.bg,
            color: badge.text,
            border: `1px solid ${badge.border}`,
          }}
        >
          {post.category}
        </span>

        {/* Title */}
        <h2
          className="group-hover:text-[#C9A84C] transition-colors duration-200 line-clamp-2 mb-2.5 flex-0"
          style={{
            fontFamily: '"Playfair Display", serif',
            fontSize: '1.05rem',
            fontWeight: 700,
            color: '#0A1628',
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
            fontSize: '0.845rem',
            lineHeight: 1.7,
            color: '#6C757D',
            marginBottom: '1.1rem',
          }}
        >
          {post.excerpt}
        </p>

        {/* Footer */}
        <div
          className="flex items-center justify-between"
          style={{ paddingTop: '0.85rem', borderTop: '1px solid #F1F3F5' }}
        >
          <div className="flex items-center gap-3">
            <span
              className="flex items-center gap-1.5"
              style={{ fontFamily: '"DM Sans", sans-serif', fontSize: '0.75rem', color: '#ADB5BD' }}
            >
              <Calendar size={12} />
              {post.date}
            </span>
          </div>
          <button
            className="flex items-center gap-1 group/link transition-colors"
            style={{ fontFamily: '"DM Sans", sans-serif', fontSize: '0.78rem', fontWeight: 600, color: post.color }}
          >
            Read More
            <ArrowRight size={13} className="group-hover/link:translate-x-1 transition-transform duration-200" />
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
          content="Financial insights, tips, and guides from Vinayak Finserv's certified advisors. Learn about SIP, insurance, tax planning, home loans, and more."
        />
      </Helmet>

      {/* ── Hero ── */}
      <section
        className="relative overflow-hidden"
        style={{
          background: 'linear-gradient(160deg, #06101E 0%, #0A1628 100%)',
          paddingTop: '7.5rem',
          paddingBottom: '5rem',
        }}
      >
        <div className="absolute inset-0 mesh-overlay pointer-events-none" />
        <div className="absolute inset-0 grid-overlay opacity-15 pointer-events-none" />

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
              color: 'rgba(255,255,255,0.6)',
              lineHeight: 1.7,
              maxWidth: '560px',
              margin: '0 auto 2rem',
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
            style={{ maxWidth: '420px' }}
          >
            <Search
              size={16}
              style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'rgba(255,255,255,0.35)' }}
            />
            <input
              type="search"
              id="blog-search"
              placeholder="Search articles…"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                width: '100%',
                paddingLeft: '2.75rem',
                paddingRight: '1.25rem',
                paddingTop: '0.75rem',
                paddingBottom: '0.75rem',
                borderRadius: '50px',
                background: 'rgba(255,255,255,0.08)',
                border: '1px solid rgba(255,255,255,0.18)',
                color: '#ffffff',
                fontFamily: '"DM Sans", sans-serif',
                fontSize: '0.875rem',
                outline: 'none',
              }}
              className="placeholder:text-white/35 focus:border-[#C9A84C]/60 focus:bg-white/12 transition-all"
            />
          </motion.div>
        </div>
      </section>

      {/* ── Category Filter Bar ── */}
      <div style={{ background: '#ffffff', borderBottom: '1px solid #F1F3F5', position: 'sticky', top: '68px', zIndex: 30 }}>
        <div className="container-site">
          <div className="flex items-center gap-2 overflow-x-auto py-3 no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  fontFamily: '"DM Sans", sans-serif',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  padding: '0.35rem 1rem',
                  borderRadius: '50px',
                  whiteSpace: 'nowrap',
                  flexShrink: 0,
                  transition: 'all 0.2s ease',
                  background: activeCategory === cat ? '#0A1628' : '#F8F9FA',
                  color: activeCategory === cat ? '#ffffff' : '#6C757D',
                  border: activeCategory === cat ? 'none' : '1px solid #EAECEF',
                  cursor: 'pointer',
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── Blog Grid ── */}
      <section className="section-padding" style={{ background: '#F8F9FA' }}>
        <div className="container-site">

          {/* Results count */}
          <div style={{ marginBottom: '1.75rem' }}>
            <p style={{ fontFamily: '"DM Sans", sans-serif', fontSize: '0.82rem', color: '#ADB5BD' }}>
              {filtered.length === 0
                ? 'No articles found'
                : `Showing ${filtered.length} article${filtered.length !== 1 ? 's' : ''}${activeCategory !== 'All' ? ` in ${activeCategory}` : ''}`}
            </p>
          </div>

          {filtered.length === 0 ? (
            <div className="text-center py-24">
              <p
                style={{
                  fontFamily: '"Playfair Display", serif',
                  fontSize: '1.5rem',
                  color: '#ADB5BD',
                  marginBottom: '0.5rem',
                }}
              >
                No articles match your search
              </p>
              <button
                onClick={() => { setSearchTerm(''); setActiveCategory('All'); }}
                className="btn-gold mt-4"
                style={{ fontSize: '0.82rem' }}
              >
                Clear filters
              </button>
            </div>
          ) : (
            <motion.div
              variants={staggerContainerVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.05 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
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
            className="relative overflow-hidden rounded-2xl mt-16"
            style={{ background: 'linear-gradient(135deg, #0A1628 0%, #0E1F3A 100%)', padding: 'clamp(2rem, 5vw, 3.5rem)' }}
          >
            <div className="absolute inset-0 grid-overlay opacity-15 pointer-events-none" />
            <div
              className="absolute -top-20 -right-20 w-64 h-64 rounded-full pointer-events-none"
              style={{ background: 'radial-gradient(circle, rgba(201,168,76,0.12) 0%, transparent 70%)' }}
            />

            <div className="relative z-10 flex flex-col lg:flex-row items-center gap-8">
              <div className="lg:flex-1 text-center lg:text-left">
                <h3
                  style={{
                    fontFamily: '"Playfair Display", serif',
                    fontSize: 'clamp(1.4rem, 3vw, 2rem)',
                    fontWeight: 700,
                    color: '#ffffff',
                    marginBottom: '0.6rem',
                    lineHeight: 1.25,
                  }}
                >
                  Never Miss a Financial Insight
                </h3>
                <p
                  style={{
                    fontFamily: '"DM Sans", sans-serif',
                    fontSize: '0.95rem',
                    color: 'rgba(255,255,255,0.55)',
                    lineHeight: 1.65,
                    maxWidth: '480px',
                  }}
                >
                  Get expert financial tips delivered to your inbox every two weeks. Join 2,000+ subscribers.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-2.5 w-full lg:w-auto" style={{ minWidth: '320px' }}>
                <input
                  type="email"
                  id="newsletter-email"
                  placeholder="your@email.com"
                  className="flex-1 transition-all placeholder:text-white/35 focus:border-[#C9A84C]/60"
                  style={{
                    padding: '0.7rem 1.1rem',
                    borderRadius: '50px',
                    background: 'rgba(255,255,255,0.08)',
                    border: '1px solid rgba(255,255,255,0.16)',
                    color: '#ffffff',
                    fontFamily: '"DM Sans", sans-serif',
                    fontSize: '0.875rem',
                    outline: 'none',
                  }}
                />
                <button className="btn-gold" style={{ fontSize: '0.85rem', whiteSpace: 'nowrap' }}>
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
