'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

// Counter component that animates from 0 to target
function AnimatedCounter({ target, suffix = '' }: { target: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const duration = 2000;
    const start = Date.now();
    const timer = setInterval(() => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress >= 1) clearInterval(timer);
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

const stats = [
  { value: 20, suffix: 'k+', label: 'Happy customers worldwide' },
  { value: 12, suffix: '+', label: 'Years of work experience' },
  { value: 50, suffix: '+', label: 'Creativity & passionate members' },
  { value: 200, suffix: '+', label: 'Successfully finished projects' },
];

// City dots: [x%, y%] relative to the map container
const mapDots = [
  { x: 10, y: 22 },  // Alaska/Canada
  { x: 17, y: 38 },  // West USA
  { x: 22, y: 48 },  // Mexico
  { x: 28, y: 62 },  // Brazil N
  { x: 24, y: 78 },  // Brazil S
  { x: 42, y: 20 },  // UK/Ireland
  { x: 47, y: 28 },  // Central Europe
  { x: 50, y: 18 },  // Scandinavia
  { x: 44, y: 45 },  // West Africa
  { x: 50, y: 55 },  // East Africa
  { x: 53, y: 35 },  // Middle East
  { x: 58, y: 22 },  // Russia
  { x: 63, y: 40 },  // India
  { x: 70, y: 18 },  // China
  { x: 76, y: 30 },  // Japan/Korea
  { x: 73, y: 52 },  // SE Asia
  { x: 80, y: 48 },  // Philippines
  { x: 84, y: 68 },  // Australia
  { x: 90, y: 25 },  // East Russia
];

export default function StatsSection() {
  return (
    <>
      <style>{`
        @keyframes ping-dot {
          0% { transform: scale(1); opacity: 0.75; }
          70% { transform: scale(3); opacity: 0; }
          100% { transform: scale(3); opacity: 0; }
        }
        .dot-ping { animation: ping-dot 2.2s cubic-bezier(0, 0, 0.2, 1) infinite; }
      `}</style>
      <section id="stats" className="relative bg-[#1f4638] overflow-hidden rounded-t-[36px]">

        {/* World Map – accurate continent shapes via clipPath + dot grid */}
        <div className="relative h-80 w-full overflow-hidden">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 1000 380"
            preserveAspectRatio="xMidYMid slice"
            className="absolute inset-0"
          >
            <defs>
              {/* Fine dot grid */}
              <pattern id="dots" x="0" y="0" width="9" height="9" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1.4" fill="#68e9ba" />
              </pattern>

              {/* Continent clip paths */}
              <clipPath id="world-clip">
                {/* North America */}
                <polygon points="
                  68,18 105,12 145,8 190,15 230,20 255,30
                  275,55 280,80 265,110 250,140 235,175
                  215,210 200,240 185,265 165,275
                  145,265 130,250 115,235 100,215
                  85,190 75,165 65,140 60,110
                  55,80 58,50 68,18" />
                {/* Greenland */}
                <polygon points="290,5 355,5 370,30 360,55 330,62 295,52 278,32" />
                {/* Central America */}
                <polygon points="180,268 215,262 220,285 210,305 195,315 178,305 172,285" />
                {/* South America */}
                <polygon points="175,310 220,302 250,315 268,345 272,380 265,415 248,440 225,455 195,458 168,445 148,420 138,390 138,360 148,330 162,315" />
                {/* Europe */}
                <polygon points="385,22 420,15 455,12 490,18 508,32 515,50 510,68 505,88 495,105 480,118 462,128 440,132 418,125 400,112 385,95 378,72 378,48" />
                {/* Scandinavia bump */}
                <polygon points="430,10 465,8 478,20 470,35 448,38 430,28" />
                {/* Africa */}
                <polygon points="382,128 415,122 450,118 490,120 520,128 538,155 542,190 538,228 528,268 515,310 498,348 478,372 455,380 430,378 408,365 390,340 374,305 364,268 360,228 363,188 370,155" />
                {/* Middle East / Arabian Peninsula */}
                <polygon points="508,92 545,88 575,95 592,118 598,145 585,168 565,175 542,170 520,158 510,138 506,115" />
                {/* Asia main */}
                <polygon points="515,15 590,10 660,8 730,10 795,12 850,18 905,28 940,45 955,70 950,100 940,128 920,152 895,175 860,195 820,210 780,225 740,232 700,235 660,230 620,222 580,210 548,195 525,178 510,155 505,128 505,95 510,60 515,35" />
                {/* Indian Subcontinent */}
                <polygon points="592,168 630,162 660,168 670,195 665,225 648,248 622,260 600,252 582,232 578,205 582,182" />
                {/* SE Asia peninsula */}
                <polygon points="660,228 700,222 725,235 730,262 720,285 700,298 678,290 660,270 655,248" />
                {/* SE Asia islands (Sumatra/Java/Borneo) */}
                <polygon points="665,295 710,288 745,298 762,318 758,338 728,342 695,332 668,318" />
                {/* Philippines */}
                <polygon points="758,248 785,242 800,255 798,278 782,288 762,280 752,262" />
                {/* Japan */}
                <polygon points="878,95 905,88 925,98 928,120 915,135 892,135 875,120" />
                {/* Australia */}
                <polygon points="728,288 798,282 848,285 888,295 910,322 915,355 905,385 880,408 848,418 808,420 768,412 738,395 718,368 712,338 718,308" />
                {/* New Zealand */}
                <polygon points="940,358 960,348 970,368 965,392 948,400 935,385 934,368" />
              </clipPath>
            </defs>

            {/* Dot-filled continent map */}
            <rect
              x="0" y="0" width="1000" height="380"
              fill="url(#dots)"
              clipPath="url(#world-clip)"
              opacity="0.35"
            />
          </svg>

          {/* Glowing pulsing city dots */}
          {mapDots.map((dot, idx) => (
            <motion.div
              key={idx}
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.07, duration: 0.35 }}
              className="absolute"
              style={{ left: `${dot.x}%`, top: `${dot.y}%`, transform: 'translate(-50%,-50%)' }}
            >
              {/* Ping ring */}
              <span
                className="dot-ping absolute rounded-full bg-[#68e9ba]"
                style={{
                  width: '12px', height: '12px',
                  top: '-1px', left: '-1px',
                  animationDelay: `${(idx * 0.28) % 2.2}s`,
                }}
              />
              {/* Core dot */}
              <div className="relative w-2.5 h-2.5 rounded-full bg-[#68e9ba] shadow-[0_0_10px_4px_rgba(104,233,186,0.55)]" />
            </motion.div>
          ))}

          {/* Divider */}
          <div className="absolute bottom-0 left-0 right-0 h-px bg-[#2e5f4a]" />
        </div>

        {/* Stats counters */}
        <div className="grid grid-cols-2 sm:grid-cols-4 border-t border-[#2e5f4a]">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`px-8 py-10 text-white ${idx < stats.length - 1 ? 'border-r border-[#2e5f4a]' : ''}`}
            >
              <p className="text-7xl font-serif-accent italic font-normal tracking-tight text-white">
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-3 text-[#9ecfb8] text-sm font-normal leading-snug">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}

