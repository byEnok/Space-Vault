// This function is used called in Tanstack Q in a client component and returns images from the DB
export async function fetchImages(category) {
  const url = new URL('/api/images', window.location.origin)
  if (category) url.searchParams.set('category', category)

  const response = await fetch(url)
  if (!response.ok) {
    throw new Error('Network fetch was not ok')
  }
  return response.json()
}
