"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronDown, Menu, X, ArrowRight } from 'lucide-react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="absolute top-0 left-0 w-full z-50 bg-transparent py-4 lg:py-6">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center gap-4">
          
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 flex items-center z-50 relative">
            <Image 
              src="/assets/logo.png" 
              alt="SouzaDispatch Logo" 
              width={160} 
              height={48} 
              className="w-auto h-8 lg:h-9 object-contain" 
              priority 
            />
          </Link>
          
          {/* Desktop Nav */}
          <div className="hidden lg:flex flex-1 justify-center items-center px-8">
            <nav className="flex items-center gap-8 lg:gap-10">
              <Link href="/" className="relative text-[15px] font-bold text-gray-900 transition-colors group py-1">
                Home
                <span className="absolute left-0 bottom-0 w-full h-[2.5px] bg-brand-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 rounded-full"></span>
              </Link>
              
              <Link href="/about" className="relative text-[15px] font-bold text-gray-900 transition-colors group py-1">
                About
                <span className="absolute left-0 bottom-0 w-full h-[2.5px] bg-brand-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 rounded-full"></span>
              </Link>

              <div className="relative group flex-shrink-0">
                <Link href="/services" className="relative text-[15px] font-bold text-gray-900 transition-colors inline-flex items-center group py-1">
                  Services
                  <ChevronDown className="w-4 h-4 ml-1 opacity-90 group-hover:rotate-180 transition-transform duration-200" />
                  <span className="absolute left-0 bottom-0 w-full h-[2.5px] bg-brand-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 rounded-full"></span>
                </Link>
                
                <div className="absolute left-1/2 -translate-x-1/2 top-full mt-4 w-[260px] rounded-2xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] bg-white border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 overflow-hidden transform translate-y-3 group-hover:translate-y-0">
                  <div className="p-3 flex flex-col gap-1">
                    <Link href="/services/residential" className="block px-4 py-3 rounded-xl text-[14px] font-bold text-gray-700 hover:text-brand-primary hover:bg-green-50 transition-colors">
                      Residential Moving
                    </Link>
                    <Link href="/services/commercial" className="block px-4 py-3 rounded-xl text-[14px] font-bold text-gray-700 hover:text-brand-primary hover:bg-green-50 transition-colors">
                      Commercial Moving
                    </Link>
                    <Link href="/services/packing" className="block px-4 py-3 rounded-xl text-[14px] font-bold text-gray-700 hover:text-brand-primary hover:bg-green-50 transition-colors">
                      Packing Services
                    </Link>
                  </div>
                </div>
              </div>

              <Link href="/contact" className="relative text-[15px] font-bold text-gray-900 transition-colors group py-1">
                Contact
                <span className="absolute left-0 bottom-0 w-full h-[2.5px] bg-brand-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 rounded-full"></span>
              </Link>
            </nav>
          </div>

          {/* Actions */}
          <div className="hidden lg:flex items-center flex-shrink-0 ml-auto pl-8">
            <Link href="/quote" className="px-6 py-2.5 bg-brand-secondary text-[#111827] text-[15px] font-bold rounded-full shadow-lg hover:bg-yellow-300 transition-all focus:outline-none flex items-center gap-2">
              <div className="bg-white rounded-full p-1">
                <ArrowRight className="w-3 h-3 text-[#111827]" />
              </div>
              Get Free Quote
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
          <div className="lg:hidden absolute top-0 left-0 w-full bg-white shadow-2xl z-40 border-b border-gray-100 flex flex-col pt-24 pb-8 px-6 animate-in slide-in-from-top-4 duration-200">
            <nav className="flex flex-col space-y-5">
              <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="text-[20px] font-extrabold text-gray-900 hover:text-brand-primary">
                Home
              </Link>
              <Link href="/about" onClick={() => setIsMobileMenuOpen(false)} className="text-[20px] font-extrabold text-gray-900 hover:text-brand-primary">
                About
              </Link>
              <Link href="/services" onClick={() => setIsMobileMenuOpen(false)} className="text-[20px] font-extrabold text-gray-900 hover:text-brand-primary">
                Services
              </Link>
              <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="text-[20px] font-extrabold text-gray-900 hover:text-brand-primary">
                Contact
              </Link>
            </nav>
            <div className="mt-8 pt-8 border-t border-slate-100 flex flex-col gap-4">
              <Link href="/quote" onClick={() => setIsMobileMenuOpen(false)} className="w-full py-4 bg-brand-secondary text-[#111827] text-[16px] font-bold rounded-full shadow-lg text-center flex items-center justify-center gap-2">
                <div className="bg-white rounded-full p-1">
                  <ArrowRight className="w-4 h-4 text-[#111827]" />
                </div>
                Get Free Quote
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
