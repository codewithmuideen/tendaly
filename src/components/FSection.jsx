import React from 'react';
import { BsRobot, BsCalendar2Check } from 'react-icons/bs';
import { 
  FaUserCheck, 
  FaStar, 
  FaBriefcaseMedical, 
  FaMapMarkerAlt, 
  FaShieldAlt 
} from 'react-icons/fa';

const featuresList = [
  { 
    icon: <BsRobot className="text-blue-600 text-2xl" />, 
    title: 'AI Matching', 
    description: 'AI-powered matching', 
    rotation: '-6deg' 
  },
  { 
    icon: <FaShieldAlt className="text-blue-600 text-2xl" />, 
    title: '100% Secure', 
    description: 'Secure messaging', 
    rotation: '7deg' 
  },
  { 
    icon: <FaUserCheck className="text-blue-600 text-2xl" />, 
    title: 'Verified', 
    description: 'Background-checked providers', 
    rotation: '5deg' 
  },
  { 
    icon: <BsCalendar2Check className="text-blue-600 text-2xl" />, 
    title: 'Easy Booking', 
    description: 'Booking & payment', 
    rotation: '-6deg' 
  },
  { 
    icon: <FaStar className="text-blue-600 text-2xl" />, 
    title: 'Top Rated', 
    description: 'User ratings and reviews', 
    rotation: '10deg' 
  },
  { 
    icon: <FaBriefcaseMedical className="text-blue-600 text-2xl" />, 
    title: 'Backup Care', 
    description: 'Emergency/backup care option', 
    rotation: '-8deg' 
  },
  { 
    icon: <FaMapMarkerAlt className="text-blue-600 text-2xl" />, 
    title: 'Nearby', 
    description: 'Location-based provider search', 
    rotation: '12deg' 
  },
];

const FeatureCard = ({ icon, title, description, rotation }) => {
  return (
    <div
      className="bg-white p-4 rounded-lg shadow-lg transition-all duration-300 hover:rotate-0 hover:scale-105"
      style={{ transform: `rotate(${rotation})` }}
    >
      <div className="flex items-center gap-4">
        <div>{icon}</div>
        <div>
          <h3 className="font-bold text-gray-900">{title}</h3>
          <p className="text-sm text-blue-600">{description}</p>
        </div>
      </div>
    </div>
  );
};

const FSection = () => {
  return (
    <section
      className="w-full bg-gradient-to-b from-white to-blue-50 py-16 px-4"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
          Our Key Features
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
      </div>
    </section>
  );
};

export default FSection;