import React from 'react'
import { GetAllImages } from '../server/db/db'
import Image from 'next/image'

async function LandingPageImages() {
  const data = await GetAllImages()
  return (
    <>
      <div className='flex'>
        {data?.map((post, index) => (
          <div key={index} className='bg-red-400'>
            <span className='text-sm text-pretty bg-blue-400'>{post.title}</span>
            <Image src={post.image_src} width={300} height={300} quality={100} fetchPriority='1' />
            <ul>
              {post?.tags.map((tag, index) => (
                <li key={index}>{tag}</li>
              ))}
              {post?.special_tags.map((specialTag, index) => (
                <li key={index}>{specialTag}</li>
              ))}
            </ul>
            {/* <a href={post.reddit_url} target='_blank' rel='noopener noreferrer'></a> */}
            <a href='#' target='_blank' rel='noopener noreferrer'>
              <Image src='/app/assets/reddit-square.png' width={80} height={80} alt='Reddit Icon' />
            </a>
          </div>
        ))}
      </div>
    </>
  )
}

export default LandingPageImages
