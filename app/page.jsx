import LandingPageImages from '@/features/Home/LandingPageImages'
import Navbar from '@/features/Navbar/Navbar'
import { Suspense } from 'react'
import Loading from './Loading'
import SlideShow from '@/features/Home/SlideShow'
import TwinkleStarBG from '@/globalComponents/core/TwinkleStarBG'
import SideNavbar from '@/features/Navbar/SideNavbar'

export default function Page() {
  return (
    <div className='app relative'>
      <TwinkleStarBG />
      {/* <Navbar /> */}
      <div className='absolute z-50 left-0 top-0 h-1/5'>
        <SideNavbar />
      </div>
      <div className='flex flex-col items-center gap-12'>
        <div className='flex flex-col gap-3 pt-5 text-center'>
          <h1 className='text-5xl '>
            The <span className=' text-5xl'>Cosmo Collection</span>
          </h1>
        </div>
        {/* Slideshow Of Images */}
        <SlideShow />

        {/* Images From DB */}
        <Suspense fallback={<Loading />}>
          <LandingPageImages />
        </Suspense>
      </div>
    </div>
  )
}
