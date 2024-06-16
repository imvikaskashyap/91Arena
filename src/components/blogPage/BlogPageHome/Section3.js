import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

const Section3 = () => {
  return (
    <div className="bg-[#fff] mt-6">
    <div className="flex justify-between items-center p-4 pb-0">
    <div className="title-line mb-3 w-full">
      <div className="flex justify-between items-center">
      <span className="specTitle">Laptops</span>
        <Button className="underline hover:text-red-600" variant="link">
        View all
      </Button>
      </div>
        <h2 ></h2>
      </div>
     
    </div>
  
    <a
      href="#"
      className="flex flex-col  gap-8 dark:bg-[#fff]  p-5 relative"
    >
      <div className="w-full relative relative-container image-gradient">
        <Image
          alt=" "
          src="https://www.codingwebstudio.com/livepreview/Pro%20Blog%20Website/img/leptop%20post.jpg"
          width={322}
          height={185}
          className="object-cover w-full h-48"
        />
        <div className="text-container ">
          <span className="bg-[#fd3a13] text-white py-[3px] px-2 rounded-[2px] text-xs ">
            Smartphone
          </span>
          <p className="text-lg font-bold mt-2 ">
            11 Of Best Laptops Evaluated Based On Budget
          </p>
          <div className="text-base">by AUTHOR</div>
          <p className="text-sm text-gray-400">October 02, 2023</p>
        </div>
      </div>

      <div className="flex flex-col w-full gap-10">
        <div className="flex justify-between gap-4 image-gradient2">
          <Image
            alt=" "
            src="https://www.codingwebstudio.com/livepreview/Pro%20Blog%20Website/img/leptop%20post.jpg"
            width={120}
            height={90}
            className="object-cover  h-24 "
          />
          <div className="">
            <div className="text-sm font-bold mt-2 ">
              11 Of Best Laptops Evaluated Based On Budget Based On
              Budget
            </div>
            <p className="text-xs text-gray-400 mt-4">
              October 02, 2023
            </p>
          </div>
        </div>
        <div className="flex justify-between gap-4 image-gradient2">
          <Image
            alt=" "
            src="https://www.codingwebstudio.com/livepreview/Pro%20Blog%20Website/img/leptop%20post.jpg"
            width={120}
            height={100}
            className="object-cover  h-24 "
          />
          <div className="">
            <div className="text-sm font-bold mt-2 hover:text-red-600">
              11 Of Best Laptops Evaluated Based On Budget Based On
              Budget
            </div>
            <p className="text-xs text-gray-400 mt-4">
              October 02, 2023
            </p>
          </div>
        </div>

        <div className="flex justify-between gap-4 image-gradient2">
          <Image
            alt=" "
            src="https://www.codingwebstudio.com/livepreview/Pro%20Blog%20Website/img/leptop%20post.jpg"
            width={120}
            height={100}
            className="object-cover  h-24 "
          />
          <div className="">
            <div className="text-sm font-bold mt-2 hover:text-red-600">
              11 Of Best Laptops Evaluated Based On Budget Based On
              Budget
            </div>
            <p className="text-xs text-gray-400 mt-4">
              October 02, 2023
            </p>
          </div>
        </div>
      </div>
    </a>
  </div>
  )
}

export default Section3
