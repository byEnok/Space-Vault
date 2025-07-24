'use client'

export default function myImageLoader({ src, width, quality }) {
  const localDev = process.env.NODE_ENV === 'development'
  const localImage = !src.startsWith('http')
  const query = new URLSearchParams()
  const imageOptimizationApi = 'https://img.enoksenn.no'

  // Skip imgproxy in local development
  if (localImage && localDev) return src
  if (localImage) return src

  // Handle production-local paths
  if (src.startsWith('/') && !src.startsWith('//')) {
    return src
  }

  // Remove Existing params from DB URLS (width/quality)
  const parsedSrc = new URL(src)
  parsedSrc.searchParams.delete('width')
  parsedSrc.searchParams.delete('quality')
  const cleanUrl = parsedSrc.toString()

  // Add new params from <Image> component
  if (width) query.set('width', width)
  if (quality) query.set('quality', quality)

  // Returns new clean URL
  return `${imageOptimizationApi}/image?url=${encodeURIComponent(cleanUrl)}&${query.toString()}`
}

// DOESN'T SHOW IMAGE
// return `${imageOptimizationApi}/image/${src}?${query.toString()}`

// try these two next!!!
// return `${imageOptimizationApi}/image/${encodeURIComponent(src)}?${query.toString()}`
// return `${imageOptimizationApi}/image/${encodeURIComponent(src)}`
// return `${imageOptimizationApi}/image/${encodeURIComponent(src)}&${query.toString()}`

// DOESN'T SHOW IMAGE
// return `${imageOptimizationApi}/image?url=${src}?${query.toString()}`

// DOESN'T SHOW IMAGE
// return `${imageOptimizationApi}/image?url=${encodeURIComponent(src)}`

// DOESN'T SHOW IMAGE
// return `${imageOptimizationApi}/image?url=${encodeURIComponent(src)}&${query.toString()}`

// return `${imageOptimizationApi}/image?url=${encodeURIComponent(src)}`

// DOESN'T SHOW IMAGE
// From Next docs
// return `${imageOptimizationApi}/${encodeURIComponent(src)}?w=${width}&q=${quality || 75}`

// DOESN'T SHOW IMAGE
// Cloudflare example from next docs
// return `${imageOptimizationApi}/image/${params.join(',')}/${encodeURIComponent(src)}`

// return `${imageOptimizationApi}/image/${params.join(',')}/${src}`

// return `${imageOptimizationApi}/image?url=${encodeURIComponent(src)}&${query.toString()}`

// return `${imageOptimizationApi}/image/${encodeURIComponent(src)}&${query.toString()}`
