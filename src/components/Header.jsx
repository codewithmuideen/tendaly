import React, { useState } from "react";
import images from "../constants/images";
// import { Link } from "react-router-dom";
import {
  Bars3BottomRightIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import { AiOutlineArrowRight } from "react-icons/ai";

const Header = () => {
  let Links = [
    { name: "About", link: "/about" },
    { name: "Features", link: "/features" },
    { name: "How It Works", link: "/how-it-works" },
    { name: "Join", link: "/provider" },
    { name: "Testimonials", link: "/testimonials" },
    { name: "Contact", link: "/contact" },
  ];
  let [open, setOpen] = useState(false);

  return (
    <div className="sticky top-10 md:top-8 bg-white/80 backdrop-blur-md z-30 border-b border-gray-200">
      <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
        {/* Logo Section */}
        <div className="font-bold text-2xl cursor-pointer flex items-center gap-1 mt-4 md:mt-0">
          {/* <BookOpenIcon className="w-7 h-" /> */}
               <a href="/">
           <img src={images.logo} alt="Tendaly Logo" className="h-12" />
              </a>
        </div>
        {/* Menu Icon */}
        <div
          onClick={() => setOpen(!open)}
          className="absolute right-8 top-8 md:top-6 cursor-pointer md:hidden w-9 h-9"
        >
          {open ? <XMarkIcon /> : <Bars3BottomRightIcon />}
        </div>
        {/* Link Items */}
        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-12" : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li className="md:ml-8 md:my-0 my-7 font-semibold">
              <a
                href={link.link}
                className="text-gray-800 hover:text-[#0099ff] duration-500"
              >
                {link.name}
              </a>
            </li>
          ))}
          <button className="flex items-center gap-2 bg-[#0099ff] text-white md:ml-8 font-semibold px-5 py-5 rounded-full duration-500 md:static">
            Get Started <AiOutlineArrowRight className="w-4 h-4" />
          </button>
        </ul>
      </div>
    </div> 
  );
};

export default Header;