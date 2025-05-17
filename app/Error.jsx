'use client' // Error boundaries must be Client Components

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function Error({ error, reset }) {
  const router = useRouter()
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div>
      <h2>
        Something went wrong!
        <br />
        Cant Load Images Right Now...
      </h2>
      <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => router.refresh()
        }
      >
        Try again
      </button>
    </div>
  )
}
