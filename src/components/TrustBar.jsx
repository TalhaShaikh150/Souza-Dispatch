import { Video, Tag, Heart } from 'lucide-react';

export default function TrustBar() {
  return (
    <div className="w-full bg-[#0f172a] border-y-4 border-[#ff8c00] py-5 lg:py-6 relative z-20">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="flex flex-wrap justify-between items-center gap-y-6">
          
          <div className="w-1/2 lg:w-auto flex items-center justify-center lg:justify-start gap-4">
            <span className="text-3xl lg:text-4xl font-extrabold text-white font-heading">10<span className="text-[#ff8c00]">+</span></span>
            <span className="text-xs uppercase tracking-widest font-bold text-gray-300 leading-snug">Years in<br />Business</span>
          </div>

          <div className="hidden lg:block w-px h-10 bg-gray-700"></div>

          <div className="w-1/2 lg:w-auto flex items-center justify-center lg:justify-start gap-4">
            <span className="text-3xl lg:text-4xl font-extrabold text-white font-heading">100s</span>
            <span className="text-xs uppercase tracking-widest font-bold text-gray-300 leading-snug">Moves<br />Completed</span>
          </div>

          <div className="hidden lg:block w-px h-10 bg-gray-700"></div>

          <div className="w-1/2 lg:w-auto flex items-center justify-center lg:justify-start gap-3">
            <div className="bg-[#ff8c00]/10 p-2 rounded-full text-[#ff8c00]">
              <Video className="w-5 h-5" />
            </div>
            <span className="text-[11px] lg:text-xs uppercase tracking-widest font-bold text-white leading-snug">Free Video<br />Survey Quote</span>
          </div>

          <div className="hidden lg:block w-px h-10 bg-gray-700"></div>

          <div className="w-1/2 lg:w-auto flex items-center justify-center lg:justify-start gap-3">
            <div className="bg-[#ff8c00]/10 p-2 rounded-full text-[#ff8c00]">
              <Tag className="w-5 h-5" />
            </div>
            <span className="text-[11px] lg:text-xs uppercase tracking-widest font-bold text-white leading-snug">Fixed Price,<br />No Hidden Fees</span>
          </div>

          <div className="hidden lg:block w-px h-10 bg-gray-700"></div>

          <div className="w-full lg:w-auto flex items-center justify-center lg:justify-start gap-3 mt-2 lg:mt-0">
            <div className="bg-[#ff8c00]/10 p-2 rounded-full text-[#ff8c00]">
              <Heart className="w-5 h-5" />
            </div>
            <span className="text-[11px] lg:text-xs uppercase tracking-widest font-bold text-white leading-snug">Family Run,<br />Not a Franchise</span>
          </div>

        </div>
      </div>
    </div>
  );
}
