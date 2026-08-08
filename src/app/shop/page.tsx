'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { ShoppingBag, CheckCircle, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const storeProducts = [
  {
    id: 1,
    name: 'Strategic Advisory Package',
    price: 45,
    tag: 'Best Seller',
    description: 'Comprehensive business diagnostics, market telemetry analysis, and execution framework for scaling teams.',
    features: ['14-Point Strategic Audit', 'Market Positioning Review', 'Email Advisory Support'],
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 2,
    name: 'Digital Transformation Audit',
    price: 90,
    tag: 'High Impact',
    description: 'Complete digital ecosystem architecture review, AI integration roadmap, and cloud modernization strategy.',
    features: ['AI Readiness Assessment', 'Tech Stack Optimization', 'Priority 24/7 Support'],
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 3,
    name: 'Leadership Executive Coaching',
    price: 145,
    tag: 'Executive',
    description: 'Dedicated one-on-one leadership sprint sessions with veteran industry advisors to overcome operational friction.',
    features: ['Bi-Weekly 1:1 Executive Sessions', 'Culture Alignment Blueprint', 'Direct Advisor Line'],
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 4,
    name: 'Enterprise Acceleration Suite',
    price: 190,
    tag: 'Enterprise',
    description: 'Full-spectrum enterprise transformation package including on-site consultant embedding and board advisory.',
    features: ['Embedded Advisory Partner', 'Quantitative Risk Modeling', 'Full Retainer Access'],
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=600&q=80',
  },
];

export default function ShopPage() {
  const [purchasedItem, setPurchasedItem] = useState<typeof storeProducts[0] | null>(null);

  return (
    <main className="min-h-screen antialiased bg-white">
      <Navbar />

      {/* Hero Banner for Shop */}
      <section className="relative pt-36 pb-20 sm:pt-44 sm:pb-28 bg-[#1f4638] text-white px-4 sm:px-6 lg:px-12 overflow-hidden">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <span className="inline-block rounded-full bg-[#68e9ba]/20 px-5 py-2 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#68e9ba] mb-6">
            Advisory Store
          </span>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold leading-tight tracking-tight max-w-4xl mx-auto">
            Consulting Packages &{' '}
            <span className="font-serif-accent font-medium italic text-[#68e9ba]">
              Strategic Solutions
            </span>
          </h1>
          <p className="mt-6 text-base sm:text-xl text-[#9ecfb8] max-w-2xl mx-auto leading-relaxed">
            Order pre-packaged advisory frameworks, leadership audits, and enterprise sprints ready for instant deployment.
          </p>
        </div>

        {/* Ambient glow background */}
        <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-[#68e9ba]/15 rounded-full blur-3xl pointer-events-none" />
      </section>

      {/* Product Catalog Grid */}
      <section className="py-24 bg-[#f8faf8] px-4 sm:px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {storeProducts.map((product) => (
              <motion.div
                key={product.id}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className="rounded-[28px] bg-white p-6 border border-gray-200 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-48 w-full rounded-2xl overflow-hidden mb-6 bg-gray-100">
                    <img
                      src={product.image}
                      alt={product.name}
                      referrerPolicy="no-referrer"
                      className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <span className="absolute top-3 left-3 bg-[#68e9ba] text-[#1f4638] text-xs font-extrabold px-3 py-1 rounded-full shadow-md">
                      {product.tag}
                    </span>
                  </div>

                  <div className="flex items-baseline justify-between mb-2">
                    <h3 className="text-xl font-bold text-[#1f4638]">{product.name}</h3>
                  </div>

                  <p className="text-2xl font-extrabold text-[#1d7a58] mb-3">
                    ${product.price} <span className="text-xs font-normal text-gray-500">/ package</span>
                  </p>

                  <p className="text-xs sm:text-sm text-[#75736b] leading-relaxed mb-6">
                    {product.description}
                  </p>

                  <div className="space-y-2 border-t border-gray-100 pt-4 mb-6">
                    {product.features.map((feat, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-gray-700">
                        <CheckCircle className="w-3.5 h-3.5 text-[#1d7a58]" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => setPurchasedItem(product)}
                  className="w-full rounded-full bg-[#1f4638] py-3 text-sm font-bold text-white transition hover:bg-[#16362b] shadow-md flex items-center justify-center gap-2 cursor-pointer hover:scale-[1.02]"
                >
                  <ShoppingBag className="w-4 h-4" /> Order Package
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Checkout Modal */}
      <AnimatePresence>
        {purchasedItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setPurchasedItem(null)}
              className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            />
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-md rounded-[28px] bg-white p-7 text-[#39413e] shadow-2xl z-10"
            >
              <h3 className="text-2xl font-bold text-[#1f4638]">Order Confirmation</h3>
              <p className="text-sm text-gray-600 mt-1">
                You selected <strong>{purchasedItem.name}</strong> for <strong>${purchasedItem.price}</strong>.
              </p>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  alert(`Thank you! Order for ${purchasedItem.name} has been processed.`);
                  setPurchasedItem(null);
                }}
                className="mt-6 space-y-4"
              >
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Your Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Jane Doe"
                    className="w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm focus:border-[#1f4638] outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Company Email</label>
                  <input
                    type="email"
                    required
                    placeholder="jane@company.com"
                    className="w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm focus:border-[#1f4638] outline-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-full bg-[#1f4638] py-3.5 text-sm font-bold text-white hover:bg-[#16362b] transition-all mt-2"
                >
                  Confirm & Purchase • ${purchasedItem.price}
                </button>
                <button
                  type="button"
                  onClick={() => setPurchasedItem(null)}
                  className="w-full text-center text-xs text-gray-500 hover:text-gray-900 py-1"
                >
                  Cancel
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Footer CTA */}
      <Footer />
    </main>
  );
}
