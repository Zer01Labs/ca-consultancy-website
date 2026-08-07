'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/* ─── Plan data ─── */
const plans = [
  {
    id: 'starter',
    label: 'Starter Pack',
    price: '$45',
    period: '/Month',
    badge: null as string | null,
    description:
      'Each package is designed to address specific business needs, providing clients with tailored solutions for success.',
    features: [
      'Comprehensive business analysis',
      'Customized strategic planning',
      'One-on-one consultation sessions',
      'Quarterly progress reviews',
      'Email support',
    ],
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'basic',
    label: 'Basic Plan',
    price: '$89',
    period: '/Month',
    badge: null as string | null,
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
    id: 'professional',
    label: 'Professional Plan',
    price: '$149',
    period: '/Month',
    badge: 'Most Popular' as string | null,
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
    id: 'enterprise',
    label: 'Enterprise Plan',
    price: '$299',
    period: '/Month',
    badge: 'Best Value' as string | null,
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

/* ─── Purchase Modal ─── */
function PurchaseModal({
  plan,
  onClose,
}: {
  plan: (typeof plans)[0];
  onClose: () => void;
}) {
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1400);
  };

  return (
    <div
      className="fixed inset-0 z-[999] flex items-center justify-center p-4"
      style={{ background: 'rgba(15, 35, 27, 0.72)', backdropFilter: 'blur(8px)' }}
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.88, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.88, y: 40 }}
        transition={{ type: 'spring', stiffness: 300, damping: 28 }}
        className="relative w-full max-w-lg rounded-3xl overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
        style={{ background: 'linear-gradient(145deg, #ffffff 0%, #f0faf5 100%)' }}
      >
        {/* Top accent bar */}
        <div className="h-1.5 w-full" style={{ background: 'linear-gradient(90deg, #1f4638, #52d9a7)' }} />

        {/* Close */}
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 w-9 h-9 rounded-full flex items-center justify-center hover:bg-[#e5f3ed] text-[#1f4638] transition-colors duration-200"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="p-8 sm:p-10">
          {!submitted ? (
            <>
              {/* Header */}
              <div className="mb-7">
                <div className="inline-flex items-center gap-2 bg-[#e5f3ed] text-[#1f4638] text-xs font-bold px-3 py-1.5 rounded-full mb-4 uppercase tracking-wider">
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {plan.label}
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#1a2e25] leading-tight">
                  Get Started with{' '}
                  <span className="font-serif-accent italic text-[#1f5c43]">{plan.label}</span>
                </h3>
                <p className="mt-2 text-[#5c6762] text-sm sm:text-base">
                  Fill in your details and our team will reach out within 24 hours to complete your onboarding.
                </p>
                <div className="mt-4 inline-flex items-baseline gap-1 bg-[#1f4638] text-white px-4 py-2 rounded-xl">
                  <span className="text-2xl font-extrabold">{plan.price}</span>
                  <span className="text-sm font-medium opacity-70">{plan.period}</span>
                </div>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#39413e] mb-1.5 uppercase tracking-wide">
                      Full Name *
                    </label>
                    <input
                      required
                      type="text"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="John Smith"
                      className="w-full px-4 py-3 rounded-xl border border-[rgba(57,65,62,0.18)] bg-white text-[#1a2e25] text-sm placeholder-[#b0b8b4] focus:outline-none focus:ring-2 focus:ring-[#52d9a7] focus:border-transparent transition-all duration-200"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#39413e] mb-1.5 uppercase tracking-wide">
                      Email *
                    </label>
                    <input
                      required
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="john@company.com"
                      className="w-full px-4 py-3 rounded-xl border border-[rgba(57,65,62,0.18)] bg-white text-[#1a2e25] text-sm placeholder-[#b0b8b4] focus:outline-none focus:ring-2 focus:ring-[#52d9a7] focus:border-transparent transition-all duration-200"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#39413e] mb-1.5 uppercase tracking-wide">
                    Company / Organisation
                  </label>
                  <input
                    type="text"
                    value={form.company}
                    onChange={(e) => setForm({ ...form, company: e.target.value })}
                    placeholder="Your company name"
                    className="w-full px-4 py-3 rounded-xl border border-[rgba(57,65,62,0.18)] bg-white text-[#1a2e25] text-sm placeholder-[#b0b8b4] focus:outline-none focus:ring-2 focus:ring-[#52d9a7] focus:border-transparent transition-all duration-200"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#39413e] mb-1.5 uppercase tracking-wide">
                    Message (optional)
                  </label>
                  <textarea
                    rows={3}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell us a bit about your goals..."
                    className="w-full px-4 py-3 rounded-xl border border-[rgba(57,65,62,0.18)] bg-white text-[#1a2e25] text-sm placeholder-[#b0b8b4] focus:outline-none focus:ring-2 focus:ring-[#52d9a7] focus:border-transparent transition-all duration-200 resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 rounded-2xl bg-[#52d9a7] hover:bg-[#43cb99] text-[#1f4638] font-bold text-base transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed disabled:translate-y-0"
                >
                  {loading ? (
                    <>
                      <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                      </svg>
                      Processing…
                    </>
                  ) : (
                    <>
                      Confirm Purchase
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </>
                  )}
                </button>
                <p className="text-center text-[#8a9590] text-xs mt-2">
                  No payment required now — our team will contact you to finalise.
                </p>
              </form>
            </>
          ) : (
            /* Success State */
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="text-center py-6"
            >
              <div className="w-20 h-20 rounded-full bg-[#e5f3ed] flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-[#1f4638]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#1a2e25] mb-3">Request Received!</h3>
              <p className="text-[#5c6762] text-base mb-2">
                Thank you for choosing the <strong className="text-[#1f4638]">{plan.label}</strong>.
              </p>
              <p className="text-[#5c6762] text-sm mb-8">
                Our team will reach out to{' '}
                <strong className="text-[#1a2e25]">{form.email || 'you'}</strong> within 24 hours.
              </p>
              <button
                onClick={onClose}
                className="px-8 py-3 rounded-2xl bg-[#1f4638] hover:bg-[#163327] text-white font-bold text-sm transition-all duration-300"
              >
                Back to Pricing
              </button>
            </motion.div>
          )}
        </div>
      </motion.div>
    </div>
  );
}

