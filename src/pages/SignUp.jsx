// src/pages/SignUp.jsx
import React, { useState, useEffect } from 'react';
// 👇 CORRECTED: FaGoogle and FaApple are removed as they are no longer used.
import { FaEye, FaEyeSlash, FaCheckCircle, FaTimesCircle, FaUsers } from 'react-icons/fa';

// --- Reusable Sub-Components ---

const PasswordRequirement = ({ meets, text }) => (
  <li className={`flex items-center gap-2 text-sm ${meets ? 'text-green-600' : 'text-slate-500'}`}>
    {meets ? <FaCheckCircle /> : <FaTimesCircle className="text-gray-300" />}
    {text}
  </li>
);

// --- The Main SignUp Page Component ---

const SignUp = () => {
  // 👇 ADDED: State for new form fields
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  // State for password validation
  const [validations, setValidations] = useState({
    minLength: false,
    hasNumber: false,
    hasSpecialChar: false,
  });

  // Effect to check password strength in real-time
  useEffect(() => {
    setValidations({
      minLength: password.length >= 8,
      hasNumber: /\d/.test(password),
      hasSpecialChar: /[!@#$%^&*(),.?":{}|<>]/.test(password),
    });
  }, [password]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // 👇 UPDATED: Console log now includes the new fields
    console.log("Creating account with:", { fullName, email, phoneNumber, password });
    alert('Account creation form submitted! (Check console)');
  };

  return (
    <div className="min-h-screen flex bg-white">
      {/* Left Column: Branding & Value Proposition */}
      {/* 👇 MODIFIED: Using a linear gradient for the background */}
      <div className="hidden lg:flex w-1/2 items-center justify-center bg-gradient-to-br from-[#0b5aad] to-[#0099ff] text-white p-12">
        <div className="max-w-md text-center">
          <h1 className="text-4xl font-bold mb-4">Join a Community of Care</h1>
          <p className="text-lg text-blue-100 mb-6">
            Become a part of the Tendly network and start making a difference today. We provide the tools for you to succeed.
          </p>
          <div className="bg-white/10 p-8 rounded-lg">
             <FaUsers size={80} className="mx-auto text-white" />
          </div>
        </div>
      </div>

      {/* Right Column: Signup Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-12 bg-[#f2f4f7]">
        <div className="w-full max-w-md">
          <h2 className="text-3xl font-bold text-[#0b5aad] mb-4">Create Your Account</h2>
          <p className="text-slate-600 mb-8">Let's get you started on your journey with Tendly.</p>

          {/* 👇 REMOVED: Social signup buttons and "OR" divider have been removed */}

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* 👇 ADDED: Full Name input field */}
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
              <input
                type="text"
                id="fullName"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
                autoComplete="name"
                className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0099ff]"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                autoComplete="email"
                className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0099ff]"
              />
            </div>

            {/* 👇 ADDED: Phone Number input field */}
            <div>
              <label htmlFor="phoneNumber" className="block text-sm font-medium text-slate-700 mb-1">Phone Number</label>
              <input
                type="tel"
                id="phoneNumber"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                required
                autoComplete="tel"
                className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0099ff]"
              />
            </div>
            
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-slate-700 mb-1">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  autoComplete="new-password"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0099ff]"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 px-3 text-slate-500 hover:text-[#0099ff]"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>

            {password.length > 0 && (
                <ul className="space-y-1 mt-2 p-3 bg-white rounded-md border border-gray-200">
                    <PasswordRequirement meets={validations.minLength} text="At least 8 characters" />
                    <PasswordRequirement meets={validations.hasNumber} text="Contains a number" />
                    <PasswordRequirement meets={validations.hasSpecialChar} text="Contains a special character (!@#...)" />
                </ul>
            )}

            <div className="flex items-center pt-2">
                <input type="checkbox" id="terms" required className="h-4 w-4 rounded border-gray-300 text-[#0099ff] focus:ring-[#0099ff]" />
                <label htmlFor="terms" className="ml-2 block text-sm text-slate-600">
                    I agree to the <a href="/terms" className="font-semibold text-[#0099ff] hover:underline">Terms of Service</a>
                </label>
            </div>

            <button
              type="submit"
              className="w-full bg-[#0099ff] text-white font-bold py-3 rounded-md hover:bg-[#0b5aad] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#0099ff] focus:ring-offset-2"
            >
              Create Account
            </button>
          </form>

          <p className="mt-8 text-center text-sm text-slate-600">
            Already have an account?{' '}
            <a href="/login" className="font-semibold text-[#0099ff] hover:underline">
              Log in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;