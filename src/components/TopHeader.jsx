import React from 'react';

const StarIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    className="w-4 h-4 text-white"
  >
    <path
      fillRule="evenodd"
      d="M10.868 2.884c.321-.662 1.134-.662 1.456 0l1.494 3.085a1 1 0 00.95.69h3.24c.731 0 1.04.939.503 1.353l-2.617 1.9a1 1 0 00-.364 1.118l.995 3.58a1 1 0 00-1.451 1.054L11.21 13.9a1 1 0 00-1.175 0l-2.91 2.12a1 1 0 00-1.45-1.054l.994-3.58a1 1 0 00-.363-1.118l-2.617-1.9c-.537-.414-.228-1.353.503-1.353h3.24a1 1 0 00.95-.69L10.868 2.884z"
      clipRule="evenodd"
    />
  </svg>
);

const TopHeader = () => {
  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-[#0099ff] to-[#0b5aad] text-white font-medium py-2">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-center md:justify-between items-center text-sm gap-2 md:gap-0">
          <a href="#" className="flex items-center gap-2">
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <StarIcon key={i} />
              ))}
            </div>
            <span className="ml-2">Rated 4.7 on HIPAA, PCI, DSS</span>
          </a>
          <div className="flex items-center gap-6">
            <a href="/partners" className="hover:underline">Become a Provider</a>
            <a href="/wait-list" className="hover:underline">Join Waitlist</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
