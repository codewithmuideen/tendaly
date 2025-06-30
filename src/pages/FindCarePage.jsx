import React from 'react';
import { FaSearch, FaUserCheck, FaCalendarCheck } from 'react-icons/fa';
import FindCareBanner from '../components/FindCareBanner';

const FindCarePage = () => {
  return (
    <div className="bg-[#f9fafb] text-gray-800">
      {/* Hero Banner */}
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

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-[#0b5aad] to-[#0099ff] text-white text-center">
        <div className="container mx-auto px-4 py-20">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to Find Care?</h2>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            Whether for your child, parent, pet, or loved one — Tendaly is here to help you find the perfect caregiver.
          </p>
          <a
            href="/signup"
            className="inline-block bg-white text-[#0b5aad] font-semibold py-3 px-10 rounded-full hover:bg-gray-100 transition duration-300"
          >
            Create an Account
          </a>
        </div>
      </section>
    </div>
  );
};

export default FindCarePage;
