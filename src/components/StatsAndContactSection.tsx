'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import {
  MapPin,
  Phone,
  Mail,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

/* =========================================================
   TYPES
========================================================= */

interface StatItem {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
}

interface LocationItem {
  country: string;
  address: string;
  mapLink: string;
  phone: string;
  email: string;
}

/* =========================================================
   ANIMATED COUNTER
========================================================= */

function AnimatedCounter({
  target,
  duration = 1800,
  prefix = '',
  suffix = '',
}: {
  target: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.3,
  });

  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let animationFrame: number;
    let startTime: number | null = null;

    const easeOutExpo = (t: number) => {
      return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
    };

    const animate = (timestamp: number) => {
      if (startTime === null) {
        startTime = timestamp;
      }

      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeOutExpo(progress);

      setValue(Math.round(easedProgress * target));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setValue(target);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, [isInView, target, duration]);

  return (
    <span
      ref={ref}
      className="inline-block tabular-nums"
    >
      {prefix}
      {value}
      {suffix}
    </span>
  );
}

/* =========================================================
   STATS
========================================================= */

const stats: StatItem[] = [
  {
    value: 20,
    suffix: 'k+',
    label: 'Happy customers worldwide',
  },
  {
    value: 12,
    suffix: '+',
    label: 'Years of work experience',
  },
  {
    value: 50,
    suffix: '+',
    label: 'Creativity & passionate members',
  },
  {
    value: 200,
    suffix: '+',
    label: 'Successfully finished projects',
  },
];

/* =========================================================
   MAP CIRCLES
========================================================= */

const mapCircles = [
  { id: 1, top: '28%', left: '16%', mini: false, delay: 0 },
  { id: 2, top: '34%', left: '26%', mini: true, delay: 0.3 },
  { id: 3, top: '48%', left: '22%', mini: false, delay: 0.6 },
  { id: 4, top: '70%', left: '27%', mini: false, delay: 0.2 },

  { id: 5, top: '22%', left: '47%', mini: false, delay: 0.1 },
  { id: 6, top: '26%', left: '52%', mini: false, delay: 0.4 },
  { id: 8, top: '15%', left: '53%', mini: true, delay: 0.7 },
  { id: 9, top: '52%', left: '46%', mini: true, delay: 0.3 },
  { id: 10, top: '72%', left: '54%', mini: true, delay: 0.9 },

  { id: 11, top: '38%', left: '60%', mini: false, delay: 0.4 },
  { id: 12, top: '22%', left: '65%', mini: false, delay: 0.6 },
  { id: 13, top: '46%', left: '68%', mini: false, delay: 0.2 },
  { id: 14, top: '32%', left: '77%', mini: false, delay: 0.5 },
  { id: 15, top: '32%', left: '86%', mini: false, delay: 0.3 },
  { id: 16, top: '56%', left: '78%', mini: false, delay: 0.7 },

  { id: 17, top: '62%', left: '81%', mini: true, delay: 0.8 },
  { id: 18, top: '72%', left: '84%', mini: true, delay: 0.4 },
  { id: 19, top: '74%', left: '88%', mini: true, delay: 1 },
  { id: 20, top: '82%', left: '93%', mini: true, delay: 0.5 },

  { id: 21, top: '62%', left: '33%', mini: false, delay: 0.7 },
  { id: 22, top: '20%', left: '24%', mini: true, delay: 0.2 },
  { id: 23, top: '16%', left: '11%', mini: true, delay: 0.8 },
  { id: 24, top: '34%', left: '50%', mini: true, delay: 0.5 },
  { id: 25, top: '28%', left: '71%', mini: true, delay: 0.6 },
  { id: 26, top: '58%', left: '57%', mini: true, delay: 0.9 },
];

/* =========================================================
   LOCATIONS
========================================================= */

const locations: LocationItem[] = [
  {
    country: 'London',
    address: '14 Tottenham Road, London, England',
    mapLink:
      'https://www.google.com/maps/d/u/0/viewer?ie=UTF8&hl=en&msa=0&z=22&mid=14jEeIQ7yyKK7iih9Sl_AjR7jZf0&ll=51.545544000014615%2C-0.07610839999999452',
    phone: '+1 212 425 8617',
    email: 'hello@consultant_w.com',
  },
  {
    country: 'Paris',
    address: '25 Rueng de Berri, Paris, France',
    mapLink:
      'https://www.google.com/maps/d/u/0/viewer?ie=UTF8&hl=en&msa=0&z=22&mid=14jEeIQ7yyKK7iih9Sl_AjR7jZf0&ll=51.545544000014615%2C-0.07610839999999452',
    phone: '+1 212 425 8617',
    email: 'hello@consultant_w.com',
  },
  {
    country: 'New York',
    address: '5 Washington Square, New York, USA',
    mapLink:
      'https://www.google.com/maps/d/u/0/viewer?ie=UTF8&hl=en&msa=0&z=22&mid=14jEeIQ7yyKK7iih9Sl_AjR7jZf0&ll=51.545544000014615%2C-0.07610839999999452',
    phone: '+1 212 425 8617',
    email: 'hello@consultant_w.com',
  },
];

