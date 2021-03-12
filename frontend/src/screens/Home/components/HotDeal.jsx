import { Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { mainText, maxWidth, primaryText } from 'assets/css_variable/variable'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import 'react-slideshow-image/dist/styles.css'
import HotDealChild from './HotDealChild'

const usedStyles = makeStyles((theme) => ({
  root: {
    paddingTop: 65,
    paddingBottom: 50,
  },
  container: {
    width: maxWidth,
    textAlign: 'center',
    margin: '0 auto 0 auto',
  },
  title: {
    paddingBottom: 10,
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
  slide: {
    height: 237,
    marginTop: 30,
    '& li': {
      marginRight: 0.3,
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
  noPadding: {
    padding: 0,
  },
}))

const HotDeal = () => {
  const classes = usedStyles()
  const responsive = {
    // superLargeDesktop: {
    //   // the naming can be any, depends on you.
    //   breakpoint: { max: 4000, min: 3000 },
    //   items: 5
    // },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
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
  const [products, setProducts] = useState([])
  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get('/api/products/random/20')
      setProducts(data)
      console.log(data)
    }
    fetchProducts()
  }, [])
  return (
    <div>
      <Paper className={classes.root} elevation={0}>
        <div className={classes.container}>
          <div className={classes.title}>
            <p>HOT DEALS</p>
            <img src='https://www.jodhpurifurniture.com/assets/images/border2.png' />
          </div>
          <Carousel
            responsive={responsive}
            autoPlaySpeed={3000}
            autoPlay={true}
            infinite={true}
            // transitionDuration={2000}
            className={classes.slide}
            customTransition={'all 2s ease 0s'}
          >
            {products.map((product) => (
              <HotDealChild key={product._id} product={product} />
            ))}
          </Carousel>
        </div>
      </Paper>
    </div>
  )
}

export default HotDeal
