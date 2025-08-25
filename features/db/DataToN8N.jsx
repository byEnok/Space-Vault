'use server'

export const handleSubmission = async (e) => {
  const url = e.get('url')
  const category = e.get('category')
  const mainTag = String(e.get('mainTag'))
  const extraTag = String(e.get('extraTag'))
  const descriptiveTag = String(e.get('descriptiveTag'))
  const title = String(e.get('title'))
  // const specialTagsInput = String(e.get('special-tags'))

  console.log(url, 'Category:', category, 'mainTag:', mainTag, 'ExtraTag:', extraTag, 'descriptiveTag:', descriptiveTag, 'Title:', title)

  //TODO -  Remove this when changing form input to multiselect or tag picker.
  // const arrayTags = tagsInput
  //   .split(',')
  //   .map((tag) => tag.trim())
  //   .filter((tag) => tag.length > 1)

  // const arraySpecialTags = specialTagsInput
  //   .split(',')
  //   .map((tag) => tag.trim())
  //   .filter((tag) => tag.length > 1)

  // console.log(url, categories)

  // SEND DATA TO N8N
  // try {
  //   await fetch('https://n8n.enoksenn.no/webhook-test/99fa153a-ab9f-4de5-bf9d-80b6f8b149c5', {
  //     method: 'POST',
  //     body: JSON.stringify({
  //       url,
  //       category,
  //       mainTag,
  //       extraTag,
  //       descriptiveTag,
  //       title,
  //     }),
  //   })
  // } catch (e) {
  //   console.error('Data Transer Failed - Error:', e)
  // }
}
