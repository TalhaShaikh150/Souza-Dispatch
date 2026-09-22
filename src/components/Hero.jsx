"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { CheckCircle2, Phone, Play, ArrowRight, Truck, MapPin, Star } from "lucide-react";

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    "/images/hero-slide-1.jpg",
    "/images/hero-slide-2.jpg",
    "/images/hero-slide-3.jpg",
  ];

  useEffect(() => {
    const timer = setInterval(() => {

      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="relative pt-24 lg:pt-28 bg-[#f9fafb] overflow-visible">
      {/* Background shape removed for cleaner editorial look */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pb-8 lg:pb-24">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-6 2xl:gap-8 items-center">
          
          {/* Left Content */}
          <div className="pt-0 lg:pt-2">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-3 mb-3 lg:mb-5 border-l-4 border-brand-primary pl-4">
              <span className="text-[13px] font-extrabold text-[#0a192f] uppercase tracking-[0.15em]">
                North London <span className="text-gray-300 mx-1">|</span> 7 days a week
              </span>
            </div>
            
            {/* Title */}
            <h1 className="text-[36px] sm:text-5xl lg:text-[52px] xl:text-[56px] 2xl:text-[60px] font-extrabold leading-[1.1] text-gray-900 mb-4 2xl:mb-6 tracking-tight">
              The Easy Way<br/>
              of <span className="text-brand-primary relative inline-block">
                Moving.
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-brand-primary" viewBox="0 0 200 20" fill="none" preserveAspectRatio="none">
                  <path d="M5 15Q100 0 195 15" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                </svg>
              </span>
            </h1>

            {/* Description */}
            <p className="mt-4 lg:mt-5 text-[16px] sm:text-[18px] lg:text-[19px] text-gray-600 font-medium leading-relaxed max-w-[500px]">
              A family-run removals firm in North London. Send us a sixty-second video of your rooms and we will send back a fixed price. No surveys to book, no hidden fees on the day.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mt-5 lg:mt-6">
              <a href="tel:02081914510" className="w-full sm:w-auto bg-[#0a192f] hover:bg-black text-white px-8 py-4 font-bold transition-colors flex items-center justify-center gap-3 text-[15px]">
                <Phone className="w-4 h-4 text-white" />
                020 8191 4510
              </a>
              <a href="https://wa.me/442081914510" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto bg-[#25D366] hover:bg-[#128C7E] text-white px-8 py-4 font-bold transition-colors flex items-center justify-center gap-3 text-[15px]">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
                </svg>
                WhatsApp a video
              </a>
            </div>
          </div>

          {/* Right Content */}
          <div className="relative mt-8 lg:mt-0 w-full max-w-[500px] h-[260px] sm:h-[350px] lg:h-[380px] xl:h-[480px] mx-auto lg:ml-auto lg:mr-0">
            
            {/* Structured background offset for editorial look */}
            <div className="hidden lg:block absolute top-4 -right-4 w-full h-full bg-[#0a192f] opacity-5"></div>
            
            <div className="absolute inset-0 w-full h-full bg-gray-100 overflow-hidden shadow-2xl">
              {slides.map((slide, idx) => (
                <img key={`main-${idx}`} src={slide} alt="Moving slide" className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${currentSlide === idx ? 'opacity-100 z-10' : 'opacity-0 z-0'}`} />
              ))}
            </div>
          </div>

        </div>
      </div>
      
      {/* Bottom Trust Bar - FULL WIDTH */}
      <div className="relative z-20 w-full bg-[#0a192f] border-t-4 border-brand-primary shadow-2xl">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 py-6 lg:py-10 grid grid-cols-2 md:grid-cols-3 xl:flex flex-wrap lg:justify-between items-start xl:items-center gap-6 lg:gap-4">
          
          {/* Stat 1 */}
          <div className="flex items-center gap-3 lg:gap-4">
            <div className="text-brand-primary font-black text-[24px] lg:text-3xl">10+</div>
            <div className="flex flex-col">
              <span className="text-[11px] lg:text-[12px] font-extrabold text-white uppercase tracking-[0.1em] leading-tight">Years in</span>
              <span className="text-[10px] lg:text-[11px] font-bold text-gray-400 uppercase tracking-[0.1em] leading-tight">business</span>
            </div>
          </div>

          <div className="hidden xl:block w-px h-12 bg-gray-700/50"></div>

          {/* Stat 2 */}
          <div className="flex items-center gap-3 lg:gap-4">
            <div className="text-brand-primary font-black text-[24px] lg:text-3xl">100s</div>
            <div className="flex flex-col">
              <span className="text-[11px] lg:text-[12px] font-extrabold text-white uppercase tracking-[0.1em] leading-tight">Of moves</span>
              <span className="text-[10px] lg:text-[11px] font-bold text-gray-400 uppercase tracking-[0.1em] leading-tight">completed</span>
            </div>
          </div>

          <div className="hidden xl:block w-px h-12 bg-gray-700/50"></div>

          {/* Stat 3 */}
          <div className="flex items-center gap-3 lg:gap-4 md:col-span-1">
            <svg className="w-6 h-6 lg:w-8 lg:h-8 stroke-[2.5] fill-none stroke-brand-primary flex-shrink-0" viewBox="0 0 24 24"><polygon points="23 7 16 12 23 17 23 7"></polygon><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect></svg>
            <div className="flex flex-col">
              <span className="text-[11px] lg:text-[12px] font-extrabold text-white uppercase tracking-[0.1em] leading-tight">Free video</span>
              <span className="text-[10px] lg:text-[11px] font-bold text-gray-400 uppercase tracking-[0.1em] leading-tight">survey quote</span>
            </div>
          </div>

          <div className="hidden xl:block w-px h-12 bg-gray-700/50"></div>

          {/* Stat 4 */}
          <div className="flex items-center gap-3 lg:gap-4">
            <svg className="w-6 h-6 lg:w-8 lg:h-8 stroke-[2.5] fill-none stroke-brand-primary flex-shrink-0" viewBox="0 0 24 24"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
            <div className="flex flex-col">
              <span className="text-[11px] lg:text-[12px] font-extrabold text-white uppercase tracking-[0.1em] leading-tight">Fixed price,</span>
              <span className="text-[10px] lg:text-[11px] font-bold text-gray-400 uppercase tracking-[0.1em] leading-tight">no hidden fees</span>
            </div>
          </div>

          <div className="hidden xl:block w-px h-12 bg-gray-700/50"></div>

          {/* Stat 5 */}
          <div className="flex items-center gap-3 lg:gap-4">
            <svg className="w-6 h-6 lg:w-8 lg:h-8 stroke-[2.5] fill-none stroke-brand-primary flex-shrink-0" viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
            <div className="flex flex-col">
              <span className="text-[11px] lg:text-[12px] font-extrabold text-white uppercase tracking-[0.1em] leading-tight">Family run,</span>
              <span className="text-[10px] lg:text-[11px] font-bold text-gray-400 uppercase tracking-[0.1em] leading-tight">not franchise</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
