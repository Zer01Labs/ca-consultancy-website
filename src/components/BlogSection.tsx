'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Clock, Share2, ArrowRight } from 'lucide-react';

const featuredPost = {
  tag: 'Advice',
  title: 'Navigating the Complexities of Consultancy',
  excerpt:
    "Get ready to unlock the secrets to staying ahead of the curve and driving success through adaptability. Read the full post on Consultant W's blog and elevate your understanding of the dynamic world of consulting.",
  fullContent:
    "In today's fast-paced corporate environment, traditional consultancy models are giving way to agile, cross-functional strategic guidance. Navigating complex organizational structures requires deep domain knowledge paired with human-centric empathy. Here, we outline the foundational pillars of driving sustainable transformation across multi-tier teams.",
  image:
    'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=80',
  date: 'November 28, 2023',
  readTime: '6 min read',
};

const sidePosts = [
  {
    tag: 'Strategies',
    title: 'A Deep Dive into Consultant Approach',
    excerpt: 'Explore the methodology and frameworks that empower modern leadership teams to scale seamlessly.',
    fullContent:
      'A holistic consulting methodology integrates market telemetry, strategic risk analysis, and continuous performance loops to yield predictable ROI.',
    image:
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
    date: 'November 27, 2023',
    readTime: '4 min read',
  },
  {
    tag: 'Insights',
    title: 'Revolutionizing Business with Consultant W',
    excerpt: 'How disruptive advisory tools are reshaping market positioning and revenue growth models.',
    fullContent:
      'Disruption requires purpose. Discover how we partner with enterprise brands to unlock unexploited value chains through intelligent consulting.',
    image:
      'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80',
    date: 'November 27, 2023',
    readTime: '5 min read',
  },
  {
    tag: 'Insights',
    title: 'Unveiling the Consultant W Playbook',
    excerpt: 'Step-by-step best practices used by world-class advisors to solve intricate operational bottlenecks.',
    fullContent:
      'The playbook demystifies business acceleration by breaking down transformation into discrete, measurable sprint deliverables.',
    image:
      'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80',
    date: 'November 27, 2023',
    readTime: '7 min read',
  },
  {
    tag: 'Strategies',
    title: 'Human-Centric Consulting',
    excerpt: 'Why putting people first produces higher employee retention and strategic operational alignment.',
    fullContent:
      'People are the engine of all strategic execution. Aligning cultural morale with operational KPIs is the secret to enduring market leadership.',
    image:
      'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80',
    date: 'November 27, 2023',
    readTime: '5 min read',
  },
];

