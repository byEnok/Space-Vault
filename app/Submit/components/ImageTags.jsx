'use client'
import React from 'react'
import { useState } from 'react'
import { handleSubmission } from '@/features/db/DataToN8N'

function ImageTags() {
  const [currentCategory, setCurrentCategory] = useState('Celestial Bodies')
  const [currentMainTag, setCurrentMainTag] = useState('Earth')
  const [showExtraTagOption, setShowExtraTagOption] = useState(false)
  const categories = ['Celestial Bodies', 'Deep Space', 'Phenomena', 'Space Missions & Tech', 'Imaginarium']

  // TODO - If options is === deepSpace or something else. Then the next subcategory option will show the corresponding selection.

  // console.log(currentMainTag)
  const tags = {
    'Celestial Bodies': {
      Planets: ['Earth', 'Moon', 'Mars', 'Jupiter', 'Saturn', 'Venus', 'Mercury', 'Uranus', 'Neptune'],
      'Dwarf Planets': ['Pluto', 'Ceres', 'Eris', 'Haumea', 'Makemake'],
      Stars: ['Sun', 'Red Giants', 'White Dwarfs', 'Neutron Stars', 'Supernovae'],
      'Exo Planets': ['Kepler-22b', 'Proxima Centauri b', 'TOI 700 d'],
    },
    'Deep Space': {
      Galaxies: ['Milky Way', 'Andromeda', 'Triangulum Galaxy'],
      Nebulae: ['Orion Nebula', 'Crab Nebula', 'Eagle Nebula', 'Carina Nebula'],
      'Star Clusters': ['Globular Clusters', 'Open Clusters', 'Pleiades', 'Hyades'],
      Other: ['Quasars', 'Black Holes'],
    },
    Phenomena: {
      Eclipses: ['Solar', 'Lunar'],
      Aurora: ['Northern Lights', 'Southern Lights'],
      'Meteor Showers': ['Perseids', 'Leonids', 'Geminids', 'Quadrantids'],
      Comets: ['Halley’s Comet', 'Comet NEOWISE', 'Comet Hale-Bopp'],
      Other: ['Asteroids'],
    },

    'Space Missions & Tech': {
      Spacecraft: ['Voyager', 'Hubble Telescope', 'James Webb Telescope', 'New Horizons'],
      Rovers: ['Curiosity', 'Perseverance', 'Opportunity', 'Spirit'],
      Other: ['Astronauts / Cosmonauts', 'Space Stations (ISS)'],
    },

    Imaginarium: {
      Planets: ['Earth', 'Moon', 'Mars', 'Jupiter', 'Saturn', 'Venus', 'Mercury', 'Uranus', 'Neptune'],
      'Dwarf Planets': ['Pluto', 'Ceres', 'Eris', 'Haumea', 'Makemake'],
      Stars: ['Sun', 'Red Giants', 'White Dwarfs', 'Neutron Stars', 'Supernovae'],
      Eclipses: ['Solar', 'Lunar'],
      'Meteor Showers': ['Perseids', 'Leonids', 'Geminids', 'Quadrantids'],
      Comets: ['Halley’s Comet', 'Comet NEOWISE', 'Comet Hale-Bopp'],
      Other: ['Asteroids'],
    },
  }

  const extraTags = {
    Earth: ['Earthscapes'],
    Sun: ['Solar Flare'],
  }
  //  Beyond the Known
  //  TODO - Fix options not showing under 'What If?' !!!
  // tags['what If'] = {
  // tags['Imaginarium'] = {
  //   'Celestial Bodies': tags['Celestial Bodies'],
  //   'Deep Space': tags['Deep Space'],
  //   Phenomena: tags['Phenomena'],
  //   'Space Missions & Tech': tags['Space Missions & Tech'],
  // }

  // console.log(tags)

  // / tags
  // const categories = [tags.celestialBodies, tags.deepSpace, tags.phenomena, tags.spaceMissions]

  return (
    <>
      <h1 className='text-center py-12 text-5xl text-white'>Submit Image</h1>
      {/* Use library to show option selection. First for Main tag then for subcategory. */}
      <form action={handleSubmission} className='flex flex-col gap-4 justify-center'>
        <div className='flex flex-col items-center gap-2'>
          <label htmlFor='url ' className='text-2xl'>
            URL
          </label>
          <input
            type='url'
            name='url'
            placeholder='Paste Reddit Link..'
            defaultValue='https://www.reddit.com/r/spaceporn/comments/1i04pq9/massive_coronal_hole_spanning_14_of_the_suns/'
            className='bg-background text-white border-white p-2 text-lg md:text-xl  w-2/3'
            required
          />
        </div>

        {/* CATEGORY */}
        <div className='flex flex-col items-center gap-2'>
          <label className='text-2xl'>Category</label>
          <select name='category' id='category' className='w-48 h-10 p-2 rounded-md' defaultValue='Celestial Bodies' onChange={(e) => setCurrentCategory(e.target.value)}>
            {categories.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        {/* MAIN & EXTRA TAG */}
        {currentCategory && (
          <div className='flex justify-center items-center gap-12'>
            {/* MAIN TAG */}
            <div className='flex flex-col items-center gap-2'>
              <span className='text-2xl'>Main Tag</span>
              <select name='mainTag' id='mainTag' className='w-48 h-10 p-2 rounded-md' defaultValue='' onChange={(e) => setCurrentMainTag(e.target.value)}>
                {tags[currentCategory] &&
                  Object.entries(tags[currentCategory]).map(([groupName, tagList]) => (
                    <optgroup key={groupName} label={groupName} className='font-bold underline text-2xl'>
                      {tagList.map((tag, index) => (
                        <option key={index} value={tag} className='font-extralight text-sm'>
                          {tag}
                        </option>
                      ))}
                    </optgroup>
                  ))}
              </select>
            </div>

            {!showExtraTagOption && (
              <button className='self-end bg-background hover:bg-accent active:bg-backgroundDarker' onClick={() => setShowExtraTagOption(true)}>
                Set Extra Tag
              </button>
            )}
            {/* EXTRA TAG */}
            {showExtraTagOption && (
              <div className='flex flex-col items-center gap-2'>
                <div className='flex items-center justify-center gap-5 '>
                  <span className='text-2xl'>Extra Tag</span>
                  <button className='bg-background text-xs self-center rounded-sm' onClick={() => setShowExtraTagOption(false)}>
                    ✖️
                  </button>
                </div>
                <select name='extraTag' id='extraTag' className='w-48 h-10 p-2 rounded-md' defaultValue=''>
                  <optgroup label={currentCategory} className='font-bold underline '>
                    {Object.keys(tags[currentCategory]).map((tag, index) => (
                      <option key={index} value={tag} className='font-extralight'>
                        {tag}
                        {/* Removes the letter 's' from words having it */}
                        {/* {tag.at(-1) == 's' ? tag.slice(0, -1) : tag} */}
                      </option>
                    ))}
                  </optgroup>
                </select>
              </div>
            )}
          </div>
        )}

        {/* DESCRIPTIVE TAG */}
        {extraTags[currentMainTag] && (
          <div className='flex flex-col items-center gap-2'>
            <span className='text-2xl'>Descriptive Tag</span>
            <select name='descriptiveTag' id='descriptiveTag' className='w-34 h-10 p-2'>
              <option value={extraTags[currentMainTag]} className='font-extralight'>
                {extraTags[currentMainTag]}
              </option>
            </select>
          </div>
        )}

        {/* POST TITLE */}
        <div className='flex flex-col items-center'>
          <label htmlFor='title' className='text-2xl'>
            Title
          </label>
          <input type='text' name='title' placeholder='e.g Coronal Hole' defaultValue='Coronal Hole' className='bg-background text-white text-lg md:text-xl text-center w-2/3 md:w-1/3' required />
        </div>

        {/* SUBMIT BUTTON */}
        <div className='flex justify-center '>
          <button>Add Post</button>
        </div>
      </form>
    </>
  )
}

export default ImageTags
