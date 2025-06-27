// src/pages/AboutTendalyPage.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
// 👇 CORRECTED: Icons have been updated to FaPlus and FaMinus
import { FaUsers, FaBullseye, FaEye, FaPlus, FaMinus } from 'react-icons/fa';

// --- Reusable Accordion Item Component ---
const AccordionItem = ({ data, isOpen, onClick }) => {
  const { icon, title, text } = data;

  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <motion.header
        initial={false}
        onClick={onClick}
        className="flex justify-between items-center p-6 cursor-pointer hover:bg-blue-50/50 transition-colors"
      >
        <div className="flex items-center gap-4">
          <span className={`text-2xl ${isOpen ? 'text-[#0099ff]' : 'text-[#0b5aad]'}`}>{icon}</span>
          <h3 className={`text-xl font-semibold ${isOpen ? 'text-[#0099ff]' : 'text-slate-800'}`}>
            {title}
          </h3>
        </div>
        
        {/* 👇 MODIFIED: Plus/Minus Icon with Animation */}
        <div className="relative w-6 h-6 flex items-center justify-center">
          <AnimatePresence initial={false} mode="wait">
            <motion.span
              key={isOpen ? 'minus' : 'plus'} // The key is crucial for AnimatePresence to detect the change
              initial={{ opacity: 0, scale: 0.5, rotate: -90 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, scale: 0.5, rotate: 90 }}
              transition={{ duration: 0.2 }}
              className="absolute"
            >
              {isOpen ? (
                <FaMinus className="text-lg text-[#0099ff]" />
              ) : (
                <FaPlus className="text-lg text-slate-500" />
              )}
            </motion.span>
          </AnimatePresence>
        </div>
      </motion.header>

      {/* AnimatePresence allows the component to animate out when removed from the tree */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.section
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: 'auto' },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6">
              <p className="text-slate-600 leading-relaxed">{text}</p>
            </div>
          </motion.section>
        )}
      </AnimatePresence>
    </div>
  );
};


// --- The Main About Page Component ---
const AboutTendalyPage = () => {
  // We'll have the first item open by default (index 0)
  const [openIndex, setOpenIndex] = useState(0);

  const contentData = [
    {
      icon: <FaUsers />,
      title: 'Who We Are',
      text: `Tendaly is a modern platform designed to transform the caregiving and personal services industry by seamlessly connecting clients, from individuals with disabilities to families seeking home care services, with trusted, compassionate professionals. Built with a strong focus on user experience, Tendaly simplifies scheduling, communication, and service delivery to ensure a smooth, stress-free experience for both clients and providers. Whether it’s in-home care or wellness services, Tendaly combines warmth, reliability, and innovation to support meaningful, human-centered.`,
    },
    {
      icon: <FaBullseye />,
      title: 'Our Mission',
      text: 'To empower every caregiver with intuitive technology and a supportive community, transforming the care experience by simplifying complexities and fostering deeper connections between providers, clients, and their families.',
    },
    {
      icon: <FaEye />,
      title: 'Our Vision',
      text: 'To create a world where providing and receiving care is a seamless, transparent, and collaborative experience, supported by a global standard of technology that champions empathy, efficiency, and human connection.',
    },
  ];
  
  const handleItemClick = (index) => {
    // If the clicked item is already open, close it by setting index to null. Otherwise, open the new one.
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-[#f2f4f7] py-12 sm:py-20 px-4 flex flex-col items-center">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-[#0b5aad]">About Tendaly</h1>
        <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
          The purpose, passion, and people behind our mission to revolutionize the care industry.
        </p>
      </div>
      
      <div className="w-full max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
        {contentData.map((item, index) => (
          <AccordionItem
            key={index}
            data={item}
            isOpen={openIndex === index}
            onClick={() => handleItemClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default AboutTendalyPage;