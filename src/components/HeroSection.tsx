'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

// Only 2 hero images
const heroSlides = [
  {
    src: 'https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?auto=format&fit=crop&w=2000&q=80',
    alt: 'Business team consulting session',
  },
  {
    src: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=2000&q=80',
    alt: 'Professional business meeting',
  },
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

      {/* Background images: prev fades out, current fades in */}
      {heroSlides.map((slide, idx) => (
        <motion.div
          key={idx}
          initial={false}
          animate={{ opacity: idx === current ? 1 : 0 }}
          transition={{ duration: 1.2, ease: 'easeInOut' }}
          className="absolute inset-0 z-0"
          style={{ pointerEvents: 'none' }}
        >
          <img
            src={slide.src}
            alt={slide.alt}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#1f4638]/65" />
        </motion.div>
      ))}

      {/* Centered Text Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-5xl sm:text-7xl font-bold leading-tight tracking-tight"
        >
          <span className="font-serif-accent italic text-[#68e9ba]">Your Business,</span>{' '}
          Our<br />Expertise
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="mt-6 text-lg sm:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed"
        >
          At Consultant W, we embrace innovation as the driving force behind every solution.
          Our commitment to staying ahead of industry trends ensures that your business.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
          className="mt-10 flex items-center justify-center gap-4 flex-wrap"
        >
          <Link
            href="#services"
            className="px-8 py-4 rounded-full bg-white text-[#39413e] font-bold text-sm hover:bg-gray-100 transition-all duration-300 hover:-translate-y-0.5 shadow-lg"
          >
            Our Services
          </Link>
          <Link
            href="#pricing"
            className="px-8 py-4 rounded-full border-2 border-white text-white font-bold text-sm hover:bg-white hover:text-[#1f4638] transition-all duration-300 hover:-translate-y-0.5"
          >
            Our Pricing
          </Link>
        </motion.div>


      </div>

      {/* Bottom scrolling ticker */}
      <div className="absolute bottom-0 left-0 right-0 z-10 bg-black/30 py-3 overflow-hidden">
        <div className="animate-marquee whitespace-nowrap text-white/80 text-xs font-bold uppercase tracking-widest">
          {Array.from({ length: 12 }).map((_, i) => (
            <span key={i} className="mr-6">
              • THE BEST TEAM OF CONSULTANTS
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
