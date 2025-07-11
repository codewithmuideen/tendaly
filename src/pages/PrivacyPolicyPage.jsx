import React from 'react';
import { FiShield, FiCheckCircle, FiGlobe } from 'react-icons/fi'; // Importing relevant icons

// --- Data Arrays for Cleaner JSX ---
// (Extracted from your text for easier mapping and styling)
const dataCollectionCategories = [
  { title: "Personal Information", content: "name, email address, phone number, date of birth, profile photos" },
  { title: "Location Data", content: "to help match care seekers with nearby providers" },
  { title: "Service Data", content: "appointment history, communication logs, ratings and reviews" },
  { title: "Device & Usage Data", content: "browser type, device identifiers, IP address, and usage behavior" },
];

const dataCollectionPurposes = [
  "To provide, improve, and personalize the services offered through Tendaly",
  "To verify user identity and ensure platform safety",
  "To process payments and facilitate scheduling",
  "To communicate with users regarding updates, confirmations, and promotions",
];

const userRights = [
  "Access, correct, or delete their personal data",
  "Withdraw consent at any time",
  "File a complaint with a data protection authority if their rights are violated",
];

const gdprRights = [
  { title: "Right to Access", content: "You can request a copy of the personal data we hold about you." },
  { title: "Right to Rectification", content: "You may request that we correct inaccurate or incomplete data." },
  { title: "Right to Erasure (\"Right to be Forgotten\")", content: "You can request the deletion of your data where there is no legal basis for us to retain it." },
  { title: "Right to Restrict Processing", content: "You may limit how we use your data in certain cases." },
  { title: "Right to Data Portability", content: "You have the right to receive your data in a structured, machine-readable format." },
  { title: "Right to Object", content: "You can object to the processing of your personal data for direct marketing or profiling." },
  { title: "Right to Withdraw Consent", content: "Where processing is based on consent, you may withdraw it at any time." },
];

const ccpaRights = [
  { title: "Right to Know", content: "You may request information about the categories and specific pieces of personal data we collect, use, disclose, or sell." },
  { title: "Right to Delete", content: "You may request deletion of your personal information, subject to certain legal exceptions." },
  { title: "Right to Opt-Out", content: "You have the right to opt out of the sale or sharing of personal information (Tendaly does not sell personal data)." },
  { title: "Right to Non-Discrimination", content: "You will not be discriminated against for exercising your privacy rights." },
];

// --- Reusable UI Components for Consistency ---
const Section = ({ title, children }) => (
  <section className="mb-10">
    <h2 className="text-2xl font-bold text-slate-800 mb-4">{title}</h2>
    <div className="space-y-4 text-slate-700 leading-relaxed">{children}</div>
  </section>
);

const ListItem = ({ children }) => (
  <li className="flex items-start gap-3">
    <FiCheckCircle className="text-indigo-500 h-5 w-5 mt-1 flex-shrink-0" />
    <span>{children}</span>
  </li>
);


