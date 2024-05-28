'use client'
import Specification from "@/components/Specification";
import React, { useEffect, useState } from "react";
import ScrollPhoneContainer from "@/components/Specification/ScrollPhoneContainer";
import Sidebar from "@/components/sideBar";

const SpecificationPage = () => {

  const [isSmallScreen, setIsSmallScreen] = useState(false)
  const [isLargeScreen, setIsLargeScreen] = useState(false)

  useEffect(()=>{
    const handleResize = ()=>{
      setIsSmallScreen(window.innerWidth < 1024);
    }
    const handleResizeForLarge = ()=>{
      setIsLargeScreen(window.innerWidth > 1024)
    }
window.addEventListener("resize", handleResize)

    handleResize();

    return ()=>{
      window.removeEventListener('resize', handleResize); 

    }

  }, [isSmallScreen])

  return (
    <div className="lg:flex justify-center lg:mx-6 mt-10">
      {isSmallScreen ? "" : <Sidebar/>}
      <Specification />
      {isSmallScreen ?  <div>
        <ScrollPhoneContainer title="Related Phones" />
        <ScrollPhoneContainer title="More From {Brand}" />
      </div> : ""}
     
    </div>
  );
};

export default SpecificationPage;
