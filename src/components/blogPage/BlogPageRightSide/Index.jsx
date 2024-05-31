import React from 'react'
import TrendingNews from './TrendingNews'
import PopularPhones from './PopularPhones'
import NewsletterSubsribe from '@/components/newsletterSubsribe'

const BlogPageRightSide = () => {
  return (
    <div className='borderCss p-4 flex flex-col w-full lg:w-2/6 lg:max-w-full'>
    <TrendingNews title="Trending News"/>
    <PopularPhones/>
    <TrendingNews title="Latest Reviews"/>
    <NewsletterSubsribe/>
    
      
    </div>
  )
}

export default BlogPageRightSide
