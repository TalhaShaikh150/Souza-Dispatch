import Link from 'next/link';
import Image from 'next/image';


export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white py-4 sm:py-6 lg:py-5 lg:min-h-[calc(100vh-65px)] lg:max-h-[calc(100vh-65px)] flex items-center border-b border-gray-100">
      <div className="max-w-[1280px] w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-10">
          
          {/* Left Content Column */}
          <div className="w-full lg:w-[53%] flex flex-col justify-center text-center lg:text-left">
            
            {/* Trust Eyebrow */}
            <div className="inline-flex items-center justify-center lg:justify-start mb-2.5">
              <span className="text-[#ff8c00] font-bold text-[12px] sm:text-[13px] tracking-wider uppercase">
                LONDON BASED REMOVALS
              </span>
            </div>

            {/* Clean, Refined Headline */}
            <h1 className="text-[34px] sm:text-[40px] lg:text-[44px] xl:text-[54px] font-bold text-[#0f172a] leading-[1.08] tracking-normal uppercase mb-3 max-w-[650px] w-full">
              MOVING HOUSES MADE EASIER
            </h1>
            
            {/* Subheadline */}
            <p className="text-[14px] sm:text-[15px] lg:text-[16px] text-[#475569] mb-3.5 max-w-[460px] mx-auto lg:mx-0 font-normal leading-relaxed">
              Compassionate, family-run moving services across London and the UK. Handled with genuine care from doorstep to doorstep.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-4">
              <Link 
                href="/contact" 
                className="px-7 py-2.5 lg:py-3 bg-[#ff8c00] text-white text-[14px] font-bold rounded-md shadow-sm hover:bg-[#e07b00] transition-colors focus:outline-none"
              >
                Get a Quote
              </Link>
              <Link 
                href="/services/local-moving" 
                className="px-7 py-2.5 lg:py-3 bg-white text-[#ff8c00] border-2 border-[#ff8c00] hover:bg-orange-50 text-[14px] font-bold rounded-md shadow-sm transition-colors focus:outline-none"
              >
                Our Services
              </Link>
            </div>


          </div>
          
          {/* Right Hero Image (Authentic photo card with genuine team caption) */}
          <div className="w-full lg:w-[47%] flex justify-center lg:justify-end items-center">
            <div className="relative w-full max-w-[360px] sm:max-w-[390px] lg:max-w-[420px] xl:max-w-[450px] h-[430px] sm:h-[470px] lg:h-[480px] xl:h-[520px] rounded-[28px] overflow-hidden shadow-xl border border-gray-100 bg-gray-50 group">
              <Image 
                src="/assets/hero.jpg" 
                alt="Esteban and SouzaDispatch Removals Team in London" 
                fill
                priority
                quality={100}
                unoptimized
                className="object-cover object-[center_top]"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
              />

            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
