import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const services = [
  {
    title: 'House Removals',
    desc: 'Full-service home moves across London and the UK. From fragile packing to furniture reassembly, we treat your belongings with maximum care.',
    link: '/services/local-moving',
    image: '/assets/house-removal.jpg',
    tag: 'Domestic Moves',
  },
  {
    title: 'Office Relocation',
    desc: 'Streamlined corporate and office moving designed to minimize downtime. Careful handling of IT equipment, desks, and business archives.',
    link: '/services/office-removals',
    image: '/assets/long-distance.jpg',
    tag: 'Commercial',
  },
  {
    title: 'Furniture Transport',
    desc: 'Specialist large-item and furniture transit. Every piece is wrapped in protective moving blankets and transit film for zero-damage arrival.',
    link: '/services/furniture-removal',
    image: '/assets/help2.jpg',
    tag: 'Specialist Handling',
  },
  {
    title: 'Man and Van',
    desc: 'Flexible, affordable 1-man or 2-man removal teams for apartment moves, store pickups, and urgent London deliveries with transparent upfront pricing.',
    link: '/services/man-and-van',
    image: '/assets/man-and-van.jpg',
    tag: 'Flexible & Fast',
  },
];

export default function Services() {
  return (
    <section className="py-16 lg:py-20 bg-slate-50 border-t border-gray-100" id="services">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <div>
            <span className="text-[#00ace0] font-semibold text-[13px] tracking-wider uppercase mb-2 block">
              OUR SERVICES
            </span>
            <h2 className="text-[26px] sm:text-[32px] lg:text-[36px] font-bold text-[#0f172a] leading-tight">
              Reliable removals across London & the UK
            </h2>
          </div>
          <p className="text-[15px] text-[#475569] max-w-md leading-relaxed">
            From single-item deliveries to complete family home and business moves, our experienced team ensures your move is smooth and stress-free.
          </p>
        </div>

        {/* Services Cards Grid with High-Quality Stock Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {services.map((service, idx) => (
            <div 
              key={idx} 
              className="bg-white rounded-2xl overflow-hidden border border-gray-200/90 shadow-md hover:shadow-lg transition-all duration-300 flex flex-col group"
            >
              {/* Tag (moved from image overlay to top of card) */}
              <div className="px-7 pt-7 sm:px-9 sm:pt-9">
                <span className="inline-block bg-[#0f172a] text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-2">
                  {service.tag}
                </span>
              </div>

              {/* Card Content */}
              <div className="p-7 sm:p-9 flex flex-col flex-grow">
                <h3 className="text-[22px] sm:text-[24px] font-bold text-[#0f172a] mb-3 group-hover:text-[#00ace0] transition-colors">
                  {service.title}
                </h3>
                <p className="text-[15px] sm:text-[16px] text-[#475569] leading-relaxed mb-8 flex-grow">
                  {service.desc}
                </p>

                <Link 
                  href={service.link} 
                  className="inline-flex items-center gap-1.5 text-[#00ace0] font-bold text-[15px] hover:text-[#0095c2] transition-all mt-auto group-hover:gap-2 duration-300"
                >
                  <span>Learn more about {service.title.toLowerCase()}</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
