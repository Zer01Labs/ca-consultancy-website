'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

// Hero background images highlighting financial consulting and accounting team
const heroSlides = [
  {
    src: 'https://cdn.prod.website-files.com/656363843a32e4fa57eb52d1/6564b81bff024cc065c8db6a_Banner%20Blog%205.jpg',
    alt: 'Financial Advisory & Accounting Consultancy',
  },
  {
    src: 'https://cdn.prod.website-files.com/656363843a32e4fa57eb52d1/6564b89e9d4d03f01b546641_Banner%20Blog%206.jpg',
    alt: 'Corporate Tax & Audit Strategy Session',
  },
  {
    src: 'https://cdn.prod.website-files.com/656363843a32e4fa57eb52d1/6564b7076c9db9df676655da_Banner%20Blog%204.jpg',
    alt: 'Chartered Accounting & Business Governance',
  },
];

const marqueeItems = [
  'CHARTERED ACCOUNTING',
  'STATUTORY & INTERNAL AUDIT',
  'DIRECT & INDIRECT TAXATION',
  'GST COMPLIANCE',
  'VIRTUAL CFO ADVISORY',
  'BUSINESS INCORPORATION & GOVERNANCE',
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  // Auto-advance every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    // No top padding — hero is truly full-screen, navbar floats over it
    <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden">

      {/* Background images with ultra-smooth crossfade and slow zoom effect */}
      {heroSlides.map((slide, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{
            opacity: idx === current ? 1 : 0,
            scale: idx === current ? 1 : 1.08,
          }}
          transition={{
            opacity: { duration: 1.5, ease: 'easeInOut' },
            scale: { duration: 6, ease: 'easeOut' },
          }}
          className="absolute inset-0 z-0"
          style={{ pointerEvents: 'none' }}
        >
          <img
            src={slide.src}
            alt={slide.alt}
            className="w-full h-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              backgroundColor: '#1f3e324d',
              backgroundImage: 'linear-gradient(#ffffff80, #0000 22%, #1f4638bf 85%)',
            }}
          />
        </motion.div>
      ))}

      {/* Centered Text Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="inline-block mb-3 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-normal tracking-wider uppercase text-[#68e9ba]"
        >
          Chartered Accountants & Financial Consultants
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-normal leading-tight tracking-tight text-white/95"
        >
          <span className="font-serif-accent font-normal italic text-[#68e9ba]">Financial Clarity,</span>{' '}
          Strategic<br />Growth & Assurance
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
          className="mt-4 text-base sm:text-lg text-gray-200/90 max-w-xl mx-auto leading-relaxed font-light"
        >
          Partner with top Chartered Accountants for comprehensive tax planning, auditing, corporate compliance, and strategic financial advisory tailored to grow your business securely.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
          className="mt-6 flex items-center justify-center gap-3.5 flex-wrap"
        >
          <Link
            href="#services"
            className="px-6 py-3 rounded-full bg-white text-[#39413e] font-semibold text-xs sm:text-sm hover:bg-gray-100 transition-all duration-300 hover:-translate-y-0.5 shadow-lg"
          >
            Our Services
          </Link>
          <Link
            href="#contact"
            className="px-6 py-3 rounded-full border border-white/80 text-white font-semibold text-xs sm:text-sm hover:bg-white hover:text-[#1f4638] transition-all duration-300 hover:-translate-y-0.5"
          >
            Contact us
          </Link>
        </motion.div>
      </div>

      {/* Slide Navigation Dots */}
      <div className="absolute bottom-16 z-20 flex items-center justify-center gap-2">
        {heroSlides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className={`h-2 rounded-full transition-all duration-500 ${
              idx === current ? 'w-8 bg-[#68e9ba]' : 'w-2 bg-white/40 hover:bg-white/70'
            }`}
          />
        ))}
      </div>

      {/* Bottom scrolling ticker */}
      <div className="absolute bottom-0 left-0 right-0 z-10 bg-black/40 backdrop-blur-sm py-3 overflow-hidden border-t border-white/10">
        <div className="animate-marquee whitespace-nowrap text-white/90 text-xs font-bold uppercase tracking-widest flex items-center">
          {Array.from({ length: 4 }).flatMap(() => marqueeItems).map((item, i) => (
            <span key={i} className="inline-flex items-center mr-8">
              <span className="w-1.5 h-1.5 rounded-full bg-[#68e9ba] mr-3"></span>
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

