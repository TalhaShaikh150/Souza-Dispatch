"use client";

import { ArrowRight, Home, Briefcase, Package, GraduationCap } from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      title: "Home & flat moves",
      description: "Studios to four-beds. Stairs, tight corners and awkward London parking included.",
      image: "/images/service-1.jpg",
      icon: <Home className="w-6 h-6 text-brand-primary" />
    },
    {
      title: "Office & business moves",
      description: "Out of hours and weekends so your team walks into a working office on Monday.",
      image: "/images/service-2.jpg",
      icon: <Briefcase className="w-6 h-6 text-brand-primary" />
    },
    {
      title: "Souza Dispatch Pack and move",
      description: "We bring the boxes, tape and blankets, pack the house and unpack at the other end.",
      image: "/images/service-3.jpg",
      icon: <Package className="w-6 h-6 text-brand-primary" />
    },
    {
      title: "Student moves",
      description: "Halls, house shares and single-item runs, priced for a student budget.",
      image: "/images/service-4.jpg",
      icon: <GraduationCap className="w-6 h-6 text-brand-primary" />
    }
  ];

  return (
    <section className="py-8 lg:py-10 bg-white">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 lg:mb-10">
          <span className="text-[13px] font-bold text-brand-primary uppercase tracking-widest block mb-3">
            Our Services
          </span>
          <h2 className="text-[36px] sm:text-[42px] lg:text-[48px] font-extrabold text-[#0a192f] leading-[1.15] tracking-tight">
            A wide range of services
          </h2>
          <p className="mt-4 text-gray-500 font-medium">
            We provide everything you need for a smooth and stress-free move.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col bg-white rounded-2xl border border-gray-100 shadow-[0_2px_12px_rgba(0,0,0,0.04)] overflow-hidden relative group transition-all duration-300 hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] hover:-translate-y-1">
              
              {/* Image */}
              <div className="w-full aspect-[4/3] relative overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              
              {/* Floating Icon */}
              <div className="absolute top-[calc(42.5%-10px)] sm:top-[calc(45%-10px)] left-1/2 -translate-x-1/2 w-14 h-14 rounded-full bg-white border-4 border-white shadow-sm flex items-center justify-center z-10">
                <div className="w-full h-full rounded-full bg-blue-50 flex items-center justify-center">
                  {service.icon}
                </div>
              </div>
              
              {/* Content Block */}
              <div className="pt-12 pb-8 px-6 flex-grow flex flex-col items-center text-center">
                <h3 className="text-[18px] font-extrabold text-[#0a192f] mb-3 leading-tight group-hover:text-brand-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-500 text-[14px] font-medium leading-relaxed mb-6">
                  {service.description}
                </p>
                
                <div className="mt-auto">
                  <a href={`/services#service-${index}`} className="text-brand-primary font-bold text-[14px] hover:text-brand-primary/80 transition-colors">
                    View service
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 flex justify-center">
          <a href="/services" className="bg-[#3B82F6] hover:bg-[#2563EB] text-white px-8 py-3.5 rounded font-bold transition-colors text-[15px] shadow-sm">
            Browse our services
          </a>
        </div>

      </div>
    </section>
  );
}
