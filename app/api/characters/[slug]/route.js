import data from '@/data/characters.json'
import { NextResponse } from 'next/server'

export async function GET(request, { params }) {
  console.log(params.slug)
  return NextResponse.json({ data })
}
