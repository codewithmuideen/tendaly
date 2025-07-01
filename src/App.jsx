// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';

import GlobalStyles from './GlobalStyles';
import TopHeader from './components/TopHeader';
// import Header from './components/Header/Header';
import SiteFooter from './components/SiteFooter';
import Preloader from './components/Preloader'; // 👈 Import preloader

// Pages
import Home from './pages/Home';
import Contact from './pages/Contact';
import Header from './components/Header';
import Waitlist from './pages/Waitlist';
import BecomeProvider from './pages/BecomeProvider';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import AboutTendalyPage from './pages/AboutTendalyPage';
import WaitlistBanner from './components/WaitlistBanner';
import HowItWorksCombined from './components/HowItWorksCombined';
import Testimonials from './pages/Testimonials';
import FeaturesPage from './pages/FeaturesPage';
import FindCarePage from './pages/FindCarePage';
import ScrollToHash from './ScrollToHash';
// import Cta from './components/Cta';



function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay (e.g., fetching assets or data)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // ⏳ Adjust duration if needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      {loading ? (
        <Preloader />
      ) : (
        <div className="bg-white text-brand-gray-text">
          <GlobalStyles />
          <ScrollToHash />
          <TopHeader />
          {/* <Header /> */}

       <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/waitlist" element={<Waitlist />} />
              <Route path="/provider" element={<BecomeProvider />} />
              <Route path="/find-care" element={<FindCarePage />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/login" element={<Login />} />
              <Route path="/about" element={<AboutTendalyPage />} />
              <Route path="/how-it-works" element={<HowItWorksCombined />} />
              <Route path="/testimonials" element={<Testimonials />} />
              <Route path="/features" element={<FeaturesPage />} />
            </Routes>
          </main>
          {/* <Cta /> */}
          <WaitlistBanner />
          <SiteFooter />
        </div>
      )}
    </Router>
  );
}

export default App;
