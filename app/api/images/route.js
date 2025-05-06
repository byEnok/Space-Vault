import { NextResponse } from 'next/server'
import { GetAllImages } from '@/features/NewData/server/db/db'

export async function GET({ searchParams }) {
  const category = searchParams.category
  const tags = searchParams.tags

  try {
    const allImages = await GetAllImages()
    // console.log('route.js file: ', allImages)
    return NextResponse.json(allImages)
  } catch (e) {
    console.error(e)
    return NextResponse.json('Couldnt fetch Images!')
  }
}
