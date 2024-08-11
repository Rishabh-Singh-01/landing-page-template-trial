import AboutUs from '@/components/custom/AboutUs';
import ContactUs from '@/components/custom/ContactUs';
import Faq from '@/components/custom/Faq';
import Footer from '@/components/custom/Footer';
import HeroSectionImageWithReviews from '@/components/custom/HeroSectionImageWithReviews';
import TestimonialSliderCard from '@/components/custom/Testimonial';
import TrustedBy from '@/components/custom/TrustedBy';
import Header from '@/components/custom/header';

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSectionImageWithReviews />
      <TrustedBy />
      <AboutUs />
      <ContactUs />
      <TestimonialSliderCard />
      <Faq />
      <Footer />
    </div>
  );
}
