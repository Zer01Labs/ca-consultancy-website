'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const servicesList = [
  {
    id: 'strategic-planning',
    title: 'Strategic Planning',
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'business-development',
    title: 'Business Development',
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'change-management',
    title: 'Change Management',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80',
  },
];

export default function BestServices() {
  const [activeService, setActiveService] = useState(servicesList[0].id);

  const activeImage = servicesList.find(s => s.id === activeService)?.image;

  return (
    <section className="py-24 bg-white text-[#39413e] relative border-t border-black/5 overflow-hidden">
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

            <div className="flex flex-col">
              {servicesList.map((service) => {
                const isActive = activeService === service.id;
                return (
                  <div
                    key={service.id}
                    onMouseEnter={() => setActiveService(service.id)}
                    onClick={() => setActiveService(service.id)}
                    className={`group cursor-pointer border-b border-gray-200 py-6 px-4 flex items-center justify-between transition-all duration-300 ${
                      isActive 
                        ? 'bg-gradient-to-r from-[#68e9ba]/25 to-transparent' 
                        : 'hover:bg-gray-50'
                    }`}
                  >
                    <h3 className="text-[20px] font-semibold text-[#39413e]">{service.title}</h3>
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="text-[#39413e]"
                      >
                        <ArrowRight className="w-5 h-5" strokeWidth={2.5} />
                      </motion.div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Large Image Container */}
          <div className="relative h-[550px] lg:h-[650px] w-full rounded-3xl overflow-hidden shadow-sm">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService}
                initial={{ opacity: 0, scale: 1.02 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <img
                  src={activeImage}
                  alt="Service preview"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
