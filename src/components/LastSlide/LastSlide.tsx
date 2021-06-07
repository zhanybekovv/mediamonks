import React, { FC } from 'react'
import { LAST_PAGE } from '../../data/lastPage'
import { Props } from './types'
import './index.css'

const LastSlide: FC<Props> = (props: Props) => {
  const { page } = props
  const { titleDetails, subtitleDetails, socialNetworks } = LAST_PAGE

  return (
    <div
      className='last-slide'
      style={{
        width: page.pageType === 'lastSlide' ? '70%' : '0%',
        height: page.pageType === 'lastSlide' ? '100%' : '100%'
      }}
    >
      <div className='slider-right'>
        <div className='title' style={{paddingRight: '20px'}}>{titleDetails.title}</div>
  
        <div style={{ alignSelf: 'center', paddingRight: '20px'}}>
          {subtitleDetails.subtitle.map(item => (
            <div>{item}</div>
          ))}
          <div
            style={{
              display: 'inline-grid',
              gridTemplateColumns: '1fr 1fr 1fr',
              marginTop: '20px'
            }}
          >
            {socialNetworks.map(item => (
              <div style={{ display: 'flex', justifySelf: 'end' }}>
                <img src={item.icon} alt='mail' />
                <div>{item.name}</div>
              </div>
            ))}
          </div>
        </div>
        <div />
      </div>
    </div>
  )
}

export default LastSlide
