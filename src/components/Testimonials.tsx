import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import type { Testimonial } from '../types';

const testimonials: Testimonial[] = [
  {
    id: 't1',
    name: 'Ramesh Verma',
    city: 'Raipur, Chhattisgarh',
    rating: 5,
    quote: 'Vinayak Finserv helped me start my SIP journey when I had no idea where to begin. Their guidance was clear, transparent, and genuinely in my best interest. My portfolio has grown consistently over 3 years.',
    initials: 'RV',
  },
  {
    id: 't2',
    name: 'Priya Sharma',
    city: 'Bilaspur, Chhattisgarh',
    rating: 5,
    quote: 'The best insurance advice I have ever received. The team compared over 10 plans for my family and helped us choose the right one without confusion. Very professional and completely transparent.',
    initials: 'PS',
  },
  {
    id: 't3',
    name: 'Suresh Gupta',
    city: 'Durg, Chhattisgarh',
    rating: 5,
    quote: 'Got my home loan processed within 10 days at a rate better than what two banks had quoted me directly. The team\'s network and negotiation skills are exceptional. Highly recommend.',
    initials: 'SG',
  },
  {
    id: 't4',
    name: 'Anita Patel',
    city: 'Indore, Madhya Pradesh',
    rating: 5,
    quote: 'After a recommendation from a colleague, I moved my investments to Vinayak Finserv. Within a year, their portfolio rebalancing improved my returns significantly. Excellent, thoughtful service.',
    initials: 'AP',
  },
  {
    id: 't5',
    name: 'Vikram Singh',
    city: 'Mumbai, Maharashtra',
    rating: 5,
    quote: 'Even from Mumbai, everything is handled online seamlessly. Their digital platform makes tracking investments effortless. A truly modern finserv firm with strong personal attention.',
    initials: 'VS',
  },
];

const Testimonials: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState<'left' | 'right'>('right');

  const goNext = useCallback(() => {
    setDirection('right');
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }, []);

  const goPrev = useCallback(() => {
    setDirection('left');
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    const id = setInterval(goNext, 5500);
    return () => clearInterval(id);
  }, [goNext]);

  const variants = {
    enter: (dir: 'left' | 'right') => ({ x: dir === 'right' ? 60 : -60, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: 'left' | 'right') => ({ x: dir === 'right' ? -60 : 60, opacity: 0 }),
  };

  const t = testimonials[current];

  return (
    <section id="testimonials" className="section-padding" style={{ background: '#F8F9FA' }}>
      <div className="container-site">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
          style={{ maxWidth: '520px', marginLeft: 'auto', marginRight: 'auto' }}
        >
          <span className="section-label">Client Stories</span>
          <h2 style={{
            fontFamily: '"Playfair Display", serif',
            fontSize: 'clamp(1.8rem, 4vw, 2.75rem)',
            fontWeight: 700,
            color: '#0A1628',
            lineHeight: 1.2,
            marginBottom: '1rem',
          }}>
            What Our Clients Say
          </h2>
          <p style={{ fontFamily: '"DM Sans", sans-serif', fontSize: '1rem', lineHeight: 1.7, color: '#6C757D' }}>
            Hear from the families and individuals we've helped build lasting financial security.
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="max-w-3xl mx-auto">
          <div className="relative overflow-hidden">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={t.id}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] }}
                className="rounded-2xl p-8 sm:p-10"
                style={{
                  background: '#ffffff',
                  border: '1px solid #F1F3F5',
                  boxShadow: '0 4px 32px rgba(10,22,40,0.07)',
                }}
              >
                {/* Stars */}
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} size={16} color="#C9A84C" fill="#C9A84C" />
                  ))}
                </div>

                {/* Quote */}
                <p style={{
                  fontFamily: '"DM Sans", sans-serif',
                  fontSize: 'clamp(0.95rem, 1.8vw, 1.05rem)',
                  lineHeight: 1.78,
                  color: '#343A40',
                  marginBottom: '2rem',
                  fontStyle: 'italic',
                }}>
                  "{t.quote}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3.5">
                  <div
                    className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ background: '#0A1628' }}
                  >
                    <span style={{
                      fontFamily: '"DM Sans", sans-serif',
                      fontWeight: 700,
                      fontSize: '0.8rem',
                      color: '#C9A84C',
                      letterSpacing: '0.05em',
                    }}>
                      {t.initials}
                    </span>
                  </div>
                  <div>
                    <p style={{
                      fontFamily: '"DM Sans", sans-serif',
                      fontWeight: 700,
                      fontSize: '0.95rem',
                      color: '#0A1628',
                      lineHeight: 1.2,
                    }}>
                      {t.name}
                    </p>
                    <p style={{ fontFamily: '"DM Sans", sans-serif', fontSize: '0.8rem', color: '#ADB5BD', marginTop: '0.1rem' }}>
                      {t.city}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between mt-7">
            <button
              onClick={goPrev}
              aria-label="Previous"
              className="w-10 h-10 rounded-full flex items-center justify-center border transition-all duration-200 hover:bg-[#0A1628] hover:border-[#0A1628] hover:text-white"
              style={{ background: '#ffffff', borderColor: '#E9ECEF', color: '#6C757D' }}
            >
              <ChevronLeft size={18} />
            </button>

            <div className="flex items-center gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => { setDirection(idx > current ? 'right' : 'left'); setCurrent(idx); }}
                  aria-label={`Go to ${idx + 1}`}
                  className="rounded-full transition-all duration-300"
                  style={{
                    width: idx === current ? '28px' : '8px',
                    height: '8px',
                    background: idx === current ? '#C9A84C' : '#E9ECEF',
                  }}
                />
              ))}
            </div>

            <button
              onClick={goNext}
              aria-label="Next"
              className="w-10 h-10 rounded-full flex items-center justify-center border transition-all duration-200 hover:bg-[#0A1628] hover:border-[#0A1628] hover:text-white"
              style={{ background: '#ffffff', borderColor: '#E9ECEF', color: '#6C757D' }}
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
