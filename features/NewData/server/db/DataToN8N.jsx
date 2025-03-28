'use server'

export const handleSubmission = async (e) => {
  const url = e.get('url')
  const category = e.get('category')
  const tags = e.get('tags')
  const special_tags = e.get('special-tags')
  // console.log(url, categories)

  try {
    await fetch('https://n8n.enoksenn.no/webhook-test/99fa153a-ab9f-4de5-bf9d-80b6f8b149c5', {
      method: 'POST',
      body: JSON.stringify({
        url,
        category,
        tags,
        special_tags,
      }),
    })
  } catch (e) {
    console.error('Data Transer Failed - Error:', e)
  }
}