export default function BlogSection() {
  const [selectedArticle, setSelectedArticle] = useState<typeof featuredPost | null>(null);

  return (
    <section id="blog" className="w-full bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1520px] px-4 sm:px-6 lg:px-12">
        {/* Header */}
        <div className="mb-12 sm:mb-16 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold tracking-tight text-[#39413e] sm:text-5xl lg:text-[58px] leading-[1.15]"
          >
            <span className="font-serif-accent font-medium italic text-[#1d7a58]">
              Read our blog post
            </span>{' '}
            and find
            <br className="hidden sm:block" />
            {' '}answers to questions
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
            transition={{ duration: 0.6 }}
            onClick={() => setSelectedArticle(featuredPost)}
            className="group relative flex h-full min-h-[580px] w-full flex-col justify-end overflow-hidden rounded-[28px] sm:rounded-[36px] bg-[#eef5f1] cursor-pointer"
          >
            {/* Background Image */}
            <img
              src={featuredPost.image}
              alt={featuredPost.title}
              referrerPolicy="no-referrer"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />

            {/* Bottom-Left White Card */}
            <div className="relative z-10 w-full sm:w-[94%] lg:w-[90%] rounded-tr-[36px] sm:rounded-tr-[44px] rounded-tl-[28px] sm:rounded-tl-[36px] rounded-bl-[28px] sm:rounded-bl-[36px] bg-white p-7 sm:p-9 lg:p-10 shadow-2xl transition-transform duration-300">
              <span className="mb-4 sm:mb-5 inline-block rounded-full bg-[#5de0af] px-5 py-2 text-xs sm:text-[13px] font-bold text-[#1f4638]">
                {featuredPost.tag}
              </span>

              <h3 className="font-sans text-[28px] sm:text-[34px] lg:text-[38px] font-normal leading-[1.15] tracking-[-0.6px] text-[#333b38] transition-colors group-hover:text-[#1d7a58]">
                {featuredPost.title}
              </h3>

              <p className="mt-4 font-serif text-[14.5px] sm:text-[16px] leading-[1.65] text-[#666f6c]">
                {featuredPost.excerpt}
              </p>

              <div className="mt-6 inline-block">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedArticle(featuredPost);
                  }}
                  className="font-serif-accent text-sm sm:text-base font-semibold italic text-[#1d7a58] underline underline-offset-4 transition hover:text-[#16362b] cursor-pointer"
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
                transition={{ duration: 0.5, delay: i * 0.1 }}
                onClick={() => setSelectedArticle(post)}
                className="group flex flex-1 items-center justify-between gap-4 sm:gap-6 rounded-[24px] sm:rounded-[30px] bg-[#eef5f1] p-4 sm:p-5 transition-all duration-300 hover:bg-[#e2ede6] hover:shadow-md cursor-pointer"
              >
                {/* Thumbnail Image */}
                <div className="h-20 w-24 sm:h-24 sm:w-28 flex-shrink-0 overflow-hidden rounded-[18px] sm:rounded-[22px] bg-white">
                  <img
                    src={post.image}
                    alt={post.title}
                    referrerPolicy="no-referrer"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col justify-center flex-1 pr-2">
                  <span className="font-serif-accent italic text-xs sm:text-sm text-[#1d7a58] underline underline-offset-2">
                    {post.tag}
                  </span>

                  <h4 className="mt-1 text-sm sm:text-base font-bold leading-snug text-[#39413e] transition-colors duration-200 group-hover:text-[#1d7a58]">
                    {post.title}
                  </h4>

                  <p className="mt-1 text-[11px] sm:text-xs text-[#75736b]">
                    {post.date} • {post.readTime}
                  </p>
                </div>

                <div className="text-[#1d7a58] opacity-0 group-hover:opacity-100 transition-opacity pr-2">
                  <ArrowRight className="w-5 h-5" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Interactive Article Reader Modal */}
      <AnimatePresence>
        {selectedArticle && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedArticle(null)}
              className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            />
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 260 }}
              className="relative w-full max-w-2xl rounded-[32px] bg-white p-6 sm:p-9 text-[#39413e] shadow-2xl z-10 max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={() => setSelectedArticle(null)}
                className="absolute top-6 right-6 p-2 rounded-full text-gray-400 hover:text-gray-900 hover:bg-gray-100 transition-colors"
                aria-label="Close Article"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-4">
                <span className="inline-block rounded-full bg-[#5de0af]/40 px-4 py-1.5 text-xs font-bold text-[#1f4638]">
                  {selectedArticle.tag}
                </span>

                <h3 className="text-2xl sm:text-3xl font-bold leading-snug text-[#1f4638]">
                  {selectedArticle.title}
                </h3>

                <div className="flex items-center gap-4 text-xs text-gray-500 py-1 border-b border-gray-100">
                  <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {selectedArticle.date}</span>
                  <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {selectedArticle.readTime}</span>
                </div>

                <div className="h-56 sm:h-72 w-full rounded-2xl overflow-hidden my-4 bg-gray-100">
                  <img
                    src={selectedArticle.image}
                    alt={selectedArticle.title}
                    referrerPolicy="no-referrer"
                    className="h-full w-full object-cover"
                  />
                </div>

                <p className="text-base sm:text-lg leading-relaxed text-[#39413e] font-serif">
                  {selectedArticle.excerpt}
                </p>

                <p className="text-sm sm:text-base leading-relaxed text-[#666f6c] pt-2">
                  {selectedArticle.fullContent}
                </p>

                <div className="pt-6 border-t border-gray-100 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedArticle(null)}
                    className="rounded-full bg-[#1f4638] px-6 py-2.5 text-sm font-bold text-white hover:bg-[#16362b] transition-all"
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