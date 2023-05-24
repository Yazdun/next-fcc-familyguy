import { endpoint } from '@/utils/endpoint'

export async function getQuizQuestion(id) {
  const data = await fetch(`${endpoint}/quiz/${id}`)

  if (!data.ok) {
    throw new Error('Failed to fetch data')
  }

  return data.json()
}

export async function getRandomQuizQuestion() {
  const data = await fetch(`${endpoint}/quiz/random`, { cache: 'no-store' })

  if (!data.ok) {
    throw new Error('Failed to fetch data')
  }

  return data.json()
}
