import LandingPageImages from '@/features/NewData/components/LandingPageImages'
import Navbar from '@/globalComponents/core/Navbar'

export default function Page() {
  return (
    <div className=''>
      <Navbar />
      <div className='flex flex-col items-center gap-12'>
        <div className='flex flex-col gap-3 pt-5 text-center'>
          <h1 className='text-4xl'>Welcome To Space Vault</h1>
          <h2 className='text-xl'>Explore stunning and mind-blowing imagery from the depths of our galaxy.</h2>
        </div>
        <LandingPageImages />
      </div>
    </div>
  )
}
