import React from 'react';
import Navbar from '@/components/Navbar';
import ServicesSection from '@/components/ServicesSection';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { Compass, Lightbulb, TrendingUp, Cpu, ShieldCheck, ArrowRight, CheckCircle } from 'lucide-react';

export const metadata = {
  title: 'Our Services - Consultant W Strategic Advisory',
  description:
    'Explore comprehensive business advisory, strategic planning, digital innovation, and change management services from Consultant W.',
};

const detailedServices = [
  {
    icon: Compass,
    title: 'Strategic Planning & Execution',
    description:
      'Robust corporate roadmap frameworks designed to outpace industry disruptions and unlock high-margin growth vectors.',
    deliverables: ['Market telemetry analysis', 'Competitive positioning audits', 'Multi-year execution blueprints'],
  },
  {
    icon: Lightbulb,
    title: 'Innovation & Digital Advisory',
    description:
      'Integration of AI, cloud architecture, and modern digital ecosystems to automate workflows and elevate customer journeys.',
    deliverables: ['AI readiness assessments', 'Technology stack modernizations', 'Data governance frameworks'],
  },
  {
    icon: TrendingUp,
    title: 'Change & Operational Excellence',
    description:
      'Culture-first leadership coaching and operational streamlining that scales workforce performance with zero friction.',
    deliverables: ['Executive team alignment', 'Agile workflow restructuring', 'Post-merger integration'],
  },
  {
    icon: Cpu,
    title: 'Technology Integration & Cloud',
    description:
      'Seamless digital infrastructure scaling that delivers 99.99% uptime and bulletproof enterprise resilience.',
    deliverables: ['Cloud migration strategies', 'System architecture review', 'DevOps optimization'],
  },
  {
    icon: ShieldCheck,
    title: 'Financial Strategy & Risk Advisory',
    description:
      'Quantitative modeling, capital structure optimization, and defensive risk mitigation for turbulent macro markets.',
    deliverables: ['Scenario risk modeling', 'Capital allocation advisory', 'Unit economics tuning'],
  },
  {
    icon: CheckCircle,
    title: 'Enterprise Growth Acceleration',
    description:
      'Full-spectrum advisory services aligning brand narrative, revenue operations, and high-velocity sales pipelines.',
    deliverables: ['Revenue operations audit', 'Go-to-market acceleration', 'Customer lifetime value modeling'],
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen antialiased bg-white">
      <Navbar />

      {/* Hero Banner for Services */}
      <section className="relative pt-36 pb-20 sm:pt-44 sm:pb-28 bg-[#1f4638] text-white px-4 sm:px-6 lg:px-12 overflow-hidden">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <span className="inline-block rounded-full bg-[#68e9ba]/20 px-5 py-2 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#68e9ba] mb-6">
            Advisory Capabilities
          </span>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold leading-tight tracking-tight max-w-4xl mx-auto">
            Explore Our Comprehensive{' '}
            <span className="font-serif-accent font-medium italic text-[#68e9ba]">
              Consulting Services
            </span>
          </h1>
          <p className="mt-6 text-base sm:text-xl text-[#9ecfb8] max-w-2xl mx-auto leading-relaxed">
            Meticulously crafted solutions combining rigorous quantitative analytics with dynamic strategic agility.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/#contact"
              className="rounded-full bg-[#68e9ba] px-8 py-3.5 text-sm sm:text-base font-bold text-[#1f4638] transition-all hover:bg-[#5de0af] hover:scale-105 shadow-lg"
            >
              Book A Service Consultation
            </Link>
            <Link
              href="/pricing"
              className="rounded-full border border-white/40 px-8 py-3.5 text-sm sm:text-base font-bold text-white transition-all hover:bg-white hover:text-[#1f4638]"
            >
              View Pricing Packages
            </Link>
          </div>
        </div>

        {/* Ambient glow background */}
        <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-[#68e9ba]/15 rounded-full blur-3xl pointer-events-none" />
      </section>

      {/* Main Interactive Video Showcase Section */}
      <ServicesSection />

      {/* Detailed 6-Card Services Grid */}
      <section className="py-24 bg-[#f8faf8] px-4 sm:px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-5xl font-bold text-[#39413e] tracking-tight">
              Tailored Frameworks for{' '}
              <span className="font-serif-accent font-medium italic text-[#1d7a58]">
                Every Growth Stage
              </span>
            </h2>
            <p className="mt-4 text-[#75736b] text-base sm:text-lg">
              From early-stage disruption to multinational transformation, our specialized practices deliver measurable results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {detailedServices.map((srv, idx) => {
              const IconComponent = srv.icon;
              return (
                <div
                  key={idx}
                  className="rounded-[28px] bg-white p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
                >
                  <div>
                    <div className="w-14 h-14 rounded-2xl bg-[#eef8f2] text-[#1d7a58] flex items-center justify-center mb-6 group-hover:bg-[#1f4638] group-hover:text-[#68e9ba] transition-colors duration-300">
                      <IconComponent className="w-7 h-7" />
                    </div>

                    <h3 className="text-2xl font-bold text-[#39413e] mb-3 group-hover:text-[#1d7a58] transition-colors">
                      {srv.title}
                    </h3>

                    <p className="text-[#75736b] text-sm sm:text-base leading-relaxed mb-6">
                      {srv.description}
                    </p>

                    <div className="space-y-2 border-t border-gray-100 pt-4 mb-6">
                      <p className="text-xs font-bold text-[#1f4638] uppercase tracking-wider">Key Deliverables:</p>
                      {srv.deliverables.map((del, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-gray-600">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#1d7a58]" />
                          <span>{del}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Link
                    href="/#contact"
                    className="inline-flex items-center gap-2 text-sm font-bold text-[#1d7a58] group-hover:text-[#16362b] pt-2"
                  >
                    Inquire Now <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <Footer />
    </main>
  );
}
