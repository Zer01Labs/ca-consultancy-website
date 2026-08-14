'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Clock, Share2, ArrowRight } from 'lucide-react';

const featuredPost = {
  tag: 'Tax Advisory',
  title: 'Navigating GST Updates & Corporate Tax Compliance in 2026',
  excerpt:
    "Discover essential tax planning strategies, regulatory compliance updates, and financial safeguards for growing enterprises on Rafa & Company's financial insights blog.",
  fullContent:
    "As tax laws and statutory compliance rules evolve, corporate enterprises must adapt their tax management frameworks. In this comprehensive guide, our senior Chartered Accountants break down actionable strategies for direct & indirect tax optimization, statutory audit readiness, and maintaining robust financial governance.",
  image:
    'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1200&q=80',
  date: 'January 15, 2026',
  readTime: '6 min read',
};

const sidePosts = [
  {
    tag: 'Statutory Audit',
    title: 'Key Audit Checklists for Business Financial Integrity',
    excerpt: 'Essential internal controls and statutory audit frameworks every growing firm should implement.',
    fullContent:
      'Independent audits provide transparency and stakeholder confidence. Our audit team outlines the top financial checklists to review before your annual statutory audit.',
    image:
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80',
    date: 'January 10, 2026',
    readTime: '4 min read',
  },
  {
    tag: 'CFO Insights',
    title: 'How Virtual CFOs Accelerate Corporate Growth',
    excerpt: 'Leveraging strategic CFO guidance for cash flow management, budgeting, and capital allocation.',
    fullContent:
      'Virtual CFO advisory allows emerging companies to access executive-level financial intelligence, financial modeling, and risk mitigation without full-time executive overhead.',
    image:
      'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80',
    date: 'December 28, 2025',
    readTime: '5 min read',
  },
  {
    tag: 'Corporate Law',
    title: 'ROC Compliance & Corporate Governance Frameworks',
    excerpt: 'Step-by-step compliance requirements for private limited companies and corporate entities.',
    fullContent:
      'Staying fully compliant with Registrar of Companies (ROC) regulations, statutory filings, and director disclosures protects your business from penalties and regulatory friction.',
    image:
      'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80',
    date: 'December 18, 2025',
    readTime: '7 min read',
  },
  {
    tag: 'Tax Planning',
    title: 'Maximizing Legal Tax Savings for Enterprises',
    excerpt: 'Practical insights on deductions, exemptions, and strategic financial structuring.',
    fullContent:
      'Proactive, legal tax planning is a critical driver of business profitability. Explore how structured financial planning retains more working capital within your business.',
    image:
      'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80',
    date: 'December 05, 2025',
    readTime: '5 min read',
  },
];

