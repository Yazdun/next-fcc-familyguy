/**
 * Retrieves a question and generates a random question for the quiz.
 *
 * @param {Object} req - The request object.
 * @param {Object} params - The route parameters.
 * @param {string} params.id - The ID of the question to retrieve.
 *
 * @returns {Promise<Object>} A promise that resolves to an object containing the correct answer and a randomly generated question ID, or an error response.
 */

import questions from '@/data/quiz.json'
import { NextResponse } from 'next/server'

export async function GET(req, { params }) {
  try {
    const question = questions.data.find(item => item.id === params.id)

    if (!question) {
      return new NextResponse('not found', { status: 404 })
    }

    const { correct_answer } = question

    const filteredQuestions = questions.data.filter(
      item => item.id !== params.id,
    )
    const random = Math.floor(Math.random() * filteredQuestions.length)

    return NextResponse.json({
      correct: correct_answer,
      random: filteredQuestions[random].id,
    })
  } catch (error) {
    return new NextResponse('Internal Server Error', { status: 500 })
  }
}
