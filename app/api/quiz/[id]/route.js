import questions from '@/data/quiz.json'
import { NextResponse } from 'next/server'

export async function GET(req, { params }) {
  try {
    const question = questions.find(item => item.id === params.id)

    if (!question) {
      return new NextResponse('not found', { status: 404 })
    }

    return NextResponse.json({ question })
  } catch (error) {
    return new NextResponse('Internal Server Error', { status: 500 })
  }
}
