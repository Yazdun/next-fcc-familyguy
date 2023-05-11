'use client' // Error components must be Client Components

import { Container } from '@/components'
import { useEffect } from 'react'

export default function Error(error, reset) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <Container className="flex flex-col items-center gap-5 py-5">
      <h1 className="text-2xl">Something Went Wrong!</h1>
      <button
        className="px-5 py-2 bg-blue-700 rounded-md"
        onClick={() => reset()}
      >
        Try again
      </button>
    </Container>
  )
}
