import React from 'react'
import Navbar from '@/globalComponents/core/Navbar'
import Search from '@/features/NewData/components/AddRedditData'
import ImageTags from '@/features/NewData/components/ImageTags'

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
