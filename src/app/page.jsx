import React from "react";
import Blog from "@/components/blog";
import TabsDemo  from "@/components/allSmartphone&FInder";
import LatestMobiles from "@/components/latestMobiles";
import UpcomingMobiles from "@/components/upcomingMobiles";
import RecentlyViewed from "@/components/recentlyViewed";
import NewMobiles from "@/components/newMobiles";
import LatestNews from "@/components/latestNews";
import LatestHindiNews from "@/components/latestHindiNews";
import LatestReview from "@/components/latestReview";
const page = () => {
  return (
    <div className="m-2 lg:m-8">
      <div className="flex flex-col gap-6 items-center justify-between my-8 lg:flex-row lg:h-[89vh]">
        <TabsDemo />
        <Blog />
      </div>
      <RecentlyViewed/>
      <LatestMobiles />
      <NewMobiles/>
      <UpcomingMobiles />
    <LatestNews/>
    <LatestHindiNews/>
    <LatestReview/>
     
    </div>
  );
};

export default page;
