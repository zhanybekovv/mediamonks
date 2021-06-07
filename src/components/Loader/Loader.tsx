import React from 'react'
import Monk from '../../assets/images/monk.png'
import './index.css'

const vars = [
  { '--v': '1' },
  { '--v': '2' },
  { '--v': '5' },
  { '--v': '4' },
  { '--v': '6' },
  { '--v': '19' },
  { '--v': '7' },
  { '--v': '8' },
  { '--v': '9' },
  { '--v': '10' },
  { '--v': '11' },
  { '--v': '18' }
]

const Loader = () => {
  return (
    <div>
      <div className='monkBlock'>
        <div className='vapour'>
          {vars.map((i: any) => (
            <span style={i}></span>
          ))}
        </div>
      </div>
      <div className='monk'>
        <img src={Monk} alt='monk' />
      </div>
      {/* <div className='obj'>
        <img src={Monk} alt='monk' />
      </div> */}
      <div className='wrapper'>
        <div className='slide-left text-bold'>
          <div>Patience</div>
        </div>
        <div className='slide-right'>
          <div>, young Padawan</div>
        </div>
      </div>
    </div>
  )
}

export default Loader

