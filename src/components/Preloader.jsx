// src/components/Preloader.jsx
import React from 'react';
import logo from '../assets/Logo mark (Blue).svg'; // Replace with your actual logo

const Preloader = () => {
  return (
    <div className="fixed inset-0 z-[9999] bg-white flex flex-col justify-center items-center">
      <img
        src={logo}
        alt="Logo"
        className="w-24 h-24 animate-bounce mb-4"
      />
      <p className="text-blue-600 text-lg font-semibold animate-pulse">
        Loading Tendaly...
      </p>
    </div>
  );
};

export default Preloader;
