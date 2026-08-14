'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ShoppingBag, ChevronDown, Menu, X, ArrowRight, Trash2, CheckCircle2, Sparkles, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [demosOpen, setDemosOpen] = useState(false);
  const [pagesOpen, setPagesOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [quoteSubmitted, setQuoteSubmitted] = useState(false);
  const [quoteForm, setQuoteForm] = useState({
    name: '',
    email: '',
    service: 'Strategic Consulting',
    budget: '$5,000 - $15,000',
    message: '',
  });

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

  const handleQuoteSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setQuoteSubmitted(true);
    setTimeout(() => {
      setQuoteSubmitted(false);
      setQuoteModalOpen(false);
      setQuoteForm({
        name: '',
        email: '',
        service: 'Strategic Consulting',
        budget: '$5,000 - $15,000',
        message: '',
      });
    }, 2200);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-white/97 backdrop-blur-md py-3 shadow-sm'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-1 group">
            <span className={`text-2xl font-bold tracking-tight transition-colors duration-300 ${
              scrolled ? 'text-[#39413e]' : 'text-white'
            } `}>
              Rafa <span className="text-2xl text-[#1f4638] ml-0.5">
              &
            </span>  Company
            </span>
            {/* <span className="text-2xl font-serif-accent font-bold italic text-[#68e9ba] ml-0.5">
              COMPANY
            </span> */}
          </Link>

          {/* Desktop Navigation Links */}
          <nav className={`hidden md:flex items-center gap-8 text-sm font-semibold transition-colors duration-300 ${
              scrolled ? 'text-[#39413e]' : 'text-white '
            }`}>
            {/* Demos Dropdown */}
            {/* <div
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
                    <a
                      href="/"
                      className="block px-4 py-2.5 text-sm text-[#75736b] hover:text-[#1d7a58] hover:bg-[#f0f9f4] rounded-lg transition-colors"
                    >
                      Home 1
                    </a>
                    <a
                      href="/"
                      className="block px-4 py-2.5 text-sm text-[#75736b] hover:text-[#1d7a58] hover:bg-[#f0f9f4] rounded-lg transition-colors"
                    >
                      Home 2
                    </a>
                    <a
                      href="/"
                      className="block px-4 py-2.5 text-sm text-[#1d7a58] font-bold bg-[#f0f9f4] rounded-lg transition-colors"
                    >
                      Home 3 (Active)
                    </a>
                    <a
                      href="/"
                      className="block px-4 py-2.5 text-sm text-[#75736b] hover:text-[#1d7a58] hover:bg-[#f0f9f4] rounded-lg transition-colors"
                    >
                      Home 4
                    </a>
                  </motion.div>
                )}
              </AnimatePresence>
            </div> */}

            <Link href="/" className={`transition-colors link-hover-line hover:text-[#1d7a58]`}>
              Home
            </Link>

            <Link href="/about" className={`transition-colors link-hover-line hover:text-[#1d7a58]`}>
              About
            </Link>

            <Link href="/services" className={`transition-colors link-hover-line hover:text-[#1d7a58]`}>
              Services
            </Link>

            <Link href="/team" className={`transition-colors link-hover-line hover:text-[#1d7a58]`}>
              Our Team
            </Link>

            <Link href="/careers" className={`transition-colors link-hover-line hover:text-[#1d7a58]`}>
              Careers
            </Link>

            <Link href="/contact" className={`transition-colors link-hover-line hover:text-[#1d7a58]`}>
              Contact us
            </Link>

            {/* All Pages Multi-Column Mega Menu */}
            {/* <div
              className="relative py-2"
              onMouseEnter={() => setPagesOpen(true)}
              onMouseLeave={() => setPagesOpen(false)}
            > */}
              {/* <button className={`flex items-center gap-1 transition-colors py-1 link-hover-line ${
                scrolled ? 'text-[#39413e] hover:text-[#1d7a58]' : 'text-white hover:text-[#68e9ba]'
              }`}>
                All Pages <ChevronDown className="w-4 h-4 opacity-70" />
              </button> */}
              {/* <AnimatePresence>
                {pagesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 12, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.98 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full -right-20 w-[680px] bg-white border border-gray-100 rounded-2xl shadow-2xl p-6 z-50 grid grid-cols-3 gap-6 text-[#39413e]"
                  > */}
                    {/* Column 1: Main Pages */}
                    {/* <div className="space-y-2">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-[#1d7a58] pb-1 border-b border-gray-100">
                        Main Pages
                      </h4>
                      <div className="flex flex-col space-y-1 text-sm font-medium">
                        <a href="/" className="px-2.5 py-1.5 rounded-lg hover:bg-[#f0f9f4] hover:text-[#1d7a58] text-[#1d7a58] font-bold transition-colors">
                          Home 3 (Active)
                        </a>
                        <a href="/" className="px-2.5 py-1.5 rounded-lg hover:bg-[#f0f9f4] hover:text-[#1d7a58] text-[#75736b] transition-colors">
                          Home 1
                        </a>
                        <a href="/" className="px-2.5 py-1.5 rounded-lg hover:bg-[#f0f9f4] hover:text-[#1d7a58] text-[#75736b] transition-colors">
                          Home 2
                        </a>
                        <Link href="#about" onClick={() => setPagesOpen(false)} className="px-2.5 py-1.5 rounded-lg hover:bg-[#f0f9f4] hover:text-[#1d7a58] text-[#75736b] transition-colors">
                          About Us
                        </Link>
                        <Link href="#services" onClick={() => setPagesOpen(false)} className="px-2.5 py-1.5 rounded-lg hover:bg-[#f0f9f4] hover:text-[#1d7a58] text-[#75736b] transition-colors">
                          Our Best Services
                        </Link>
                        <Link href="#pricing" onClick={() => setPagesOpen(false)} className="px-2.5 py-1.5 rounded-lg hover:bg-[#f0f9f4] hover:text-[#1d7a58] text-[#75736b] transition-colors">
                          Pricing Plans
                        </Link>
                      </div>
                    </div> */}

                    {/* Column 2: Inner & Content Pages */}
                    {/* <div className="space-y-2">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-[#1d7a58] pb-1 border-b border-gray-100">
                        Inner Pages
                      </h4>
                      <div className="flex flex-col space-y-1 text-sm font-medium">
                        <Link href="#team" onClick={() => setPagesOpen(false)} className="px-2.5 py-1.5 rounded-lg hover:bg-[#f0f9f4] hover:text-[#1d7a58] text-[#75736b] transition-colors">
                          Our Genius Team
                        </Link>
                        <Link href="#testimonials" onClick={() => setPagesOpen(false)} className="px-2.5 py-1.5 rounded-lg hover:bg-[#f0f9f4] hover:text-[#1d7a58] text-[#75736b] transition-colors">
                          Client Testimonials
                        </Link>
                        <Link href="#contact" onClick={() => setPagesOpen(false)} className="px-2.5 py-1.5 rounded-lg hover:bg-[#f0f9f4] hover:text-[#1d7a58] text-[#75736b] transition-colors">
                          Global Locations & Stats
                        </Link>
                        <Link href="#blog" onClick={() => setPagesOpen(false)} className="px-2.5 py-1.5 rounded-lg hover:bg-[#f0f9f4] hover:text-[#1d7a58] text-[#75736b] transition-colors">
                          Blog & News Post
                        </Link>
                        <Link href="#contact" onClick={() => setPagesOpen(false)} className="px-2.5 py-1.5 rounded-lg hover:bg-[#f0f9f4] hover:text-[#1d7a58] text-[#75736b] transition-colors">
                          Contact Consultant W
                        </Link>
                      </div>
                    </div> */}

                    {/* Column 3: E-Commerce & Utilities */}
                    {/* <div className="space-y-2">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-[#1d7a58] pb-1 border-b border-gray-100">
                        Shop & Utility
                      </h4>
                      <div className="flex flex-col space-y-1 text-sm font-medium">
                        <button
                          onClick={() => {
                            setPagesOpen(false);
                            setCartOpen(true);
                          }}
                          className="px-2.5 py-1.5 text-left rounded-lg hover:bg-[#f0f9f4] hover:text-[#1d7a58] text-[#75736b] transition-colors cursor-pointer flex items-center justify-between"
                        >
                          <span>Store & Cart</span>
                          <span className="text-[11px] bg-[#68e9ba]/30 text-[#1f4638] font-bold px-1.5 py-0.5 rounded">Shop</span>
                        </button>
                        <button
                          onClick={() => {
                            setPagesOpen(false);
                            setQuoteModalOpen(true);
                          }}
                          className="px-2.5 py-1.5 text-left rounded-lg hover:bg-[#f0f9f4] hover:text-[#1d7a58] text-[#75736b] transition-colors cursor-pointer"
                        >
                          Get A Quote
                        </button>
                        <Link href="#contact" onClick={() => setPagesOpen(false)} className="px-2.5 py-1.5 rounded-lg hover:bg-[#f0f9f4] hover:text-[#1d7a58] text-[#75736b] transition-colors">
                          FAQ & Consultation
                        </Link>
                        <Link href="#contact" onClick={() => setPagesOpen(false)} className="px-2.5 py-1.5 rounded-lg hover:bg-[#f0f9f4] hover:text-[#1d7a58] text-[#75736b] transition-colors">
                          Licensing & Copyright
                        </Link>
                      </div>
                    </div> */}
                  {/* </motion.div>
                )}
              </AnimatePresence>
            </div> */}
          </nav>

          {/* Right Action Icons & CTA Button */}
          {/* <div className="hidden md:flex items-center gap-5">
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
            <button
              onClick={() => setQuoteModalOpen(true)}
              className="btn-webflow-mint px-6 py-2.5 text-sm font-semibold flex items-center gap-2 cursor-pointer shadow-md hover:shadow-lg transition-all"
            >
              Get a quote now
            </button>
          </div> */}

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
            className="fixed top-16 left-0 right-0 z-40 bg-white border-b border-gray-100 px-6 py-6 md:hidden shadow-md max-h-[85vh] overflow-y-auto"
          >
            <div className="flex flex-col gap-3 text-[#39413e] text-base font-medium">
              <div className="text-xs font-bold uppercase text-[#1d7a58]">Pages</div>
              <Link href="/" onClick={() => setMobileMenuOpen(false)}>
                Home
              </Link>
              <Link href="/about" onClick={() => setMobileMenuOpen(false)}>
                About Us
              </Link>
              <Link href="/services" onClick={() => setMobileMenuOpen(false)}>
                Services
              </Link>
              <Link href="/team" onClick={() => setMobileMenuOpen(false)}>
                Our Team
              </Link>
              <Link href="/careers" onClick={() => setMobileMenuOpen(false)}>
                Careers
              </Link>
              <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                Contact Us
              </Link>
              <div className="pt-4 border-t border-gray-100 flex flex-col gap-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setCartOpen(true);
                  }}
                  className="w-full py-2.5 px-4 rounded-xl border border-gray-200 text-sm font-bold flex items-center justify-center gap-2"
                >
                  <ShoppingBag className="w-4 h-4" /> View Cart ({cartItems.length})
                </button>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setQuoteModalOpen(true);
                  }}
                  className="btn-webflow-mint w-full py-3 text-center font-bold block"
                >
                  Get a quote now
                </button>
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

      {/* Interactive Get A Quote Modal */}
      <AnimatePresence>
        {quoteModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setQuoteModalOpen(false)}
              className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            />
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 260 }}
              className="relative w-full max-w-lg rounded-[28px] bg-[#1f4638] p-6 sm:p-8 text-white shadow-2xl border border-white/10 z-10 max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={() => setQuoteModalOpen(false)}
                className="absolute top-5 right-5 p-2 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Close Modal"
              >
                <X className="w-5 h-5" />
              </button>

              {quoteSubmitted ? (
                <div className="text-center py-10 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-[#68e9ba]/20 text-[#68e9ba] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Quote Request Received!</h3>
                  <p className="text-[#9ecfb8] text-sm leading-relaxed max-w-sm mx-auto">
                    Thank you! Our senior strategy consultant will review your inquiry and reach out within 2 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleQuoteSubmit} className="space-y-4">
                  <div className="flex items-center gap-2 text-[#68e9ba] text-xs font-bold uppercase tracking-wider">
                    <Sparkles className="w-4 h-4" /> Free Consultation & Estimate
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-normal leading-snug">
                    Get A Custom <span className="font-serif-accent italic text-[#68e9ba]">Quote</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-[#9ecfb8]">
                    Tell us about your strategic goals and our advisory experts will prepare a bespoke solution.
                  </p>

                  <div className="space-y-3 pt-2">
                    <div>
                      <label className="block text-xs font-semibold text-white/90 mb-1">Your Full Name *</label>
                      <input
                        type="text"
                        required
                        value={quoteForm.name}
                        onChange={(e) => setQuoteForm({ ...quoteForm, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full rounded-xl bg-white/10 border border-white/15 px-4 py-3 text-sm text-white placeholder-white/40 focus:border-[#68e9ba] focus:outline-none focus:ring-1 focus:ring-[#68e9ba]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-white/90 mb-1">Work Email *</label>
                      <input
                        type="email"
                        required
                        value={quoteForm.email}
                        onChange={(e) => setQuoteForm({ ...quoteForm, email: e.target.value })}
                        placeholder="john@company.com"
                        className="w-full rounded-xl bg-white/10 border border-white/15 px-4 py-3 text-sm text-white placeholder-white/40 focus:border-[#68e9ba] focus:outline-none focus:ring-1 focus:ring-[#68e9ba]"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-semibold text-white/90 mb-1">Service Required</label>
                        <select
                          value={quoteForm.service}
                          onChange={(e) => setQuoteForm({ ...quoteForm, service: e.target.value })}
                          className="w-full rounded-xl bg-[#16362b] border border-white/15 px-4 py-3 text-sm text-white focus:border-[#68e9ba] focus:outline-none"
                        >
                          <option value="Strategic Consulting">Strategic Consulting</option>
                          <option value="Innovation Advisory">Innovation Advisory</option>
                          <option value="Change Management">Change Management</option>
                          <option value="Business Development">Business Development</option>
                          <option value="Enterprise Advisory">Enterprise Advisory</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-white/90 mb-1">Budget Range</label>
                        <select
                          value={quoteForm.budget}
                          onChange={(e) => setQuoteForm({ ...quoteForm, budget: e.target.value })}
                          className="w-full rounded-xl bg-[#16362b] border border-white/15 px-4 py-3 text-sm text-white focus:border-[#68e9ba] focus:outline-none"
                        >
                          <option value="<$5,000">&lt; $5,000</option>
                          <option value="$5,000 - $15,000">$5,000 - $15,000</option>
                          <option value="$15,000 - $50,000">$15,000 - $50,000</option>
                          <option value="$50,000+">$50,000+</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-white/90 mb-1">Project Summary / Notes</label>
                      <textarea
                        rows={3}
                        value={quoteForm.message}
                        onChange={(e) => setQuoteForm({ ...quoteForm, message: e.target.value })}
                        placeholder="Briefly describe your objectives or challenges..."
                        className="w-full rounded-xl bg-white/10 border border-white/15 px-4 py-2.5 text-sm text-white placeholder-white/40 focus:border-[#68e9ba] focus:outline-none focus:ring-1 focus:ring-[#68e9ba]"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full mt-2 rounded-xl bg-[#68e9ba] py-3.5 text-sm font-bold text-[#1f4638] shadow-lg hover:bg-[#5de0af] transition-all hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer"
                  >
                    Submit Quote Request <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
