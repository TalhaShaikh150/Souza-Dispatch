import Image from 'next/image';

const helpItems = [
  {
    title: 'House Removals',
    desc: 'Stress-free residential moves tailored to your needs, from cozy studio flats to large family homes across London.',
    image: '/assets/house_removals_stock.jpg',
    spanClass: 'lg:col-span-2',
    heightClass: 'min-h-[350px] sm:min-h-[420px]',
  },
  {
    title: 'Furniture Transport',
    desc: 'Expert handling and safe transit for single items, delicate antiques, or full suites.',
    image: '/assets/furniture_transport_stock.jpg',
    spanClass: 'lg:col-span-1',
    heightClass: 'min-h-[350px] sm:min-h-[420px]',
  },
  {
    title: 'Long-Distance Moves',
    desc: 'Reliable long-haul relocation services connecting London to any destination nationwide.',
    image: '/assets/long_distance_stock.jpg',
    spanClass: 'lg:col-span-1',
    heightClass: 'min-h-[350px] sm:min-h-[420px]',
  },
  {
    title: 'Man and Van',
    desc: 'Flexible and efficient support for smaller moves, store pickups, and quick transitions with a compassionate touch.',
    image: '/assets/man_and_van_stock.jpg',
    spanClass: 'lg:col-span-2',
    heightClass: 'min-h-[350px] sm:min-h-[420px]',
  }
];

export default function HowWeHelp() {
  return (
    <section className="py-20 lg:py-32 bg-slate-50 border-b border-gray-100">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-16 lg:mb-20 text-center max-w-3xl mx-auto">
          <span className="text-[#00ace0] font-bold text-[13px] tracking-wider uppercase mb-3 block">
            WHAT WE DO
          </span>
          <h2 className="text-[36px] sm:text-[42px] lg:text-[48px] font-bold text-[#0f172a] leading-[1.1] mb-6">
            Everything you need for a perfect move.
          </h2>
          <p className="text-[16px] lg:text-[18px] text-[#475569] leading-relaxed">
            From packing the first box to placing the last piece of furniture, we handle it all with precision and care.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
          {helpItems.map((item, idx) => (
            <div 
              key={idx} 
              className={`relative rounded-[28px] overflow-hidden group shadow-sm ${item.spanClass} ${item.heightClass}`}
            >
              <Image 
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 800px"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-500 group-hover:opacity-90"></div>
              
              {/* Content Overlay */}
              <div className="absolute inset-0 p-8 sm:p-10 flex flex-col justify-end">
                <span className="w-10 h-1 bg-[#00ace0] rounded-full mb-4 transform origin-left transition-all duration-300 group-hover:w-16"></span>
                <h3 className="text-[24px] sm:text-[28px] font-bold text-white mb-3 leading-tight drop-shadow-md">
                  {item.title}
                </h3>
                <p className="text-[15px] sm:text-[16px] text-gray-200 leading-relaxed max-w-md drop-shadow-sm opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
