
export const metadata = {
  title: "Contact Us | SouzaDispatch",
  description: "Get a quote for your move. Contact SouzaDispatch today.",
};

export default function ContactPage() {
  return (
    <div className="py-20 bg-brand-light min-h-[60vh]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-brand-white rounded-2xl shadow-sm border border-brand-gray/50 p-8 md:p-12 max-w-[800px] mx-auto">
          <h1 className="text-[32px] md:text-[45px] font-bold text-brand-dark mb-6 text-center">Contact Us</h1>
          <p className="text-[16px] md:text-[18px] text-brand-slate leading-relaxed mb-8 text-center">
            Ready to move? Fill out the form below or call us at <strong>07862036671</strong>.
          </p>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-[14px] font-bold text-brand-dark mb-2">Name</label>
                <input type="text" className="w-full px-4 py-3 bg-brand-light border border-brand-gray rounded-md focus:outline-none focus:border-brand-green" />
              </div>
              <div>
                <label className="block text-[14px] font-bold text-brand-dark mb-2">Phone</label>
                <input type="tel" className="w-full px-4 py-3 bg-brand-light border border-brand-gray rounded-md focus:outline-none focus:border-brand-green" />
              </div>
            </div>
            <div>
              <label className="block text-[14px] font-bold text-brand-dark mb-2">Message Details</label>
              <textarea rows={4} className="w-full px-4 py-3 bg-brand-light border border-brand-gray rounded-md focus:outline-none focus:border-brand-green"></textarea>
            </div>
            <button type="submit" className="w-full py-4 bg-[#ff8c00] text-white font-bold rounded-xl shadow-sm hover:bg-[#e07b00] transition-colors focus:outline-none text-[15px]">
              Submit Request
            </button>
          </form>

          <div className="mt-8 pt-8 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-[14px] text-gray-500">Connect with us on social media:</span>
            <div className="flex items-center gap-3">
              <a 
                href="https://www.facebook.com/profile.php?id=61584689547300" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-700 hover:bg-[#ff8c00] hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a 
                href="https://www.instagram.com/souzadispatch/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-700 hover:bg-[#ff8c00] hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a 
                href="https://www.linkedin.com/company/souzadispatch" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-700 hover:bg-[#ff8c00] hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
