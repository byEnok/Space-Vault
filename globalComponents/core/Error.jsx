'use client' // Error boundaries must be Client Components

import { Suspense, useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Loading from '../../app/Loading'
// import { revalidatePath } from 'next/cache'

export default function Error({ error, reset }) {
  const [isLoading, setIsLoading] = useState(false)

  const router = useRouter()

  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
    // setIsLoading(true)
  }, [error])

  return (
    <main className='flex flex-col text-center justify-center items-center gap-5 mb-12'>
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
            // setIsLoading(true)
            // revalidatePath('page')
            router.refresh()
            // reset()
          }
        }
      >
        Try again
      </button>
    </main>
    // <div className='flex flex-col text-center justify-center items-center gap-5 mb-12'>
    //   {isLoading ? (
    //     <div className='relative flex justify-center'>
    //       <Loading />
    //     </div>
    //   ) : (
    //     <>
    //       <h2>
    //         Something went wrong!
    //         <br />
    //         Cant Load Images Right Now...
    //       </h2>
    //       <button
    //         className='bg-background hover:bg-backgroundDarker text-text font-bold'
    //         onClick={
    //           () => {
    //             setIsLoading(true)
    //             router.refresh()
    //             reset()
    //           }
    //         }
    //       >
    //         Try again
    //       </button>
    //     </>
    //   )}
    // </div>
  )
}
