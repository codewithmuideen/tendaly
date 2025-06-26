// src/components/FeaturesSection.jsx
import React from 'react';
import { BsRobot, BsCalendar2Check } from 'react-icons/bs';
import {
  FaUserCheck,
  FaStar,
  FaBriefcaseMedical,
  FaMapMarkerAlt,
  FaShieldAlt,
} from 'react-icons/fa';

const featuresList = [
  {
    icon: <BsRobot />,
    title: 'AI Matching',
    description: 'AI-powered matching',
    rotation: '-6deg',
  },
  {
    icon: <FaShieldAlt />,
    title: '100% Secure',
    description: 'Secure messaging',
    rotation: '7deg',
  },
  {
    icon: <FaUserCheck />,
    title: 'Verified',
    description: 'Background-checked providers',
    rotation: '5deg',
  },
  {
    icon: <BsCalendar2Check />,
    title: 'Easy Booking',
    description: 'Booking & payment',
    rotation: '-6deg',
  },
  {
    icon: <FaStar />,
    title: 'Top Rated',
    description: 'User ratings and reviews',
    rotation: '10deg',
  },
  {
    icon: <FaBriefcaseMedical />,
    title: 'Backup Care',
    description: 'Emergency/backup care option',
    rotation: '-8deg',
  },
  {
    icon: <FaMapMarkerAlt />,
    title: 'Nearby',
    description: 'Location-based provider search',
    rotation: '12deg',
  },
];

const FeatureCard = ({ icon, title, description, rotation }) => {
  return (
    <div
      className="relative bg-white p-4 pr-8 rounded-lg shadow-xl w-full sm:w-[85%] md:w-full lg:w-64 transition-transform duration-300 hover:rotate-0 hover:scale-105"
      style={{ transform: `rotate(${rotation})` }}
    >
      <div className="flex items-center gap-4">
        <div className="text-blue-600 text-3xl">{icon}</div>
        <div>
          <h3 className="font-bold text-lg text-gray-900">{title}</h3>
          <p className="text-sm text-blue-800">{description}</p>
        </div>
      </div>
    </div>
  );
};

const FeaturesSection = () => {
  return (
    <section className="bg-white w-full py-16 sm:py-24">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-20">
          Our Key Features
        </h2>

        {/* Mobile and Tablet */}
        <div className="grid grid-cols-1 gap-y-10 md:hidden w-full place-items-center">
          {featuresList.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              rotation={feature.rotation}
            />
          ))}
        </div>

        {/* Desktop */}
        <div className="hidden md:block">
          <div className="flex justify-center gap-8 mb-12 flex-wrap">
            {featuresList.slice(0, 4).map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                rotation={feature.rotation}
              />
            ))}
          </div>
          <div className="flex justify-center gap-8 flex-wrap">
            {featuresList.slice(4).map((feature, index) => (
              <FeatureCard
                key={index + 4}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                rotation={feature.rotation}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
