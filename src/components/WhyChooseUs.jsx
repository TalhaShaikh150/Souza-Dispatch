import { ShieldCheck, Clock, Heart } from 'lucide-react';

const features = [
  {
    id: '01',
    title: 'Professional Expertise',
    desc: 'Our specialist movers handle every item with the precision and care required for a seamless transition.',
    icon: ShieldCheck,
  },
  {
    id: '02',
    title: 'Reliable Timelines',
    desc: 'Punctuality is our core promise. We ensure your move arrives on schedule, anywhere in the London area.',
    icon: Clock,
  },
  {
    id: '03',
    title: 'Compassionate Care',
    desc: 'Relocating home is personal. We provide a supportive, compassionate service to guide you home.',
    icon: Heart,
  }
];

export default function WhyChooseUs() {
  return (
    <section className="relative py-20 lg:py-32 bg-[#0f172a] overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-[#00ace0]/5 blur-[120px]"></div>
        <div className="absolute bottom-[10%] -right-[10%] w-[40%] h-[40%] rounded-full bg-blue-500/5 blur-[100px]"></div>
      </div>

      <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16 lg:mb-24">
          <span className="text-[#00ace0] font-bold text-[13px] tracking-wider uppercase mb-3 block">
            THE SOUZADISPATCH DIFFERENCE
          </span>
          <h2 className="text-[36px] sm:text-[42px] lg:text-[48px] font-bold text-white leading-tight">
            Why Choose SouzaDispatch?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div 
                key={idx} 
                className="relative group p-8 sm:p-10 rounded-[28px] bg-slate-800/40 border border-slate-700/50 hover:bg-slate-800/80 transition-all duration-500 hover:-translate-y-2 overflow-hidden shadow-lg"
              >
                {/* Large Background Number */}
                <span className="absolute -top-6 -right-4 text-[120px] font-black text-slate-700/20 group-hover:text-[#00ace0]/10 transition-colors duration-500 select-none">
                  {feature.id}
                </span>

                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-[#00ace0]/10 flex items-center justify-center mb-8 border border-[#00ace0]/20 group-hover:scale-110 transition-transform duration-500">
                    <Icon className="w-6 h-6 text-[#00ace0]" />
                  </div>
                  
                  <h3 className="text-[22px] sm:text-[24px] font-bold text-white mb-4">
                    {feature.title}
                  </h3>
                  
                  <p className="text-[15px] sm:text-[16px] text-slate-300 leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
