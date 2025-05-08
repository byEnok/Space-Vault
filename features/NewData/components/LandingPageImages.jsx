'use client'
import Image from 'next/image'
import { useQuery } from '@tanstack/react-query'
import Loading from '@/app/Loading'
import { fetchImages } from '@/lib/queries/fetchImages'
import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { cn } from '@/lib/utils'

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
        <div>fetching Images...</div>
      ) : data ? (
        <div className='flex flex-wrap justify-evenly'>
          {data?.map((post, index) => (
            <div key={index} className=' flex flex-col cursor-zoom-in bg-gray-900'>
              <Image onClick={() => setImageFullscreen(true)} className={cn(`rounded-lg`)} src={post.image_src} width={300} height={300} quality={100} fetchPriority='1' alt={post.special_tags[0]} />
              {imageFullscreen && (
                <>
                  <div className='z-50 fixed inset-0 bg-black bg-opacity-80 backdrop-blur-sm flex justify-center items-center cursor-zoom-out' onClick={() => setImageFullscreen(false)}>
                    <Image className='' width={650} height={650} src={post.image_src} alt={post.special_tags[0]} onClick={() => setImageFullscreen(false)} quality={100} />
                  </div>
                </>
              )}
              {/* Everything Below Image */}
              <div className='bg-gray-900 rounded-lg p-2'>
                {/* TITLE */}
                {post.special_tags.map((specialTag, index) => (
                  <span className='text-3xl text-center' key={index}>
                    {specialTag}
                  </span>
                ))}
                {/* DESCRIPTION */}
                <div className='max-w-[300px]'>
                  <span className='font-bold'>What's Here</span>
                  {infoStatus && <p className='text-sm text-pretty'>{post.title}</p>}
                </div>
                {/* TAGS */}
                <div className='flex justify-between '>
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
                  <a className='self-end' href={post.reddit_url} target='_blank' rel='noopener noreferrer'>
                    <Image src='/icons/reddit-square.png' width={20} height={20} alt='Reddit Icon' />
                  </a>
                </div>
                <div className='block '>
                  <span className='font-bold'>Category: </span>
                  <span className='italic'>{post.category}</span>
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
