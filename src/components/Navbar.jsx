import React, { useState } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { Link } from "react-scroll";
import logo from "../assets/logo.svg";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const toggleNav = () => setNav(!nav);
  const closeNav = () => setNav(false);

  const navLinks = [
    { to: "home", label: "Home", offset: 0 },
    { to: "Services", label: "Services", offset: -200 },
    { to: "media", label: "Media", offset: -50 }, 
    { to: "support", label: "Products", offset: -50 },
    { to: "Contact", label: "Contact Us", offset: -50 },
  ];

  return (
    <div className="w-screen h-[80px] z-10 bg-zinc-200 fixed drop-shadow-lg border-b-2 border-zinc-300">
      <div className="px-2 flex justify-between items-center w-full h-full">
        <div className="flex items-center">
          <div className="w-16 h-20 relative overflow-hidden ml-2">
            <img className="w-full h-full object-cover" src={logo} alt="/" />
          </div>
          <ul className="hidden md:flex">
            {navLinks.map(({ to, label, offset }) => (
              <li key={to}>
                <Link
                  to={to}
                  smooth={true}
                  offset={offset}
                  duration={500}
                  onClick={closeNav}
                  className="cursor-pointer hover:pb-3 hover:border-b-[3px] hover:border-solid hover:border-[#350905]"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:hidden mr-4" onClick={toggleNav}>
          {nav ? <XIcon className="w-5" /> : <MenuIcon className="w-5" />}
        </div>
      </div>
      <ul className={`absolute bg-zinc-200 w-full px-8 border-b-2 border-zinc-300 ${nav ? '' : 'hidden'}`}>
        {navLinks.map(({ to, label, offset }) => (
          <li key={to} className="border-b-2 border-zinc-300 w-full">
            <Link
              to={to}
              smooth={true}
              offset={offset}
              duration={500}
              onClick={closeNav}
              className="cursor-pointer hover:pb-3 hover:border-b-[3px] hover:border-solid hover:border-#350905"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
