"use client"
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 7, // Show 3 slides initially
    slidesToScroll: 7,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 7, // Show 7 slides on large devices
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3, // Show 2 slides on smaller devices
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {/* Your slide components here */}
      <div className="w-32 h-52 border" >
        <h3>Slide 1</h3>
      </div>
      <div className="w-32 h-52 border">
        <h3>Slide 2</h3>
      </div>
      <div className="w-32 h-52 border">
        <h3>Slide 3</h3>
      </div>
      <div className="w-32 h-52 border">
        <h3>Slide 3</h3>
      </div>
      <div className="w-32 h-52 border">
        <h3>Slide 3</h3>
      </div>
      <div className="w-32 h-52 border">
        <h3>Slide 3</h3>
      </div>
      <div className="w-32 h-52 border">
        <h3>Slide 3</h3>
      </div>
      <div className="w-32 h-52 border">
        <h3>Slide 3</h3>
      </div>
      <div className="w-32 h-52 border">
        <h3>Slide 3</h3>
      </div>
      <div className="w-32 h-52 border">
        <h3>Slide 3</h3>
      </div>
      {/* Add more slides as needed */}
    </Slider>
  );
};

export default Carousel;
