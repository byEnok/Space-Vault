import React from 'react'

function ImageTags() {
  const options = ['Celestial Bodies', 'Deep Space', 'Phenomena', 'Space Missions and Technology']

  // TODO - If options is === deepSpace or something else. Then the next subcategory option will show the corresponding selection.

  const celestialBodies = {
    planets: ['Earth', 'Moon', 'Mars', 'Jupiter', 'Saturn', 'Venus', 'Mercury', 'Uranus', 'Neptune'],
    dwarfPlanets: ['Pluto', 'Ceres', 'Eris', 'Haumea', 'Makemake'],
    stars: ['Sun', 'Red Giants', 'White Dwarfs', 'Neutron Stars', 'Supernovae'],
    exoPlanets: ['Kepler-22b', 'Proxima Centauri b', 'TOI 700 d'],
  }

  const deepSpace = {
    galaxies: ['Milky Way', 'Andromeda', 'Triangulum Galaxy'],
    nebulae: ['Orion Nebula', 'Crab Nebula', 'Eagle Nebula', 'Carina Nebula'],
    starClusters: ['Globular Clusters', 'Open Clusters', 'Pleiades', 'Hyades'],
    other: ['Quasars', 'Black Holes'],
  }

  const phenomena = {
    eclipses: ['Solar', 'Lunar'],
    aurora: ['Northern Lights', 'Southern Lights'],
    meteorShowers: ['Perseids', 'Leonids', 'Geminids', 'Quadrantids'],
    comets: ['Halley’s Comet', 'Comet NEOWISE', 'Comet Hale-Bopp'],
    other: ['Asteroids'],
  }

  const spaceMissions = {
    spacecraft: ['Voyager', 'Hubble Telescope', 'James Webb Telescope', 'New Horizons'],
    rovers: ['Curiosity', 'Perseverance', 'Opportunity', 'Spirit'],
    other: ['Astronauts / Cosmonauts', 'Space Stations (ISS)'],
  }

  const subOptions = {
    celestialBodies,
    deepSpace,
    phenomena,
    spaceMissions,
  }

  return (
    <div>
      {/* Use library to show option selection. First for Main tag then for subcategory. */}
      ImageTags
    </div>
  )
}

export default ImageTags
