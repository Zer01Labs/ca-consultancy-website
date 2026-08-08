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
      'The level of expertise at Consultant W is unmatched. From the first consultation to the final result. A pleasure to work with!',
    name: 'Olivia Taylor',
    role: 'Lovely Customer',
    avatar:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80',
  },
  {
    quote:
      'Choosing Consultant W was one of the best decisions for our company. They are partners in success. Thanks for the outstanding support!',
    name: 'Michael Davis',
    role: 'Lovely Customer',
    avatar:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
  },
  {
    quote:
      "Consultant W's team has a knack for understanding business dynamics. Their solutions are innovative. Thrilled with the results!",
    name: 'Emma Johnson',
    role: 'Lovely Customer',
    avatar:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
  },
  {
    quote:
      'Kudos to Consultant W for their exceptional service. From strategic planning to implementation. Thrilled with the results!',
    name: 'Sophia Lee',
    role: 'Lovely Customer',
    avatar:
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
  },
];

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredSide, setHoveredSide] = useState<'left' | 'right' | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const total = testimonials.length;

  const previousIndex = (activeIndex - 1 + total) % total;
  const nextIndex = (activeIndex + 1) % total;

  const goToPrevious = () => {
    setActiveIndex(previousIndex);
  };

  const goToNext = () => {
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

  // Remove auto-slide so testimonials only change on manual button click

  return (
    <section
      id="reviews"
      className="w-full bg-white px-3 sm:px-6 lg:px-8"
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
          px-6
          sm:px-10
          lg:px-16
          py-14
          sm:py-16
          lg:py-20
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

        {/* =========================
            SECTION HEADER
        ========================= */}
        <div className="relative z-10 mb-8 text-center sm:mb-12">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-[#1f4638]/60">
            What They Say About Us
          </p>
        </div>

        {/* =========================
            TESTIMONIAL CAROUSEL
        ========================= */}
        <div
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={() => setHoveredSide(null)}
          className="relative z-10 mx-auto w-full max-w-[1300px]"
        >
          {/* Animated Mouse Follower Button */}
          <motion.div
            className="pointer-events-none absolute z-30 hidden lg:flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#1f4638] text-white shadow-2xl"
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
              <ChevronLeft className="h-6 w-6 stroke-[2.5]" />
            ) : (
              <ChevronRight className="h-6 w-6 stroke-[2.5]" />
            )}
          </motion.div>

          <div className="relative flex min-h-[340px] sm:min-h-[380px] items-center justify-center">
            {/* =========================
                LEFT PREVIEW / TRIGGER
            ========================= */}
            <button
              type="button"
              onClick={goToPrevious}
              onMouseEnter={() => setHoveredSide('left')}
              onMouseLeave={() => setHoveredSide(null)}
              aria-label="Previous testimonial"
              className="
                group
                absolute
                left-0
                top-0
                bottom-0
                hidden
                w-[260px]
                cursor-none
                text-left
                opacity-30
                transition-all
                duration-300
                hover:opacity-60
                lg:flex
                items-center
                xl:w-[310px]
              "
            >
              <div className="pointer-events-none select-none">
                <p className="line-clamp-4 font-serif-accent text-lg italic leading-relaxed text-[#1f4638] xl:text-xl">
                  "{testimonials[previousIndex].quote}"
                </p>

                <div className="mt-6 flex items-center gap-3">
                  <div className="h-10 w-10 overflow-hidden rounded-full grayscale">
                    <img
                      src={testimonials[previousIndex].avatar}
                      alt={testimonials[previousIndex].name}
                      className="h-full w-full object-cover"
                    />
                  </div>

                  <div>
                    <p className="text-xs font-bold text-[#1f4638]">
                      {testimonials[previousIndex].name}
                    </p>

                    <p className="mt-1 text-[11px] text-[#77766f]">
                      {testimonials[previousIndex].role}
                    </p>
                  </div>
                </div>
              </div>
            </button>

            {/* =========================
                CENTER ACTIVE TESTIMONIAL
            ========================= */}
            <div className="relative z-20 mx-auto w-full max-w-[720px] px-4 text-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    y: -20,
                  }}
                  transition={{
                    duration: 0.45,
                    ease: 'easeOut',
                  }}
                  className="flex flex-col items-center"
                >
                  {/* Quote */}
                  <blockquote
                    className="
                      font-serif-accent
                      text-2xl
                      italic
                      leading-[1.38]
                      tracking-tight
                      text-[#1f4638]
                      sm:text-3xl
                      lg:text-[36px]
                      xl:text-[38px]
                    "
                  >
                    "{testimonials[activeIndex].quote}"
                  </blockquote>

                  {/* Author */}
                  <div className="mt-8 sm:mt-10 flex items-center justify-center gap-4">
                    <div
                      className="
                        h-14
                        w-14
                        overflow-hidden
                        rounded-full
                        border-2
                        border-[#68e9ba]
                        p-[2px]
                        shadow-md
                        sm:h-16
                        sm:w-16
                      "
                    >
                      <img
                        src={testimonials[activeIndex].avatar}
                        alt={testimonials[activeIndex].name}
                        className="h-full w-full rounded-full object-cover"
                      />
                    </div>

                    <div className="text-left">
                      <h3 className="text-base font-bold text-[#1f4638] sm:text-lg">
                        {testimonials[activeIndex].name}
                      </h3>

                      <p className="mt-0.5 text-xs text-[#77766f] sm:text-sm">
                        {testimonials[activeIndex].role}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* =========================
                RIGHT PREVIEW / TRIGGER
            ========================= */}
            <button
              type="button"
              onClick={goToNext}
              onMouseEnter={() => setHoveredSide('right')}
              onMouseLeave={() => setHoveredSide(null)}
              aria-label="Next testimonial"
              className="
                group
                absolute
                right-0
                top-0
                bottom-0
                hidden
                w-[260px]
                cursor-none
                text-left
                opacity-30
                transition-all
                duration-300
                hover:opacity-60
                lg:flex
                items-center
                xl:w-[310px]
              "
            >
              <div className="pointer-events-none select-none">
                <p className="line-clamp-4 font-serif-accent text-lg italic leading-relaxed text-[#1f4638] xl:text-xl">
                  "{testimonials[nextIndex].quote}"
                </p>

                <div className="mt-6 flex items-center gap-3">
                  <div className="h-10 w-10 overflow-hidden rounded-full grayscale">
                    <img
                      src={testimonials[nextIndex].avatar}
                      alt={testimonials[nextIndex].name}
                      className="h-full w-full object-cover"
                    />
                  </div>

                  <div>
                    <p className="text-xs font-bold text-[#1f4638]">
                      {testimonials[nextIndex].name}
                    </p>

                    <p className="mt-1 text-[11px] text-[#77766f]">
                      {testimonials[nextIndex].role}
                    </p>
                  </div>
                </div>
              </div>
            </button>
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