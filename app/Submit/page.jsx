import React from 'react'
import Navbar from '@/globalComponents/core/Navbar'
import Search from '@/features/NewData/components/AddRedditData'
import ImageTags from '@/features/NewData/components/ImageTags'

function page() {
  return (
    <div className=''>
      <Navbar />
      <Search />
      {/* <ImageTags /> */}
    </div>
  )
}

export default page
