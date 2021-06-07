import React, { FC } from 'react'
import { Props } from './types'
import rightArrow from '../../assets/images/next.png'
import leftArrow from '../../assets/images/prev.png'
import './index.css'

const Arrows: FC<Props> = (props: Props) => {
  const { pageIndex, setPageIndex, handleMouse, length } = props
  return (
    <div>
      {pageIndex > 0 && (
        <div
          className='arrow'
          onClick={e => setPageIndex(pageIndex - 1)}
          onMouseUp={e => handleMouse(e)}
          onMouseDown={e => handleMouse(e)}
        >
          <img alt='prev' src={leftArrow} style={{ width: '45px' }} />
        </div>
      )}
      {pageIndex < length-1 && (
        <div
          className='arrow'
          style={{
            right: '0px'
          }}
          onClick={e => setPageIndex(pageIndex + 1)}
          onMouseUp={e => handleMouse(e)}
          onMouseDown={e => handleMouse(e)}
        >
          <img alt='next' src={rightArrow} style={{ width: '45px' }} />
        </div>
      )}
    </div>
  )
}

export default Arrows
