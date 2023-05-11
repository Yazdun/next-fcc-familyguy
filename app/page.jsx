import { Container } from '@/components'
import Image from 'next/image'
import Link from 'next/link'

async function getData() {
  const dynamicData = await fetch('http://localhost:3000/api/characters', {
    cache: 'no-store',
  })
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
  // Recommendation: handle errors

  if (!dynamicData.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  return dynamicData.json()
}

export default async function Home() {
  const data = await getData()

  return (
    <main>
      <Container className="grid grid-cols-3 gap-1">
        {data?.data?.characters?.map(item => {
          return (
            <Link
              href={`/character/${item.slug}`}
              key={item.name}
              className="overflow-hidden rounded-md"
            >
              <Image
                src={item.image}
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
