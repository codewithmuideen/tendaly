import React, { useState } from "react";
import images from "../constants/images";
import {
  Bars3BottomRightIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const Links = [
    { name: "About", link: "/about" },
    { name: "Features", link: "/features" },
    { name: "How It Works", link: "/how-it-works" },
    { name: "Join", link: "/provider" },
    { name: "Testimonials", link: "/testimonials" },
    { name: "Contact", link: "/contact" },
  ];

  const [open, setOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      {/* Header */}
      <header className="sticky top-10 md:top-8 z-30 bg-white/80 backdrop-blur-md">
        <div className="relative flex items-center justify-between py-4 md:px-10 px-7">
          {/* Logo */}
          <a href="/" className="flex items-center gap-1 font-bold text-2xl mt-5 md:mt-0">
            <img src={images.logo} alt="Tendaly Logo" className="h-12" />
          </a>

          {/* Hamburger Icon */}
          <button
            onClick={() => setOpen(!open)}
            className="absolute right-6 top-10 md:top-6 md:hidden w-9 h-9 z-40 flex items-center justify-center focus:outline-none focus:ring-0"
            aria-label={open ? "Close menu" : "Open menu"}
            style={{ outline: "none", boxShadow: "none", border: "none" }}
          >
            {open ? (
              <XMarkIcon className="w-full h-full text-gray-800 transition duration-300" />
            ) : (
              <Bars3BottomRightIcon className="w-full h-full text-gray-800 transition duration-300" />
            )}
          </button>

          {/* Nav Links */}
          <ul
            className={`
              md:flex md:items-center
              absolute md:static left-0 w-full md:w-auto
              bg-white md:bg-transparent
              px-9 pt-6 pb-6 md:pt-0 md:pb-0 md:px-0
              transition-all duration-300 ease-in-out
              md:translate-y-0 md:opacity-100 md:pointer-events-auto
              ${open ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0 pointer-events-none"}
            `}
            style={{ top: "82px" }}
          >
            {Links.map((link) => (
              <li key={link.name} className="md:ml-8 my-7 md:my-0 font-semibold">
                <a
                  href={link.link}
                  className="text-gray-800 hover:text-[#0099ff] duration-300 focus:outline-none"
                  onClick={() => setOpen(false)}
                  style={{ border: "none", outline: "none", boxShadow: "none" }}
                >
                  {link.name}
                </a>
              </li>
            ))}

            {/* Get Started Button */}
            <button
              style={{ fontFamily: "Nunito" }}
              className="flex items-center gap-3 bg-[#0099ff] text-white text-lg font-bold px-6 py-3 rounded-full duration-300 hover:bg-[#007acc] transform hover:scale-105 md:ml-8 focus:outline-none"
              onClick={() => setShowModal(true)}
            >
              Get Started
            </button>
          </ul>
        </div>
      </header>

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
            <h2 className="text-xl font-bold text-gray-800 mb-3" style={{ fontFamily: "Nunito" }}>
              Coming Soon
            </h2>
            <p className="text-gray-600 mb-6" style={{ fontFamily: "Nunito" }}>
              Our application is currently in development and will be launching soon.
              Be the first to know — join our waitlist now!
            </p>
            <div className="flex justify-end gap-3">
              <button
                style={{ fontFamily: "Nunito" }}
                className="px-4 py-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none"
                onClick={() => setShowModal(false)}
              >
                Close
              </button>
              <button
                style={{ fontFamily: "Nunito" }}
                className="bg-[#0099ff] text-white px-4 py-2 rounded-md hover:bg-[#007acc] focus:outline-none"
                onClick={() => {
                  setShowModal(false);
                  navigate("/waitlist");
                }}
              >
                Join Waitlist
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
