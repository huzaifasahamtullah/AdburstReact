import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <div>
      {/* Navbar */}
      <nav
        data-aos="fade-down"
        className="bg-gradient-to-r from-[#0c0494] via-[#080a0f] to-[#0c0494] text-white shadow-md backdrop-blur-md"
      >
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          {/* Logo and Site Name */}
          <a href="/" className="flex items-center space-x-2">
            <img
              src="./Images/logo 2.png"
              alt="Logo"
              className="h-12 w-12 rounded-full"
            />
            <span className="font-bold text-2xl tracking-wider">
              Adburst.UK
            </span>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-10 font-semibold">
            {["Home", "Services"].map((link) => (
              <a
                key={link}
                href="#"
                className="hover:text-[#5f63ac] transition duration-300 transform hover:scale-105"
              >
                {link}
              </a>
            ))}

            {/* Get Started Button with Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="hover:text-[#5f63ac] transition duration-300 transform hover:scale-105"
              >
                Get Started
              </button>

              {/* Small Dropdown Menu */}
              {isDropdownOpen && (
                <ul
                  className="absolute right-0 mt-2 w-40 bg-white text-black rounded-lg shadow-lg p-2 space-y-1 transition-all duration-300 ease-in-out"
                  data-aos="fade-down"
                >
                  <li>
                    <a
                      href="https://dashboard.adburst.uk/auth?ReturnUrl=%2F"
                      className="block py-2 px-4 hover:bg-gray-100 rounded-md transition duration-200"
                    >
                      Login
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://dashboard.adburst.uk/Auth/Register"
                      className="block py-2 px-4 hover:bg-gray-100 rounded-md transition duration-200"
                    >
                      Sign Up
                    </a>
                  </li>
                </ul>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Optional Overlay for Mobile View */}
      {isDropdownOpen && (
        <div
          className="fixed inset-0 bg-black opacity-25 z-10"
          onClick={() => setIsDropdownOpen(false)}
        ></div>
      )}
    </div>
  );
}

export default Navbar;
