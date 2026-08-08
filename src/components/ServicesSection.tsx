'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const servicesList = [
  {
    id: 'strategic-planning',
    title: 'Strategic Planning',
  },
  {
    id: 'business-development',
    title: 'Business Development',
  },
  {
    id: 'change-management',
    title: 'Change Management',
  },
];

export default function ServicesSection() {
  const [activeService, setActiveService] = useState(servicesList[0].id);
  const [hoveredService, setHoveredService] = useState<string | null>(null);

  return (
    <section id="services" className="py-24 bg-white text-[#39413e] relative overflow-hidden border-t border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-20 items-center">

          {/* Left Column: Text & Service Links */}
          <div className="flex flex-col">
            <h2 className="text-4xl sm:text-5xl lg:text-[52px] font-bold text-[#39413e] mb-6 leading-tight">
              Explore Our<br />
              <span className="font-serif-accent italic text-[#1d7a58]">Best Service</span>
            </h2>
            <p className="text-[#75736b] text-[17px] leading-[1.8] max-w-[420px] mb-12">
              Our best services are meticulously crafted to provide optimal solutions tailored to your unique business needs. Elevate your strategies with Consultant W.
            </p>

            <div className="flex flex-col border-t border-gray-200" onMouseLeave={() => setHoveredService(null)}>
              {servicesList.map((service) => {
                const isHovered = hoveredService === service.id;
                const isActive = activeService === service.id;
                return (
                  <Link
                    key={service.id}
                    href="#contact"
                    onMouseEnter={() => {
                      setActiveService(service.id);
                      setHoveredService(service.id);
                    }}
                    className={`group cursor-pointer border-b border-gray-200 py-6 px-4 flex items-center justify-between transition-all duration-300 ${
                      isActive || isHovered
                        ? 'bg-gradient-to-r from-[#68e9ba]/25 to-transparent'
                        : 'bg-transparent'
                    }`}
                  >
                    <h3 className={`text-[20px] font-semibold transition-colors ${isActive ? 'text-[#1d7a58]' : 'text-[#39413e]'}`}>
                      {service.title}
                    </h3>
                    <motion.div
                      animate={{ x: isHovered ? 4 : 0 }}
                      className="text-[#1d7a58]"
                    >
                      <ArrowRight className="w-5 h-5" strokeWidth={2.5} />
                    </motion.div>
                  </Link>
                );
              })}
            </div>

            <div className="mt-8">
              <Link
                href="#contact"
                className="btn-webflow-mint inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-bold text-sm shadow-md hover:shadow-lg transition-all"
              >
                Inquire About {servicesList.find((s) => s.id === activeService)?.title || 'Services'} <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right Column: Large Video Container */}
          <div className="relative h-[550px] lg:h-[650px] w-full rounded-[2rem] overflow-hidden shadow-sm bg-gray-100">
            <video
              src="/business-video.mp4"
              autoPlay
              loop
              muted
              playsInline
              disablePictureInPicture
              controlsList="nodownload nofullscreen noremoteplayback"
              className="w-full h-full object-cover pointer-events-none"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
