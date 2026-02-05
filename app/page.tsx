import Hero from '@/components/home/Hero';
import DentalTips from '@/components/home/DentalTips';
import Services from '@/components/home/Services';
import DoctorIntro from '@/components/home/DoctorIntro';
import Testimonials from '@/components/home/Testimonials';
import ContactSection from '@/components/home/ContactSection';

export default function Home() {
  return (
    <>
      <Hero />
      <DentalTips />
      <Services />
      <DoctorIntro />
      <Testimonials />
      <ContactSection />
    </>
  );
}
