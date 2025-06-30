import FaqSection from '../components/FaqSection';
import Features from '../components/Features';
// import Hero from '../components/Hero';
import TestimonialSlider from '../components/TestimonialSlider';
// import WhyTendaly from '../components/WhyTendaly';
import HowItWorksCombined from '../components/HowItWorksCombined';
import AboutTendalyPage from './AboutTendalyPage';
import FeaturesPage from './FeaturesPage';
import HeroComponent from '../components/HeroComponent';
import EmpowerCareerBanner from '../components/EmpowerCareerBanner';
import FindCareBanner from '../components/FindCareBanner';

const Home = () => (
  <>
    {/* <Hero /> */}
<HeroComponent />
    <AboutTendalyPage />
    <FeaturesPage />
    <HowItWorksCombined />
    <FindCareBanner />
    <EmpowerCareerBanner />
    <Features />
    <TestimonialSlider />
    {/* <WhyTendaly /> */}
    <FaqSection />
  </>
);

export default Home;
