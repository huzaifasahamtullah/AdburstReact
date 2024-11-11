import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // For dropdown menu

  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <div>
      {/* Navbar */}
      <nav
        data-aos="fade-down"
        className="bg-custom-gradient bg-opacity-50 text-white shadow-md"
      >
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          {/* Logo and Site Name */}
          <a href="/" className="flex items-center space-x-2">
            <img
              src="./Images/logo 2.png"
              alt="Logo"
              className="h-12 w-12 rounded-full"
            />
            <span className="font-bold">Adburst.UK</span>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-10 font-bold">
            {["Home", "Services"].map((link) => (
              <a
                key={link}
                href="#"
                className="hover:text-[#5f63ac] transition transform hover:scale-105"
              >
                {link}
              </a>
            ))}

            {/* Get Started Button */}
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="hover:text-[#5f63ac] transition transform hover:scale-105"
            >
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Dropdown Section (appears below the Navbar) */}
      {isDropdownOpen && (
        <section className="bg-gray-100 p-8">
          <div
            className="container mx-auto text-center"
            data-aos="fade-up" // Adding fade-up animation to dropdown
          >
            <ul className="bg-white text-black rounded shadow-lg p-4 transition-all ease-in-out duration-300">
              <li>
                <a
                  href="https://dashboard.adburst.uk/auth?ReturnUrl=%2F"
                  className="block py-2 px-4 hover:bg-gray-100 transition"
                >
                  Login
                </a>
              </li>
              <li>
                <a
                  href="https://dashboard.adburst.uk/Auth/Register"
                  className="block py-2 px-4 hover:bg-gray-100 transition"
                >
                  Sign Up
                </a>
              </li>
            </ul>
          </div>
        </section>
      )}

      {/* Other Sections */}
    </div>
  );
}

export default Navbar;
