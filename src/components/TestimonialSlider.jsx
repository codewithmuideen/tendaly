// src/components/TestimonialSlider.tsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import { FaHandsHelping, FaStar, FaStarHalfAlt } from 'react-icons/fa';
import { FiExternalLink, FiArrowLeft, FiArrowRight } from 'react-icons/fi';

// ★ Tendaly testimonials
const testimonialsData = [
  {
    title: 'Matched the perfect caregiver in minutes.',
    quote:
      '"Tendaly paired my mum with a certified nurse less than ten minutes after I posted our request. Total peace of mind!"',
    author: 'Amaka O.',
    role: 'Care Seeker, United States',
  },
  {
    title: 'My schedule finally makes sense.',
    quote:
      '"I pick shifts that fit around my classes and get paid right after each visit. Tendaly handles all the admin so I can focus on care."',
    author: 'Musa K.',
    role: 'Tendaly Caregiver',
  },
  {
    title: 'Backup care saved the day.',
    quote:
      '"Our nanny fell ill hours before a big client pitch. The Tendaly emergency toggle had a vetted caregiver at our door by 7 a.m."',
    author: 'Deborah C.',
    role: 'Working Parent',
  },
];

const TestimonialSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () =>
    setActiveIndex((i) => (i + 1) % testimonialsData.length);

  const handlePrev = () =>
    setActiveIndex((i) => (i - 1 + testimonialsData.length) % testimonialsData.length);

  return (
    <section className="bg-brand-gray-light py-24 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-12 rounded-2xl border border-gray-100 bg-white p-8 shadow-lg lg:grid-cols-2 lg:p-12">
          {/* LEFT COLUMN */}
          <div className="flex flex-col">
            <div className="flex items-center gap-4">
              <FaHandsHelping className="text-indigo-500 text-2xl" />
              <div className="flex items-center gap-1 text-indigo-500">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStarHalfAlt />
              </div>
              <p className="text-sm text-brand-gray-text">
                4.8 rating <span className="mx-1 text-gray-300">|</span> 450+ reviews
              </p>
            </div>

            <h2 className="mt-6 text-4xl font-bold tracking-tight text-brand-dark lg:text-5xl">
              Families love Tendaly.
              <br />
              <span className="text-brand-gray-text">Their words; not ours.</span>
            </h2>

            <a
              href="#"
              className="mt-8 inline-flex items-center gap-2 self-start rounded-full bg-gray-100 px-6 py-3 font-semibold text-brand-dark transition-colors hover:bg-gray-200"
            >
              <span>Read more reviews</span>
              <FiExternalLink />
            </a>
          </div>

          {/* RIGHT COLUMN */}
          <div className="relative flex min-h-[300px] flex-col justify-between border-t border-gray-200 pt-8 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
              >
                <h3 className="text-xl font-semibold text-brand-dark">
                  {testimonialsData[activeIndex].title}
                </h3>
                <p className="mt-4 leading-relaxed text-brand-gray-text">
                  {testimonialsData[activeIndex].quote}
                </p>
                <p className="mt-6 font-semibold text-brand-dark">
                  {testimonialsData[activeIndex].author}
                </p>
                <p className="text-sm text-brand-gray-text">
                  {testimonialsData[activeIndex].role}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="mt-8 flex items-center gap-3 self-end">
              <button
                onClick={handlePrev}
                aria-label="Previous testimonial"
                className="rounded-full bg-gray-200 p-3 text-brand-dark transition-colors hover:bg-gray-300"
              >
                <FiArrowLeft />
              </button>
              <button
                onClick={handleNext}
                aria-label="Next testimonial"
                className="rounded-full bg-gray-200 p-3 text-brand-dark transition-colors hover:bg-gray-300"
              >
                <FiArrowRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;
