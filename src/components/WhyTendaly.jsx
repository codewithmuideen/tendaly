import React from 'react';

// Tendaly-focused highlights
const features = [
  {
    title: 'AI-powered caregiver matching',
    description:
      'Our matching engine learns your preferences and instantly pairs care seekers with the most suitable, vetted providers.',
  },
  {
    title: 'Trusted, background-checked professionals',
    description:
      'Every caregiver on Tendaly passes rigorous background screening and credential verification before they appear in search results.',
  },
  {
    title: 'Secure messaging & seamless booking',
    description:
      'Chat, confirm details, and pay—all inside the app—without exposing personal contact info or juggling multiple tools.',
  },
  {
    title: 'Flexible schedules & emergency backup care',
    description:
      'Book recurring visits, one-off sessions, or last-minute help when life throws a curveball. Tendaly adjusts to your timetable.',
  },
  {
    title: 'Transparent ratings and reviews',
    description:
      'Real feedback from families and caregivers helps you make informed decisions with confidence.',
  },
  {
    title: 'Location-based provider search',
    description:
      'See available caregivers near you in real time, filter by specialty, and lock in care within minutes.',
  },
];

// Reusable feature block
const FeatureItem = ({ title, description }) => (
  <div>
    <h3 className="text-2xl font-semibold text-gray-900 mb-3">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{description}</p>
  </div>
);

const WhyTendaly = () => {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Main Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-16">
          Why Tendaly
        </h2>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 md:gap-y-16 gap-x-12 lg:gap-x-20">
          {features.map((feature) => (
            <FeatureItem
              key={feature.title}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyTendaly;