/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function StatsAndContactSection() {
  const [slideIndex, setSlideIndex] = useState(0);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const currentLocation = locations[slideIndex];

  /* ---------------------------------------------------------
     SLIDER
  --------------------------------------------------------- */

  const nextSlide = () => {
    setSlideIndex((prev) => (prev + 1) % locations.length);
  };

  const previousSlide = () => {
    setSlideIndex(
      (prev) => (prev - 1 + locations.length) % locations.length
    );
  };

  /* ---------------------------------------------------------
     FORM
  --------------------------------------------------------- */

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 900);
  };

  const resetForm = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <>
      {/* =====================================================
          SECTION
      ===================================================== */}

      <section
        id="Reviews"
        className="w-full bg-white  sm:px-6 lg:px-8 overflow-hidden"
      >
        {/* ===================================================
            GREEN CONTAINER
        =================================================== */}

        <div className="relative mx-auto w-full max-w-[1520px] overflow-hidden rounded-[36px] bg-[#1f4638] text-white shadow-2xl sm:rounded-[48px]">

          {/* =================================================
              BACKGROUND GLOW
          ================================================= */}

          <div
            className="pointer-events-none absolute inset-0 overflow-hidden"
            aria-hidden="true"
          >
            <motion.div
              animate={{
                x: [0, 20, 0],
                y: [0, -30, 0],
                scale: [1, 1.12, 1],
                opacity: [0.12, 0.2, 0.12],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute -left-32 -top-32 h-[420px] w-[420px] rounded-full bg-[#68e9ba]/20 blur-[120px]"
            />

            <motion.div
              animate={{
                x: [0, -25, 0],
                y: [0, 25, 0],
                scale: [1, 1.15, 1],
                opacity: [0.08, 0.16, 0.08],
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute -bottom-32 -right-24 h-[480px] w-[480px] rounded-full bg-[#68e9ba]/15 blur-[130px]"
            />
          </div>

          {/* =================================================
              MAP SECTION
          ================================================= */}

          <div className="relative w-full px-4 pb-10 pt-8 sm:px-8 sm:pb-12 sm:pt-10">
            <div className="mx-auto w-full max-w-[1200px]">
              <div
                className="relative mx-auto h-[300px] w-full bg-contain bg-center bg-no-repeat sm:h-[430px] lg:h-[520px]"
                style={{
                  backgroundImage:
                    'url("https://cdn.prod.website-files.com/656363843a32e4fa57eb52d1/6567543225bddbde94882c50_mapbase.svg")',
                }}
              >
                {/* MAP MARKERS */}

                <div className="absolute inset-0">
                  {mapCircles.map((circle) => (
                    <div
                      key={circle.id}
                      className="absolute"
                      style={{
                        top: circle.top,
                        left: circle.left,
                        transform: 'translate(-50%, -50%)',
                      }}
                    >
                      {/* Pulse */}

                      <span
                        className={
                          circle.mini
                            ? 'absolute left-1/2 top-1/2 h-[22px] w-[22px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#68e9ba]/20'
                            : 'absolute left-1/2 top-1/2 h-[32px] w-[32px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#68e9ba]/25'
                        }
                        style={{
                          animation: 'mapPing 2.8s ease-out infinite',
                          animationDelay: `${circle.delay}s`,
                        }}
                      />

                      {/* Center Dot */}

                      <span
                        className={
                          circle.mini
                            ? 'relative z-10 block h-[6px] w-[6px] rounded-full bg-[#68e9ba] shadow-[0_0_10px_3px_rgba(104,233,186,0.8)]'
                            : 'relative z-10 block h-[8px] w-[8px] rounded-full bg-[#68e9ba] shadow-[0_0_12px_4px_rgba(104,233,186,0.9)]'
                        }
                        style={{
                          animation: 'mapPulse 3s ease-in-out infinite',
                          animationDelay: `${circle.delay}s`,
                        }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* =================================================
              DIVIDER
          ================================================= */}

          <div className="h-px w-full bg-[#2e5f4a]" />

          {/* =================================================
              STATS
          ================================================= */}

          <div className="relative mx-auto w-full max-w-[1200px] px-6 py-12 sm:px-8 sm:py-14 lg:py-16">
            <div className="grid grid-cols-2 gap-x-6 gap-y-12 lg:grid-cols-4 lg:gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.3,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  className="flex flex-col items-start"
                >
                  <div className="text-[48px] font-normal leading-none tracking-tight text-white sm:text-[60px] lg:text-[70px]">
                    <AnimatedCounter
                      target={stat.value}
                      prefix={stat.prefix}
                      suffix={stat.suffix}
                    />
                  </div>

                  <p className="mt-4 max-w-[190px] text-sm leading-relaxed text-[#9ecfb8] sm:text-base">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* =================================================
              DIVIDER
          ================================================= */}

          <div className="h-px w-full bg-[#2e5f4a]" />

          {/* =================================================
              CONTACT SECTION
          ================================================= */}

          <div
            id="contact"
            className="relative px-6 py-14 sm:px-10 sm:py-16 lg:px-16 lg:py-20"
          >
            <div className="mx-auto grid w-full max-w-[1200px] grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-20">

              {/* =============================================
                  LEFT SIDE
              ============================================= */}

              <div>
                {/* HEADING */}

                <motion.h2
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.6,
                  }}
                  className="text-[36px] font-bold leading-[1.1] tracking-tight text-white sm:text-[48px]"
                >
                  <span className="font-normal italic text-[#68e9ba]">
                    Contact Consultant W
                  </span>{' '}
                  for Strategic Insights
                </motion.h2>

                {/* DESCRIPTION */}

                <motion.p
                  initial={{
                    opacity: 0,
                    y: 15,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.6,
                    delay: 0.1,
                  }}
                  className="mt-6 max-w-xl text-base leading-relaxed text-[#9ecfb8] sm:text-lg"
                >
                  Your journey to strategic excellence begins here.
                  Contact us to tap into a wealth of consulting expertise
                  and take your business to new heights.
                </motion.p>

                {/* DIVIDER */}

                <div className="my-8 h-px w-full bg-[#2e5f4a]" />

                {/* =========================================
                    LOCATION
                ========================================= */}

                <div>
                  {/* LOCATION HEADER */}

                  <div className="flex items-center justify-between gap-4">
                    <AnimatePresence mode="wait">
                      <motion.h4
                        key={currentLocation.country}
                        initial={{
                          opacity: 0,
                          x: -10,
                        }}
                        animate={{
                          opacity: 1,
                          x: 0,
                        }}
                        exit={{
                          opacity: 0,
                          x: 10,
                        }}
                        transition={{
                          duration: 0.25,
                        }}
                        className="text-xl font-semibold text-white sm:text-2xl"
                      >
                        {currentLocation.country}
                      </motion.h4>
                    </AnimatePresence>

                    {/* ARROWS */}

                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={previousSlide}
                        aria-label="Previous location"
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-[#4a7d68] text-white transition-all hover:border-[#68e9ba] hover:bg-[#2e5f4a]"
                      >
                        <ChevronLeft className="h-5 w-5" />
                      </button>

                      <button
                        type="button"
                        onClick={nextSlide}
                        aria-label="Next location"
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-[#4a7d68] text-white transition-all hover:border-[#68e9ba] hover:bg-[#2e5f4a]"
                      >
                        <ChevronRight className="h-5 w-5" />
                      </button>
                    </div>
                  </div>

                  {/* LOCATION DETAILS */}

                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentLocation.country}
                      initial={{
                        opacity: 0,
                        y: 8,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      exit={{
                        opacity: 0,
                        y: -8,
                      }}
                      transition={{
                        duration: 0.25,
                      }}
                      className="mt-6 space-y-4"
                    >
                      {/* ADDRESS */}

                      <div className="flex items-start gap-3">
                        <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-[#68e9ba]" />

                        <a
                          href={currentLocation.mapLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm leading-relaxed text-[#9ecfb8] transition-colors hover:text-white sm:text-base"
                        >
                          {currentLocation.address}
                        </a>
                      </div>

                      {/* PHONE */}

                      <div className="flex items-center gap-3">
                        <Phone className="h-5 w-5 shrink-0 text-[#68e9ba]" />

                        <a
                          href={`tel:${currentLocation.phone.replace(
                            /\s+/g,
                            ''
                          )}`}
                          className="text-sm text-[#9ecfb8] transition-colors hover:text-white sm:text-base"
                        >
                          {currentLocation.phone}
                        </a>
                      </div>

                      {/* EMAIL */}

                      <div className="flex items-center gap-3">
                        <Mail className="h-5 w-5 shrink-0 text-[#68e9ba]" />

                        <a
                          href={`mailto:${currentLocation.email}`}
                          className="text-sm text-[#9ecfb8] transition-colors hover:text-white sm:text-base"
                        >
                          {currentLocation.email}
                        </a>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>

              {/* =============================================
                  RIGHT SIDE - FORM
              ============================================= */}

              <div>
                {!submitted ? (
                  <motion.form
                    initial={{
                      opacity: 0,
                      y: 20,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 0.6,
                    }}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    {/* NAME */}

                    <input
                      type="text"
                      name="name"
                      placeholder="Your name"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          name: e.target.value,
                        })
                      }
                      className="w-full border-0 border-b border-[#4a7d68] bg-transparent px-0 py-4 text-sm text-white outline-none transition-colors placeholder:text-[#78a892] focus:border-[#68e9ba] sm:text-base"
                    />

                    {/* EMAIL */}

                    <input
                      type="email"
                      name="email"
                      placeholder="Your email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          email: e.target.value,
                        })
                      }
                      className="w-full border-0 border-b border-[#4a7d68] bg-transparent px-0 py-4 text-sm text-white outline-none transition-colors placeholder:text-[#78a892] focus:border-[#68e9ba] sm:text-base"
                    />

                    {/* MESSAGE */}

                    <textarea
                      name="message"
                      placeholder="Your text"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          message: e.target.value,
                        })
                      }
                      className="w-full resize-none border-0 border-b border-[#4a7d68] bg-transparent px-0 py-4 text-sm text-white outline-none transition-colors placeholder:text-[#78a892] focus:border-[#68e9ba] sm:text-base"
                    />

                    {/* BUTTON */}

                    <div className="pt-5">
                      <button
                        type="submit"
                        disabled={loading}
                        className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-sm font-bold text-[#1f4638] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#68e9ba] disabled:cursor-not-allowed disabled:opacity-70"
                      >
                        {loading ? (
                          <>
                            <span className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-[#1f4638] border-t-transparent" />
                            Please wait...
                          </>
                        ) : (
                          "Let's Get Started"
                        )}
                      </button>
                    </div>
                  </motion.form>
                ) : (
                  /* =========================================
                     SUCCESS MESSAGE
                  ========================================= */

                  <motion.div
                    initial={{
                      opacity: 0,
                      scale: 0.96,
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                    }}
                    className="flex min-h-[300px] flex-col items-center justify-center text-center"
                  >
                    <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-[#68e9ba]/15">
                      <CheckCircle2 className="h-8 w-8 text-[#68e9ba]" />
                    </div>

                    <h3 className="text-2xl font-bold text-white">
                      <span className="text-[#68e9ba]">
                        Thank you!
                      </span>
                    </h3>

                    <p className="mt-3 max-w-md text-sm leading-relaxed text-[#9ecfb8]">
                      Your submission has been received. Our team will
                      get back to you shortly.
                    </p>

                    <button
                      type="button"
                      onClick={resetForm}
                      className="mt-6 rounded-full border border-[#68e9ba] px-6 py-3 text-sm font-semibold text-[#68e9ba] transition-all hover:bg-[#68e9ba] hover:text-[#1f4638]"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                )}
              </div>
            </div>
          </div>

          {/* =================================================
              BOTTOM DIVIDER
          ================================================= */}

          <div className="h-px w-full bg-[#2e5f4a]" />
        </div>
      </section>

      {/* =====================================================
          MAP ANIMATION CSS
      ===================================================== */}

      <style jsx>{`
        @keyframes mapPing {
          0% {
            transform: translate(-50%, -50%) scale(0.6);
            opacity: 0.8;
          }

          70% {
            transform: translate(-50%, -50%) scale(2.5);
            opacity: 0;
          }

          100% {
            transform: translate(-50%, -50%) scale(2.5);
            opacity: 0;
          }
        }

        @keyframes mapPulse {
          0%,
          100% {
            transform: scale(1);
            opacity: 1;
          }

          50% {
            transform: scale(1.25);
            opacity: 0.7;
          }
        }
      `}</style>
    </>
  );
}