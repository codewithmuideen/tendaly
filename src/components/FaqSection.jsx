import React, { useState } from 'react';
import { HiPlus, HiX, HiArrowRight } from 'react-icons/hi';

// Reverted to Tendaly-specific FAQs
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


// Reusable accordion item, styled to match the image
const FaqItem = ({ question, answer, isOpen, onClick }) => (
  <div className="bg-gray-100 rounded-lg">
    <button
      className="flex w-full items-center justify-between p-5 text-left"
      onClick={onClick}
      aria-expanded={isOpen}
    >
      <span className="font-medium text-gray-800">{question}</span>
      <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-gray-900 text-white">
        {isOpen ? <HiX className="h-5 w-5" /> : <HiPlus className="h-5 w-5" />}
      </span>
    </button>
    <div
      className={`overflow-hidden transition-all duration-300 ease-in-out ${
        isOpen ? 'max-h-screen' : 'max-h-0'
      }`}
    >
      <div className="px-5 pb-5">
        <p className="leading-relaxed text-gray-600">{answer}</p>
      </div>
    </div>
  </div>
);

// Main FAQ component
const FaqSection = () => {
  // Set to null so all items are closed by default
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) =>
    setOpenIndex(openIndex === index ? null : index);

  return (
    <section className="bg-white font-sans" id='faq'>
      <div className="mx-auto max-w-7xl rounded-lg border border-gray-200 px-6 py-16 sm:py-24 lg:px-8">
        <div className="grid grid-cols-1 gap-x-16 gap-y-12 lg:grid-cols-3">
          {/* Left Column: Title and CTA */}
          <div className="lg:col-span-1">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-base text-gray-600">
              Get answers to commonly asked questions
            </p>
            <a
              href="/contact"
              className="mt-6 inline-flex items-center gap-x-2 rounded-lg bg-gray-100 px-4 py-2.5 text-sm font-semibold text-gray-800 transition hover:bg-gray-200"
            >
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-900 text-white">
                <HiArrowRight className="h-4 w-4" />
              </span>
              <span>Contact Us</span>
            </a>
          </div>

          {/* Right Column: FAQ list */}
          <div className="space-y-4 lg:col-span-2">
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
    </section>
  );
};

export default FaqSection;