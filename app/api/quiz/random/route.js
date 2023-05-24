/**
 * Retrieves a random question from the quiz.
 *
 * @returns {Promise<Object>} A promise that resolves to an object containing the ID of a randomly selected question, or an error response.
 */

import questions from '@/data/quiz.json'
import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({})
}
