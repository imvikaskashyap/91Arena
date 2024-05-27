"use client";
import React from "react";
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
import Slider from "react-slick";
import Carousel3 from "../SpecificationSlider/slider";

const lightenColor = (color, percent) => {
  let R = parseInt(color.substring(1, 3), 16);
  let G = parseInt(color.substring(3, 5), 16);
  let B = parseInt(color.substring(5, 7), 16);

  R = parseInt((R * (100 + percent)) / 100);
  G = parseInt((G * (100 + percent)) / 100);
  B = parseInt((B * (100 + percent)) / 100);

  R = R < 255 ? R : 255;
  G = G < 255 ? G : 255;
  B = B < 255 ? B : 255;

  const RR =
    R.toString(16).length === 1 ? `0${R.toString(16)}` : R.toString(16);
  const GG =
    G.toString(16).length === 1 ? `0${G.toString(16)}` : G.toString(16);
  const BB =
    B.toString(16).length === 1 ? `0${B.toString(16)}` : B.toString(16);

  return `#${RR}${GG}${BB}`;
};

const SpecificationHeader2 = () => {
  const primaryColor = "#4A90E2";
  const lightPrimaryColor = lightenColor(primaryColor, 50);

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div
      style={{
        background: `linear-gradient(-45deg, ${lightPrimaryColor} 0%, #ffffff 100%)`,
      }}
      className="border rounded-lg bg-white shadow-md flex flex-col justify-between md:flex-row"
    >
      <div className="w-full">
        <h1 className="text-2xl text-white font-bold bg-gradient-to-r from-blue-500 to-purple-500 p-2 rounded-t-md md:rounded-none">
          Samsung Galaxy S24
        </h1>
        <div className="flex justify-between items-center">
          <div className="w-1/2 flex justify-center mt-4">
            <Image
              src="/assets/images/google-pixel-8-pro.jpg"
              alt="Smartphone"
              className="h-60 object-contain"
              width={160}
              height={212}
            />
          </div>
          <div className="w-1/2">
            <Carousel3 />
          </div>
        </div>
      </div>
      <div className="w-full flex items-center justify-between h-10 border-t group">
        <Button
          variant="secondary"
          className="w-1/5  rounded-none border-e transition-all bg-transparent group-hover:bg-[primaryColor]"
        >
          <ImageDown className="mr-1 w-5 h-5" />
          Pictures
        </Button>
        <Button
          variant="secondary"
          className="w-1/5  rounded-none border-e transition-all bg-transparent group-hover:bg-[primaryColor]"
        >
          <Columns2 className="mr-1 w-5 h-5" />
          Compare
        </Button>
        <Button
          variant="secondary"
          className="w-1/5  rounded-none border-e transition-all bg-transparent group-hover:bg-[primaryColor]"
        >
          <Eye className="mr-1 w-5 h-5" />
          Reviews
        </Button>
        <Button
        variant="secondary"
        className="w-1/5  rounded-none border-e transition-all bg-transparent group-hover:bg-[primaryColor]"
      >
        <MessageSquareText className="-mb-2 mr-1 w-5 h-5" />
        Opinion
      </Button>
      <Button
        variant="secondary"
        className="w-1/5 rounded-none transition-all bg-transparent group-hover:bg-[primaryColor]"
      >
        <BadgeIndianRupee className="mr-1 w-5 h-5" />
        Prices
      </Button>
      </div>
    </div>
  );
};

export default SpecificationHeader2;
