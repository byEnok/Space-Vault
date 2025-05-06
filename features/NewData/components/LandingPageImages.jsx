'use client'
import Image from 'next/image'
import { useQuery } from '@tanstack/react-query'
import Loading from '@/app/Loading'
import { fetchImages } from '@/lib/queries/fetchImages'
import { useState } from 'react'

function LandingPageImages() {
  // TODO - Create and use QueryKeys and QueryOptions
  // const { data, isPending, isError } = useQuery(getImages())

  const [imageFullscreen, setImageFullscreen] = useState(false)
  const [infoStatus, setInfoStatus] = useState(false)

  // This calls a function that calls the 'images/route.js' endpoint, which calls the 'GetAllImages' function in '/features/NewData/server/db/db.js'
  const { data, isPending, isError } = useQuery({
    queryKey: ['posts'],
    queryFn: fetchImages,
  })

  return (
    <main className=''>
      {isPending ? (
        <Loading />
      ) : isError ? (
        <div className='text-red-500'>"Sorry! Couldn't Load Images Right Now..."</div>
      ) : (
        <div className='flex flex-wrap'>
          {data?.map((post, index) => (
            <div key={index} className=' flex flex-col cursor-zoom-in bg-gray-900'>
              <Image onClick={() => setImageFullscreen(true)} className='rounded-md' src={post.image_src} width={300} height={300} quality={100} fetchPriority='1' alt={post.special_tags[0]} />
              {imageFullscreen && (
                <div className='z-50 fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center cursor-zoom-out' onClick={() => setImageFullscreen(false)}>
                  <Image className='' width={900} height={900} src={post.image_src} alt={post.special_tags[0]} onClick={() => setImageFullscreen(false)} />
                </div>
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
                    <Image src='/icons/reddit-square.png' width={30} height={30} alt='Reddit Icon' />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </main>
  )
}

export default LandingPageImages
