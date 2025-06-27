// src/pages/Login.jsx
import React, { useState } from 'react';
import { FaGoogle, FaApple, FaEye, FaEyeSlash, FaLock } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // Use Link for internal navigation

// --- The Main Login Page Component ---

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would handle the login logic, e.g., calling your authentication API
    console.log("Logging in with:", { email, password });
    alert('Login form submitted! (Check console)');
  };

  return (
    <div className="min-h-screen flex bg-white">
      {/* Left Column: Branding & Welcome Message */}
      <div className="hidden lg:flex w-1/2 items-center justify-center bg-[#0b5aad] text-white p-12">
        <div className="max-w-md text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome Back!</h1>
          <p className="text-lg text-blue-100 mb-6">
            Log in to access your dashboard, manage your schedule, and connect with families in the Tendaly network.
          </p>
          <div className="bg-white/10 p-8 rounded-lg">
             <FaLock size={80} className="mx-auto text-[#0099ff]" />
          </div>
        </div>
      </div>

      {/* Right Column: Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-12 bg-[#f2f4f7]">
        <div className="w-full max-w-md">
          <h2 className="text-3xl font-bold text-[#0b5aad] mb-4">Log In to Your Account</h2>
          <p className="text-slate-600 mb-6">Enter your credentials to continue.</p>

          <div className="space-y-4 mb-6">
            <button className="w-full flex items-center justify-center gap-3 px-4 py-3 border border-gray-300 rounded-md hover:bg-gray-100 transition-colors">
              <FaGoogle size={20} />
              <span className="font-semibold text-slate-700">Log in with Google</span>
            </button>
            <button className="w-full flex items-center justify-center gap-3 px-4 py-3 border border-gray-300 rounded-md hover:bg-gray-100 transition-colors">
              <FaApple size={22} />
              <span className="font-semibold text-slate-700">Log in with Apple</span>
            </button>
          </div>
          
          <div className="flex items-center my-6">
            <hr className="flex-grow border-gray-300" />
            <span className="mx-4 text-sm text-slate-500">OR</span>
            <hr className="flex-grow border-gray-300" />
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
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

            <div className="flex justify-end text-sm">
                <Link to="/forgot-password" className="font-semibold text-[#0099ff] hover:underline">
                    Forgot password?
                </Link>
            </div>

            <button
              type="submit"
              className="w-full bg-[#0099ff] text-white font-bold py-3 rounded-md hover:bg-[#0b5aad] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#0099ff] focus:ring-offset-2"
            >
              Log In
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-slate-600">
            Don't have an account yet?{' '}
            <Link to="/signup" className="font-semibold text-[#0099ff] hover:underline">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;