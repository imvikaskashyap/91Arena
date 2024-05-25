import React from "react";
import { DarkMode } from "@/custom-components/Theme-Mode";
import Blog from "@/components/blog";
import Blog2 from "@/components/blog2";
import ScrollAreaHorizontalDemo from "@/components/carousel-scroll";
import { CarouselSpacing } from "@/components/carousel";
import PhoneFinderContainer from "@/components/allSmartphoneBrand";
import CarouselScroll from "@/components/carousel-scroll";
import { TabsDemo } from "@/components/allSmartphone&FInder";
import SmartphoneContainer from "@/components/smartphoneContainer";
import LatestMobiles from "@/components/latestMobiles";
import UpcomingMobiles from "@/components/upcomingMobiles";
import SwipeToSlide from "@/components/slider";
import TwoCarousel from "@/components/twoCarousel";
import RecentlyViewed from "@/components/recentlyViewed";
import NewMobiles from "@/components/newMobiles";
import BlogTemplate from "@/components/blogTemplate";
// import Carousel from "@/components/slider";
const page = () => {
  return (
    <div className="m-2 lg:m-8">
      <div className="flex flex-col gap-6 items-center justify-between my-8 lg:flex-row lg:h-[89vh]">
        <TabsDemo />
        {/* <PhoneFinderContainer/> */}
        <Blog />
      </div>
      <RecentlyViewed/>
      <LatestMobiles />
      <NewMobiles/>
      <UpcomingMobiles />
      {/* <Blog2 />
      <BlogTemplate/> */}
     
    </div>
  );
};

export default page;
