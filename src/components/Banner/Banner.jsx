import React from "react";
import Slider from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

// Custom Left Arrow
const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 text-white text-3xl bg-black bg-opacity-50 p-2 rounded-full"
  >
    <FontAwesomeIcon icon={faChevronLeft} />
  </button>
);

// Custom Right Arrow
const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 text-white text-3xl bg-black bg-opacity-50 p-2 rounded-full"
  >
    <FontAwesomeIcon icon={faChevronRight} />
  </button>
);

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true, // Enable custom arrows
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <section className="relative">
      {/* Main Heading */}

      <Slider {...settings} className="absolute top-0 left-0 w-full h-full">
        {/* Slide 1 */}
        <div className="relative">
          <img
            src="./Images/Slide1.jpg"
            alt="Slide 1"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center bg-black bg-opacity-40">
            <h1 className="text-3xl md:text-5xl font-bold">Maximize Your Revenue</h1>
            <h3 className="text-xl md:text-2xl mt-2">By Collaboration With Adburst</h3>
          </div>
        </div>


        <div className="relative">
          <img
            src="./Images/slide3.jpg"
            alt="Slide 3"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center bg-black bg-opacity-40">
            <h1 className="text-3xl md:text-5xl font-bold">Adburst connects publishers and advertisers</h1>
            <h3 className="text-xl md:text-2xl mt-2">and provides best solutions for them</h3>
          </div>
        </div>
      </Slider>
    </section>
  );
};

export default Banner;
