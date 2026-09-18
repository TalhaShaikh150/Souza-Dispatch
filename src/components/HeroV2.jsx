"use client";

import Image from "next/image";
import { ArrowRight, MapPin, CheckCircle2 } from "lucide-react";

export default function HeroV2() {
  return (
    <section className="relative min-h-[95vh] flex items-center justify-center pt-32 pb-20 overflow-hidden bg-[#0a0a0a]">
      {/* Cinematic Background */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/assets/hero-slide-2.jpg" 
          alt="SouzaDispatch Cinematic Hero"
          fill
          className="object-cover opacity-50 mix-blend-overlay"
          priority
        />
        {/* Deep Moody Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/60 via-[#0a0a0a]/40 to-[#0a0a0a] border-b border-white/5"></div>
        {/* Subtle Brand Color Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[70vw] h-[70vw] bg-brand-primary/20 blur-[140px] rounded-full pointer-events-none"></div>
      </div>

      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        
        {/* Ultra-clean Pill Badge */}
        <div className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-full py-2 px-6 mb-10 shadow-[0_0_15px_rgba(255,255,255,0.02)]">
          <span className="flex h-2.5 w-2.5 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-secondary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-secondary"></span>
          </span>
          <span className="text-[13px] font-bold tracking-[0.2em] text-white/90 uppercase">Intelligent Moving Logistics</span>
        </div>

        {/* Massive Typography */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[85px] font-black text-white leading-[1.05] tracking-tight mb-8">
          Move with <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-gray-500">
            Absolute Precision.
          </span>
        </h1>

        <p className="max-w-2xl text-lg sm:text-xl md:text-2xl text-gray-400 font-medium mb-12 leading-relaxed">
          The next generation of seamless, stress-free moving. Powered by reliable professionals and real-time coordination.
        </p>

        {/* Features Row */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-12 text-sm md:text-base font-semibold text-gray-300 mb-16">
          <span className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-brand-secondary" /> Fully Insured</span>
          <span className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-brand-secondary" /> Transparent Pricing</span>
          <span className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-brand-secondary" /> Real-time Tracking</span>
        </div>

        {/* Glassmorphic Inline Form */}
        <div className="w-full max-w-4xl bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-3 sm:p-4 shadow-2xl relative">
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-brand-primary/10 to-brand-secondary/10 pointer-events-none"></div>
          
          <div className="flex flex-col md:flex-row gap-3 relative z-10">
            
            <div className="relative flex-1 group">
              <div className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-brand-secondary transition-colors">
                <MapPin className="w-5 h-5" />
              </div>
              <input 
                placeholder="Moving From (Zip or City)" 
                className="w-full bg-black/40 border border-white/5 rounded-2xl pl-14 pr-4 py-4 md:py-5 text-white placeholder-gray-500 font-medium focus:outline-none focus:bg-black/60 focus:border-brand-primary/50 transition-all text-base"
              />
            </div>
            
            <div className="relative flex-1 group">
              <div className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-brand-secondary transition-colors">
                <MapPin className="w-5 h-5" />
              </div>
              <input 
                placeholder="Moving To (Zip or City)" 
                className="w-full bg-black/40 border border-white/5 rounded-2xl pl-14 pr-4 py-4 md:py-5 text-white placeholder-gray-500 font-medium focus:outline-none focus:bg-black/60 focus:border-brand-primary/50 transition-all text-base"
              />
            </div>

            <button className="bg-brand-primary hover:brightness-110 text-white rounded-2xl px-10 py-4 md:py-5 font-bold flex items-center justify-center gap-3 transition-all md:w-auto w-full text-base lg:text-lg">
              Get Quote
              <ArrowRight className="w-5 h-5" />
            </button>
            
          </div>
        </div>

      </div>
    </section>
  );
}
