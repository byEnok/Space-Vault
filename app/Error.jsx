'use client' // Error boundaries must be Client Components

import { Suspense, useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Loading from './Loading'

export default function Error({ error, reset }) {
  const [buttonClicked, setButtonClicked] = useState(false)

  const router = useRouter()

  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
    setButtonClicked(false)
  }, [error, buttonClicked])

  return (
    <div className='flex flex-col text-center justify-center items-center gap-5 mb-12'>
      {buttonClicked ? (
        <div className='flex justify-center'>
          <Loading />
        </div>
      ) : (
        <>
          <h2>
            Something went wrong!
            <br />
            Cant Load Images Right Now...
          </h2>
          <button
            className='bg-background hover:bg-backgroundDarker text-text font-bold'
            onClick={
              // Attempt to recover by trying to re-render the segment
              () => {
                setButtonClicked(true)
                router.refresh()
              }
            }
          >
            Try again
          </button>
        </>
      )}
    </div>
  )
}
