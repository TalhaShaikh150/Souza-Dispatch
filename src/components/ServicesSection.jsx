import Image from 'next/image';
import Link from 'next/link';

const services = [
  {
    title: "Home & flat moves",
    desc: "Studios to four-beds. Stairs, tight corners and awkward London parking included.",
    img: "/assets/imgi_20_three-of-us-2.jpg",
    link: "/services/local-moving"
  },
  {
    title: "Office & business moves",
    desc: "Out of hours and weekends so your team walks into a working office on Monday.",
    img: "/assets/imgi_17_driving.jpg",
    link: "/services/office-removals"
  },
  {
    title: "Pack and move",
    desc: "We bring the boxes, tape and blankets, pack the house and unpack at the other end.",
    img: "/assets/imgi_18_loading-mattress.jpg",
    link: "/services/furniture-removal"
  },
  {
    title: "Student moves",
    desc: "Halls, house shares and single-item runs, priced for a student budget.",
    img: "/assets/imgi_19_cap-dash.jpg",
    link: "/services/man-and-van"
  }
];

export default function ServicesSection() {
  return (
    <section className="py-12 lg:py-16 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 lg:mb-16">
          <div>
            <span className="text-[#ff8c00] font-bold text-[12px] tracking-widest uppercase mb-3 block">
              WHAT WE DO
            </span>
            <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-extrabold text-[#0f172a] leading-tight font-heading">
              Four jobs, done properly
            </h2>
          </div>
          
          <Link 
            href="/services" 
            className="inline-flex items-center gap-2 text-[#0f172a] hover:text-[#ff8c00] font-bold text-[15px] transition-colors pb-2"
          >
            All services <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((svc, idx) => (
            <Link href={svc.link} key={idx} className="group block h-full">
              <div className="bg-[#f8fafc] rounded-3xl overflow-hidden border border-gray-100 shadow-sm group-hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                <div className="relative w-full aspect-[4/3] sm:aspect-[16/9] md:aspect-[4/3]">
                  <Image 
                    src={svc.img} 
                    alt={svc.title} 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                </div>
                <div className="p-6 sm:p-8 lg:p-10 flex-grow flex flex-col justify-center bg-white border-t border-gray-100">
                  <h3 className="text-[20px] sm:text-[22px] font-bold text-[#0f172a] mb-3 group-hover:text-[#ff8c00] transition-colors">
                    {svc.title}
                  </h3>
                  <p className="text-gray-600 text-[15px] sm:text-[16px] leading-relaxed">
                    {svc.desc}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
