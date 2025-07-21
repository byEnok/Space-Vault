import React from 'react'
import TwinkleStarBG from '@/globalComponents/core/TwinkleStarBG'
// import Navbar from '@/features/Navbar/Navbar'
import SideNavbar from '@/features/Navbar/SideNavbar'
import Search from '@/app/Submit/components/AddRedditData'
import ImageTags from '@/app/Submit/components/ImageTags'

function page() {
  return (
    <div className='relative'>
      <TwinkleStarBG />
      <SideNavbar />
      <div className='flex '>
        <div className='w-1/2'>
          <Search />
        </div>
        <div className='w-1/2'>
          <ImageTags />
        </div>
      </div>
    </div>
  )
}

export default page
