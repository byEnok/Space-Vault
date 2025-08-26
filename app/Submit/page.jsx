import React from 'react'
import TwinkleStarBG from '@/globalComponents/core/TwinkleStarBG'
// import Navbar from '@/features/Navbar/Navbar'
import SideNavbar from '@/features/Navbar/SideNavbar'
import OldFormInput from '@/app/Submit/components/AddRedditData'
import FormInput from '@/app/Submit/components/FormInput'

function page() {
  return (
    <div className=''>
      <TwinkleStarBG />
      <SideNavbar />
      <div className='flex '>
        {/* <div className='w-1/2'>
          <OldFormInput />
        </div> */}
        <div className='w-full'>
          <FormInput />
        </div>
      </div>
    </div>
  )
}

export default page
