import React from 'react';

const EmpowerCareerBanner = () => {
  return (
    <section className="bg-gradient-to-r from-[#0b5aad] to-[#0099ff] text-white text-center">
      <div className="border-t border-white/30">
        <div className="container mx-auto px-4 py-20 md:py-28">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Empower Your Career in Care
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8">
            Join Tendaly to connect with families, manage your business with
            ease, and work on your own terms.
          </p>
          <a
            href="/waitlist"
            className="inline-block bg-[#00b2e3] hover:bg-[#00a1cf] text-white font-semibold py-3 px-10 rounded-full transition-colors duration-300"
          >
             Join wait list now!
          </a>
        </div>
      </div>
    </section>
  );
};

export default EmpowerCareerBanner;