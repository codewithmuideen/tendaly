import React from 'react';
import images from '../constants/images';

const AboutTendalyPage = () => {
  return (
    <div className="bg-white bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:4rem_4rem]">
      <section className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28">

        {/* ---------- Top / Hero ---------- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-14 items-center">
          {/* -- Text -- */}
          <div className="lg:pr-8 order-2 lg:order-1">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
              We're changing the way people connect
            </h1>
            <p className="mt-6 text-base sm:text-lg text-gray-600 leading-relaxed">
              Tendaly is a modern platform designed to transform the caregiving
              and personal services industry by seamlessly connecting clients—
              from individuals with disabilities to families seeking home care—
              with trusted professionals. Built with a strong focus on user
              experience, Tendaly simplifies scheduling, communication, and
              service delivery to ensure a stress‑free experience for both
              clients and providers.
            </p>
          </div>

          {/* -- Image Collage -- */}
          <div className="relative w-full h-72 sm:h-[420px] lg:h-[550px] overflow-hidden order-1 lg:order-2">
            {/* Background blob */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[340px] h-[340px] sm:w-[500px] sm:h-[500px] bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-purple-200/30 via-pink-200/10 to-transparent blur-3xl" />
            </div>

            {/* Individual photos */}
            {/* 1 */}
            <img
              src={images.sticky0}
              alt="Woman working on a laptop"
              className="absolute top-6 sm:top-12 left-2 sm:left-0 w-32 sm:w-44 lg:w-56 rounded-2xl shadow-lg -rotate-2 z-20"
            />
            {/* 2 */}
            <img
              src={images.sticky10}
              alt="Man using a tablet"
              className="absolute top-2 sm:top-4 right-4 sm:right-8 w-36 sm:w-48 lg:w-64 rounded-2xl shadow-lg rotate-1 z-30"
            />
            {/* 3 */}
            <img
              src={images.sticky9}
              alt="Two women collaborating"
              className="absolute top-1/2 -translate-y-1/3 right-0 w-32 sm:w-40 lg:w-60 rounded-2xl shadow-lg rotate-3 z-20"
            />
            {/* 4 – hidden on very small devices */}
            <img
              src={images.sticky7}
              alt="Man presenting"
              className="hidden sm:block absolute bottom-12 right-16 w-28 sm:w-40 lg:w-52 rounded-2xl shadow-lg -rotate-3 z-10"
            />
            {/* 5 – hidden on very small devices */}
            <img
              src={images.sticky8}
              alt="Team collaborating"
              className="hidden sm:block absolute bottom-0 left-8 w-36 sm:w-48 lg:w-64 rounded-2xl shadow-lg rotate-2 z-10"
            />
          </div>
        </div>

        {/* ---------- Mission & Vision ---------- */}
        <div className="mt-20 sm:mt-24 lg:mt-32 grid grid-cols-1 md:grid-cols-2 gap-y-12 gap-x-20">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Our mission</h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              To seamlessly connect clients with trusted, compassionate care
              professionals by providing a simple, reliable, and user‑centric
              platform that streamlines scheduling, communication, and service
              delivery for a stress‑free experience.
            </p>
          </div>
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Our vision</h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              To create a world where finding and managing care is effortless
              and empowering, transforming the personal services industry by
              fostering meaningful, human‑centered connections built on trust,
              warmth, and innovation.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutTendalyPage;
