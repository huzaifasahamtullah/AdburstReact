import React, { useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilm, faVideoCamera, faShieldAlt, faBullhorn } from '@fortawesome/free-solid-svg-icons';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Highlight = () => {
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
    <section className="py-16 bg-custom-gradient">
      {/* Heading */}
      <div className="text-center mb-12" data-aos="fade-up">
        <h2 className="text-4xl font-bold text-white font-serif mb-4">
          HIGHLIGHTS
        </h2>
        <p className="text-lg text-gray-100 mx-auto max-w-3xl">
          Explore our offerings to help you grow your business.
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Card 1 */}
        <div
          className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col"
          data-aos="fade-right"
          data-aos-delay="100"
        >
          <div className="text-center text-4xl text-blue-600 mb-4 group-hover:text-blue-800">
            <FontAwesomeIcon icon={faFilm} />
          </div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">Dynamic Ads</h3>
          <div className="flex-grow text-gray-600 mb-4">
            <p>We create visually appealing and functional websites tailored to your business needs.</p>
          </div>
          <div className="text-center">
            <button className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-800 transition duration-300 transform hover:scale-105">
              Learn More
            </button>
          </div>
        </div>

        {/* Card 2 */}
        <div
          className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col"
          data-aos="fade-down"
          data-aos-delay="200"
        >
          <div className="text-center text-4xl text-blue-600 mb-4 group-hover:text-blue-800">
            <FontAwesomeIcon icon={faVideoCamera} />
          </div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">Video Uploading</h3>
          <div className="flex-grow text-gray-600 mb-4">
            <p>Our team develops robust and scalable web applications with the latest technologies.</p>
          </div>
          <div className="text-center">
            <button className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-800 transition duration-300 transform hover:scale-105">
              Learn More
            </button>
          </div>
        </div>

        {/* Card 3 */}
        <div
          className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col"
          data-aos="fade-down"
          data-aos-delay="300"
        >
          <div className="text-center text-4xl text-blue-600 mb-4 group-hover:text-blue-800">
            <FontAwesomeIcon icon={faShieldAlt} />
          </div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">Shielding</h3>
          <div className="flex-grow text-gray-600 mb-4">
            <p>Improve your website's visibility and ranking on search engines to attract more visitors.</p>
          </div>
          <div className="text-center">
            <button className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-800 transition duration-300 transform hover:scale-105">
              Learn More
            </button>
          </div>
        </div>

        {/* Card 4 */}
        <div
          className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col"
          data-aos="fade-left"
          data-aos-delay="400"
        >
          <div className="text-center text-4xl text-blue-600 mb-4 group-hover:text-blue-800">
            <FontAwesomeIcon icon={faBullhorn} />
          </div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">Supported Ads Formats</h3>
          <div className="flex-grow text-gray-600 mb-4">
            <p>We offer comprehensive digital marketing strategies to help grow your online presence.</p>
          </div>
          <div className="text-center">
            <button className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-800 transition duration-300 transform hover:scale-105">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Highlight;
