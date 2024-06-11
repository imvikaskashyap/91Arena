"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import SmartphoneCard from "../smartphoneContainer/SmartphoneCard";

const comparisonFields = {
  summary: [
    "Performance",
    "Display",
    "Rear Camera",
    "Front Camera",
    "Battery",
    "Storage",
    "Expert Rating",
    "Benchmarks",
    "Compare Prices",
  ],
  general: ["Launch Date", "Operating System", "Custom UI"],
  performance: [
    "Chipset",
    "CPU",
    "Architecture",
    "Graphics",
    "RAM",
    "RAM Type",
  ],
  display: [
    "Display Type",
    "Screen Size",
    "Resolution",
    "Aspect Ratio",
    "Pixel Density",
    "Screen to Body Ratio (calculated)",
    "Screen Protection",
    "Bezel-less display",
    "Touch Screen",
    "Peak Brightness",
    "HDR 10 / HDR+ support",
    "Refresh Rate",
    "Screen to Body Ratio (claimed by the brand)",
  ],
  design: ["Dimensions", "Weight", "Build Material", "Colours", "Waterproof", "Ruggedness"],
 
  mainCamera:["Camera Setup","Resolution","Autofocus","OIS", "Flash", "Image Resolution", "Settings", "Shooting Modes", "Camera Features", "Video Recording", "Video Recording Features", ],
  frontCamera:["Camera Setup", "Resolution", "Autofocus", "Flash","Camera Features","Video Recording"],
  battery:["Capacity","Type","Removable","Wireless Charging", "Quick Charging","USB Type-C", ],
  storage:["Internal Memory","Expandable Memory","Storage Type" ],
  networkAndConnectivity:["SIM Slot(s)","SIM Size","Network Support","VoLTE" ,"SIM 1","SIM 2","SAR Value","Wi-Fi","Wi-Fi Features","Bluetooth","GPS","NFC","USB Connectivity"],
  multimedia:["FM Radio","Stereo Speakers","Loudspeaker","Audio Jack", "Audio Features", ],
  sensors:["Fingerprint Sensor","Fingerprint Sensor Position","Fingerprint Sensor Type","Other Sensors",  ],
  priceList:["Amazon.in",  ],

};

const ComparePage = () => {
  const [phones, setPhones] = useState([{}, {}, {}]);
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const renderComparisonRows = (category, fields) => {
    return (
      <>
        <tr className="bg-gray-100">
          <th colSpan={5} className="py-2 px-4 text-left text-lg font-semibold">
            {category}
          </th>
        </tr>
        {fields.map((field) => (
          <tr key={field} className="border-t">
            <td className="py-2 px-4 font-medium w-1/4 lg:text-base">{field}</td>
            {phones.map((phone, index) => (
              <td key={index} className="py-2 px-4">
                {phone[field] || "N/A"}
              </td>
            ))}
          </tr>
        ))}
      </>
    );
  };

  return (
    <div className="container mx-auto p-4 w-full lg:w-[80%]">
      <h1 className="text-2xl font-bold mb-4">Mobile Comparison</h1>
      <div
        className={`min-w-full bg-white border rounded-lg overflow-hidden ${
          isFixed ? "fixed top-0 left-0 w-[80%] shadow-lg" : ""
        }`}
      >
        <table className="min-w-full">
          <thead>
            <tr>
              <th className="w-1/6 p-4 bg-white">Compare by</th>
              {phones.map((phone, index) => (
                <th key={index} className="w-1/5 p-4 bg-white">
                  <div className="flex flex-col items-center">
                    <Image
                      src={
                        phone.image ||
                        "https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=300&q=80"
                      }
                      alt={`Phone ${index + 1}`}
                      width={90}
                      height={200}
                      className="w-full h-32 sm:h-48 object-contain"
                    />
                    <div className="flex flex-col items-center justify-center p-3">
                      <h3 className="text-sm sm:text-lg font-semibold">
                        {phones.name}
                      </h3>
                      <p className="text-gray-500 text-xs sm:text-sm">
                        {phones.price}
                      </p>
                    </div>
                  </div>
                </th>
              ))}
            </tr>
          </thead>
        </table>
      </div>
      <table className="min-w-full bg-white border rounded-lg overflow-hidden">
        <tbody>
          {renderComparisonRows("Summary", comparisonFields.summary)}
          {renderComparisonRows("General", comparisonFields.general)}
          {renderComparisonRows("Performance", comparisonFields.performance)}
          {renderComparisonRows("Display", comparisonFields.display)}
          {renderComparisonRows("Design", comparisonFields.design)}
          {renderComparisonRows("Front Camera", comparisonFields.frontCamera)}
          {renderComparisonRows("Battery", comparisonFields.battery)}
          {renderComparisonRows("Storage", comparisonFields.storage)}
          {renderComparisonRows("Network & Connectivity", comparisonFields.networkAndConnectivity)}
          {renderComparisonRows("Multimedia", comparisonFields.multimedia)}
          {renderComparisonRows("Sensors", comparisonFields.sensors)}
          {renderComparisonRows("PriceList", comparisonFields.priceList)}
        </tbody>
      </table>
    </div>
  );
};

export default ComparePage;
