'use client';

import { useState, useRef, useEffect } from 'react';
import { ChevronDown, ChevronUp, ExternalLink } from 'lucide-react';

const REVIEWS = [
  {
    id: 1,
    name: 'Eksir Ali',
    initials: 'EA',
    avatarBg: 'bg-[#2e7d32]', // Green matching screenshot
    rating: 5,
    date: '2026-03-07',
    text: 'Great service. I contacted them last min for a 2 man with a van job and they did not disappoint. Will definitely recommend them!',
  },
  {
    id: 2,
    name: 'A C',
    initials: 'AC',
    avatarBg: 'bg-[#1565c0]', // Blue
    rating: 5,
    date: '12 weeks ago',
    text: 'Great experience with Esteban and his dad. Pricing was agreed upfront based on the number of items so there were no surprises. Great communication. They were careful with my belongings and the move went very smoothly. Highly recommend!',
  },
  {
    id: 3,
    name: 'Jessica Tran',
    initials: 'JT',
    avatarBg: 'bg-[#7b1fa2]', // Purple
    rating: 5,
    date: '21 weeks ago',
    text: 'These two amazing gentlemen helped me and business partner move into our beauty studio. They moved everything safely and efficiently with great care. 10/10!',
  },
  {
    id: 4,
    name: 'Mahamed',
    initials: 'M',
    avatarBg: 'bg-[#0097a7]', // Cyan matching screenshot
    rating: 5,
    date: '27 weeks ago',
    text: 'Very Friendly Service, really helped my mum who couldn’t speak English, very punctual, fast and professional. I can’t thank them enough!',
  },
  {
    id: 5,
    name: 'Abdelgalil Kaboash',
    initials: 'AK',
    avatarBg: 'bg-[#d84315]', // Deep orange
    rating: 5,
    date: '27 weeks ago',
    text: 'Great moving service! Super reliable, on time, and really careful with everything. They made the move way less stressful. Definitely recommend!',
  },
  {
    id: 6,
    name: 'Thiago Souza',
    initials: 'TS',
    avatarBg: 'bg-[#00897b]', // Teal
    rating: 5,
    date: '30 weeks ago',
    text: 'Really good and fast service. The staff was really friendly and helpful with all my moving needs. And they were quite professional about it too. Overall 10/10!',
  },
];

export default function GoogleReviewBadge() {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  // Close on click outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div ref={containerRef} className="fixed bottom-0 left-0 z-50 select-none">
      {/* Expanded Reviews Popup Card */}
      {isOpen && (
        <div className="mb-2 w-[320px] sm:w-[350px] bg-white rounded-r-xl shadow-[0_10px_35px_rgba(0,0,0,0.18)] border border-gray-200 border-l-0 overflow-hidden animate-in fade-in slide-in-from-bottom-3 duration-200">
          
          {/* Header */}
          <div className="p-3.5 flex items-center justify-between border-b border-gray-200 bg-white">
            <div className="flex items-center gap-3">
              {/* Google G Logo */}
              <svg className="w-8 h-8 flex-shrink-0" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"/>
                <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.34 24 12 24z"/>
                <path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.98 0 12s.45 3.82 1.25 5.42l4.03-3.15z"/>
                <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.34 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"/>
              </svg>

              <div>
                <div className="flex items-center gap-1.5">
                  <span className="font-bold text-[16px] text-orange-500">5.0</span>
                  <div className="flex text-[#ff9800]">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 fill-[#ff9800]" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <div className="flex items-center gap-1 text-[11px] font-semibold text-blue-600 mt-0.5">
                  <ExternalLink className="w-3 h-3" />
                  <span>10 REVIEWS</span>
                </div>
              </div>
            </div>

            {/* Collapse Arrow */}
            <button 
              onClick={() => setIsOpen(false)}
              className="p-1.5 text-gray-500 hover:text-gray-800 hover:bg-gray-100 rounded-md transition-colors"
              aria-label="Close reviews"
            >
              <ChevronDown className="w-5 h-5" />
            </button>
          </div>

          {/* Scrollable Reviews List */}
          <div className="max-h-[380px] overflow-y-auto divide-y divide-gray-100 px-3 py-2">
            {REVIEWS.map((review) => (
              <div key={review.id} className="py-3 px-1">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-2.5">
                    {/* Initials Avatar */}
                    <div className={`w-9 h-9 rounded-full ${review.avatarBg} text-white font-semibold text-[13px] flex items-center justify-center flex-shrink-0 shadow-sm`}>
                      {review.initials}
                    </div>
                    <div>
                      <h4 className="font-bold text-[13px] text-gray-900 leading-snug">
                        {review.name}
                      </h4>
                      <div className="flex items-center gap-1.5 mt-0.5">
                        <div className="flex text-[#ff9800]">
                          {[...Array(review.rating)].map((_, i) => (
                            <svg key={i} className="w-3.5 h-3.5 fill-[#ff9800]" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                        <span className="text-[11px] text-gray-500 font-normal">
                          {review.date}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Google Mini Logo */}
                  <svg className="w-4 h-4 flex-shrink-0 opacity-80" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"/>
                    <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.34 24 12 24z"/>
                    <path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.98 0 12s.45 3.82 1.25 5.42l4.03-3.15z"/>
                    <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.34 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"/>
                  </svg>
                </div>

                {/* Review Text */}
                <p className="text-[12px] text-gray-700 leading-relaxed mt-2 pl-0.5">
                  {review.text}
                </p>
              </div>
            ))}
          </div>

        </div>
      )}

      {/* Fixed Tab Trigger (Bottom-Left) */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="bg-white border border-gray-200 border-b-0 border-l-0 rounded-tr-lg shadow-[0_-2px_10px_rgba(0,0,0,0.08)] px-3.5 py-2 flex items-center gap-2.5 hover:bg-gray-50 transition-colors focus:outline-none"
        aria-label="Toggle Google Reviews modal"
        aria-expanded={isOpen}
      >
        {/* Google G Logo */}
        <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24">
          <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"/>
          <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.34 24 12 24z"/>
          <path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.98 0 12s.45 3.82 1.25 5.42l4.03-3.15z"/>
          <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.34 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"/>
        </svg>

        <div className="flex flex-col text-left">
          <div className="flex items-center gap-1.5 leading-none">
            <span className="font-extrabold text-[13px] text-gray-900">5.0</span>
            <div className="flex text-[#ff9800]">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-3 h-3 fill-[#ff9800]" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
          </div>
          <span className="text-[9px] font-bold text-gray-500 tracking-wider uppercase mt-1">10 REVIEWS</span>
        </div>

        {isOpen ? (
          <ChevronDown className="w-3.5 h-3.5 text-gray-400 ml-1" />
        ) : (
          <ChevronUp className="w-3.5 h-3.5 text-gray-400 ml-1" />
        )}
      </button>
    </div>
  );
}
