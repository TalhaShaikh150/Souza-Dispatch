import Image from 'next/image';

const galleryImages = [
  {
    src: "/assets/house_removals_stock.jpg",
    alt: "Team loading moving van",
    aspect: "aspect-[4/3]"
  },
  {
    src: "/assets/furniture_transport_stock.jpg",
    alt: "Wrapping fragile furniture",
    aspect: "aspect-square"
  },
  {
    src: "/assets/man_and_van_stock.jpg",
    alt: "Friendly mover holding boxes",
    aspect: "aspect-[3/4]"
  },
  {
    src: "/assets/hero.jpg",
    alt: "Team standing by the van",
    aspect: "aspect-[16/9]"
  },
  {
    src: "/assets/long_distance_stock.jpg",
    alt: "Moving boxes being loaded",
    aspect: "aspect-[3/2]"
  }
];

export default function GallerySection() {
  return (
    <section className="py-24 lg:py-32 bg-slate-50 border-t border-gray-200">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <span className="text-[#00ace0] font-bold text-[13px] tracking-wider uppercase mb-3 block">
            Our Gallery
          </span>
          <h2 className="text-[36px] sm:text-[42px] lg:text-[48px] font-black text-[#0f172a] leading-[1.1]">
            See Our Team at <span className="text-[#00ace0]">Work</span>
          </h2>
        </div>

        {/* CSS Grid Masonry approximation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[250px]">
          
          {/* Large Featured Image */}
          <div className="sm:col-span-2 sm:row-span-2 relative rounded-3xl overflow-hidden shadow-md group">
            <Image 
              src={galleryImages[0].src}
              alt={galleryImages[0].alt}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
          </div>
          
          {/* Small Grid Items */}
          <div className="relative rounded-3xl overflow-hidden shadow-md group">
            <Image 
              src={galleryImages[1].src}
              alt={galleryImages[1].alt}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          
          <div className="relative rounded-3xl overflow-hidden shadow-md group sm:row-span-2">
            <Image 
              src={galleryImages[2].src}
              alt={galleryImages[2].alt}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          
          <div className="sm:col-span-2 relative rounded-3xl overflow-hidden shadow-md group">
            <Image 
              src={galleryImages[3].src}
              alt={galleryImages[3].alt}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105 object-center"
            />
          </div>
          
          <div className="relative rounded-3xl overflow-hidden shadow-md group">
            <Image 
              src={galleryImages[4].src}
              alt={galleryImages[4].alt}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>

        </div>

      </div>
    </section>
  );
}
