'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    quote:
      '"Choosing Consultant W was one of the best decisions for our company. They are partners in success. Thanks for the outstanding support!"',
    name: 'Michael Davis',
    role: 'Lovely Customer',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80',
  },
  {
    quote:
      '"Consultant W helped us transform our strategy completely. Their deep understanding of market dynamics is second to none. Thrilled with the results!"',
    name: 'Sarah Johnson',
    role: 'Lovely Customer',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=100&q=80',
  },
  {
    quote:
      '"At Consultant W they understand the business from the first meeting. Their solutions deliver real results. A truly exceptional consulting firm!"',
    name: 'James Liu',
    role: 'Lovely Customer',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80',
  },
];

export default function TestimonialsSection() {
  const [active, setActive] = useState(0);

  const prev = () => setActive((i) => (i - 1 + testimonials.length) % testimonials.length);
  const next = () => setActive((i) => (i + 1) % testimonials.length);

  return (
    /* Outer: white/very-light page background */
    <section className="py-10 bg-white overflow-hidden px-4 sm:px-6 lg:px-8">
      {/* Inner rounded card — light mint gradient, exactly like reference */}
      <div
        className="rounded-[36px] py-16 px-6 sm:px-12 overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #eff7ee 0%, #dbeee4 50%, #c8f0e1 100%)' }}
      >
        {/* Scrolling label marquee */}
        <div className="overflow-hidden mb-8">
          <div className="flex animate-marquee whitespace-nowrap gap-8 text-[#1d7a58] opacity-25 text-xs font-semibold uppercase tracking-widest">
            {Array.from({ length: 10 }).map((_, i) => (
              <span key={i}>What They Say About Us &nbsp;&nbsp;•&nbsp;&nbsp;</span>
            ))}
          </div>
        </div>

        <div className="max-w-3xl mx-auto">
          <p className="text-center text-sm font-semibold text-[#1d7a58] uppercase tracking-widest mb-10">
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
              <p className="text-3xl sm:text-4xl font-serif-accent italic text-[#2c3531] leading-snug">
                {testimonials[active].quote}
              </p>
              <div className="mt-8 flex items-center justify-center gap-4">
                <div className="w-14 h-14 rounded-full overflow-hidden ring-2 ring-[#68e9ba]">
                  <img
                    src={testimonials[active].avatar}
                    alt={testimonials[active].name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-left">
                  <p className="font-semibold text-[#2c3531]">{testimonials[active].name}</p>
                  <p className="text-sm text-[#6b9980]">{testimonials[active].role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-6 mt-10">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-[#1d7a58] text-[#1d7a58] flex items-center justify-center hover:bg-[#1d7a58] hover:text-white transition-all duration-300 text-lg"
            >
              ‹
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === active ? 'bg-[#1d7a58] w-6' : 'bg-[#9ecfb8] w-2'
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-[#1d7a58] text-[#1d7a58] flex items-center justify-center hover:bg-[#1d7a58] hover:text-white transition-all duration-300 text-lg"
            >
              ›
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

