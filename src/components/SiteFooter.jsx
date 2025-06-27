import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

// NOTE: The 'images' import is a placeholder.
// You should have a file at '../constants/images.js' (or similar)
// that exports the logo and store badge images. For example:
/*
  // in constants/images.js
  import logo from './logo.svg';
  import playstore from './playstore.png';
  import appstore from './appstore.svg';

  export default {
    logo,
    playstore,
    appstore,
  };
*/
// As a fallback, I'm using placeholder URLs.
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
  const companyLinks = [
    { name: 'Become a caregiver', href: '/provider' },
    { name: 'About Us', href: '/about' },
    { name: 'Features', href: '/features' },
    { name: 'FAQs', href: '#faq' },
    { name: 'Contact Us', href: '/contact' },
  ];

  const moreLinks = [
    { name: 'For Home Care Agencies', href: '#' },
    { name: 'For Employers', href: '#' },
    { name: 'For CSRs/Donations', href: '#' },
  ];
  
  const socialLinks = [
    { name: 'Facebook', href: '#', icon: FaFacebookF },
    { name: 'Twitter', href: '#', icon: FaTwitter },
    { name: 'Instagram', href: '#', icon: FaInstagram },
  ];

  return (
    <footer className="bg-[#061422]" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-4 xl:gap-8">
          <div className="space-y-8">
            {/* Use image for logo */}
            <img className="h-12 w-auto" src={images.logo} alt="Greymate Care" />
            <p className="text-gray-300">
             See available caregivers near you in real time, filter by specialty, and lock in care within minutes.
            </p>
            {/* Use images for app store badges */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#" className="transition-opacity hover:opacity-80">
                <img className="h-12 w-auto" src={images.playstore} alt="Get it on Play Store" />
              </a>
              <a href="#" className="transition-opacity hover:opacity-80">
                <img className="h-12 w-auto" src={images.appstore} alt="Download on the App Store" />
              </a>
            </div>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 xl:col-span-3 xl:mt-0"  style={{fontFamily:'Montserrat'}} >
            <FooterLinkColumn title="Company" links={companyLinks} />
            <FooterLinkColumn title="More" links={moreLinks} style={{fontFamily:'Montserrat'}} />
            <div>
              <h3 className="font-serif text-lg font-bold text-white">Connect</h3>
              <div className="mt-6 flex space-x-4">
                {socialLinks.map((item) => (
                  <a key={item.name} href={item.href} className="rounded-full bg-[#3A3D40] p-2.5 text-gray-300 hover:text-white">
                    <span className="sr-only">{item.name}</span>
                    <item.icon className="h-5 w-5" aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 flex flex-col items-center justify-between border-t border-white/10 pt-8 sm:mt-20 sm:flex-row lg:mt-24">
          <div className="flex space-x-6 text-sm leading-6 text-gray-400">
            <a href="#" className="hover:text-white">Terms of Use</a>
            <a href="#" className="hover:text-white">Privacy Policy</a>
          </div>
          <p className="mt-4 text-sm leading-6 text-gray-400 sm:mt-0">©Copyright 2025, All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;