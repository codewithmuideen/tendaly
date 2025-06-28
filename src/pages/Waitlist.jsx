import React from 'react';
import { FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

const Waitlist = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted!');
    alert('Thank you for joining our waitlist!');
  };

  return (
    <section className="min-h-screen bg-[#F2F4F7] flex items-center justify-center px-4 py-16">
      <div className="w-full max-w-xl bg-white shadow-xl rounded-2xl p-8 sm:p-10 relative overflow-hidden">
        {/* Gradient background bubble */}
        <div className="absolute -top-10 -left-10 w-52 h-52 bg-gradient-to-br from-[#0099FF] to-[#0B5AAD] opacity-10 rounded-full blur-3xl z-0" />

        {/* Header */}
        <div className="relative z-10 text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-extrabold text-[#0B5AAD] mb-2">
            Join the Tendaly Waitlist
          </h1>
          <p className="text-gray-600 text-base">
            Be the first to know when we launch.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
          <input
            type="text"
            name="name"
            placeholder="Your name"
            required
            className="w-full bg-[#F2F4F7] text-gray-800 placeholder-gray-500 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0099FF]"
          />
          <input
            type="text"
            name="role"
            placeholder="What do you do? (e.g., caregiver, parent)"
            required
            className="w-full bg-[#F2F4F7] text-gray-800 placeholder-gray-500 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0099FF]"
          />
          <input
            type="email"
            name="email"
            placeholder="Email address"
            required
            className="w-full bg-[#F2F4F7] text-gray-800 placeholder-gray-500 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0099FF]"
          />
          <button
            type="submit"
            className="w-full bg-[#0099FF] text-white font-semibold py-3 rounded-lg hover:bg-[#0B5AAD] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0099FF]"
          >
            Join Waitlist
          </button>
        </form>

        {/* Divider */}
        <div className="mt-10 border-t border-gray-200 pt-6 relative z-10 text-center">
          <p className="text-gray-500 text-sm mb-4">Follow us for updates</p>
          <div className="flex justify-center gap-6">
            <a href="#" aria-label="Instagram" className="text-[#FF7B89] hover:text-[#0B5AAD] transition-colors">
              <FaInstagram size={22} />
            </a>
            <a href="#" aria-label="Twitter" className="text-[#0099FF] hover:text-[#0B5AAD] transition-colors">
              <FaTwitter size={22} />
            </a>
            <a href="#" aria-label="LinkedIn" className="text-[#0B5AAD] hover:text-[#FF7B89] transition-colors">
              <FaLinkedinIn size={22} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Waitlist;
