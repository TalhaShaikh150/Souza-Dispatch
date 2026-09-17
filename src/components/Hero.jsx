"use client";

import Link from 'next/link';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/autoplay';

export default function Hero() {
  return (
    <section className="relative w-full bg-white pt-24 lg:pt-28 pb-12 lg:pb-16 overflow-hidden">
      
      <header className="relative z-10 max-w-[1400px] w-full mx-auto px-6 grid md:grid-cols-12 gap-10 lg:gap-12 items-center">
        
        {/* Left Content (Col 7) */}
        <div className="md:col-span-7 space-y-6 lg:space-y-8 min-w-0">
          <h1 className="text-[24px] min-[375px]:text-[28px] sm:text-4xl md:text-[42px] lg:text-5xl xl:text-[52px] font-extrabold tracking-tight text-[#0f172a] leading-[1.15] sm:leading-[1.1] uppercase drop-shadow-sm break-words" style={{ fontFamily: 'var(--font-heading-alt)' }}>
            MOVING MADE EFFORTLESS.<br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            START WITH <span className="text-[#ff8c00]">SOUZADISPATCH.</span>
          </h1>
          
          <p className="text-base lg:text-lg text-gray-600 leading-relaxed max-w-xl">
            Stop worrying about no-show movers or hidden fees. SouzaDispatch is the trusted, family-owned team in London that treats your home like our own.
          </p>

          {/* CTA Button Group */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            {/* WhatsApp */}
            <a 
              href="https://wa.me/447862036671" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20b858] text-white px-6 py-3.5 rounded-full font-bold shadow-md transition-all duration-200"
            >
              {/* WhatsApp SVG Icon */}
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.413 9.863-9.83.001-2.624-1.017-5.09-2.868-6.944-1.851-1.854-4.312-2.873-6.932-2.874-5.438 0-9.861 4.414-9.864 9.831-.001 1.738.464 3.432 1.346 4.927l-.982 3.586 3.682-.966zM17.472 14.382c-.32-.16-1.89-.933-2.185-1.043-.294-.11-.508-.16-.723.16-.213.32-.828 1.043-1.014 1.261-.188.218-.375.244-.694.084-.319-.16-1.348-.497-2.566-1.583-.948-.846-1.588-1.892-1.775-2.213-.188-.32-.02-.492.14-.651.144-.143.32-.373.48-.56.16-.188.213-.32.32-.533.107-.213.054-.4-.027-.56-.08-.16-.723-1.742-.99-2.387-.26-.625-.526-.54-.723-.55h-.615c-.213 0-.56.08-.853.4-.294.32-1.12 1.093-1.12 2.666 0 1.573 1.147 3.093 1.307 3.306.16.213 2.257 3.447 5.467 4.832.763.33 1.358.527 1.821.674.767.244 1.465.21 2.016.128.614-.092 1.89-.773 2.156-1.48.267-.707.267-1.312.188-1.44-.08-.128-.294-.208-.614-.368z"/>
              </svg>
              WhatsApp a Video Survey
            </a>
            
            {/* Phone */}
            <a 
              href="tel:07862036671" 
              className="inline-flex items-center justify-center gap-2 border border-gray-200 hover:bg-gray-50 bg-white text-[#0f172a] px-6 py-3.5 rounded-full font-bold shadow-sm transition"
            >
              <svg className="w-5 h-5 text-[#ff8c00] fill-current" viewBox="0 0 24 24">
                  <path d="M21.384 17.77c-1.22-.83-2.56-1.66-3.8-2.2-.44-.18-.94-.09-1.28.24l-1.4 1.4c-2.36-1.14-4.28-3.05-5.42-5.42l1.4-1.4c.34-.34.42-.84.24-1.28-.54-1.24-1.37-2.58-2.2-3.8-.32-.48-.88-.75-1.46-.75h-.02C6.544 4.54 5.614 5.14 5.164 6.03c-.87 1.73-.83 4.2 1.15 7.15 2.12 3.16 5.16 6.2 8.32 8.32 2.95 1.98 5.42 2.02 7.15 1.15.89-.45 1.49-1.38 1.51-2.28 0-.58-.27-1.14-.75-1.46l-1.16-.14z"/>
              </svg>
              Call: 07862036671
            </a>
          </div>
        </div>
        
        {/* Right Visual (Col 5) */}
        <div className="md:col-span-5 relative mt-8 md:mt-0 min-w-0">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-slate-100 h-[280px] sm:h-[360px] md:aspect-auto md:h-[300px] lg:h-[320px] xl:h-[380px]">
            
            <Swiper
              modules={[Autoplay, EffectFade]}
              effect="fade"
              loop={true}
              speed={1200}
              autoplay={{ delay: 4000, disableOnInteraction: false }}
              className="w-full h-full"
            >
              <SwiperSlide>
                <Image src="/assets/hero-slide-1.jpg" alt="Professional Moving Services" fill className="object-cover scale-[1.03]" priority sizes="(max-width: 1024px) 100vw, 50vw" />
              </SwiperSlide>
              <SwiperSlide>
                <Image src="/assets/hero-slide-2.jpg" alt="Expert Moving Team" fill className="object-cover scale-[1.03]" sizes="(max-width: 1024px) 100vw, 50vw" />
              </SwiperSlide>
              <SwiperSlide>
                <Image src="/assets/hero-slide-3.jpg" alt="Safe and Secure Transport" fill className="object-cover scale-[1.03]" sizes="(max-width: 1024px) 100vw, 50vw" />
              </SwiperSlide>
            </Swiper>
            
          </div>
        </div>
        
      </header>
      
    </section>
  );
}
