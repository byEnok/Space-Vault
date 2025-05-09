import React from 'react'

function SunOrbit() {
  return (
    <div>
      <div className='solar-system-container'>
        <div className='solar-system'>
          <div className='sun'></div>
          <div className='earth-orbit'>
            <div className='earth'>
              <div className='moon-orbit'>
                <div className='moon'></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SunOrbit
