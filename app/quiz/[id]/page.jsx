import { Container } from '@/components'

async function getData() {
  const data = await fetch('http://localhost:3000/api/quiz/random', {
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

export default async function Page() {
  const data = await getData()

  return (
    <main>
      <Container className="py-5">quiz</Container>
    </main>
  )
}
