// SiteFooter.jsx
import React, { useState } from "react";
import { SiGoogleplay } from "react-icons/si";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaApple,
  FaArrowUp,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import images from "../constants/images";

const FooterLinkColumn = ({ title, links, className = "" }) => (
  <div className={className}>
    <h3 className="text-lg font-bold text-white">{title}</h3>
    <ul className="mt-6 space-y-4">
      {links.map((link) => (
        <li key={link.name}>
          <a
            href={link.href}
            className="block whitespace-nowrap text-base text-gray-300 hover:text-white"
          >
            {link.name}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

const SiteFooter = () => {
  const [showModal, setShowModal] = useState(false);

  const companyLinks = [
    { name: "About Us", href: "/about" },
    { name: "FAQs", href: "/#faq" },
    { name: "Careers", href: "" },
    { name: "Press", href: "" },
    { name: "Blog", href: "" },
  ];

  const supportLinks = [
    { name: "Help Center", href: "/contact" },
    { name: "Safety", href: "" },
    { name: "Home Care Agencies", href: "/provider" },
    { name: "For Employers", href: "/provider" },
    { name: "Support a care mission", href: "/donation" },
  ];

  const legalLinks = [
    { name: "Terms of Service", href: "/terms-of-service" },
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Data Deletion", href: "/data-deletion" },
  ];

  const socialLinks = [
    {
      name: "Facebook",
      href: "https://www.facebook.com/share/1G1yJeWfFz/?mibextid=wwXIfr",
      icon: FaFacebookF,
    },
    { name: "Twitter", href: "https://x.com/tendalyinc", icon: FaXTwitter },
    {
      name: "Instagram",
      href: "https://www.instagram.com/tendalyinc?igsh=MjlhZm5zYm45Y3I5",
      icon: FaInstagram,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/company/tendaly/",
      icon: FaLinkedinIn,
    },
    { name: "YouTube", href: "https://youtube.com/@TendalyInc", icon: FaYoutube },
  ];

  return (
    <>
      {/* ────────────────── FOOTER ────────────────── */}
      <footer className="bg-[#061422] font-nunito" aria-labelledby="footer-heading">
        <h2 id="footer-heading" className="sr-only">
          Footer
        </h2>

        <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
          {/* TOP SECTION */}
          <div className="space-y-12 xl:grid xl:grid-cols-4 xl:gap-8 xl:space-y-0">
            {/* Logo & Description */}
            <div className="text-center xl:text-left space-y-8">
              <img
                className="mx-auto xl:mx-0 h-10 w-auto"
                src={images.logo3}
                alt="Tendaly"
              />
              <p className="text-gray-300">
                Join families who trust Tendaly to care for their loved ones at
                home. Sign up and get notified when the app is ready.
              </p>

              {/* Store Buttons (inline always) */}
              <div className="mt-6 flex flex-wrap gap-3 justify-center xl:justify-start">
                {/* Apple Store */}
                <button
                  onClick={() => setShowModal(true)}
                  className="flex items-center justify-center bg-black text-white px-4 py-2.5 rounded-lg hover:bg-gray-900 transition-all"
                >
                  <FaApple size={22} className="mr-2 shrink-0" />
                  <div className="text-left leading-tight">
                    <span className="block text-[11px]">Download on</span>
                    <span className="block text-sm font-semibold">Apple Store</span>
                  </div>
                </button>

                {/* Play Store */}
                <button
                  onClick={() => setShowModal(true)}
                  className="flex items-center justify-center bg-[#0b5aad] text-white px-4 py-2.5 rounded-lg hover:bg-[#094a91] transition-all"
                >
                  <SiGoogleplay size={18} className="mr-2 shrink-0" />
                  <div className="text-left leading-tight">
                    <span className="block text-[11px]">Download on</span>
                    <span className="block text-sm font-semibold">Play Store</span>
                  </div>
                </button>
              </div>
            </div>

            {/* Link Columns */}
            <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-8 md:grid-cols-3 xl:col-span-3 xl:mt-0">
              <FooterLinkColumn title="Company" links={companyLinks} />
              <FooterLinkColumn title="Support" links={supportLinks} />

              {/* Connect Column */}
              <div className="text-center sm:text-left">
                <h3 className="text-lg font-bold text-white">Connect</h3>
                <div className="mt-6 flex justify-center sm:justify-start items-center gap-3">
                  {socialLinks.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full bg-[#3A3D40] p-2.5 text-gray-300 hover:text-white transition-colors"
                    >
                      <span className="sr-only">{item.name}</span>
                      <item.icon className="h-5 w-5" aria-hidden="true" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* BOTTOM SECTION */}
          <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24 md:flex md:items-center md:justify-between">
            <div className="flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-2 md:order-1">
              {legalLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="whitespace-nowrap text-sm leading-6 text-gray-300 hover:text-white"
                >
                  {link.name}
                </a>
              ))}
            </div>
            <p className="mt-8 text-center md:text-left text-sm leading-6 text-gray-400 md:order-2 md:mt-0">
              © Copyright 2025, All Rights Reserved
            </p>
          </div>
        </div>
      </footer>

      {/* Back to Top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-[#0b5aad] text-white shadow-lg hover:bg-[#094a91] transition-all"
        aria-label="Scroll to top"
      >
        <FaArrowUp size={18} />
      </button>

      {/* Modal */}
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
              Our application is currently in development and will be launching soon. Be the
              first to know — join our waitlist now!
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
