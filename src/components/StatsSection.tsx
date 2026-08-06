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
  { value: 7, suffix: '+', label: 'Years of Experience' },
  { value: 12, suffix: '+', label: 'Industry Partners' },
  { value: 50, suffix: '+', label: 'Expert Consultants' },
  { value: 200, suffix: '+', label: 'Projects Completed' },
];

// World map dots - approximate country positions as % of map
const mapDots = [
  { x: 14, y: 28 },  // Canada/NA
  { x: 24, y: 42 },  // USA
  { x: 30, y: 60 },  // South America N
  { x: 38, y: 72 },  // South America S
  { x: 43, y: 32 },  // UK
  { x: 50, y: 28 },  // Russia
  { x: 46, y: 45 },  // Africa N
  { x: 56, y: 38 },  // Middle East
  { x: 60, y: 28 },  // Central Asia
  { x: 68, y: 40 },  // India
  { x: 72, y: 24 },  // East Asia
  { x: 78, y: 38 },  // SE Asia
  { x: 85, y: 58 },  // Australia
];

export default function StatsSection() {
  return (
    <section id="stats" className="relative bg-[#1f4638] overflow-hidden">
      {/* World Map with dotted effect overlay */}
      <div className="relative h-80 w-full overflow-hidden">
        {/* Dotted world map - SVG background approximation */}
        <div className="absolute inset-0 opacity-30">
          <svg width="100%" height="100%" viewBox="0 0 1000 350" className="text-[#68e9ba]">
            {/* Create a dotted grid pattern representing continents */}
            <defs>
              <pattern id="dot-pattern" x="0" y="0" width="8" height="8" patternUnits="userSpaceOnUse">
                <circle cx="3" cy="3" r="1.2" fill="currentColor" />
              </pattern>
            </defs>
            {/* North America */}
            <rect x="60" y="40" width="200" height="180" fill="url(#dot-pattern)" rx="20" />
            {/* South America */}
            <rect x="150" y="180" width="120" height="140" fill="url(#dot-pattern)" rx="20" />
            {/* Europe */}
            <rect x="380" y="30" width="100" height="100" fill="url(#dot-pattern)" rx="20" />
            {/* Africa */}
            <rect x="380" y="110" width="120" height="180" fill="url(#dot-pattern)" rx="20" />
            {/* Asia */}
            <rect x="480" y="20" width="360" height="180" fill="url(#dot-pattern)" rx="20" />
            {/* SE Asia */}
            <rect x="680" y="140" width="120" height="100" fill="url(#dot-pattern)" rx="20" />
            {/* Australia */}
            <rect x="720" y="220" width="130" height="90" fill="url(#dot-pattern)" rx="20" />
          </svg>
        </div>

        {/* Glowing dots on specific cities */}
        {mapDots.map((dot, idx) => (
          <motion.div
            key={idx}
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.08, duration: 0.4 }}
            className="absolute"
            style={{ left: `${dot.x}%`, top: `${dot.y}%` }}
          >
            <div className="w-2.5 h-2.5 rounded-full bg-[#68e9ba] shadow-[0_0_16px_6px_rgba(104,233,186,0.4)]" />
          </motion.div>
        ))}

        {/* Subtle horizontal divider line */}
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
            <p className="text-6xl font-bold tracking-tight text-white">
              <AnimatedCounter target={stat.value} suffix={stat.suffix} />
            </p>
            <p className="mt-2 text-[#9ecfb8] text-sm font-medium">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
