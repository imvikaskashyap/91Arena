import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import React from "react";

const FollowUs = () => {
  return (
    <div className="bg-[#fff]">
      <div className="flex justify-between items-center p-4 pb-0">
        <div className="title-line mb-3 w-full">
          <div className="flex justify-between items-center">
            <span className="specTitle">Laptops</span>
          </div>
          <h2></h2>
        </div>
      </div>
      <div className="flex flex-col justify-center gap-4 mt-8 p-4 pt-0">
        <div className="flex justify-between gap-3">
          <a
            href="#"
            className="flex items-center justify-center bg-gradient-to-r from-pink-500 to-purple-500 text-white py-2 px-4 rounded-lg w-40"
          >
            <Instagram className="mr-2" />
            Instagram
          </a>
          <a
            href="#"
            className="flex items-center justify-center bg-blue-600 text-white py-2 px-4 rounded-lg w-40"
          >
            <Facebook className="mr-2" />
            Facebook
          </a>
        </div>
        <div className="flex justify-between gap-3">
          <a
            href="#"
            className="flex items-center justify-center bg-red-600 text-white py-2 px-4 rounded-lg w-40"
          >
            <Youtube className="mr-2" />
            YouTube
          </a>
          <a
            href="#"
            className="flex items-center justify-center bg-blue-500 text-white py-2 px-4 rounded-lg w-40"
          >
            <Twitter className="mr-2" />
            Twitter
          </a>
        </div>
      </div>
    </div>
  );
};

export default FollowUs;