// --- Main Page Component ---
const PrivacyPolicyPage = () => {
  return (
    <div className="bg-white font-sans">
      <div className="mx-auto max-w-4xl px-6 py-16 sm:py-24">
        
        {/* --- Back to Home Link --- */}
        <div className="mb-12">
          <a href="/" className="text-indigo-600 hover:text-indigo-800 font-semibold inline-flex items-center">
            ← Back to Home
          </a>
        </div>

        {/* Page Header */}
        <div className="text-center mb-16">
          <p className="text-sm text-slate-500 mb-4">Last Updated: April 05, 2025</p>
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            Privacy Policy
          </h1>
        </div>

        {/* --- GENERAL PRIVACY POLICY --- */}
        <Section title="About Tendaly">
          <p>
            Tendaly is a digital care platform that leverages secure technology and AI features to match users with trusted care providers. We are committed to safeguarding your personal information and maintaining transparency in how your data is collected and used.
          </p>
        </Section>
        
        {/* <Section title="Data Collection Practices">
            <ul className="space-y-2">
                {dataCollectionCategories.map(item => (
                    <li key={item.title}><strong>{item.title}:</strong> {item.content}</li>
                ))}
            </ul>

            <h3 className="text-xl font-semibold text-slate-800 pt-4 pb-2">Why we collect data:</h3>
            <ul className="space-y-3">
                {dataCollectionPurposes.map(purpose => <ListItem key={purpose}>{purpose}</ListItem>)}
            </ul>
            <p className="!mt-6 bg-slate-100 p-4 rounded-lg">
                We do not sell or rent user data to third parties. Data may be shared with trusted partners or service providers who support platform functionality (e.g., payment processors, background check vendors), subject to strict confidentiality obligations.
            </p>
        </Section>
         */}
        {/* <Section title="User Rights">
            <p>Users have the right to:</p>
            <ul className="space-y-3">
                {userRights.map(right => <ListItem key={right}>{right}</ListItem>)}
            </ul>
        </Section>
        
        <Section title="Data Protection Measures">
            <div className="flex items-start gap-4">
                <FiShield className="h-10 w-10 text-indigo-500 flex-shrink-0" />
                <p>
                    We use encryption, access controls, and secure data storage practices to protect your information from unauthorized access, disclosure, alteration, or destruction.
                </p>
            </div>
        </Section> */}

        {/* --- VISUAL SEPARATOR FOR INTERNATIONAL SECTION --- */}
        <div className="relative my-16">
          <div className="absolute inset-0 flex items-center" aria-hidden="true">
            <div className="w-full border-t border-slate-300" />
          </div>
          <div className="relative flex justify-center">
            <span className="bg-white px-4 text-indigo-600">
              <FiGlobe className="h-8 w-8" />
            </span>
          </div>
        </div>

        {/* --- INTERNATIONAL PRIVACY POLICY --- */}
        <div className="text-center">
            <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                Privacy Policy for International Use
            </h1>
        </div>
        
        <Section title="International Data Protection and Compliance Disclaimer">
          <p>
            Tendaly is committed to protecting the personal data of all users, regardless of their location. We comply with relevant data protection and privacy laws, including but not limited to the General Data Protection Regulation (EU GDPR & UK GDPR) and the California Consumer Privacy Act (CCPA), as amended by the California Privacy Rights Act (CPRA).
          </p>
        </Section>

        <Section title="For Users in the European Union and United Kingdom (GDPR/UK GDPR)">
          <p>If you are located in the EU or UK, you have specific rights under the GDPR:</p>
          <div className="space-y-4 !mt-6">
            {gdprRights.map(right => (
              <div key={right.title}>
                <h4 className="font-semibold text-slate-800">{right.title}</h4>
                <p className="text-slate-600">{right.content}</p>
              </div>
            ))}
          </div>
          <p>
            Tendaly operates in the United States. If you are accessing our services from outside the U.S., you consent to the transfer of your data to the U.S. or other jurisdictions that may not have equivalent data protection laws.
          </p>
          <p>
            For GDPR-related inquiries or to exercise your rights, contact us at: <a href="mailto:privacy@tendaly.com" className="text-indigo-600 font-medium hover:underline">privacy@tendaly.com</a>
          </p>
        </Section>

        <Section title="For California Residents (CCPA/CPRA)">
            <p>If you are a California resident, you have the following rights under CCPA/CPRA:</p>
            <div className="space-y-4 !mt-6">
                {ccpaRights.map(right => (
                    <div key={right.title}>
                        <h4 className="font-semibold text-slate-800">{right.title}</h4>
                        <p className="text-slate-600">{right.content}</p>
                    </div>
                ))}
            </div>
            <p>
                You can exercise these rights by emailing us at: <a href="mailto:privacy@tendaly.com" className="text-indigo-600 font-medium hover:underline">privacy@tendaly.com</a> or by visiting: <a href="/requests" className="text-indigo-600 font-medium hover:underline">www.tendaly.com/privacy-requests</a>
            </p>
            <p>
                If you are an authorized agent making a request on behalf of a California resident, you must provide written permission or a legal power of attorney, along with identity verification.
            </p>
        </Section>

        <Section title="Children’s Privacy (COPPA & GDPR)">
            <p>
                Tendaly does not knowingly collect or process personal data from children under the age of 13 (or under 16 in jurisdictions that require parental consent for data processing). If we learn we have collected personal data from a child without verified parental consent, we will delete that information promptly.
            </p>
        </Section>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;