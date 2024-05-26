'use client'
import React, { useState, useEffect } from 'react';
import { CarouselSpacing } from '../Carousel';
import CarouselScroll from '../Carousel-scroll';
import { Button } from "@/components/ui/button";

const TwoCarousel = ({title}) => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 1024); 
    };

    handleResize(); 
    window.addEventListener('resize', handleResize); 

    return () => {
      window.removeEventListener('resize', handleResize); 
    };
  }, []);

  return (
    <div className="w-full p-4 borderCss my-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">{title}</h2>
        <Button className="underline" variant="link">View all</Button>
      </div>
      {isSmallScreen ? <CarouselScroll /> : <CarouselSpacing />}
    </div>
  );
};

export default TwoCarousel;
