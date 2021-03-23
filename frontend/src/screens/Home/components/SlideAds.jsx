import React, { useEffect, useState } from 'react'
import 'react-slideshow-image/dist/styles.css'
import { Zoom } from 'react-slideshow-image'
import slideAds from 'mocks/slideAds.js'
import { makeStyles } from '@material-ui/core'

const usedStyles = makeStyles((theme) => ({
  container: {
    marginTop: 3,
  },
  img: {
    width: '100%',
  },
}))

const SlideAds = () => {
  const classes = usedStyles()
  const [ads, setAds] = useState(slideAds)
  const zoomProperties = {
    // duration: 3000,
    // pauseOnHover: true,
    indicators: false,
    scale: 1.4,
  }
  return (
    <div className={classes.container}>
      <div className='slide-container'>
        <Zoom {...zoomProperties}>
          {ads.map((ad) => (
            <div
              key={ad.id}
              style={{
                backgroundImage: `url(${ad.img})`,
                height: '495px',
                objectFit: 'cover',
                width: '100%',
              }}
            />
          ))}
        </Zoom>
      </div>
    </div>
  )
}
export default SlideAds
