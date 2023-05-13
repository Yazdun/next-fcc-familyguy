import { Answer, Container } from '@/components'

async function getData(id) {
  const data = await fetch(`http://localhost:3000/api/quiz/${id}`, {
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
  const { question } = await getData(params.id)

  return (
    <main>
      <Container className="py-5 flex flex-col gap-5">
        <h1>{question.title}</h1>
        <Answer data={question.answers} />
      </Container>
    </main>
  )
}
