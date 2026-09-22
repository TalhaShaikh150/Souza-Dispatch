import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-[#0a192f] text-white pt-16 lg:pt-20 pb-8 lg:pb-12 border-t-4 border-brand-primary">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16 mb-12 lg:mb-16">
          
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-block mb-8">
              <Image 
                src="/images/logo.png" 
                alt="SouzaDispatch Logo" 
                width={160} 
                height={48} 
                className="h-8 w-auto object-contain brightness-0 invert" 
              />
            </Link>
            <p className="text-[14px] text-gray-400 mb-8 max-w-xs leading-relaxed font-medium">
              A family-run removals firm in North London. Reliable, fully insured, and fixed pricing with no hidden fees.
            </p>
            <div className="flex flex-col gap-3">
              <a href="tel:02081914510" className="text-[18px] font-extrabold tracking-tight hover:text-brand-primary transition-colors flex items-center gap-3">
                <svg className="w-5 h-5 text-brand-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                020 8191 4510
              </a>
              <a href="mailto:contact@souzadispatch.com" className="text-[15px] font-medium tracking-wide text-gray-400 hover:text-brand-primary transition-colors flex items-center gap-3">
                <svg className="w-5 h-5 text-brand-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                contact@souzadispatch.com
              </a>
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-[12px] font-extrabold mb-6 text-white uppercase tracking-[0.2em]">Services</h3>
            <ul className="space-y-4 text-[14px] text-gray-400 font-medium">
              <li><Link href="/services/residential" className="hover:text-white transition-colors">Home & Flat Moves</Link></li>
              <li><Link href="/services/commercial" className="hover:text-white transition-colors">Office & Business</Link></li>
              <li><Link href="/services/packing" className="hover:text-white transition-colors">Packing Services</Link></li>
              <li><Link href="/services/storage" className="hover:text-white transition-colors">Student Moves</Link></li>
            </ul>
          </div>
          
          {/* Company */}
          <div>
            <h3 className="text-[12px] font-extrabold mb-6 text-white uppercase tracking-[0.2em]">Company</h3>
            <ul className="space-y-4 text-[14px] text-gray-400 font-medium">
              <li><Link href="/about" className="hover:text-white transition-colors">Meet the family</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact us</Link></li>
              <li><Link href="/quote" className="hover:text-white transition-colors">Get a Quote</Link></li>
              <li><Link href="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
            </ul>
          </div>

          {/* Social & Legal */}
          <div>
            <h3 className="text-[12px] font-extrabold mb-6 text-white uppercase tracking-[0.2em]">Follow Us</h3>
            <div className="flex space-x-4 mb-10">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:bg-brand-primary transition-colors">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:bg-brand-primary transition-colors">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
            </div>
            
            <h3 className="text-[12px] font-extrabold mb-6 text-white uppercase tracking-[0.2em]">Legal</h3>
            <ul className="space-y-4 text-[14px] text-gray-400 font-medium">
              <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
            </ul>
          </div>

        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-[13px] text-gray-500 font-medium">
          <p>&copy; {new Date().getFullYear()} SouzaDispatch. All rights reserved.</p>
          <div className="flex items-center gap-2 mt-4 md:mt-0">
            <span>North London</span>
            <span className="w-1 h-1 rounded-full bg-gray-600"></span>
            <span>7 days a week</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
