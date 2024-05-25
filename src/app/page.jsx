import React from 'react'
import { DarkMode } from '@/custom-components/Theme-Mode'
import Blog from '@/components/blog'
import Blog2 from '@/components/blog2'
import ScrollAreaHorizontalDemo from '@/components/carousel-scroll'
import { CarouselSpacing } from '@/components/carousel'
import PhoneFinderContainer from '@/components/phoneFinderContainer'
import CarouselScroll from '@/components/carousel-scroll'
import { TabsDemo } from '@/components/phoneFinderContainer2'
import SmartphoneContainer from '@/components/smartphoneContainer'
import LatestMobiles from '@/components/latestMobiles'
import UpcomingMobiles from '@/components/upcomingMobiles'
const page = () => {
  return (
    <div className='lg:m-8'>
    <div className='flex flex-col items-center justify-between my-8 lg:flex-row lg:h-[89vh]'>
    <TabsDemo/>
    {/* <PhoneFinderContainer/> */}
      <Blog/>

    </div>
    <LatestMobiles/>
    <UpcomingMobiles/>
      <Blog2/>
      <CarouselScroll/>
      <CarouselSpacing/>
    </div>
  )
}

export default page
