"use client";

import { Video, FileText, Truck, ArrowRight } from "lucide-react";

export default function ProcessSection() {
  const steps = [
    {
      title: "Walk us round on video",
      desc: "Sixty seconds on WhatsApp is enough. Every room, the loft, the garden, the stairs. No appointment needed.",
      icon: <Video className="w-8 h-8 text-brand-primary" />,
      color: "bg-blue-50"
    },
    {
      title: "Get a fixed price back",
      desc: "Usually within ten minutes. It covers the van, the crew, the blankets and the hours. That is the number you pay.",
      icon: <FileText className="w-8 h-8 text-brand-primary" />,
      color: "bg-blue-50"
    },
    {
      title: "We turn up and load",
      desc: "On the day you get the same three faces you spoke to. We wrap, load, drive and put it where you want it.",
      icon: <Truck className="w-8 h-8 text-brand-primary" />,
      color: "bg-blue-50"
    }
  ];

  return (
    <section className="py-12 lg:py-16 bg-white relative overflow-hidden">
       <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
             <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-full py-1.5 px-4 mb-6 shadow-sm">
               <span className="text-[13px] font-bold text-brand-primary uppercase tracking-widest">How it works</span>
             </div>
             <h2 className="text-[36px] sm:text-[42px] lg:text-[52px] font-extrabold text-gray-900 leading-[1.15] tracking-tight">
                A price in ten minutes, without anyone visiting your <span className="text-brand-primary">house.</span>
             </h2>
          </div>

          {/* Steps Grid */}
          <div className="grid md:grid-cols-3 gap-12 md:gap-8 lg:gap-12 relative">
             {/* Connecting Line (Desktop only) */}
             <div className="hidden md:block absolute top-[48px] left-[15%] right-[15%] h-[2px] bg-gray-100 z-0"></div>

             {steps.map((step, idx) => (
                <div key={idx} className="relative flex flex-col items-center text-center group z-10">
                   {/* Big Icon Container */}
                   <div className="w-24 h-24 rounded-full bg-white border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex items-center justify-center mb-8 relative transition-transform duration-300 group-hover:-translate-y-2">
                     <div className={`w-16 h-16 rounded-full ${step.color} flex items-center justify-center`}>
                        {step.icon}
                     </div>
                     {/* Number Badge */}
                     <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-[#0F172A] text-white flex items-center justify-center font-bold text-sm shadow-lg border-2 border-white">
                        {idx + 1}
                     </div>
                   </div>

                   {/* Text Content */}
                   <h3 className="text-2xl font-extrabold text-gray-900 mb-4 group-hover:text-brand-primary transition-colors">
                     {step.title}
                   </h3>
                   <p className="text-gray-500 text-[15px] font-medium leading-relaxed max-w-sm">
                     {step.desc}
                   </p>
                </div>
             ))}
          </div>

          {/* CTA */}
          <div className="mt-20 flex justify-center">
             <a href="/quote" className="bg-brand-primary text-white px-10 py-4 rounded-full font-bold transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 text-[16px] inline-flex items-center gap-2 group">
               Get Your Fixed Price 
               <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
             </a>
          </div>

       </div>
    </section>
  );
}
