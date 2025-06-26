import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    helpTopic: 'I\'m having trouble accessing my account',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Message sent! (Check the console for form data)');
  };

  return (
    <div className="bg-white font-sans flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl w-full space-y-10">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900">We're here to help</h1>
          <p className="mt-4 text-md text-gray-600">
            Need help, have questions or want to suggest a feature? Send us a message here. For more resources, please visit our{' '}
            <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
              support docs
            </a>.
          </p>
        </div>

        {/* Form */}
        <div className="bg-white border border-gray-200 rounded-xl shadow-md p-10">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm text-sm px-4 py-3 focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Your Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="example@domain.com"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm text-sm px-4 py-3 focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none"
              />
            </div>

            {/* Help Topic */}
            <div>
              <label htmlFor="helpTopic" className="block text-sm font-medium text-gray-700">
                What do you need help with?
              </label>
              <select
                id="helpTopic"
                name="helpTopic"
                value={formData.helpTopic}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm text-sm px-4 py-3 focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none"
              >
                <option>I'm having trouble accessing my account</option>
                <option>I have a billing question</option>
                <option>I have a feature request</option>
                <option>General question</option>
              </select>
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                required
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us more details..."
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm text-sm px-4 py-3 focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none"
              />
            </div>

            {/* Submit */}
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-3 px-6 rounded-md bg-indigo-600 text-white text-sm font-semibold hover:bg-indigo-700 transition duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Send message
              </button>
            </div>
          </form>
        </div>

        {/* Footer */}
        <div className="text-center text-sm text-gray-500">
          Alternatively, you can tweet{' '}
          <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
            @MacTech
          </a>{' '}
          or email{' '}
          <a href="mailto:support@mactechnigeria.com" className="font-medium text-indigo-600 hover:text-indigo-500">
            support@mactechnigeria.com
          </a>.
        </div>
      </div>
    </div>
  );
};

export default Contact;
