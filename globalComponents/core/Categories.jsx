import Link from 'next/link'

export default function Categories() {
  const allCategories = ['Celestial Bodies', 'Deep Space', 'Phenomena', 'Missions & Tech', 'What If?']

  return (
    <>
      <main className='flex w-full justify-evenly'>
        {allCategories.map((category, index) => (
          // <Link href={`?${new URLSearchParams({ category })}`} key={index} className='border p-2 border-border text-2xl font-bold'>
          <Link href={`?${new URLSearchParams({ path: '/', query: category })}`} key={index} className='border p-2 border-border text-2xl font-bold'>
            {category}
          </Link>
        ))}
      </main>
    </>
  )
}
