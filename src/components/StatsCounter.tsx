'use client';

import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { value: '20k+', label: 'Happy customers worldwide' },
  { value: '12+', label: 'Years of work experience' },
  { value: '50+', label: 'Creativity & passionate members' },
  { value: '200+', label: 'Successfully finished projects' },
];

export default function StatsCounter() {
  return (
    <section className="py-20 bg-[#eaeeed] text-[#39413e] relative border-t border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-8 rounded-3xl bg-white border border-black/5 text-center shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <h3 className="text-4xl sm:text-5xl font-extrabold text-[#1f4638] group-hover:text-[#1d7a58] transition-colors tracking-tight">
                {stat.value}
              </h3>
              <p className="mt-3 text-sm font-semibold text-[#75736b] max-w-[200px] mx-auto">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
