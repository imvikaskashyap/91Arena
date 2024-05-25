"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const Carousel = () => {
  // Define settings for large devices
  const largeDeviceSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 7, // Show 7 slides on large devices
    slidesToScroll: 1,
    arrows: false, // Hide arrows
    swipe: false, // Disable swipe
  };

  // Define settings for smaller devices
  const smallDeviceSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Show 3 slides on smaller devices
    slidesToScroll: 1,
    arrows: true, // Show arrows
    swipe: true, // Enable swipe
  };

  // Determine which settings to use based on screen size
  const settings = window.innerWidth >= 1024 ? largeDeviceSettings : smallDeviceSettings;


  return (
    <div className="p-4">
      <Slider {...settings}>
        {/* Your slide components here */}
        <div className="w-32 h-52 border">
          <Image
            src="https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=300&q=80"
            alt="img"
            className="aspect-[3/4] h-fit w-fit object-cover"
            width={300}
            height={400}
          />
        </div>
        <div className="w-32 h-52 border">
          <Image
            src="https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=300&q=80"
            alt="img"
            className="aspect-[3/4] h-fit w-fit object-cover"
            width={300}
            height={400}
          />
        </div>
        <div className="w-32 h-52 border">
          <Image
            src="https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=300&q=80"
            alt="img"
            className="aspect-[3/4] h-fit w-fit object-cover"
            width={300}
            height={400}
          />
        </div>
        <div className="w-32 h-52 border">
          <Image
            src="https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=300&q=80"
            alt="img"
            className="aspect-[3/4] h-fit w-fit object-cover"
            width={300}
            height={400}
          />
        </div>
        <div className="w-32 h-52 border">
          <Image
            src="https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=300&q=80"
            alt="img"
            className="aspect-[3/4] h-fit w-fit object-cover"
            width={300}
            height={400}
          />
        </div>
        <div className="w-32 h-52 border">
          <Image
            src="https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=300&q=80"
            alt="img"
            className="aspect-[3/4] h-fit w-fit object-cover"
            width={300}
            height={400}
          />
        </div>
        <div className="w-32 h-52 border">
          <Image
            src="https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=300&q=80"
            alt="img"
            className="aspect-[3/4] h-fit w-fit object-cover"
            width={300}
            height={400}
          />
        </div>
        <div className="w-32 h-52 border">
          <Image
            src="https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=300&q=80"
            alt="img"
            className="aspect-[3/4] h-fit w-fit object-cover"
            width={300}
            height={400}
          />
        </div>
        <div className="w-32 h-52 border">
          <Image
            src="https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=300&q=80"
            alt="img"
            className="aspect-[3/4] h-fit w-fit object-cover"
            width={300}
            height={400}
          />
        </div>
        <div className="w-32 h-52 border">
          <Image
            src="https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=300&q=80"
            alt="img"
            className="aspect-[3/4] h-fit w-fit object-cover"
            width={300}
            height={400}
          />
        </div>
        <div className="w-32 h-52 border">
          <Image
            src="https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=300&q=80"
            alt="img"
            className="aspect-[3/4] h-fit w-fit object-cover"
            width={300}
            height={400}
          />
        </div>
        <div className="w-32 h-52 border">
          <Image
            src="https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=300&q=80"
            alt="img"
            className="aspect-[3/4] h-fit w-fit object-cover"
            width={300}
            height={400}
          />
        </div>
        <div className="w-32 h-52 border">
          <Image
            src="https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=300&q=80"
            alt="img"
            className="aspect-[3/4] h-fit w-fit object-cover"
            width={300}
            height={400}
          />
        </div>
        <div className="w-32 h-52 border">
          <Image
            src="https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=300&q=80"
            alt="img"
            className="aspect-[3/4] h-fit w-fit object-cover"
            width={300}
            height={400}
          />
        </div>
        <div className="w-32 h-52 border">
          <Image
            src="https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=300&q=80"
            alt="img"
            className="aspect-[3/4] h-fit w-fit object-cover"
            width={300}
            height={400}
          />
        </div>
        <div className="w-32 h-52 border">
          <Image
            src="https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=300&q=80"
            alt="img"
            className="aspect-[3/4] h-fit w-fit object-cover"
            width={300}
            height={400}
          />
        </div>
        <div className="w-32 h-52 border">
          <Image
            src="https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=300&q=80"
            alt="img"
            className="aspect-[3/4] h-fit w-fit object-cover"
            width={300}
            height={400}
          />
        </div>
        <div className="w-32 border">
          <Image
            src="https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=300&q=80"
            alt="img"
            className="aspect-[3/4] h-fit w-fit object-cover"
            width={300}
            height={400}
          />
        </div>
        <div className="w-32 h-52 border">
          <Image
            src="https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=300&q=80"
            alt="img"
            className="aspect-[3/4] h-fit w-fit object-cover"
            width={300}
            height={400}
          />
        </div>
        <div className="w-32 h-52 border">
          <Image
            src="https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=300&q=80"
            alt="img"
            className="aspect-[3/4] h-fit w-fit object-cover"
            width={300}
            height={400}
          />
        </div>
        {/* Add more slides as needed */}
      </Slider>

      {/* Custom styles for slider next and previous buttons */}
      <style jsx global>{`
        .slick-prev,
        .slick-next {
          color: black; // Change the color to your desired color
        }

        .slick-prev:before,
        .slick-next:before {
          color: black; // Change the color to your desired color
        }
      `}</style>
    </div>
  );
};

export default Carousel;
