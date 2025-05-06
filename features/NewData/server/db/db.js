'use server'
import prisma from '@/lib/prismaClient'

//  Is called from API endpoint 'images/' to get data from DB
export async function GetAllImages({ category, tags }) {
  try {
    const image = await prisma.reddit_posts.findMany({ where: { category, tags } })
    return image
    // console.log('db.js file: ', image)
  } catch (e) {
    console.error(e)
    console.error('Couldnt Fetch Images!')
    // throw new Error('Couldnt fetch Images!')
  }
}
