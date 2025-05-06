import { queryOptions } from '@tanstack/react-query'
import prisma from '@/lib/prismaClient'

// TODO - Will create Query keys to be used in 'useQuery' for more dynamic fetching

// export const getImages = ({ category = null, tag = null, special_tags = null }) => {
//   queryOptions({
//     queryKey: ['images', category, tag, special_tags],
//     queryFn: async () => {
//       return await prisma.reddit_posts.findMany()
// const response = await fetch('/api/images')
// if (!response.ok) {
//   throw new Error('Fetch for all images NOT ok.')
// }
// return response.json()
//     },
//   })
// }
