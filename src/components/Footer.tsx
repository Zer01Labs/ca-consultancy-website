'use client';

import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer>
      {/* Dark green top section */}
      <div className="bg-[#1f4638] px-6 sm:px-10 lg:px-16 pt-16 pb-10">
        <h2 className="text-4xl sm:text-5xl font-bold text-white leading-snug max-w-3xl">
          Turn Your Vision Into Reality. Let's Reinvent{' '}
          <span className="font-serif-accent italic text-[#68e9ba]">Success Together!</span>
        </h2>

        <nav className="mt-10 flex flex-wrap gap-8 text-white text-sm font-medium">
          <Link href="#" className="hover:text-[#68e9ba] transition-colors">Home</Link>
          <Link href="#pricing" className="hover:text-[#68e9ba] transition-colors">Our Pricing</Link>
          <Link href="#blog" className="hover:text-[#68e9ba] transition-colors">Blog</Link>
          <Link href="#" className="hover:text-[#68e9ba] transition-colors">Shop</Link>
          <Link href="#contact" className="hover:text-[#68e9ba] transition-colors">Contact Us</Link>
        </nav>

        {/* Social icons */}
        <div className="mt-6 flex gap-4">
          {['instagram', 'facebook', 'x'].map((social) => (
            <a
              key={social}
              href="#"
              className="w-9 h-9 rounded-full border border-[#4a7d68] flex items-center justify-center text-white hover:border-[#68e9ba] hover:text-[#68e9ba] transition-all duration-300"
            >
              {social === 'instagram' && (
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              )}
              {social === 'facebook' && (
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              )}
              {social === 'x' && (
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              )}
            </a>
          ))}
        </div>
      </div>

      {/* Mint green consultation CTA card */}
      <div className="bg-[#1f4638] px-6 sm:px-10 lg:px-16 pb-8">
        <div className="bg-[#68e9ba] rounded-3xl p-8 sm:p-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left: photo grid */}
          <div className="grid grid-cols-3 gap-3">
            <div className="col-span-2 rounded-2xl overflow-hidden h-44">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=500&q=80"
                alt="Team meeting"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-rows-2 gap-3">
              <div className="rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=200&q=80"
                  alt="Consulting"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=200&q=80"
                  alt="Business"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right: CTA text */}
          <div>
            <h3 className="text-3xl font-bold text-[#1f4638] leading-snug">
              Book Your Consultation with Consultant W!
            </h3>
            <p className="mt-3 text-[#1f4638]/80 text-sm leading-relaxed">
              At Consultant W, we redefine consultancy through a dynamic fusion of innovation,
              expertise, and strategic vision.
            </p>
            <button className="mt-6 px-7 py-3 rounded-full bg-[#1f4638] text-white font-bold text-sm hover:bg-[#162e28] transition-all duration-300 hover:-translate-y-0.5 shadow-md">
              Book a Free Consultation
            </button>
          </div>
        </div>
      </div>

      {/* Bottom copyright bar */}
      <div className="bg-[#162e28] px-6 py-4">
        <p className="text-center text-[#6b9980] text-xs">
          © 2024 Consultant W. All rights reserved. Designed with precision and care.
        </p>
      </div>
    </footer>
  );
}
