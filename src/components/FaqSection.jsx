// src/components/FaqSection.jsx
import React, { useState } from 'react';

// Tendaly-specific FAQs
const faqData = [
  {
    question: 'What is Tendaly?',
    answer:
      'Tendaly is a marketplace and mobile app that connects care seekers with thoroughly vetted, background-checked caregivers for in-home help, companionship, and specialized support.',
  },
  {
    question: 'How does the AI-powered matching work?',
    answer:
      'Our machine-learning engine analyses your care needs—skills required, schedule, location, language, budget—and instantly ranks the best-fit caregivers. You’ll always see the most relevant profiles first.',
  },
  {
    question: 'Are caregivers on Tendaly screened?',
    answer:
      'Yes. Every provider completes identity verification, background checks, and credential validation before appearing in search results. We also review references and require up-to-date certifications for specialized care.',
  },
  {
    question: 'How do bookings and payments happen?',
    answer:
      'Once you find the right caregiver, you can chat securely in-app, confirm hours, and pay by card or wallet. Funds are held in escrow and released to the caregiver only after the visit is completed.',
  },
  {
    question: 'Can I get emergency or backup care?',
    answer:
      'Absolutely. Toggle the “Urgent Care” filter or tap the red lightning icon to see providers who have enabled instant bookings for last-minute needs—often within two hours.',
  },
  {
    question: 'Is Tendaly free to join?',
    answer:
      'Creating an account is free. Caregivers set their hourly rates; Tendaly adds a small service fee (displayed transparently at checkout) that covers payment processing and support.',
  },
  {
    question: 'Which devices support Tendaly?',
    answer:
      'Our iOS and Android apps are in open beta (links on the home page). A full PWA works across modern browsers, so you can also manage bookings on desktop.',
  },
];

// Reusable accordion item
const FaqItem = ({ question, answer, isOpen, onClick }) => (
  <div className="border-b border-gray-200 py-4">
    <button
      className="flex w-full items-center justify-between text-left focus:outline-none focus-visible:ring focus-visible:ring-indigo-500 focus-visible:ring-opacity-75 rounded"
      onClick={onClick}
      aria-expanded={isOpen}
    >
      <span className="text-lg font-medium text-gray-800">{question}</span>
      <span className="text-2xl text-indigo-500 transform transition-transform duration-300">
        {isOpen ? '−' : '+'}
      </span>
    </button>
    <div
      className={`overflow-hidden transition-all duration-500 ease-in-out ${
        isOpen ? 'max-h-96 mt-4' : 'max-h-0'
      }`}
    >
      <p className="leading-relaxed text-gray-600">{answer}</p>
    </div>
  </div>
);

// Main FAQ component
const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) =>
    setOpenIndex(openIndex === index ? null : index);

  return (
    <section className="bg-white font-sans">
      <div className="container mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
        <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-3">
          {/* Title */}
          <div className="lg:col-span-1">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Frequently Asked Questions
            </h2>
          </div>

          {/* FAQ list */}
          <div className="lg:col-span-2">
            <div className="space-y-1">
              {faqData.map((faq, index) => (
                <FaqItem
                  key={index}
                  isOpen={openIndex === index}
                  onClick={() => handleToggle(index)}
                  question={faq.question}
                  answer={faq.answer}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
