import React, { useState } from "react";
import images from "../constants/images";

const Cta = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {/* ================== CTA Section ================== */}
      <section className="bg-blue-600 py-16 text-white">
        <div className="container mx-auto flex flex-col items-center text-center px-4">
          {/* === Headline === */}
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Compassionate Healthcare, One Tap Away
          </h2>

          {/* === Subheading === */}
          <p className="text-lg max-w-2xl mb-8">
            Join families who trust Tendaly to care for their loved ones at home.
            Sign up and get notified when the app is ready.
          </p>

          {/* === App Store Buttons === */}
          <div className="flex flex-row flex-wrap justify-center items-center gap-4">
            {/* ---- Google Play ---- */}
            <button
              onClick={() => setShowModal(true)}
              className="transform transition-transform duration-300 hover:scale-105"
            >
              <img
                src={images.playstore}
                alt="Get it on Google Play"
                className="h-12"
              />
            </button>

            {/* ---- Apple App Store ---- */}
            <button
              onClick={() => setShowModal(true)}
              className="transform transition-transform duration-300 hover:scale-105"
            >
              <img
                src={images.appstore}
                alt="Download on the App Store"
                className="h-12"
              />
            </button>
          </div>
        </div>
      </section>

      {/* ================== Modal ================== */}
      {showModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4"
          onClick={() => setShowModal(false)}
        >
          <div
            className="bg-white max-w-sm w-full rounded-xl p-6 shadow-xl text-gray-800"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-xl font-bold mb-3">Coming Soon</h2>
            <p className="mb-6">
              The Tendaly mobile app is currently under development.
              Be the first to know when it's live by joining our waitlist.
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
                className="bg-[#0099ff] text-white px-4 py-2 rounded-md hover:bg-[#007acc]"
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

export default Cta;
