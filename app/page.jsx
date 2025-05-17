import LandingPageImages from '@/features/NewData/components/LandingPageImages'
import Navbar from '@/globalComponents/core/Navbar'
import { Suspense } from 'react'
import Loading from './Loading'
import Categories from '@/globalComponents/core/Categories'
import SlideShow from '@/globalComponents/core/SlideShow'

export default function Page() {
  return (
    <div className='app'>
      <Navbar />
      <div className='flex flex-col items-center gap-12'>
        <div className='flex flex-col gap-3 pt-5 text-center'>
          <h1 className='text-5xl '>
            Welcome To a <span className='text-hover text-5xl'>Cosmo Collection</span>
          </h1>
          {/* <h2 className='text-xl'>Explore stunning and mind-blowing imagery from the depths of the Cosmos</h2> */}
          {/* <h2 className='text-xl'>Explore stunning and mind-blowing imagery from the depths of our galaxy.</h2> */}
        </div>
        {/* Slideshow Of Images */}
        <SlideShow />

        {/* Images From DB */}
        {/* <Suspense fallback={<Loading />}> */}
        <LandingPageImages />
        {/* </Suspense> */}
      </div>
    </div>
  )
}
