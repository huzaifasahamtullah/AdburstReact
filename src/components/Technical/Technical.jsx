import React, { useEffect } from 'react';
import { FaDesktop, FaMobileAlt, FaVideo } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Technical = () => {
  useEffect(() => {
    // Initialize AOS with continuous triggering and set 'once: false' for scroll up and down animations
    AOS.init({
      duration: 1000, // Animation duration
      once: false,    // Ensures animations happen on both scroll up and down
      easing: 'ease-in-out', // Smooth easing for better scroll experience
    });

    // Refresh AOS when scrolling up and down
    window.addEventListener("scroll", AOS.refresh);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", AOS.refresh);
    };
  }, []);

  return (
    <div className="min-h-[60vh] bg-custom-gradient bg-opacity-50 py-6">
      <div className="container mx-auto px-6 md:px-12 mt-11">
        {/* Heading Section */}
        <div className="text-center mb-6" data-aos="fade-up">
          <h2 className="text-3xl font-serif text-white mb-4">Our Technical Solutions</h2>
        </div>

        {/* Cards Section */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* Desktop Card */}
          <div
            className="bg-white bg-opacity-80 p-4 rounded-lg shadow-lg text-center hover:bg-blue-50 transition ease-in-out duration-300"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            <FaDesktop className="text-4xl text-blue-500 mb-4 mx-auto" />
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Desktop, Mobile, Tablets</h3>
            <p className="text-sm text-gray-600">
              We can help you gain more revenue from your traffic
            </p>
          </div>

          {/* Mobile Apps Card */}
          <div
            className="bg-white bg-opacity-80 p-4 rounded-lg shadow-lg text-center hover:bg-blue-50 transition ease-in-out duration-300"
            data-aos="fade-down"
            data-aos-delay="200"
          >
            <FaMobileAlt className="text-4xl text-blue-500 mb-4 mx-auto" />
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Mobile Apps</h3>
            <p className="text-sm text-gray-600">
              Monetize your app with our best solutions
            </p>
          </div>

          {/* Video Card */}
          <div
            className="bg-white bg-opacity-80 p-4 rounded-lg shadow-lg text-center hover:bg-blue-50 transition ease-in-out duration-300"
            data-aos="fade-left"
            data-aos-delay="300"
          >
            <FaVideo className="text-4xl text-blue-500 mb-4 mx-auto" />
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Video</h3>
            <p className="text-sm text-gray-600">
              Make your video content profitable with our tech stack
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technical;
