import { Box, Container, Grid, Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { mainText, maxWidth } from 'assets/css_variable/variable'
import roomCategories from 'mocks/roomCategories.js'
import React from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import 'react-slideshow-image/dist/styles.css'
import RoomDown from './RoomDown'
import RoomUpLeft from './RoomUpLeft'
import RoomUpRight from './RoomUpRight'

const usedStyles = makeStyles((theme) => ({
  root: {
    paddingTop: 0,
    paddingBottom: 55,
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
    height: 310,
    marginTop: 20,
  },
  room: {
    padding: '30px 0 10px 0',
  },
}))
const RoomCategories = () => {
  const classes = usedStyles()
  const responsive = {
    // superLargeDesktop: {
    //   // the naming can be any, depends on you.
    //   breakpoint: { max: 4000, min: 3000 },
    //   items: 5
    // },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
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
            <p>SHOP BY ROOM</p>
            <img src='https://www.jodhpurifurniture.com/assets/images/border2.png' alt ='line' />
          </div>
          <div className={classes.room}>
            <Box>
              <Container className={classes.noPadding}>
                <Grid
                  container
                  direction='row'
                  justify='space-between'
                  alignItems='center'
                  spacing={4}
                >
                  <Grid item md={6}>
                    <RoomUpLeft />
                  </Grid>
                  <Grid item md={6}>
                    <RoomUpRight />
                  </Grid>
                </Grid>
              </Container>
            </Box>
          </div>
          <Carousel
            responsive={responsive}
            arrows={false}
            autoPlaySpeed={5000}
            autoPlay={true}
            infinite={true}
            // transitionDuration={2000}
            className={classes.slide}
            customTransition={'all 3s ease 0s'}
          >
            {roomCategories.map((category) => (
              <RoomDown key={category._id} category={category} />
            ))}
          </Carousel>
        </div>
      </Paper>
    </div>
  )
}

export default RoomCategories
