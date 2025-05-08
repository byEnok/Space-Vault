import { NextResponse } from 'next/server'
import { GetAllImages } from '@/features/NewData/server/db/db'

export async function GET(req) {
  const { searchParams } = new URL(req.url)
  // const searchParams = req.nextUrl.searchParams
  const query = req.url.searchParams
  const category = searchParams.get('category')
  // const category = searchParams.category
  const tags = searchParams.getAll('tags')
  // const tags = searchParams.tags
  const specialTags = searchParams.getAll('getspecialTags')
  // const specialTags = searchParams.specialTags

  // console.log('route.js: ', tags, category, specialTags)
  console.log('route.js QUERY: ', query)
  // console.log('QUERY URL: ', query.url)

  try {
    const images = await GetAllImages({ category, tags: tags.length ? tags : undefined, specialTags: specialTags.length ? specialTags : undefined })
    // const images = await GetAllImages()
    // console.log('route.js file: ', allImages)
    return NextResponse.json(images)
  } catch (e) {
    console.error(e)
    return NextResponse.json('Couldnt fetch Images!')
  }
}
// original functional
// export async function GET() {
//   try {
//     const allImages = await GetAllImages()
//     // console.log('route.js file: ', allImages)
//     return NextResponse.json(allImages)
//   } catch (e) {
//     console.error(e)
//     return NextResponse.json('Couldnt fetch Images!')
//   }
// }
