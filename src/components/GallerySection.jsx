"use client";

import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";

export default function GallerySection() {
  return (
    <section className="pt-8 pb-20 lg:pt-12 lg:pb-32 bg-white overflow-hidden border-t border-gray-100">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Content */}
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-3 mb-6 lg:mb-8 border-l-4 border-brand-primary pl-4">
              <span className="text-[13px] font-extrabold text-[#0a192f] uppercase tracking-[0.15em]">
                Why SouzaDispatch
              </span>
            </div>

            <h2 className="text-[28px] sm:text-[36px] lg:text-[48px] font-extrabold text-[#0a192f] leading-[1.1] tracking-tight mb-5 lg:mb-6">
              Three of us. <br className="hidden sm:block" /> Same familiar faces everytime.
            </h2>
            
            <p className="text-[16px] sm:text-[18px] lg:text-[19px] text-gray-600 font-medium leading-relaxed mb-10">
              We are a father and his two sons. The person who quotes your move is the person carrying your sofa down the stairs.
            </p>

            <ul className="space-y-4 lg:space-y-6 mb-10 lg:mb-12">
              <li className="flex items-start gap-4">
                <div className="mt-1 bg-brand-primary/10 p-1 rounded-sm flex-shrink-0">
                  <Check className="w-4 h-4 text-brand-primary stroke-[3]" />
                </div>
                <span className="text-[16px] sm:text-[17px] text-gray-700 font-bold leading-snug">
                  Blankets, straps, trolleys and tools come as standard, not as an extra line on the bill.
                </span>
              </li>
              <li className="flex items-start gap-4">
                <div className="mt-1 bg-brand-primary/10 p-1 rounded-sm flex-shrink-0">
                  <Check className="w-4 h-4 text-brand-primary stroke-[3]" />
                </div>
                <span className="text-[16px] sm:text-[17px] text-gray-700 font-bold leading-snug">
                  We dismantle and reassemble beds, wardrobes and desks at no extra charge.
                </span>
              </li>
              <li className="flex items-start gap-4">
                <div className="mt-1 bg-brand-primary/10 p-1 rounded-sm flex-shrink-0">
                  <Check className="w-4 h-4 text-brand-primary stroke-[3]" />
                </div>
                <span className="text-[16px] sm:text-[17px] text-gray-700 font-bold leading-snug">
                  Ten years of North London moves, so we know which roads you cannot park on.
                </span>
              </li>
            </ul>

            <Link href="/about" className="inline-flex items-center gap-3 text-[14px] uppercase tracking-[0.15em] font-extrabold text-[#0a192f] hover:text-brand-primary transition-colors group border-b-2 border-[#0a192f] hover:border-brand-primary pb-1">
              Meet the family
              <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>

          {/* Right Image */}
          <div className="relative w-full max-w-[500px] mx-auto lg:ml-auto lg:mr-0 aspect-[4/5] lg:aspect-[3/4] mt-8 lg:mt-0">
            {/* Structured background offset for editorial look */}
            <div className="absolute top-4 -right-4 w-full h-full bg-[#0a192f] opacity-5 hidden sm:block"></div>
            
            <div className="absolute inset-0 w-full h-full bg-gray-100 overflow-hidden shadow-2xl flex items-center justify-center">
              <img src="/images/family.jpg" alt="Meet the family" className="absolute inset-0 w-full h-full object-cover z-10" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
