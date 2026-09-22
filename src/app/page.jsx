import Hero from '@/components/Hero';
import GoogleReviews from '@/components/GoogleReviews';
import ServicesSection from '@/components/ServicesSection';
import ProcessSection from '@/components/ProcessSection';
import GallerySection from '@/components/GallerySection';

export default function Home() {
  return (
    <>
      <Hero />
      <GoogleReviews />
      <ServicesSection />
      <ProcessSection />
      <GallerySection />
    </>
  );
}

