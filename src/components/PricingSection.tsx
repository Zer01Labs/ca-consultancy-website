'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const plans = [
  {
    id: 'Tab 1',
    tabTitle: 'Starter Pack',
    price: '$45',
    period: '/Month',
    isRev: false,
    description:
      'Each package is designed to address specific business needs, providing clients with tailored solutions for success.',
    features: [
      'Comprehensive business analysis',
      'Customized strategic planning',
      'One-on-one consultation sessions',
      'Quarterly progress reviews',
      'Email support',
    ],
    poster:
      'https://cdn.prod.website-files.com/656363843a32e4fa57eb52b7/6565edcd8d48883832f81b98_production_id_4484263%20(2160p)-poster-00001.jpg',
    videoMp4:
      'https://cdn.prod.website-files.com/656363843a32e4fa57eb52b7/6565edcd8d48883832f81b98_production_id_4484263%20(2160p)-transcode.mp4',
    videoWebm:
      'https://cdn.prod.website-files.com/656363843a32e4fa57eb52b7/6565edcd8d48883832f81b98_production_id_4484263%20(2160p)-transcode.webm',
  },
  {
    id: 'Tab 2',
    tabTitle: 'Basic Plan',
    price: '$90',
    period: '/Month',
    isRev: true,
    description:
      'Each package is designed to address specific business needs, providing clients with tailored solutions for success.',
    features: [
      'Digital transformation roadmap',
      'Innovation advisory sessions',
      'Technology integration strategy',
      'Monthly progress meetings',
      'Priority email and phone support',
    ],
    poster:
      'https://cdn.prod.website-files.com/656363843a32e4fa57eb52b7/65659cde7307f8a23359c8db_pexels%20nataliya%20vaitkevich%207172715%201080p-poster-00001.jpg',
    videoMp4:
      'https://cdn.prod.website-files.com/656363843a32e4fa57eb52b7/65659cde7307f8a23359c8db_pexels%20nataliya%20vaitkevich%207172715%201080p-transcode.mp4',
    videoWebm:
      'https://cdn.prod.website-files.com/656363843a32e4fa57eb52b7/65659cde7307f8a23359c8db_pexels%20nataliya%20vaitkevich%207172715%201080p-transcode.webm',
  },
  {
    id: 'Tab 3',
    tabTitle: 'Professional Plan',
    price: '$145',
    period: '/Month',
    isRev: false,
    description:
      'Each package is designed to address specific business needs, providing clients with tailored solutions for success.',
    features: [
      'Leadership training workshops',
      'Individual leadership coaching sessions',
      'Team-building exercises',
      'Performance assessments',
      'Ongoing leadership support',
    ],
    poster:
      'https://cdn.prod.website-files.com/656363843a32e4fa57eb52b7/6565edcd8d48883832f81b98_production_id_4484263%20(2160p)-poster-00001.jpg',
    videoMp4:
      'https://cdn.prod.website-files.com/656363843a32e4fa57eb52b7/6565edcd8d48883832f81b98_production_id_4484263%20(2160p)-transcode.mp4',
    videoWebm:
      'https://cdn.prod.website-files.com/656363843a32e4fa57eb52b7/6565edcd8d48883832f81b98_production_id_4484263%20(2160p)-transcode.webm',
  },
  {
    id: 'Tab 4',
    tabTitle: 'Enterprise Plan',
    price: '$190',
    period: '/Month',
    isRev: true,
    description:
      'Each package is designed to address specific business needs, providing clients with tailored solutions for success.',
    features: [
      'Strategic planning and execution',
      'Operational efficiency analysis',
      'Financial consulting and planning',
      'Change management strategy',
      'Full access to all consulting services',
    ],
    poster:
      'https://cdn.prod.website-files.com/656363843a32e4fa57eb52b7/65659cde7307f8a23359c8db_pexels%20nataliya%20vaitkevich%207172715%201080p-poster-00001.jpg',
    videoMp4:
      'https://cdn.prod.website-files.com/656363843a32e4fa57eb52b7/65659cde7307f8a23359c8db_pexels%20nataliya%20vaitkevich%207172715%201080p-transcode.mp4',
    videoWebm:
      'https://cdn.prod.website-files.com/656363843a32e4fa57eb52b7/65659cde7307f8a23359c8db_pexels%20nataliya%20vaitkevich%207172715%201080p-transcode.webm',
  },
];

