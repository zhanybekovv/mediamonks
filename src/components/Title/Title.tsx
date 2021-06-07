import React, { FC } from 'react'
import { Props } from './types'
import './index.css'

const Title: FC<Props> = (props: Props) => {
  const { pageIndex, page, style } = props

  return (
    <div>
      {pageIndex === 0 ? (
        <div className={`first-slide`}>
          {page.titleDetails.title &&
            page.titleDetails.title.map((item: any) => <div>{item}</div>)}
        </div>
      ) : (
        <div
          style={{
            left: page.titleDetails.titlePosition === 'left' ? '70px' : '',
            right: page.titleDetails.titlePosition === 'right' ? '70px' : '',
            textAlign:
              page.titleDetails.titlePosition === 'left' ? 'left' : 'right'
          }}
          className={`title-position ${style}`}
        >
          <div className='title'>
            {!page.pageType &&
              page.titleDetails.title.map(item => <div>{item}</div>)}
          </div>
        </div>
      )}
    </div>
  )
}

export default Title
