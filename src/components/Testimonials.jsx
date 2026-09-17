"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';

const reviews = [
  {
    name: "Anish Shah",
    time: "2 months ago",
    text: "Good friendly and efficient team. Handled with care.",
    img: "https://lh3.googleusercontent.com/a-/ALV-UjX8UATa_EXbBBxRIJyWjYZPsr3W-DTt58mQHiXbIpbPUNExNUxahg=w40-h40-c-rp-mo-br100"
  },
  {
    name: "A C",
    time: "3 months ago",
    text: "Great experience with Esteban and his dad. Pricing was agreed upfront based on the number of items so there were no surprises. Great...",
    initial: "A",
    bg: "bg-teal-600"
  },
  {
    name: "Rosangela",
    time: "4 months ago",
    text: "I had the Souza Dispatch to help me move my stuff to on other place. And was joyful to have father and...",
    img: "https://lh3.googleusercontent.com/a-/ALV-UjU50L08yIUbuAkOnnWlRacuQf9nvKt9L_QCqFPk2_dslN_LGT08=w40-h40-c-rp-mo-br100"
  },
  {
    name: "Jessica Tran",
    time: "5 months ago",
    text: "these two amazing gentlemen helped me and business partner move into our beauty studio. they moved everything safely, efficientl...",
    img: "https://lh3.googleusercontent.com/a-/ALV-UjUdOSHkmHLNeWnnKMNDUADfBhXaDaPIgc8LIJ59nT9yEpn7aS3p=w40-h40-c-rp-mo-br100"
  },
  {
    name: "Michelle Truong",
    time: "5 months ago",
    text: "Used them for a move between two locations and booked the 2 man team. It was a father and son duo, both really friendly and easy to de...",
    initial: "M",
    bg: "bg-blue-600"
  },
  {
    name: "Iúri Almeida (Ashura 神)",
    time: "6 months ago",
    text: "Fast, efficient and Reliable, no complaints from me!",
    img: "https://lh3.googleusercontent.com/a-/ALV-UjVjl8BNXHVkC_mOwBBnMEfWXAX1_0wRtTTmuXn7DRJibCdo8jSM=w40-h40-c-rp-mo-ba12-br100"
  },
  {
    name: "Eksir Ali",
    time: "6 months ago",
    text: "Great service. I contacted them last min for a 2 man with a van job and they did not disappoint. Will definitely recommend them!",
    initial: "E",
    bg: "bg-slate-600"
  },
  {
    name: "Mahamed",
    time: "6 months ago",
    text: "Very Friendly Service, really helped my mum who couldn't speak English, very punctual, fast and professional. I can't thank them...",
    initial: "M",
    bg: "bg-orange-800"
  },
  {
    name: "Myrna Norse",
    time: "7 months ago",
    text: "I can't say enough good things about SouzaDispatch Removals. From start to finish, the experience was fantastic. The team was prompt...",
    initial: "M",
    bg: "bg-purple-600"
  },
  {
    name: "Ann Pyeron",
    time: "8 months ago",
    text: "Esteban and team are the best. They are prompt, courteous and professional. Excellent communication & updates. I had a very challengi...",
    initial: "A",
    bg: "bg-green-600"
  }
];

