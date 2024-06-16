import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const Section2 = () => {
  return (
    <div className="bg-[#fff] mt-6">
      <div className="flex justify-between items-center p-4 pb-0">
        <div className="title-line mb-3 w-full">
          <div className="flex justify-between items-center">
            <span className="specTitle">Mobiles</span>
            <Button className="underline hover:text-red-600" variant="link">
              View all
            </Button>
          </div>
          <h2></h2>
        </div>
      </div>

      <a href="#" className="dark:bg-[#fff] p-5 pt-0">
        <div className="flex flex-wrap justify-between items-center gap-8 p-5 pt-0">
          {Array(6)
            .fill(0)
            .map((_, index) => (
              <div
                key={index}
                className="relative image-gradient2 w-full md:w-52"
              >
                <Image
                  alt=" "
                  src="https://www.codingwebstudio.com/livepreview/Pro%20Blog%20Website/img/leptop%20post.jpg"
                  width={220}
                  height={140}
                  className="object-cover w-full md:w-52 h-[231px] md:h-36"
                />
                <span className="absolute bottom-[75px] bg-[#fd3a13] text-white py-[3px] px-2 rounded-[2px] text-xs">
                  Smartphone
                </span>
                <div className="w-full md:w-48 mt-4">
                  <div className="text-base font-bold">
                    11 Of Best Laptops Evaluated Based Budget
                  </div>
                  <p className="text-xs text-gray-400 mt-2">October 02, 2023</p>
                </div>
              </div>
            ))}
        </div>
      </a>
    </div>
  );
};

export default Section2;
