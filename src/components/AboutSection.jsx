import Image from 'next/image';
import Link from 'next/link';

export default function AboutSection() {
  return (
    <section className="py-24 lg:py-32 bg-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Left Side: Images & Badge */}
          <div className="w-full lg:w-1/2 relative">
            <h2 className="text-[32px] sm:text-[40px] font-black text-[#0f172a] mb-10 lg:hidden">
              About <span className="text-[#00ace0]">SouzaDispatch</span> Removals
            </h2>
            
            <div className="relative w-[85%] max-w-[500px]">
              {/* Main Image */}
              <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl">
                <Image 
                  src="/assets/house_removals_stock.jpg" 
                  alt="Professional Movers in London"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              
              {/* Secondary Overlapping Image */}
              <div className="absolute -bottom-10 -right-12 w-[65%] aspect-square rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
                <Image 
                  src="/assets/furniture_transport_stock.jpg" 
                  alt="Furniture Wrapping"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 30vw"
                />
              </div>

              {/* Circular Badge */}
              <div className="absolute top-10 -right-8 w-32 h-32 bg-[#0f172a] text-white rounded-full flex flex-col items-center justify-center p-4 shadow-xl border-4 border-white rotate-12 hover:rotate-0 transition-transform duration-500">
                <span className="text-[12px] font-bold uppercase tracking-widest text-[#00ace0] mb-1">Family</span>
                <span className="text-[20px] font-black leading-none">RUN</span>
                <span className="text-[10px] uppercase tracking-widest mt-1 opacity-80">Since 2018</span>
              </div>
            </div>
          </div>
          
          {/* Right Side: Text & Content */}
          <div className="w-full lg:w-1/2 mt-16 lg:mt-0">
            <h2 className="hidden lg:block text-[42px] xl:text-[52px] font-black text-[#0f172a] mb-8 leading-[1.1]">
              About <span className="text-[#00ace0]">SouzaDispatch</span> Removals
            </h2>
            
            <div className="text-[16px] lg:text-[18px] text-gray-600 space-y-6 leading-relaxed mb-10">
              <p>
                SouzaDispatch is dedicated to making every move simple, safe, and stress-free. As a family-run removal company in London, we treat every single home and item with the same level of care as if it were our own.
              </p>
              <p>
                With years of experience in residential and commercial relocation across the UK, our skilled team handles every detail with care and precision. From packing fragile antiques to transporting heavy furniture, we focus on delivering reliable service you can trust, ensuring your belongings arrive on time and in perfect condition.
              </p>
            </div>

            <Link 
              href="/about" 
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#00ace0] text-white text-[16px] font-bold rounded-full shadow-lg hover:bg-[#0095c2] hover:scale-105 transition-all focus:outline-none"
            >
              Learn More About Us
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </Link>
          </div>

        </div>
        
      </div>
    </section>
  );
}
