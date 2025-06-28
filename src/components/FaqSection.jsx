import React, { useState } from 'react';
import { HiPlus, HiX, HiArrowRight } from 'react-icons/hi';

// Reverted to Tendaly-specific FAQs
const faqData = [
  {
    question: 'What is Tendaly?',
    answer:
      'Tendaly is a care matching platform that connects caregivers with people who need care services such as senior care, adult care, childcare, pet care, and wellness support or special needs assistance.',
  },
  {
    question: 'How do I find a caregiver on Tendaly?',
    answer:
      'Simply sign up, specify the type of care you need, and browse available caregivers in your location. You can view profiles, read reviews, and book directly through the app.',
  },
  {
    question: 'Are the caregivers verified?',
    answer:
      'Yes. All caregivers on Tendaly undergo a thorough vetting process that includes background checks, identity verification, and experience validation.',
  },
  {
    question: 'Can I schedule care on short notice?',
    answer:
      'Yes. Tendaly allows you to book caregivers for immediate needs or schedule them in advance, depending on caregiver availability.',
  },
  {
    question: 'How does payment work?',
    answer:
      'All payments are handled securely through the Tendaly platform. You’ll see the caregiver’s hourly or session rate upfront and can pay directly through the app after the service is completed.',
  },
  {
    question: 'What if I have a complaint or issue with a caregiver?',
    answer:
      'Our support team is available to help resolve any issues. You can also report concerns directly through the app, and we will take appropriate action.',
  },
  {
    question: 'Is Tendaly available nationwide?',
    answer:
      'Tendaly is currently available in selected regions and rapidly expanding. You can check availability by entering your location in the app.',
  },
  {
    question: 'Can I cancel or reschedule a booking?',
    answer:
      'Yes, you can cancel or reschedule a booking within the app. Each caregiver may have specific cancellation policies, which will be visible before you confirm your booking.',
  },
  {
    question: 'What happens if I’m not satisfied with the service?',
    answer:
      "Tendaly prioritizes your satisfaction. If you're not happy with the service provided, please contact our support team immediately. We will investigate the issue and take appropriate action.",
  },
  {
    question: 'Is Tendaly available in my location?',
    answer:
      'Tendaly is expanding quickly. You can check availability by entering your ZIP code or city in the app or on our website.',
  },
  {
    question: 'Can caregivers use the platform to find jobs?',
    answer:
      'Absolutely. Tendaly is also a platform for caregivers looking to offer their services. After passing our vetting process, caregivers can list their availability, set their rates, and get matched with care seekers.',
  },
  {
    question: 'What types of care can I find on Tendaly?',
    answer:
      `Tendaly supports a wide range of care services, including:\n
● Senior Care\n
● Adult Care\n
● Child Care\n
● Special needs care\n
● Wellness support\n
● Post-surgery or recovery assistance\n
● Pet Care`,
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