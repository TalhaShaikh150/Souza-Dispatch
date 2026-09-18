"use client";

import Image from "next/image";
import { ArrowRight, Settings } from "lucide-react";

export default function ProcessSection() {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Half - Split Layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20 lg:mb-28">
          
          {/* Left Content */}
          <div className="pt-8">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 bg-gray-100 rounded-full py-1.5 px-4 mb-6">
              <div className="bg-white rounded-full p-1 shadow-sm">
                <Settings className="w-3 h-3 text-brand-primary" />
              </div>
              <span className="text-[13px] font-bold text-gray-700">Our Process</span>
            </div>
            
            {/* Title */}
            <h2 className="text-[36px] sm:text-[42px] lg:text-[48px] font-extrabold text-gray-900 leading-[1.15] mb-6 tracking-tight">
              Simple Moving <span className="text-brand-primary relative inline-block">
                Process
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-brand-primary" viewBox="0 0 200 20" fill="none" preserveAspectRatio="none">
                  <path d="M5 15Q100 0 195 15" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                </svg>
              </span>
            </h2>

            {/* Description */}
            <p className="text-gray-600 text-lg mb-8 max-w-md font-medium leading-relaxed">
              Our process begins with a personalized consultation to understand need followed by carefully pack secure transportation time delivery.
            </p>

            {/* Button */}
            <button className="inline-flex items-center gap-2 bg-brand-secondary hover:bg-yellow-300 text-[#111827] px-6 py-3 rounded-full font-bold transition-all shadow-md">
              <div className="bg-white rounded-full p-1">
                <ArrowRight className="w-3 h-3 text-[#111827]" />
              </div>
              Start Your Move Today
            </button>
          </div>

          {/* Right Image */}
          <div className="relative z-10 rounded-[30px] overflow-hidden w-full aspect-video bg-gray-200 border-8 border-white shadow-xl flex items-center justify-center">
            <span className="text-gray-400 font-bold text-xl">Image Placeholder (Movers shaking hands)</span>
          </div>

        </div>

        {/* Bottom Half - 3 Steps Workflow */}
        <div className="relative">
          {/* Connecting Arrows (Visible on large screens) */}
          <div className="hidden lg:block absolute top-1/2 -translate-y-1/2 left-[28%] w-[8%] text-gray-400 z-0">
            <svg viewBox="0 0 100 24" fill="none" className="w-full h-full overflow-visible">
              <path d="M0 12h90M80 2l15 10-15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div className="hidden lg:block absolute top-1/2 -translate-y-1/2 right-[28%] w-[8%] text-gray-400 z-0">
            <svg viewBox="0 0 100 24" fill="none" className="w-full h-full overflow-visible">
              <path d="M0 12h90M80 2l15 10-15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12 relative z-10">
            
            {/* Step 1 - Active Green Block */}
            <div className="bg-brand-primary text-white p-8 lg:p-10 rounded-2xl shadow-xl flex flex-col items-center text-center transform transition-transform hover:-translate-y-2 duration-300">
              <div className="bg-white text-brand-primary w-14 h-14 rounded-full flex items-center justify-center font-black text-xl mb-6 shadow-sm">
                01
              </div>
              <h3 className="text-xl font-bold mb-4">Call Or Book Online</h3>
              <p className="text-white/80 font-medium text-sm leading-relaxed">
                Call (267) 640-5946. We'll give you a clear, honest estimate based on your specific needs.
              </p>
            </div>

            {/* Step 2 - White Block */}
            <div className="bg-white border border-gray-100 p-8 lg:p-10 rounded-2xl shadow-sm hover:shadow-xl flex flex-col items-center text-center transition-all hover:-translate-y-2 duration-300">
              <div className="bg-gray-100 text-gray-900 w-14 h-14 rounded-full flex items-center justify-center font-black text-xl mb-6">
                02
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">The Professional Pack</h3>
              <p className="text-gray-500 font-medium text-sm leading-relaxed">
                Our crew arrives on time, fully equipped, and ready to secure your belongings for a safe ride.
              </p>
            </div>

            {/* Step 3 - White Block */}
            <div className="bg-white border border-gray-100 p-8 lg:p-10 rounded-2xl shadow-sm hover:shadow-xl flex flex-col items-center text-center transition-all hover:-translate-y-2 duration-300">
              <div className="bg-gray-100 text-gray-900 w-14 h-14 rounded-full flex items-center justify-center font-black text-xl mb-6">
                03
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">The "Delivery" Guarantee</h3>
              <p className="text-gray-500 font-medium text-sm leading-relaxed">
                We place every box and piece of furniture exactly where you want it in your new home. You don't lift a finger.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
