import React from 'react';
import Navbar from '@/components/Navbar';
import StatsAndContactSection from '@/components/StatsAndContactSection';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Contact Us - Consultant W Strategic Advisory',
  description:
    'Reach out to Consultant W offices in London, New York, Tokyo, Dubai, and Sydney for bespoke corporate advisory and consultation.',
};

export default function ContactPage() {
  return (
    <main className="min-h-screen antialiased bg-white">
      <Navbar />

      {/* Hero Banner for Contact */}
      <section className="relative pt-36 pb-20 sm:pt-44 sm:pb-28 bg-[#1f4638] text-white px-4 sm:px-6 lg:px-12 overflow-hidden">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <span className="inline-block rounded-full bg-[#68e9ba]/20 px-5 py-2 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#68e9ba] mb-6">
            Global Advisory Network
          </span>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold leading-tight tracking-tight max-w-4xl mx-auto">
            Let's Shape Your{' '}
            <span className="font-serif-accent font-medium italic text-[#68e9ba]">
              Strategic Future
            </span>
          </h1>
          <p className="mt-6 text-base sm:text-xl text-[#9ecfb8] max-w-2xl mx-auto leading-relaxed">
            Our senior advisory partners are available across our global offices to accelerate your business milestones.
          </p>
        </div>

        {/* Ambient glow background */}
        <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-[#68e9ba]/15 rounded-full blur-3xl pointer-events-none" />
      </section>

      {/* Full Stats, Map & Interactive Contact Form */}
      <StatsAndContactSection />

      {/* Footer CTA */}
      <Footer />
    </main>
  );
}
