import characters from '@/data/characters.json'
import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({ characters: characters.data })
}
