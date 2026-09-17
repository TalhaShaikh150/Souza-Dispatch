import Link from 'next/link';
import { Phone, MessageCircle } from 'lucide-react';

export default function CtaSection() {
  return (
    <section className="bg-[#ff8c00] py-16 lg:py-20 text-[#0f172a]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          
          <div className="max-w-2xl text-center lg:text-left">
            <h2 className="text-[36px] sm:text-[44px] lg:text-[48px] font-extrabold leading-tight font-heading mb-3">
              Moving soon? Get your price today.
            </h2>
            <p className="text-[16px] sm:text-[18px] opacity-90 leading-relaxed font-medium">
              Call us, or send a video of your rooms on WhatsApp and we will come back with a fixed quote.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto flex-shrink-0">
            <a 
              href="tel:02081914510" 
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#0f172a] hover:bg-slate-800 text-white px-8 py-4 rounded-full font-bold text-[16px] shadow-sm hover:shadow-md transition-all"
            >
              <Phone className="w-5 h-5" />
              020 8191 4510
            </a>
            
            <a 
              href="https://wa.me/447862036671" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-[#0f172a] px-8 py-4 rounded-full font-bold text-[16px] shadow-sm hover:shadow-md transition-all"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              WhatsApp us
            </a>
          </div>
          
        </div>
      </div>
    </section>
  );
}
