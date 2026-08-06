'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ShoppingBag, ChevronDown, Menu, X, ArrowRight, Trash2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [demosOpen, setDemosOpen] = useState(false);
  const [pagesOpen, setPagesOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Strategic Advisory Package', price: 45, qty: 1 }
  ]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const totalCartPrice = cartItems.reduce((acc, item) => acc + item.price * item.qty, 0);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-white/97 backdrop-blur-md border-b border-gray-200 py-3 shadow-sm'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-1 group">
            <span className={`text-2xl font-bold tracking-tight transition-colors duration-300 ${
              scrolled ? 'text-[#39413e]' : 'text-white'
            }`}>
              Consultant
            </span>
            <span className="text-2xl font-serif-accent font-bold italic text-[#68e9ba] ml-0.5">
              W
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className={`hidden md:flex items-center gap-8 text-sm font-semibold transition-colors duration-300 ${
            scrolled ? 'text-[#39413e]' : 'text-white'
          }`}>
            {/* Demos Dropdown */}
            <div
              className="relative py-2"
              onMouseEnter={() => setDemosOpen(true)}
              onMouseLeave={() => setDemosOpen(false)}
            >
              <button className={`flex items-center gap-1 transition-colors py-1 link-hover-line ${
                scrolled ? 'text-[#39413e] hover:text-[#1d7a58]' : 'text-white hover:text-[#68e9ba]'
              }`}>
                Demos <ChevronDown className="w-4 h-4 opacity-70" />
              </button>
              <AnimatePresence>
                {demosOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 w-48 bg-white border border-gray-100 rounded-xl shadow-2xl p-2 z-50"
                  >
                    <Link
                      href="#"
                      className="block px-4 py-2.5 text-sm text-[#75736b] hover:text-[#1d7a58] hover:bg-[#f0f9f4] rounded-lg transition-colors"
                    >
                      Home 1
                    </Link>
                    <Link
                      href="#"
                      className="block px-4 py-2.5 text-sm text-[#75736b] hover:text-[#1d7a58] hover:bg-[#f0f9f4] rounded-lg transition-colors"
                    >
                      Home 2
                    </Link>
                    <Link
                      href="#"
                      className="block px-4 py-2.5 text-sm text-[#1d7a58] font-bold bg-[#f0f9f4] rounded-lg transition-colors"
                    >
                      Home 3 (Active)
                    </Link>
                    <Link
                      href="#"
                      className="block px-4 py-2.5 text-sm text-[#75736b] hover:text-[#1d7a58] hover:bg-[#f0f9f4] rounded-lg transition-colors"
                    >
                      Home 4
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link href="#services" className={`transition-colors link-hover-line ${
              scrolled ? 'text-[#39413e] hover:text-[#1d7a58]' : 'text-white hover:text-[#68e9ba]'
            }`}>
              Services
            </Link>

            <Link href="#pricing" className={`transition-colors link-hover-line ${
              scrolled ? 'text-[#39413e] hover:text-[#1d7a58]' : 'text-white hover:text-[#68e9ba]'
            }`}>
              Pricing
            </Link>

            <Link href="#blog" className={`transition-colors link-hover-line ${
              scrolled ? 'text-[#39413e] hover:text-[#1d7a58]' : 'text-white hover:text-[#68e9ba]'
            }`}>
              Blog
            </Link>

            {/* All Pages Dropdown */}
            <div
              className="relative py-2"
              onMouseEnter={() => setPagesOpen(true)}
              onMouseLeave={() => setPagesOpen(false)}
            >
              <button className={`flex items-center gap-1 transition-colors py-1 link-hover-line ${
                scrolled ? 'text-[#39413e] hover:text-[#1d7a58]' : 'text-white hover:text-[#68e9ba]'
              }`}>
                All Pages <ChevronDown className="w-4 h-4 opacity-70" />
              </button>
              <AnimatePresence>
                {pagesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full right-0 w-56 bg-white border border-gray-100 rounded-xl shadow-2xl p-2 z-50 grid grid-cols-1 gap-0.5"
                  >
                    <Link href="#about" className="px-4 py-2 text-sm text-[#75736b] hover:text-[#1d7a58] hover:bg-[#f0f9f4] rounded-lg">
                      About Us
                    </Link>
                    <Link href="#team" className="px-4 py-2 text-sm text-[#75736b] hover:text-[#1d7a58] hover:bg-[#f0f9f4] rounded-lg">
                      Our Genius Team
                    </Link>
                    <Link href="#contact" className="px-4 py-2 text-sm text-[#75736b] hover:text-[#1d7a58] hover:bg-[#f0f9f4] rounded-lg">
                      Contact Us
                    </Link>
                    <Link href="#testimonials" className="px-4 py-2 text-sm text-[#75736b] hover:text-[#1d7a58] hover:bg-[#f0f9f4] rounded-lg">
                      Client Reviews
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </nav>

          {/* Right Action Icons & CTA Button */}
          <div className="hidden md:flex items-center gap-5">
            {/* Cart Icon Button */}
            <button
              onClick={() => setCartOpen(true)}
              className={`relative p-2 transition-colors ${
                scrolled ? 'text-[#39413e] hover:text-[#1d7a58]' : 'text-white hover:text-[#68e9ba]'
              }`}
              aria-label="View Shopping Cart"
            >
              <ShoppingBag className="w-5 h-5" />
              {cartItems.length > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#68e9ba] text-[#1f4638] text-xs font-extrabold rounded-full flex items-center justify-center">
                  {cartItems.length}
                </span>
              )}
            </button>

            {/* Get a Quote CTA Button */}
            <Link
              href="#contact"
              className="btn-webflow-mint px-6 py-2.5 text-sm font-semibold flex items-center gap-2"
            >
              Get a quote now
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-3 md:hidden">
            <button
              onClick={() => setCartOpen(true)}
              className={`p-2 transition-colors ${scrolled ? 'text-[#39413e]' : 'text-white'}`}
            >
              <ShoppingBag className="w-5 h-5" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-xl focus:outline-none transition-colors ${scrolled ? 'text-[#39413e]' : 'text-white'}`}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed top-16 left-0 right-0 z-40 bg-white border-b border-gray-100 px-6 py-6 md:hidden shadow-md"
          >
            <div className="flex flex-col gap-4 text-[#39413e] text-base font-medium">
              <Link href="#" onClick={() => setMobileMenuOpen(false)} className="text-[#1d7a58] font-bold">
                Home 3
              </Link>
              <Link href="#services" onClick={() => setMobileMenuOpen(false)}>
                Services
              </Link>
              <Link href="#pricing" onClick={() => setMobileMenuOpen(false)}>
                Pricing
              </Link>
              <Link href="#blog" onClick={() => setMobileMenuOpen(false)}>
                Blog
              </Link>
              <Link href="#contact" onClick={() => setMobileMenuOpen(false)}>
                Contact Us
              </Link>
              <div className="pt-4 border-t border-gray-100">
                <Link
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="btn-webflow-mint w-full py-3 text-center font-bold block"
                >
                  Get a quote now
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Sliding Cart Side Drawer */}
      <AnimatePresence>
        {cartOpen && (
          <div className="fixed inset-0 z-50 flex justify-end">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setCartOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="relative w-full max-w-md bg-[#1f4638] border-l border-white/10 h-full p-6 flex flex-col justify-between z-10 shadow-2xl text-white"
            >
              <div>
                <div className="flex items-center justify-between pb-6 border-b border-white/10">
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <ShoppingBag className="w-5 h-5 text-[#68e9ba]" /> Your Cart
                  </h3>
                  <button
                    onClick={() => setCartOpen(false)}
                    className="p-2 text-gray-300 hover:text-white rounded-full hover:bg-white/10"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="py-6 space-y-4">
                  {cartItems.length > 0 ? (
                    cartItems.map((item) => (
                      <div
                        key={item.id}
                        className="flex items-center justify-between p-4 bg-white/10 rounded-xl border border-white/10"
                      >
                        <div>
                          <h4 className="text-white font-semibold text-sm">{item.name}</h4>
                          <p className="text-xs text-[#68e9ba] font-bold mt-1">${item.price} / month</p>
                        </div>
                        <button
                          onClick={() => setCartItems([])}
                          className="text-gray-300 hover:text-red-300 p-2"
                          title="Remove item"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    ))
                  ) : (
                    <div className="text-center py-12 text-gray-300">Your cart is empty.</div>
                  )}
                </div>
              </div>

              {cartItems.length > 0 && (
                <div className="pt-6 border-t border-white/10 space-y-4">
                  <div className="flex justify-between items-center text-white">
                    <span className="text-sm font-medium text-gray-200">Total:</span>
                    <span className="text-2xl font-extrabold text-[#68e9ba]">${totalCartPrice}</span>
                  </div>
                  <Link
                    href="#contact"
                    onClick={() => setCartOpen(false)}
                    className="btn-webflow-mint w-full py-3.5 font-bold flex items-center justify-center gap-2 text-center"
                  >
                    Continue to Checkout <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
