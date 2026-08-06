'use client';

import React from 'react';
import { motion } from 'framer-motion';

const featuredPost = {
  tag: 'Advice',
  title: 'Navigating the Complexities of Consultancy',
  excerpt:
    'Get ready to unlock the secrets to staying ahead of the curve and driving success through adaptability. Read the full post on Consultant W\'s blog and elevate your understanding of the dynamic world of consulting.',
  image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80',
  date: 'November 27, 2023',
};

const sidePosts = [
  {
    tag: 'Strategies',
    title: 'A Deep Dive into Consultant Approach',
    image: 'https://images.unsplash.com/photo-1553484771-371a605b060b?auto=format&fit=crop&w=200&q=80',
    date: 'November 27, 2023',
  },
  {
    tag: 'Insights',
    title: 'Revolutionizing Business with Consultant W',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=200&q=80',
    date: 'November 27, 2023',
  },
  {
    tag: 'Insights',
    title: 'Unveiling the Consultant W Playbook',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=200&q=80',
    date: 'November 27, 2023',
  },
  {
    tag: 'Strategies',
    title: 'Human-Centric Consulting',
    image: 'https://images.unsplash.com/photo-1551836022-4c4c79ecde51?auto=format&fit=crop&w=200&q=80',
    date: 'November 27, 2023',
  },
];

export default function BlogSection() {
  return (
    <section id="blog" className="bg-[#f5f4f0] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top: label + title + link */}
        <div className="flex items-start justify-between mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-semibold text-[#1d7a58] uppercase tracking-widest mb-2">
              Latest Insights
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold text-[#39413e] leading-snug">
              Explore Our{' '}
              <span className="font-serif-accent italic text-[#1d7a58]">Blog Posts</span>
            </h2>
          </motion.div>
          <a
            href="#"
            className="hidden sm:inline-flex mt-4 text-[#1d7a58] font-semibold text-sm underline underline-offset-4 hover:text-[#14593f] transition-colors"
          >
            View All Posts →
          </a>
        </div>

        {/* Blog grid: featured left, list right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Featured post card */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-2xl overflow-hidden group cursor-pointer"
          >
            <img
              src={featuredPost.image}
              alt={featuredPost.title}
              className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
            />
            {/* White card overlay at bottom */}
            <div className="absolute bottom-0 left-4 right-4 mb-4 bg-white rounded-xl p-5 shadow-md">
              <span className="inline-block px-3 py-1 rounded-full bg-[#68e9ba] text-[#1f4638] text-xs font-bold mb-3">
                {featuredPost.tag}
              </span>
              <h3 className="text-xl font-bold text-[#39413e] leading-snug mb-2">{featuredPost.title}</h3>
              <p className="text-[#75736b] text-sm leading-relaxed line-clamp-3">{featuredPost.excerpt}</p>
            </div>
          </motion.div>

          {/* Side posts list */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            {sidePosts.map((post, idx) => (
              <div
                key={idx}
                className="flex items-center gap-4 p-4 bg-white rounded-xl hover:shadow-md transition-shadow duration-300 cursor-pointer group"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-20 h-20 object-cover rounded-lg flex-shrink-0 group-hover:scale-105 transition-transform duration-300"
                />
                <div>
                  <p className="text-xs font-semibold text-[#1d7a58] underline mb-1">{post.tag}</p>
                  <h4 className="text-sm font-bold text-[#39413e] leading-snug">{post.title}</h4>
                  <p className="text-xs text-[#75736b] mt-1">{post.date}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
