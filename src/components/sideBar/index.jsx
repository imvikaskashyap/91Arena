'use client'
import React, { useEffect, useState } from 'react'
import SmartPhoneTabs from '../smartPhoneTabs'
import SidebarPart2 from './SidebarPart2'

const Sidebar = () => {

  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth > 1024); 
    };

    handleResize(); 
    window.addEventListener('resize', handleResize); 

    return () => {
      window.removeEventListener('resize', handleResize); 
    };
  }, [isSmallScreen]);

  return (
    <div className='w-full lg:w-[34%]'>
     {isSmallScreen ?  <SmartPhoneTabs/> : ""}
      <SidebarPart2 title="Related Phones"/>
    </div>
  )
}

export default Sidebar
