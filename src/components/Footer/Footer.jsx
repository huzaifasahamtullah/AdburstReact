import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faWhatsapp, faSkype } from '@fortawesome/free-brands-svg-icons';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Footer = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <div className="flex justify-around items-center bg-gradient-to-r from-[#2a7f6a] to-[#124a6f] bg-opacity-50 text-white p-8">
            {/* Logo and Social Icons Section */}
            <div className="text-center" data-aos="fade-up">
                {/* Icons Section - Now on Top */}
                <div className="flex justify-center space-x-4 mb-4">
                    <a href="https://www.linkedin.com/in/ad-burst-a2b621330/"><FontAwesomeIcon icon={faLinkedin} className="text-white text-2xl cursor-pointer" /></a>
                    <a href="https://api.whatsapp.com/send?phone=447724695771"><FontAwesomeIcon icon={faWhatsapp} className="text-white text-2xl cursor-pointer" /></a>
                    <a href="skype:live:.cid.e76b671530a947f2"><FontAwesomeIcon icon={faSkype} className="text-white text-2xl cursor-pointer" /></a>
                </div>
                {/* Logo */}
                <img src='./Images/Logo 2.png' alt="Company Logo" className="w-24 h-24 rounded-full mx-auto" />
            </div>

            {/* Business Hours and Contact Info Section */}
            <div className="flex space-x-16">
                {/* Business Hours */}
                <div data-aos="fade-up" data-aos-delay="100">
                    <h2 className="text-lg font-semibold mb-2">Business Hours</h2>
                    <p className="text-gray-300">Mon - Friday:</p>
                    <p className="mb-4">09.00 am to 07.00 pm</p>
                    <p className="text-gray-300">Saturday:</p>
                    <p className="mb-4">10.00 am to 05.00 pm</p>
                    <p className="text-gray-300">Vacation:</p>
                    <p>All Sunday is our vacation</p>
                </div>

                {/* Contact Info */}
                <div data-aos="fade-up" data-aos-delay="200">
                    <h2 className="text-lg font-semibold mb-2">Contact Info</h2>
                    <p className="mb-2">📍 9 Rodgers Quay, Belfast, Antrim, United Kingdom</p>
                    <p className="mb-2">📧 contact@adburst.uk</p>
                    <p className="mb-2">📧 info@adburst.uk</p>
                    <p>📞 +447724695771</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
