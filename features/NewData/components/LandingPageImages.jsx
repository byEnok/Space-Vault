'use client'
// Functions
import { useQuery } from '@tanstack/react-query'
import { fetchImages } from '@/lib/queries/fetchImages'
import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { cn } from '@/lib/utils'
import { useRouter } from 'next/router'

// Components
import Image from 'next/image'
import Loading from '@/app/Loading'
import { Suspense } from 'react'
import Link from 'next/link'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/globalComponents/radix/accordion'
import Error from '@/app/Error'

// Images
import Pillars from '@/app/assets/Categories/pillarsOfCreation.jpg'
import JupiterM from '@/app/assets/Categories/jupiterM.jpg'
import JupiterL from '@/app/assets/Categories/jupiterL.jpg'
import Meteor from '@/app/assets/Categories/meteor.webp'
import ISS from '@/app/assets/Categories/iss.jpg'
import StarConcept from '@/app/assets/Categories/starConcept.jpg'
// Placeholder Image
// import Placeholder from '@/app/assets/Placeholders/placeholder1.png'

function LandingPageImages() {
  // const router = useRouter()
  // TODO - Create and use QueryKeys and QueryOptions
  const searchParams = useSearchParams()
  const category = searchParams.get('category') ?? undefined
  console.log('LANDING CATEGORY: ', category)

  const [imageFullscreen, setImageFullscreen] = useState('')
  const [infoStatus, setInfoStatus] = useState(false)
  const [mounted, setMounted] = useState(false)

  //  CATEGORY IMAGES AND TEXT
  const pillarsAlt = 'Pillars of Creation (NIRCam and MIRI Composite Image)'
  const jupiterAlt = `Webb's Jupiter Images Showcase Auroras, Hazes`
  const meteorAlt = 'Comet C/2023 A3 (Tsuchinshan-ATLAS) from the Space Station'
  const missionTechAlt = 'The station pictured from the SpaceX Crew Dragon'
  const imaginariumAlt = 'Webb Finds Plethora of Carbon Molecules Around Young Star (Artist Concept)'

  // PLACEHOLDER IMAGE
  // const Placeholder = '/Placeholders/placeholder1.png'
  const Placeholder = '/Placeholders/placeholder.webp'

  // const allCategories = ['Celestial Bodies', 'Deep Space', 'Phenomena', 'Missions & Tech', 'Imaginarium']
  const allCategories = [
    { name: 'Celestial Bodies', image: JupiterM, alt: jupiterAlt },
    { name: 'Deep Space', image: Pillars, alt: pillarsAlt },
    { name: 'Phenomena', image: Meteor, alt: meteorAlt },
    { name: 'Missions & Tech', image: ISS, alt: missionTechAlt },
    { name: 'Imaginarium', image: StarConcept, alt: imaginariumAlt },
  ]

  // This calls a function that calls the 'images/route.js' endpoint, which calls the 'GetAllImages' function in '/features/NewData/server/db/db.js'
  const { data, isPending, isError } = useQuery({
    queryKey: ['posts', category],
    queryFn: () => fetchImages(category),
  })
  useEffect(() => {
    if (!typeof window === undefined) setMounted(true)

    const handleEscKey = (e) => {
      if (e.key === 'Escape') setImageFullscreen(null)
    }
    window.addEventListener('keydown', handleEscKey)
    return () => {
      window.removeEventListener('keydown', handleEscKey)
    }
  }, [category])

  return (
    <main className={cn('space-y-12 w-full')}>
      <div className='relative flex flex-wrap w-full justify-evenly gap-5 md:gap-0'>
        {/* ------------------------ IMAGE CATEGORIES USERS CAN CHOOSE FROM ------------------------ */}
        {allCategories.map((category) => (
          <>
            <Link
              href={`?${new URLSearchParams({ category: category.name }).toString()}#show-cards`}
              key={category.name}
              className='flex flex-col border border-transparent text-sm text-center md:text-2xl font-bold text-title rounded-md transition-colors duration-500 ease-in-out hover:text-hover hover:border-hover hover:shadow-customSublteDark'
            >
              <div className='relative w-20 h-20 sm:w-36 sm:h-36 md:w-40 md:h-40 lg:w-44 lg:h-44 xl:w-48 xl:h-48 2xl:w-52 2xl:h-52 '>
                <Image
                  className={cn(`object-cover rounded-t-lg cursor-pointer`)}
                  src={category.image}
                  fill={true}
                  quality={100}
                  fetchPriority='1'
                  alt={category.alt}
                  sizes='
                (min-width: 1536px) 18vw,
                (min-width: 1280px) 20vw,
                (min-width: 1024px) 22vw,
                (min-width: 768px) 25vw, 
                (min-width: 640px) 33vw,
                45rem'
                />
              </div>
              {/* <Link className=' rounded-md border p-2 border-border text-2xl font-bold' href={`?${new URLSearchParams({ path: '/', query: category })}`} */}
              <p className='bg-backgroundDarker rounded-b-md text-xs text-center py-[1px] md:text-sm'>{category.name}</p>
            </Link>
          </>
        ))}
        {/* RESET FILTERING FROM CLICKING A CATEGORY */}
        {category && (
          <Link className='absolute text-xs -bottom-8 bg-gray-900 font-bold  p-1 border border-border rounded-md hover:shadow-custom2' href={'/#show-cards'}>
            Reset Search
          </Link>
        )}
      </div>
      {/* {isPending ? (
        <Loading />
      ) :  */}
      {data ? (
        <div id='show-cards' className='flex flex-wrap justify-evenly gap-8 scroll-mt-5 md:gap-0'>
          {data?.map((post) => (
            <div key={post.id} className=' flex flex-col h-fit max-w-[300px] bg-gray-900 rounded-lg '>
              <div onClick={() => setImageFullscreen(post.image_src)}>
                <Image key={post.id} className={cn(`rounded-lg cursor-zoom-in`)} src={post.image_src ? post.image_src : Placeholder} width={300} height={300} quality={100} alt={post.title[0]} />
              </div>
              {imageFullscreen && (
                <div className='z-50 fixed inset-0 bg-opacity-80 backdrop-blur-sm flex justify-center cursor-zoom-out aspect-auto' onClick={() => setImageFullscreen(null)}>
                  {/* <Image key={post.id} className='aspect-auto' width={750} height={750} sizes='100vw' src={imageFullscreen} alt={post.description[0]} quality={100} /> */}
                  <Image key={post.id} className='object-contain' fill={true} sizes='50vw' src={imageFullscreen} alt={post.description[0]} quality={100} />
                </div>
              )}

              {/* Everything Below Image */}
              {/* <div className='bg-gray-900 rounded-lg p-2 space-y-2'> */}
              <div className='bg-backgroundDarker rounded-lg p-2 space-y-2'>
                {/* TITLE */}
                {/* {post.title.map((specialTag, index) => ( */}
                <span className='text-3xl text-center font-bold text-white'>{post.title}</span>
                {/* ))} */}
                {/* DESCRIPTION */}
                <Accordion type='single' collapsible className='w-full'>
                  <AccordionItem value='item-1' className='flex flex-col text-wrap '>
                    <AccordionTrigger className='font-semibold text-xl border-none bg-transparent text-title'>What's Here?</AccordionTrigger>
                    <AccordionContent className='pt-1 pl-2 bg-buttonHover text-white'>{post.description}</AccordionContent>
                  </AccordionItem>
                </Accordion>

                {/* Tags, Category & Reddit Icon */}
                <div className='flex flex-col justify-between space-y-2 '>
                  {/* Category */}
                  <div className='w-fit'>
                    <span className='font-bold text-title '>Category: </span>
                    <span className='italic text-white '>{post.category}</span>
                  </div>
                  {/* TAGS */}
                  <div className='flex w-full justify-between gap-2 p-1 '>
                    <>
                      {/* <span className='font-bold'>Tags: </span> */}
                      <div className='flex flex-start w-fit gap-2 '>
                        {post.tags.map((tag, index) => (
                          <span className='border border-border rounded-md p-1 text-xs' key={index}>
                            {tag}
                          </span>
                        ))}
                      </div>
                      {/* Reddit Icon */}
                      <a className='self-end ' href={post.reddit_url} target='_blank' rel='noopener noreferrer'>
                        <Image src='/icons/reddit-square.png' width={20} height={20} alt='Reddit Icon' />
                      </a>
                    </>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        isError && (
          <div className='text-red-500'>
            <Error />
          </div>
        )
      )}
    </main>
  )
}

export default LandingPageImages
