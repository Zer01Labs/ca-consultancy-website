'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

const locations = [
  {
    city: 'London',
    address: '14 Tottenham Road, London, England',
    phone: '+1 212 425 8617',
    email: 'hello@consultant_w.com',
  },
  {
    city: 'New York',
    address: '350 Fifth Avenue, Suite 4400, New York',
    phone: '+1 917 632 4891',
    email: 'nyc@consultant_w.com',
  },
  {
    city: 'Dubai',
    address: 'DIFC Gate Building, Level 15, Dubai',
    phone: '+971 4 332 8900',
    email: 'dubai@consultant_w.com',
  },
];

export default function ContactSection() {
  const [locationIdx, setLocationIdx] = useState(0);
  const loc = locations[locationIdx];

  return (
    <section id="contact" className="py-20 bg-[#eaeeed]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Dark green rounded card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#1f4638] rounded-3xl p-10 sm:p-14 grid grid-cols-1 lg:grid-cols-2 gap-12"
        >
          {/* Left: title + location */}
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold text-white leading-snug">
              <span className="font-serif-accent italic text-[#68e9ba]">Contact Consultant W</span>{' '}
              For Strategic Insights
            </h2>
            <p className="mt-5 text-[#9ecfb8] text-base leading-relaxed">
              Your journey to strategic excellence begins here. Contact us to tap into a wealth of
              consulting expertise and take your business to new heights.
            </p>

            <div className="mt-8 border-t border-[#2e5f4a] pt-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-white text-xl font-bold">{loc.city}</h3>
                <div className="flex gap-2">
                  <button
                    onClick={() => setLocationIdx((i) => (i - 1 + locations.length) % locations.length)}
                    className="w-9 h-9 rounded-full border border-[#4a7d68] flex items-center justify-center text-white hover:bg-[#2e5f4a] transition-colors"
                  >
                    ‹
                  </button>
                  <button
                    onClick={() => setLocationIdx((i) => (i + 1) % locations.length)}
                    className="w-9 h-9 rounded-full border border-[#4a7d68] flex items-center justify-center text-white hover:bg-[#2e5f4a] transition-colors"
                  >
                    ›
                  </button>
                </div>
              </div>
              <div className="space-y-3 text-[#9ecfb8] text-sm">
                <p className="flex items-start gap-2">
                  <svg className="w-4 h-4 mt-0.5 text-[#68e9ba] flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                  {loc.address}
                </p>
                <p className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-[#68e9ba] flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                  </svg>
                  {loc.phone}
                </p>
                <p className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-[#68e9ba] flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                  {loc.email}
                </p>
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Your name"
              className="w-full bg-transparent border border-[#4a7d68] rounded-full px-6 py-4 text-white placeholder-[#6b9980] focus:outline-none focus:border-[#68e9ba] transition-colors text-sm"
            />
            <input
              type="email"
              placeholder="Your email"
              className="w-full bg-transparent border border-[#4a7d68] rounded-full px-6 py-4 text-white placeholder-[#6b9980] focus:outline-none focus:border-[#68e9ba] transition-colors text-sm"
            />
            <textarea
              placeholder="Your text"
              rows={5}
              className="w-full bg-transparent border border-[#4a7d68] rounded-2xl px-6 py-4 text-white placeholder-[#6b9980] focus:outline-none focus:border-[#68e9ba] transition-colors text-sm resize-none"
            />
            <button className="w-full py-4 rounded-full bg-white text-[#39413e] font-bold text-sm hover:bg-gray-100 transition-all duration-300 hover:-translate-y-0.5 shadow-md">
              Let's Get Started
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
