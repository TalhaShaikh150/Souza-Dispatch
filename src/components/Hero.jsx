"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { CheckCircle2, Phone, Play, ArrowRight, Truck, MapPin } from "lucide-react";

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    "/assets/hero-slide-1.jpg",
    "/assets/hero-slide-2.jpg",
    "/assets/hero-slide-3.jpg",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="relative pt-20 pb-4 lg:pt-20 lg:pb-12 xl:pt-24 xl:pb-16 2xl:pt-40 2xl:pb-32 bg-[#f9fafb] overflow-visible">
      {/* Green Right Background Shape (Hidden on mobile for clean white background) */}
      <div className="hidden lg:block absolute top-0 right-0 w-[50%] h-[100%] bg-brand-primary rounded-bl-[80px] z-0"></div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-6 2xl:gap-8 items-center">
          
          {/* Left Content */}
          <div className="pt-4 lg:pt-8 2xl:pt-12">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 bg-gray-200 rounded-full py-1.5 px-4 mb-4 2xl:mb-6 shadow-sm">
              <div className="bg-white rounded-full p-1 shadow-sm">
                <Truck className="w-3 h-3 text-brand-primary" />
              </div>
              <span className="text-[13px] font-bold text-gray-700">Your Reliable Moving Partner</span>
            </div>
            
            {/* Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-[46px] xl:text-[54px] 2xl:text-[64px] font-extrabold leading-[1.1] text-gray-900 mb-4 2xl:mb-6 tracking-tight">
              Move Smart.<br/>
              Move Safe. Move<br/>
              with <span className="text-brand-primary relative inline-block">
                SouzaDispatch.
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-brand-primary" viewBox="0 0 200 20" fill="none" preserveAspectRatio="none">
                  <path d="M5 15Q100 0 195 15" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                </svg>
              </span>
            </h1>

            <p className="text-gray-600 text-base lg:text-lg mb-6 2xl:mb-8 max-w-md font-medium leading-relaxed">
              Reliable, fast, and affordable moving services you can trust. We handle your move with care from start to finish.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-4 lg:gap-6">
              <a href="tel:2676405946" className="flex items-center gap-2 bg-brand-primary hover:bg-green-800 text-white px-5 py-3 lg:px-6 lg:py-3.5 rounded-full font-bold transition-colors shadow-md text-sm lg:text-base">
                <div className="bg-white rounded-full p-1">
                  <Phone className="w-3 h-3 lg:w-4 lg:h-4 text-brand-primary fill-current" />
                </div>
                (267) 640 5946
              </a>
              
              <button className="flex items-center gap-2 lg:gap-3 text-gray-900 font-bold hover:text-brand-primary transition-colors group text-sm lg:text-base">
                <div className="bg-brand-secondary rounded-full p-2.5 lg:p-3 flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
                  <Play className="w-3 h-3 lg:w-4 lg:h-4 text-[#111827] fill-current" />
                </div>
                Watch Video
              </button>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative flex justify-center lg:justify-end mt-8 lg:mt-0">
            {/* Sparkles Decoration */}
            <div className="absolute top-0 right-1/4 text-white/50 z-0">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                <path d="M12 2L15 9L22 12L15 15L12 22L9 15L2 12L9 9L12 2Z" />
              </svg>
            </div>

            {/* Yellow Circle */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[240px] sm:w-[300px] lg:w-[380px] 2xl:w-[480px] h-[240px] sm:h-[300px] lg:h-[380px] 2xl:h-[480px] bg-brand-secondary rounded-full z-0 shadow-xl"></div>
            
            {/* Main Image Slider */}
            <div className="relative z-10 h-[300px] lg:h-[360px] xl:h-[420px] 2xl:h-[600px] w-full max-w-[460px] 2xl:max-w-[500px] flex items-end justify-center">
              <div className="w-full h-[90%] bg-gray-200 rounded-[24px] border-[6px] border-white shadow-2xl relative overflow-hidden group">
                 {slides.map((slide, idx) => (
                   <img 
                     key={idx}
                     src={slide}
                     alt={`Moving service ${idx + 1}`}
                     className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${currentSlide === idx ? 'opacity-100' : 'opacity-0'}`}
                   />
                 ))}
                 
                 {/* Slider Indicators */}
                 <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-20">
                   {slides.map((_, idx) => (
                     <button 
                       key={idx}
                       onClick={() => setCurrentSlide(idx)}
                       className={`w-2 h-2 rounded-full transition-all ${currentSlide === idx ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/80'}`}
                     />
                   ))}
                 </div>
              </div>
            </div>
            
            {/* Floating quote badge */}
            <div className="absolute right-0 lg:-right-4 top-[70%] bg-white p-4 rounded-xl shadow-2xl z-20 max-w-[200px]">
               <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-secondary text-[#111827] font-bold rounded-full w-8 h-8 flex items-center justify-center text-base shadow-md border-2 border-white">
                 "
               </div>
               <p className="text-[12px] lg:text-[13px] font-medium text-gray-700 text-center italic mt-2">
                 "Our job is to make it smooth, simple, and worry-free for you."
               </p>
            </div>
          </div>
        </div>
        
        {/* Floating Quote Form */}
        <div className="mt-4 lg:mt-6 xl:mt-8 2xl:mt-24 bg-white rounded-2xl shadow-2xl p-5 lg:p-6 relative z-20 border border-gray-100 -mb-24 lg:-mb-32 max-w-[1200px] mx-auto">
           {/* Form Header */}
           <div className="flex flex-col md:flex-row items-center justify-between mb-6 gap-4 pb-4 border-b border-gray-100">
             <h3 className="text-[20px] font-bold text-gray-900">Get a Free Moving Quote</h3>
             <div className="flex flex-wrap justify-center gap-4 lg:gap-6 text-[13px] font-bold text-gray-600">
               <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-brand-primary fill-brand-primary/10" /> Professional Movers</span>
               <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-brand-primary fill-brand-primary/10" /> On-Time Delivery</span>
               <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-brand-primary fill-brand-primary/10" /> No Hidden Fees</span>
             </div>
           </div>
           
           {/* Inputs */}
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
             <div className="relative">
               <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                 <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
               </div>
               <input placeholder="Full Name" className="w-full bg-gray-50 border border-gray-200 rounded-full pl-11 pr-4 py-3.5 text-sm font-medium focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all" />
             </div>
             
             <div className="relative">
               <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                 <Phone className="w-[18px] h-[18px]" />
               </div>
               <input placeholder="Phone Number" className="w-full bg-gray-50 border border-gray-200 rounded-full pl-11 pr-4 py-3.5 text-sm font-medium focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all" />
             </div>
             
             <div className="relative">
               <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                 <MapPin className="w-[18px] h-[18px]" />
               </div>
               <input placeholder="Moving From" className="w-full bg-gray-50 border border-gray-200 rounded-full pl-11 pr-4 py-3.5 text-sm font-medium focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all" />
             </div>
             
             <div className="relative">
               <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                 <MapPin className="w-[18px] h-[18px]" />
               </div>
               <input placeholder="Moving To" className="w-full bg-gray-50 border border-gray-200 rounded-full pl-11 pr-4 py-3.5 text-sm font-medium focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all" />
             </div>
             
             <button className="bg-brand-primary hover:bg-green-800 text-white rounded-full px-6 py-3.5 font-bold flex items-center justify-center gap-2 transition-colors shadow-md">
                <div className="bg-white rounded-full p-1">
                  <ArrowRight className="w-3 h-3 text-brand-primary" />
                </div>
                Submit
             </button>
           </div>
        </div>
      </div>
    </section>
  );
}
