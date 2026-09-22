import Link from 'next/link';
import { Phone } from 'lucide-react';
import CtaSection from '@/components/CtaSection';

export const metadata = {
  title: "About Us | SouzaDispatch Removals",
  description: "A father and two sons, ten years of North London moves.",
};

export default function AboutPage() {
  const team = [
    {
      name: "Esteban",
      title: "Founder",
      image: "/images/esteban.jpg"
    },
    {
      name: "Thiago",
      title: "Founder",
      image: "/images/thiago.jpg"
    },
    {
      name: "Jose",
      title: "", // Just Jose as requested
      image: "/images/jose.jpg"
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-[#0a192f] pt-32 pb-24 lg:pt-40 lg:pb-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1200px] mx-auto">
          <span className="text-brand-primary text-[13px] font-extrabold uppercase tracking-[0.15em] mb-4 block">
            ABOUT US
          </span>
          <h1 className="text-white text-4xl sm:text-5xl lg:text-[64px] font-extrabold leading-[1.1] mb-6 tracking-tight max-w-4xl">
            A father and two sons, ten years of North London moves
          </h1>
        </div>
      </section>

      {/* Story & Stats Section */}
      <section className="py-20 lg:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1200px] mx-auto grid lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Main Story (Left) */}
          <div className="lg:col-span-7 flex flex-col gap-6 text-[17px] sm:text-[19px] text-gray-600 font-medium leading-relaxed">
            <p>
              <strong className="text-[#0a192f] font-extrabold">SouzaDispatch</strong> is three people: Esteban, Thiago and Jose. Two brothers and their dad, all building together.
            </p>
            <p>
              We have been moving people around North London for over ten years, first as a pair of hands other firms called on, now under our own name. Hundreds of moves later the job has not really changed: turn up when you said you would, treat somebody's things the way you would want yours treated, and charge what you quoted.
            </p>
            <p>
              What that means in practice is that there is no call centre between you and the crew. The person who reads your video and works out the price is one of the three of us, and he will be there on the day with the blankets.
            </p>
          </div>

          {/* At a Glance Stats (Right) */}
          <div className="lg:col-span-5">
            <div className="bg-[#f8fafc] rounded-3xl p-8 sm:p-10 border border-gray-100">
              <h3 className="text-[#0a192f] text-[20px] font-extrabold mb-8 uppercase tracking-wider">
                At a glance
              </h3>
              
              <ul className="space-y-8">
                <li>
                  <div className="text-brand-primary font-black text-3xl mb-1">10+ years</div>
                  <div className="text-gray-600 font-bold text-[15px] uppercase tracking-wide">in business</div>
                </li>
                <li>
                  <div className="text-brand-primary font-black text-3xl mb-1">Hundreds</div>
                  <div className="text-gray-600 font-bold text-[15px] uppercase tracking-wide">of moves completed</div>
                </li>
                <li>
                  <div className="text-brand-primary font-black text-3xl mb-1">North London</div>
                  <div className="text-gray-600 font-bold text-[15px] uppercase tracking-wide">our home patch</div>
                </li>
                <li>
                  <div className="text-brand-primary font-black text-3xl mb-1">7 days</div>
                  <div className="text-gray-600 font-bold text-[15px] uppercase tracking-wide">a week, evenings included</div>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* The Team */}
      <section className="py-20 lg:py-32 bg-gray-50 border-y border-gray-100 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-[32px] sm:text-[40px] font-extrabold text-[#0a192f] leading-[1.15] tracking-tight mb-12 lg:mb-16">
            The three of us
          </h2>
          
          <div className="grid sm:grid-cols-3 gap-8 lg:gap-12">
            {team.map((member, idx) => (
              <div key={idx} className="flex flex-col group">
                <div className="w-full aspect-[4/5] rounded-2xl overflow-hidden mb-6 shadow-sm relative">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 object-top"
                  />
                </div>
                <h3 className="text-2xl font-extrabold text-[#0a192f] mb-1 tracking-tight">{member.name}</h3>
                {member.title && (
                  <span className="text-brand-primary font-bold uppercase tracking-wider text-[13px]">
                    {member.title}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Where We Work */}
      <section className="py-20 lg:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          <div className="w-full lg:w-1/2">
            <div className="w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-sm relative">
              <img 
                src="/images/family.jpg" // Placeholder for crew in front of van
                alt="SouzaDispatch Crew"
                className="absolute inset-0 w-full h-full object-cover object-center"
              />
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <span className="text-[13px] font-extrabold text-brand-primary uppercase tracking-[0.15em] mb-4 block">
              Where we work
            </span>
            <h2 className="text-[32px] sm:text-[40px] font-extrabold text-[#0a192f] leading-[1.15] tracking-tight mb-6">
              North London, and wherever the move ends
            </h2>
            <div className="text-[17px] sm:text-[18px] text-gray-600 font-medium leading-relaxed space-y-6">
              <p>
                North London is where we live and where most of our work is. We know the estates with no loading bay, the roads that go one way at the wrong end, and which councils want a permit for the van.
              </p>
              <p>
                If your new place is outside London, that is fine. The pick-up is the part that needs local knowledge, and the drive is just the drive.
              </p>
            </div>
          </div>

        </div>
      </section>

      <CtaSection />
    </div>
  );
}
