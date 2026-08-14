import React from 'react';
import Navbar from '@/components/Navbar';
import TeamSection from '@/components/TeamSection';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const metadata = {
  title: 'Our Genius Team - Rafa & Company CA Advisory',
  description:
    'Meet the experienced Chartered Accountants, Tax Strategists, and Financial Consultants leading Rafa & Company.',
};

const extendedTeam = [
  {
    name: 'Rafa Ahmed, FCA',
    role: 'Managing Partner & Senior Tax Strategist',
    experience: '18+ Years Experience',
    bio: 'Specializing in corporate tax restructuring, international taxation, and high-value statutory audit oversight for enterprise clients.',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80',
    specialties: ['Corporate Tax', 'GST Planning', 'M&A Advisory'],
  },
  {
    name: 'Sarah Jenkins, CPA',
    role: 'Head of Virtual CFO Services',
    experience: '14+ Years Experience',
    bio: 'Expert in financial forecasting, capital structure optimization, and audit compliance for fast-scaling enterprise clients.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
    imagePosition: 'object-[center_20%]',
    specialties: ['Virtual CFO', 'Financial Modeling', 'Risk Management'],
  },
  {
    name: 'David Chen, CA',
    role: 'Partner, Statutory Audit & Assurance',
    experience: '12+ Years Experience',
    bio: 'Leads statutory compliance, forensic auditing, and ROC filings with precision and technical rigor.',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80',
    specialties: ['Statutory Audit', 'ROC Compliance', 'Internal Controls'],
  },
  {
    name: 'Elena Rostova',
    role: 'Director of Corporate Governance',
    experience: '10+ Years Experience',
    bio: 'Advises enterprise boards on regulatory disclosure, director duties, and strategic legal compliance frameworks.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80',
    specialties: ['ROC Filings', 'Corporate Governance', 'Legal Compliance'],
  },
];

export default function TeamPage() {
  return (
    <main className="min-h-screen antialiased bg-white">
      <Navbar />

      {/* Hero Banner for Our Team */}
      <section className="relative pt-36 pb-20 sm:pt-44 sm:pb-28 bg-[#1f4638] text-white px-4 sm:px-6 lg:px-12 overflow-hidden">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <span className="inline-block rounded-full bg-[#68e9ba]/20 px-5 py-2 text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#68e9ba] mb-6">
            Senior Advisory Leadership
          </span>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-semibold leading-tight tracking-tight max-w-4xl mx-auto">
            Meet Our Chartered Accountants &{' '}
            <span className="font-serif-accent font-normal italic text-[#68e9ba]">
              Financial Experts
            </span>
          </h1>
          <p className="mt-6 text-sm sm:text-lg text-[#9ecfb8] max-w-2xl mx-auto leading-relaxed">
            Uniting seasoned financial acumen, technical tax rigor, and strategic CFO intelligence to guide your business growth.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="rounded-full bg-[#68e9ba] px-7 py-3 text-xs sm:text-sm font-semibold text-[#1f4638] transition-all hover:bg-[#5de0af] hover:scale-105 shadow-lg"
            >
              Consult Our Leadership
            </Link>
          </div>
        </div>

        {/* Ambient glow background */}
        <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-[#68e9ba]/15 rounded-full blur-3xl pointer-events-none" />
      </section>

      {/* Interactive Carousel Team Section */}
      <TeamSection />

      {/* Extended Partner Profiles */}
      <section className="py-20 bg-[#f8faf8] px-4 sm:px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-2xl sm:text-4xl font-semibold text-[#39413e] tracking-tight">
              Partner & Executive{' '}
              <span className="font-serif-accent font-normal italic text-[#1d7a58]">
                Bios
              </span>
            </h2>
            <p className="mt-3 text-xs sm:text-sm text-[#75736b]">
              Deep domain expertise across direct tax, indirect tax (GST), statutory audit, and virtual CFO governance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {extendedTeam.map((member, idx) => (
              <div
                key={idx}
                className="rounded-[28px] bg-white p-6 sm:p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col sm:flex-row gap-6 items-center"
              >
                <div className="h-44 w-44 sm:h-48 sm:w-48 flex-shrink-0 overflow-hidden rounded-[22px] bg-gray-100 border border-gray-100">
                  <img
                    src={member.image}
                    alt={member.name}
                    referrerPolicy="no-referrer"
                    className={`h-full w-full object-cover ${member.imagePosition || ''}`}
                  />
                </div>

                <div className="flex-1 space-y-2 text-center sm:text-left">
                  <span className="inline-block text-[11px] font-semibold text-[#1d7a58] uppercase tracking-wider bg-[#eef8f2] px-2.5 py-1 rounded-full">
                    {member.experience}
                  </span>
                  <h3 className="text-lg sm:text-xl font-semibold text-[#39413e]">
                    {member.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#1d7a58] font-medium">
                    {member.role}
                  </p>
                  <p className="text-xs text-[#75736b] leading-relaxed pt-1">
                    {member.bio}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-2 justify-center sm:justify-start">
                    {member.specialties.map((spec, i) => (
                      <span key={i} className="text-[10px] bg-gray-100 text-gray-700 font-medium px-2 py-0.5 rounded-md">
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
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
