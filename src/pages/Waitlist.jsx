// src/pages/Waitlist.jsx
import React from 'react';
import { FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

const Waitlist = () => {
  // A simple handler to prevent the form from reloading the page
  const handleSubmit = (event) => {
    event.preventDefault();
    // In a real application, you would handle the form submission here,
    // for example, by sending the data to an API endpoint.
    console.log('Form submitted!');
    alert('Thank you for joining our waitlist!');
  };

  return (
    // Main container: full-screen, dark background, and centers content vertically and horizontally
    <section className="bg-black min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-md mx-auto text-center">
        
        {/* Headline */}
        <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-8">
          Get updates on our product development
        </h1>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="My name is"
            required
            className="w-full bg-gray-900 text-white placeholder-gray-500 px-4 py-3 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Your Name"
          />
          <input
            type="text"
            name="role"
            placeholder="Tell us what you do (role title)"
            required
            className="w-full bg-gray-900 text-white placeholder-gray-500 px-4 py-3 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Your Role Title"
          />
          <input
            type="email"
            name="email"
            placeholder="And my email address"
            required
            className="w-full bg-gray-900 text-white placeholder-gray-500 px-4 py-3 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0099FF]"
            aria-label="Your Email Address"
          />
          <button
            type="submit"
            className="w-full bg-[#0099FF] text-white font-semibold py-3 rounded-md hover:bg-[#0099FF] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#0099FF] focus:ring-offset-2 focus:ring-offset-black"
          >
            Submit
          </button>
        </form>

        {/* Separator and Social Links */}
        <div className="mt-12">
          <div className="border-t border-gray-800 w-full max-w-xs mx-auto"></div>
          <div className="mt-6 flex flex-col items-center gap-4">
            <p className="text-gray-500 text-sm">
              Reach us on our Social handles:
            </p>
            <div className="flex items-center gap-6">
              <a href="#" aria-label="Instagram" className="text-gray-400 hover:text-white transition-colors">
                <FaInstagram size={20} />
              </a>
              <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-white transition-colors">
                <FaTwitter size={20} />
              </a>
              <a href="#" aria-label="LinkedIn" className="text-gray-400 hover:text-white transition-colors">
                <FaLinkedinIn size={20} />
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Waitlist;