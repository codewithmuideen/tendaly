import React, { useState } from 'react';
import { FaSearch, FaUserCheck, FaCalendarCheck } from 'react-icons/fa';

/* -------------------------------------------------------------------------- */
/*  FindCareBanner — now completely self‑contained with its own modal.         */
/* -------------------------------------------------------------------------- */
const FindCareBanner = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <section className="bg-gradient-to-r from-[#f2f4f7] to-[#f2f4f7] text-black text-center relative">
      <div className="border-t border-white/30">
        <div className="container mx-auto px-4 py-20 md:py-28">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Find Trusted Care with Ease
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8">
            Tendaly connects you with reliable, vetted caregivers for your unique needs,
            whether it’s for your family, loved ones, or yourself.
          </p>
          <button
            onClick={() => setShowModal(true)}
            className="inline-block bg-[#0b5aad] hover:bg-[#0099ff] text-white font-semibold py-3 px-10 rounded-full transition-colors duration-300"
          >
            Get Started
          </button>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
          onClick={() => setShowModal(false)}
        >
          <div
            className="bg-white max-w-sm w-full rounded-xl p-6 shadow-xl"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking modal itself
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

/* -------------------------------------------------------------------------- */
/*  FindCarePage                                                               */
/* -------------------------------------------------------------------------- */
const FindCarePage = () => {
  return (
    <div className="bg-[#f9fafb] text-gray-800">
      {/* Hero Banner with embedded modal */}
      <FindCareBanner />

      {/* Benefits Section */}
      <section className="py-16 px-6 max-w-7xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">Why Choose Tendaly?</h2>
        <p className="max-w-2xl mx-auto text-gray-600 mb-12">
          We make it simple, safe, and flexible to find the right care—when and where you need it.
        </p>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <div className="p-6 bg-white rounded-2xl shadow-md">
            <FaSearch className="text-[#0b5aad] text-3xl mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Smart Matching</h3>
            <p className="text-gray-600">Tell us your needs and our AI-powered engine will help match you with the best caregivers.</p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow-md">
            <FaUserCheck className="text-[#0b5aad] text-3xl mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Vetted Professionals</h3>
            <p className="text-gray-600">All caregivers are background-checked and reviewed for trust and safety.</p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow-md">
            <FaCalendarCheck className="text-[#0b5aad] text-3xl mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Flexible Scheduling</h3>
            <p className="text-gray-600">Book care when you need it, whether for a few hours or ongoing weekly support.</p>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="py-20 px-6 bg-white border-t border-gray-200">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-10">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-12 text-left">
            <div>
              <div className="text-4xl font-bold text-[#0b5aad] mb-3">1</div>
              <h3 className="text-xl font-semibold mb-2">Tell Us What You Need</h3>
              <p className="text-gray-600">Select care type, preferred schedule, language, and any special needs.</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#0b5aad] mb-3">2</div>
              <h3 className="text-xl font-semibold mb-2">Browse & Connect</h3>
              <p className="text-gray-600">View caregiver profiles, check ratings, and send booking requests.</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#0b5aad] mb-3">3</div>
              <h3 className="text-xl font-semibold mb-2">Book with Confidence</h3>
              <p className="text-gray-600">Pay securely through Tendaly and manage all bookings in your dashboard.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FindCarePage;
