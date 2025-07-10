import React from 'react';
import {
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineLocationMarker,
} from 'react-icons/hi';

const ContactInfoItem = ({ icon: IconComponent, title, details }) => (
  <div className="flex items-start gap-4">
    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-100 text-indigo-600">
      <IconComponent className="h-6 w-6" />
    </div>
    <div>
      <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      <p className="mt-1 text-gray-600">{details}</p>
    </div>
  </div>
);

const Contact = () => {
  const contactDetails = [
    {
      icon: HiOutlineMail,
      title: 'Email Us',
      details: 'help@tendaly.com',
    },
    {
      icon: HiOutlinePhone,
      title: 'Call Us',
      details: '(555) 123-4567',
    },
    {
      icon: HiOutlineLocationMarker,
      title: 'Visit Us',
      details: 'Delaware Tpke, Newark, Delaware US',
    },
  ];

  return (
    <section className="bg-white font-sans">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
        <div className="grid grid-cols-1 gap-x-16 gap-y-12 lg:grid-cols-2">
          {/* Left Column */}
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Get In Touch
            </h1>
            <p className="mt-4 max-w-lg text-lg text-gray-600">
              Have questions about Tendaly? We're here to help. Fill out the form and our team will get back to you shortly.
            </p>
            <div className="mt-12 space-y-8">
              {contactDetails.map((item, index) => (
                <ContactInfoItem
                  key={index}
                  icon={item.icon}
                  title={item.title}
                  details={item.details}
                />
              ))}
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="rounded-2xl bg-white p-8 shadow-2xl shadow-gray-200/80 lg:p-12">
            <form
              action="contact_submit.php"
              method="POST"
              className="space-y-6"
            >
              <div className="grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-900">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    placeholder="Your name"
                    className="mt-2 block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-900">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    placeholder="Your email"
                    className="mt-2 block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-gray-900">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  required
                  placeholder="Subject"
                  className="mt-2 block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-900">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={6}
                  required
                  placeholder="Your message"
                  className="mt-2 block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm"
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full rounded-md bg-[#0099ff] px-3.5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700 transition-colors"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
