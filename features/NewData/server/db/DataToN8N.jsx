'use server'

export const handleSubmission = async (e) => {
  const url = e.get('url')
  const category = e.get('category')
  const tagsInput = String(e.get('tags'))
  const specialTagsInput = String(e.get('special-tags'))

  //TODO -  Remove this when changing form input to multiselect or tag picker.
  const arrayTags = tagsInput
    .split(',')
    .map((tag) => tag.trim())
    .filter((tag) => tag.length > 1)

  const arraySpecialTags = specialTagsInput
    .split(',')
    .map((tag) => tag.trim())
    .filter((tag) => tag.length > 1)

  // console.log(url, categories)

  try {
    await fetch('https://n8n.enoksenn.no/webhook-test/99fa153a-ab9f-4de5-bf9d-80b6f8b149c5', {
      method: 'POST',
      body: JSON.stringify({
        url,
        category,
        arrayTags,
        arraySpecialTags,
      }),
    })
  } catch (e) {
    console.error('Data Transer Failed - Error:', e)
  }
}
