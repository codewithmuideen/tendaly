// src/components/SiteFooter.jsx

import React from 'react';
import images from './../constants/images';

// --- Footer Sections Data ---
const footerSections = [
  {
    title: 'MacTech Nigeria',
    links: [
      { name: 'Features Overview', href: '#' },
      { name: 'CRM Comparisons', href: '#' },
      { name: 'iOS & Android', href: '#' },
      { name: 'Pricing', href: '#' },
      { name: 'Security', href: '#' },
      { name: 'Status', href: '#', status: '99.99%' },
      { name: 'Partner Program', href: '#' },
      { name: 'MacTech’s Free Plan', href: '#' },
    ],
  },
  {
    title: 'Company',
    links: [
      { name: 'About', href: '/about' },
      { name: 'Brand Resources', href: '#' },
      { name: 'Careers', href: '#' },
      { name: 'Customer Terms', href: '#' },
      { name: 'Privacy Policy', href: '#' },
      { name: 'GDPR', href: '#' },
      { name: 'Contact Us', href: '/contact' },
    ],
  },
  {
    title: 'Integrations',
    links: [
      { name: 'API for Developers', href: '#' },
      { name: 'QuickBooks', href: '#' },
      { name: 'Xero', href: '#' },
      { name: 'Zapier', href: '#' },
      { name: 'Microsoft 365', href: '#' },
      { name: 'Mailchimp', href: '#' },
      { name: 'Gmail', href: '#' },
      { name: 'Google Workspace', href: '#' },
      { name: 'All Integrations', href: '#' },
    ],
  },
  {
    title: 'Solutions',
    links: [
      { name: 'For Startups', href: '#' },
      { name: 'For Small Business', href: '#' },
      { name: 'For Mid-Sized Business', href: '#' },
      { name: 'Finance', href: '#' },
      { name: 'SaaS', href: '#' },
      { name: 'Photographers', href: '#' },
      { name: 'Customer Service', href: '#' },
      { name: 'Freelancers', href: '#' },
      { name: 'Nonprofits', href: '#' },
      { name: 'All Industries', href: '#' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { name: 'Support', href: '#' },
      { name: 'Blog', href: '#' },
      { name: 'Video Tutorials', href: '#' },
      { name: 'Customer Stories', href: '#' },
      { name: 'Sales Tracking Software', href: '#' },
      { name: 'MacTech CRM Software', href: '#' },
      { name: 'What is a CRM?', href: '#' },
      { name: 'CRM Glossary', href: '#' },
    ],
  },
];

// --- Icon Components ---
const ArrowUpIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-3 h-3">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
  </svg>
);

const ChevronDownIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
    <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 011.06 0L10 11.94l3.72-3.72a.75.75 0 111.06 1.06l-4.25 4.25a.75.75 0 01-1.06 0L5.22 9.28a.75.75 0 010-1.06z" clipRule="evenodd" />
  </svg>
);

// --- Main Footer Component ---
const SiteFooter = () => {
  return (
    <footer className="bg-gray-50 font-sans" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer</h2>
      <div className="border-t-4 border-indigo-600"></div>

      <div className="container mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-6">
          {/* Brand & Socials */}
          <div className="col-span-2 lg:col-span-1">
            <img src={images.logo} alt="MacTech Nigeria Logo" className="w-16 h-auto" />
            <div className="mt-6 space-y-2">
              <p className="text-sm text-gray-600">Find us:</p>
              <div className="flex flex-col space-y-2">
                <a href="#" className="text-indigo-600 hover:text-indigo-500 block">X</a>
                <a href="#" className="text-indigo-600 hover:text-indigo-500 block">Facebook</a>
                <a href="#" className="text-indigo-600 hover:text-indigo-500 block">YouTube</a>
                <a href="#" className="text-indigo-600 hover:text-indigo-500 block">LinkedIn</a>
              </div>
            </div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-sm font-semibold leading-6 text-gray-900">{section.title}</h3>
              <ul className="mt-6 space-y-4">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-sm leading-6 text-gray-600 hover:text-gray-900 flex items-center gap-x-2">
                      {link.name}
                      {link.status && (
                        <span className="inline-flex items-center gap-x-1 rounded-md bg-gray-200 px-2 py-1 text-xs font-medium text-gray-700">
                          <ArrowUpIcon />
                          {link.status}
                        </span>
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Footer Bottom */}
        <div className="mt-16 border-t border-gray-900/10 pt-8 sm:mt-20 lg:mt-24">
          <div className="flex flex-col-reverse items-center justify-between gap-6 md:flex-row">
            <button className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 -rotate-45">
                <path d="M3.105 3.105a2.5 2.5 0 013.536 0L10 6.536l3.359-3.43A2.5 2.5 0 0116.895 6.57l-3.431 3.36 3.43 3.36a2.5 2.5 0 01-3.465 3.608L10 13.464l-3.36 3.43a2.5 2.5 0 01-3.608-3.465l3.36-3.43-3.36-3.43a2.5 2.5 0 010-3.536z" />
              </svg>
              Naira & Nigeria (NGN)
              <ChevronDownIcon />
            </button>
            <p className="text-xs leading-5 text-gray-500 text-center md:text-right">
              MacTech Nigeria is a service of MacTech Nigeria Ltd, a company registered in Nigeria with company number 2457367. © {new Date().getFullYear()} MacTech Ltd. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
