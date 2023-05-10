import data from '@/data/characters.json'
import { NextResponse } from 'next/server'

export async function GET(req, res) {
  return NextResponse.json({ data })
}
