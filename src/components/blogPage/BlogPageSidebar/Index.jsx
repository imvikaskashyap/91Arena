import React from 'react'
import TrendingNews from './TrendingNews'
import PopularPhones from './PopularPhones'
import NewsletterSubsribe from '@/components/newsletterSubsribe'
import FollowUs from './FollowUs'
import Section3 from '../BlogPageHome/Section3'
import Section2 from '../BlogPageHome/Section2'

const BlogPageRightSide = () => {
  return (
    <div className='flex flex-col  h-auto  mt-6'>
    <FollowUs/>
    <Section3/>
    {/* <Section2/> */}
    <TrendingNews title="Trending News"/>
    <PopularPhones/>
    <TrendingNews title="Latest Reviews"/>
    <NewsletterSubsribe/>
    
      
    </div>
  )
}

export default BlogPageRightSide
