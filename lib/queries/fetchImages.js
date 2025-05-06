// This function is used called in Tanstack Q in a client component and returns images from the DB
export async function fetchImages() {
  const response = await fetch('/api/images')
  if (!response.ok) {
    throw new Error('Network fetch was not ok')
  }
  // console.log('LandinPageImages RESPONSE: ', response)
  return response.json()
}
