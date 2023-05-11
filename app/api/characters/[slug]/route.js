import data from '@/data/characters.json'
import { NextResponse } from 'next/server'

export async function GET(req, { params }) {
  try {
    const character = data.characters.find(item => item.slug === params.slug)

    if (!character) {
      return new NextResponse('not found', { status: 404 })
    }

    return NextResponse.json({ character })
  } catch (error) {
    return new NextResponse('Internal Server Error', { status: 500 })
  }
}
