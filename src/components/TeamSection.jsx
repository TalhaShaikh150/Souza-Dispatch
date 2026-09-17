import Image from 'next/image';
import Link from 'next/link';
import { Check } from 'lucide-react';

export default function TeamSection() {
  return (
    <section className="py-12 lg:py-16 bg-[#0f172a] text-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left: Image */}
          <div className="relative w-full aspect-[4/3] lg:aspect-square rounded-[2rem] overflow-hidden shadow-2xl">
            <Image 
              src="/assets/imgi_20_three-of-us-2.jpg" 
              alt="SouzaDispatch Team - Father and two sons" 
              fill 
              className="object-cover"
            />
          </div>
          
          {/* Right: Content */}
          <div className="space-y-8">
            <div>
              <span className="text-[#ff8c00] font-bold text-[12px] tracking-widest uppercase mb-4 block">
                WHY SOUZADISPATCH
              </span>
              <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-extrabold text-white leading-[1.15] font-heading mb-6">
                Three of us. Same familiar faces everytime.
              </h2>
              <p className="text-[16px] sm:text-[18px] text-gray-300 leading-relaxed max-w-xl">
                We are a father and his two sons. The person who quotes your move is the person carrying your sofa down the stairs.
              </p>
            </div>
            
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1 bg-[#ff8c00] rounded-full p-1 text-white">
                  <Check className="w-4 h-4" strokeWidth={3} />
                </div>
                <p className="text-[15px] sm:text-[16px] text-gray-300 leading-relaxed">
                  Blankets, straps, trolleys and tools come as standard, not as an extra line on the bill.
                </p>
              </li>
              <li className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1 bg-[#ff8c00] rounded-full p-1 text-white">
                  <Check className="w-4 h-4" strokeWidth={3} />
                </div>
                <p className="text-[15px] sm:text-[16px] text-gray-300 leading-relaxed">
                  We dismantle and reassemble beds, wardrobes and desks at no extra charge.
                </p>
              </li>
              <li className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1 bg-[#ff8c00] rounded-full p-1 text-white">
                  <Check className="w-4 h-4" strokeWidth={3} />
                </div>
                <p className="text-[15px] sm:text-[16px] text-gray-300 leading-relaxed">
                  Ten years of North London moves, so we know which roads you cannot park on.
                </p>
              </li>
            </ul>
            
            <div className="pt-4">
              <Link 
                href="/about" 
                className="inline-flex items-center gap-2 text-[#ff8c00] hover:text-white font-bold text-[16px] transition-colors"
              >
                Meet the family <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
            
          </div>
          
        </div>
      </div>
    </section>
  );
}
