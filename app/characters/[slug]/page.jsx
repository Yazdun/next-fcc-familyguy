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
        <h1 className="text-2xl font-semibold capitalize">{character.name}</h1>
        <p>{character.description}</p>
        {/* <ul>
          {character.occupations.map(item => {
            return <li key={item}>{item}</li>
          })}
        </ul> */}
      </Container>
    </main>
  )
}
