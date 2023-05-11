import { Container } from '@/components'
import Image from 'next/image'

async function getData(slug) {
  const data = await fetch(`http://localhost:3000/api/characters/${slug}`, {
    cache: 'no-store',
  })
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
  // Recommendation: handle errors

  if (!data.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  return data.json()
}

export default async function Page({ params }) {
  const { character } = await getData(params.slug)

  return (
    <main>
      <Container className="flex flex-col gap-5 py-5">
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-semibold capitalize">
            {character.name}
          </h1>
          <ul className="flex gap-1 text-sm">
            {character.occupations.map(item => {
              return (
                <li
                  key={item}
                  className="p-2 text-gray-300 bg-gray-800 rounded-md"
                >
                  {item}
                </li>
              )
            })}
          </ul>
        </div>
        <p className="leading-6">{character.description}</p>
        <ul className="grid gap-2 sm:grid-cols-2">
          {character.images.map(image => {
            return (
              <li
                key={image}
                className="relative flex overflow-hidden bg-gray-900 rounded-xl"
              >
                <Image
                  className="transition-all duration-500 hover:scale-110 hover:rotate-2"
                  src={image}
                  alt=""
                  width={760}
                  height={400}
                />
              </li>
            )
          })}
        </ul>
      </Container>
    </main>
  )
}
