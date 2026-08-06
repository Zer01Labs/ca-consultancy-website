import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import KeyPillars from '@/components/KeyPillars';
import TeamSection from '@/components/TeamSection';
import ServicesSection from '@/components/ServicesSection';
import PricingSection from '@/components/PricingSection';
import StatsSection from '@/components/StatsSection';
import ContactSection from '@/components/ContactSection';
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
    <main className="min-h-screen antialiased">
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

      {/* 6. Pricing Solutions - Mint green bg, tab selector */}
      <PricingSection />

      {/* 7. Stats & World Map - Dark green bg */}
      <StatsSection />

      {/* 8. Contact & Locations - Dark green rounded card */}
      <ContactSection />

      {/* 9. Client Testimonials - Mint green bg, center quote slider */}
      <TestimonialsSection />

      {/* 10. Blog & Insights - Featured + side articles */}
      <BlogSection />

      {/* 11. Footer - Dark green + mint CTA card */}
      <Footer />
    </main>
  );
}
