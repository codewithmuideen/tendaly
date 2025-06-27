import React from 'react';
import { motion } from 'framer-motion';
import images from '../constants/images'; // Ensure this path is correct

// Import icons from their respective libraries
import { FaUserCheck, FaStar, FaShieldAlt } from 'react-icons/fa';
import { BsRobot, BsCalendar2Check } from 'react-icons/bs';
import { FiMapPin } from 'react-icons/fi';

// ✨ NEW DATA STRUCTURE: Includes positioning classes for the orbital layout on desktop
const features = [
  {
    icon: BsRobot,
    title: 'AI-Powered Matching',
    positionClasses: 'lg:top-0 lg:left-1/2 lg:-translate-x-1/2',
    iconBg: 'bg-sky-100',
    iconColor: 'text-sky-600',
  },
  {
    icon: FaShieldAlt,
    title: 'Secure Messaging',
    positionClasses: 'lg:top-1/4 lg:right-0 lg:translate-x-1/4',
    iconBg: 'bg-green-100',
    iconColor: 'text-green-600',
  },
  {
    icon: FaUserCheck,
    title: 'Background-Checked Providers',
    positionClasses: 'lg:bottom-1/4 lg:right-0 lg:translate-x-1/4',
    iconBg: 'bg-indigo-100',
    iconColor: 'text-indigo-600',
  },
  {
    icon: BsCalendar2Check,
    title: 'Booking & Payment',
    positionClasses: 'lg:bottom-0 lg:left-1/2 lg:-translate-x-1/2',
    iconBg: 'bg-rose-100',
    iconColor: 'text-rose-600',
  },
  {
    icon: FaStar,
    title: 'User Ratings & Reviews',
    positionClasses: 'lg:bottom-1/4 lg:left-0 lg:-translate-x-1/4',
    iconBg: 'bg-amber-100',
    iconColor: 'text-amber-600',
  },
  {
    icon: FiMapPin, // Using FiMapPin for a slightly different style
    title: 'Location-Based Search',
    positionClasses: 'lg:top-1/4 lg:left-0 lg:-translate-x-1/4',
    iconBg: 'bg-purple-100',
    iconColor: 'text-purple-600',
  },
];


// Reusable component for each feature "node"
const FeatureNode = ({ icon: Icon, title, positionClasses, iconBg, iconColor }) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, scale: 0.5 },
        visible: { opacity: 1, scale: 1 },
      }}
      className={`absolute w-48 transition-transform hover:scale-105 ${positionClasses}`}
    >
      <div className="flex flex-col items-center text-center">
        <div className={`flex h-16 w-16 items-center justify-center rounded-full ${iconBg} shadow-md`}>
          <Icon className={`text-3xl ${iconColor}`} />
        </div>
        <h3 className="mt-4 font-bold text-slate-800">{title}</h3>
      </div>
    </motion.div>
  );
};


const FeaturesPage = () => {
  return (
    <section className="bg-slate-50 font-sans py-20 sm:py-28 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-4xl font-bold tracking-tight text-indigo-900 sm:text-5xl">
            At the Core of Our Platform
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            Every feature is designed with your safety, convenience, and peace of mind at its heart.
          </p>
        </div>

        {/* This container handles the layout switch: orbital on desktop, stacked on mobile */}
        <div className="mt-20 lg:mt-24">
          
          {/* --- DESKTOP: Orbital Layout --- */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ staggerChildren: 0.1 }}
            className="hidden lg:relative lg:flex h-[600px] w-full items-center justify-center"
          >
            {/* Central Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.5, ease: 'easeOut' }}
            >
              <img
                src={images.sticky}
                alt="Tendaly App Core"
                className="relative z-10 h-72 w-72 rounded-full object-cover shadow-2xl"
              />
            </motion.div>

            {/* Feature Nodes */}
            {features.map((feature, index) => (
              <FeatureNode key={index} {...feature} />
            ))}
          </motion.div>

          {/* --- MOBILE: Stacked List Layout --- */}
          <div className="lg:hidden">
            <div className="flex justify-center mb-12">
               <img
                src={images.sticky}
                alt="Tendaly App Core"
                className="h-64 w-64 rounded-full object-cover shadow-xl"
              />
            </div>
            <div className="grid grid-cols-1 gap-12 sm:grid-cols-2">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="flex items-start gap-4">
                    <div className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg ${feature.iconBg}`}>
                      <Icon className={`text-2xl ${feature.iconColor}`} />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-800">{feature.title}</h3>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FeaturesPage;