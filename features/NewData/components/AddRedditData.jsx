'use client'

import { handleSubmission } from '@/features/NewData/server/db/DataToN8N'

function Search() {
  return (
    <div className='flex flex-col'>
      {/* PAGE TITLE */}
      <h1 className='text-2xl md:text-5xl text-center py-12'>Space Vault</h1>

      <form action={handleSubmission} className='flex flex-col gap-4 text-2xl'>
        {/* REDDIT URL INPUT */}
        <div className='flex flex-col items-center'>
          <label htmlFor='url'>URL</label>
          <input type='text' name='url' placeholder='Paste Reddit Link..' defaultValue='https://www.reddit.com/r/spaceporn/comments/1i04pq9/massive_coronal_hole_spanning_14_of_the_suns/' className='text-lg md:text-xl text-center w-2/3 md:w-1/3' required />
        </div>

        {/*  CATEGORY INPUT */}
        <div className='flex flex-col items-center'>
          <label htmlFor='category'>Category</label>
          <input type='text' name='category' placeholder='Celestial Bodies' defaultValue='Celestial Bodies' className='text-lg md:text-xl text-center w-2/3 md:w-1/3' required />
        </div>

        {/*  TAGS INPUT */}
        <div className='flex flex-col items-center'>
          <label htmlFor='tags'>Tags</label>
          <input type='text' name='tags' placeholder='Star, Sun..' defaultValue='Star, Sun, ' className='text-lg md:text-xl text-center w-2/3 md:w-1/3' required />
        </div>

        {/*  SPECIAL TAG INPUT */}
        <div className='flex flex-col items-center'>
          <label htmlFor='special-tags'>Special-Tags</label>
          <input type='text' name='special-tags' placeholder='e.g Coronal Hole' defaultValue='Coronal Hole' className='text-lg md:text-xl text-center w-2/3 md:w-1/3' required />
        </div>

        <div className='flex justify-center '>
          <button>Add Post</button>
        </div>
      </form>
    </div>
  )
}

export default Search
