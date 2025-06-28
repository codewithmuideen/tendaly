import React, { useState } from "react";
import images from "../constants/images";
import {
  Bars3BottomRightIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import { AiOutlineArrowRight } from "react-icons/ai";
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
      {/* ================= Header ================= */}
      <header className="sticky top-10 md:top-8 z-30 border-b border-gray-200 backdrop-blur-md bg-white/80">
        <div className="relative flex items-center justify-between py-4 md:px-10 px-7 bg-white">

          {/* ---- Logo ---- */}
          <a
            href="/"
            className="flex items-center gap-1 font-bold text-2xl mt-5 md:mt-0"
          >
            <img src={images.logo} alt="Tendaly Logo" className="h-12" />
          </a>

          {/* ---- Mobile Menu Icon ---- */}
          <button
            onClick={() => setOpen(!open)}
            className="absolute right-6 top-10 md:top-6 md:hidden w-9 h-9 z-40 flex items-center justify-center"
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            {open ? (
              <XMarkIcon className="w-full h-full text-gray-800" />
            ) : (
              <Bars3BottomRightIcon className="w-full h-full text-gray-800" />
            )}
          </button>

          {/* ---- Navigation Links ---- */}
          <ul
            className={`
              md:flex md:items-center
              absolute md:static left-0 w-full md:w-auto
              bg-white shadow-md md:shadow-none rounded-b-xl
              px-9 pt-6 pb-6 md:pt-0 md:pb-0 md:px-0
              transition-all duration-300 ease-in-out
              md:translate-y-0 md:opacity-100 md:pointer-events-auto
              ${open ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0 pointer-events-none'}
            `}
            style={{ top: '82px' }}
          >
            {Links.map((link) => (
              <li key={link.name} className="md:ml-8 my-7 md:my-0 font-semibold">
                <a
                  href={link.link}
                  className="text-gray-800 hover:text-[#0099ff] duration-300"
                  onClick={() => setOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}

            {/* ---- Get Started Button ---- */}
         {/* =========================================================
    *   Large & Prominent "Get Started" Button (Recommended)
    * ====================================================== */}
<button
  className="flex items-center gap-3 bg-[#0099ff] text-white text-lg font-bold px-6 py-3 rounded-full duration-300 hover:bg-[#007acc] transform hover:scale-105 md:ml-8"
  onClick={() => setShowModal(true)}
>
  Get Started <AiOutlineArrowRight className="w-5 h-5" />
</button>
          </ul>
        </div>
      </header>

      {/* ================= Modal ================= */}
      {showModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
          onClick={() => setShowModal(false)}
        >
          {/* stopPropagation prevents modal from closing on inner click */}
          <div
            className="bg-white max-w-sm w-full rounded-xl p-6 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-xl font-bold text-gray-800 mb-3">Coming Soon</h2>
            <p className="text-gray-600 mb-6">
              Our application is currently in development and will be launching soon.
              Be the first to know — join our waitlist now!
            </p>

            <div className="flex justify-end gap-3">
              <button
                className="px-4 py-2 rounded-md text-gray-700 hover:bg-gray-100"
                onClick={() => setShowModal(false)}
              >
                Close
              </button>

              <button
                className="bg-[#0099ff] text-white px-4 py-2 rounded-md hover:bg-[#007acc]"
                onClick={() => {
                  setShowModal(false);
                  navigate('/waitlist');
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
