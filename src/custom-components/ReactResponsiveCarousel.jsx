'use client'
import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';

const ReactResponsiveCarousel = () => {
  return (
    <div className='my-4'>
    <Carousel  showArrows={true} >
    <div>
        <Image src="https://flowbite.s3.amazonaws.com/typography-plugin/typography-image-1.png" alt='img' width={400} height={400} className="w-full" />
    </div>
    <div>
        <Image src="https://flowbite.s3.amazonaws.com/typography-plugin/typography-image-1.png" alt='img' width={400} height={400} className="w-full" />
    </div>
    <div>
        <Image src="https://flowbite.s3.amazonaws.com/typography-plugin/typography-image-1.png" alt='img' width={400} height={400} className="w-full" />
    </div>
</Carousel>
</div>
  )
}

export default ReactResponsiveCarousel
