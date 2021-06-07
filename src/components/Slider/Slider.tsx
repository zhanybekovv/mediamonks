import React, { FC } from 'react';
import Box from '../Box';
import { Props } from '../Subtitles/types';


const Slider: FC<Props> = (props:Props) => {
  const { length, setPageIndex, pageIndex, page, handleMouse } = props;
  const setBoxes = (len:number) => {
    const res = [];
    for(let i = 0; i < len; i++){
      res.push(<Box page={page} setPageIndex={setPageIndex} index={i} length={len} pageIndex={pageIndex} handleMouse={handleMouse}/>)
    }
    return res;
  }
  return (
    <div style={{
      color: 'white',
      display: 'flex',
    }}>
      {
        setBoxes(length)
      }  
    </div>    
  )
}

export default Slider;