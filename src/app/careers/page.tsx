import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { Briefcase, GraduationCap, HeartHandshake, TrendingUp, ArrowRight, CheckCircle2 } from 'lucide-react';

export const metadata = {
  title: 'Careers - Rafa & Company CA Advisory',
  description:
    'Explore career opportunities at Rafa & Company. Join our team of Chartered Accountants, Tax Advisors, and Financial Strategists.',
};

const openPositions = [
  {
    title: 'Senior Corporate Tax Advisory Manager',
    department: 'Direct Taxation & Advisory',
    location: 'Full-Time / On-site & Hybrid',
    experience: '5+ Years Exp.',
    description: 'Lead enterprise tax planning, international tax structures, and high-value statutory compliance engagements.',
  },
  {
    title: 'Statutory Audit Lead / Manager',
    department: 'Audit & Assurance',
    location: 'Full-Time / On-site',
    experience: '4+ Years Exp.',
    description: 'Manage end-to-end statutory audits, internal financial controls assessment, and ROC filings for corporate clients.',
  },
  {
    title: 'Virtual CFO Associate Partner',
    department: 'Strategic Advisory',
    location: 'Full-Time / Hybrid',
    experience: '6+ Years Exp.',
    description: 'Provide executive financial intelligence, cash flow forecasting, and investor reporting to fast-growing enterprises.',
  },
  {
    title: 'GST & Indirect Tax Specialist',
    department: 'Indirect Taxation',
    location: 'Full-Time / Remote Option',
    experience: '3+ Years Exp.',
    description: 'Oversee GST audits, input tax credit reconciliation, and GST tribunal advisory for enterprise accounts.',
  },
];

const benefits = [
  {
    icon: TrendingUp,
    title: 'Accelerated Career Growth',
    description: 'Clear meritocratic pathways to partner track and senior leadership roles with direct client engagement.',
  },
  {
    icon: GraduationCap,
    title: 'Continuous CPE & Learning',
    description: 'Full sponsorship for ICAI CPE credits, specialized certifications, and executive leadership workshops.',
  },
  {
    icon: HeartHandshake,
    title: 'Collaborative Excellence',
    description: 'Work alongside top Chartered Accountants in a supportive, high-performing environment that values integrity.',
  },
  {
    icon: Briefcase,
    title: 'Competitive Compensation',
    description: 'Industry-leading salary structures, performance bonuses, health benefits, and flexible work arrangements.',
  },
];

export default function CareersPage() {
  return (
    <main className="min-h-screen antialiased bg-white">
      <Navbar />

      {/* Hero Banner for Careers */}
      <section className="relative pt-36 pb-20 sm:pt-44 sm:pb-28 bg-[#1f4638] text-white px-4 sm:px-6 lg:px-12 overflow-hidden">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <span className="inline-block rounded-full bg-[#68e9ba]/20 px-5 py-2 text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#68e9ba] mb-6">
            Join Our Team
          </span>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-semibold leading-tight tracking-tight max-w-4xl mx-auto">
            Build Your Legacy at{' '}
            <span className="font-serif-accent font-normal italic text-[#68e9ba]">
              Rafa & Company
            </span>
          </h1>
          <p className="mt-6 text-sm sm:text-lg text-[#9ecfb8] max-w-2xl mx-auto leading-relaxed">
            We are looking for passionate Chartered Accountants and financial strategists driven by technical excellence and business impact.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#positions"
              className="rounded-full bg-[#68e9ba] px-7 py-3 text-xs sm:text-sm font-semibold text-[#1f4638] transition-all hover:bg-[#5de0af] hover:scale-105 shadow-lg"
            >
              View Open Roles
            </a>
          </div>
        </div>

        {/* Ambient glow background */}
        <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-[#68e9ba]/15 rounded-full blur-3xl pointer-events-none" />
      </section>

      {/* Why Work With Us (4 Benefits Cards) */}
      <section className="py-20 bg-white px-4 sm:px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-2xl sm:text-4xl font-semibold text-[#39413e] tracking-tight">
              Why Shape Your Career{' '}
              <span className="font-serif-accent font-normal italic text-[#1d7a58]">
                With Us?
              </span>
            </h2>
            <p className="mt-3 text-xs sm:text-sm text-[#75736b]">
              At Rafa & Company, your growth is central to our firm's long-term success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b, idx) => {
              const IconComponent = b.icon;
              return (
                <div
                  key={idx}
                  className="rounded-[24px] bg-[#f8faf8] p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-[#eef8f2] text-[#1d7a58] flex items-center justify-center mb-4">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <h3 className="text-base sm:text-lg font-semibold text-[#39413e] mb-2">
                      {b.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#75736b] leading-relaxed">
                      {b.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Open Positions Grid */}
      <section id="positions" className="py-20 bg-[#f8faf8] px-4 sm:px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#1d7a58] bg-[#eef8f2] px-3 py-1 rounded-full">
              Opportunities
            </span>
            <h2 className="text-2xl sm:text-4xl font-semibold text-[#39413e] tracking-tight mt-3">
              Current Openings
            </h2>
          </div>

          <div className="space-y-4 max-w-4xl mx-auto">
            {openPositions.map((pos, idx) => (
              <div
                key={idx}
                className="rounded-[24px] bg-white p-6 sm:p-7 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col md:flex-row md:items-center justify-between gap-4"
              >
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="text-[11px] font-semibold text-[#1d7a58] bg-[#eef8f2] px-2.5 py-0.5 rounded-full">
                      {pos.department}
                    </span>
                    <span className="text-[11px] font-semibold text-gray-600 bg-gray-100 px-2.5 py-0.5 rounded-full">
                      {pos.experience}
                    </span>
                    <span className="text-[11px] font-semibold text-gray-500 bg-gray-100 px-2.5 py-0.5 rounded-full">
                      {pos.location}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-semibold text-[#39413e]">
                    {pos.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#75736b] mt-1 max-w-2xl">
                    {pos.description}
                  </p>
                </div>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-[#1f4638] px-5 py-2.5 text-xs font-semibold text-white hover:bg-[#16362b] transition-all self-start md:self-center flex-shrink-0"
                >
                  Apply Now <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
