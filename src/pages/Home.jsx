import FaqSection from '../components/FaqSection';
import Features from '../components/Features';
import Hero from '../components/Hero';
import TabbedFeatures from '../components/TabbedFeatures';
import TestimonialSlider from '../components/TestimonialSlider';
import WhyTendaly from '../components/WhyTendaly';
import AboutTendalyPage from './AboutTendalyPage';

const Home = () => (
  <>
    <Hero />
    {/* <FSection /> */}
    <TabbedFeatures />
    <AboutTendalyPage />
    <Features />
    <TestimonialSlider />
    <WhyTendaly />
    <FaqSection />
  </>
);

export default Home;
