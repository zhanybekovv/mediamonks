import React, { useEffect, useState } from 'react'
import { PAGES } from '../../data/pages'
import Subtitles from '../../components/Subtitles'
import Arrows from '../../components/Arrows'
import Logo from '../../assets/images/logo'
import Title from '../../components/Title'
import LastSlide from '../../components/LastSlide'
import './index.css'

const Main = () => {
  const [current, setCurrent] = useState('fade-in')

  const [pageIndex, setPageIndex] = useState(0)
  const [page, setPage] = useState(PAGES[pageIndex])
  const length = PAGES.length
  useEffect(() => PAGES[pageIndex] && setPage(PAGES[pageIndex]), [pageIndex])

  const handleMouse = (event: MouseEvent) => {
    if (event.type === 'mousedown') {
      setCurrent('fade-out')
    } else if (event.type === 'mouseup') {
      setCurrent('fade-in')
    }
  }

  return (
    <div>
      <div className='container fade-in'>
        <div
          className='sliding-background'
          style={{
            backgroundPositionX: `${page.backgroundPosition}`,
            marginRight: page.pageType === 'lastSlide' ? '70%' : '0%',
            transition: page.pageType === 'lastSlide' ? 'margin-right 1s' : '1s'
          }}
        >
          <Title page={page} pageIndex={pageIndex} style={current} />
          <Subtitles
            length={length}
            page={page}
            setPageIndex={setPageIndex}
            pageIndex={pageIndex}
            handleMouse={handleMouse}
            current={current}
          />
          <div>
            <Arrows
              pageIndex={pageIndex}
              setPageIndex={setPageIndex}
              length={length}
              handleMouse={handleMouse}
            />
            <div className='logo'>
              <Logo fill='white' />
            </div>
          </div>
        </div>
        <LastSlide page={page} />
      </div>
    </div>
  )
}

export default Main
