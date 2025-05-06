'use client'
import React from 'react'
import { useState } from 'react'

function ImageTags() {
  const [currentCategory, setCurrentCategory] = useState('Celestial Bodies')
  const categories = ['Celestial Bodies', 'Deep Space', 'Phenomena', 'Space Missions and Tech', 'What If?']

  // TODO - If options is === deepSpace or something else. Then the next subcategory option will show the corresponding selection.

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
  }

  // Imaginarium
  //  Beyond the Known

  //  TODO - Fix options not showing under 'What If?' !!!
  tags['what If?'] = {
    'Celestial Bodies': tags['Celestial Bodies'],
    'Deep Space': tags['Deep Space'],
    Phenomena: tags.Phenomena,
    'Space Missions & Tech': tags['Space Missions & Tech'],
  }

  // const categories = [tags.celestialBodies, tags.deepSpace, tags.phenomena, tags.spaceMissions]

  return (
    <>
      <h1 className='text-center py-12 text-5xl  text-white'>{currentCategory}</h1>

      {/* Use library to show option selection. First for Main tag then for subcategory. */}
      <div></div>

      <div className='flex flex-col items-center gap-2'>
        <span className='text-3xl'>Category</span>
        <select name='category' id='category' defaultValue='Celestial Bodies' onChange={(e) => setCurrentCategory(e.target.value)}>
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      {currentCategory && (
        <div className='flex flex-col items-center gap-2'>
          <span className='text-3xl'>Tags</span>
          <select name='tags' id='tags' className='min-w-12 h-12'>
            {tags[currentCategory] &&
              Object.entries(tags[currentCategory]).map(([groupName, tagList]) => (
                <optgroup key={groupName} label={groupName} className='font-bold underline '>
                  {tagList.map((tag, index) => (
                    <option key={index} value={tag} className='font-extralight'>
                      {tag}
                    </option>
                  ))}
                </optgroup>
              ))}
          </select>
        </div>
      )}
    </>
  )
}

export default ImageTags
