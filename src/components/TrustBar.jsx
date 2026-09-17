import { Video, Tag, Heart } from 'lucide-react';

export default function TrustBar() {
  return (
    <div className="w-full bg-[#0f172a] border-y-4 border-[#ff8c00] py-5 lg:py-6 relative z-20">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-6">
        
        {/* Compact, wrapping flex container for mobile to show everything at a glance */}
        <div className="flex flex-wrap items-center justify-center lg:justify-between gap-x-6 gap-y-5 lg:gap-0">
          
          {/* Item 1 */}
          <div className="flex items-center justify-center gap-2">
            <span className="text-2xl lg:text-4xl font-extrabold text-white font-heading">10<span className="text-[#ff8c00]">+</span></span>
            <span className="text-[10px] lg:text-xs uppercase tracking-widest font-bold text-gray-300 leading-snug">Years in<br />Business</span>
          </div>

          <div className="hidden lg:block w-px h-10 bg-gray-700"></div>

          {/* Item 2 */}
          <div className="flex items-center justify-center gap-2">
            <span className="text-2xl lg:text-4xl font-extrabold text-white font-heading">100s</span>
            <span className="text-[10px] lg:text-xs uppercase tracking-widest font-bold text-gray-300 leading-snug">Moves<br />Completed</span>
          </div>

          <div className="hidden lg:block w-px h-10 bg-gray-700"></div>

          {/* Item 3 */}
          <div className="flex items-center justify-center gap-2">
            <div className="bg-[#ff8c00]/10 p-1.5 lg:p-2 rounded-full text-[#ff8c00]">
              <Video className="w-4 h-4 lg:w-5 lg:h-5" />
            </div>
            <span className="text-[10px] lg:text-xs uppercase tracking-widest font-bold text-white leading-snug">Free Video<br />Survey</span>
          </div>

          <div className="hidden lg:block w-px h-10 bg-gray-700"></div>

          {/* Item 4 */}
          <div className="flex items-center justify-center gap-2">
            <div className="bg-[#ff8c00]/10 p-1.5 lg:p-2 rounded-full text-[#ff8c00]">
              <Tag className="w-4 h-4 lg:w-5 lg:h-5" />
            </div>
            <span className="text-[10px] lg:text-xs uppercase tracking-widest font-bold text-white leading-snug">Fixed Price,<br />No Hidden Fees</span>
          </div>

          <div className="hidden lg:block w-px h-10 bg-gray-700"></div>

          {/* Item 5 */}
          <div className="flex items-center justify-center gap-2">
            <div className="bg-[#ff8c00]/10 p-1.5 lg:p-2 rounded-full text-[#ff8c00]">
              <Heart className="w-4 h-4 lg:w-5 lg:h-5" />
            </div>
            <span className="text-[10px] lg:text-xs uppercase tracking-widest font-bold text-white leading-snug">Family Run,<br />Not a Franchise</span>
          </div>

        </div>
      </div>
    </div>
  );
}
