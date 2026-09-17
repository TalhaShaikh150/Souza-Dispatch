import Hero from '@/components/Hero';
import TrustBar from '@/components/TrustBar';
import ServicesSection from '@/components/ServicesSection';
import TeamSection from '@/components/TeamSection';
import ProcessSection from '@/components/ProcessSection';
import Testimonials from '@/components/Testimonials';
import CtaSection from '@/components/CtaSection';

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <ServicesSection />
      <TeamSection />
      <ProcessSection />
      <Testimonials />
      <CtaSection />
    </>
  );
}
