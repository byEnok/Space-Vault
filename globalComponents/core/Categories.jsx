export default function Categories() {
  const allCategories = ['Celestial Bodies', 'Deep Space', 'Phenomena', 'Missions & Tech']

  return (
    <>
      <main className='flex w-full justify-evenly'>
        {allCategories.map((category, index) => (
          <div key={index} className='border p-2 border-border text-2xl font-bold'>
            {category}
          </div>
        ))}
      </main>
    </>
  )
}
