import Link from 'next/link';

export const metadata = {
  title: "Frequently Asked Questions | SouzaDispatch Removals",
  description: "Find answers to your questions about our removal services, costs, packing, and service areas across London.",
};

const faqs = [
  {
    q: "How much does a removal service cost in London?",
    a: "Costs depend on the size of the move, distance, and whether you require packing services. We provide transparent, upfront pricing with no hidden fees. Contact us for a free, no-obligation quote tailored to your specific move."
  },
  {
    q: "Do you provide packing services?",
    a: "Yes, we offer professional packing services. We use high-quality materials to safely pack everything from everyday household items to delicate antiques and electronics."
  },
  {
    q: "Do you move large furniture?",
    a: "Absolutely. We are equipped and trained to handle large, heavy, and awkward furniture pieces safely, using specialized protective equipment to prevent any damage to your items or property."
  },
  {
    q: "Do you provide a man and van service?",
    a: "Yes, we offer flexible and efficient Man and Van services perfect for smaller moves, store pickups, or single-item transport."
  },
  {
    q: "Do you remove unwanted furniture?",
    a: "Yes, we offer eco-friendly waste and rubbish removal services. We can responsibly dispose of your unwanted furniture during your move."
  },
  {
    q: "How far in advance should I book?",
    a: "We recommend booking at least 2-4 weeks in advance, especially during peak seasons (summer and weekends). However, we will always try our best to accommodate short-notice requests."
  },
  {
    q: "Do you move offices?",
    a: "Yes, our office relocation services are designed to minimize your business downtime. We handle IT equipment, office furniture, and documents securely and efficiently."
  },
  {
    q: "What areas do you cover?",
    a: "We are based in London and serve all London boroughs. We also provide long-distance relocation services connecting London to any destination nationwide across the UK."
  },
  {
    q: "Do you move appliances?",
    a: "Yes, we safely disconnect (where appropriate) and transport major household appliances like washing machines, refrigerators, and ovens."
  },
  {
    q: "Can you help with small moves?",
    a: "Certainly! No job is too small for us. Whether you are moving a few boxes from a studio flat or picking up a sofa, our team is happy to help."
  }
];

export default function FAQPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      
      <div className="bg-brand-light min-h-screen pt-20 pb-32">
        <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16">
            <span className="text-[#00ace0] font-bold text-[13px] tracking-wider uppercase mb-3 block">
              HAVE QUESTIONS?
            </span>
            <h1 className="text-[36px] md:text-[45px] font-bold text-brand-dark mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-[16px] md:text-[18px] text-brand-slate leading-relaxed">
              Find answers to common questions about our moving services. If you can't find what you're looking for, please don't hesitate to contact us.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <details 
                key={idx} 
                className="group bg-white border border-gray-200 rounded-xl overflow-hidden [&_summary::-webkit-details-marker]:hidden shadow-sm"
              >
                <summary className="flex items-center justify-between p-6 cursor-pointer font-bold text-[16px] text-brand-dark hover:text-[#00ace0] transition-colors">
                  <span>{faq.q}</span>
                  <span className="ml-4 flex-shrink-0 transition-transform duration-300 group-open:rotate-180">
                    <svg className="w-5 h-5 text-brand-slate" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </summary>
                <div className="px-6 pb-6 text-[15px] text-brand-slate leading-relaxed border-t border-gray-100 pt-4">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>

          <div className="mt-16 text-center bg-white p-10 rounded-2xl shadow-sm border border-brand-gray/50">
            <h3 className="text-[22px] font-bold text-brand-dark mb-4">Still have questions?</h3>
            <p className="text-brand-slate mb-8">
              Our team is ready to provide personalized answers for your specific move.
            </p>
            <Link href="/contact" className="px-8 py-4 bg-brand-green text-white text-[16px] font-bold rounded-lg hover:bg-brand-greenLight transition-colors inline-block">
              Contact Us Directly
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
