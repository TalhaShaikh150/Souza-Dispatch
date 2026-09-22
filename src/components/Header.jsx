"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronDown, Menu, X, ArrowRight } from 'lucide-react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="absolute top-0 left-0 w-full z-50 bg-white border-b border-gray-100 py-4">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center gap-4">
          
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 flex items-center z-50 relative">
            <Image 
              src="/images/logo.png" 
              alt="SouzaDispatch Logo" 
              width={160} 
              height={48} 
              className="w-auto h-7 lg:h-8 object-contain" 
              priority 
            />
          </Link>
          
          {/* Desktop Nav */}
          <div className="hidden lg:flex flex-1 justify-center items-center px-8">
            <nav className="flex items-center gap-10">
              <Link href="/" className="text-[13px] font-bold text-[#0a192f] uppercase tracking-[0.15em] hover:text-brand-primary transition-colors py-2">
                Home
              </Link>
              
              <Link href="/about" className="text-[13px] font-bold text-[#0a192f] uppercase tracking-[0.15em] hover:text-brand-primary transition-colors py-2">
                About
              </Link>

              <div className="relative group flex-shrink-0">
                <Link href="/services" className="text-[13px] font-bold text-[#0a192f] uppercase tracking-[0.15em] hover:text-brand-primary transition-colors inline-flex items-center py-2">
                  Services
                  <ChevronDown className="w-4 h-4 ml-1 opacity-70 group-hover:rotate-180 transition-transform duration-200" />
                </Link>
                
                <div className="absolute left-1/2 -translate-x-1/2 top-full mt-4 w-[240px] shadow-[0_20px_40px_rgba(0,0,0,0.1)] bg-white border-t-4 border-brand-primary opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  <div className="flex flex-col">
                    <Link href="/services/residential" className="block px-6 py-4 text-[13px] font-bold text-[#0a192f] uppercase tracking-[0.1em] hover:bg-gray-50 border-b border-gray-100 transition-colors">
                      Residential
                    </Link>
                    <Link href="/services/commercial" className="block px-6 py-4 text-[13px] font-bold text-[#0a192f] uppercase tracking-[0.1em] hover:bg-gray-50 border-b border-gray-100 transition-colors">
                      Commercial
                    </Link>
                    <Link href="/services/packing" className="block px-6 py-4 text-[13px] font-bold text-[#0a192f] uppercase tracking-[0.1em] hover:bg-gray-50 transition-colors">
                      Packing
                    </Link>
                  </div>
                </div>
              </div>

              <Link href="/contact" className="text-[13px] font-bold text-[#0a192f] uppercase tracking-[0.15em] hover:text-brand-primary transition-colors py-2">
                Contact
              </Link>
            </nav>
          </div>

          {/* Actions */}
          <div className="hidden lg:flex items-center flex-shrink-0 ml-auto pl-8">
            <Link href="/quote" className="px-7 py-3.5 bg-[#0a192f] text-white text-[12px] uppercase tracking-[0.15em] font-extrabold hover:bg-brand-primary transition-colors focus:outline-none flex items-center gap-3">
              Get a quote <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden text-gray-900 hover:text-brand-primary transition-colors focus:outline-none p-2 rounded-md z-50 relative" 
            aria-label="Toggle menu"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-0 left-0 w-full bg-white shadow-2xl z-40 border-b-4 border-brand-primary flex flex-col pt-24 pb-8 px-6 animate-in slide-in-from-top-4 duration-200">
            <nav className="flex flex-col space-y-6 text-center">
              <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="text-[16px] font-extrabold text-[#0a192f] uppercase tracking-[0.2em] hover:text-brand-primary">
                Home
              </Link>
              <Link href="/about" onClick={() => setIsMobileMenuOpen(false)} className="text-[16px] font-extrabold text-[#0a192f] uppercase tracking-[0.2em] hover:text-brand-primary">
                About
              </Link>
              <Link href="/services" onClick={() => setIsMobileMenuOpen(false)} className="text-[16px] font-extrabold text-[#0a192f] uppercase tracking-[0.2em] hover:text-brand-primary">
                Services
              </Link>
              <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="text-[16px] font-extrabold text-[#0a192f] uppercase tracking-[0.2em] hover:text-brand-primary">
                Contact
              </Link>
            </nav>
            <div className="mt-8 pt-8 border-t border-slate-100 flex flex-col gap-4">
              <Link href="/quote" onClick={() => setIsMobileMenuOpen(false)} className="w-full py-4 bg-[#0a192f] hover:bg-brand-primary text-white text-[14px] uppercase tracking-[0.15em] font-bold transition-colors text-center flex items-center justify-center gap-3">
                Get a quote
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
