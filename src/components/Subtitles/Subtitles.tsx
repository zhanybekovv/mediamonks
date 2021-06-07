import React, { FC } from 'react';
import Slider from '../Slider';
import { Props } from './types';
import './index.css';

const Subtitles: FC<Props> = (props: Props) => {
  const { page, length, setPageIndex, pageIndex, handleMouse, current } = props
  return (
    <div
      className='first-slide-subtitle'
      style={{
        flexDirection: page.pageType === 'startSlide'  ? 'column' : 'row'
      }}
    >
      { page.pageType === 'startSlide' && (
        <div style={{ marginBottom: '50px' }}>
          {page.subtitle  && page.subtitle.map(item => (
            <div>{item}</div>
          ))}
        </div>
      )}
      <Slider
        page={page}
        length={length}
        setPageIndex={setPageIndex}
        pageIndex={pageIndex}
        handleMouse={handleMouse}
      />
      <div style={{ marginLeft: '20px' }} className={current}>
        {page.step}
      </div>
    </div>
  )
}

export default Subtitles
