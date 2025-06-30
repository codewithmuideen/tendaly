import React from 'react';
import { FaInstagram, FaTwitter, FaLinkedinIn, FaYoutube, FaFacebookF } from 'react-icons/fa';

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
            Be the first to experience personalized, on-demand care for families and providers..
          </p>
        </div>

        {/* Form */}
       <form
  onSubmit={handleSubmit}
  className="space-y-6 relative z-10 max-w-lg w-full bg-white/60 backdrop-blur-lg p-6 rounded-2xl shadow-md"
>
  {/* 1. Full Name */}
  <div>
    <label htmlFor="fullName" className="block font-medium text-gray-700 mb-1">
      Full Name <span className="text-red-500">*</span>
    </label>
    <input
      id="fullName"
      name="fullName"
      type="text"
      required
      placeholder="Jane Doe"
      className="w-full bg-[#F2F4F7] placeholder-gray-500 text-gray-800 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0099FF]"
    />
  </div>

  {/* 2. Email Address */}
  <div>
    <label htmlFor="email" className="block font-medium text-gray-700 mb-1">
      Email Address <span className="text-red-500">*</span>
    </label>
    <input
      id="email"
      name="email"
      type="email"
      required
      placeholder="janedoe@email.com"
      className="w-full bg-[#F2F4F7] placeholder-gray-500 text-gray-800 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0099FF]"
    />
  </div>

  {/* 3. Phone Number */}
  <div>
    <label htmlFor="phone" className="block font-medium text-gray-700 mb-1">
      Phone Number <span className="text-gray-400">(optional)</span>
    </label>
    <input
      id="phone"
      name="phone"
      type="tel"
      placeholder="(555) 123‑4567"
      className="w-full bg-[#F2F4F7] placeholder-gray-500 text-gray-800 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0099FF]"
    />
  </div>

  {/* 4. Are you a… */}
  <fieldset>
    <legend className="block font-medium text-gray-700 mb-2">
      Are you a… <span className="text-red-500">*</span>
    </legend>
    <div className="space-y-2 sm:space-y-0 sm:flex sm:items-center sm:gap-6">
      {[
        { value: "seeker", label: "Care Seeker" },
        { value: "provider", label: "Care Provider" },
        { value: "both", label: "Both" },
      ].map(({ value, label }) => (
        <label key={value} className="inline-flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="role"
            value={value}
            required
            className="h-4 w-4 text-[#0099FF] border-gray-300 focus:ring-[#0099FF]"
          />
          <span>{label}</span>
        </label>
      ))}
    </div>
  </fieldset>

  {/* 5. Type of care (multi‑select) */}
  <fieldset>
    <legend className="block font-medium text-gray-700 mb-2">
      What type of care are you interested in?{" "}
      <span className="text-gray-400">(optional)</span>
    </legend>
    <div className="grid gap-2 sm:grid-cols-2">
      {[
        "Childcare",
        "Senior Care",
        "Adult Care",
        "Pet Care",
        "Wellness Support",
      ].map((care) => (
        <label key={care} className="inline-flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            name="careTypes"
            value={care}
            className="h-4 w-4 text-[#0099FF] border-gray-300 focus:ring-[#0099FF]"
          />
          <span>{care}</span>
        </label>
      ))}
    </div>
  </fieldset>

  {/* 6. Preferred launch notification */}
  <fieldset>
    <legend className="block font-medium text-gray-700 mb-2">
      Preferred Launch Notification{" "}
      <span className="text-gray-400">(optional)</span>
    </legend>
    <div className="space-y-2 sm:space-y-0 sm:flex sm:items-center sm:gap-6">
      {[
        { value: "email", label: "Email" },
        { value: "text", label: "Text" },
        { value: "both", label: "Both" },
      ].map(({ value, label }) => (
        <label key={value} className="inline-flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="preferredNotification"
            value={value}
            className="h-4 w-4 text-[#0099FF] border-gray-300 focus:ring-[#0099FF]"
          />
          <span>{label}</span>
        </label>
      ))}
    </div>
  </fieldset>

  {/* 7. Zip Code or Location */}
  <div>
    <label htmlFor="location" className="block font-medium text-gray-700 mb-1">
      Zip Code or Location <span className="text-gray-400">(optional)</span>
    </label>
    <input
      id="location"
      name="location"
      type="text"
      placeholder="20706"
      className="w-full bg-[#F2F4F7] placeholder-gray-500 text-gray-800 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0099FF]"
    />
  </div>

  {/* Submit */}
  <button
    type="submit"
    className="w-full bg-[#0099FF] text-white font-semibold py-3 rounded-lg hover:bg-[#0B5AAD] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0099FF]"
  >
    Join the Waitlist
  </button>

  {/* Optional footer note */}
  <p className="text-xs text-gray-500 text-center pt-2">
    By joining, you’ll get early access and updates. We respect your privacy —
    no spam, ever.
  </p>
</form>


        {/* Divider */}
        <div className="mt-10 border-t border-gray-200 pt-6 relative z-10 text-center">
          <p className="text-gray-500 text-sm mb-4">Follow us for updates</p>
          <div className="flex justify-center gap-6">
            <a href="https://www.instagram.com/tendaly_?igsh=NTN1Y2NwbjUydHl1" aria-label="Instagram" className="text-[#FF7B89] hover:text-[#0B5AAD] transition-colors">
              <FaInstagram size={22} />
            </a>
            <a href="#" aria-label="Twitter" className="text-[#0099FF] hover:text-[#0B5AAD] transition-colors">
              <FaTwitter size={22} />
            </a>
            <a href="https://www.linkedin.com/company/tendaly/" aria-label="LinkedIn" className="text-[#0B5AAD] hover:text-[#FF7B89] transition-colors">
              <FaLinkedinIn size={22} />
            </a>
            <a href="#" aria-label="YouTube" className="text-[#FF0000] hover:text-[#0B5AAD] transition-colors">
              <FaYoutube size={22} />
            </a>
            <a href="#" aria-label="Facebook" className="text-[#1877F2] hover:text-[#0B5AAD] transition-colors">
              <FaFacebookF size={22} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Waitlist;
