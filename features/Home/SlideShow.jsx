'use client'
//  Shadcn Components
import { Card, CardContent } from '@/globalComponents/shadcn/card'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/globalComponents/shadcn/carousel'
import Image from 'next/image'
import { ExternalLink } from 'lucide-react'
import { useState, useEffect } from 'react'
// IMAGES
import Aurora from '@/app/assets/Banners/clouds-aurora-3K.jpg'
import EarthSunrise from '@/app/assets/Banners/earth-sunrise-3K.jpg'
import Galaxy from '@/app/assets/Banners/galaxy.jpg'
import Exoplanet from '@/app/assets/Banners/exoplanet-3K.jpg'
import SaturnClean from '@/app/assets/Banners/saturn-flickr.jpg'
import BlackHole from '@/app/assets/Banners/black_hole_concept.png'

function SlideShow() {
  const [imageFullscreen, setImageFullscreen] = useState()

  const [mounted, setMounted] = useState(false)

  // const auroraAlt = `Clouds swirl over the Gulf of Alaska beneath the aurora borealis blanketing Earth's horizon, as seen from the International Space Station`
  const auroraAlt = `Clouds swirl over the Gulf of Alaska and underneath the aurora borealis`
  const auroraLink = 'https://www.flickr.com/photos/nasa2explore/54416758948/'

  // const earthSunriseAlt = `Sunrise above Earth's horizon begins to illuminate a cloudy Indian Ocean, revealing the terminator — the dividing line between night and day`
  const earthSunriseAlt = `Sunrise above Earth's horizon begins illuminating a cloudy Indian Ocean`
  const earthSunriseLink = 'https://www.flickr.com/photos/nasa2explore/54415646842/'

  const galaxyAlt = 'Hubble Spies a Spectacular Starburst Galaxy'
  const galaxyLink = 'https://www.flickr.com/photos/nasahubble/54380398810/'

  const exoplanetAlt = 'Webb Discovers Methane, Carbon Dioxide in Atmosphere of Exoplanet K2-18 b (Artist Illustration)'
  const exoplanetLink = 'https://www.flickr.com/photos/nasawebbtelescope/53179463277/'

  const saturnCleanAlt = `Saturn's Rings Shine in Webb's Observations of Ringed Planet`
  const saturnCleanLink = 'https://www.flickr.com/photos/nasawebbtelescope/53013132440/'

  const blackHoleAlt = `Webb Reveals Rapid-Fire Light Show From Milky Way's Central Black Hole (Artist's Concept)`
  const blackHoleLink = 'https://www.flickr.com/photos/nasawebbtelescope/54335344982/'

  // const images = [Aurora, EarthSunrise, Exoplanet, Galaxy, SaturnClean, BlackHole]
  const images = [
    { src: Aurora, alt: auroraAlt, link: auroraLink },
    { src: EarthSunrise, alt: earthSunriseAlt, link: earthSunriseLink },
    { src: Galaxy, alt: galaxyAlt, link: galaxyLink },
    // { src: Exoplanet, alt: exoplanetAlt, link: exoplanetLink },
    { src: SaturnClean, alt: saturnCleanAlt, link: saturnCleanLink },
    { src: BlackHole, alt: blackHoleAlt, link: blackHoleLink },
  ]

  function BannerImageInfo(image, alt) {
    setImageFullscreen((prev) => ({ ...prev, image, alt }))
  }

  useEffect(() => {
    if (!typeof window === undefined) setMounted(true)

    const handleEscKey = (e) => {
      if (e.key === 'Escape') setImageFullscreen(null)
    }
    window.addEventListener('keydown', handleEscKey)
    return () => {
      window.removeEventListener('keydown', handleEscKey)
    }
  }, [])

  return (
    <div className='w-5/6 rounded-md shadow-custom2 '>
      <Carousel className='w-full'>
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index}>
              {/* <div className=' relative w-full aspect-[3/2] h-[460px]'> */}
              {/* <div className=' relative w-full h-[460px]'> */}
              {/* <div className='relative w-full aspect-[16/9] h-[450px]'> */}
              <div className='relative w-full aspect-auto h-[250px] sm:h-[350px] md:h-[550px] cursor-zoom-in select-none' onClick={() => BannerImageInfo(image.src, image.alt)}>
                <div className='absolute bg-gray-900 bg-opacity-70  bottom-0 right-0 z-10 rounded-md'>
                  <p className='text-xs w-full'>{image.alt}</p>
                </div>
                <Image
                  // key={index}
                  priority={true}
                  src={image.src}
                  // width={2880}
                  // height={1880}
                  // layout='responsive'
                  fill={true}
                  sizes='(min-width: 1536px) 100vw,
                (min-width: 1280px) 50vw,
                (min-width: 1024px) 70vw,
                (min-width: 768px) 90vw, 
                (min-width: 640px) 80vw,
                80vw'
                  placeholder='blur'
                  alt={image.alt}
                  className='object-cover w-full rounded-md'
                  quality={100}
                />
                <a href={image.link} target='_blank' rel='noopener norefferer' className='absolute top-2 right-2 opacity-50 transition-opacity duration-300 ease-in-out hover:opacity-100'>
                  <ExternalLink size={20} />
                </a>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className='absolute top-1/2 left-2 transition-all duration-300 ease-in-out border-0 opacity-45 hover:opacity-100' />
        <CarouselNext className='absolute top-1/2 right-2 transition-all duration-300 ease-in-out border-0 opacity-45  hover:opacity-100' />
      </Carousel>
      {imageFullscreen && (
        <div className='z-50 fixed inset-0 bg-opacity-80 backdrop-blur-sm flex justify-center  cursor-zoom-out aspect-auto' onClick={() => setImageFullscreen(null)}>
          <Image className='object-cover' fill={true} sizes='90vw' src={imageFullscreen.image} alt={imageFullscreen.alt} quality={100} />
        </div>
      )}
    </div>
  )
}

export default SlideShow