export default function Testimonials() {
  return (
    <section className="py-12 lg:py-16 bg-[#f6f9fc]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Header */}
        <div className="text-center mb-10">
          <span className="text-[#3b82f6] font-bold text-[12px] tracking-widest uppercase mb-3 block">
            REVIEWS
          </span>
          <h2 className="text-[32px] sm:text-[40px] lg:text-[46px] font-black text-[#0f172a] leading-tight font-heading mb-4">
            What our customers think
          </h2>
          <p className="text-gray-500 text-[15px] sm:text-[17px]">
            Every review below is left by a real customer on our Google Business Profile.
          </p>
        </div>

        {/* Trustindex Summary Bar */}
        <div className="bg-white rounded-xl border border-gray-200 p-4 sm:p-5 flex flex-col md:flex-row items-center justify-between shadow-sm mb-8 gap-4 md:gap-0">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-3 gap-y-2">
            {/* Google Text Logo Approximation */}
            <div className="flex items-center text-[20px] sm:text-[22px] font-medium tracking-tighter">
              <span className="text-[#4285F4]">G</span>
              <span className="text-[#EA4335]">o</span>
              <span className="text-[#FBBC05]">o</span>
              <span className="text-[#4285F4]">g</span>
              <span className="text-[#34A853]">l</span>
              <span className="text-[#EA4335]">e</span>
            </div>
            
            {/* Stars */}
            <div className="flex items-center text-[#FBBC05] text-[16px] sm:text-[18px]">
              ★★★★★
            </div>
            
            {/* Rating */}
            <div className="flex items-center gap-1.5 sm:gap-2 text-[13px] sm:text-[15px] font-bold text-[#0f172a]">
              5.0 <span className="font-normal text-gray-300">|</span> Top Rated Service
            </div>
          </div>
          
          <div className="relative group flex-shrink-0 cursor-help">
            <div className="bg-[#1b7b54] text-white text-[12px] sm:text-[13px] font-medium px-3 sm:px-4 py-2 rounded flex items-center gap-1.5 shadow-sm hover:bg-[#156343] transition-colors">
              Verified by Trustindex
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="16" x2="12" y2="12"></line>
                <line x1="12" y1="8" x2="12.01" y2="8"></line>
              </svg>
            </div>
            
            {/* Tooltip Popup */}
            <div className="hidden md:block absolute bottom-full right-0 mb-3 w-[320px] bg-white border border-gray-800 rounded-lg shadow-2xl p-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 text-left transform translate-y-2 group-hover:translate-y-0 origin-bottom-right">
              
              {/* Downward pointing caret with border */}
              <div className="absolute top-full right-6 w-3.5 h-3.5 bg-white border-b border-r border-gray-800 transform rotate-45 -translate-y-[8px]"></div>
              
              <p className="text-[14.5px] text-[#0f172a] leading-relaxed relative z-10">
                <span className="font-bold">Trustindex verified badge is the Universal Symbol of Trust.</span> Only the greatest companies can get the verified badge who has a review score above 4.5, based on customer reviews over the past 12 months.{" "}
                <a 
                  href="https://www.trustindex.io/the-trustindex-verified-badge/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="underline decoration-1 underline-offset-2 hover:text-[#ff8c00] transition-colors font-medium whitespace-nowrap"
                >
                  Read more
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Swiper Carousel Container with Custom Arrows */}
        <div className="relative -mx-4 sm:mx-0 group min-w-0 overflow-hidden sm:overflow-visible">
          <Swiper
            modules={[Autoplay, Navigation]}
            navigation={{
              nextEl: '.swiper-btn-next',
              prevEl: '.swiper-btn-prev',
            }}
            spaceBetween={16}
            slidesPerView="auto"
            loop={true}
            speed={800} // Smooth, subtle transition
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            className="pb-8 px-4 sm:px-0"
          >
            {reviews.map((review, idx) => (
              <SwiperSlide key={idx} className="!w-[280px] min-[375px]:!w-[300px] sm:!w-[340px] !h-auto flex">
                <div className="w-full h-full bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow relative flex flex-col">
                  
                  {/* Header: Avatar, Name, Time, Google Logo */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      {review.img ? (
                        <img 
                          src={review.img} 
                          alt={review.name} 
                          className="w-10 h-10 rounded-full object-cover shadow-sm"
                        />
                      ) : (
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-[16px] ${review.bg} shadow-sm`}>
                          {review.initial}
                        </div>
                      )}
                      <div>
                        <h4 className="font-bold text-[#0f172a] text-[15px] leading-tight">{review.name}</h4>
                        <span className="text-[13px] text-gray-500">{review.time}</span>
                      </div>
                    </div>
                    
                    {/* Tiny Google G Logo */}
                    <svg width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                    </svg>
                  </div>

                  {/* Stars & Verified Check */}
                  <div className="flex items-center gap-1.5 mb-3">
                    <div className="flex text-[#FBBC05] text-[16px] tracking-tight">
                      ★★★★★
                    </div>
                    <svg className="w-4 h-4 text-[#4285F4]" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm-1.9 14.7L6 12.6l1.5-1.5 2.6 2.6 6.4-6.4 1.5 1.5-7.9 7.9z"/>
                    </svg>
                  </div>
                  
                  {/* Review Text */}
                  <p className="text-[14px] text-[#334155] leading-relaxed mb-2 flex-grow">
                    {review.text}
                  </p>
                  
                  <span className="text-[13px] text-gray-400 cursor-pointer hover:text-gray-600 font-medium mt-auto inline-block">
                    Read more
                  </span>

                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          
          {/* Custom Navigation Arrows */}
          <button className="swiper-btn-prev absolute left-0 top-1/2 -translate-y-[calc(50%+16px)] -ml-4 z-10 w-10 h-10 bg-white rounded-full shadow-lg border border-gray-200 flex items-center justify-center text-gray-600 hover:text-[#ff8c00] hover:scale-110 transition-all focus:outline-none hidden sm:flex opacity-0 group-hover:opacity-100">
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button className="swiper-btn-next absolute right-0 top-1/2 -translate-y-[calc(50%+16px)] -mr-4 z-10 w-10 h-10 bg-white rounded-full shadow-lg border border-gray-200 flex items-center justify-center text-gray-600 hover:text-[#ff8c00] hover:scale-110 transition-all focus:outline-none hidden sm:flex opacity-0 group-hover:opacity-100">
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Footer Link */}
        <div className="text-center mt-6">
          <a 
            href="https://share.google/5q0C1sR0SzTrbTQDK" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#0284c7] hover:text-[#0369a1] text-[15px] font-bold transition-colors"
          >
            Read our reviews on Google <span>→</span>
          </a>
        </div>

      </div>
    </section>
  );
}
