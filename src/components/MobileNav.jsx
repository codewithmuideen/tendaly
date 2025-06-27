import { useState } from "react";
import { Link } from "react-router-dom";
import { links, aboutLinks, joinLinks } from "../constants";
import Button from "./Button";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const MobileNav = ({ setToggle }) => {
  const [aboutOpen, setAboutOpen] = useState(false);
  const [joinOpen, setJoinOpen] = useState(false);

  return (
    <div className="space-y-6">
      {/* About Dropdown */}
      <div>
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => setAboutOpen((prev) => !prev)}
        >
          <h3 className="text-lg font-semibold text-gray-800">About</h3>
          {aboutOpen ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </div>
        {aboutOpen && (
          <ul className="mt-2 space-y-2">
            {aboutLinks.map((link) => (
              <li key={link.id} onClick={() => setToggle(false)}>
                <Link
                  to={link.url}
                  className="text-gray-700 hover:text-[#0099FF] block text-sm font-medium"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Features + How It Works */}
      <ul className="space-y-2">
        {links
          .filter((link) => link.text === "Features" || link.text === "How It Works")
          .map((link) => (
            <li key={link.id} onClick={() => setToggle(false)}>
              <Link
                to={link.url}
                className="text-gray-700 hover:text-[#0099FF] block text-sm font-medium"
              >
                {link.text}
              </Link>
            </li>
          ))}
      </ul>

      {/* Join Dropdown */}
      <div>
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => setJoinOpen((prev) => !prev)}
        >
          <h3 className="text-lg font-semibold text-gray-800">Join</h3>
          {joinOpen ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </div>
        {joinOpen && (
          <ul className="mt-2 space-y-2">
            {joinLinks.map((link) => (
              <li key={link.id} onClick={() => setToggle(false)}>
                <Link
                  to={link.url}
                  className="text-gray-700 hover:text-[#0099FF] block text-sm font-medium"
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Contact */}
      <div>
        <Link
          to="/contact"
          className="text-lg font-semibold text-gray-800 block mb-4"
          onClick={() => setToggle(false)}
        >
          Contact
        </Link>

        <Button text="Let's Talk" styles="w-full rounded-full" />
      </div>
    </div>
  );
};

export default MobileNav;
