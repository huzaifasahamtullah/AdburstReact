import React, { useEffect } from 'react';
import AOS from 'aos';

const About = () => {
  // Initialize AOS
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="p-8 bg-custom-gradient-3 rounded-lg shadow-lg">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Happy Publisher */}
        <div
          className="bg-custom-gradient bg-opacity-50 p-6 rounded-lg shadow-md hover:scale-105 hover:shadow-xl transition-transform duration-300"
          data-aos="fade-down"
          data-aos-delay="100"
        >
          <p className="text-gray-400 text-center">Happy Publisher</p>
          <p className="text-3xl font-semibold text-blue-400 text-center">1500 +</p>
        </div>

        {/* Years Experience */}
        <div
          className="bg-custom-gradient bg-opacity-50 p-6 rounded-lg shadow-md hover:scale-105 hover:shadow-xl transition-transform duration-300"
          data-aos="fade-down"
          data-aos-delay="200"
        >
          <p className="text-gray-400 text-center">Impressions Served</p>
          <p className="text-3xl font-semibold text-blue-400 text-center">100 m</p>
        </div>

        {/* Number of Servers */}
        <div
          className="bg-custom-gradient bg-opacity-50 p-6 rounded-lg shadow-md hover:scale-105 hover:shadow-xl transition-transform duration-300"
          data-aos="fade-down"
          data-aos-delay="300"
        >
          <p className="text-gray-400 text-center">Employees</p>
          <p className="text-3xl font-semibold text-blue-400 text-center">10 +</p>
        </div>

        {/* Employees */}
        <div
          className="bg-custom-gradient bg-opacity-20 p-6 rounded-lg shadow-md hover:scale-105 hover:shadow-xl transition-transform duration-300"
          data-aos="fade-down"
          data-aos-delay="400"
        >
          <p className="text-gray-400 text-center">Years Experience</p>
          <p className="text-3xl font-semibold text-blue-400 text-center">8 +</p>
        </div>
      </div>
    </div>
  );
};

export default About;
