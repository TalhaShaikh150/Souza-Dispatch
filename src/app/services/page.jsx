import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import HowWeHelp from '@/components/HowWeHelp';

export const metadata = {
  title: "Moving Services in London & UK | SouzaDispatch",
  description: "Explore our comprehensive range of moving services including local moves, office removals, man and van, and furniture transport.",
};

export default function ServicesPage() {
  return (
    <>
      <div className="py-20 bg-brand-dark min-h-[40vh] flex flex-col justify-center text-center">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-[36px] md:text-[50px] font-bold text-white mb-6">Our Services</h1>
          <p className="text-[16px] md:text-[18px] text-gray-300 max-w-[600px] mx-auto leading-relaxed">
            Professional, reliable, and compassionate moving solutions tailored to your specific needs across London and the UK.
          </p>
        </div>
      </div>
      
      {/* Re-use the beautifully designed Bento Grid from HowWeHelp */}
      <HowWeHelp />
      
      <div className="py-20 bg-brand-light border-t border-brand-gray/50">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-[28px] md:text-[36px] font-bold text-brand-dark mb-6">Ready to get started?</h2>
          <p className="text-brand-slate max-w-[600px] mx-auto mb-10 leading-relaxed">
            Contact us today for a free, no-obligation quote. Our team is ready to help make your next move your best move.
          </p>
          <Link href="/contact" className="px-8 py-4 bg-[#00ace0] text-white text-[16px] font-bold rounded-lg shadow-sm hover:bg-[#0095c2] transition-colors inline-block">
            Get Your Free Quote
          </Link>
        </div>
      </div>
    </>
  );
}
