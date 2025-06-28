import React, { useState } from "react";
import images from "../constants/images";
import {
  Bars3BottomRightIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import { AiOutlineArrowRight } from "react-icons/ai";
import { useNavigate } from "react-router-dom";   // ⬅️ NEW

const Header = () => {
  const Links = [
    { name: "About", link: "/about" },
    { name: "Features", link: "/features" },
    { name: "How It Works", link: "/how-it-works" },
    { name: "Join", link: "/provider" },
    { name: "Testimonials", link: "/testimonials" },
    { name: "Contact", link: "/contact" },
  ];

  const [open, setOpen] = useState(false);      // mobile menu
  const [showModal, setShowModal] = useState(false); // ⬅️ NEW
  const navigate = useNavigate();               // ⬅️ NEW

  return (
    <>
      {/* ================= Header ================= */}
      <div className="sticky top-10 md:top-8 bg-white/80 backdrop-blur-md z-30 border-b border-gray-200">
        <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">

          {/* ---- Logo ---- */}
          <div className="font-bold text-2xl flex items-center gap-1 mt-4 md:mt-0">
            <a href="/">
              <img src={images.logo} alt="Tendaly Logo" className="h-12" />
            </a>
          </div>

          {/* ---- Mobile menu icon ---- */}
          <div
            onClick={() => setOpen(!open)}
            className="absolute right-8 top-8 md:top-6 cursor-pointer md:hidden w-9 h-9"
          >
            {open ? <XMarkIcon /> : <Bars3BottomRightIcon />}
          </div>

          {/* ---- Nav links ---- */}
          <ul
            className={`md:flex md:items-center absolute md:static bg-white
                        left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500
                        ${open ? "top-12" : "top-[-490px]"}`}
          >
            {Links.map((link) => (
              <li key={link.name} className="md:ml-8 my-7 md:my-0 font-semibold">
                <a
                  href={link.link}
                  className="text-gray-800 hover:text-[#0099ff] duration-500"
                  onClick={() => setOpen(false)}          
                >
                  {link.name}
                </a>
              </li>
            ))}

            {/* ---- Get Started button ---- */}
            <button
              className="flex items-center gap-2 bg-[#0099ff] text-white md:ml-8
                         font-semibold px-5 py-5 rounded-full duration-500 md:static"
              onClick={() => setShowModal(true)}          /* ⬅️ OPEN MODAL */
            >
              Get Started <AiOutlineArrowRight className="w-4 h-4" />
            </button>
          </ul>
        </div>
      </div>

      {/* ================= Modal ================= */}
      {showModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center
                     bg-black/50 backdrop-blur-sm"
          onClick={() => setShowModal(false)}       /* click backdrop to close */
        >
          {/* stopPropagation keeps inner clicks from closing backdrop */}
          <div
            className="bg-white max-w-sm w-full rounded-xl p-6 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-xl font-bold text-gray-800 mb-3">Coming Soon</h2>
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

              <button
                className="bg-[#0099ff] text-white px-4 py-2 rounded-md hover:bg-[#007acc]"
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
