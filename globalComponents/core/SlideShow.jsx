//  Shadcn Components
import { Card, CardContent } from '@/globalComponents/shadcn/card'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/globalComponents/shadcn/carousel'
import Image from 'next/image'
import { ExternalLink } from 'lucide-react'
// IMAGES
// import PillarsOfCreation from '@/app/assets/images/DeepSpace/pillars_of_creation_NASA.jpg'
// import AndromedaGalaxy from '@/app/assets/images/DeepSpace/andromeda_galaxy_NASA.jpg'
// import MissionsTech from '@/app/assets/images/MissionTech/missions_tech.jpg'
// import MissionsTech2 from '@/app/assets/images/MissionTech/missions_tech2.jpg'
// import MissionsTech2Opti from '@/app/assets/images/MissionTech/optimized/missions_tech2.webp'
// import Saturn from '@/app/assets/images/CelestialBodies/saturn_NASA.jpg'
// import Saturn2 from '@/app/assets/images/CelestialBodies/saturn_reddit.webp'
// import AuroraPurple from '@/app/assets/images/Phenomena/aurora_NASA.jpg'
// import AuroraGreen from '@/app/assets/images/Phenomena/aurora_reddit.jpg'

import BlackHole from '@/app/assets/images/Imaginarium/black-hole-concept/black_hole_concept.png'
import SaturnClean from '@/app/assets/saturn-flickr.jpg'
import Aurora from '@/app/assets/clouds-aurora-3K.jpg'
import EarthSunrise from '@/app/assets/earth-sunrise-3K.jpg'
import Exoplanet from '@/app/assets/exoplanet-3K.jpg'
import Galaxy from '@/app/assets/galaxy.jpg'

function SlideShow() {
  const auroraAlt = 'Clouds swirl over the Gulf of Alaska and underneath the aurora borealis'
  const auroraLink = 'https://www.flickr.com/photos/nasa2explore/54416758948/'

  const earthSunriseAlt = `Sunrise above Earth's horizon begins illuminating a cloudy Indian Ocean`
  const earthSunriseLink = 'https://www.flickr.com/photos/nasa2explore/54415646842/'

  const exoplanetAlt = 'Webb Discovers Methane, Carbon Dioxide in Atmosphere of Exoplanet K2-18 b (Artist Illustration)'
  const exoplanetLink = 'https://www.flickr.com/photos/nasawebbtelescope/53179463277/'

  const galaxyAlt = 'Hubble Spies a Spectacular Starburst Galaxy'
  const galaxyLink = 'https://www.flickr.com/photos/nasahubble/54380398810/'

  const saturnCleanAlt = `Saturn's Rings Shine in Webb's Observations of Ringed Planet`
  const saturnCleanLink = 'https://www.flickr.com/photos/nasawebbtelescope/53013132440/'

  const blackHoleAlt = `Webb Reveals Rapid-Fire Light Show From Milky Way's Central Black Hole (Artist's Concept)`
  const blackHoleLink = 'https://www.flickr.com/photos/nasawebbtelescope/54335344982/'

  // const images = [Aurora, EarthSunrise, Exoplanet, Galaxy, SaturnClean, BlackHole]
  const images = [
    { src: Aurora, alt: auroraAlt, link: auroraLink },
    { src: EarthSunrise, alt: earthSunriseAlt, link: earthSunriseLink },
    { src: Exoplanet, alt: exoplanetAlt, link: exoplanetLink },
    { src: Galaxy, alt: galaxyAlt, link: galaxyLink },
    { src: SaturnClean, alt: saturnCleanAlt, link: saturnCleanLink },
    { src: BlackHole, alt: blackHoleAlt, link: blackHoleLink },
  ]
  return (
    <div className='w-5/6 rounded-md shadow-custom2 '>
      <Carousel className='w-full'>
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index}>
              {/* <div className=' relative w-full aspect-[3/2] h-[460px]'> */}
              {/* <div className=' relative w-full h-[460px]'> */}
              {/* <div className='relative w-full aspect-[16/9] h-[450px]'> */}
              <div className='relative w-full aspect-auto h-[650px]'>
                <p className='absolute bottom-0 right-0 text-xs z-10 bg-gray-900 p-1 bg-opacity-70 rounded-md '>{image.alt}</p>
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
        <CarouselPrevious className='' />
        <CarouselNext />
      </Carousel>
    </div>
  )
}

export default SlideShow
