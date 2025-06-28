import React, { useState } from 'react';
import images from '../constants/images';

const FloatingMessage = ({ text, className }) => (
  <div
    className={`absolute bg-white/90 backdrop-blur-md border border-gray-200 shadow-lg rounded-lg px-4 py-2 text-sm text-slate-800 ${className}`}
  >
    {text}
  </div>
);

const Hero = () => {
  const [showModal, setShowModal] = useState(false); // ⬅️ Modal control

  return (
    <>
      {/* === HERO SECTION === */}
      <section 
        className="relative bg-white overflow-hidden pt-32 pb-20 lg:pt-0 lg:pb-0 lg:flex lg:items-center lg:min-h-[70vh]"
      >
        {/* Background pattern */}
        <div
          className="absolute inset-0 opacity-50 z-0 pointer-events-none"
          style={{
            backgroundImage: `url(${images.blue2})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
          }}
        />

        {/* Content */}
        <div className="relative container mx-auto px-6 z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Text content */}
            <div className="text-center lg:text-left">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black leading-tight">
                Care for your
                <br />
                <span className="text-black">parents</span>
              </h1>

              <p className="mt-4 text-lg text-slate-600">
                Tendaly connects families with trusted care providers. Find care, offer care, and manage everything from your phone. It's fast, secure, and designed for African families.
              </p>

              <div className="mt-8 flex items-center justify-center lg:justify-start gap-4">
                {/* Click opens modal */}
                <button onClick={() => setShowModal(true)} aria-label="Get it on Google Play">
                  <img src={images.playstore} alt="Google Play" className="h-12 w-auto" />
                </button>
                <button onClick={() => setShowModal(true)} aria-label="Download on the App Store">
                  <img src={images.appstore} alt="App Store" className="h-12 w-auto" />
                </button>
              </div>
            </div>

            {/* Image + Floating messages */}
            <div className="relative flex items-center justify-center">
              <img
                src={images.heroMockup}
                alt="Tendaly app mockup showing care services"
                className="w-full max-w-lg"
              />
              <FloatingMessage
                text="We are fast changing the frontiers on home health"
                className="top-1/4 left-3 translate-x-1/4 max-w-xs"
              />
              <FloatingMessage
                text="Your health. Our priority."
                className="top-15 -left-10"
              />
              <FloatingMessage
                text="We care for your loved ones"
                className="bottom-1/4 -right-1"
              />
            </div>

          </div>
        </div>
      </section>

      {/* === MODAL === */}
      {showModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
          onClick={() => setShowModal(false)}
        >
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

export default Hero;
