'use server'
import prisma from '@/lib/prismaClient'

export async function GetAllImages() {
  try {
    const allImages = await prisma.reddit_posts.findMany()
    // console.log('SERVER IMAGES', allImages)
    return allImages
  } catch (e) {
    console.error(e)
    console.log('Couldnt fetch Images! ERROR IS: ', e)
  }
}
