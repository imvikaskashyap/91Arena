import React from 'react'
import TrendingNews from './TrendingNews'
import PopularPhones from './PopularPhones'
import NewsletterSubsribe from '@/components/newsletterSubsribe'

const BlogPageRightSide = () => {
  return (
    <div className='flex flex-col w-full lg:w-2/6 lg:max-w-full h-auto'>
    <TrendingNews title="Trending News"/>
    <PopularPhones/>
    <TrendingNews title="Latest Reviews"/>
    <NewsletterSubsribe/>
    
      
    </div>
  )
}

export default BlogPageRightSide
