import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import images from '../constants/images'; 

const tabsData = [
  { title: 'Workflow Automation', image: images.workflow },
  { title: 'Contact Management', image: images.contact },
  { title: 'Sales Pipeline', image: images.sale },
  { title: 'Email Marketing', image: images.email },
  { title: 'Sales Analytics', image: images.sales },
  { title: 'Projects', image: images.project },
];

const TabbedFeatures = () => {
  const [activeTab, setActiveTab] = useState(1); // Default: Contact Management
 const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);


  // Auto scroll tab into view when clicked
  useEffect(() => {
    tabRefs.current[activeTab]?.scrollIntoView({
      behavior: 'smooth',
      inline: 'center',
      block: 'nearest',
    });
  }, [activeTab]);

  return (
    <section className="bg-brand-gray-light py-16 sm:py-20 lg:py-24">
      <div className="container mx-auto px-4">

        {/* Horizontal Scroll Tabs with Sticky Indicator */}
        <div className="flex justify-start sm:justify-center overflow-x-auto pb-4 -mx-4 px-4">
          <div className="flex flex-nowrap sm:flex-wrap gap-x-6 sm:gap-x-8 gap-y-4">
            {tabsData.map((tab, index) => (
              <button
                key={tab.title}
                ref={el => tabRefs.current[index] = el}
                onClick={() => setActiveTab(index)}
                className={`relative whitespace-nowrap px-1 py-2 text-base md:text-lg font-medium transition-colors
                  ${activeTab === index
                    ? 'text-brand-dark'
                    : 'text-gray-500 hover:text-brand-dark'
                  }`}
              >
                {tab.title}
                {activeTab === index && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-blue"
                    layoutId="underline"
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Image Display */}
        <div className="relative mt-12 h-[300px] md:h-[450px] lg:h-[550px] overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.img
              key={activeTab}
              src={tabsData[activeTab].image}
              alt={tabsData[activeTab].title}
              className="absolute w-full h-full object-contain rounded-lg shadow-2xl"
              initial={{ opacity: 0.6, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0.6, x: -50 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            />
          </AnimatePresence>
        </div>

        {/* Mobile View Dot Indicator */}
        <div className="flex justify-center mt-6 gap-2 sm:hidden">
          {tabsData.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all
                ${activeTab === index ? 'bg-brand-blue scale-125' : 'bg-gray-400'}
              `}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TabbedFeatures;
