import React from 'react';
import images from '../constants/images';

const AboutTendalyPage = () => {
  return (
    <div className="bg-white bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:4rem_4rem]">
      <section className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28">

        {/* --- Header --- */}
        <h2 className="text-2xl font-bold bg-gradient-to-r from-[#111827] via-pink-500 to-orange-500 bg-clip-text text-transparent mb-5">
          About Us
        </h2>

        {/* --- Hero Section --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-14 items-center">

          {/* -- Text -- */}
          <div className="lg:pr-8 order-2 lg:order-1">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
              We're changing the way people connect to care
            </h1>
            <p className="mt-6 text-base sm:text-lg text-gray-600 leading-relaxed">
              Tendaly is a care-focused and customer-centered platform designed to seamlessly connect
              caregivers with individuals and families in need of compassionate, professional support.
              Whether it's for senior care, childcare, special needs, or in-home assistance, Tendaly brings
              trusted care to your doorstep. Our platform makes it easy to find, book, and manage care
              services tailored to your needs and schedule. At Tendaly, we believe that quality care should be
              accessible, reliable, and built on trust because everyone deserves to be cared for with dignity
              and respect.
            </p>
          </div>

          {/* -- Image Grid with gaps and rounded corners -- */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 order-1 lg:order-2">
            <img src={images.sticky0} alt="1" className="w-full h-full object-cover rounded-xl" />
            <img src={images.sticky10} alt="2" className="w-full h-full object-cover rounded-xl" />
            <img src={images.sticky9} alt="3" className="w-full h-full object-cover rounded-xl" />
            <img src={images.sticky7} alt="4" className="w-full h-full object-cover rounded-xl" />
            <img src={images.sticky8} alt="5" className="w-full h-full object-cover rounded-xl" />
            <img src={images.sticky4} alt="5" className="w-full h-full object-cover rounded-xl" />
            <div className="w-full h-full rounded-xl bg-gradient-to-br from-purple-100 to-pink-100" />
          </div>
        </div>

        {/* --- Mission and Vision --- */}
        <div className="mt-20 sm:mt-24 lg:mt-32 grid grid-cols-1 md:grid-cols-2 gap-y-12 gap-x-20">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Our mission</h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              At Tendaly, we deliver compassionate, high-quality care by putting people first always. We are
              care-focused, and customer-centered, committed to empowering families and care providers
              through technology that’s built on trust, dignity, and real human needs. Whether it’s for a loved
              one or a livelihood, we connect people to care that matters.
            </p>
          </div>
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Our vision</h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              At Tendaly, we envision becoming the most trusted global platform, where finding trusted
              care for seniors, children, adults, pets, and personal well-being is simple, safe, and
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
