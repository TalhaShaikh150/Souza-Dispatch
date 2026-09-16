import Link from 'next/link';
import Image from 'next/image';
import { ChevronDown, Menu } from 'lucide-react';

export default function Header() {
  return (
    <header className="w-full bg-brand-white border-b border-brand-gray sticky top-0 z-50">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-2.5 lg:py-3 flex justify-between items-center gap-4 lg:gap-8">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0 flex items-center space-x-2 focus:outline-none">
          <Image 
            src="/assets/logo.png" 
            alt="SouzaDispatch Logo" 
            width={180} 
            height={40} 
            style={{ width: "auto", height: "auto" }}
            className="h-8 lg:h-9 object-contain object-left" 
          />
        </Link>
        
        {/* Desktop Nav */}
        <nav className="hidden lg:flex space-x-2 xl:space-x-8 items-center">
          <Link href="/" className="px-1 py-2 text-[15px] font-semibold text-brand-dark border-b-2 border-brand-green hover:text-brand-green transition-colors focus:outline-none">
            Home
          </Link>
          
          <div className="relative group flex-shrink-0">
            <button className="px-1 py-2 text-[15px] font-semibold text-brand-dark hover:text-brand-green transition-colors focus:outline-none inline-flex items-center">
              Services
              <ChevronDown className="w-4 h-4 ml-1 opacity-70 group-hover:rotate-180 transition-transform duration-200" />
            </button>
            
            {/* Minimalist Dropdown Menu */}
            <div className="absolute left-0 top-full mt-1 w-[240px] rounded-lg shadow-card bg-brand-white border border-brand-gray/50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 overflow-hidden transform translate-y-2 group-hover:translate-y-0">
              <div className="py-2">
                <Link href="/services/local-moving" className="block px-5 py-2.5 text-[14px] text-brand-slate hover:text-brand-green hover:bg-brand-light transition-colors">
                  House Removals
                </Link>
                <Link href="/services/office-removals" className="block px-5 py-2.5 text-[14px] text-brand-slate hover:text-brand-green hover:bg-brand-light transition-colors">
                  Office Relocation
                </Link>
                <Link href="/services/furniture-removal" className="block px-5 py-2.5 text-[14px] text-brand-slate hover:text-brand-green hover:bg-brand-light transition-colors">
                  Furniture Transport
                </Link>
                <Link href="/services/man-and-van" className="block px-5 py-2.5 text-[14px] text-brand-slate hover:text-brand-green hover:bg-brand-light transition-colors">
                  Man and Van
                </Link>
              </div>
            </div>
          </div>

          <Link href="/about" className="px-1 py-2 text-[15px] font-semibold text-brand-dark hover:text-brand-green transition-colors focus:outline-none">About</Link>
          <Link href="/blog" className="px-1 py-2 text-[15px] font-semibold text-brand-dark hover:text-brand-green transition-colors focus:outline-none">Blog</Link>
          <Link href="/contact" className="px-1 py-2 text-[15px] font-semibold text-brand-dark hover:text-brand-green transition-colors focus:outline-none">Contact</Link>
        </nav>

        {/* Actions */}
        <div className="hidden lg:flex items-center flex-shrink-0">
          <Link href="/contact" className="px-7 py-2.5 bg-[#00ace0] text-white text-[15px] font-semibold rounded-full shadow-sm hover:bg-[#0099c7] transition-colors focus:outline-none">
            Get a Quote
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="lg:hidden text-brand-dark hover:text-brand-green transition-colors focus:outline-none" aria-label="Open menu">
          <Menu className="w-7 h-7" />
        </button>
      </div>
    </header>
  );
}
