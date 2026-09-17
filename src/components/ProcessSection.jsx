export default function ProcessSection() {
  const steps = [
    {
      num: "1",
      title: "Walk us round on video",
      desc: "Sixty seconds on WhatsApp is enough. Every room, the loft, the garden, the stairs. No appointment needed."
    },
    {
      num: "2",
      title: "Get a fixed price back",
      desc: "Usually within ten minutes. It covers the van, the crew, the blankets and the hours. That is the number you pay."
    },
    {
      num: "3",
      title: "We turn up and load",
      desc: "On the day you get the same three faces you spoke to. We wrap, load, drive and put it where you want it."
    }
  ];

  return (
    <section className="py-12 lg:py-16 bg-slate-50 border-y border-gray-100">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        
        <div className="mb-12 lg:mb-16">
          <span className="text-[#ff8c00] font-bold text-[12px] tracking-widest uppercase mb-4 block">
            HOW IT WORKS
          </span>
          <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-extrabold text-[#0f172a] leading-[1.15] font-heading max-w-3xl">
            A price in ten minutes, without anyone visiting your house
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {steps.map((step, idx) => (
            <div key={idx} className="bg-white rounded-3xl p-8 lg:p-10 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 rounded-full bg-[#0f172a] text-white flex items-center justify-center font-bold text-xl mb-8">
                {step.num}
              </div>
              <h3 className="text-[20px] lg:text-[22px] font-bold text-[#0f172a] mb-4">
                {step.title}
              </h3>
              <p className="text-[15px] lg:text-[16px] text-gray-600 leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
