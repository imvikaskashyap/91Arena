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

const SpecificationHeader = () => {
  const primaryColor = "#4A90E2";
  const lightPrimaryColor = lightenColor(primaryColor, 50);

  return (
    <div>
      <div
        style={{
          background: `linear-gradient(-45deg, ${lightPrimaryColor} 0%, #ffffff 100%)`,
        }}
        className="border rounded-lg bg-white shadow-md flex flex-col justify-between"
      >
        <div className="w-full h-11 bg-gradient-to-r from-blue-500 to-purple-500 border-b">
          <h1 className="px-4 text-2xl text-white font-bold">
            Samsung Galaxy S24
          </h1>
        </div>
        <div className="flex justify-between">
          <div className="w-1/4">
            <Image
              src="/assets/images/google-pixel-8-pro.jpg"
              alt="Smartphone"
              className="mx-auto h-60 object-contain"
              width={160}
              height={212}
            />
          </div>

          <div className="flex-1 flex flex-col gap-4 py-2 ps-0 pe-3">
            <div>
              <li className="text-gray-700 flex items-center gap-2 mb-2">
                <i className="text-amber-500">
                  <CalendarCheck className="w-4 h-4" />
                </i>
                <span className="text-sm tracking-wider">
                  Released 2024, January 24
                </span>
              </li>
              <li className="text-gray-700 flex items-center text-sm gap-2 mb-2">
                <i className="text-amber-500">
                  <Smartphone className="w-4 h-4" />
                </i>
                <span className="text-sm tracking-wider">
                  232g or 233g, 8.6mm thickness
                </span>
              </li>
              <li className="text-gray-700 flex items-center text-sm gap-2 mb-2">
                <i className="text-amber-500">
                  <ChevronsLeftRight className="w-4 h-4" />
                </i>
                <span className="text-sm tracking-wider">
                  Android 14, One UI 6.1
                </span>
              </li>
              <li className="text-gray-700 flex items-center gap-2 text-sm mb-2">
                <i className="text-amber-500">
                  <MemoryStick className="w-4 h-4" />
                </i>
                <span className="text-sm tracking-wider">
                  256GB/512GB/1TB storage, no card slot
                </span>
              </li>
            </div>

            <div className="flex items-center justify-between">
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
                <div className="text-gray-600 text-sm tracking-wider">
                  4320p
                </div>
              </div>
            </div>
          </div>

          <div className="w-1/5 flex flex-col justify-between items-center border-x py-4 px-3">
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

          <div className="w-1/6 flex flex-col justify-between items-center py-4 ps-0 pe-3">
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
            <div className="flex flex-col justify-between rounded-lg">
              <i className="text-lg">
                <BatteryMedium className="text-gray-500" />
              </i>
              <strong className="text-green-700 text-sm block mt-1">
                <span className="text-2xl">5000</span>{" "}
                <span className="text-xl">mAh</span>
              </strong>
              <div className="text-gray-600 flex justify-between items-center">
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
        <div className="w-full flex items-center justify-between h-10 border-t group">
          <Button
            variant="secondary"
            className="w-full rounded-none border-e transition-all bg-transparent group-hover:bg-[primaryColor]"
          >
            <ImageDown className="mr-1 w-5 h-5" />
            Pictures
          </Button>
          <Button
            variant="secondary"
            className="w-full rounded-none border-e transition-all bg-transparent  group-hover:bg-[primaryColor]"
          >
            <Columns2 className="mr-1 w-5 h-5" />
            Compare
          </Button>
          <Button
            variant="secondary"
            className="w-full rounded-none border-e transition-all bg-transparent group-hover:bg-[primaryColor]"
          >
            <Eye className="mr-1 w-5 h-5" />
            Reviews
          </Button>
          <Button
            variant="secondary"
            className="w-full rounded-none border-e transition-all bg-transparent group-hover:bg-[primaryColor]"
          >
            <MessageSquareText className="-mb-2 mr-1 w-5 h-5" />
            Opinion
          </Button>
          <Button
            variant="secondary"
            className="w-full rounded-none transition-all bg-transparent group-hover:bg-[primaryColor]"
          >
            <BadgeIndianRupee className="mr-1 w-5 h-5" />
            Prices
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SpecificationHeader;
