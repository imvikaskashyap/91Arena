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

const specifications = {
  network: {
    technology: "GSM / HSPA / LTE / 5G",
    "2G bands": "GSM 850 / 900 / 1800 / 1900 - SIM 1 & SIM 2",
    "3G bands": "HSDPA 850 / 900 / 1700(AWS) / 1900 / 2100",
    "4G bands": "1, 2, 3, 4, 5, 7, 8, 12, 17, 20, 25, 26, 28, 38, 40, 41, 66",
    "5G bands": "1, 3, 5, 7, 8, 20, 28, 38, 40, 41, 66, 77, 78 SA/NSA/Sub6",
    Speed: "HSPA, LTE, 5G",
  },
  launch: {
    Announced: "2024, May 17",
    Status: "Coming soon. Exp. release 2024, June",
  },
  body: {
    Dimensions: "163.9 x 76.5 x 7.8 mm (6.45 x 3.01 x 0.31 in)",
    Weight: "180 g (6.35 oz)",
    Build: "Glass front, silicone polymer (eco leather) back, plastic frame",
    SIM: "Hybrid Dual SIM (Nano-SIM, dual stand-by)",
  },
  display: {
    Type: "Super AMOLED+, 120Hz, 1000 nits (HBM)",
    Size: "6.7 inches, 108.4 cm2 (~86.4% screen-to-body ratio)",
    Resolution: "1080 x 2400 pixels, 20:9 ratio (~393 ppi density)",
    "Always-on display": true,
  },
  platform: {
    OS: "Android 14, One UI 6.1",
    Chipset: "Qualcomm SM7450-AB Snapdragon 7 Gen 1 (4 nm)",
    CPU: "Octa-core (1x2.4 GHz Cortex-A710 & 3x2.36 GHz Cortex-A710 & 4x1.8 GHz Cortex-A510)",
    GPU: "Adreno 644",
  },
  memory: {
    "Card slot": "microSDXC (uses shared SIM slot)",
    Internal: "128GB 8GB RAM, 256GB 8GB RAM, 256GB 12GB RAM",
  },
  "main camera": {
    Triple:
      '50 MP, f/1.8, (wide), 1/1.56", 1.0µm, PDAF, OIS\n8 MP, f/2.2, 123˚ (ultrawide)\n2 MP, f/2.4, (macro)',
    Features: "LED flash, panorama, HDR",
    Video: "4K@30fps, 1080p@30/60fps, gyro-EIS, OIS",
  },
  "selfie camera": {
    Single: "50 MP, f/2.4, (wide)",
    Video: "4K@30fps, 1080p@30/60fps",
  },
  sound: {
    Loudspeaker: "Yes, with stereo speakers",
    "3.5mm jack": "No",
  },
  comms: {
    WLAN: "Wi-Fi 802.11 a/b/g/n/ac/6, dual-band, Wi-Fi Direct",
    Bluetooth: "5.2, A2DP, LE",
    Positioning: "GPS, GALILEO, GLONASS, BDS, QZSS",
    NFC: "Yes",
    Radio: "No",
    USB: "USB Type-C 2.0, OTG",
  },
  features: {
    Sensors:
      "Fingerprint (under display, optical), accelerometer, gyro, proximity, compass",
  },
  battery: {
    Type: "5000 mAh, non-removable",
    Charging: "45W wired",
  },
  misc: {
    Colors: "Black, Apricot",
    Models: "SM-E556B/DS, SM-E556B",
    SAR: "0.93 W/kg (head)",
  },
};
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

  const RR = R.toString(16).length === 1 ? `0${R.toString(16)}` : R.toString(16);
  const GG = G.toString(16).length === 1 ? `0${G.toString(16)}` : G.toString(16);
  const BB = B.toString(16).length === 1 ? `0${B.toString(16)}` : B.toString(16);

  return `#${RR}${GG}${BB}`;
};

