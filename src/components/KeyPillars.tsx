'use client';

import React from 'react';
import { motion } from 'framer-motion';

const pillars = [
  {
    title: 'Taxation & GST Compliance',
    description:
      'Comprehensive direct & indirect tax planning, GST filing, tax audit defense, and proactive tax optimization strategies.',
  },
  {
    title: 'Audit & Statutory Assurance',
    description:
      'Rigorous statutory, internal, and tax audits designed to ensure complete regulatory compliance and transparent financial records.',
  },
  {
    title: 'Corporate Advisory & Virtual CFO',
    description:
      'Strategic financial planning, corporate restructuring, company incorporation, and dedicated Virtual CFO management for business growth.',
  },
];

export default function KeyPillars() {
  return (
    <section id="about" className="bg-white py-16 sm:py-20">
      {/* Section Title — full width centered */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#39413e] leading-snug"
        >
          <span className="font-serif-accent font-normal italic text-[#1d7a58]">Empowering Growth:</span>{' '}
          What We<br className="hidden sm:block" /> Offer At Rafa & Company
        </motion.h2>
      </div>

      {/* Two-column: tall image left, feature list right */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">

        {/* Left: Full-height rounded photo */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="rounded-3xl overflow-hidden shadow-md"
        >
          <img
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=80"
            alt="Chartered accountant financial analysis"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Right: Feature List */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="space-y-8 pt-2 flex flex-col justify-center"
        >
          {pillars.map((pillar, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.14 }}
              className="flex gap-4 items-start"
            >
              {/* Dark green filled circle with checkmark */}
              <div className="flex-shrink-0 w-9 h-9 rounded-full bg-[#1f4638] flex items-center justify-center mt-0.5 shadow-sm">
                <svg
                  className="w-4 h-4 text-[#68e9ba] fill-none stroke-current stroke-[2.5]"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-[#39413e]">{pillar.title}</h3>
                <p className="mt-1.5 text-[#75736b] text-sm sm:text-base leading-relaxed font-normal">{pillar.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

