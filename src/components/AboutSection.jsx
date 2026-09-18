"use client";

import Image from "next/image";
import { ArrowRight, Info } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="py-24 lg:py-32 bg-white overflow-hidden mt-20 lg:mt-32">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          
          {/* Left Side - Image Composition */}
          <div className="relative">
            {/* Main large image placeholder */}
            <div className="relative z-10 rounded-[30px] overflow-hidden w-[90%] aspect-[4/5] bg-gray-200 border-8 border-white shadow-xl flex items-center justify-center">
              <span className="text-gray-400 font-bold text-xl">Image Placeholder 1</span>
            </div>
            
            {/* Secondary small image placeholder overlapping */}
            <div className="absolute -bottom-8 right-0 z-20 w-[55%] aspect-square rounded-[30px] overflow-hidden bg-gray-300 border-8 border-white shadow-2xl flex items-center justify-center">
              <span className="text-gray-500 font-bold">Image 2</span>
            </div>
            
            {/* Decorative background element */}
            <div className="absolute top-1/2 -left-8 -translate-y-1/2 w-32 h-32 bg-green-50 rounded-full z-0"></div>
          </div>

          {/* Right Side - Content */}
          <div className="relative z-10 pt-8 lg:pt-0">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 bg-gray-100 rounded-full py-1.5 px-4 mb-6">
              <div className="bg-white rounded-full p-1 shadow-sm">
                <Info className="w-3 h-3 text-brand-primary" />
              </div>
              <span className="text-[13px] font-bold text-gray-700">About SouzaDispatch</span>
            </div>
            
            {/* Title */}
            <h2 className="text-[36px] sm:text-[42px] lg:text-[48px] font-extrabold text-gray-900 leading-[1.15] mb-6 tracking-tight">
              Your Trusted Partner In Safe & Stress-Free <span className="text-brand-primary relative inline-block">
                Moving
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-brand-primary" viewBox="0 0 200 20" fill="none" preserveAspectRatio="none">
                  <path d="M5 15Q100 0 195 15" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                </svg>
              </span>
            </h2>

            {/* Description */}
            <p className="text-gray-600 text-lg mb-10 leading-relaxed font-medium">
              Choose a moving company that puts your needs first. At SouzaDispatch, we provide reliable and professional moving services designed to make your relocation simple and worry-free.
            </p>

            {/* Bottom Content Block */}
            <div className="flex flex-col sm:flex-row items-center gap-8 border-t border-gray-100 pt-8">
              
              {/* Stat */}
              <div className="flex-shrink-0 text-center sm:text-left">
                <div className="text-[54px] font-black text-gray-900 leading-none tracking-tighter flex items-start justify-center sm:justify-start">
                  05<span className="text-2xl mt-2 ml-0.5 text-gray-400">+</span>
                </div>
                <div className="text-[13px] font-bold text-gray-500 uppercase tracking-wide mt-1">
                  Years of work<br/>experience
                </div>
              </div>

              {/* Text & Button */}
              <div className="flex-1 text-center sm:text-left border-l-0 sm:border-l sm:border-gray-100 sm:pl-8">
                <p className="text-gray-600 font-medium text-sm leading-relaxed mb-5">
                  Our team works closely with you to plan every detail, solutions to fit your moving needs.
                </p>
                <button className="inline-flex items-center gap-2 bg-brand-secondary hover:bg-yellow-300 text-[#111827] px-6 py-2.5 rounded-full font-bold transition-all shadow-md">
                  <div className="bg-white rounded-full p-1">
                    <ArrowRight className="w-3 h-3 text-[#111827]" />
                  </div>
                  Get Started Now
                </button>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
