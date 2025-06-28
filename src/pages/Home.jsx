import FaqSection from '../components/FaqSection';
import Features from '../components/Features';
import Hero from '../components/Hero';
import TestimonialSlider from '../components/TestimonialSlider';
import WhyTendaly from '../components/WhyTendaly';
import HowItWorksCombined from '../components/HowItWorksCombined';
import AboutTendalyPage from './AboutTendalyPage';
import FeaturesPage from './FeaturesPage';

const Home = () => (
  <>
    <Hero />
    <AboutTendalyPage />
    <FeaturesPage />
    <HowItWorksCombined />
    <Features />
    <TestimonialSlider />
    <WhyTendaly />
    <FaqSection />
  </>
);

export default Home;
