import React from 'react';

// Data for the user avatars. Using online images from Unsplash.
const users = [
  {
    id: 1,
    name: 'Sarah Dayan',
    imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 2,
    name: 'Kishen Radia',
    imageUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 3,
    name: 'Michael Foster',
    imageUrl: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 4,
    name: 'Tom Cook',
    imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 5,
    name: 'Lindsay Walton',
    imageUrl: 'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
];

const WaitlistBanner = () => {
  return (
    <div className="bg-[#181818] w-full flex justify-center p-4">
      <div className="bg-[#282828] rounded-2xl p-3 w-full max-w-2xl flex items-center justify-between shadow-lg">
        <div className="flex items-center space-x-4">
          {/* Overlapping User Avatars */}
          <div className="flex flex-shrink-0 -space-x-3">
            {users.map((user) => (
              <img
                key={user.id}
                className="h-10 w-10 rounded-full object-cover ring-2 ring-[#282828]"
                src={user.imageUrl}
                alt={user.name}
              />
            ))}
          </div>
          
          {/* Text */}
          <p className="text-gray-300 text-sm md:text-base hidden sm:block">
            Get latest updates on the product
          </p>
        </div>

        {/* Call-to-action Button */}
       <a href="/waitlist">
  <button className="bg-gray-200 text-gray-900 font-semibold py-2 px-5 rounded-full text-sm whitespace-nowrap hover:bg-white transition-colors">
    Join wait list now!
  </button>
</a>

      </div>
    </div>
  );
};

export default WaitlistBanner;