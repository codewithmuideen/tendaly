import React from 'react';
import images from '../constants/images';

const AboutTendalyPage = () => {
  return (
    <div className="bg-white bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:4rem_4rem]">
      <section className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28">
  <h2 className="text-2xl font-bold bg-gradient-to-r from-[#111827] via-pink-500 to-orange-500 bg-clip-text text-transparent mb-5">
  About Us 
</h2>
        {/* ---------- Top / Hero ---------- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-14 items-center">
          {/* -- Text -- */}
          <div className="lg:pr-8 order-2 lg:order-1">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
              We're changing the way people connect to care
            </h1>
            <p className="mt-6 text-base sm:text-lg text-gray-600 leading-relaxed">
              Tendaly is a care-focused and customer-centered platform designed to seamlessly connect
caregivers with individuals and families in need of compassionate, professional support.
Whether it&#39;s for senior care, childcare, special needs, or in-home assistance, Tendaly brings
trusted care to your doorstep. Our platform makes it easy to find, book, and manage care
services tailored to your needs and schedule. At Tendaly, we believe that quality care should be
accessible, reliable, and built on trust because everyone deserves to be cared for with dignity
and respect.
            </p>
          </div>

          {/* -- Image Collage -- */}
         <div className="relative w-full h-[400px] sm:h-[520px] lg:h-[620px] overflow-visible order-1 lg:order-2">
  {/* Background blob */}
  <div className="absolute inset-0 flex items-center justify-center">
    <div className="w-[340px] h-[340px] sm:w-[500px] sm:h-[500px] bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-purple-200/30 via-pink-200/10 to-transparent blur-3xl" />
  </div>

  {/* Image 1 */}
  <img
    src={images.sticky0}
    alt="Woman working on a laptop"
    className="absolute top-4 left-2 sm:top-10 sm:left-6 w-28 sm:w-40 lg:w-52 rounded-2xl shadow-lg rotate-0 z-20"
  />

  {/* Image 2 */}
  <img
    src={images.sticky10}
    alt="Man using a tablet"
    className="absolute top-0 right-4 sm:top-6 sm:right-10 w-28 sm:w-40 lg:w-52 rounded-2xl shadow-lg rotate-1 z-30"
  />

  {/* Image 3 */}
  <img
    src={images.sticky9}
    alt="Two women collaborating"
    className="absolute top-1/2 -translate-y-1/2 right-6 sm:right-12 w-28 sm:w-36 lg:w-44 rounded-2xl shadow-lg rotate-2 z-20"
  />

  {/* Image 4 */}
  <img
    src={images.sticky7}
    alt="Man presenting"
    className="absolute bottom-20 right-24 w-28 sm:w-36 lg:w-44 rounded-2xl shadow-lg -rotate-2 z-10"
  />

  {/* Image 5 */}
  <img
    src={images.sticky8}
    alt="Team collaborating"
    className="absolute bottom-6 left-8 sm:left-12 w-28 sm:w-36 lg:w-48 rounded-2xl shadow-lg rotate-1 z-10"
  />
</div>

        </div>

        {/* ---------- Mission & Vision ---------- */}
        <div className="mt-20 sm:mt-24 lg:mt-32 grid grid-cols-1 md:grid-cols-2 gap-y-12 gap-x-20">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Our mission</h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              At Tendaly, deliver compassionate, high-quality care by putting people first always. We are
care-focused, and customer-centered, committed to empowering families and care providers
through technology that’s built on trust, dignity, and real human needs. Whether it’s for a loved
one or a livelihood, we connect people to care that matters.
            </p>
          </div>
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Our vision</h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              At Tendaly, we envision becoming the most trusted global platform, where finding trusted
care for seniors, children, adults, pets, and personal well-being is simple, safe and
personalized. Our goal is to become the go-to platform that empowers families and care
providers alike, using smart technology to bridge the gap between everyday needs and
exceptional care. Wherever care is needed, Tendaly is there.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutTendalyPage;
