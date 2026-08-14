'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      'Rafa & Company streamlined our tax planning and statutory compliance flawlessly. Their proactive GST guidance saved our enterprise significant overhead while ensuring complete compliance.',
    name: 'Olivia Taylor',
    role: 'CEO, Nexus Technologies',
    avatar:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80',
  },
  {
    quote:
      'Partnering with Rafa & Company for Virtual CFO services was one of our best strategic decisions. Their financial reporting and audit accuracy gave our investors ultimate confidence.',
    name: 'Michael Davis',
    role: 'Founder, Apex Logistics',
    avatar:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
  },
  {
    quote:
      'The audit team at Rafa & Company operates with exceptional rigor and professionalism. They turned complex compliance requirements into smooth, seamless operations.',
    name: 'Emma Johnson',
    role: 'CFO, Horizon Retail',
    avatar:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
  },
  {
    quote:
      'Kudos to Rafa & Company for their outstanding tax advisory and corporate governance support. Highly recommended for any growing business seeking top CA expertise.',
    name: 'Sophia Lee',
    role: 'Managing Director, Velo Capital',
    avatar:
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
  },
];

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);
  const [hoveredSide, setHoveredSide] = useState<'left' | 'right' | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const total = testimonials.length;

  const previousIndex = (activeIndex - 1 + total) % total;
  const nextIndex = (activeIndex + 1) % total;

  const goToPrevious = () => {
    setDirection(-1);
    setActiveIndex(previousIndex);
  };

  const goToNext = () => {
    setDirection(1);
    setActiveIndex(nextIndex);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const visibleSlots = [
    { index: previousIndex, slot: 'left' },
    { index: activeIndex, slot: 'center' },
    { index: nextIndex, slot: 'right' },
  ];

  return (
    <section
      id="reviews"
      className="w-full bg-white px-3 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Main Review Container */}
      <div
        className="
          relative
          w-full
          max-w-[1520px]
          mx-auto
          overflow-hidden
          rounded-[36px]
          sm:rounded-[48px]
          border
          border-black/5
          px-4
          sm:px-8
          lg:px-12
          py-12
          sm:py-14
          lg:py-16
        "
        style={{
          background:
            'linear-gradient(135deg, #faf7ee 0%, #edf6ee 45%, #daf3e6 100%)',
        }}
      >
        {/* Decorative Green Gradient Glow */}
        <div
          className="
            pointer-events-none
            absolute
            -top-40
            left-1/2
            h-[500px]
            w-[700px]
            -translate-x-1/2
            rounded-full
            bg-[#68e9ba]/10
            blur-[120px]
          "
        />

        {/* SECTION HEADER */}
        <div className="relative z-10 mb-8 text-center sm:mb-12">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#1f4638]/60">
            What They Say About Us
          </p>
        </div>

        {/* 3-CARD CENTERED HORIZONTAL CAROUSEL SLIDER */}
        <div
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={() => setHoveredSide(null)}
          className="relative z-10 mx-auto w-full max-w-[1400px]"
        >
          {/* Animated Mouse Follower Button */}
          <motion.div
            className="pointer-events-none absolute z-30 hidden lg:flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#1f4638] text-white shadow-xl"
            animate={{
              x: mousePosition.x,
              y: mousePosition.y,
              scale: hoveredSide ? 1 : 0,
              opacity: hoveredSide ? 1 : 0,
            }}
            transition={{
              type: 'spring',
              stiffness: 400,
              damping: 28,
              mass: 0.4,
            }}
          >
            {hoveredSide === 'left' ? (
              <ChevronLeft className="h-5 w-5 stroke-[2.5]" />
            ) : (
              <ChevronRight className="h-5 w-5 stroke-[2.5]" />
            )}
          </motion.div>

          <div className="relative flex min-h-[300px] sm:min-h-[340px] items-center justify-center overflow-hidden py-4">
            <AnimatePresence mode="popLayout" custom={direction}>
              {visibleSlots.map(({ index, slot }) => {
                const testimonial = testimonials[index];
                const isCenter = slot === 'center';
                const isLeft = slot === 'left';
                const isRight = slot === 'right';

                const targetX = isCenter ? '0%' : isLeft ? '-100%' : '100%';
                const initialX = isLeft
                  ? '-120%'
                  : isRight
                  ? '120%'
                  : direction > 0
                  ? '100%'
                  : '-100%';
                const exitX = isLeft ? '-120%' : isRight ? '120%' : direction > 0 ? '-100%' : '100%';

                return (
                  <motion.div
                    key={testimonial.name}
                    initial={{
                      x: initialX,
                      opacity: isCenter ? 0.7 : 0,
                      scale: isCenter ? 0.92 : 0.8,
                    }}
                    animate={{
                      x: targetX,
                      opacity: isCenter ? 1 : 0.4,
                      scale: isCenter ? 1 : 0.88,
                      zIndex: isCenter ? 20 : 10,
                    }}
                    exit={{
                      x: exitX,
                      opacity: 0,
                      scale: 0.8,
                      zIndex: 0,
                    }}
                    transition={{
                      duration: 1.1,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    onClick={() => {
                      if (isLeft) goToPrevious();
                      if (isRight) goToNext();
                    }}
                    onMouseEnter={() => {
                      if (isLeft) setHoveredSide('left');
                      if (isRight) setHoveredSide('right');
                    }}
                    onMouseLeave={() => setHoveredSide(null)}
                    className={`absolute w-full max-w-[620px] sm:max-w-[680px] px-4 text-center ${
                      isCenter
                        ? 'cursor-default pointer-events-auto'
                        : 'cursor-pointer select-none pointer-events-auto'
                    }`}
                  >
                    <blockquote
                      className={`font-serif-accent italic leading-relaxed tracking-tight text-[#1f4638] ${
                        isCenter
                          ? 'text-lg sm:text-xl lg:text-2xl font-normal'
                          : 'text-base sm:text-lg line-clamp-3'
                      }`}
                    >
                      "{testimonial.quote}"
                    </blockquote>

                    <div className="mt-6 flex items-center justify-center gap-3.5">
                      <div
                        className={`overflow-hidden rounded-full border-2 border-[#68e9ba] p-[2px] shadow-sm transition-all duration-500 ${
                          isCenter ? 'h-12 w-12 sm:h-14 sm:w-14' : 'h-10 w-10 grayscale'
                        }`}
                      >
                        <img
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="h-full w-full rounded-full object-cover"
                        />
                      </div>

                      <div className="text-left">
                        <h3 className="text-sm sm:text-base font-semibold text-[#1f4638]">
                          {testimonial.name}
                        </h3>
                        <p className="mt-0.5 text-xs text-[#77766f]">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>

        {/* Bottom Decorative Glow */}
        <div
          className="
            pointer-events-none
            absolute
            -bottom-40
            left-1/2
            h-[400px]
            w-[650px]
            -translate-x-1/2
            rounded-full
            bg-[#68e9ba]/10
            blur-[120px]
          "
        />
      </div>
    </section>
  );
}