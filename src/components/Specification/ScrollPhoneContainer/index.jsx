import CarouselScroll from '@/components/carousel-scroll'
import { Button } from '@/components/ui/button'
import React from 'react'

const ScrollPhoneContainer = ({title}) => {
  return (
    <div className="w-full p-4 borderCss my-4">
    <div className="flex justify-between items-center mb-4">
      <h2 className="text-xl font-bold">{title}</h2>
      <Button className="underline" variant="link">View all</Button>
    </div>
    <CarouselScroll /> 
  </div>
  )
}

export default ScrollPhoneContainer
