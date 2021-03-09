import React, { useEffect, useState } from 'react'
import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image'
import slideAds from 'mocks/slideAds.js'
import { makeStyles } from '@material-ui/core'

const usedStyles = makeStyles((theme) => ({
  img: {
    width: '100%',
  },
}))

const SlideAds = () => {
  const classes = usedStyles()
  const [ads, setAds] = useState(slideAds)
  const slideProperties = {
    duration: 3000,
    pauseOnHover: true
  };
  return (
    <div className='slide-container'>
      <Slide {...slideProperties}>
        {ads.map((ad) => (
          <div key = {ad.id} className='each-slide'>
            <div
              style={{
                backgroundImage:
                  `url(${ad.img})`,
                height: '495px',
              }}
            />
          </div>
        ))}
      </Slide>
    </div>
  )
}
export default SlideAds
