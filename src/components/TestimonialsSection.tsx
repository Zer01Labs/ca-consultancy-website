'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    quote:
      '"Choosing Consultant W was one of the best decisions for our company. They are partners in success. Thanks for the outstanding support!"',
    name: 'Michael Davis',
    role: 'CEO, TechVenture Inc.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80',
  },
  {
    quote:
      '"Consultant W helped us transform our strategy completely. Their deep understanding of market dynamics is second to none. Thrilled with the results!"',
    name: 'Sarah Johnson',
    role: 'COO, NexaGlobal',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=100&q=80',
  },
  {
    quote:
      '"At Consultant W they understand the business from the first meeting. Their solutions deliver real results. A truly exceptional consulting firm!"',
    name: 'James Liu',
    role: 'Founder, BrightScale',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80',
  },
];

export default function TestimonialsSection() {
  const [active, setActive] = useState(0);

  const prev = () => setActive((i) => (i - 1 + testimonials.length) % testimonials.length);
  const next = () => setActive((i) => (i + 1) % testimonials.length);

  return (
    <section className="bg-[#d5ede4] py-20 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Scrolling label marquee */}
        <div className="overflow-hidden mb-10">
          <div className="flex animate-marquee whitespace-nowrap gap-8 text-[#1d7a58] opacity-30 text-sm font-semibold uppercase tracking-widest">
            {Array.from({ length: 8 }).map((_, i) => (
              <span key={i}>What They Say About Us &nbsp;&nbsp;•&nbsp;&nbsp;</span>
            ))}
          </div>
        </div>

        <p className="text-center text-sm font-semibold text-[#1d7a58] uppercase tracking-widest mb-8">
          What They Say About Us
        </p>

        {/* Testimonial quote */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="text-center"
          >
            <p className="text-3xl sm:text-4xl font-serif-accent italic text-[#39413e] leading-snug max-w-3xl mx-auto">
              {testimonials[active].quote}
            </p>
            <div className="mt-8 flex items-center justify-center gap-4">
              <img
                src={testimonials[active].avatar}
                alt={testimonials[active].name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div className="text-left">
                <p className="font-bold text-[#39413e]">{testimonials[active].name}</p>
                <p className="text-sm text-[#75736b]">{testimonials[active].role}</p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation dots */}
        <div className="flex items-center justify-center gap-6 mt-10">
          <button
            onClick={prev}
            className="w-10 h-10 rounded-full border border-[#1d7a58] text-[#1d7a58] flex items-center justify-center hover:bg-[#1d7a58] hover:text-white transition-all duration-300"
          >
            ‹
          </button>
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i === active ? 'bg-[#1d7a58] w-6' : 'bg-[#9ecfb8]'
                }`}
              />
            ))}
          </div>
          <button
            onClick={next}
            className="w-10 h-10 rounded-full border border-[#1d7a58] text-[#1d7a58] flex items-center justify-center hover:bg-[#1d7a58] hover:text-white transition-all duration-300"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
}
