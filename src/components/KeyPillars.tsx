'use client';

import React from 'react';
import { motion } from 'framer-motion';

const pillars = [
  {
    title: 'Strategic Consulting',
    description:
      'Tailored solutions and guidance for strategic planning, business development, and overall organizational effectiveness.',
  },
  {
    title: 'Innovation Advisory',
    description:
      'Services focused on fostering innovation, integrating cutting-edge technologies, and ensuring clients stay ahead in dynamic market.',
  },
  {
    title: 'Operational Excellence',
    description:
      'Consultancy offerings geared towards optimizing business processes, enhancing efficiency, and sustained growth.',
  },
];

export default function KeyPillars() {
  return (
    <section id="about" className="bg-white py-24">
      {/* Section Title — full width centered, large */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#39413e] leading-snug"
        >
          <span className="font-serif-accent italic text-[#1d7a58]">Empowering Success:</span>{' '}
          What We<br className="hidden sm:block" /> Offer At Consultant W
        </motion.h2>
      </div>

      {/* Two-column: tall image left, feature list right */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">

        {/* Left: Full-height rounded photo */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="rounded-3xl overflow-hidden"
        >
          <img
            src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=900&q=80"
            alt="Team collaboration"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Right: Feature List */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="space-y-10 pt-2"
        >
          {pillars.map((pillar, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.14 }}
              className="flex gap-5 items-start"
            >
              {/* Dark green filled circle with checkmark */}
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#1f4638] flex items-center justify-center mt-0.5">
                <svg
                  className="w-5 h-5 text-[#68e9ba] fill-none stroke-current stroke-[2.5]"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#39413e]">{pillar.title}</h3>
                <p className="mt-2 text-[#75736b] text-base leading-relaxed">{pillar.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
