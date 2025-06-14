import React from 'react'
import Navbar from '@/globalComponents/core/Navbar'
import Search from '@/app/Submit/components/AddRedditData'
import ImageTags from '@/app/Submit/components/ImageTags'

function page() {
  return (
    <div className=''>
      <Navbar />
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
