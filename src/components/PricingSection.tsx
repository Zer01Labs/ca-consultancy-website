'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const plans = [
  {
    label: 'Starter Pack',
    price: '$45',
    period: '/Month',
    description:
      'Each package is designed to address specific business needs, providing clients with tailored solutions for success.',
    features: [
      'Comprehensive business analysis',
      'Customized strategic planning',
      'One-on-one consultation sessions',
      'Quarterly progress reviews',
      'Email support',
    ],
    image: 'https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?auto=format&fit=crop&w=800&q=80',
  },
  {
    label: 'Basic Plan',
    price: '$89',
    period: '/Month',
    description:
      'An essential plan for growing businesses ready to scale with expert guidance, proven strategies, and structured consultation.',
    features: [
      'All Starter features',
      'Market entry strategy',
      'Monthly performance reviews',
      'Priority email & chat support',
      'Team workshops (2/quarter)',
    ],
    image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=800&q=80',
  },
  {
    label: 'Professional Plan',
    price: '$149',
    period: '/Month',
    description:
      'Advanced consulting for companies aiming to lead in their industry through deep strategic analysis and continuous advisory.',
    features: [
      'All Basic features',
      'Competitive intelligence reports',
      'Dedicated account manager',
      'Bi-weekly strategy calls',
      'Custom dashboards',
    ],
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80',
  },
  {
    label: 'Enterprise Plan',
    price: 'Custom',
    period: '',
    description:
      'Bespoke enterprise solutions designed for large organizations that require comprehensive, full-scale consulting partnerships.',
    features: [
      'Unlimited consulting hours',
      'On-site visits',
      'C-suite advisory sessions',
      'Custom SLA & reporting',
      'Full team integration support',
    ],
    image: 'https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?auto=format&fit=crop&w=800&q=80',
  },
];

export default function PricingSection() {
  const [activeTab, setActiveTab] = useState(0);
  const plan = plans[activeTab];

  return (
    <section id="pricing" className="bg-[#d5ede4] py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <p className="text-sm font-semibold text-[#1d7a58] uppercase tracking-widest mb-3">Our Pricing</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#39413e] leading-snug max-w-3xl mx-auto">
            Tailored packages for{' '}
            <span className="font-serif-accent italic text-[#1d7a58]">Business Excellence</span>
          </h2>
          <p className="mt-4 text-[#75736b] max-w-xl mx-auto text-base">
            Explore our comprehensive pricing plans crafted to deliver exceptional consulting
            solutions that transcend traditional consulting boundaries.
          </p>
        </motion.div>

        {/* Tab buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {plans.map((p, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTab(idx)}
              className={`px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 ${
                activeTab === idx
                  ? 'bg-[#1f4638] text-white shadow-md'
                  : 'bg-[#c4ddd5] text-[#39413e] hover:bg-[#b3cec4]'
              }`}
            >
              {p.label}
            </button>
          ))}
        </div>

        {/* Plan content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            {/* Left: plan details */}
            <div>
              <div className="flex items-start gap-4 mb-5">
                <div>
                  <span className="text-6xl font-bold text-[#39413e]">{plan.price}</span>
                  {plan.period && (
                    <span className="text-xl font-serif-accent italic text-[#75736b]">
                      {plan.period}
                    </span>
                  )}
                </div>
                <div className="w-10 h-10 rounded-full bg-[#1f4638] flex items-center justify-center mt-3 flex-shrink-0">
                  <svg className="w-5 h-5 text-[#68e9ba] fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>

              <p className="text-[#75736b] text-base leading-relaxed mb-8">{plan.description}</p>

              <ul className="space-y-3 mb-10">
                {plan.features.map((f, i) => (
                  <li key={i} className="flex items-center gap-2 text-[#39413e] text-base">
                    <span className="text-[#1d7a58] font-bold">•</span>
                    {f}
                  </li>
                ))}
              </ul>

              <button className="px-8 py-4 rounded-full bg-[#68e9ba] text-[#1f4638] font-bold text-sm hover:bg-[#4dd9a0] transition-all duration-300 hover:-translate-y-0.5 shadow-md">
                Purchase Now
              </button>
            </div>

            {/* Right: photo */}
            <div className="rounded-2xl overflow-hidden h-[420px]">
              <img
                src={plan.image}
                alt={plan.label}
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
