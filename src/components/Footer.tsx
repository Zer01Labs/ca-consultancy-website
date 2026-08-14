'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, type Variants } from 'framer-motion';

const collageContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const photoItemVariants: Variants = {
  hidden: { opacity: 0, y: 35, scale: 0.92 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.65, ease: 'easeOut' },
  },
};

const smallPhotos = [
  'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=500&q=80',
  'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=500&q=80',
  'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=500&q=80',
  'https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?auto=format&fit=crop&w=500&q=80',
];

export default function Footer() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const openInstagram = () => {
    window.open('https://instagram.com', '_blank');
  };

  return (
    <footer id="contact" className="w-full bg-white px-3 sm:px-6 lg:px-8 py-3 sm:py-5">
      <div className="mx-auto max-w-[1520px] rounded-[36px] sm:rounded-[48px] bg-[#1f4638] text-white p-8 sm:p-14 lg:p-20 overflow-hidden relative">
        {/* =========================
            TOP: Big Title
        ========================= */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="text-2xl sm:text-3xl lg:text-4xl font-semibold leading-tight tracking-tight max-w-3xl text-white"
        >
          Secure Your Financial Future.
          <br />
          Let's Empower{' '}
          <span className="font-serif-accent font-normal italic text-[#68e9ba]">
            Your Growth Together!
          </span>
        </motion.h2>

        {/* =========================
            NAV LINKS & SOCIAL ROW
        ========================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-10 sm:mt-14 flex flex-col md:flex-row md:items-center justify-between gap-6"
        >
          <nav className="flex flex-wrap items-center gap-5 sm:gap-8 text-xs sm:text-sm font-medium text-white/90">
            <Link
              href="/"
              className="transition-colors duration-200 hover:text-[#68e9ba]"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="transition-colors duration-200 hover:text-[#68e9ba]"
            >
              About Us
            </Link>
            <Link
              href="/services"
              className="transition-colors duration-200 hover:text-[#68e9ba]"
            >
              Services
            </Link>
            <Link
              href="/team"
              className="transition-colors duration-200 hover:text-[#68e9ba]"
            >
              Our Team
            </Link>
            <Link
              href="/careers"
              className="transition-colors duration-200 hover:text-[#68e9ba]"
            >
              Careers
            </Link>
            <Link
              href="/contact"
              className="transition-colors duration-200 hover:text-[#68e9ba]"
            >
              Contact Us
            </Link>
          </nav>

          {/* Social icons */}
          <div className="flex items-center gap-3">
            {[
              {
                name: 'instagram',
                href: 'https://instagram.com',
                icon: (
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                ),
              },
              {
                name: 'facebook',
                href: 'https://facebook.com',
                icon: (
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                ),
              },
              {
                name: 'x',
                href: 'https://x.com',
                icon: (
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                ),
              },
            ].map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center text-white/80 hover:text-[#1f4638] hover:bg-[#68e9ba] hover:border-[#68e9ba] transition-all duration-300 hover:scale-105"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </motion.div>

        {/* =========================
            MINT GREEN CTA CARD
        ========================= */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="my-10 sm:my-14 lg:my-16 rounded-[28px] sm:rounded-[36px] bg-[#68e9ba] p-6 sm:p-9 lg:p-12 text-[#1f4638] shadow-xl"
        >
          <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_1fr] gap-8 lg:gap-14 items-center">
            {/* Left: Photo collage grid with Image Dimming & Centered Glass Instagram Badge */}
            <motion.div
              variants={collageContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              className="flex flex-col sm:flex-row gap-3.5 items-stretch h-full"
            >
              {/* Large Portrait Left Photo */}
              <motion.div
                variants={photoItemVariants}
                onMouseEnter={() => setHoveredCard(0)}
                onMouseLeave={() => setHoveredCard(null)}
                onClick={openInstagram}
                whileHover={{ scale: 1.02 }}
                className="group relative min-h-[280px] sm:h-[320px] w-full sm:w-[50%] overflow-hidden rounded-[24px] sm:rounded-[28px] bg-[#53cb9f] cursor-pointer"
              >
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80"
                  alt="Consultant consultation"
                  referrerPolicy="no-referrer"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Dark Hover Overlay with Centered Glass Instagram Icon */}
                <div
                  className={`absolute inset-0 bg-black/40 backdrop-blur-[1px] transition-opacity duration-300 flex items-center justify-center ${
                    hoveredCard === 0 ? 'opacity-100' : 'opacity-0 pointer-events-none'
                  }`}
                >
                  <motion.div
                    animate={
                      hoveredCard === 0
                        ? { scale: 1, opacity: 1, rotate: 0 }
                        : { scale: 0.5, opacity: 0, rotate: -20 }
                    }
                    transition={{ type: 'spring', stiffness: 350, damping: 20 }}
                    className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/50 flex items-center justify-center text-white shadow-2xl"
                  >
                    <svg
                      className="w-6 h-6 sm:w-7 sm:h-7"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </motion.div>
                </div>
              </motion.div>

              {/* 4 Small Square/Portrait Photos in 2x2 Grid */}
              <div className="grid grid-cols-2 gap-3 w-full sm:w-[50%] h-[320px]">
                {smallPhotos.map((imgUrl, i) => (
                  <motion.div
                    key={i}
                    variants={photoItemVariants}
                    onMouseEnter={() => setHoveredCard(i + 1)}
                    onMouseLeave={() => setHoveredCard(null)}
                    onClick={openInstagram}
                    whileHover={{ scale: 1.04 }}
                    className="group overflow-hidden rounded-[18px] bg-[#53cb9f] h-full relative cursor-pointer"
                  >
                    <img
                      src={imgUrl}
                      alt={`Consultancy team ${i + 1}`}
                      referrerPolicy="no-referrer"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />

                    {/* Dark Hover Overlay with Centered Glass Instagram Icon */}
                    <div
                      className={`absolute inset-0 bg-black/40 backdrop-blur-[1px] transition-opacity duration-300 flex items-center justify-center ${
                        hoveredCard === i + 1
                          ? 'opacity-100'
                          : 'opacity-0 pointer-events-none'
                      }`}
                    >
                      <motion.div
                        animate={
                          hoveredCard === i + 1
                            ? { scale: 1, opacity: 1, rotate: 0 }
                            : { scale: 0.5, opacity: 0, rotate: -20 }
                        }
                        transition={{
                          type: 'spring',
                          stiffness: 350,
                          damping: 20,
                        }}
                        className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/10 backdrop-blur-md border border-white/50 flex items-center justify-center text-white shadow-xl"
                      >
                        <svg
                          className="w-4 h-4 sm:w-5 sm:h-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                        </svg>
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right: CTA Text & Action Buttons with Animated Scroll Entry */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="flex flex-col justify-center"
            >
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold leading-tight tracking-tight text-[#1f4638]">
                Book Your Consultation
                <br />
                with Rafa & Company!
              </h3>

              <p className="mt-3.5 text-xs sm:text-sm leading-relaxed text-[#1f4638]/85 max-w-md font-normal">
                At Rafa & Company, we deliver premier financial, tax, and auditing advisory built on integrity, technical rigor, and strategic growth.
              </p>

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.55, delay: 0.25 }}
                className="mt-6 flex flex-wrap items-center gap-3.5"
              >
                <Link
                  href="#contact"
                  className="rounded-full border border-[#1f4638] bg-transparent px-5 py-2.5 text-xs sm:text-sm font-semibold text-[#1f4638] transition-all duration-300 hover:bg-[#1f4638] hover:text-white hover:scale-105"
                >
                  Have a question?
                </Link>

                <Link
                  href="#contact"
                  className="rounded-full bg-[#1f4638] px-6 py-2.5 text-xs sm:text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:bg-[#16362b] hover:shadow-xl hover:-translate-y-0.5 hover:scale-105"
                >
                  Let's Start
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* =========================
            BOTTOM SUB-FOOTER
        ========================= */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-normal text-white/70 pt-2"
        >
          <p>© Rafa & Company. All Rights Reserved. Chartered Accountants & Financial Consultants</p>
          <p>Strategic Financial Advisory</p>
        </motion.div>
      </div>
    </footer>
  );
}
