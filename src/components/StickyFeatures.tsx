// src/components/StickyFeatures.tsx
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import images from '../constants/images';

const featuresData = [
  {
    title: 'AI-powered Matching',
    // icon: <FaBrain className="text-[#0099ff] w-6 h-6" />,
    description: 'Smart technology helps connect families with the best-fit care providers.',
    image: images.sticky0,
  },
  {
    title: 'Secure Messaging',
    // icon: <FaShieldAlt className="text-[#0b5aad] w-6 h-6" />,
    description: 'Chat with care providers directly through a secure channel.',
    image: images.sticky10,
  },
  {
    title: 'Background-checked Providers',
    // icon: <FaUserCheck className="text-[#ff7b89] w-6 h-6" />,
    description: 'All care providers are vetted and background-checked for peace of mind.',
    image: images.sticky9,
  },
  {
    title: 'Booking & Payment',
    // icon: <FaCalendarCheck className="text-[#0099ff] w-6 h-6" />,
    description: 'Schedule care and handle payments securely from your dashboard.',
    image: images.sticky7,
  },
  {
    title: 'User Ratings & Reviews',
    // icon: <FaStar className="text-[#f2c94c] w-6 h-6" />,
    description: 'Make informed decisions with provider ratings and real customer feedback.',
    image: images.sticky8,
  },
  {
    title: 'Location-based Search',
    // icon: <FaMapMarkedAlt className="text-[#0b5aad] w-6 h-6" />,
    description: 'Find nearby caregivers using geolocation and search filters.',
    image: images.sticky0,
  },
];


const FeatureCard = ({ title, heading, description, index, total, progress }: any) => {
  const opacity = useTransform(
    progress,
    [index / total, (index + 0.5) / total, (index + 1) / total],
    [0, 1, 0]
  );

  return (
    <motion.div style={{ opacity }} className="flex flex-col p-4 sm:p-6">
      <p className="text-brand-blue font-semibold">{title}</p>
      <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-dark tracking-tight leading-tight">
        {heading}
      </h2>
      <p className="mt-4 sm:mt-6 text-base sm:text-lg text-brand-gray-text max-w-lg">
        {description}
      </p>
      <a
        href="#"
        className="mt-6 sm:mt-10 inline-block bg-black text-white font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:bg-gray-800 transition-colors duration-200 self-start"
      >
        Learn more
      </a>
    </motion.div>
  );
};

const StickyFeatures = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start start', 'end end'],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);

  return (
    <section ref={targetRef} className="relative min-h-[500vh] bg-white px-4 sm:px-6 md:px-8 lg:px-16">
      <div className="sticky top-0 min-h-screen flex items-center justify-center">
        <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          {/* LEFT: Feature Cards */}
          <div className="relative h-[300px] sm:h-[400px] md:h-[500px] flex items-center">
            {featuresData.map((feature, i) => (
              <div key={feature.title} className="absolute inset-0">
                <FeatureCard
                  {...feature}
                  index={i}
                  total={featuresData.length}
                  progress={scrollYProgress}
                />
              </div>
            ))}
          </div>

          {/* RIGHT: Feature Image */}
          <motion.div
            style={{ scale }}
            className="relative w-full h-[250px] sm:h-[350px] md:h-[500px] rounded-2xl bg-gray-100 p-4 sm:p-8 shadow-xl"
          >
            {featuresData.map((feature, i) => {
              const opacity = useTransform(
                scrollYProgress,
                [
                  (i - 0.5) / featuresData.length,
                  i / featuresData.length,
                  (i + 0.5) / featuresData.length,
                ],
                [0, 1, 0]
              );

              return (
                <motion.img
                  key={feature.title}
                  src={feature.image}
                  alt={feature.title}
                  style={{ opacity }}
                  className="absolute inset-0 w-full h-full object-cover rounded-lg"
                />
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StickyFeatures;
