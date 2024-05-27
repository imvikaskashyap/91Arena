'use client'
import React from 'react';
import { useMediaQuery } from 'react-responsive';
import SpecificationHeader2 from './SpecificationHeaderForMobileScreen';
import SpecificationFooter from './SpecificationFooter';
import SpecificationHeader from './SpecificationHeader';

const Specification = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <div className="container mx-auto py-4 px-4">
      <div className="w-full max-w-[800px] mx-auto">
        {isMobile ? <SpecificationHeader2 /> : <SpecificationHeader />}
        <SpecificationFooter />
      </div>
    </div>
  );
};

export default Specification;
