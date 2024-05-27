"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import {
  CalendarCheck,
  Smartphone,
  ChevronsLeftRight,
  Cpu,
  Square,
  Aperture,
  MemoryStick,
  TrendingUp,
  Heart,
  BatteryMedium,
  Eye,
  MessageSquareText,
  BadgeIndianRupee,
  ImageDown,
  Columns2,
  PlugZap2,
  BatteryCharging,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const Carousel3 = () => {
  // Define settings for large devices
  const largeDeviceSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 7, // Show 7 slides on large devices
    slidesToScroll: 7,
    arrows: true, // Hide arrows
    swipe: true, // Disable swipe
  };

  // Define settings for smaller devices
  const smallDeviceSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // Show 3 slides on smaller devices
    slidesToScroll: 1,
    arrows: false, // Show arrows
    swipe: true, // Enable swipe
  };

  // Determine which settings to use based on screen size
  const settings =
    window.innerWidth >= 1024 ? largeDeviceSettings : smallDeviceSettings;

  return (
    <div className="p-4">
      <Slider {...settings}>
        <div className="w-32 h-52  p-2">
          <ul>
            <li className="text-gray-700 flex items-center gap-2 mb-2">
              <i className="text-amber-500">
                <CalendarCheck className="w-4 h-4" />
              </i>
              <span className="text-xs">
                Released 2024, January 24
              </span>
            </li>
            <li className="text-gray-700 flex items-center text-sm gap-2 mb-2">
              <i className="text-amber-500">
                <Smartphone className="w-4 h-4" />
              </i>
              <span className="text-xs r">
                232g or 233g, 8.6mm thickness
              </span>
            </li>
            <li className="text-gray-700 flex items-center text-sm gap-2 mb-2">
              <i className="text-amber-500">
                <ChevronsLeftRight className="w-4 h-4" />
              </i>
              <span className="text-xs ">
                Android 14, One UI 6.1
              </span>
            </li>
            <li className="text-gray-700 flex items-center gap-2 text-sm mb-2">
              <i className="text-amber-500">
                <MemoryStick className="w-4 h-4" />
              </i>
              <span className="text-xs ">
                256GB/512GB/1TB storage, no card slot
              </span>
            </li>
          </ul>
        </div>
        <div className="w-32 h-52  p-2">
          <div className="flex flex-col  justify-between">
            <div className="flex flex-col items-start justify-between p-2 rounded-lg ">
              <i className="">
                <Square className="text-gray-500" />
              </i>
              <strong className="block text-pink-600 text-xl mt-1 tracking-wider">
                <span>6.8</span>
              </strong>
              <p className="text-gray-600 text-sm tracking-wider">
                1440x3120 pixels
              </p>
            </div>
            <div className="flex flex-col items-start justify-between rounded-lg p-2 ">
              <i className="text-lg">
                <Aperture className="text-gray-500" />
              </i>
              <strong className="block text-orange-500 text-xl mt-1">
                <span className="tracking-wider">200</span>
                <span className="tracking-wider">MP</span>
              </strong>
              <div className="text-gray-600 text-sm tracking-wider">4320p</div>
            </div>
          </div>
        </div>
        <div className="w-32 h-52  p-2">
          <div className="flex flex-col  justify-between">
            <div className="text-center rounded-lg mb-4">
              <strong className="text-pink-600 flex items-center gap-2 text-xl">
                <i className="text-lg">
                  <TrendingUp />
                </i>
                <span className="text-3xl">57%</span>
              </strong>
              <span className="text-gray-500 text-sm">5,535,450 hits</span>
            </div>
            <div className="flex flex-col items-start justify-between rounded-lg">
              <i className="text-lg">
                <Cpu className="text-gray-500" />
              </i>
              <strong className="text-blue-600 text-sm block mt-1">
                <span className="text-xl">12 GB</span> RAM
              </strong>
              <div className="text-gray-500">
                <p className="text-sm">Snapdragon 8 Gen 3</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-32 h-52   p-2">
          <div className="flex flex-col justify-between">
            <div className="text-center rounded-lg mb-4">
              <a className="text-pink-600" href="#">
                <strong className="flex items-center justify-start gap-4 text-xl">
                  <i className="text-lg">
                    <Heart className="hover:fill-pink-600" />
                  </i>
                  <span className="text-3xl">976</span>
                </strong>
                <span className="text-sm text-gray-500">Become a fan</span>
              </a>
            </div>
            <div className="flex flex-col  rounded-lg">
              <i className="text-lg">
                <BatteryMedium className="text-gray-500" />
              </i>
              <strong className="text-green-700 text-sm block mt-1">
                <span className="text-2xl">5000</span>{" "}
                <span className="text-xl">mAh</span>
              </strong>
              <div className="text-gray-600 flex gap-2 items-center">
                <div className="flex items-center text-gray-500 text-sm mr-2">
                  <i className="">
                    <PlugZap2 className="w-4 h-4" />
                  </i>
                  45W
                </div>
                <div className="flex items-center text-gray-500 text-sm">
                  <BatteryCharging className="w-4 h-4" /> <i className=""></i>
                  15W
                </div>
              </div>
            </div>
          </div>
        </div>
      
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

export default Carousel3;
