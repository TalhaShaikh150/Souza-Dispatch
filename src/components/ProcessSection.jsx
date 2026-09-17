import Image from 'next/image';

const steps = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    title: "Request Your Quote",
    desc: "Call us or submit a form. We'll give you a clear, honest, upfront estimate based on your specific moving needs with zero hidden fees."
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
    title: "The Professional Pack",
    desc: "Our crew arrives on time, fully equipped, and ready to secure your belongings with professional-grade protective materials for a safe ride."
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
    ),
    title: "The Delivery Guarantee",
    desc: "We place every box and piece of furniture exactly where you want it in your new home, ensuring a completely stress-free transition."
  }
];

export default function ProcessSection() {
  return (
    <section className="py-24 lg:py-32 bg-slate-50 border-y border-gray-200 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col items-center gap-12">
          
          {/* Timeline Steps */}
          <div className="w-full max-w-5xl mx-auto text-center">
            <span className="text-[#00ace0] font-bold text-[13px] tracking-wider uppercase mb-3 block">
              The 3-Step Stress-Free Move
            </span>
            <h2 className="text-[36px] sm:text-[42px] lg:text-[48px] font-black text-[#0f172a] mb-16 leading-[1.1]">
              Our Proven Process for <br className="hidden sm:block" />
              Stress-Free <span className="text-[#00ace0]">Moving</span>
            </h2>
            
            <div className="relative flex flex-col md:flex-row gap-8 md:gap-4 justify-between">
              
              {/* Connecting Line (Desktop) */}
              <div className="hidden md:block absolute top-[28px] left-[10%] right-[10%] h-[2px] border-t-2 border-dashed border-gray-300 z-0"></div>

              {steps.map((step, idx) => (
                <div key={idx} className="relative z-10 flex flex-col items-center flex-1 text-center">
                  
                  {/* Step Icon */}
                  <div className="w-14 h-14 rounded-full bg-[#0f172a] text-white flex items-center justify-center shadow-lg mb-6 ring-8 ring-slate-50 transition-transform duration-300 hover:scale-110 hover:bg-[#00ace0]">
                    {step.icon}
                  </div>
                  
                  <h3 className="text-[18px] lg:text-[20px] font-bold text-[#0f172a] mb-3 leading-tight">
                    {step.title}
                  </h3>
                  
                  <p className="text-[14px] lg:text-[15px] text-gray-600 leading-relaxed max-w-[280px] mx-auto">
                    {step.desc}
                  </p>
                  
                </div>
              ))}
            </div>
          </div>

        </div>
        
      </div>
    </section>
  );
}
