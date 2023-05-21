/*-------------------------------------------------------------------
|  🐼 Next Page Component
|
|  🐯 Purpose: HOMEPAGE
|
|  🐸 Returns:  JSX
*-------------------------------------------------------------------*/

import { Container } from '@/components'
import Image from 'next/image'
import Link from 'next/link'
import { endpoint } from '@/utils/endpoint'

export async function getData(path) {
  const data = await fetch(`${endpoint}/${path}`)
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
  // Recommendation: handle errors

  if (!data.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  return data.json()
}

export default async function Page() {
  const data = await getData('/characters')

  return (
    <main>
      <Container className="grid grid-cols-2 gap-1 py-5 md:grid-cols-3 lg:grid-cols-4">
        {data?.characters?.map(item => {
          return (
            <Link
              href={`/characters/${item.slug}`}
              key={item.name}
              className="overflow-hidden rounded-md"
            >
              <Image
                src={item.avatar}
                alt=""
                className="transition-all duration-500 hover:scale-110 hover:-rotate-2"
                width={500}
                height={500}
              />
            </Link>
          )
        })}
      </Container>
    </main>
  )
}
