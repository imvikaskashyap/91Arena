import React from "react";
import Blog from "@/components/Blog";
import LatestMobiles from "@/components/LatestMobiles";
import UpcomingMobiles from "@/components/UpcomingMobiles";
import RecentlyViewed from "@/components/RecentlyViewed";
import NewMobiles from "@/components/NewMobiles";
import LatestNews from "@/components/LatestNews";
import LatestHindiNews from "@/components/LatestHindiNews";
import LatestReview from "@/components/LatestReview";
import TabsDemo from "@/components/TabsDemo";
const page = () => {
  return (
    <div className="m-2 lg:m-8">
      <div className="flex flex-col gap-6 items-center justify-between my-8 lg:flex-row lg:h-[89vh]">
      <TabsDemo/>
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
