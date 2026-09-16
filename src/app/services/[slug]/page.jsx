import Link from 'next/link';
import { CheckCircle2 } from 'lucide-react';

const servicesData = {
  'local-moving': {
    title: 'Local Moving in London',
    heading: 'Professional House Removals in London',
    desc: 'Expert local moving services for a seamless transition within London. We handle everything from cozy studio flats to large family homes across all London boroughs with precision and care.',
    features: ['Fully insured transport', 'Furniture dismantling & assembly', 'Transparent upfront pricing', 'Flexible scheduling'],
    serviceType: 'House Removals'
  },
  'office-removals': {
    title: 'Office Relocation Services in London',
    heading: 'Seamless Office Removals',
    desc: 'Minimize downtime with our efficient and careful office removal services. We securely transport IT equipment, office furniture, and sensitive documents.',
    features: ['Out-of-hours moving available', 'IT equipment handling', 'Secure document transport', 'Dedicated project manager'],
    serviceType: 'Office Removals'
  },
  'furniture-removal': {
    title: 'Furniture Transport & Delivery',
    heading: 'Specialist Furniture Transport',
    desc: 'Safe and secure transport for all your bulky, heavy, and fragile furniture. We use professional-grade protective equipment to guarantee safety.',
    features: ['Protective blanket wrapping', 'Antiques & fragile item care', 'Staircase navigation experts', 'Single item or full suites'],
    serviceType: 'Furniture Transport'
  },
  'man-and-van': {
    title: 'Man and Van Services in London',
    heading: 'Reliable Man and Van Services',
    desc: 'Flexible, affordable man and van services perfect for smaller moves, store pickups, student relocations, and quick transitions.',
    features: ['Hourly or fixed rates', 'Driver assistance included', 'Clean, modern vans', 'Same-day availability'],
    serviceType: 'Man and Van'
  },
  'packing-services': {
    title: 'Professional Packing Services',
    heading: 'Comprehensive Packing Solutions',
    desc: 'Let us handle the boxing! We use premium materials to pack your life safely. We offer full-house packing or fragile-only packing.',
    features: ['Premium boxes & bubble wrap', 'Fragile-item specialists', 'Unpacking services available', 'Time-saving convenience'],
    serviceType: 'Packing Services'
  },
  'waste-removal': {
    title: 'Waste & Rubbish Removal',
    heading: 'Eco-Friendly Waste Clearance',
    desc: 'Eco-friendly clearance services for your unwanted items. Perfect for pre-move decluttering or post-move cleanup.',
    features: ['Licensed waste carriers', 'Eco-friendly disposal', 'Furniture & appliance removal', 'Fast & efficient clearing'],
    serviceType: 'Waste Removal'
  },
};

export function generateStaticParams() {
  return Object.keys(servicesData).map((slug) => ({
    slug,
  }));
}

export function generateMetadata({ params }) {
  const service = servicesData[params.slug];
  if (!service) return { title: 'Service Not Found | SouzaDispatch' };

  return {
    title: `${service.title} | SouzaDispatch`,
    description: service.desc,
  };
}

export default function ServicePage({ params }) {
  const service = servicesData[params.slug];

  if (!service) {
    return <div className="py-20 text-center">Service not found.</div>;
  }

  // Generate Service Schema (JSON-LD)
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.title,
    "provider": {
      "@type": "MovingCompany",
      "name": "SouzaDispatch",
      "image": "https://www.souzadispatch.co.uk/assets/logo.png"
    },
    "description": service.desc,
    "areaServed": {
      "@type": "City",
      "name": "London"
    },
    "serviceType": service.serviceType
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      
      <div className="py-20 bg-brand-light min-h-[70vh]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="bg-brand-white rounded-3xl shadow-sm border border-brand-gray/50 overflow-hidden">
            <div className="p-8 md:p-16 lg:p-20 text-center max-w-[900px] mx-auto">
              <span className="text-[#ff8c00] font-bold text-[14px] tracking-widest uppercase mb-4 block">
                {service.serviceType}
              </span>
              <h1 className="text-[36px] md:text-[50px] font-bold text-brand-dark mb-6 leading-tight">
                {service.heading}
              </h1>
              <p className="text-[16px] md:text-[18px] text-brand-slate leading-relaxed mb-12">
                {service.desc}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left max-w-[700px] mx-auto mb-16 bg-slate-50 p-8 rounded-2xl border border-gray-100">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle2 className="w-6 h-6 text-brand-green flex-shrink-0" />
                    <span className="text-[16px] font-medium text-brand-dark">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link href="/contact" className="px-8 py-4 bg-[#ff8c00] text-white text-[16px] font-bold rounded-lg shadow-sm hover:bg-[#e07b00] transition-colors inline-flex justify-center items-center">
                  Request a Free Quote
                </Link>
                <a href="https://wa.me/447862036671" className="px-8 py-4 bg-brand-green text-white text-[16px] font-bold rounded-lg shadow-sm hover:bg-brand-greenLight transition-colors inline-flex justify-center items-center">
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
