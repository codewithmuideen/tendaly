import React, { useState } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { mainNavItems } from './NavData';
import MobileMenu from './MobileMenu';          // assumes you already have this
import images from '../../constants/images';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-[48px] bg-white/80 backdrop-blur-md z-30 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-20">

            {/* Logo (left) */}
            <div className="flex-1 flex justify-start">
              <a href="/">
           <img src={images.logo} alt="Tendaly Logo" className="h-8 md:h-12" />
              </a>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-6">
              {mainNavItems.map((item) => (
                <div key={item.id}>
                  {item.isDropdown ? (
                    <Popover className="relative">
                      {({ open }) => (
                        <>
                          <Popover.Button className="flex items-center gap-1.5 font-medium text-brand-dark hover:text-brand-blue outline-none">
                            {item.label}
                            <img
                              src={images.chevrondown}
                              className={`w-4 h-4 transition-transform ${open ? 'rotate-180' : ''}`}
                              alt=""
                            />
                          </Popover.Button>

                          <Transition
                            as={React.Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0 translate-y-1"
                            enterTo="opacity-100 translate-y-0"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100 translate-y-0"
                            leaveTo="opacity-0 translate-y-1"
                          >
                            <Popover.Panel
                              className={`absolute top-full left-1/2 -translate-x-1/2 mt-4 bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden ${
                                item.isMegaMenu ? '' : 'w-max'
                              }`}
                            >
                              {item.dropdownContent}
                            </Popover.Panel>
                          </Transition>
                        </>
                      )}
                    </Popover>
                  ) : (
                    <a href={item.href} className="font-medium text-brand-dark hover:text-brand-blue">
                      {item.label}
                    </a>
                  )}
                </div>
              ))}
            </nav>

            {/* Right-side CTA + mobile toggle */}
            <div className="flex-1 flex justify-end items-center gap-6">
    <a
  href="#"
  className="inline-block text-sm md:text-base bg-black text-white font-bold px-4 py-2 md:px-5 md:py-2.5 rounded-full hover:bg-gray-800"
>
  Get Started
</a>


              {/* hamburger (mobile) */}
              <button
                className="md:hidden text-brand-dark"
                onClick={() => setMobileMenuOpen(true)}
              >
                <img src={images.hamburger} alt="Open menu" className="w-8 h-8" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile menu component */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        items={mainNavItems}
      />
    </>
  );
};

export default Header;
