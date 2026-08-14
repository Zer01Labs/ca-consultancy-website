'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Share2 } from 'lucide-react';

const teamMembers = [
  {
    name: 'Samantha Carson, FCA',
    role: 'Managing Partner & Senior CA',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Marcus Knight, CA',
    role: 'Head of Tax & GST Advisory',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Sophia Rivers, FCA',
    role: 'Statutory Audit Partner',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Isabella Stone, CA',
    role: 'Corporate Law & Legal Specialist',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Gabriel North, CFA',
    role: 'Virtual CFO Advisory Lead',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Olivia Chen, CA',
    role: 'Financial Audit & Assurance Lead',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
  },
];

function getIdx(base: number, offset: number) {
  return (base + offset + teamMembers.length) % teamMembers.length;
}

export default function TeamSection() {
  const [page, setPage] = useState(0);
  const [direction, setDirection] = useState(1);

  const next = () => {
    setDirection(1);
    setPage((p) => p + 1);
  };
  const prev = () => {
    setDirection(-1);
    setPage((p) => p - 1);
  };

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? '100%' : '-100%',
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? '-100%' : '100%',
      opacity: 0,
    }),
  };

  // 4 slots: 0, 1, 2, 3
  const member0 = teamMembers[getIdx(page, 0)];
  const member1 = teamMembers[getIdx(page, 1)];
  const member3 = teamMembers[getIdx(page, 3)];

  const Card = ({ member }: { member: any }) => {
    const [shareOpen, setShareOpen] = useState(false);

    return (
      <div className="h-full flex flex-col p-6 pb-8">
        <div className="relative rounded-2xl overflow-hidden flex-grow mb-6 group">
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-[400px] object-cover object-top"
          />
          
          {/* Social Share Menu */}
          <div className="absolute bottom-5 right-5 flex flex-col items-center gap-3">
            <AnimatePresence>
              {shareOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 15 }}
                  className="flex flex-col gap-3 mb-2"
                >
                  <a href="https://instagram.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-black/40 backdrop-blur-sm border border-white/40 flex items-center justify-center text-white hover:bg-[#68e9ba] hover:text-[#1f4638] hover:border-[#68e9ba] transition-all">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                    </svg>
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-black/40 backdrop-blur-sm border border-white/40 flex items-center justify-center text-white hover:bg-[#68e9ba] hover:text-[#1f4638] hover:border-[#68e9ba] transition-all">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </a>
                  <a href="https://facebook.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-black/40 backdrop-blur-sm border border-white/40 flex items-center justify-center text-white hover:bg-[#68e9ba] hover:text-[#1f4638] hover:border-[#68e9ba] transition-all">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                </motion.div>
              )}
            </AnimatePresence>

            <button
              onClick={() => setShareOpen(!shareOpen)}
              className={`w-10 h-10 border border-[#68e9ba]/70 bg-black/20 backdrop-blur-sm flex items-center justify-center transition-all duration-300 hover:bg-black/40 ${
                shareOpen ? 'rotate-45 rounded-md bg-black/40' : 'rounded-xl'
              }`}
            >
              <Share2 className={`w-[18px] h-[18px] text-[#68e9ba] transition-transform duration-300 ${shareOpen ? '-rotate-45' : ''}`} strokeWidth={2.5} />
            </button>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[#39413e]">{member.name}</h3>
          <p className="text-xs sm:text-sm font-serif-accent italic text-[#1d7a58] mt-0.5">{member.role}</p>
        </div>
      </div>
    );
  };

  return (
    <section id="team" className="bg-white border-t border-gray-200 overflow-hidden w-full">
      {/* 4 equal columns grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 min-h-[540px] w-full">

        {/* Column 0 */}
        <div className="border-r border-gray-200 relative overflow-hidden hidden xl:block">
          <AnimatePresence custom={direction} initial={false}>
            <motion.div
              key={page}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className="absolute inset-0"
            >
              <Card member={member0} />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Column 1 */}
        <div className="border-r border-gray-200 relative overflow-hidden hidden md:block">
          <AnimatePresence custom={direction} initial={false}>
            <motion.div
              key={page}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className="absolute inset-0"
            >
              <Card member={member1} />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Column 2: Fixed Text Box */}
        <div className="border-r border-gray-200 bg-white z-10 relative flex flex-col justify-center p-8 lg:p-12">
          <div>
            <h2 className="text-2xl lg:text-3xl font-semibold text-[#39413e] leading-tight">
              Meet Our<br />
              <span className="font-serif-accent font-normal italic text-[#1d7a58]">Expert CAs</span>
            </h2>
            <p className="mt-4 text-[#75736b] text-sm leading-relaxed max-w-[280px] font-normal">
              Discover the financial leadership and technical expertise powering Rafa & Company. Our team of dedicated Chartered Accountants and tax advisors is committed to securing your financial future.
            </p>
          </div>

          <div className="flex items-center gap-6 mt-10">
            <button
              onClick={prev}
              className="flex items-center gap-2 text-[#75736b] hover:text-[#39413e] font-medium text-xs uppercase tracking-wider transition-colors group"
            >
              <span className="group-hover:-translate-x-1 transition-transform">←</span> Prev
            </button>
            <button
              onClick={next}
              className="flex items-center gap-2 text-[#39413e] hover:text-[#1d7a58] font-medium text-xs uppercase tracking-wider transition-colors group"
            >
              Next <span className="group-hover:translate-x-1 transition-transform">→</span>
            </button>
          </div>
        </div>

        {/* Column 3 */}
        <div className="relative overflow-hidden">
          <AnimatePresence custom={direction} initial={false}>
            <motion.div
              key={page}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className="absolute inset-0"
            >
              <Card member={member3} />
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
