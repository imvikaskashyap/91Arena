'use client'
import React from 'react';
import { useMediaQuery } from 'react-responsive';
import SpecificationHeader2 from './SpecificationHeaderForMobileScreen';
import SpecificationFooter from './SpecificationFooter';
import SpecificationHeader from './SpecificationHeader';
import ReviewPage from '../review';

const Specification = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <div className="container px-0 w-full lg:w-[63%]">
      <div className="w-full ">
        {isMobile ? <SpecificationHeader2 /> : <SpecificationHeader />}
        {/* <SpecificationHeader /> */}
        <SpecificationFooter />
        <ReviewPage/>
      </div>
    </div>
  );
};

export default Specification;
