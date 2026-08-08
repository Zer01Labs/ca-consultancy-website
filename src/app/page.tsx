import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import KeyPillars from '@/components/KeyPillars';
import TeamSection from '@/components/TeamSection';
import ServicesSection from '@/components/ServicesSection';
import PricingSection from '@/components/PricingSection';
import StatsAndContactSection from '@/components/StatsAndContactSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import BlogSection from '@/components/BlogSection';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Consultant W - Strategic Advisory & Business Consulting',
  description:
    'At Consultant W, we embrace innovation as the driving force behind every solution. Premium business consulting services for your growth.',
};

export default function Home() {
  return (
    <main className="min-h-screen antialiased bg-white">
      {/* 1. Navigation Bar */}
      <Navbar />

      {/* 2. Hero Section - Full-bleed background photo */}
      <HeroSection />

      {/* 3. Key Pillars (What We Offer) - Light bg, centered title, photo+list layout */}
      <KeyPillars />

      {/* 4. Meet The Genius Team - Full-bleed horizontal strip */}
      <TeamSection />

      {/* 5. Explore Our Best Services - Bold left text + right photo accordion */}
      <ServicesSection />

      {/* 6. Pricing Solutions for Success (Part 1 of Pricing) */}
      <PricingSection />

      {/* 7. World Map, 4 Stats Counters & Contact Consultant W */}
      <StatsAndContactSection />

      {/* 8. What They Say About Us (Part 2: Client Testimonials) */}
      <TestimonialsSection />

      {/* 9. Blog & Insights - Featured + side articles */}
      <BlogSection />

      {/* 10. Footer - Dark green + mint CTA card */}
      <Footer />
    </main>
  );
}
