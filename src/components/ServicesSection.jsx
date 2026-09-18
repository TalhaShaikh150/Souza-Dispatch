"use client";

import Image from "next/image";
import { ArrowRight, Settings } from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      title: "Residential Moving",
      description: "Safe and smooth home relocation handled with care from start to finish.",
    },
    {
      title: "Commercial Moving",
      description: "Efficient business and office moving with minimal downtime and disruption.",
    },
    {
      title: "Packing Services",
      description: "Professional packing to protect your belongings during every step of the move.",
    },
    {
      title: "Long-Distance Moving",
      description: "Reliable and secure moving services across cities and long distances.",
    },
    {
      title: "Furniture Moving",
      description: "Careful handling and transport of heavy and valuable furniture items.",
    },
    {
      title: "Loading & Unloading",
      description: "Fast and safe loading and unloading to save your time and effort.",
    }
  ];

  return (
    <section className="py-24 lg:py-32 bg-[#f9fafb]">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 bg-white rounded-full py-1.5 px-4 mb-6 shadow-sm border border-gray-100">
            <div className="bg-gray-100 rounded-full p-1 shadow-sm">
              <Settings className="w-3 h-3 text-brand-primary" />
            </div>
            <span className="text-[13px] font-bold text-gray-700">Our Service</span>
          </div>
          
          <h2 className="text-[36px] sm:text-[42px] lg:text-[48px] font-extrabold text-gray-900 leading-[1.15] tracking-tight">
            Our Moving <span className="text-brand-primary relative inline-block">
              Services
              <svg className="absolute w-full h-3 -bottom-1 left-0 text-brand-primary" viewBox="0 0 200 20" fill="none" preserveAspectRatio="none">
                <path d="M5 15Q100 0 195 15" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
              </svg>
            </span>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div key={index} className="group flex flex-col bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              {/* Image Placeholder */}
              <div className="w-full aspect-[4/3] bg-gray-200 relative overflow-hidden flex items-center justify-center border-b border-gray-100">
                <div className="absolute inset-0 bg-brand-primary/10 group-hover:bg-transparent transition-colors z-10"></div>
                <span className="text-gray-400 font-bold relative z-0">Image {index + 1}</span>
                
                {/* Floating Title on Image (Optional based on design, but it looks like the title is also inside the image in the screenshot as a dark overlay badge) */}
                <div className="absolute inset-0 flex items-center justify-center z-20">
                   <div className="bg-brand-primary/80 backdrop-blur-sm text-white px-6 py-2 rounded font-bold text-sm">
                     {service.title}
                   </div>
                </div>
              </div>
              
              {/* Content Block */}
              <div className="p-6 lg:p-8 flex-grow border-l-4 border-transparent group-hover:border-brand-primary transition-colors relative">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-brand-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-500 text-sm font-medium leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 lg:mt-20 flex justify-center">
          <button className="inline-flex items-center gap-2 bg-brand-secondary hover:bg-yellow-300 text-[#111827] px-8 py-3.5 rounded-full font-bold transition-all shadow-md">
            <div className="bg-white rounded-full p-1">
              <ArrowRight className="w-4 h-4 text-[#111827]" />
            </div>
            View All Services
          </button>
        </div>

      </div>
    </section>
  );
}
