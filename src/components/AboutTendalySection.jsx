import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import images from '../constants/images'; // Ensure this path and image names are correct

// Import icons from their respective libraries
import { FaUsers, FaBullseye, FaEye, FaStar, FaShieldAlt, FaUserCheck } from 'react-icons/fa';
import { FiPlus, FiMinus, FiMapPin } from 'react-icons/fi';
import { BsRobot, BsCalendar2Check } from 'react-icons/bs';

// --- DATA for the Component Sections ---

const accordionItems = [
  {
    icon: FaUsers,
    title: 'Who We Are',
    content: 'We are a passionate team of technologists, healthcare professionals, and family members dedicated to solving the challenges of modern caregiving with empathy and innovation.',
  },
  {
    icon: FaBullseye,
    title: 'Our Mission',
    content: 'Our mission is to empower families and caregivers by providing a seamless, secure, and transparent platform that makes finding and managing quality care simple and stress-free.',
  },
  {
    icon: FaEye,
    title: 'Our Vision',
    content: 'We envision a world where every family, regardless of location, can have peace of mind knowing their loved ones are receiving the best possible care from trusted, compassionate professionals.',
  },
];

const features = [
  { icon: BsRobot, title: 'AI-Powered Matching', position: 'lg:top-0 lg:left-1/2 lg:-translate-x-1/2', colors: 'bg-sky-100 text-sky-600' },
  { icon: FaShieldAlt, title: 'Secure Messaging', position: 'lg:top-1/4 lg:right-0 lg:translate-x-1/4', colors: 'bg-green-100 text-green-600' },
  { icon: FaUserCheck, title: 'Background-Checked Providers', position: 'lg:bottom-1/4 lg:right-0 lg:translate-x-1/4', colors: 'bg-indigo-100 text-indigo-600' },
  { icon: BsCalendar2Check, title: 'Booking & Payment', position: 'lg:bottom-0 lg:left-1/2 lg:-translate-x-1/2', colors: 'bg-rose-100 text-rose-600' },
  { icon: FaStar, title: 'User Ratings & Reviews', position: 'lg:bottom-1/4 lg:left-0 lg:-translate-x-1/4', colors: 'bg-amber-100 text-amber-600' },
  { icon: FiMapPin, title: 'Location-Based Search', position: 'lg:top-1/4 lg:left-0 lg:-translate-x-1/4', colors: 'bg-purple-100 text-purple-600' },
];

// --- Reusable Sub-Components ---

const AccordionItem = ({ item, isOpen, onClick }) => {
  const { icon: Icon, title, content } = item;
  return (
    <div className="border-t border-slate-200 first:border-t-0">
      <button
        className="w-full flex justify-between items-center text-left py-5"
        onClick={onClick}
      >
        <div className="flex items-center gap-4">
          <Icon className="h-6 w-6 text-indigo-600" />
          <h4 className="text-lg font-semibold text-slate-800">{title}</h4>
        </div>
        <div className="flex-shrink-0 ml-4">
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-100 text-slate-600">
            {isOpen ? <FiMinus /> : <FiPlus />}
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
            <p className="pb-5 pl-10 text-slate-600">{content}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};


// --- The Main "About Tendaly" Section Component ---

const AboutTendalySection = () => {
  const [openAccordion, setOpenAccordion] = useState(0); // First item open by default

  return (
    <section className="bg-slate-50 font-sans py-20 sm:py-28">
      <div className="container mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* 1. "About Tendly" Header */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-4xl font-bold tracking-tight text-indigo-900 sm:text-5xl">
            About Tendaly
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            The purpose, passion, and people behind our mission to revolutionize the care industry.
          </p>
        </div>

        {/* 2. Accordion Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mt-16 max-w-3xl rounded-xl bg-white shadow-lg"
        >
          {accordionItems.map((item, index) => (
            <AccordionItem
              key={index}
              item={item}
              isOpen={openAccordion === index}
              onClick={() => setOpenAccordion(openAccordion === index ? null : index)}
            />
          ))}
        </motion.div>

        {/* 3. "At the Core" Features Section */}
        <div className="mt-20 pt-20 sm:mt-28 sm:pt-28 border-t border-slate-200">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-serif text-4xl font-bold tracking-tight text-indigo-900 sm:text-5xl">
              At the Core of Our Platform
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              Every feature is designed with your safety, convenience, and peace of mind at its heart.
            </p>
          </div>

          <div className="mt-20 lg:mt-24">
            {/* DESKTOP: Orbital Layout */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ staggerChildren: 0.1 }}
              className="hidden lg:relative lg:flex h-[550px] w-full items-center justify-center"
            >
              <motion.div 
                initial={{ opacity: 0, scale: 0.5 }} 
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.5, ease: 'easeOut' }}
              >
                <img src={images.heroMockup} alt="Tendaly App" className="relative z-10 h-80 object-contain" />
              </motion.div>
              {features.map((feature) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={feature.title}
                    variants={{ hidden: { opacity: 0, scale: 0.5 }, visible: { opacity: 1, scale: 1 } }}
                    className={`absolute flex flex-col items-center gap-3 w-40 text-center ${feature.position}`}
                  >
                    <div className={`flex h-14 w-14 items-center justify-center rounded-full ${feature.colors}`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="font-semibold text-slate-700">{feature.title}</h3>
                  </motion.div>
                );
              })}
            </motion.div>
            
            {/* MOBILE: Stacked List Layout */}
            <div className="lg:hidden mt-12 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-10">
              {features.map((feature) => {
                const Icon = feature.icon;
                return (
                  <div key={feature.title} className="flex items-center gap-4">
                    <div className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg ${feature.colors}`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="font-semibold text-slate-700">{feature.title}</h3>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

      </div>

      {/* 4. Final CTA Section */}
      <div className="mt-20 sm:mt-28">
        <section className="bg-indigo-600">
          <div className="container mx-auto px-6 py-20 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Experience a New Standard of Care?
            </h2>
            <p className="text-lg text-indigo-200 max-w-2xl mx-auto mb-8">
              Join thousands of satisfied families and caregivers who trust Tendaly.
            </p>
            <div className="flex items-center justify-center gap-4">
              <a href="#" aria-label="Get it on Google Play">
                <img src={images.playstore} alt="Google Play store button" className="h-14 w-auto" />
              </a>
              <a href="#" aria-label="Download on the App Store">
                <img src={images.appstore} alt="Apple App store button" className="h-14 w-auto" />
              </a>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default AboutTendalySection;