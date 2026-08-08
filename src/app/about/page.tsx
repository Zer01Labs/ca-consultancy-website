import React from 'react';
import Navbar from '@/components/Navbar';
import KeyPillars from '@/components/KeyPillars';
import TeamSection from '@/components/TeamSection';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const metadata = {
  title: 'About Us - Consultant W Strategic Advisory',
  description:
    'Learn more about Consultant W, our visionary leaders, core consulting pillars, and how we empower global enterprises to achieve sustainable growth.',
};

export default function AboutPage() {
  return (
    <main className="min-h-screen antialiased bg-white">
      <Navbar />

      {/* Hero Banner for About Us */}
      <section className="relative pt-36 pb-20 sm:pt-44 sm:pb-28 bg-[#1f4638] text-white px-4 sm:px-6 lg:px-12 overflow-hidden">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <span className="inline-block rounded-full bg-[#68e9ba]/20 px-5 py-2 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#68e9ba] mb-6">
            About Consultant W
          </span>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold leading-tight tracking-tight max-w-4xl mx-auto">
            Empowering Visionary{' '}
            <span className="font-serif-accent font-medium italic text-[#68e9ba]">
              Enterprise Success
            </span>
          </h1>
          <p className="mt-6 text-base sm:text-xl text-[#9ecfb8] max-w-2xl mx-auto leading-relaxed">
            We partner with forward-thinking business leaders worldwide to transform strategic vision into durable, measurable market advantage.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/#contact"
              className="rounded-full bg-[#68e9ba] px-8 py-3.5 text-sm sm:text-base font-bold text-[#1f4638] transition-all hover:bg-[#5de0af] hover:scale-105 shadow-lg"
            >
              Get In Touch
            </Link>
            <Link
              href="/services"
              className="rounded-full border border-white/40 px-8 py-3.5 text-sm sm:text-base font-bold text-white transition-all hover:bg-white hover:text-[#1f4638]"
            >
              Explore Services
            </Link>
          </div>
        </div>

        {/* Ambient glow background */}
        <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-[#68e9ba]/15 rounded-full blur-3xl pointer-events-none" />
      </section>

      {/* Story & Image Showcase */}
      <section className="py-20 bg-white px-4 sm:px-6 lg:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="rounded-[32px] overflow-hidden h-[420px] sm:h-[500px] shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
              alt="Consultant W Strategy Board"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </div>

          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#39413e] leading-tight">
              Our Journey of{' '}
              <span className="font-serif-accent font-medium italic text-[#1d7a58]">
                Continuous Innovation
              </span>
            </h2>
            <p className="mt-6 text-[#75736b] text-base sm:text-lg leading-relaxed">
              Founded on the belief that advisory services must blend rigorous analytical frameworks with agile human execution, Consultant W has grown into a trusted partner for global corporations and ambitious startups.
            </p>
            <p className="mt-4 text-[#75736b] text-base sm:text-lg leading-relaxed">
              Our multidisciplinary consultants operate across New York, London, Tokyo, Dubai, and Sydney to deliver real-time strategic alignment.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-6 border-t border-gray-200 pt-6">
              <div>
                <span className="text-3xl sm:text-4xl font-bold text-[#1f4638]">98.6%</span>
                <p className="text-xs sm:text-sm text-[#75736b] mt-1 font-semibold">Client Retention Rate</p>
              </div>
              <div>
                <span className="text-3xl sm:text-4xl font-bold text-[#1f4638]">$2.4B+</span>
                <p className="text-xs sm:text-sm text-[#75736b] mt-1 font-semibold">Enterprise Value Created</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Key Pillars */}
      <KeyPillars />

      {/* Meet The Genius Team */}
      <TeamSection />

      {/* Footer CTA */}
      <Footer />
    </main>
  );
}
