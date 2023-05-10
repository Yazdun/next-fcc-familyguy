import { Container } from '@/components'
import Image from 'next/image'

async function getData() {
  const res = await fetch('http://localhost:3000/api/characters')
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
  // Recommendation: handle errors

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

export default async function Home() {
  const data = await getData()

  return (
    <main>
      <Container className="grid grid-cols-4 gap-1">
        {data?.data?.characters?.map(item => {
          return (
            <div key={item.name} className="overflow-hidden rounded-md">
              <Image
                src={item.image}
                alt=""
                className="transition-all hover:scale-125"
                width={500}
                height={500}
              />
            </div>
          )
        })}
      </Container>
    </main>
  )
}
