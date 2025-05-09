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
import Link from 'next/link'
import { Suspense } from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/globalComponents/radix/accordion'
// import Categories from '@/globalComponents/core/Categories'

function LandingPageImages() {
  // TODO - Create and use QueryKeys and QueryOptions

  const searchParams = useSearchParams()
  const category = searchParams.get('category') || undefined

  const [imageFullscreen, setImageFullscreen] = useState(false)
  const [infoStatus, setInfoStatus] = useState(false)

  // This calls a function that calls the 'images/route.js' endpoint, which calls the 'GetAllImages' function in '/features/NewData/server/db/db.js'
  const { data, isPending, isError } = useQuery({
    queryKey: ['posts', category],
    queryFn: () => fetchImages(category),
  })
  useEffect(() => {}, [category])

  const allCategories = ['Celestial Bodies', 'Deep Space', 'Phenomena', 'Missions & Tech', 'Imaginarium']

  return (
    <main className={cn('space-y-12 w-full')}>
      <div className='flex w-full justify-evenly'>
        {allCategories.map((category, index) => (
          <Link href={`?${new URLSearchParams({ category })}`} key={index} className='border p-2 border-border text-2xl font-bold'>
            {/* <Link className=' rounded-md border p-2 border-border text-2xl font-bold' href={`?${new URLSearchParams({ path: '/', query: category })}`} key={index}> */}
            {category}
          </Link>
        ))}
      </div>
      {isPending ? (
        <>
          <Loading />
        </>
      ) : data ? (
        <div className='flex flex-wrap justify-evenly'>
          {data?.map((post, index) => (
            <div key={index} className=' flex flex-col h-fit max-w-[300px] bg-gray-900 rounded-lg '>
              <Image key={index} onClick={() => setImageFullscreen(true)} className={cn(`rounded-lg cursor-zoom-in`)} src={post.image_src} width={300} height={300} quality={100} fetchPriority='1' alt={post.special_tags[0]} />
              {imageFullscreen && (
                <>
                  <div className='z-50 fixed inset-0  bg-opacity-80 backdrop-blur-sm flex justify-center items-center cursor-zoom-out' onClick={() => setImageFullscreen(false)}>
                    <Image key={index} className='' width={650} height={650} src={post.image_src} alt={post.special_tags[0]} quality={100} />
                  </div>
                </>
              )}
              {/* Everything Below Image */}
              <div className='bg-gray-900 rounded-lg p-2 space-y-2'>
                {/* TITLE */}
                {post.special_tags.map((specialTag, index) => (
                  <span className='text-3xl text-center font-bold' key={index}>
                    {specialTag}
                  </span>
                ))}
                {/* DESCRIPTION */}
                <Accordion type='single' collapsible className='w-full max-w-full'>
                  <AccordionItem value='item-1' className='flex flex-col text-wrap'>
                    <AccordionTrigger className='font-semibold text-xl border-none bg-transparent'>What's Here?</AccordionTrigger>
                    <AccordionContent className='pt-1 pl-2 bg-buttonHover'>{post.title}</AccordionContent>
                  </AccordionItem>
                </Accordion>

                {/* Tags, Category & Reddit Icon */}
                <div className='flex flex-col justify-between space-y-2'>
                  {/* TAGS */}
                  <div className='flex w-full gap-2 '>
                    <span className='font-bold'>Tags: </span>
                    <div className='flex flex-start  w-full gap-2'>
                      {post.tags.map((tag, index) => (
                        <span className='border border-border rounded-md p-0.5 text-sm' key={index}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  {/* Category */}
                  <div className=''>
                    <span className='font-bold'>Category: </span>
                    <span className='italic'>{post.category}</span>
                  </div>
                  {/* Reddit Icon */}
                  <a className='self-end' href={post.reddit_url} target='_blank' rel='noopener noreferrer'>
                    <Image src='/icons/reddit-square.png' width={20} height={20} alt='Reddit Icon' />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className='text-red-500'>"Sorry! Couldn't Load Images Right Now..."</div>
      )}
    </main>
  )
}

export default LandingPageImages
