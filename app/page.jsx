import LandingPageImages from '@/features/NewData/components/LandingPageImages'
import Navbar from '@/globalComponents/core/Navbar'
import { Suspense } from 'react'
import Loading from './Loading'
import Categories from '@/globalComponents/core/Categories'

export default function Page() {
  return (
    <div className=''>
      <Navbar />
      <div className='flex flex-col items-center gap-12'>
        <div className='flex flex-col gap-3 pt-5 text-center'>
          <h1 className='text-4xl'>Welcome To ....</h1>
          {/* <h2 className='text-xl'>Explore stunning and mind-blowing imagery from the depths of our galaxy.</h2> */}
        </div>

        {/* Categories */}
        {/* <Categories /> */}

        {/* Images From DB */}
        {/* <Suspense fallback={<Loading />}> */}
        <LandingPageImages />
        {/* </Suspense> */}
        {/* <Loading>HELLO </Loading> */}
      </div>
    </div>
  )
}
