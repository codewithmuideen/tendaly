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
  {
    quote: "Tendaly gave me the flexibility I needed to balance my work and family life. Finding clients has never been easier!",
    name: "Tiffany Chapin",
    role: "Registered Nurse",
    avatar: "https://media.istockphoto.com/id/2074983548/vector/default-placeholder-doctor-portrait-photo-avatar-on-gray-background-greyscale-female.jpg?s=612x612&w=0&k=20&c=kRx9BZpeg3WruAKBRDfBrd03P6sWyLW2PzLRUaQnueE="
  },
  {
    quote: "The platform's tools are incredible. Secure messaging and automated payments let me focus on what I do best providing quality care.",
    name: "Jessica Paige",
    role: "Certified Caregiver",
    avatar: "https://media.istockphoto.com/id/2077095666/vector/default-placeholder-doctor-portrait-photo-avatar-on-gray-background-greyscale-healthcare.jpg?s=612x612&w=0&k=20&c=en2o7NAtzp_udRQhckeWozkwHiXGz5KCRhTzY3Vbhdo="
  },
  {
    quote: "Tendaly connected me with a kind caregiver within hours. As someone recovering from surgery, that speed meant everything.",
    name: "Sophia Mendez",
    role: "Short-Term Recovery Patient",
    avatar: "https://media.istockphoto.com/id/1133765594/vector/person-gray-photo-placeholder-woman.jpg?s=612x612&w=0&k=20&c=3s8E3J67u8BQVb1Jp_emX5e8hgYHlymfH5yIwxJ-1NA="
  },
  {
    quote: "I’ve worked with other caregiving platforms, but none are as intuitive and respectful as Tendaly. I feel truly supported.",
    name: "Michael Adebayo",
    role: "Home Health Aide",
    avatar: "https://media.istockphoto.com/id/1127533460/vector/person-gray-photo-placeholder-man.jpg?s=612x612&w=0&k=20&c=LQxy_IP8l6qtbkSZrw3eHdHOejtzLSkDNRrxJ6rafb8="
  },
  {
    quote: "Managing my father’s care remotely is easier than ever. I can see everything from visit notes to payments in one place.",
    name: "Olivia Tran",
    role: "Daughter & Family Coordinator",
    avatar: "https://media.istockphoto.com/id/1934800192/vector/vector-illustration-depicting-female-face-silhouettes-or-icons-serving-as-avatars-or.jpg?s=612x612&w=0&k=20&c=RNKS7ZquP3reGRiVjepLcwioEtjK-sHniSQX9IDYyL4="
  },
  {
    quote: "Tendaly helped me find work during a tough period. The weekly payments and great families have kept me going.",
    name: "David Nwosu",
    role: "Part-Time Caregiver",
    avatar: "https://media.istockphoto.com/id/2060008471/vector/avatar-man-icon-profile-placeholder-anonymous-user-male-no-photo-web-template-default-user.jpg?s=612x612&w=0&k=20&c=D7X35MNlHIY5bSLOYhHvifEHJPu3Z9ydAKP3v1mjybI="
  },
];

const faqs = [
  {
    question: 'What is Tendaly?',
    answer:
      'Tendaly is a care matching platform that connects caregivers with people who need care services such as senior care, adult care, childcare, pet care, and wellness support or special needs assistance.',
  },
  {
    question: 'How do I find a caregiver on Tendaly?',
    answer:
      'Simply sign up, specify the type of care you need, and browse available caregivers in your location. You can view profiles, read reviews, and book directly through the app.',
  },
  {
    question: 'Are the caregivers verified?',
    answer:
      'Yes. All caregivers on Tendaly undergo a thorough vetting process that includes background checks, identity verification, and experience validation.',
  },
  {
    question: 'Can I schedule care on short notice?',
    answer:
      'Yes. Tendaly allows you to book caregivers for immediate needs or schedule them in advance, depending on caregiver availability.',
  },
  {
    question: 'How does payment work?',
    answer:
      'All payments are handled securely through the Tendaly platform. You’ll see the caregiver’s hourly or session rate upfront and can pay directly through the app after the service is completed.',
  },
  {
    question: 'What if I have a complaint or issue with a caregiver?',
    answer:
      'Our support team is available to help resolve any issues. You can also report concerns directly through the app, and we will take appropriate action.',
  },
  {
    question: 'Is Tendaly available nationwide?',
    answer:
      'Tendaly is currently available in selected regions and rapidly expanding. You can check availability by entering your location in the app.',
  },
  {
    question: 'Can I cancel or reschedule a booking?',
    answer:
      'Yes, you can cancel or reschedule a booking within the app. Each caregiver may have specific cancellation policies, which will be visible before you confirm your booking.',
  },
  {
    question: 'What happens if I’m not satisfied with the service?',
    answer:
      "Tendaly prioritizes your satisfaction. If you're not happy with the service provided, please contact our support team immediately. We will investigate the issue and take appropriate action.",
  },
  {
    question: 'Is Tendaly available in my location?',
    answer:
      'Tendaly is expanding quickly. You can check availability by entering your ZIP code or city in the app or on our website.',
  },
  {
    question: 'Can caregivers use the platform to find jobs?',
    answer:
      'Absolutely. Tendaly is also a platform for caregivers looking to offer their services. After passing our vetting process, caregivers can list their availability, set their rates, and get matched with care seekers.',
  },
  {
    question: 'What types of care can I find on Tendaly?',
    answer:
      `Tendaly supports a wide range of care services, including:\n
● Senior Care\n
● Adult Care\n
● Child Care\n
● Special needs care\n
● Wellness support\n
● Post-surgery or recovery assistance\n
● Pet Care`,
  },
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
            href="/waitlist"
            className="bg-sky-500 text-white font-bold px-8 py-4 rounded-full hover:bg-sky-600 transition-all duration-300 inline-block transform hover:scale-105"
          >
            Get Started
          </motion.a>
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-indigo-800/20 z-0" />
      </header>

      <main>
        {/* 2. Why Join Us? Section */}
        <section className="py-20 sm:py-28 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-indigo-900 font-serif"  style={{fontFamily:'Nunito'}}>Your Platform for Success</h2>
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
              <h2 className="text-4xl md:text-5xl font-bold text-white font-serif"  style={{fontFamily:'Nunito'}}>Getting Started is Easy</h2>
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
      <h2 className="text-4xl md:text-5xl font-bold text-indigo-900 font-serif" style={{ fontFamily: 'Nunito' }}>
        Trusted by Providers Like You
      </h2>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
      {testimonials.map((t, i) => (
        <div key={i} className="bg-white p-8 rounded-lg shadow-lg h-full flex flex-col justify-between">
          <FaQuoteLeft className="text-3xl text-indigo-200 mb-4" />
          <p className="text-slate-600 italic mb-6">"{t.quote}"</p>
          <div className="flex items-center mt-auto">
            <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full mr-4 object-cover" />
            <div>
              <h4 className="font-bold text-indigo-900">{t.name}</h4>
              <p className="text-sky-500 text-sm font-semibold">{t.role}</p>
              <p className="mt-2 text-xs italic text-slate-400">
               —Mock testimonial to illustrate expected user experience._
              </p>
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
                    <h2 className="text-4xl md:text-5xl font-bold text-indigo-900"  style={{fontFamily:'Nunito'}}>Frequently Asked Questions</h2>
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
              href="/waitlist"
              className="bg-sky-500 text-white font-bold px-8 py-4 rounded-full hover:bg-sky-600 transition-all duration-300 inline-block transform hover:scale-105"
            >
             Join wait list now!
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