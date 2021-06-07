import React from 'react'
import './index.css'

const Box = (props: any) => {
  const { index, setPageIndex, length, pageIndex, handleMouse } = props
  return (
    <div
      className='box-border'
      onClick={() => setPageIndex(index)}
      onMouseDown={e => handleMouse(e)}
      onMouseUp={e => handleMouse(e)}
    >
      <div
        style={{
          alignSelf: 'center'
        }}
      >
        {index === pageIndex ? (
          <div className="selected-cell" />
        ) : index > 0 && index < length - 1 ? (
          index
        ) : (
          ''
        )}
      </div>
    </div>
  )
}

export default Box
