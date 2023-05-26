/**

Renders a Next.js page component that displays a grid of character avatars with links to individual character pages.
@component
@returns {JSX.Element} The rendered page component.
*/

import { Container } from '@/components'
import Image from 'next/image'
import Link from 'next/link'
import { endpoint } from '@/utils/endpoint'

export default async function Page() {
  return (
    <main className="flex items-center justify-center h-screen">
      <h1 className="text-3xl">hello from boilerplate!</h1>
    </main>
  )
}
