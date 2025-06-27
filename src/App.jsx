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
          <TopHeader />
          {/* <Header /> */}

       <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/waitlist" element={<Waitlist />} />
              <Route path="/provider" element={<BecomeProvider />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/login" element={<Login />} />
              <Route path="/about" element={<AboutTendalyPage />} />
            </Routes>
          </main>
          <WaitlistBanner />
          <SiteFooter />
        </div>
      )}
    </Router>
  );
}

export default App;