export default function PricingSection() {
  const [activeTab, setActiveTab] = useState(0);
  const [selectedPlanModal, setSelectedPlanModal] =
    useState<(typeof plans)[0] | null>(null);

  const plan = plans[activeTab];

  return (
    <section className="w-full bg-white px-3 sm:px-6 lg:px-8">
      {/* Main Pricing Card */}
      <div
        className="relative mx-auto max-w-[1520px] overflow-hidden rounded-[36px] sm:rounded-[48px] px-6 sm:px-10 lg:px-16 py-12 sm:py-14 lg:py-16"
        style={{
          background:
            'linear-gradient(110deg, #fff8eb 0%, #eef8ed 48%, #d8f1e3 100%)',
        }}
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-[720px] text-center"
        >
          <h2 className="font-serif text-[38px] leading-[1.05] sm:text-[48px] lg:text-[50px] tracking-[-1.5px] text-[#3a403e]">
            <span className="italic font-medium text-[#21815f]">
              Pricing Solutions
            </span>{' '}
            For Success
          </h2>

          <p className="mx-auto mt-5 max-w-[680px] font-serif text-[15px] sm:text-[16px] leading-[1.55] text-[#3f4743]">
            At Consultant W, we redefine consultancy through a dynamic fusion
            of innovation, expertise, and strategic vision. Our dedicated team
            is committed to delivering tailored solutions that transcend
            traditional consulting boundaries.
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="mt-10 sm:mt-12 flex justify-center">
          <div className="flex flex-wrap justify-center gap-1">
            {plans.map((item, index) => {
              const active = activeTab === index;

              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(index)}
                  className={`
                    min-h-[40px]
                    px-4 sm:px-5
                    rounded-[5px]
                    text-[13px] sm:text-[14px]
                    font-semibold
                    transition-all duration-300
                    cursor-pointer
                    ${
                      active
                        ? 'bg-[#1f4638] text-white shadow-sm'
                        : 'bg-[#a9c5b8] text-[#1f4638] hover:bg-[#96b7a8]'
                    }
                  `}
                >
                  {item.tabTitle}
                </button>
              );
            })}
          </div>
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={plan.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35 }}
            className="mt-12 sm:mt-14"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
              {/* LEFT CONTENT */}
              <div
                className={`${
                  plan.isRev ? 'lg:order-2' : 'lg:order-1'
                }`}
              >
                {/* Price Row */}
                <div className="flex items-center justify-between mb-7">
                  <h3 className="font-sans text-[44px] sm:text-[50px] lg:text-[48px] leading-none font-medium text-[#39413e] tracking-[-1px]">
                    {plan.price}
                    <span className="ml-1 font-serif italic text-[15px] sm:text-[17px] text-[#4e5954]">
                      {plan.period}
                    </span>
                  </h3>

                  {/* Check Icon */}
                  <div className="mr-3 flex h-7 w-7 items-center justify-center rounded-full bg-[#1f4d3c]">
                    <svg
                      width="13"
                      height="13"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M5 12.5L10 17L19 7"
                        stroke="white"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>

                {/* Description */}
                <p className="max-w-[540px] font-serif text-[15px] sm:text-[16px] leading-[1.65] text-[#424b47]">
                  {plan.description}
                </p>

                {/* Features */}
                <ul className="mt-7 space-y-3">
                  {plan.features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-3 font-serif text-[15px] sm:text-[16px] text-[#3d4642]"
                    >
                      <span className="text-[18px] leading-none">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Button */}
                <button
                  onClick={() => setSelectedPlanModal(plan)}
                  className="mt-8 rounded-[6px] bg-[#1f4d3c] px-7 py-3.5 text-[13px] font-semibold uppercase tracking-[1px] text-white transition-all duration-300 hover:bg-[#16392d] hover:-translate-y-0.5"
                >
                  Purchase Now
                </button>
              </div>

              {/* RIGHT VIDEO */}
              <div
                className={`${
                  plan.isRev ? 'lg:order-1' : 'lg:order-2'
                }`}
              >
                <div className="relative h-[300px] sm:h-[360px] lg:h-[390px] w-full overflow-hidden rounded-[25px] sm:rounded-[30px]">
                  <video
                    key={plan.id}
                    autoPlay
                    loop
                    muted
                    playsInline
                    disablePictureInPicture
                    disableRemotePlayback
                    controlsList="nodownload nopictureinpicture noremoteplayback"
                    poster={plan.poster}
                    className="h-full w-full object-cover pointer-events-none"
                  >
                    <source src={plan.videoMp4} type="video/mp4" />
                    <source src={plan.videoWebm} type="video/webm" />
                  </video>

                  <div className="absolute inset-0 bg-gradient-to-t from-[#193b2f]/25 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Bottom subtle gradient */}
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#1f4638]/5 to-transparent" />
      </div>

      {/* Purchase Modal */}
      <AnimatePresence>
        {selectedPlanModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPlanModal(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-lg rounded-[28px] bg-white p-7 sm:p-9 shadow-2xl"
            >
              {/* Close */}
              <button
                onClick={() => setSelectedPlanModal(null)}
                className="absolute right-5 top-5 text-2xl text-gray-400 hover:text-gray-700"
              >
                ×
              </button>

              <h3 className="pr-8 text-2xl font-bold text-[#151b19]">
                Subscribe to {selectedPlanModal.tabTitle}
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-[#57605c]">
                You chose the{' '}
                <strong className="text-[#1f4638]">
                  {selectedPlanModal.price}
                  {selectedPlanModal.period}
                </strong>{' '}
                package. Fill out your details below to get started.
              </p>

              <form
                onSubmit={(e) => {
                  e.preventDefault();

                  alert(
                    `Thank you! Order for ${selectedPlanModal.tabTitle} placed successfully.`
                  );

                  setSelectedPlanModal(null);
                }}
                className="mt-6 space-y-4"
              >
                <div>
                  <label className="mb-1 block text-xs font-semibold text-gray-700">
                    Full Name
                  </label>

                  <input
                    type="text"
                    required
                    placeholder="Enter your name"
                    className="w-full rounded-full border border-gray-200 px-4 py-3 text-sm outline-none focus:border-[#1f4638]"
                  />
                </div>

                <div>
                  <label className="mb-1 block text-xs font-semibold text-gray-700">
                    Work Email
                  </label>

                  <input
                    type="email"
                    required
                    placeholder="you@company.com"
                    className="w-full rounded-full border border-gray-200 px-4 py-3 text-sm outline-none focus:border-[#1f4638]"
                  />
                </div>

                <div>
                  <label className="mb-1 block text-xs font-semibold text-gray-700">
                    Company / Organization
                  </label>

                  <input
                    type="text"
                    required
                    placeholder="Your company name"
                    className="w-full rounded-full border border-gray-200 px-4 py-3 text-sm outline-none focus:border-[#1f4638]"
                  />
                </div>

                <button
                  type="submit"
                  className="mt-2 w-full rounded-full bg-[#1f4638] py-4 text-sm font-bold text-white transition hover:bg-[#153429]"
                >
                  Complete Order • {selectedPlanModal.price}
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}