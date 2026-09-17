"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronDown, Menu, X, MapPin, Mail, Phone } from 'lucide-react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Main Nav */}
      <header className="absolute top-0 left-0 w-full z-50 bg-transparent py-4 lg:py-6">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center gap-4">
          
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 flex items-center p-2 rounded-xl z-50 relative">
            <Image 
              src="/assets/logo.png" 
              alt="SouzaDispatch Logo" 
              width={140} 
              height={30} 
              style={{ width: "auto", height: "auto" }}
              className="h-[12px] sm:h-3.5 lg:h-5 object-contain transition-all duration-300" 
            />
          </Link>
          
          {/* Desktop Nav - Pill Shape */}
          <nav className="hidden lg:flex items-center bg-white rounded-full px-2 py-1.5 border border-gray-200 shadow-sm">
            <Link href="/" className="px-5 py-2 text-[14px] font-bold text-white bg-[#0f172a] rounded-full shadow-sm">
              Home
            </Link>
            
            <Link href="/about" className="px-5 py-2 text-[14px] font-medium text-slate-700 hover:text-[#ff8c00] transition-colors">
              About Us
            </Link>

            <div className="relative group flex-shrink-0">
              <Link href="/services" className="px-5 py-2 text-[14px] font-medium text-slate-700 hover:text-[#ff8c00] transition-colors inline-flex items-center">
                Services
                <ChevronDown className="w-4 h-4 ml-1 opacity-70 group-hover:rotate-180 transition-transform duration-200" />
              </Link>
              
              <div className="absolute left-0 top-full mt-2 w-[240px] rounded-xl shadow-xl bg-white border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 overflow-hidden transform translate-y-2 group-hover:translate-y-0">
                <div className="py-2">
                  <Link href="/services/local-moving" className="block px-5 py-3 text-[14px] text-slate-700 hover:text-[#ff8c00] hover:bg-[#ff8c00]/10 transition-colors">
                    House Removals
                  </Link>
                  <Link href="/services/office-removals" className="block px-5 py-3 text-[14px] text-slate-700 hover:text-[#ff8c00] hover:bg-[#ff8c00]/10 transition-colors">
                    Office Relocation
                  </Link>
                  <Link href="/services/furniture-removal" className="block px-5 py-3 text-[14px] text-slate-700 hover:text-[#ff8c00] hover:bg-[#ff8c00]/10 transition-colors">
                    Furniture Transport
                  </Link>
                  <Link href="/services/man-and-van" className="block px-5 py-3 text-[14px] text-slate-700 hover:text-[#ff8c00] hover:bg-[#ff8c00]/10 transition-colors">
                    Man and Van
                  </Link>
                </div>
              </div>
            </div>

            <Link href="/contact" className="px-5 py-2 text-[14px] font-medium text-slate-700 hover:text-[#ff8c00] transition-colors">
              Contact
            </Link>
          </nav>

          {/* Actions */}
          <div className="hidden lg:flex items-center flex-shrink-0">
            <Link href="/contact" className="px-7 py-3 bg-[#ff8c00] text-white text-[15px] font-bold rounded-full shadow-lg hover:bg-[#0095c2] hover:scale-105 transition-all focus:outline-none flex items-center gap-2">
              Get A Free Quote
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden text-slate-800 hover:text-[#ff8c00] transition-colors focus:outline-none p-2 rounded-md z-50 relative" 
            aria-label="Toggle menu"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-7 h-7 text-[#0f172a]" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-0 left-0 w-full bg-white shadow-2xl z-40 border-b border-gray-100 flex flex-col pt-24 pb-8 px-6 animate-in slide-in-from-top-4 duration-200">
            <nav className="flex flex-col space-y-5">
              <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="text-[20px] font-extrabold text-[#0f172a] hover:text-[#ff8c00]">
                Home
              </Link>
              <Link href="/about" onClick={() => setIsMobileMenuOpen(false)} className="text-[20px] font-extrabold text-[#0f172a] hover:text-[#ff8c00]">
                About Us
              </Link>
              
              <div className="flex flex-col space-y-4 pt-2">
                <span className="text-[20px] font-extrabold text-[#0f172a]">Services</span>
                <div className="flex flex-col space-y-4 pl-5 border-l-2 border-slate-100">
                  <Link href="/services/local-moving" onClick={() => setIsMobileMenuOpen(false)} className="text-[17px] font-medium text-slate-600 hover:text-[#ff8c00]">House Removals</Link>
                  <Link href="/services/office-removals" onClick={() => setIsMobileMenuOpen(false)} className="text-[17px] font-medium text-slate-600 hover:text-[#ff8c00]">Office Relocation</Link>
                  <Link href="/services/furniture-removal" onClick={() => setIsMobileMenuOpen(false)} className="text-[17px] font-medium text-slate-600 hover:text-[#ff8c00]">Furniture Transport</Link>
                  <Link href="/services/man-and-van" onClick={() => setIsMobileMenuOpen(false)} className="text-[17px] font-medium text-slate-600 hover:text-[#ff8c00]">Man and Van</Link>
                </div>
              </div>

              <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="text-[20px] font-extrabold text-[#0f172a] hover:text-[#ff8c00]">
                Contact
              </Link>
            </nav>
            <div className="mt-8 pt-8 border-t border-slate-100 flex flex-col gap-4">
              <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="w-full py-4 bg-[#ff8c00] text-white text-[16px] font-bold rounded-full shadow-lg text-center flex items-center justify-center gap-2">
                Get A Free Quote
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
