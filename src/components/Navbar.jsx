import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the menu
  const toggleMenu = () => setIsOpen(!isOpen);

  // Function to close the menu
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="bg-blue-600 text-white shadow-md">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 text-xl font-bold">
            <Link className="flex items-center gap-2 " href="" passHref>
            <img className="h-8 w-8" src="/img/logo.png" alt="" />
              <span c>Medtrade</span>
            </Link>
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
            <Link
              href="/"
              passHref
              className="text-sm hover:bg-blue-700 py-2 px-4 rounded-md"
            >
              Home
            </Link>
            <Link
              href="/about"
              passHref
              className="text-sm hover:bg-blue-700 py-2 px-4 rounded-md"
            >
              About
            </Link>
            <Link
              href="/products"
              passHref
              className="text-sm hover:bg-blue-700 py-2 px-4 rounded-md"
            >
              All Product
            </Link>
            <Link
              href="/contact"
              passHref
              className="text-sm hover:bg-blue-700 py-2 px-4 rounded-md"
            >
              Contact
            </Link>
           
          </div>
        </div>

        {/* Navbar Links for Mobile */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } md:hidden rounded-md mt-2 space-y-2 px-4 py-4`}
        >
          <Link
            href="/"
            passHref
            onClick={closeMenu}
            className="block text-sm hover:bg-blue-800 py-2 px-4 rounded-md"
          >
            Home
          </Link>
          <Link
            href="/about"
            passHref
            onClick={closeMenu}
            className="block text-sm hover:bg-blue-800 py-2 px-4 rounded-md"
          >
            About
          </Link>
          <Link
            href="/products"
            passHref
            onClick={closeMenu}
            className="block text-sm hover:bg-blue-800 py-2 px-4 rounded-md"
          >
            All Product
          </Link>
          <Link
            href="/contact"
            passHref
            onClick={closeMenu}
            className="block text-sm hover:bg-blue-800 py-2 px-4 rounded-md"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
