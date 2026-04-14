import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import emailjs from '@emailjs/browser';
import { EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, EMAILJS_PUBLIC_KEY } from '../config/emailjs';
import {
  MapPin, Phone, Mail, Clock, Send, CheckCircle2, AlertCircle, Loader2,
} from 'lucide-react';
import type { OfficeLocation } from '../types';
import { staggerContainerVariant, staggerItemVariant } from '../hooks/useScrollReveal';

const schema = z.object({
  fullName: z.string().min(2, 'Please enter your full name'),
  phone: z
    .string()
    .regex(/^[6-9]\d{9}$/, 'Please enter a valid 10-digit Indian mobile number'),
  email: z.string().email('Please enter a valid email address'),
  service: z.string().min(1, 'Please select a service'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type FormData = z.infer<typeof schema>;

const officeLocations: OfficeLocation[] = [
  {
    id: 'raipur',
    city: 'Raipur',
    state: 'Chhattisgarh',
    address: 'Civil Lines, Raipur, Chhattisgarh – 492 001',
    phone: '+91 98765 43210',
    email: 'raipur@vinayakfinserv.com',
    hours: 'Mon – Sat, 9:30 AM – 6:30 PM',
    isHeadquarters: true,
    mapUrl: 'https://maps.google.com/maps?q=Raipur,Chhattisgarh&output=embed',
  },
  {
    id: 'bhilai',
    city: 'Bhilai',
    state: 'Chhattisgarh',
    address: 'Nehru Nagar, Bhilai, Chhattisgarh – 490 020',
    phone: '+91 98765 43211',
    email: 'bhilai@vinayakfinserv.com',
    hours: 'Mon – Sat, 10:00 AM – 6:00 PM',
    isHeadquarters: false,
    mapUrl: 'https://maps.google.com/maps?q=Bhilai,Chhattisgarh&output=embed',
  },
  {
    id: 'bilaspur',
    city: 'Bilaspur',
    state: 'Chhattisgarh',
    address: 'Vyapar Vihar, Bilaspur, Chhattisgarh – 495 001',
    phone: '+91 98765 43212',
    email: 'bilaspur@vinayakfinserv.com',
    hours: 'Mon – Sat, 10:00 AM – 6:00 PM',
    isHeadquarters: false,
    mapUrl: 'https://maps.google.com/maps?q=Bilaspur,Chhattisgarh&output=embed',
  },
  {
    id: 'nagpur',
    city: 'Nagpur',
    state: 'Maharashtra',
    address: 'Dharampeth, Nagpur, Maharashtra – 440 010',
    phone: '+91 98765 43213',
    email: 'nagpur@vinayakfinserv.com',
    hours: 'Mon – Sat, 10:00 AM – 6:00 PM',
    isHeadquarters: false,
    mapUrl: 'https://maps.google.com/maps?q=Nagpur,Maharashtra&output=embed',
  },
  {
    id: 'indore',
    city: 'Indore',
    state: 'Madhya Pradesh',
    address: 'Vijay Nagar, Indore, Madhya Pradesh – 452 010',
    phone: '+91 98765 43214',
    email: 'indore@vinayakfinserv.com',
    hours: 'Mon – Sat, 10:00 AM – 6:00 PM',
    isHeadquarters: false,
    mapUrl: 'https://maps.google.com/maps?q=Indore,MadhyaPradesh&output=embed',
  },
  {
    id: 'mumbai',
    city: 'Mumbai',
    state: 'Maharashtra',
    address: 'Andheri West, Mumbai, Maharashtra – 400 053',
    phone: '+91 98765 43215',
    email: 'mumbai@vinayakfinserv.com',
    hours: 'Mon – Sat, 10:00 AM – 6:30 PM',
    isHeadquarters: false,
    mapUrl: 'https://maps.google.com/maps?q=Andheri,Mumbai,Maharashtra&output=embed',
  },
];

const serviceOptions = [
  'Commercial Vehicle Loans',
  'Life Insurance',
  'Health Insurance',
  'Home Loan',
  'Personal Loan',
  'Business Loan',
  'Financial Planning',
  'Other',
];

type ToastType = 'success' | 'error' | null;

const Contact: React.FC = () => {
  const [toastType, setToastType] = useState<ToastType>(null);
  const [selectedOffice, setSelectedOffice] = useState<OfficeLocation>(officeLocations[0]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: data.fullName,
          phone: data.phone,
          reply_to: data.email,
          service_interested: data.service,
          message: data.message,
        },
        EMAILJS_PUBLIC_KEY
      );
      setToastType('success');
      reset();
    } catch {
      setToastType('error');
    } finally {
      setTimeout(() => setToastType(null), 5000);
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact Us | Vinayak Finserv</title>
        <meta
          name="description"
          content="Get in touch with Vinayak Finserv. Multiple offices across India — Raipur (HQ), Bhilai, Bilaspur, Nagpur, Indore, and Mumbai."
        />
      </Helmet>

      {/* Page Hero */}
      <section
        className="relative overflow-hidden"
        style={{
          background: 'linear-gradient(150deg, #0D2447 0%, #1A3A6B 55%, #2563B0 100%)',
          paddingTop: '7.5rem',
          paddingBottom: '4.5rem',
        }}
      >
        <div className="absolute inset-0 mesh-overlay" />
        <div className="absolute inset-0 grid-overlay opacity-15" />
        <div className="container-site relative z-10 text-center">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="section-label"
          >
            Get In Touch
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
              marginBottom: '0.85rem',
            }}
          >
            Contact Us
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
            }}
          >
            6 offices across India. One team committed to your financial well-being.
          </motion.p>
        </div>
      </section>

      {/* Toast Notification */}
      {toastType && (
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20 }}
          className={`fixed top-24 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3 px-6 py-4 rounded-2xl shadow-2xl text-white font-body font-medium text-sm ${
            toastType === 'success' ? 'bg-green-600' : 'bg-red-600'
          }`}
        >
          {toastType === 'success' ? (
            <CheckCircle2 className="w-5 h-5" />
          ) : (
            <AlertCircle className="w-5 h-5" />
          )}
          {toastType === 'success'
            ? "Message sent! We'll get back to you within 24 hours."
            : 'Something went wrong. Please try calling us directly.'}
        </motion.div>
      )}

      {/* Contact Form + Map */}
      <section className="section-padding bg-gray-50">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="bg-white rounded-3xl p-8 shadow-[0_4px_40px_rgba(10,22,40,0.08)] border border-gray-100"
            >
              <h2 className="font-heading text-[#0D2447] text-2xl font-bold mb-2">
                Send Us a Message
              </h2>
              <p className="font-body text-gray-500 text-sm mb-8">
                Fill out the form below and our team will get back to you within 24 hours.
              </p>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
                {/* Full Name */}
                <div>
                  <label className="block font-body text-sm font-medium text-gray-700 mb-1.5">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    {...register('fullName')}
                    id="fullName"
                    type="text"
                    placeholder="Ramesh Verma"
                    className={`w-full px-4 py-3 rounded-xl border font-body text-sm text-gray-800 placeholder:text-gray-400 outline-none transition-all ${
                      errors.fullName
                        ? 'border-red-400 bg-red-50 focus:ring-2 focus:ring-red-300'
                        : 'border-gray-200 focus:border-[#E8A920] focus:ring-2 focus:ring-[#E8A920]/20'
                    }`}
                  />
                  {errors.fullName && (
                    <p className="mt-1 text-xs text-red-600 font-body">{errors.fullName.message}</p>
                  )}
                </div>

                {/* Phone + Email row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-body text-sm font-medium text-gray-700 mb-1.5">
                      Phone <span className="text-red-500">*</span>
                    </label>
                    <input
                      {...register('phone')}
                      id="phone"
                      type="tel"
                      placeholder="9876543210"
                      maxLength={10}
                      className={`w-full px-4 py-3 rounded-xl border font-body text-sm text-gray-800 placeholder:text-gray-400 outline-none transition-all ${
                        errors.phone
                          ? 'border-red-400 bg-red-50 focus:ring-2 focus:ring-red-300'
                          : 'border-gray-200 focus:border-[#E8A920] focus:ring-2 focus:ring-[#E8A920]/20'
                      }`}
                    />
                    {errors.phone && (
                      <p className="mt-1 text-xs text-red-600 font-body">{errors.phone.message}</p>
                    )}
                  </div>
                  <div>
                    <label className="block font-body text-sm font-medium text-gray-700 mb-1.5">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      {...register('email')}
                      id="email"
                      type="email"
                      placeholder="you@example.com"
                      className={`w-full px-4 py-3 rounded-xl border font-body text-sm text-gray-800 placeholder:text-gray-400 outline-none transition-all ${
                        errors.email
                          ? 'border-red-400 bg-red-50 focus:ring-2 focus:ring-red-300'
                          : 'border-gray-200 focus:border-[#E8A920] focus:ring-2 focus:ring-[#E8A920]/20'
                      }`}
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-red-600 font-body">{errors.email.message}</p>
                    )}
                  </div>
                </div>

                {/* Service dropdown */}
                <div>
                  <label className="block font-body text-sm font-medium text-gray-700 mb-1.5">
                    Service Interested In <span className="text-red-500">*</span>
                  </label>
                  <select
                    {...register('service')}
                    id="service"
                    className={`w-full px-4 py-3 rounded-xl border font-body text-sm text-gray-800 outline-none transition-all bg-white appearance-none ${
                      errors.service
                        ? 'border-red-400 bg-red-50 focus:ring-2 focus:ring-red-300'
                        : 'border-gray-200 focus:border-[#E8A920] focus:ring-2 focus:ring-[#E8A920]/20'
                    }`}
                    defaultValue=""
                  >
                    <option value="" disabled>Select a service…</option>
                    {serviceOptions.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                  {errors.service && (
                    <p className="mt-1 text-xs text-red-600 font-body">{errors.service.message}</p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label className="block font-body text-sm font-medium text-gray-700 mb-1.5">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    {...register('message')}
                    id="message"
                    rows={4}
                    placeholder="Tell us about your financial goals or questions…"
                    className={`w-full px-4 py-3 rounded-xl border font-body text-sm text-gray-800 placeholder:text-gray-400 outline-none transition-all resize-none ${
                      errors.message
                        ? 'border-red-400 bg-red-50 focus:ring-2 focus:ring-red-300'
                        : 'border-gray-200 focus:border-[#E8A920] focus:ring-2 focus:ring-[#E8A920]/20'
                    }`}
                  />
                  {errors.message && (
                    <p className="mt-1 text-xs text-red-600 font-body">{errors.message.message}</p>
                  )}
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  id="submit-contact"
                  disabled={isSubmitting}
                  className="btn-gold w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed font-body"
                >
                  {isSubmitting ? (
                    <><Loader2 className="w-5 h-5 animate-spin" /> Sending…</>
                  ) : (
                    <><Send className="w-5 h-5" /> Send Message</>
                  )}
                </button>
              </form>
            </motion.div>

            {/* Map + Address */}
            <motion.div
              initial={{ opacity: 0, x: 32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col gap-6"
            >
              {/* Map iframe */}
              <div className="rounded-3xl overflow-hidden shadow-[0_4px_40px_rgba(10,22,40,0.08)] border border-gray-100 h-72 lg:h-80">
                <iframe
                  src={selectedOffice.mapUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`Map of ${selectedOffice.city} office`}
                />
              </div>

              {/* Office Info */}
              <div className="bg-white rounded-3xl p-6 shadow-[0_4px_40px_rgba(10,22,40,0.08)] border border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-heading text-[#0D2447] text-lg font-bold">
                    {selectedOffice.city} {selectedOffice.isHeadquarters && '(HQ)'}
                  </h3>
                  <span className="font-body text-xs text-[#E8A920] border border-[#E8A920]/30 px-2 py-0.5 rounded-full">
                    {selectedOffice.state}
                  </span>
                </div>
                <ul className="space-y-3">
                  {[
                    { icon: MapPin, text: selectedOffice.address },
                    { icon: Phone, text: selectedOffice.phone, href: `tel:${selectedOffice.phone.replace(/\s/g, '')}` },
                    { icon: Mail, text: selectedOffice.email, href: `mailto:${selectedOffice.email}` },
                    { icon: Clock, text: selectedOffice.hours },
                  ].map(({ icon: Icon, text, href }) => (
                    <li key={text} className="flex items-start gap-3">
                      <Icon className="w-4 h-4 text-[#E8A920] mt-0.5 flex-shrink-0" />
                      {href ? (
                        <a href={href} className="font-body text-sm text-gray-600 hover:text-[#0D2447] transition-colors">
                          {text}
                        </a>
                      ) : (
                        <span className="font-body text-sm text-gray-600">{text}</span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* All Offices */}
      <section className="section-padding bg-white">
        <div className="container-site">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="inline-block font-body text-[#E8A920] font-semibold text-sm tracking-widest uppercase mb-3">
              Our Network
            </span>
            <h2 className="font-heading text-[#0D2447] text-3xl sm:text-4xl font-bold">
              Offices Across India
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainerVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {officeLocations.map((office) => (
              <motion.button
                key={office.id}
                variants={staggerItemVariant}
                onClick={() => {
                  setSelectedOffice(office);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`group text-left w-full p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-1 ${
                  selectedOffice.id === office.id
                    ? 'bg-[#0D2447] border-[#0D2447] shadow-[0_8px_40px_rgba(13,36,71,0.2)]'
                    : 'bg-gray-50 border-gray-100 hover:bg-white hover:border-[#E8A920]/30 hover:shadow-[0_8px_32px_rgba(13,36,71,0.08)]'
                }`}
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className={`font-heading font-semibold text-lg mb-0.5 ${selectedOffice.id === office.id ? 'text-[#E8A920]' : 'text-[#0D2447]'}`}>
                      {office.city}
                      {office.isHeadquarters && (
                        <span className="ml-2 text-xs font-body font-medium text-[#E8A920] bg-[#E8A920]/10 px-2 py-0.5 rounded-full">
                          HQ
                        </span>
                      )}
                    </h3>
                    <span className={`font-body text-xs ${selectedOffice.id === office.id ? 'text-white/50' : 'text-gray-400'}`}>
                      {office.state}
                    </span>
                  </div>
                  <MapPin className={`w-5 h-5 flex-shrink-0 mt-0.5 ${selectedOffice.id === office.id ? 'text-[#E8A920]' : 'text-gray-400 group-hover:text-[#E8A920]'} transition-colors`} />
                </div>
                <p className={`font-body text-sm mb-3 leading-relaxed ${selectedOffice.id === office.id ? 'text-white/70' : 'text-gray-600'}`}>
                  {office.address}
                </p>
                <a
                  href={`tel:${office.phone.replace(/\s/g, '')}`}
                  onClick={(e) => e.stopPropagation()}
                  className={`font-body text-sm font-medium flex items-center gap-1.5 ${selectedOffice.id === office.id ? 'text-[#E8A920]' : 'text-[#E8A920]'} hover:underline`}
                >
                  <Phone className="w-3.5 h-3.5" />
                  {office.phone}
                </a>
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Contact;