/* ─── Main Section ─── */
export default function PricingSection() {
  const [activeTab, setActiveTab] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const plan = plans[activeTab];

  React.useEffect(() => {
    document.body.style.overflow = modalOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [modalOpen]);

  return (
    <>
      <section
        id="pricing"
        className="py-10 sm:py-16 px-8 sm:px-12 lg:px-16"
        style={{ background: 'linear-gradient(to right, #eff7ee, #dbeee4, #cef1e4)' }}
      >
          {/* Section heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-10"
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-normal text-[#2c3531] tracking-tight leading-tight">
              <span className="font-serif-accent italic text-[#1f5c43] font-normal">Pricing Solutions</span>{' '}
              For Success
            </h2>
            <p className="mt-5 text-[#5c6762] text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
              At Consultant W, we redefine consultancy through a dynamic fusion of innovation,
              expertise, and strategic vision. Our dedicated team is committed to delivering tailored
              solutions that transcend traditional consulting boundaries.
            </p>
          </motion.div>

          {/* Tab buttons */}
          <div className="flex flex-wrap justify-center gap-2.5 sm:gap-3 mb-12">
            {plans.map((p, idx) => (
              <button
                key={p.id}
                onClick={() => setActiveTab(idx)}
                className={`px-6 py-3 rounded-xl text-sm sm:text-base font-semibold transition-all duration-300 ${
                  activeTab === idx
                    ? 'bg-[#1f4638] text-white shadow-sm'
                    : 'bg-[#a9cdbf] text-[#2c3531] hover:bg-[#9bbeaf]'
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
              transition={{ duration: 0.35 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center max-w-6xl mx-auto"
            >
              {/* Left: plan details */}
              <div className="lg:col-span-6 flex flex-col justify-center">
                {/* Price & checkmark */}
                <div className="flex items-center gap-3 mb-5">
                  <div className="flex items-baseline">
                    <span className="text-5xl sm:text-6xl font-semibold text-[#2c3531] tracking-tight">
                      {plan.price}
                    </span>
                    {plan.period && (
                      <span className="font-serif-accent italic text-lg sm:text-xl text-[#5c6762] ml-1">
                        {plan.period}
                      </span>
                    )}
                  </div>
                  <div className="w-8 h-8 rounded-full bg-[#1f4638] flex items-center justify-center flex-shrink-0 ml-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>

                {/* Description */}
                <p className="text-[#5c6762] text-base sm:text-lg leading-relaxed mb-6">
                  {plan.description}
                </p>

                {/* Feature list */}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start text-[#2c3531] text-base font-normal">
                      <span className="mr-3 text-[#2c3531] font-bold text-lg leading-none">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Purchase Now */}
                <div>
                  <button
                    id={`purchase-btn-${plan.id}`}
                    onClick={() => setModalOpen(true)}
                    className="px-8 py-3.5 rounded-full bg-[#52d9a7] hover:bg-[#43cb99] text-[#1f4638] font-bold text-base transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5 inline-flex items-center justify-center"
                  >
                    Purchase Now
                  </button>
                </div>
              </div>

              {/* Right: photo */}
              <div className="lg:col-span-6">
                <div className="rounded-3xl overflow-hidden shadow-lg h-[360px] sm:h-[420px] lg:h-[460px] w-full">
                  <img
                    src={plan.image}
                    alt={plan.label}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
      </section>

      {/* Purchase Modal */}
      <AnimatePresence>
        {modalOpen && <PurchaseModal plan={plan} onClose={() => setModalOpen(false)} />}
      </AnimatePresence>
    </>
  );
}
