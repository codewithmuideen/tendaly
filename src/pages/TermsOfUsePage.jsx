import React from 'react';
import { FiCheck } from 'react-icons/fi'; // A clean and modern checkmark icon

const userResponsibilities = [
  'Provide accurate and complete registration information.',
  'Maintain the confidentiality of your account credentials.',
  'Use the platform only for lawful, non-commercial purposes.',
  'Refrain from engaging in fraudulent, abusive, or inappropriate conduct.',
  'Comply with all applicable local, state, and federal laws.',
];

const TermsOfUsePage = () => {
  return (
    <div className="bg-slate-50 min-h-screen font-sans">
      <div className="mx-auto max-w-3xl px-6 py-20 sm:py-28">
        
        {/* --- Page Header --- */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            Terms of Use
          </h1>
          <div className="mt-4 h-1 w-20 bg-indigo-500 mx-auto rounded-full" />
        </div>

        {/* --- Content Sections --- */}
        <div className="space-y-12">
          
          {/* Section: About Tendaly */}
          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">About Tendaly</h2>
            <p className="text-lg leading-relaxed text-slate-700">
              Tendaly is a technology-enabled platform that connects care seekers with verified care providers offering services such as child care, senior care, adult care, pet care, and wellness support. Users may access Tendaly through our website or mobile application to search for, book, and manage care services in a secure and flexible environment.
            </p>
          </section>

          {/* Section: User Responsibilities */}
          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-6">User Responsibilities</h2>
            <p className="text-lg leading-relaxed text-slate-700 mb-6">
              By using Tendaly, you agree to:
            </p>
            <ul className="space-y-4">
              {userResponsibilities.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <FiCheck className="text-indigo-500 h-6 w-6 mt-1 flex-shrink-0" />
                  <span className="text-lg text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-lg leading-relaxed text-slate-700 bg-slate-100 p-4 rounded-lg border border-slate-200">
              Care providers are responsible for ensuring that all qualifications, certifications, and licenses presented are valid and up to date. Users must conduct their own due diligence before engaging with any care provider or care seeker.
            </p>
          </section>

          {/* Section: Disclaimers */}
          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Disclaimers</h2>
            <p className="text-lg leading-relaxed text-slate-700 mb-4">
              Tendaly is a facilitator and does not directly provide caregiving services. We do not guarantee the quality, legality, or suitability of any service offered by providers through the platform. Tendaly is not responsible for any interactions or agreements between users beyond the scope of our matching and scheduling system.
            </p>
            <p className="text-lg leading-relaxed text-slate-700 font-medium">
              All services are provided "as is" and "as available." We disclaim all warranties, express or implied, including warranties of merchantability, fitness for a particular purpose, and non-infringement.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
};

export default TermsOfUsePage;