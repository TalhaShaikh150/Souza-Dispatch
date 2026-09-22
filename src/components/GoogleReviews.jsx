"use client";

import { useRef } from "react";
import { Star, ChevronRight, ChevronLeft } from "lucide-react";

const GoogleIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
);

export default function GoogleReviews() {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -380, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 380, behavior: 'smooth' });
    }
  };

  const reviews = [
    {
      name: "Adam Chmichy",
      initial: "A",
      color: "bg-purple-100 text-purple-700",
      text: "10/10 experience, the delivery services are fast and direct. I’d definitely recommend this service, lovely staff as well. Esteban was very helpful in aiding me.",
    },
    {
      name: "Jessica Tran",
      image: "https://lh3.googleusercontent.com/a-/ALV-UjUdOSHkmHLNeWnnKMNDUADfBhXaDaPIgc8LIJ59nT9yEpn7aS3p=s36-c-rp-mo-br100",
      text: "These two amazing gentlemen helped me and business partner move into our beauty studio. they moved everything safely, efficiently and effectively, all in good time too. super friendly and professional, i highly recommend. thank you!!",
    },
    {
      name: "Michelle Truong",
      image: "https://lh3.googleusercontent.com/a/ACg8ocINFcth9C57myXLybfnj_Yfydbx-Cxq3lnKi3y16RJFmR1o-Q=s36-c-rp-mo-br100",
      text: "Used them for a move between two locations and booked the 2 man team. It was a father and son duo, both really friendly and easy to deal with. They worked efficiently and took great care with my items, especially a fragile mirror which they protected really well. Made the whole move feel a lot less stressful. Would definitely recommend.",
    },
    {
      name: "Eksir Ali",
      image: "https://lh3.googleusercontent.com/a/ACg8ocI5_EX9nm1zjxvgfG-1arb3GYN31Jr97PbnXkdtNpORsQQKn_M=s36-c-rp-mo-br100",
      text: "Great service. I contacted them last min for a 2 man with a van job and they did not disappoint. Will definitely recommend them!",
    },
    {
      name: "Fdrxd Trogano",
      image: "https://lh3.googleusercontent.com/a/ACg8ocI7EJBadLVWbFXX9NP_OOL3rs_Zemr-DBGHWhcxKjqcnpOmZQ=s36-c-rp-mo-br100",
      text: "Great service, boys were well-mannered. They were quick and thorough, would recommend.",
    },
    {
      name: "Anish Shah",
      image: "https://lh3.googleusercontent.com/a-/ALV-UjX8UATa_EXbBBxRIJyWjYZPsr3W-DTt58mQHiXbIpbPUNExNUxahg=s36-c-rp-mo-br100",
      text: "Good friendly and efficient team. Handled with care.",
    }
  ];

  return (
    <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none"></div>
      
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-12 lg:mb-16 gap-6">
          <div className="flex items-center gap-6 text-center md:text-left">
            <div className="w-16 h-16 bg-white rounded-2xl shadow-xl flex items-center justify-center border border-gray-100 flex-shrink-0">
              <GoogleIcon />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-[#0a192f] mb-2 tracking-tight">
                Loved by our customers
              </h2>
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
                <span className="font-bold text-gray-900 text-lg">5.0</span>
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <span className="text-gray-500 font-medium text-sm ml-2">Based on Google Reviews</span>
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <a href="https://share.google/2JzntXl5XGajCPixE" target="_blank" rel="noopener noreferrer" className="hidden md:inline-flex items-center gap-2 text-[13px] font-extrabold text-[#0a192f] uppercase tracking-[0.1em] hover:text-brand-primary transition-colors group">
              Read all Google Reviews
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            
            {/* Carousel Controls */}
            <div className="hidden md:flex items-center gap-2 ml-4">
              <button 
                onClick={scrollLeft} 
                className="w-10 h-10 rounded-full border-2 border-[#0a192f]/10 flex items-center justify-center hover:bg-[#0a192f] hover:text-white hover:border-[#0a192f] transition-all text-[#0a192f]"
                aria-label="Previous reviews"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button 
                onClick={scrollRight} 
                className="w-10 h-10 rounded-full border-2 border-[#0a192f]/10 flex items-center justify-center hover:bg-[#0a192f] hover:text-white hover:border-[#0a192f] transition-all text-[#0a192f]"
                aria-label="Next reviews"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Reviews Carousel */}
        <div 
          ref={scrollRef}
          className="flex items-stretch gap-6 overflow-x-auto snap-x snap-mandatory pb-8 -mx-4 px-4 sm:mx-0 sm:px-0 hide-scrollbar"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {reviews.map((review, idx) => (
            <div 
              key={idx} 
              className="min-w-[300px] md:min-w-[360px] w-[85vw] md:w-[360px] flex-shrink-0 snap-start bg-white rounded-none border border-gray-100 border-t-4 border-t-brand-primary p-6 lg:p-8 shadow-[0_15px_40px_-15px_rgba(59,130,246,0.15)] flex flex-col"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                  {review.image ? (
                    <img src={review.image} alt={review.name} className="w-12 h-12 rounded-full object-cover shadow-sm" />
                  ) : (
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg shadow-sm ${review.color}`}>
                      {review.initial}
                    </div>
                  )}
                  <div className="flex items-center">
                    <h4 className="font-extrabold text-gray-900 text-[15px] leading-tight">{review.name}</h4>
                  </div>
                </div>
                <div className="w-6 h-6 opacity-80 flex-shrink-0">
                  <GoogleIcon />
                </div>
              </div>
              
              <div className="flex text-yellow-400 mb-4 gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              
              <p className="text-gray-600 text-[14px] leading-relaxed flex-grow font-medium">
                "{review.text}"
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-4 text-center md:hidden">
          <a href="https://share.google/2JzntXl5XGajCPixE" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[13px] font-extrabold text-[#0a192f] uppercase tracking-[0.1em] hover:text-brand-primary transition-colors">
            Read all on Google <ChevronRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
