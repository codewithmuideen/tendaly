// src/components/HeroComponent.jsx

// === 1. Import useState to manage the modal ===
import React, { useState } from 'react';
import { FaApple } from 'react-icons/fa';
import { SiGoogleplay } from 'react-icons/si';
// Import your images from the constants file
import images from "../constants/images";

// The StarIcon component remains the same
const StarIcon = () => (
    <svg className="w-3 h-3 text-yellow-400 ml-0.5" fill="currentColor" viewBox="0 0 20 20">
        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
    </svg>
);


const HeroComponent = () => {
  // === 2. Initialize state for the modal visibility ===
  const [showModal, setShowModal] = useState(false);

  // Function to handle opening the modal and preventing link navigation
  const handleStoreClick = (e) => {
    e.preventDefault(); // Prevents the page from jumping to the top
    setShowModal(true);
  };

  return (
    <section className="relative w-full overflow-hidden bg-slate-50">
      {/* Background decorative gradient blobs */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div className="absolute top-0 -right-4 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

      <div className="relative container mx-auto px-6 lg:px-8 py-24 sm:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* ====== Left Column: Text Content ====== */}
          <div className="text-center lg:text-left z-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight">
              Care for Everyone<br />
                At Every Stage of Life
            </h1>
            <p className="mt-6 text-lg text-slate-600 max-w-lg mx-auto lg:mx-0">
             Tendaly connects families with trusted care providers. Find care, offer care, 
                and manage everything from your phone. It's fast, secure, and designed for everyone.
            </p>
            
     <div className="mt-10 flex flex-row items-center justify-center lg:justify-start gap-4">
  <button
    onClick={handleStoreClick}
    className="flex items-center gap-3 bg-black text-white px-5 py-3 rounded-full hover:bg-gray-900 transition-all duration-300"
  >
    <FaApple size={24} />
    <span className="text-sm font-semibold leading-tight text-left">
      Download on<br /><span className="text-base font-bold">Apple Store</span>
    </span>
  </button>

  <button
    onClick={handleStoreClick}
    className="flex items-center gap-3 bg-[#0b5aad] text-white px-5 py-3 rounded-full hover:bg-[#0b5aad] transition-all duration-300"
  >
    <SiGoogleplay size={22} />
    <span className="text-sm font-semibold leading-tight text-left">
      Download on<br /><span className="text-base font-bold">Play Store</span>
    </span>
  </button>
</div>

          </div>

          {/* ====== Right Column: Image & UI Elements ====== */}
          <div className="relative mt-12 lg:mt-0">
            <div className="relative w-full h-full flex items-center justify-center">
              
              <div className="absolute -top-5 -right-10 w-full h-full rounded-3xl bg-gradient-to-tr from-blue-500 via-indigo-400 to-orange-300 transform rotate-12 scale-110"></div>
              
              <img 
                src={images.care} 
                alt="Friendly female doctor in scrubs wearing a mask and pointing upwards" 
                className="relative z-10 w-full max-w-sm rounded-3xl shadow-2xl object-cover ring-8 ring-white/50"
              />
              
              <div className="absolute z-20 -bottom-8 -left-8 w-64 bg-white/80 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-gray-200/50">
                <div className="flex items-center mb-2">
                  <img src="https://i.pravatar.cc/40?u=a042581f4e29026704d" alt="User avatar" className="w-10 h-10 rounded-full ring-2 ring-white" />
                  <div className="ml-3">
                    <p className="font-bold text-slate-800 text-sm">Melissa Kitchen</p>
                    <div className="flex mt-1">
                      <StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarIcon />
                    </div>
                  </div>
                </div>
                <p className="text-xs text-slate-600">"Feeling healthier and more energetic every day, all thanks to Tendaly!."</p>
              </div>

              <div className="absolute z-20 top-8 -right-8 flex items-center bg-white/80 backdrop-blur-md p-3 rounded-2xl shadow-xl border border-gray-200/50">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
                <div className="ml-3">
                  <p className="font-bold text-slate-800">50K+</p>
                  <p className="text-xs text-slate-500">Health Providers are online</p>
                </div>
              </div>

              <div className="absolute z-20 top-8 -left-12 flex items-center bg-white/80 backdrop-blur-md p-3 rounded-2xl shadow-xl border border-gray-200/50">
                <div className="flex -space-x-2">
                  <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://i.pravatar.cc/32?u=a" alt="User 1" />
                  <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://i.pravatar.cc/32?u=b" alt="User 2" />
                  <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://i.pravatar.cc/32?u=c" alt="User 3" />
                </div>
                <div className="ml-3">
                  <p className="font-bold text-slate-800">24k+</p>
                  <p className="text-xs text-slate-500">Recent Patients</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
      
      {/* === 4. Your Modal code, conditionally rendered based on showModal state === */}
      {showModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
          onClick={() => setShowModal(false)}
        >
          <div
            className="bg-white max-w-sm w-full rounded-xl p-6 shadow-xl m-4" // Added m-4 for safety on small screens
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
    </section>
  );
};

export default HeroComponent;