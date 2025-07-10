// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import GlobalStyles from "./GlobalStyles";
import TopHeader from "./components/TopHeader";
import SiteFooter from "./components/SiteFooter";

// Pages & Components
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Header from "./components/Header";
import Waitlist from "./pages/Waitlist";
import BecomeProvider from "./pages/BecomeProvider";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import AboutTendalyPage from "./pages/AboutTendalyPage";
import WaitlistBanner from "./components/WaitlistBanner";
import HowItWorksCombined from "./components/HowItWorksCombined";
import Testimonials from "./pages/Testimonials";
import FeaturesPage from "./pages/FeaturesPage";
import FindCarePage from "./pages/FindCarePage";
import ScrollToHash from "./ScrollToHash";
import TermsOfUsePage from "./pages/TermsOfUsePage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import MissionComponent from "./pages/MissionComponent";
import DataDeletionPage from "./pages/DataDeletionPage";
import PrivacyRequestPage from "./pages/PrivacyRequestPage";

function App() {
  return (
    <Router>
      <div className="bg-white text-brand-gray-text">
        <GlobalStyles />
        <ScrollToHash />
        <TopHeader />
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
            <Route path="/terms-of-service" element={<TermsOfUsePage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/donation" element={<MissionComponent />} />
            <Route path="/data-deletion" element={<DataDeletionPage />} />
            <Route path="/requests" element={<PrivacyRequestPage />} />
          </Routes>
        </main>

        <WaitlistBanner />
        <SiteFooter />
      </div>
    </Router>
  );
}

export default App;
