import React from 'react';
import Navbar from '@/components/Navbar';
import BlogSection from '@/components/BlogSection';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { Mail, Sparkles } from 'lucide-react';

export const metadata = {
  title: 'Blog & Insights - Consultant W Strategic Advisory',
  description:
    'Explore the latest consulting insights, leadership advice, innovation frameworks, and executive playbooks from Consultant W.',
};

export default function BlogPage() {
  return (
    <main className="min-h-screen antialiased bg-white">
      <Navbar />

      {/* Hero Banner for Blog */}
      <section className="relative pt-36 pb-20 sm:pt-44 sm:pb-28 bg-[#1f4638] text-white px-4 sm:px-6 lg:px-12 overflow-hidden">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <span className="inline-block rounded-full bg-[#68e9ba]/20 px-5 py-2 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#68e9ba] mb-6">
            Thought Leadership
          </span>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold leading-tight tracking-tight max-w-4xl mx-auto">
            Strategic Insights &{' '}
            <span className="font-serif-accent font-medium italic text-[#68e9ba]">
              Advisory Knowledge
            </span>
          </h1>
          <p className="mt-6 text-base sm:text-xl text-[#9ecfb8] max-w-2xl mx-auto leading-relaxed">
            Stay ahead of market shifts with actionable frameworks, executive commentary, and deep-dive case analyses.
          </p>
        </div>

        {/* Ambient glow background */}
        <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-[#68e9ba]/15 rounded-full blur-3xl pointer-events-none" />
      </section>

      {/* Main Interactive Blog Section with Article Reader Modal */}
      <BlogSection />

      {/* Newsletter Subscribe Section */}
      <section className="py-20 bg-[#eef8f2] px-4 sm:px-6 lg:px-12">
        <div className="max-w-4xl mx-auto rounded-[32px] bg-[#1f4638] text-white p-8 sm:p-14 text-center shadow-xl relative overflow-hidden">
          <div className="relative z-10 max-w-2xl mx-auto">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#68e9ba] mb-4">
              <Sparkles className="w-4 h-4" /> Weekly Executive Dispatch
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold">
              Subscribe to{' '}
              <span className="font-serif-accent font-medium italic text-[#68e9ba]">
                Strategic Briefings
              </span>
            </h2>
            <p className="mt-4 text-[#9ecfb8] text-sm sm:text-base">
              Get our curated monthly playbooks, industry telemetry, and strategic guides delivered straight to your inbox.
            </p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert('Thank you for subscribing to Consultant W Strategic Briefings!');
              }}
              className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            >
              <input
                type="email"
                required
                placeholder="Enter work email"
                className="flex-1 rounded-full bg-white/10 border border-white/20 px-5 py-3.5 text-sm text-white placeholder-white/50 focus:outline-none focus:border-[#68e9ba]"
              />
              <button
                type="submit"
                className="rounded-full bg-[#68e9ba] px-7 py-3.5 text-sm font-bold text-[#1f4638] hover:bg-[#5de0af] transition-all hover:scale-105"
              >
                Subscribe
              </button>
            </form>
          </div>

          <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#68e9ba]/10 rounded-full blur-2xl pointer-events-none" />
        </div>
      </section>

      {/* Footer CTA */}
      <Footer />
    </main>
  );
}
