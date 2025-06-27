import React from 'react';
import images from '../constants/images';

const floatingMessages = [
  {
    text: "We care for your loved ones",
    style: "top-1/4 left-4 sm:left-8",
  },
  {
    text: "We are fast changing the frontiers on home health",
    style: "top-8 right-4 sm:right-10",
  },
  {
    text: "We care for your parents",
    style: "bottom-20 left-6 sm:left-16",
  },
  {
    text: "Your health. Our priority.",
    style: "bottom-6 right-6 sm:right-16",
  },
];

const Hero = ({ onScrollToFeatures }) => {
  return (
  <section
  id="hero"
  className="relative z-0 bg-[#0097FC] w-full pb-20 px-6 md:px-12 overflow-hidden"
  style={{ paddingTop: 'calc(var(--header-h) + 2rem)' }}   // was + 2rem → now + 4rem
>
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-16 z-10 relative">

        {/* LEFT COLUMN */}
        <div className="text-center lg:text-left pt-20">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
            Smarter Care <br /> Connections
          </h1>
          <p className="text-lg text-gray-700 mb-8 max-w-md mx-auto lg:mx-0">
            Tendaly connects families with trusted care providers. Find care, offer care, and manage everything from your phone. It's fast, secure, and designed for African families.
          </p>

          <div className="flex justify-center lg:justify-start gap-4 mb-6">
            <a href="#">
              <img src={images.playstore} alt="Google Play" className="h-12 w-auto" />
            </a>
            <a href="#">
              <img src={images.appstore} alt="App Store" className="h-12 w-auto" />
            </a>
          </div>

          {onScrollToFeatures && (
            <button
              onClick={onScrollToFeatures}
              className="mt-4 inline-block bg-blue-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-700 transition"
            >
              Explore Features
            </button>
          )}
        </div>

        {/* RIGHT COLUMN */}
        <div className="relative flex justify-center mt-10">
          <img
            src={images.heroMockup}
            alt="Tendaly App Mockup"
            className="w-full max-w-sm sm:max-w-md lg:max-w-lg drop-shadow-xl relative z-10"
          />

          {/* Floating Messages */}
          {floatingMessages.map((msg, index) => (
            <div
              key={index}
              className={`absolute ${msg.style} bg-white/90 backdrop-blur-md text-sm sm:text-base text-blue-900 px-4 py-2 rounded-full shadow-md animate-fadeIn border border-blue-200`}
              style={{ animationDelay: `${index * 0.5}s` }}
            >
              {msg.text}
            </div>
          ))}
        </div>
      </div>

      {/* Optional: Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-white/20 via-transparent to-transparent pointer-events-none z-0" />
    </section>
  );
};

export default Hero;
