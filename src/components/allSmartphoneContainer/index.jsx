'use client'
import React from 'react';
import { useMediaQuery } from 'react-responsive';
import SpecificationHeader from '../Specification/SpecificationHeader';
import SpecificationHeader2 from '../Specification/SpecificationHeaderForMobileScreen';
import ReviewPage from '../review';
import SmartphonesGrid from './allSmartphone/SmartphonesGrid';


const AllSmartPhoneContainer = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <div className="container mt-8 px-0 w-full lg:w-[63%]">
      <div className="w-full ">
        {isMobile ? <SpecificationHeader2 /> : <SpecificationHeader />}
        {/* <SpecificationFooter /> */}
        <SmartphonesGrid/>
        <ReviewPage/>
      </div>
    </div>
  );
};

export default AllSmartPhoneContainer;
