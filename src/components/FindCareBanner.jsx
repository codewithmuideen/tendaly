import React from 'react';

const FindCareBanner = () => {
  return (
    <section className="bg-gradient-to-r from-[#f2f4f7] to-[#f2f4f7] text-black text-center">
      <div className="border-t border-white/30">
        <div className="container mx-auto px-4 py-20 md:py-28">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Find Trusted Care with Ease
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8">
            Tendaly connects you with reliable, vetted caregivers for your unique needs, whether it’s for your family, loved ones, or yourself.
          </p>
          <a
            href="/waitlist"
            className="inline-block bg-[#0b5aad] hover:bg-[#0099ff] text-white font-semibold py-3 px-10 rounded-full transition-colors duration-300"
          >
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
};

export default FindCareBanner;
