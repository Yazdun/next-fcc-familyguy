import questions from '@/data/quiz.json'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const radnom = Math.floor(Math.random() * questions.data.length) + 1

    return NextResponse.json({ quiz: questions.data[radnom] })
  } catch (error) {
    return new NextResponse('Internal Server Error', { status: 500 })
  }
}
