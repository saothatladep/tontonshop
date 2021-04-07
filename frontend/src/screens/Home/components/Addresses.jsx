import { Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { mainText, maxWidth, primaryText } from 'assets/css_variable/variable'
import AddressesData from 'mocks/addressesData.js'
import React from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import 'react-slideshow-image/dist/styles.css'
import AddressChild from './AddressChild'
const usedStyles = makeStyles((theme) => ({
  root: {
    paddingTop: 0,
    paddingBottom: 30,
  },
  container: {
    width: maxWidth,
    textAlign: 'center',
    margin: '0 auto 0 auto',
  },
  title: {
    paddingBottom: 20,
    '& p': {
      fontWeight: 700,
      fontSize: '2.5rem',
      letterSpacing: '1.1px',
      color: mainText,
      margin: 0,
    },
    '& img': {
      marginTop: 10,
    },
  },
  noPadding: {
    padding: 0,
  },
  slide: {
    minHeight: 430,
    marginTop: 20,
    // textAlign: 'left',
    '& li': {
      marginRight: 2,
    },
    '& button': {
      // background: 'transparent',
      zIndex: 13,
      '&::before': {
        color: primaryText,
        fontSize: '2.5rem',
      },
    },
    '& button:nth-child(2)': {
      left: 0,
    },
    '& button:nth-child(3)': {
      right: 0,
    },
  },
  room: {
    padding: '30px 0 10px 0',
  },
}))
const Addresses = () => {
  const classes = usedStyles()
  const responsive = {
    // superLargeDesktop: {
    //   // the naming can be any, depends on you.
    //   breakpoint: { max: 4000, min: 3000 },
    //   items: 5
    // },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
    },
    // tablet: {
    //   breakpoint: { max: 1024, min: 464 },
    //   items: 2
    // },
    // mobile: {
    //   breakpoint: { max: 464, min: 0 },
    //   items: 1
    // }
  }
  return (
    <div>
      <Paper className={classes.root} elevation={0}>
        <div className={classes.container}>
          <div className={classes.title}>
            <p>#TONTON_FURNITURE</p>
            <img src='https://www.jodhpurifurniture.com/assets/images/border2.png' alt ='line' />
          </div>
          <Carousel
            responsive={responsive}
            // arrows={false}
            autoPlaySpeed={7000}
            autoPlay={true}
            infinite={true}
            // transitionDuration={2000}
            className={classes.slide}
            customTransition={'all 2s ease 0s'}
          >
            {AddressesData.map((address) => (
              <AddressChild key={address._id} address={address} />
            ))}
          </Carousel>
        </div>
      </Paper>
    </div>
  )
}

export default Addresses
