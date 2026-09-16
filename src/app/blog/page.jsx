import Link from 'next/link';

export const metadata = {
  title: "Moving Tips & Blog | SouzaDispatch",
  description: "Read our latest tips and tricks for a seamless moving experience.",
};

export default function BlogPage() {
  return (
    <div className="py-20 bg-brand-light min-h-[60vh]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-[12px] font-bold tracking-widest text-brand-green uppercase mb-2">Our Blog</p>
          <h1 className="text-[32px] md:text-[45px] font-bold text-brand-dark mb-4">Moving Tips & Insights</h1>
          <p className="text-[16px] text-brand-slate max-w-2xl mx-auto">Discover expert advice, packing hacks, and everything you need to know about moving in London.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Placeholder Blog Post */}
          <div className="bg-brand-white rounded-2xl overflow-hidden shadow-sm border border-brand-gray/50 hover:shadow-card transition-shadow group">
            <div className="h-48 bg-brand-gray relative">
              <div className="absolute inset-0 bg-brand-green/10 group-hover:bg-transparent transition-colors"></div>
            </div>
            <div className="p-8">
              <p className="text-[12px] text-brand-green font-bold mb-2">Moving Hacks</p>
              <h3 className="text-[20px] font-bold text-brand-dark mb-3 leading-[1.3]">How to Pack Fragile Items Like a Pro</h3>
              <p className="text-[14px] text-brand-slate mb-6 line-clamp-3">
                Don't let your valuable glassware break during transit. Follow our comprehensive guide to packing fragile items securely...
              </p>
              <Link href="#" className="text-[14px] font-bold text-brand-dark hover:text-brand-green transition-colors inline-flex items-center">
                Read Article
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </Link>
            </div>
          </div>
          {/* Add more placeholders as needed */}
        </div>
      </div>
    </div>
  );
}
