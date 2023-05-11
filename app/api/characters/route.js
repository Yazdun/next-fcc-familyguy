import data from '@/data/characters.json'
import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({ characters: data.characters })
}
