import React from 'react';

const Partners = () => {
  const partners = [
    { src: './Images/google.png', alt: 'Google', title: 'Google MCM Partner' },
    { src: './Images/admop.png', alt: 'AdMob', title: 'Google AdMob MCM Partner' },
    { src: './Images/magnite.jpg', alt: 'Magnite', title: '', size: 'large' }, // Specify 'large' size for Magnite
    { src: './Images/pubmatic.png', alt: 'PubMatic', title: '' },
    { src: './Images/criteo.png', alt: 'Criteo', title: '' },
  ];

  return (
    <div
      className="flex flex-col items-center justify-center p-8 space-y-8 min-h-screen bg-gradient-to-br from-[#43cea2] to-[#185a9d]"
    >
      {/* Top Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-5xl">
        {partners.slice(0, 2).map((partner, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg p-8 flex flex-col items-center border-t-4 border-[#2e3192] hover:shadow-xl transition-shadow transform hover:scale-105 duration-300"
          >
            <img src={partner.src} alt={partner.alt} className="h-20 w-auto mb-4" />
            <p className="text-center text-gray-700 font-semibold text-lg">{partner.title}</p>
          </div>
        ))}
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-5xl">
        {partners.slice(2).map((partner, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg p-6 flex justify-center items-center hover:shadow-xl transition-shadow transform hover:scale-105 duration-300"
          >
            <img
              src={partner.src}
              alt={partner.alt}
              className={`${partner.size === 'large' ? 'h-24' : 'h-16'} w-auto`} // Larger size for "Magnite"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Partners;
