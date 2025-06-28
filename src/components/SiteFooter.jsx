import React, { useState } from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import images from '../constants/images';

const FooterLinkColumn = ({ title, links }) => (
  <div>
    <h3 className="font-serif text-lg font-bold text-white">{title}</h3>
    <ul className="mt-6 space-y-4">
      {links.map((link) => (
        <li key={link.name}>
          <a href={link.href} className="text-base text-gray-300 hover:text-white">
            {link.name}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

const SiteFooter = () => {
  const [showModal, setShowModal] = useState(false); // ⬅️ Modal toggle

  const companyLinks = [
    { name: 'Become a caregiver', href: '/provider' },
    { name: 'About Us', href: '/about' },
    { name: 'Features', href: '/features' },
    { name: 'FAQs', href: '#faq' },
    { name: 'Contact Us', href: '/contact' },
  ];

  const moreLinks = [
    { name: 'For Home Care Agencies', href: '/provider' },
    { name: 'For Employers', href: '/provider' },
    { name: 'For CSRs/Donations', href: '/about' },
  ];

  const socialLinks = [
    { name: 'Facebook', href: '#', icon: FaFacebookF },
    { name: 'Twitter', href: '#', icon: FaTwitter },
    { name: 'Instagram', href: '#', icon: FaInstagram },
  ];

  return (
    <>
      <footer className="bg-[#061422]" aria-labelledby="footer-heading">
        <h2 id="footer-heading" className="sr-only">Footer</h2>
        <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
          <div className="xl:grid xl:grid-cols-4 xl:gap-8">
            {/* Logo and Description */}
            <div className="space-y-8">
              <img className="h-12 w-auto" src={images.logo} alt="Greymate Care" />
              <p className="text-gray-300">
                Join families who trust Tendaly to care for their loved ones at home.
            Sign up and get notified when the app is ready.
              </p>

              {/* App store buttons with modal trigger */}
              <div className="flex flex-row items-center gap-4 mt-4">
                <button onClick={() => setShowModal(true)} className="transition-opacity hover:opacity-80">
                  <img className="h-12 w-auto" src={images.playstore} alt="Get it on Play Store" />
                </button>
                <button onClick={() => setShowModal(true)} className="transition-opacity hover:opacity-80">
                  <img className="h-12 w-auto" src={images.appstore} alt="Download on the App Store" />
                </button>
              </div>
            </div>

            {/* Link Columns */}
            <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 xl:col-span-3 xl:mt-0" style={{ fontFamily: 'Montserrat' }}>
              <FooterLinkColumn title="Company" links={companyLinks} />
              <FooterLinkColumn title="More" links={moreLinks} />
              <div>
                <h3 className="font-serif text-lg font-bold text-white">Connect</h3>
                <div className="mt-6 flex space-x-4">
                  {socialLinks.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="rounded-full bg-[#3A3D40] p-2.5 text-gray-300 hover:text-white"
                    >
                      <span className="sr-only">{item.name}</span>
                      <item.icon className="h-5 w-5" aria-hidden="true" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="mt-16 flex flex-col items-center justify-between border-t border-white/10 pt-8 sm:mt-20 sm:flex-row lg:mt-24">
            <div className="flex space-x-6 text-sm leading-6 text-gray-400">
              <a href="#" className="hover:text-white">Terms of Use</a>
              <a href="#" className="hover:text-white">Privacy Policy</a>
            </div>
            <p className="mt-4 text-sm leading-6 text-gray-400 sm:mt-0">
              ©Copyright 2025, All Rights Reserved
            </p>
          </div>
        </div>
      </footer>

      {/* === Modal === */}
      {showModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
          onClick={() => setShowModal(false)}
        >
          <div
            className="bg-white max-w-sm w-full rounded-xl p-6 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-xl font-bold text-gray-800 mb-3">Coming Soon</h2>
            <p className="text-gray-600 mb-6">
              Our application is currently in development and will be launching soon.
              Be the first to know — join our waitlist now!
            </p>
            <div className="flex justify-end gap-3">
              <button
                className="px-4 py-2 rounded-md text-gray-700 hover:bg-gray-100"
                onClick={() => setShowModal(false)}
              >
                Close
              </button>
              <a
                href="/waitlist"
                className="bg-[#0099FF] text-white px-4 py-2 rounded-md hover:bg-[#0B5AAD]"
              >
                Join Waitlist
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SiteFooter;
