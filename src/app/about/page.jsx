import Image from 'next/image';
import Link from 'next/link';
import { ShieldCheck, Users, MapPin, Heart } from 'lucide-react';

export const metadata = {
  title: "About SouzaDispatch | Trusted Removals Company in London",
  description: "Learn more about SouzaDispatch, a family-run removals company in London providing professional, compassionate, and reliable moving services.",
};

const values = [
  {
    icon: Users,
    title: "Family-Run Business",
    desc: "As a father and son team, we treat every customer like family. Your belongings are handled with the personal care and respect they deserve."
  },
  {
    icon: ShieldCheck,
    title: "Fully Insured & Secure",
    desc: "Peace of mind comes standard. We are fully insured and use professional-grade protective equipment to guarantee the safety of your items."
  },
  {
    icon: MapPin,
    title: "London & UK Wide",
    desc: "Based in London, we possess intricate knowledge of local routes and logistics, but our reliable services extend anywhere nationwide."
  },
  {
    icon: Heart,
    title: "Compassionate Care",
    desc: "Moving is a stressful life event. We bring a calm, compassionate, and supportive attitude to every job to make your transition effortless."
  }
];

export default function AboutPage() {
  return (
    <div className="bg-brand-white">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-brand-dark overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          {/* Subtle background pattern */}
          <div className="absolute w-[500px] h-[500px] bg-[#ff8c00] rounded-full blur-[150px] -top-[200px] -right-[100px]"></div>
        </div>
        
        <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-[#ff8c00] font-bold text-[13px] tracking-wider uppercase mb-3 block">
            ABOUT SOUZADISPATCH
          </span>
          <h1 className="text-[36px] sm:text-[45px] lg:text-[55px] font-bold text-white mb-6 leading-tight max-w-3xl mx-auto">
            London's Most Trusted Family-Run Movers
          </h1>
          <p className="text-[16px] lg:text-[18px] text-gray-300 leading-relaxed max-w-2xl mx-auto">
            We aren't just moving boxes; we're moving lives. Discover the story behind our commitment to stress-free, professional relocations.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="w-full lg:w-1/2">
              <div className="relative aspect-[4/3] rounded-[32px] overflow-hidden shadow-sm">
                <Image 
                  src="/assets/hero.jpg" 
                  alt="Esteban and Team at SouzaDispatch" 
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            
            <div className="w-full lg:w-1/2">
              <h2 className="text-[32px] lg:text-[40px] font-bold text-brand-dark mb-6 leading-tight">
                Built on Trust, Delivered with Care
              </h2>
              <div className="space-y-6 text-[16px] lg:text-[17px] text-brand-slate leading-relaxed">
                <p>
                  SouzaDispatch was founded on a simple principle: moving shouldn't be the most stressful day of your year. Led by Esteban and his father, our family-run removals company brings a unique, personal touch to the logistics industry.
                </p>
                <p>
                  Operating out of London, we understand the complexities of city relocations—from navigating narrow staircases in historic flats to coordinating seamless long-distance transitions across the UK. 
                </p>
                <p>
                  Our reputation in the Local Pack and beyond is built on punctuality, transparent upfront pricing, and an unwavering commitment to keeping your possessions safe. When you book with SouzaDispatch, you're not getting a faceless corporate fleet; you're getting a dedicated team that genuinely cares about your home.
                </p>
              </div>
              
              <div className="mt-10">
                <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-[#ff8c00] text-white font-bold rounded-lg hover:bg-[#e07b00] transition-colors shadow-sm">
                  Work With Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 lg:py-32 bg-slate-50 border-t border-gray-100">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 lg:mb-24">
            <h2 className="text-[32px] lg:text-[40px] font-bold text-brand-dark">Our Core Values</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {values.map((val, idx) => {
              const Icon = val.icon;
              return (
                <div key={idx} className="bg-white p-8 lg:p-10 rounded-[24px] shadow-sm border border-gray-100 flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-2xl bg-[#ff8c00]/10 flex items-center justify-center text-[#ff8c00]">
                      <Icon className="w-7 h-7" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-[20px] font-bold text-brand-dark mb-3">{val.title}</h3>
                    <p className="text-[15px] text-brand-slate leading-relaxed">{val.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
