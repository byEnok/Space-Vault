import React from 'react'

function BlackHoleText() {
  return (
    <div>
      <div className='loader'>
        <div className='blackhole'>
          <div className='blackhole-circle'></div>
          <div className='blackhole-disc'></div>
        </div>

        <div className='curve'>
          <svg viewBox='0 0 500 500'>
            <path id='loading' d='M73.2,148.6c4-6.1,65.5-96.8,178.6-95.6c111.3,1.2,170.8,90.3,175.1,97'></path>
            <text width='500'>
              <textPath xlink:href='#loading'>loading...</textPath>
            </text>
          </svg>
        </div>
      </div>
    </div>
  )
}

export default BlackHoleText
