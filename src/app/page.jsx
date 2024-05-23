import React from 'react'
import { DarkMode } from '@/custom-components/Theme-Mode'
import Blog from '@/components/blog/page'
import Blog2 from '@/components/blog2/page'
import ScrollAreaHorizontalDemo from '@/components/carousel-scroll/page'
import { CarouselSpacing } from '@/components/carousel/page'
import PhoneFinderContainer from '@/components/phoneFinderContainer/page'
import CarouselScroll from '@/components/carousel-scroll/page'
import { TabsDemo } from '@/components/phoneFinderContainer2/page'
const page = () => {
  return (
    <div className='m-8'>
    <div className='flex flex-col items-center justify-between my-8 lg:flex-row'>
    <TabsDemo/>
    {/* <PhoneFinderContainer/> */}
      <Blog/>

    </div>
      <Blog2/>
      <CarouselScroll/>
      <CarouselSpacing/>
    </div>
  )
}

export default page
