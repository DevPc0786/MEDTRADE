import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the menu
  const toggleMenu = () => setIsOpen(!isOpen);

  // Function to close the menu
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="bg-blue-600 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 text-xl font-bold">
            <a href="/">Medtrade</a>
          </div>

          {/* Menu Button for Mobile */}
          <div className="flex md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Navbar Links for Desktop */}
          <div className="hidden md:flex space-x-6">
            <a
              href="/"
              className="text-sm hover:bg-blue-700 py-2 px-4 rounded-md"
            >
              Home
            </a>
            <a
              href="/about"
              className="text-sm hover:bg-blue-700 py-2 px-4 rounded-md"
            >
              About
            </a>
            <a
              href="/products"
              className="text-sm hover:bg-blue-700 py-2 px-4 rounded-md"
            >
              All Product
            </a>
            <a
              href="/contact"
              className="text-sm hover:bg-blue-700 py-2 px-4 rounded-md"
            >
              Contact
            </a>
            <a
              href="tel:+918076603020"
              className="text-sm hover:bg-blue-700 py-2 px-4 rounded-md"
            >
              +91 8076603020
            </a>
          </div>
        </div>

        {/* Navbar Links for Mobile */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } md:hidden  rounded-md mt-2 space-y-2 px-4 py-4`}
        >
          <a
            href="/"
            onClick={closeMenu}
            className="block text-sm hover:bg-blue-800 py-2 px-4 rounded-md"
          >
            Home
          </a>
          <a
            href="/about"
            onClick={closeMenu}
            className="block text-sm hover:bg-blue-800 py-2 px-4 rounded-md"
          >
            About
          </a>
          <a
            href="/products"
            onClick={closeMenu}
            className="block text-sm hover:bg-blue-800 py-2 px-4 rounded-md"
          >
            All Product
          </a>
          <a
            href="/contact"
            onClick={closeMenu}
            className="block text-sm hover:bg-blue-800 py-2 px-4 rounded-md"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
