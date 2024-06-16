"use client";
import Image from "next/image";
import React from "react";
import BlogPageRightSide from "./BlogPageSidebar/Index";
import "./index.css";
import { Button } from "../ui/button";
import Section1 from "./BlogPageHome/Section1";
import Section2 from "./BlogPageHome/Section2";
import Section3 from "./BlogPageHome/Section3";
import Section4 from "./BlogPageHome/Section4";

const BlogPage = () => {
  return (
    <div className="mt-10 lg:mx-20">
      <section className="dark:bg-white dark:text-gray-800">
        <div className="container p-0">
          <a
            rel="noopener noreferrer"
            href="#"
            className="flex flex-col lg:flex-row gap-1 dark:bg-[#fff] bg-[#fff] p-5 relative"
          >
            <div className="w-full lg:w-1/2 relative relative-container image-gradient">
              <Image
                alt=" "
                src="https://www.codingwebstudio.com/livepreview/Pro%20Blog%20Website/img/leptop%20post.jpg"
                width={400}
                height={256}
                className="object-cover w-full h-64 rounded sm:h-96"
              />
              <div className="text-container">
                <span className="bg-[#fd3a13] text-white py-[3px] px-2 rounded-[2px] text-xs ">
                  Smartphone
                </span>
                <div className="text-lg font-bold mt-2">
                  11 Of Best Laptops Evaluated Based On Budget
                </div>
                <div className="text-base">by AUTHOR</div>
                <p className="text-sm text-gray-400">October 02, 2023</p>
              </div>
            </div>

            <div className="flex flex-col w-full lg:w-1/2 gap-1">
              <div className="relative relative-container image-gradient">
                <Image
                  alt=" "
                  src="https://www.codingwebstudio.com/livepreview/Pro%20Blog%20Website/img/leptop%20post.jpg"
                  width={400}
                  height={192}
                  className="object-cover w-full h-48 rounded "
                />
                <div className="text-container">
                  <span className="bg-[#fd3a13] text-white py-[3px] px-2 rounded-[2px] text-xs ">
                    Smartphone
                  </span>
                  <div className="text-lg font-bold mt-2">
                    11 Of Best Laptops Evaluated Based On Budget
                  </div>
                  <div className="text-base">by AUTHOR</div>
                  <p className="text-sm text-gray-400">October 02, 2023</p>
                </div>
              </div>

              <div className="flex gap-1">
                <div className="relative w-1/2 relative-container  image-gradient">
                  <Image
                    alt=" "
                    src="https://www.codingwebstudio.com/livepreview/Pro%20Blog%20Website/img/leptop%20post.jpg"
                    width={200}
                    height={200}
                    className="object-cover w-full h-48 rounded  image-gradient"
                  />
                  <div className="text-container">
                    <span className="bg-[#fd3a13] text-white py-[3px] px-2 rounded-[2px] text-xs ">
                      Smartphone
                    </span>
                    <div className="text-sm font-bold mt-2">
                      11 Of Best Laptops Evaluated Based On Budget
                    </div>
                    <div className="text-xs">by AUTHOR</div>
                    <p className="text-xs text-gray-400">October 02, 2023</p>
                  </div>
                </div>

                <div className="relative w-1/2 relative-container image-gradient">
                  <Image
                    alt=" "
                    src="https://www.codingwebstudio.com/livepreview/Pro%20Blog%20Website/img/leptop%20post.jpg"
                    width={200}
                    height={200}
                    className="object-cover w-full h-48 rounded  image-gradient"
                  />
                  <div className="text-container">
                    <span className="bg-[#fd3a13] text-white py-[3px] px-2 rounded-[2px] text-xs ">
                      Smartphone
                    </span>
                    <div className="text-sm font-bold mt-2">
                      11 Of Best Laptops Evaluated Based On Budget
                    </div>
                    <div className="text-xs">by AUTHOR</div>
                    <p className="text-xs text-gray-400">October 02, 2023</p>
                  </div>
                </div>
              </div>
            </div>
          </a>

          <div className="flex flex-col lg:flex-row w-full gap-6">
          <div className="w-full lg:w-[67%]">
          <Section1/>
          <Section2/>
         <div className="flex flex-col lg:flex-row justify-between gap-10">
         <Section3/>
         <Section3/>
         </div>
         <Section4/>

          </div>
            <div className="w-full lg:w-[30%]"> 
            <BlogPageRightSide />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
