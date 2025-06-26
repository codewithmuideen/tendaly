// src/components/Header/MobileMenu.tsx

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NavItem } from './NavData';
import images from '../../constants/images';

interface MobileMenuProps {
  isOpen: boolean;
  items: NavItem[];
  onClose: () => void;
}

const MobileMenu = ({ isOpen, items, onClose }: MobileMenuProps) => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (id: string) => {
    setOpenDropdown((prev) => (prev === id ? null : id));
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={onClose}
        >
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed top-0 right-0 h-full w-4/5 max-w-sm bg-white p-6 z-50 overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-end mb-8">
              <button onClick={onClose}>
                <img src={images.close} alt="Close Menu" className="w-6 h-6" />
              </button>
            </div>

            <nav className="flex flex-col gap-4">
              {items.map((item) => (
                <div key={item.id}>
                  {item.isDropdown ? (
                    <>
                      <button
                        onClick={() => toggleDropdown(item.id)}
                        className="text-left w-full font-semibold text-brand-dark text-lg flex justify-between items-center"
                      >
                        {typeof item.label === 'string' ? item.label : 'Menu'}
                        <span>{openDropdown === item.id ? '−' : '+'}</span>
                      </button>
                      <AnimatePresence>
                        {openDropdown === item.id && item.dropdown && (
                          <motion.ul
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="pl-4 mt-2 space-y-2 text-brand-gray-text text-base"
                          >
                            {item.dropdown.map((link) => (
                              <li key={link.label}>
                                <a href={link.href} className="block">
                                  {link.label}
                                </a>
                              </li>
                            ))}
                          </motion.ul>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <a
                      href={item.href}
                      className="text-lg font-semibold text-brand-dark block"
                    >
                      {item.label}
                    </a>
                  )}
                </div>
              ))}

              <hr className="my-4" />
            </nav>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
