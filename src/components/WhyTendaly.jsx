import React from 'react';

// --- Icon SVGs (No changes needed) ---

const AiIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9.5 13a2.5 2.5 0 0 1-5 0 2.5 2.5 0 0 1 5 0Z" /><path d="M19.5 13a2.5 2.5 0 0 1-5 0 2.5 2.5 0 0 1 5 0Z" /><path d="M12 2a10 10 0 0 0-10 10c0 4.42 2.87 8.17 6.84 9.5" /><path d="M14.5 2.25A10 10 0 0 1 22 12c0 1.57-.46 3.03-1.25 4.25" /><path d="m14.5 10.5 1-1" /><path d="m9.5 10.5-1-1" /></svg>
);
const ShieldIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><path d="m9 12 2 2 4-4"></path></svg>
);
const SecureMessageIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h10" /><rect x="16" y="5" width="6" height="8" rx="2" /></svg>
);
const ClockIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" /><path d="M12 6v6l4 2" /></svg>
);
const StarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
);
const MapPinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
);


const features = [
  { icon: <AiIcon />, title: 'AI-powered caregiver matching', description: 'Our matching engine learns your preferences and instantly pairs care seekers with the most suitable, vetted providers.' },
  { icon: <ShieldIcon />, title: 'Trusted, background-checked professionals', description: 'Every caregiver on Tendaly passes rigorous background screening and credential verification before they appear in search results.' },
  { icon: <SecureMessageIcon />, title: 'Secure messaging & seamless booking', description: 'Chat, confirm details, and pay—all inside the app—without exposing personal contact info or juggling multiple tools.' },
  { icon: <ClockIcon />, title: 'Flexible schedules & emergency backup care', description: 'Book recurring visits, one-off sessions, or last-minute help when life throws a curveball. Tendaly adjusts to your timetable.' },
  { icon: <StarIcon />, title: 'Transparent ratings and reviews', description: 'Real feedback from families and caregivers helps you make informed decisions with confidence.' },
  { icon: <MapPinIcon />, title: 'Location-based provider search', description: 'See available caregivers near you in real time, filter by specialty, and lock in care within minutes.' },
];

// Reusable feature block with the new brand colors
const FeatureItem = ({ icon, title, description }) => (
  <div className="flex items-start gap-4">
    {/* Icon styling now uses Sky Blue */}
    <div className="flex-shrink-0 w-14 h-14 bg-sky-blue/10 text-[#0099ff] rounded-xl flex items-center justify-center">
      {icon}
    </div>
    <div>
      {/* Feature title now uses Rich Blue for strong emphasis */}
      <h3 className="text-xl font-semibold text-[#0099ff] mb-2">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  </div>
);

const WhyTendaly = () => {
  return (
    // Section background updated to Cloud Gray
    <section className="bg-cloud-gray py-20 lg:py-28">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Main Title updated to Sky Blue */}
        <h2 className="text-4xl md:text-5xl font-bold text-[#0099ff] mb-16 text-center">
          Why Tendaly
        </h2>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 md:gap-y-16 gap-x-12 lg:gap-x-20">
          {features.map((feature) => (
            <FeatureItem
              key={feature.title}
              icon={feature.icon}
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