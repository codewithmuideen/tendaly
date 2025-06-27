import React from 'react';
import { motion } from 'framer-motion';
import { FiDownload, FiSliders, FiSettings, FiFolder, FiUsers } from 'react-icons/fi';

// --- Data for Both Paths ---

// Path 1: For those seeking care
const clientSteps = [
  {
    icon: FiDownload,
    title: 'Download the app',
    description: (
      <>
        Download our app from the{' '}
        <a href="#" className="font-semibold text-blue-600 hover:text-blue-700">
          Google Playstore
        </a>{' '}
        or{' '}
        <a href="#" className="font-semibold text-blue-600 hover:text-blue-700">
          App store
        </a>
      </>
    ),
  },
  {
    icon: FiSliders,
    title: 'Select your services',
    description: 'Choose from a range of services and we’ll take it from there.',
  },
  {
    icon: FiFolder,
    title: 'Develop a care plan',
    description: 'Our tech develops a plan and matches you to the perfect caregiver.',
  },
  {
    icon: FiUsers,
    title: 'Your caregiver arrives',
    description: 'Sit back and relax as your verified caregiver shows up at your door.',
  },
];

// Path 2: For those providing care
const providerSteps = [
  {
    number: '01',
    title: 'Create Your Profile',
    description: 'Sign up in minutes. Detail your skills, experience, and services you offer.',
  },
  {
    number: '02',
    title: 'Get Verified',
    description: 'Complete our background check to build trust and become a certified provider.',
  },
  {
    number: '03',
    title: 'Set Your Terms',
    description: 'You are in control. Set your availability, service area, and competitive rates.',
  },
  {
    number: '04',
    title: 'Accept Bookings & Earn',
    description: 'Receive booking requests and get paid securely every week through the app.',
  },
];


// --- Reusable Animated Step Components ---

const ClientStepItem = ({ icon: Icon, title, description }) => (
  <motion.div
    variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
  >
    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-cyan-100/60">
      <Icon className="h-7 w-7 text-indigo-900" />
    </div>
    <h3 className="mt-5 text-lg font-bold text-indigo-900">{title}</h3>
    <p className="mt-1 text-sm text-slate-600">{description}</p>
  </motion.div>
);

const ProviderStepItem = ({ number, title, description, isLast }) => (
  <motion.li
    variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}
    className="relative pl-14 pb-8"
  >
    {!isLast && <div className="absolute left-4 top-4 h-full w-0.5 bg-slate-200" />}
    <div className="absolute left-0 top-0 flex h-9 w-9 items-center justify-center rounded-full bg-white ring-8 ring-indigo-50">
      <span className="font-bold text-indigo-600">{number}</span>
    </div>
    <h3 className="text-lg font-bold text-indigo-900">{title}</h3>
    <p className="mt-1 text-sm text-slate-600">{description}</p>
  </motion.li>
);


// --- Main Combined "How It Works" Component ---

const HowItWorksCombined = () => {
  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <section className="bg-white font-sans py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-4xl font-bold tracking-tight text-indigo-900 sm:text-5xl">
            Choose Your Path
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            Whether you need support for a loved one or want to offer your skills, here’s how to get started with Tendaly.
          </p>
        </div>

        {/* Two-Column Layout */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
          className="mx-auto mt-16 grid max-w-md grid-cols-1 gap-12 lg:mt-20 lg:max-w-none lg:grid-cols-2 lg:gap-8"
        >
          {/* Left Card: Seeking Care */}
          <motion.div
            variants={cardVariants}
            className="rounded-2xl bg-slate-50 p-8 sm:p-10"
          >
            <h3 className="text-2xl font-bold text-indigo-900">Seeking Care</h3>
            <p className="mt-2 text-slate-600">For families and individuals.</p>
            <motion.div 
              variants={containerVariants}
              className="mt-10 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2"
            >
              {clientSteps.map((step, index) => (
                <ClientStepItem key={index} {...step} />
              ))}
            </motion.div>
          </motion.div>

          {/* Right Card: Providing Care */}
          <motion.div
            variants={cardVariants}
            className="rounded-2xl bg-indigo-50 p-8 sm:p-10"
          >
            <h3 className="text-2xl font-bold text-indigo-900">Providing Care</h3>
            <p className="mt-2 text-slate-600">For professional caregivers.</p>
            <motion.ol
              variants={containerVariants}
              className="mt-10"
            >
              {providerSteps.map((step, index) => (
                <ProviderStepItem
                  key={index}
                  {...step}
                  isLast={index === providerSteps.length - 1}
                />
              ))}
            </motion.ol>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorksCombined;