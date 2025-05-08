'use server'
import prisma from '@/lib/prismaClient'

//  Is called from API endpoint 'images/' to get data from DB
export async function GetAllImages(filters) {
  try {
    const { category, tags, specialTags } = filters ?? {}
    console.log('db.js CATEGORY: ', category)
    // console.log('db.js: ', filters)
    const where = {}

    if (category) where.category = category
    if (tags?.length > 0) where.tags = { hasSome: tags }
    if (specialTags?.length > 0) where.specialTags = { hasSome: specialTags }

    // orderBy: { created_At: 'desc' }
    const images = await prisma.reddit_posts.findMany({ where })
    return images
  } catch (e) {
    console.error(e)
    console.error('Couldnt Fetch Images!')
    // throw new Error('Couldnt fetch Images!')
  }
}
