import FaqSection from '../components/FaqSection';
import Features from '../components/Features';
// import FeaturesSection from '../components/FeaturesSection';
import Hero from '../components/Hero';
import TabbedFeatures from '../components/TabbedFeatures';
import TestimonialSlider from '../components/TestimonialSlider';
import WhyTendaly from '../components/WhyTendaly';

const Home = () => (
  <>
    <Hero />
    {/* <FeaturesSection /> */}
    <TabbedFeatures />
    <Features />
    <TestimonialSlider />
    <WhyTendaly />
    <FaqSection />
  </>
);

export default Home;
