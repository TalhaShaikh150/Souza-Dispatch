import Link from 'next/link';
import CtaSection from '@/components/CtaSection';

export const metadata = {
  title: "Moving Services in London & UK | SouzaDispatch",
  description: "Explore our comprehensive range of moving services including local moves, office removals, man and van, and packing.",
};

export default function ServicesPage() {
  const services = [
    {
      number: "01",
      title: "Home & flat moves",
      description: "Studios, flats and family houses. We wrap the furniture in blankets before it leaves the room, carry it down however many flights there are, and set it back up where you point.",
      tags: ["Beds dismantled and rebuilt", "Stairs and lifts", "Same-day where we can"],
      image: "/images/hero-slide-1.jpg",
      imageFirst: true
    },
    {
      number: "02",
      title: "Office & business moves",
      description: "Shops, studios and small offices. We work evenings and weekends so nobody loses a trading day, and we label by room so unpacking is not a guessing game.",
      tags: ["Out of hours", "Desks and IT", "Labelled by room"],
      image: "/images/hero-slide-2.jpg",
      imageFirst: false,
      imageClass: "object-top"
    },
    {
      number: "03",
      title: "Pack and move",
      description: "If you would rather not spend three evenings taping boxes, we will do it. We bring the materials, pack room by room the day before or the morning of, and unpack at the other end if you want that too.",
      tags: ["Boxes and tape included", "Fragile wrapping", "Unpacking optional"],
      image: "/images/hero-slide-3.jpg",
      imageFirst: true
    },
    {
      number: "04",
      title: "Student moves",
      description: "Halls to house share, house share to home, or one mattress and a desk across town. Priced for a student budget, and we will take more than one of you in the same run if you are moving on the same day.",
      tags: ["Single items", "Shared runs", "End of term"],
      image: "/images/family.jpg",
      imageFirst: false
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-[#0a192f] pt-32 pb-24 lg:pt-40 lg:pb-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1200px] mx-auto">
          <span className="text-brand-primary text-[13px] font-extrabold uppercase tracking-[0.15em] mb-4 block">
            SERVICES
          </span>
          <h1 className="text-white text-4xl sm:text-5xl lg:text-[64px] font-extrabold leading-[1.1] mb-6 tracking-tight max-w-4xl">
            Everything from a studio apartment to a six-bed house
          </h1>
          <p className="text-gray-400 text-lg sm:text-xl font-medium max-w-2xl leading-relaxed">
            Same team, one price agreed before we start. Below is what we do most weeks across North London.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 lg:py-32 px-4 sm:px-6 lg:px-8 max-w-[1200px] mx-auto flex flex-col gap-24 lg:gap-32">
        {services.map((service, idx) => (
          <div 
            key={idx} 
            className={`flex flex-col gap-10 lg:gap-16 ${
              service.imageFirst 
                ? 'lg:flex-row' 
                : 'lg:flex-row-reverse'
            } items-center`}
          >
            {/* Image Block */}
            <div className="w-full lg:w-1/2">
              <div className="w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-sm relative">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className={`absolute inset-0 w-full h-full object-cover ${service.imageClass || ''}`}
                />
              </div>
            </div>

            {/* Text Block */}
            <div className="w-full lg:w-1/2 flex flex-col items-start lg:px-8">
              <span className="text-[#005f99] font-extrabold text-[15px] mb-4 block">
                {service.number}
              </span>
              <h2 className="text-[#0a192f] text-3xl sm:text-4xl font-extrabold tracking-tight mb-6">
                {service.title}
              </h2>
              <p className="text-[#4b5563] text-lg leading-relaxed font-medium mb-8">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-3">
                {service.tags.map((tag, tagIdx) => (
                  <span 
                    key={tagIdx}
                    className="inline-flex items-center px-5 py-2.5 rounded-full bg-[#f8fafc] border border-gray-100 text-[#334155] text-[14px] font-bold"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </section>

      <CtaSection />
    </div>
  );
}