const SpecificationPage = () => {
  const primaryColor = "#4A90E2"; // Replace this with the primary color extracted from the image
  const lightPrimaryColor = lightenColor(primaryColor, 50); // Lighten the primary color by 50%

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="w-full max-w-[800px] mx-auto">
        <div
          style={{
            background: `linear-gradient(-45deg, ${primaryColor} 0%, #ffffff 100%)`,
          }}
          className="border rounded-lg bg-white shadow-md flex flex-col justify-between"
        >
          <div className="w-full h-11  border-b ">
            <h1 className="px-4 text-2xl text-primary font-bold">Samsung Galaxy S24</h1>
          </div>
          <div className="flex items-center justify-between">
            <div className="">
              <Image
                src="/assets/images/google-pixel-8-pro.jpg"
                alt="Smartphone"
                className="mx-2 h-60 object-contain"
                width={160}
                height={212}
              />
            </div>

            <div className="flex flex-col gap-4 border-r py-2 ps-0 pe-3">
              <div>
                <li className="text-gray-700 flex items-center gap-2 mb-2">
                  <i className="text-gray-500">
                    <CalendarCheck className="w-4 h-4" />
                  </i>
                  <span className="saira-FontFamily text-[#2b2b2] text-sm tracking-wider">
                    Released 2024, January 24
                  </span>
                </li>
                <li className="text-gray-700 flex items-center text-sm gap-2 space-x-2 mb-2">
                  <i className="text-gray-500">
                    <Smartphone className="w-4 h-4" />
                  </i>
                  <span className="saira-FontFamily text-[#2b2b2] text-sm tracking-wider">
                    232g or 233g, 8.6mm thickness
                  </span>
                </li>
                <li className="text-gray-700 flex items-center text-sm gap-2 space-x-2 mb-2">
                  <i className="text-gray-500">
                    <ChevronsLeftRight className="w-4 h-4" />
                  </i>
                  <span className="saira-FontFamily text-[#2b2b2] text-sm tracking-wider">
                    Android 14, One UI 6.1
                  </span>
                </li>
                <li className="text-gray-700 flex items-center gap-2 text-sm space-x-2 mb-2">
                  <i className="text-gray-500">
                    <MemoryStick className="w-4 h-4" />
                  </i>
                  <span className="saira-FontFamily text-[#2b2b2] text-sm tracking-wider">
                    256GB/512GB/1TB storage, no card slot
                  </span>
                </li>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex flex-col items-start justify-between p-2 rounded-lg   ">
                  <i className="">
                    <Square />
                  </i>
                  <strong className="block text-pink-600 text-xl mt-1 tracking-wider">
                    <span>6.8</span>
                  </strong>
                  <p className="text-gray-600 text-sm tracking-wider">
                    1440x3120 pixels
                  </p>
                </div>
                <div className="flex flex-col items-start justify-between rounded-lg p-2   ">
                  <i className="text-lg">
                    <Aperture />
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

            <div className="w-1/6 flex flex-col justify-between items-center gap-4 border-r py-2 ps-0 pe-3">
              <div className="text-center rounded-lg mb-4">
                <strong className="text-pink-600 flex items-center gap-2 text-xl">
                  <i className="text-lg">
                    <TrendingUp />
                  </i>
                  <span className="text-3xl">57%</span>
                </strong>
                <span className="text-gray-600 text-sm">5,535,450 hits</span>
              </div>
              <div className="flex flex-col items-start justify-between rounded-lg">
                <i className="text-lg">
                  <Cpu />
                </i>
                <strong className="text-blue-600 text-sm block mt-1">
                  <span className="text-xl">12 GB</span> RAM
                </strong>
                <div className="text-gray-600">
                  <p className="text-sm">Snapdragon 8 Gen 3</p>
                </div>
              </div>
            </div>

            <div className="w-1/6 flex flex-col justify-between items-center gap-8 py-2 ps-0 pe-3">
              <div className="text-center p-4    rounded-lg mb-4">
                <a className="text-pink-600 hover:text-pink-700" href="#">
                  <strong className="flex items-center justify-start gap-4 text-xl">
                    <i className="text-lg">
                      <Heart />
                    </i>
                    <span className="text-3xl">976</span>
                  </strong>
                  <span className="text-sm">Become a fan</span>
                </a>
              </div>
              <div className="flex flex-col items-start justify-between p-2    rounded-lg">
                <i className="text-lg">
                  <BatteryMedium />
                </i>
                <strong className="text-green-600 text-sm block mt-1">
                  <span className="text-2xl">5000</span>{" "}
                  <span className="text-xl">mAh</span>
                </strong>
                <div className="text-gray-600 flex justify-between items-center">
                  <div className="flex items-center text-sm mr-2">
                    <i className="">
                      <PlugZap2 className="w-4 h-4" />
                    </i>
                    45W
                  </div>
                  <div className="flex items-center text-sm">
                    <BatteryCharging className="w-4 h-4" /> <i className=""></i>
                    15W
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex items-center justify-between h-11 border-t  py-2 ps-0 pe-3">
            <Button
              variant="secondary"
              className="w-36 rounded-none border-e bg-transparent"
            >
              <ImageDown className="mr-1 w-5 h-5" />
              Pictures
            </Button>
            <Button
              variant="secondary"
              className="w-36 rounded-none border-e hover:bg-gray-300 bg-transparent"
            >
              <Columns2 className="mr-1 w-5 h-5" />
              Compare
            </Button>
            <Button
              variant="secondary"
              className="w-36 rounded-none border-e hover:bg-gray-300 bg-transparent"
            >
              <Eye className="mr-1 w-5 h-5" />
              Reviews
            </Button>
            <Button
              variant="secondary"
              className="w-36 rounded-none border-e hover:bg-gray-300 bg-transparent"
            >
              <MessageSquareText className="-mb-2 mr-1 w-5 h-5" />
              Opinion
            </Button>
            <Button
              variant="secondary"
              className="w-36 rounded-none hover:bg-gray-300 bg-transparent"
            >
              <BadgeIndianRupee className="mr-1 w-5 h-5" />
              Prices
            </Button>
          </div>
        </div>

        <div className="mt-2 borderCss p-3">
          {Object.entries(specifications).map(([section, details]) => (
            <div key={section} className="mb-8">
              <h2 className="text-2xl font-bold mb-1">
                {section.toUpperCase()}
              </h2>
              <table className="table-auto w-full text-left">
                <tbody>
                  {Object.entries(details).map(([key, value]) => (
                    <tr key={key} className="border-b">
                      <th className="px-2 py-1 font-medium text-gray-800">
                        {key}
                      </th>
                      <td className="px-2 py-1 text-gray-600">
                        {typeof value === "boolean"
                          ? value
                            ? "Yes"
                            : "No"
                          : value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SpecificationPage;
