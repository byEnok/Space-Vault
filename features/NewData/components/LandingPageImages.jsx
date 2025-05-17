'use client'
// Functions
import { useQuery } from '@tanstack/react-query'
import { fetchImages } from '@/lib/queries/fetchImages'
import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { cn } from '@/lib/utils'

// Components
import Image from 'next/image'
import Loading from '@/app/Loading'
import { Suspense } from 'react'
import Link from 'next/link'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/globalComponents/radix/accordion'
import Error from '@/app/Error'
// import Categories from '@/globalComponents/core/Categories'

function LandingPageImages() {
  // TODO - Create and use QueryKeys and QueryOptions

  const searchParams = useSearchParams()
  const category = searchParams.get('category') ?? undefined

  const [imageFullscreen, setImageFullscreen] = useState('')
  const [infoStatus, setInfoStatus] = useState(false)
  const [mounted, setMounted] = useState(false)

  // This calls a function that calls the 'images/route.js' endpoint, which calls the 'GetAllImages' function in '/features/NewData/server/db/db.js'
  const { data, isPending, isError } = useQuery({
    queryKey: ['posts', category],
    queryFn: () => fetchImages(category),
  })
  useEffect(() => {
    if (!typeof window === undefined) setMounted(true)
  }, [category])

  const allCategories = ['Celestial Bodies', 'Deep Space', 'Phenomena', 'Missions & Tech', 'Imaginarium']

  return (
    <main className={cn('space-y-12 w-full')}>
      <div className='flex w-full justify-evenly'>
        {allCategories.map((category, index) => (
          <Link href={`?${new URLSearchParams({ category })}#show-cards`} key={index} className='border p-2 border-title text-2xl font-bold text-title rounded-md transition-colors duration-500 ease-in-out hover:text-hover'>
            {/* <Link className=' rounded-md border p-2 border-border text-2xl font-bold' href={`?${new URLSearchParams({ path: '/', query: category })}`} key={index}> */}
            {category}
          </Link>
        ))}
        <div id='show-cards' className='absolute top-full'></div>
      </div>
      {isPending ? (
        <Loading />
      ) : data ? (
        <div className='flex flex-wrap justify-evenly'>
          {data?.map((post, index) => (
            <div key={index} className=' flex flex-col h-fit max-w-[300px] bg-gray-900 rounded-lg '>
              <div onClick={() => setImageFullscreen(post.image_src)}>
                <Image key={index} className={cn(`rounded-lg cursor-zoom-in`)} src={post.image_src} width={300} height={300} quality={100} fetchPriority='1' alt={post.special_tags[0]} />
              </div>
              {imageFullscreen && (
                <div className='z-50 fixed inset-0  bg-opacity-80 backdrop-blur-sm flex justify-center  cursor-zoom-out aspect-auto' onClick={() => setImageFullscreen(null)}>
                  <Image key={index} className='' width={900} height={900} sizes='100vw' src={imageFullscreen} alt={post.special_tags[0]} quality={100} />
                </div>
              )}
              {/* Everything Below Image */}
              {/* <div className='bg-gray-900 rounded-lg p-2 space-y-2'> */}
              <div className='bg-backgroundDarker rounded-lg p-2 space-y-2'>
                {/* TITLE */}
                {post.special_tags.map((specialTag, index) => (
                  <span className='text-3xl text-center font-bold text-white' key={index}>
                    {specialTag}
                  </span>
                ))}
                {/* DESCRIPTION */}
                <Accordion type='single' collapsible className='w-full'>
                  <AccordionItem value='item-1' className='flex flex-col text-wrap '>
                    <AccordionTrigger className='font-semibold text-xl border-none bg-transparent text-title'>What's Here?</AccordionTrigger>
                    <AccordionContent className='pt-1 pl-2 bg-buttonHover text-white'>{post.title}</AccordionContent>
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
