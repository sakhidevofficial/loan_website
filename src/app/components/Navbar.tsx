'use client'
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-indigo-600 to-indigo-900 shadow-lg py-4">
      <div className="container mx-auto flex justify-between items-center px-6">
        {/* Brand */}
        <a
          href="#"
          className="text-3xl font-extrabold text-white hover:text-indigo-200 transition duration-300 transform hover:scale-105"
        >
          LoanPro
        </a>

        {/* Hamburger Menu Button */}
        <button
          className={`text-white md:hidden focus:outline-none transform transition-transform duration-300 ${
            isOpen ? "rotate-45" : "rotate-0"
          }`}
          onClick={toggleMenu}
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>

        {/* Links */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } md:flex space-x-10 absolute md:relative /bg-gradient-to-r from-blue-800 to-indigo-900 md:bg-transparent w-full md:w-auto top-16 md:top-auto left-0 md:left-auto z-10 md:z-auto p-6 md:p-0 rounded-lg md:rounded-none shadow-md md:shadow-none`}
        >
          <a
            href="#features"
            className="block md:inline-block text-white  hover:text-indigo-500 hover:scale-105 transform transition duration-300"
          >
            Features
          </a>
          <a
            href="#services"
            className="block md:inline-block text-white  hover:text-indigo-500 hover:scale-105 transform transition duration-300"
          >
            Services
          </a>
          <a
            href="#testimonials"
            className="block md:inline-block text-white hover:text-indigo-500 hover:scale-105 transform transition duration-300"
          >
            Testimonials
          </a>
          <a
            href="#contact"
            className="block md:inline-block text-white hover:text-indigo-500 hover:scale-105 transform transition duration-300"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