export default function BlogSection() {
  const [selectedArticle, setSelectedArticle] = useState<typeof featuredPost | null>(null);

  return (
    <section id="blog" className="w-full bg-white py-14 sm:py-18 lg:py-20">
      <div className="mx-auto max-w-[1520px] px-4 sm:px-6 lg:px-12">
        {/* Header */}
        <div className="mb-10 sm:mb-14 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-[#39413e] leading-snug"
          >
            <span className="font-serif-accent font-normal italic text-[#1d7a58]">
              Read our CA insights
            </span>{' '}
            and get
            <br className="hidden sm:block" />
            {' '}expert financial advice
          </motion.h2>
        </div>

        {/* Blog Grid - Equal Heights via items-stretch */}
        <div className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-[1.12fr_1fr] lg:gap-8">
          {/* =========================
              LEFT: FEATURED BLOG (Clickable)
          ========================== */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            onClick={() => setSelectedArticle(featuredPost)}
            className="group relative flex h-full min-h-[520px] w-full flex-col justify-end overflow-hidden rounded-[28px] sm:rounded-[36px] bg-[#eef5f1] cursor-pointer"
          >
            {/* Background Image */}
            <img
              src={featuredPost.image}
              alt={featuredPost.title}
              referrerPolicy="no-referrer"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />

            {/* Bottom-Left White Card */}
            <div className="relative z-10 w-full sm:w-[94%] lg:w-[90%] rounded-tr-[32px] sm:rounded-tr-[40px] rounded-tl-[24px] sm:rounded-tl-[32px] rounded-bl-[32px] sm:rounded-bl-[36px] bg-white p-6 sm:p-8 lg:p-9 shadow-xl transition-transform duration-300">
              <span className="mb-3 sm:mb-4 inline-block rounded-full bg-[#5de0af] px-4 py-1.5 text-xs font-semibold text-[#1f4638]">
                {featuredPost.tag}
              </span>

              <h3 className="font-sans text-xl sm:text-2xl lg:text-3xl font-semibold leading-tight tracking-tight text-[#333b38] transition-colors group-hover:text-[#1d7a58]">
                {featuredPost.title}
              </h3>

              <p className="mt-3 font-serif text-xs sm:text-sm leading-relaxed text-[#666f6c] font-normal">
                {featuredPost.excerpt}
              </p>

              <div className="mt-5 inline-block">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedArticle(featuredPost);
                  }}
                  className="font-serif-accent text-xs sm:text-sm font-medium italic text-[#1d7a58] underline underline-offset-4 transition hover:text-[#16362b] cursor-pointer"
                >
                  Read all news →
                </button>
              </div>
            </div>
          </motion.div>

          {/* =========================
              RIGHT: 4 STACKED CARDS (All Clickable)
          ========================== */}
          <div className="flex flex-col justify-between gap-4">
            {sidePosts.map((post, i) => (
              <motion.div
                key={post.title}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => setSelectedArticle(post)}
                className="group flex flex-1 items-center justify-between gap-4 sm:gap-6 rounded-[22px] sm:rounded-[26px] bg-[#eef5f1] p-4 sm:p-4.5 transition-all duration-300 hover:bg-[#e2ede6] hover:shadow-md cursor-pointer"
              >
                {/* Thumbnail Image */}
                <div className="h-18 w-22 sm:h-20 sm:w-26 flex-shrink-0 overflow-hidden rounded-[16px] sm:rounded-[20px] bg-white">
                  <img
                    src={post.image}
                    alt={post.title}
                    referrerPolicy="no-referrer"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col justify-center flex-1 pr-2">
                  <span className="font-serif-accent italic text-xs text-[#1d7a58] underline underline-offset-2">
                    {post.tag}
                  </span>

                  <h4 className="mt-1 text-xs sm:text-sm font-semibold leading-snug text-[#39413e] transition-colors duration-200 group-hover:text-[#1d7a58]">
                    {post.title}
                  </h4>

                  <p className="mt-1 text-[11px] text-[#75736b] font-normal">
                    {post.date} • {post.readTime}
                  </p>
                </div>

                <div className="text-[#1d7a58] opacity-0 group-hover:opacity-100 transition-opacity pr-2">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Interactive Article Reader Modal */}
      <AnimatePresence>
        {selectedArticle && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-hidden">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setSelectedArticle(null)}
              className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            />
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 15 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-2xl max-h-[85vh] rounded-[28px] sm:rounded-[32px] bg-white text-[#39413e] shadow-2xl z-10 flex flex-col overflow-hidden"
            >
              {/* Modal Header Bar with Close Button */}
              <div className="flex items-center justify-between px-6 pt-6 sm:px-8 sm:pt-7 pb-2 flex-shrink-0">
                <span className="inline-block rounded-full bg-[#5de0af]/30 px-3.5 py-1 text-xs font-semibold text-[#1f4638]">
                  {selectedArticle.tag}
                </span>
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="p-1.5 rounded-full text-gray-400 hover:text-gray-900 hover:bg-gray-100 transition-colors"
                  aria-label="Close Article"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Internal Scrollable Content Container (Scrollbar Inside) */}
              <div className="flex-1 overflow-y-auto px-6 pb-6 sm:px-8 sm:pb-8 space-y-4 pr-3 sm:pr-5">
                <h3 className="text-xl sm:text-2xl font-semibold leading-snug text-[#1f4638]">
                  {selectedArticle.title}
                </h3>

                <div className="flex items-center gap-4 text-xs text-gray-500 py-1 border-b border-gray-100">
                  <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {selectedArticle.date}</span>
                  <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {selectedArticle.readTime}</span>
                </div>

                <div className="h-48 sm:h-64 w-full rounded-2xl overflow-hidden my-3 bg-gray-100">
                  <img
                    src={selectedArticle.image}
                    alt={selectedArticle.title}
                    referrerPolicy="no-referrer"
                    className="h-full w-full object-cover"
                  />
                </div>

                <p className="text-sm sm:text-base leading-relaxed text-[#39413e] font-serif font-normal">
                  {selectedArticle.excerpt}
                </p>

                <p className="text-xs sm:text-sm leading-relaxed text-[#666f6c] pt-1 font-normal">
                  {selectedArticle.fullContent}
                </p>

                <div className="pt-5 border-t border-gray-100 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedArticle(null)}
                    className="rounded-full bg-[#1f4638] px-5 py-2 text-xs sm:text-sm font-semibold text-white hover:bg-[#16362b] transition-all"
                  >
                    Done Reading
                  </button>

                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs font-semibold text-[#1d7a58] hover:underline"
                  >
                    <Share2 className="w-4 h-4" /> Share Article
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}