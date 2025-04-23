import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        setShow(false); // hide on scroll down
      } else {
        setShow(true); // show on scroll up
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);
      return () => window.removeEventListener("scroll", controlNavbar);
    }
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed w-full z-50 p-4 flex items-center justify-between transition-transform duration-300 ${
        show ? "translate-y-0" : "-translate-y-full"
      }`}
      style={{ background: "transparent" }} // no background
    >
      <div className="flex items-center space-x-3">
        <img src={logo} alt="Logo" className="h-16 w-auto rounded-full" />
        <span className="text-white text-xl font-semibold">
          Uttara Kannada Tourism
        </span>
      </div>

      <ul className="hidden md:flex space-x-6 text-white">
        <li><a href="#home" className="hover:text-yellow-300">Home</a></li>
        <li><a href="#destinations" className="hover:text-yellow-300">Destinations</a></li>
        <li><a href="#festivals" className="hover:text-yellow-300">Festivals/Events</a></li>
        <li><a href="#plan" className="hover:text-yellow-300">Plan Your Trip</a></li>
        <li><a href="#contact" className="hover:text-yellow-300">Contact</a></li>
      </ul>

      <select className="ml-4 p-1 bg-transparent border border-white text-white rounded">
        <option value="en">EN</option>
        <option value="hi">HI</option>
        <option value="mr">KN</option>
      </select>
    </nav>
  );
};

export default Navbar;
