import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const laptops = [
  {
    title: "11 Of Best Laptops Evaluated Based On Budget",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia voluptatum aliquam natus error, ipsa quasi.",
    date: "October 02, 2023",
    imgSrc: "https://www.codingwebstudio.com/livepreview/Pro%20Blog%20Website/img/leptop%20post.jpg"
  },
  {
    title: "11 Of Best Laptops Evaluated Based On Budget",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia voluptatum aliquam natus error, ipsa quasi.",
    date: "October 02, 2023",
    imgSrc: "https://www.codingwebstudio.com/livepreview/Pro%20Blog%20Website/img/leptop%20post.jpg"
  },
  {
    title: "11 Of Best Laptops Evaluated Based On Budget",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia voluptatum aliquam natus error, ipsa quasi.",
    date: "October 02, 2023",
    imgSrc: "https://www.codingwebstudio.com/livepreview/Pro%20Blog%20Website/img/leptop%20post.jpg"
  },
  {
    title: "11 Of Best Laptops Evaluated Based On Budget",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia voluptatum aliquam natus error, ipsa quasi.",
    date: "October 02, 2023",
    imgSrc: "https://www.codingwebstudio.com/livepreview/Pro%20Blog%20Website/img/leptop%20post.jpg"
  },
  {
    title: "11 Of Best Laptops Evaluated Based On Budget",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia voluptatum aliquam natus error, ipsa quasi.",
    date: "October 02, 2023",
    imgSrc: "https://www.codingwebstudio.com/livepreview/Pro%20Blog%20Website/img/leptop%20post.jpg"
  },
  // Add 5 more objects with the same structure if you want different data for each
];

const Section4 = () => {
  return (
    <div className="bg-[#fff] mt-6">
      <div className="flex justify-between items-center p-4 pb-0">
        <div className="title-line mb-3 w-full">
          <div className="flex justify-between items-center">
            <span className="specTitle">Laptops</span>
            <Button className="underline hover:text-red-600" variant="link">
              View all
            </Button>
          </div>
          <h2></h2>
        </div>
      </div>

      <div className="flex flex-col gap-8 dark:bg-[#fff] p-5 relative">
        <div className="flex flex-col w-full gap-10">
          {laptops.map((laptop, index) => (
            <div key={index} className="flex flex-col lg:flex-row justify-between gap-4 image-gradient2 cursor-pointer">
              <Image
                alt=" "
                src={laptop.imgSrc}
                width={274}
                height={170}
                className="object-cover w-full lg:w-72 h-44"
              />
              <div className="w-full lg:w-2/3">
                <div className="text-xl font-bold mt-2">{laptop.title}</div>
                <p className="text-xs mt-3">{laptop.description}</p>
                <p className="text-xs text-gray-400 mt-3">{laptop.date}</p>
              </div>
            </div>
          ))}
          <Button variant="outline">Load More</Button>
        </div>
      </div>
    </div>
  );
};

export default Section4;
