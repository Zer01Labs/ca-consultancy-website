import React from 'react';
import Navbar from '@/components/Navbar';
import PricingSection from '@/components/PricingSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { Check, HelpCircle } from 'lucide-react';

export const metadata = {
  title: 'Pricing Plans - Consultant W Strategic Advisory',
  description:
    'Transparent, high-value consulting plans and advisory packages for modern businesses of all sizes.',
};

const faqs = [
  {
    q: 'Can we upgrade or downgrade our advisory package anytime?',
    a: 'Yes, our consulting retainer agreements are flexible. You can adjust your tier at the end of each monthly billing sprint based on your organizational goals.',
  },
  {
    q: 'What is included in the initial onboarding analysis?',
    a: 'Every package starts with a comprehensive 14-point strategic audit examining team velocity, market competition, and technology efficiency.',
  },
  {
    q: 'Do you offer dedicated on-site consultant embedding?',
    a: 'Yes, our Professional and Enterprise tiers include dedicated senior consultants who work directly with your executive leadership on-site or hybrid.',
  },
  {
    q: 'What payment methods and currencies are supported?',
    a: 'We accept global corporate bank wires, major credit cards, and multi-currency invoicing in USD, EUR, GBP, AUD, and JPY.',
  },
];

export default function PricingPage() {
  return (
    <main className="min-h-screen antialiased bg-white">
      <Navbar />

      {/* Hero Banner for Pricing */}
      <section className="relative pt-36 pb-20 sm:pt-44 sm:pb-28 bg-[#1f4638] text-white px-4 sm:px-6 lg:px-12 overflow-hidden">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <span className="inline-block rounded-full bg-[#68e9ba]/20 px-5 py-2 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#68e9ba] mb-6">
            Transparent Pricing
          </span>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold leading-tight tracking-tight max-w-4xl mx-auto">
            Strategic Investment in{' '}
            <span className="font-serif-accent font-medium italic text-[#68e9ba]">
              Predictable Growth
            </span>
          </h1>
          <p className="mt-6 text-base sm:text-xl text-[#9ecfb8] max-w-2xl mx-auto leading-relaxed">
            Select the perfect package designed to address your exact business objectives and accelerate transformation.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/#contact"
              className="rounded-full bg-[#68e9ba] px-8 py-3.5 text-sm sm:text-base font-bold text-[#1f4638] transition-all hover:bg-[#5de0af] hover:scale-105 shadow-lg"
            >
              Request Custom Enterprise Quote
            </Link>
          </div>
        </div>

        {/* Ambient glow background */}
        <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-[#68e9ba]/15 rounded-full blur-3xl pointer-events-none" />
      </section>

      {/* Main Interactive Pricing Section with Video & Purchase Modal */}
      <div className="py-12">
        <PricingSection />
      </div>

      {/* Frequently Asked Questions */}
      <section className="py-20 bg-[#f8faf8] px-4 sm:px-6 lg:px-12 border-t border-gray-100">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-[#1d7a58]">
              Got Questions?
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#39413e] mt-2">
              Frequently Asked <span className="font-serif-accent font-medium italic text-[#1d7a58]">Questions</span>
            </h2>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, idx) => (
              <div key={idx} className="rounded-2xl bg-white p-6 sm:p-8 border border-gray-200 shadow-sm">
                <h3 className="text-lg sm:text-xl font-bold text-[#1f4638] flex items-center gap-3">
                  <HelpCircle className="w-5 h-5 text-[#68e9ba] shrink-0" /> {faq.q}
                </h3>
                <p className="mt-3 text-[#75736b] text-sm sm:text-base leading-relaxed pl-8">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <TestimonialsSection />

      {/* Footer CTA */}
      <Footer />
    </main>
  );
}
