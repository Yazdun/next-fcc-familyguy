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
import { getQuizQuestion } from '@/lib/quiz'

export default async function Page({ params }) {
  const { question } = await getQuizQuestion(params.id)

  return (
    <Container as="main" className="flex flex-col gap-5 py-5">
      <h1 className="text-lg font-semibold">{question.title}</h1>
      {question.quiz_image ? <Image 
                  src={question.quiz_image}
                  alt=""
                  className='transition-all duration-500 hover:scale-110 hover:-rotate-2'
                  width={300}
                  height={300}
                /> : null}
      <Answer answers={question.answers} questionId={params.id} />
    </Container>
  )
}
