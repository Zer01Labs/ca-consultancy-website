import type { Metadata } from 'next';
import { Poppins, Playfair_Display } from 'next/font/google';
import './globals.css';
import SmoothScroll from '@/components/SmoothScroll';

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
});

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
  weight: ['400', '600', '700'],
  style: ['normal', 'italic'],
});

export const metadata: Metadata = {
  title: 'Rafa & Company - Chartered Accountants & Financial Advisory',
  description:
    'Comprehensive tax planning, statutory auditing, GST compliance, and strategic Virtual CFO services by experienced Chartered Accountants.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${poppins.variable} ${playfairDisplay.variable} scroll-smooth`}>
      <body className="min-h-screen bg-[#f5f4f0] text-[#39413e] font-sans antialiased selection:bg-[#68e9ba] selection:text-[#1f4638]">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
