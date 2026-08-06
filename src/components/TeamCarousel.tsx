'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Share2 } from 'lucide-react';

const teamMembers = [
  {
    name: 'Ethan Blackwood',
    role: 'CoFounder',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Samantha Carson',
    role: 'CoFounder',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Marcus Knight',
    role: 'Resources Consultant',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Sophia Rivers',
    role: 'Chief Consultant',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Gabriel North',
    role: 'Research Strategist',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Isabella Stone',
    role: 'Chief Consultant',
    image: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Alexander Steele',
    role: 'Product Manager',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Emilia Gray',
    role: 'Strategy Consultant',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80',
  },
];

export default function TeamCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeShare, setActiveShare] = useState<number | null>(null);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? teamMembers.length - 4 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= teamMembers.length - 4 ? 0 : prev + 1));
  };

  return (
    <section id="team" className="py-24 bg-[#eaeeed] text-[#39413e] relative border-t border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header & Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="text-3xl sm:text-5xl font-bold text-[#39413e]">
              Meet the <span className="font-serif-accent text-[#1d7a58]">Genius</span> team
            </h2>
            <p className="mt-3 text-[#75736b] max-w-xl text-base">
              Explore the brilliance and expertise that power Consultant W. Get to know our team of dedicated professionals committed to guiding your business toward success.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={prevSlide}
              className="p-3.5 rounded-full bg-white border border-black/10 text-[#1f4638] hover:bg-[#1f4638] hover:text-[#68e9ba] transition-all duration-300 shadow-md"
              aria-label="Previous Team Slide"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              className="p-3.5 rounded-full bg-white border border-black/10 text-[#1f4638] hover:bg-[#1f4638] hover:text-[#68e9ba] transition-all duration-300 shadow-md"
              aria-label="Next Team Slide"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.slice(currentIndex, currentIndex + 4).map((member, idx) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="group relative bg-white border border-black/5 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1"
            >
              {/* Member Image */}
              <div className="relative h-80 w-full overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-70" />

                {/* Share Button Icon */}
                <div className="absolute top-4 right-4">
                  <button
                    onClick={() => setActiveShare(activeShare === idx ? null : idx)}
                    className="p-2.5 rounded-full bg-white/90 text-[#1f4638] hover:bg-[#1f4638] hover:text-[#68e9ba] transition-colors shadow-md"
                  >
                    <Share2 className="w-4 h-4" />
                  </button>

                  {/* Social Dropdown */}
                  <AnimatePresence>
                    {activeShare === idx && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        className="absolute right-0 top-12 bg-white border border-black/10 rounded-2xl p-2 flex flex-col gap-2 shadow-xl z-20"
                      >
                        <a href="https://instagram.com" target="_blank" rel="noreferrer" className="p-1.5 text-[#39413e] hover:text-[#1d7a58]">
                          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noreferrer" className="p-1.5 text-[#39413e] hover:text-[#1d7a58]">
                          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                        </a>
                        <a href="https://facebook.com" target="_blank" rel="noreferrer" className="p-1.5 text-[#39413e] hover:text-[#1d7a58]">
                          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                        </a>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              {/* Member Details */}
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-[#39413e]">
                  {member.name}
                </h3>
                <p className="text-xs uppercase tracking-wider font-semibold text-[#75736b] mt-1">
                  {member.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
