import React from "react";
import Blog from "@/components/blog";
import LatestMobiles from "@/components/latestMobiles";
import UpcomingMobiles from "@/components/upcomingMobiles";
import RecentlyViewed from "@/components/recentlyViewedSmartphone";
import NewMobiles from "@/components/newMobiles";
import LatestNews from "@/components/latestNews";
import LatestHindiNews from "@/components/latestHindiNews";
import LatestReview from "@/components/latestReview";
import SmartPhoneTabs from "@/components/smartPhoneTabs";
const page = () => {
  return (
    <div className="m-2 lg:m-6">
      <div className="flex flex-col gap-6 items-center justify-between lg:flex-row lg:h-[89vh]">
      <SmartPhoneTabs/>
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
