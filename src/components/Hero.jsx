import React from 'react';
// Assuming you have an images constant file like this
import images from '../constants/images';
// This component is now defined outside of Hero for better performance.
const FloatingMessage = ({ text, className }) => (
  <div
    className={`absolute bg-white/90 backdrop-blur-md border border-gray-200 shadow-lg rounded-lg px-4 py-2 text-sm text-slate-800 ${className}`}
  >
    {text}
  </div>
);

const Hero = () => {
  return (
    // 👇 MODIFIED:
    // 1. Uses padding on mobile (`py-20`) to create space.
    // 2. Switches to a flex-centered layout with min-height ONLY on large screens (`lg:`).
    // This ensures the text stacks correctly on top on mobile, leaving space at the bottom.
    <section 
      className="relative bg-white overflow-hidden py-20 lg:py-0 lg:flex lg:items-center lg:min-h-[70vh]"
    >
      {/* Optional: Faint Wavy Background Lines */}
      <div
        className="absolute inset-0 opacity-50 z-0 pointer-events-none"
        style={{
          backgroundImage: `url(${images.blue})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      />

      <div className="relative container mx-auto px-6 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* 👇 MODIFIED: 
              - This text column is now FIRST in the code.
              - This makes it appear on top on mobile screens by default.
              - Removed the `order` classes as they are no longer needed.
          */}
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
              <a href="#" aria-label="Get it on Google Play">
                <img src={images.playstore} alt="Google Play store button" className="h-12 w-auto" />
              </a>
              <a href="#" aria-label="Download on the App Store">
                <img src={images.appstore} alt="Apple App store button" className="h-12 w-auto" />
              </a>
            </div>
          </div>

          {/* 👇 MODIFIED: 
              - This image column is now SECOND in the code.
              - It will appear below the text on mobile screens.
          */}
          <div className="relative flex items-center justify-center">
            <img
              src={images.heroMockup}
              alt="Tendaly app mockup showing care services"
              className="w-full max-w-lg"
            />

            {/* 👇 MODIFIED: 
                - Removed `hidden sm:block` from all messages.
                - They are now visible on mobile devices.
            */}
            <FloatingMessage
              text="We care for your parents"
              className="bottom-1/4 left-0 -translate-x-1/4"
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
  );
};

export default Hero;