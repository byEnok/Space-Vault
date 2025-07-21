import React from 'react'

export default function DataAndLinks() {
  const onePixelMoon = 'https://www.joshworth.com/dev/pixelspace/pixelspace_solarsystem.html'
  const SpaceElevator = 'https://neal.fun/space-elevator/'
  const SpaceEngine = 'https://spaceengine.org/'

  const otherResources = [
    { name: 'If The Moon Was One Pixel', src: onePixelMoon, index: 1 },
    { name: 'Space Elevator', src: SpaceElevator, index: 2 },
    { name: 'Space Engine Game', src: SpaceEngine, index: 3 },
  ]

  return (
    <main>
      <div>
        {otherResources.map((resource) => (
          <a key={resource.index} href={resource}>
            {resource.name}
          </a>
        ))}
      </div>
    </main>
  )
}
