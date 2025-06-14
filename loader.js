'use client'

export default function myImageLoader({ src, width, quality }) {
  const isLocal = !src.startsWith('http')
  const query = new URLSearchParams()

  // Coolify service domain
  const imageOptimizationApi = 'https://img.enoksenn.no'
  // The Frontend's domain
  const baseUrl = 'https://cosmocollection.enoksenn.no'

  const fullSrc = `${baseUrl}${src}`

  if (width) query.set('width', width)
  if (quality) query.set('quality', quality)

  if (isLocal && process.env.NODE_ENV === 'development') {
    // WORKS IN LOCAL & PROD - BUT GIVES CONSOLE WARNING IN LOCAL DEV
    // return src

    // AVOIDS CONSOLE WARNING FOR IMAGE NOT HAVING WIDHT PROPERTY
    return `${src}?${query.toString()}`
  }
  if (isLocal) {
    // WORKS IN LOCAL & PROD - BUT GIVES CONSOLE WARNING IN LOCAL DEV
    // return src
    // AVOIDS CONSOLE WARNING FOR IMAGE NOT HAVING WIDHT PROPERTY
    return `${src}?${query.toString()}`

    // Original Code From Developer
    // return `${imageOptimizationApi}/image/${fullSrc}?${query.toString()}`
    // ChatGPT Tip for Encoding:
    // return `${imageOptimizationApi}/image/${encodeURIComponent(fullSrc)}?${query.toString()}`
  }
  // Original Code From Developer
  // return `${imageOptimizationApi}/image/${src}?${query.toString()}`
  // ChatGPT Tip for Encoding:
  return `${imageOptimizationApi}/image/${encodeURIComponent(src)}?${query.toString()}`
}
