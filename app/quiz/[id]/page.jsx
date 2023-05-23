/**
Renders a Next.js page component that displays a quiz question and its answer options.
@component
@param {Object} props - The component props.
@param {Object} props.params - The parameters passed to the page component.
@param {string} props.params.id - The ID of the quiz question.
@returns {JSX.Element} The rendered page component.
*/

import { Container } from '@/components'
import { Answer } from '@/components/Answer'
import { endpoint } from '@/utils/endpoint'

/**
Retrieves data from the specified endpoint path.
@async
@param {string} path - The endpoint path to fetch data from.
@returns {Promise<Object>} A promise that resolves to the fetched data.
@throws {Error} If the data fetching fails.
*/

async function getData(path) {
  const data = await fetch(`${endpoint}/${path}`)

  if (!data.ok) {
    throw new Error('Failed to fetch data')
  }

  return data.json()
}

export default async function Page({ params }) {
  const { question } = await getData(`/quiz/${params.id}`)

  return (
    <Container as="main" className="flex flex-col gap-5 py-5">
      <h1 className="text-lg font-semibold">{question.title}</h1>
      <Answer answers={question.answers} questionId={params.id} />
    </Container>
  )
}
