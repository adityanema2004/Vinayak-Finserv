import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, ArrowLeft } from 'lucide-react';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0A1628] flex items-center justify-center px-4 relative overflow-hidden">
      <div className="absolute inset-0 mesh-overlay" />
      <div className="absolute inset-0 grid-overlay opacity-20" />

      <motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 text-center max-w-lg"
      >
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="font-heading text-[#C9A84C] text-[9rem] font-bold leading-none mb-2 select-none"
        >
          404
        </motion.div>

        <h1 className="font-heading text-white text-3xl sm:text-4xl font-bold mb-4">
          Page Not Found
        </h1>
        <p className="font-body text-white/60 text-lg leading-relaxed mb-10">
          Looks like you've wandered off the financial path. Let us guide you back to where you need to be.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/" className="btn-gold font-body">
            <Home className="w-5 h-5" />
            Go to Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="btn-outline font-body flex items-center gap-2"
          >
            <ArrowLeft className="w-5 h-5" />
            Go Back
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default NotFound;
