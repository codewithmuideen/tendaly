import FaqSection from '../components/FaqSection';
import Features from '../components/Features';
import FSection from '../components/FSection';
import Hero from '../components/Hero';
import TabbedFeatures from '../components/TabbedFeatures';
import TestimonialSlider from '../components/TestimonialSlider';
import WhyTendaly from '../components/WhyTendaly';

const Home = () => (
  <>
    <Hero />
    {/* <FSection /> */}
    <TabbedFeatures />
    <Features />
    <TestimonialSlider />
    <WhyTendaly />
    <FaqSection />
  </>
);

export default Home;
