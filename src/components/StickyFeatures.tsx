// src/components/StickyFeatures.tsx
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import images from '../constants/images';

const featuresData = [
  {
    title: 'Contact Management',
    heading: 'Build powerful customer relationships',
    description: 'Every client interaction is available in a single view, helping your team understand client status, plan engagements, and deliver top customer experiences.',
    image: images.featureContactManagement,
  },
  {
    title: 'Tasks & Calendar',
    heading: 'Your to-do list; controlled',
    description: "Start and end your working day knowing what tasks you've got to tackle. And if there's too much on, manually assign a task, or set up automations to delegate.",
    image: images.featureTasksCalendar,
  },
  {
    title: 'Sales Pipeline',
    heading: 'Close more deals, faster',
    description: 'Seize control of your sales pipeline, forecast more accurately, and understand deal status in one dashboard.',
    image: images.featureSalesPipeline,
  },
  {
    title: 'Project Management',
    heading: 'Deliver more, on time, within scope',
    description: "Onboard, manage, and deliver for your customers when they say 'yes'. Smash silos, stay on track, and collaborate easily with your team.",
    image: images.featureProjectManagement,
  },
  {
    title: 'Sales Analytics',
    heading: 'Game-changing insights at your fingertips',
    description: 'Detect deals close to closure and take action. Consult customers who need support. Project pipeline to analyze business growth - all in one dashboard.',
    image: images.featureSalesAnalytics,
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
