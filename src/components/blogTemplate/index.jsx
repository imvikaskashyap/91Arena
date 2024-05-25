import Image from 'next/image'
import React from 'react'
import Blog2 from '../blog2'
import { Button } from '../ui/button'

const BlogTemplate = () => {
  return (

    <div className='p-4 borderCss'>
          <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Latest News</h2>
        <Button className="underline" variant="link">View all</Button>
      </div>
    
    <div className='flex flex-col gap-6 items-center justify-between lg:flex-row '>
      <div className="max-w-sm w-1/3 flex-col  items-center justify-center lg:max-w-full lg:flex borderCss">
        <div
          className="h-52 lg:h-56 lg:w-96 p-2 sm:w-full bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden ">
       <Image
                className="w-full rounded-lg"
                src="https://images.unsplash.com/photo-1611625618313-68b87aaa0626?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80"
                alt="Image Description"
                // layout="fill"
                width={350}
                height={290}
              />
        </div>
        <div className="w-full p-4 flex flex-col justify-between leading-normal">
          <div className="mb-4">
            <p className="text-sm text-gray-600 flex items-center">
              <svg
                className="fill-current text-gray-500 w-3 h-3 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
              </svg>
              Members only
            </p>
            <div className="text-gray-900 font-bold text-base mb-1">
              Can coffee make you a better developer?
            </div>
            <p className="text-gray-700  text-sm">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
            </p>
          </div>
          <div className="flex items-center">
            <Image
              className="w-10 h-10 rounded-full mr-4"
              src="https://images.unsplash.com/photo-1669837401587-f9a4cfe3126e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
              alt="Avatar of Jonathan Reinink"
              width={40}
              height={40}
            />
            <div className="text-sm">
              <p className="text-gray-900 leading-none">Jonathan Reinink</p>
              <p className="text-gray-600">Aug 18</p>
            </div>
          </div>
        </div>
      </div>
<div className='flex flex-col gap-2 items-center justify-between'>
    
<Blog2/>
      <Blog2/>
      <Blog2/>
</div>

    </div>

    </div>
  )
}

export default BlogTemplate
