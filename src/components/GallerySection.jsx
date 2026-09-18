"use client";

import Image from "next/image";
import { Image as ImageIcon } from "lucide-react";

export default function GallerySection() {
  const images = [
    { title: "At your service", span: "col-span-12 sm:col-span-6 lg:col-span-4" },
    { title: "Team at work", span: "col-span-12 sm:col-span-6 lg:col-span-4" },
    { title: "Safe transport", span: "col-span-12 lg:col-span-4" },
  ];

  return (
    <section className="py-24 lg:py-32 bg-[#f9fafb]">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 bg-white rounded-full py-1.5 px-4 mb-6 shadow-sm border border-gray-100">
            <div className="bg-gray-100 rounded-full p-1 shadow-sm">
              <ImageIcon className="w-3 h-3 text-brand-primary" />
            </div>
            <span className="text-[13px] font-bold text-gray-700">Our Gallery</span>
          </div>
          
          <h2 className="text-[36px] sm:text-[42px] lg:text-[48px] font-extrabold text-gray-900 leading-[1.15] tracking-tight">
            See Our <span className="text-brand-primary relative inline-block">
              Team
              <svg className="absolute w-full h-3 -bottom-1 left-0 text-brand-primary" viewBox="0 0 200 20" fill="none" preserveAspectRatio="none">
                <path d="M5 15Q100 0 195 15" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
              </svg>
            </span> At Work
          </h2>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-12 gap-4 lg:gap-6">
          {images.map((img, i) => (
            <div key={i} className={`${img.span} relative rounded-2xl overflow-hidden aspect-video bg-gray-200 group`}>
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors z-10"></div>
              <div className="w-full h-full flex items-center justify-center font-bold text-gray-500">
                Gallery Image {i + 1}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
