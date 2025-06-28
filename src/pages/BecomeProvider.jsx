import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
// ✨ UPDATED: Added FiPlus and FiMinus, removed FaChevronDown
import { FaCalendarAlt, FaDollarSign, FaUsers, FaRegListAlt, FaRegComments, FaRegCreditCard, FaQuoteLeft } from 'react-icons/fa';
import { FiPlus, FiMinus } from 'react-icons/fi';

// --- Data for the page (makes it easy to update) ---

const benefits = [
  {
    icon: FaCalendarAlt,
    title: 'Complete Flexibility',
    description: 'You are in control. Set your own schedule, define your service area, and choose the clients that are the right fit for you. Work as much or as little as you want.',
    image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  },
  {
    icon: FaUsers,
    title: 'Access to More Clients',
    description: "Stop searching for clients and let them find you. We connect you with a steady stream of families in your area actively seeking your skills and expertise.",
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80',
  },
  {
    icon: FaDollarSign,
    title: 'Streamlined Payments',
    description: "Focus on care, not collections. Our platform handles all client billing and ensures you receive secure, direct deposits weekly for the work you've completed.",
    image: 'https://images.unsplash.com/photo-1554224155-1696413565d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  },
];

const testimonials = [
  { quote: "Tendaly gave me the flexibility I needed to balance my work and family life. Finding clients has never been easier!", name: "Aisha Bello", role: "Registered Nurse", avatar: "https://i.pravatar.cc/100?u=aisha" },
  { quote: "The platform's tools are incredible. Secure messaging and automated payments let me focus on what I do best—providing quality care.", name: "Samuel Ojo", role: "Certified Caregiver", avatar: "https://i.pravatar.cc/100?u=samuel" },
];

const faqs = [
  { question: "How do I get paid?", answer: "Payments from clients are processed securely through our platform. Funds are directly deposited into your linked bank account 2-3 business days after a completed session." },
  { question: "Is there a fee to join?", answer: "It is completely free to create a profile and become a provider on Tendaly. We only take a small service fee from your earnings on completed bookings, which helps us run the platform." },
  { question: "Can I set my own rates and schedule?", answer: "Absolutely! You have full control over your hourly rates, the services you offer, and your availability. Our platform is designed to give you maximum flexibility." },
];


// --- Reusable Components ---

// ✨ UPDATED: FAQ Item now uses a + and - icon system
const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-slate-200">
      <button
        className="w-full flex justify-between items-center text-left py-5"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h4 className="text-lg font-semibold text-indigo-900">{question}</h4>
        <div className="flex-shrink-0 ml-4">
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition-colors hover:bg-slate-200">
            {isOpen ? <FiMinus className="h-5 w-5" /> : <FiPlus className="h-5 w-5" />}
          </div>
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-slate-600">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};


const BenefitText = ({ icon: Icon, title, description }) => (
  <div className="relative flex items-start gap-4">
    <div className="mt-1 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-indigo-100">
      <Icon className="h-6 w-6 text-indigo-600" />
    </div>
    <div>
      <h3 className="text-xl font-bold text-slate-900">{title}</h3>
      <p className="mt-2 text-base leading-relaxed text-slate-600">{description}</p>
    </div>
  </div>
);


// --- The Main Page Component ---

const BecomeProvider = () => {
  const [activeBenefit, setActiveBenefit] = useState(0);

  return (
    <div className="bg-white font-sans">
      {/* 1. Hero Section */}
      <header className="bg-indigo-700 text-white relative overflow-hidden">
        <div className="container mx-auto px-6 py-28 text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-6xl font-bold tracking-tight mb-4"
          >
            Empower Your Career in Care
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-indigo-200 max-w-2xl mx-auto mb-8"
          >
            Join Tendaly to connect with families, manage your business with ease, and work on your own terms.
          </motion.p>
          <motion.a
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            href="/signup"
            className="bg-sky-500 text-white font-bold px-8 py-4 rounded-full hover:bg-sky-600 transition-all duration-300 inline-block transform hover:scale-105"
          >
            Start Your Application
          </motion.a>
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-indigo-800/20 z-0" />
      </header>

      <main>
        {/* 2. Why Join Us? Section */}
        <section className="py-20 sm:py-28 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-indigo-900 font-serif" style={{fontFamily:'Montserrat'}}>Your Platform for Success</h2>
              <p className="text-lg text-slate-600 mt-4">We provide the tools, support, and flexibility you need to build a thriving caregiving career.</p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-10 items-start">
              {/* Left Column: Sticky Image */}
              <div className="lg:sticky lg:top-24">
                 <div className="rounded-2xl overflow-hidden shadow-2xl shadow-indigo-200/50">
                    <AnimatePresence mode="wait">
                      <motion.img
                        key={activeBenefit}
                        src={benefits[activeBenefit].image}
                        alt={benefits[activeBenefit].title}
                        initial={{ opacity: 0, scale: 1.05 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.4, ease: 'easeInOut' }}
                        className="h-[60vh] w-full object-cover"
                      />
                    </AnimatePresence>
                  </div>
              </div>
              
              {/* Right Column: Scrolling Text */}
              <div className="space-y-16">
                  {benefits.map((benefit, index) => (
                    <motion.div key={index} onViewportEnter={() => setActiveBenefit(index)}>
                      <BenefitText {...benefit} />
                    </motion.div>
                  ))}
              </div>
            </div>
          </div>
        </section>

        {/* 3. How It Works Section */}
        <section className="py-20 sm:py-28 bg-indigo-700">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white font-serif" style={{fontFamily:'Montserrat'}}>Getting Started is Easy</h2>
            </div>
            <div className="relative max-w-2xl mx-auto">
              <div className="absolute left-10 top-0 h-full w-0.5 bg-indigo-600" />
              <div className="relative space-y-16">
                 <div className="pl-20 relative"><Step icon={<FaRegListAlt />} number="1" title="Create Your Profile">Showcase your skills, certifications, and experience.</Step></div>
                 <div className="pl-20 relative"><Step icon={<FaRegComments />} number="2" title="Get Matched with Clients">Our system notifies you of jobs that match your expertise.</Step></div>
                 <div className="pl-20 relative"><Step icon={<FaRegCreditCard />} number="3" title="Manage & Get Paid">Use our platform to schedule and receive payments securely.</Step></div>
              </div>
            </div>
          </div>
        </section>
        
        {/* 4. Testimonials Section */}
        <section className="py-20 sm:py-28 bg-slate-50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-indigo-900 font-serif" style={{fontFamily:'Montserrat'}}>Trusted by Providers Like You</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {testimonials.map((t, i) => (
                      <div key={i} className="bg-white p-8 rounded-lg shadow-lg">
                        <FaQuoteLeft className="text-3xl text-indigo-200 mb-4"/>
                        <p className="text-slate-600 italic mb-6">"{t.quote}"</p>
                        <div className="flex items-center">
                          <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full mr-4" />
                          <div>
                            <h4 className="font-bold text-indigo-900">{t.name}</h4>
                            <p className="text-sky-500 text-sm font-semibold">{t.role}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
            </div>
        </section>

        {/* 5. FAQ Section */}
        <section className="py-20 sm:py-28 bg-white">
            <div className="container mx-auto px-6 max-w-3xl">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-indigo-900 font-serif" style={{fontFamily:'Montserrat'}}>Frequently Asked Questions</h2>
                </div>
                <div className="space-y-4">
                    {faqs.map((faq, i) => <FaqItem key={i} {...faq} />)}
                </div>
            </div>
        </section>

        {/* 6. Final CTA Section */}
        <section className="bg-indigo-700">
          <div className="container mx-auto px-6 py-20 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Transform Your Caregiving Career?</h2>
            <p className="text-lg text-indigo-200 max-w-xl mx-auto mb-8">
              Create your free profile today and start connecting with families who need your expertise.
            </p>
            <a
              href="/signup"
              className="bg-sky-500 text-white font-bold px-8 py-4 rounded-full hover:bg-sky-600 transition-all duration-300 inline-block transform hover:scale-105"
            >
              Apply Now and Get Started
            </a>
          </div>
        </section>
      </main>
    </div>
  );
};

// Simplified Step component for the new vertical layout
const Step = ({ icon, number, title, children }) => (
  <>
    <div className="absolute -left-2 top-0 bg-indigo-600 text-white w-24 h-24 rounded-full flex items-center justify-center text-3xl ring-8 ring-indigo-700">
        {icon}
    </div>
    <div className="ml-8">
        <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
        <p className="text-indigo-200">{children}</p>
    </div>
  </>
);


export default BecomeProvider;