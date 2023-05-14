import { Container } from '@/components'
import { Answer } from '@/components/Answer'
import { AnimatePresence } from 'framer-motion'

async function getData(id) {
  const data = await fetch(`http://localhost:3000/api/quiz/${id}`, {
    cache: 'no-store',
  })

  if (!data.ok) {
    throw new Error('Failed to fetch data')
  }

  return data.json()
}

export default async function Page({ params }) {
  const { question } = await getData(params.id)

  return (
    <Container as="main" className="flex flex-col gap-5 py-5">
      <h1 className="text-lg font-semibold">{question.title}</h1>
      <Answer answers={question.answers} questionId={params.id} />
    </Container>
  )
}
