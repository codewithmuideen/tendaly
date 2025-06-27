// src/components/Navbar.jsx
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { HiMenuAlt3 } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';
import { images, links, aboutLinks, joinLinks } from '../constants';
import MobileNav from './MobileNav';
import Button from './Button';
import { motion, AnimatePresence } from 'framer-motion';

const dropdownVariants = {
  hidden: { opacity: 0, y: 12, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.25, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    y: 12,
    scale: 0.95,
    transition: { duration: 0.2, ease: "easeIn" },
  },
};

const containerVariants = {
  hidden: { x: -500, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.5 } },
};

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Hover state for dropdowns
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Sticky background on scroll
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`sticky top-[48px] fixed top-0 left-0 z-20 w-full transition-shadow ${
        scrolled ? 'bg-Dark4 shadow-lg' : 'bg-white'
      }`}
    >
      <div className="section">
       <div className="flex w-full items-center justify-between py-2 md:py-0">
  {/* Logo */}
  <Link to="/">
    <img
      src={images.logo}
      alt="Tendaly logo"
      className="mt-3 md:mt-0 w-[120px] sm:w-[140px] md:w-[180px] object-contain cursor-pointer"
    />
  </Link>


          {/* Desktop nav */}
          <div className="hidden w-1/2 lg:flex justify-evenly">
            <ul className="flex h-[85px] items-center">
              {links.map((nav, index) => (
                <li
                  key={nav.id}
                  onMouseOver={() => setHoveredIndex(index)}
                  onMouseOut={() => setHoveredIndex(null)}
                  className={`h-full cursor-pointer ${
                    index === links.length - 1 ? 'mr-0' : 'mr-7'
                  }`}
                >
                  <Link
                    to={nav.url}
                    className={`flex h-full flex-col items-center justify-center text-[17px] font-semibold transition-colors ${
                      scrolled ? 'text-white' : 'text-black'
                    }`}
                  >
                    {nav.text}
                  </Link>

                  {/* About dropdown */}
              {/* About Dropdown */}
<AnimatePresence>
  {nav.text === 'About' && hoveredIndex === index && (
    <motion.div
      className="absolute top-full mt-1 min-w-[200px] rounded-xl bg-white shadow-xl z-50"
      variants={dropdownVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <ul className="px-6 py-4 space-y-2">
        {aboutLinks.map((link) => (
          <li key={link.id}>
            <Link
              to={link.url}
              className="block text-[17px] font-Lato text-gray-700 hover:text-blue-600 transition-all duration-200 hover:translate-y-[-2px]"
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </motion.div>
  )}
</AnimatePresence>

                  {/* Join dropdown */}
                 {/* Join Dropdown */}
<AnimatePresence>
  {nav.text === 'Join' && hoveredIndex === index && (
    <motion.div
      className="absolute top-full mt-1 min-w-[200px] rounded-xl bg-white shadow-xl z-50"
      variants={dropdownVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <ul className="px-6 py-4 space-y-2">
        {joinLinks.map((link) => (
          <li key={link.id}>
            <Link
              to={link.url}
              className="block text-[17px] font-Lato text-gray-700 hover:text-blue-600 transition-all duration-200 hover:translate-y-[-2px]"
            >
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
    </motion.div>
  )}
</AnimatePresence>

                  
                </li>
              ))}
            </ul>

            {/* CTA */}
            <Button
              text="Let's Talk"
              styles={`border-2 border-Blue rounded-full px-6 py-3 text-[12px] font-semibold uppercase ${
                scrolled ? 'text-white' : 'bg-Blue text-white'
              }`}
            />
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center lg:hidden mt-3 md:mt-0">
            {toggle ? (
              <AiOutlineClose
                className={`h-[38px] w-[38px] cursor-pointer ${
                  scrolled ? 'text-white' : ''
                }`}
                aria-label="Close menu"
                onClick={() => setToggle(false)}
              />
            ) : (
              <HiMenuAlt3
                className={`h-[38px] w-[38px] cursor-pointer ${
                  scrolled ? 'text-white' : ''
                }`}
                aria-label="Open menu"
                onClick={() => setToggle(true)}
              />
            )}

            {/* Mobile nav panel */}
            {toggle && (
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="absolute left-0 right-0 top-[55px] z-50 bg-white p-3 shadow-lg"
              >
                <MobileNav setToggle={setToggle} />
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
