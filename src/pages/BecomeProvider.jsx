// src/pages/BecomeProvider.jsx
import React, { useState } from 'react';
import { FaCalendarAlt, FaDollarSign, FaUsers, FaRegListAlt, FaRegComments, FaRegCreditCard, FaChevronDown, FaChevronUp } from 'react-icons/fa';

// --- Reusable Components (Reskinned with new colors) ---

const BenefitCard = ({ icon, title, children }) => (
  <div className="bg-white p-6 rounded-lg shadow-lg text-center transition-transform transform hover:-translate-y-2">
    <div className="flex justify-center mb-4">
      {/* Accent color used for the icon background */}
      <div className="bg-[#ff7b89]/20 text-[#ff7b89] p-4 rounded-full">
        {icon}
      </div>
    </div>
    <h3 className="text-xl font-bold text-[#0b5aad] mb-2">{title}</h3>
    <p className="text-slate-600">{children}</p>
  </div>
);

const Step = ({ icon, number, title, children }) => (
  <div className="flex flex-col items-center text-center">
    <div className="relative mb-4">
      {/* Dark blue for the main icon circle */}
      <div className="bg-[#0b5aad] text-white w-20 h-20 rounded-full flex items-center justify-center text-3xl">
        {icon}
      </div>
      {/* Accent color for the step number */}
      <div className="absolute -top-2 -right-2 bg-[#ff7b89] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm border-2 border-white">
        {number}
      </div>
    </div>
    <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
    <p className="text-slate-300 max-w-xs">{children}</p>
  </div>
);

const TestimonialCard = ({ quote, name, role, avatar }) => (
  <div className="bg-white p-8 rounded-lg shadow-xl">
    <p className="text-slate-600 italic mb-6">"{quote}"</p>
    <div className="flex items-center">
      <img src={avatar} alt={name} className="w-12 h-12 rounded-full mr-4" />
      <div>
        <h4 className="font-bold text-[#0b5aad]">{name}</h4>
        {/* Primary blue for the provider's role */}
        <p className="text-[#0099ff] text-sm font-semibold">{role}</p>
      </div>
    </div>
  </div>
);

const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-gray-200 py-4">
      <button
        className="w-full flex justify-between items-center text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h4 className="text-lg font-semibold text-[#0b5aad]">{question}</h4>
        {/* Primary blue for the chevron icon */}
        {isOpen ? <FaChevronUp className="text-[#0099ff]" /> : <FaChevronDown className="text-slate-500" />}
      </button>
      {isOpen && (
        <div className="mt-4 text-slate-600">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};


// --- The Main Page Component ---

const BecomeProvider = () => {
  const testimonials = [
    { quote: "Tendly gave me the flexibility I needed to balance my work and family life. Finding clients has never been easier!", name: "Aisha Bello", role: "Registered Nurse", avatar: "https://i.pravatar.cc/100?u=aisha" },
    { quote: "The platform's tools are incredible. Secure messaging and automated payments let me focus on what I do best—providing quality care.", name: "Samuel Ojo", role: "Certified Caregiver", avatar: "https://i.pravatar.cc/100?u=samuel" },
  ];
  
  const faqs = [
      { question: "How do I get paid?", answer: "Payments from clients are processed securely through our platform. Funds are directly deposited into your linked bank account 2-3 business days after a completed session." },
      { question: "Is there a fee to join?", answer: "It is completely free to create a profile and become a provider on Tendly. We only take a small service fee from your earnings on completed bookings, which helps us run the platform." },
      { question: "Can I set my own rates and schedule?", answer: "Absolutely! You have full control over your hourly rates, the services you offer, and your availability. Our platform is designed to give you maximum flexibility." },
  ];

  return (
    <div className="bg-white">
      {/* 1. Hero Section */}
      <header className="bg-[#0b5aad] text-white">
        <div className="container mx-auto px-6 py-24 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
            Empower Your Career in Care
          </h1>
          <p className="text-lg md:text-xl text-slate-200 max-w-2xl mx-auto mb-8">
            Join Tendly to connect with families, manage your business with ease, and work on your own terms.
          </p>
          <a
            href="/signup"
            className="bg-[#0099ff] text-white font-bold px-8 py-4 rounded-full hover:bg-opacity-90 transition-all duration-300 inline-block transform hover:scale-105"
          >
            Start Your Application
          </a>
        </div>
      </header>

      <main>
        {/* 2. Why Join Us? Section */}
        <section className="py-20 bg-[#f2f4f7]">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0b5aad]">Why Become a Tendly Provider?</h2>
              <p className="text-lg text-slate-600 mt-2">We provide the tools and support you need to thrive.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <BenefitCard icon={<FaCalendarAlt size={30} />} title="Work on Your Terms" />
              <BenefitCard icon={<FaUsers size={30} />} title="Connect with Families" />
              <BenefitCard icon={<FaDollarSign size={30} />} title="Maximize Your Earnings" />
            </div>
          </div>
        </section>

        {/* 3. How It Works Section */}
        <section className="py-20 bg-[#0b5aad]">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white">Getting Started is Easy</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-y-12 gap-x-8">
              <Step icon={<FaRegListAlt />} number="1" title="Create Your Profile">Showcase your skills, certifications, and experience.</Step>
              <Step icon={<FaRegComments />} number="2" title="Get Matched with Clients">Our system notifies you of jobs that match your expertise.</Step>
              <Step icon={<FaRegCreditCard />} number="3" title="Manage & Get Paid">Use our platform to schedule and receive payments securely.</Step>
            </div>
          </div>
        </section>
        
        {/* 4. Testimonials Section */}
        <section className="py-20 bg-[#f2f4f7]">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#0b5aad]">Trusted by Providers Like You</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {testimonials.map((t, i) => <TestimonialCard key={i} {...t} />)}
                </div>
            </div>
        </section>

        {/* 5. FAQ Section */}
        <section className="py-20 bg-white">
            <div className="container mx-auto px-6 max-w-3xl">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#0b5aad]">Frequently Asked Questions</h2>
                </div>
                <div>
                    {faqs.map((faq, i) => <FaqItem key={i} {...faq} />)}
                </div>
            </div>
        </section>

        {/* 6. Final CTA Section */}
        <section id="signup" className="bg-[#0099ff]">
          <div className="container mx-auto px-6 py-20 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Transform Your Caregiving Career?</h2>
            <p className="text-lg text-blue-100 max-w-xl mx-auto mb-8">
              Create your free profile today and start connecting with families who need your expertise.
            </p>
            <a
              href="/signup"
              className="bg-white text-[#0099ff] font-bold px-8 py-4 rounded-full hover:bg-gray-100 transition-all duration-300 inline-block transform hover:scale-105"
            >
              Apply Now and Get Started
            </a>
          </div>
        </section>
      </main>
    </div>
  );
};

export default BecomeProvider;