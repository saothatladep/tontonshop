import React, { useEffect } from 'react'
import ScrollToTop from 'components/ScrollToTop'
import { makeStyles } from '@material-ui/core/styles'
import Meta from 'components/Meta'
import { Box, Container, Grid, Paper } from '@material-ui/core'
import { maxWidth, primaryText } from 'assets/css_variable/variable'

const usedStyles = makeStyles((theme) => ({
  root: { marginTop: 2 },
  container: {
    width: maxWidth,
    margin: '0 auto',
    padding: '48px 0',
  },
  banner: {
    background:
      'url(https://www.jodhpurifurniture.com/assets/images/customer-stories/customer-stories.jpg) center center/cover no-repeat',
    height: 392,
    margin: '0 0 48px 0',
  },
  customBox: {
    border: '1px solid #e1e1e1',
    marginBottom: 37,
    '& img': {
      width: '100%',
    },
  },
  customView: {
    background:
      'url(https://www.jodhpurifurniture.com/assets/images/customer-stories/quotes.png) left 13px top 5px no-repeat;',
    padding: '27px 36px',
    '& p': {
      color: '#666',
      overflow: 'auto',
      height: 100,
      lineHeight: 1.7,
      fontSize: '1.5rem',
      letterSpacing: 0.3,
      fontStyle: 'italic',
    },
    '& span': {
      color: '1#333',
      padding: '11px 0 0',
      letterSpacing: 0.4,
      fontSize: '1.5rem',
      '& u': {
        textDecoration: 'none',
        color: primaryText,
      },
    },
  },
  noPadding: {
    padding: 0,
  },
  noDecoration: {
    textDecoration: 'none !important',
  },
}))

const Stories = () => {
  const classes = usedStyles()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div>
      <Meta title={`TonTon | Stories Costumers`} />
      <div>
        <Paper className={classes.root} elevation={0}>
          <div className={classes.container}>
            <div className={classes.banner}></div>
            <Box>
              <Container className={classes.noPadding}>
                <Grid
                  container
                  direction='row'
                  justify='space-between'
                  alignItems='center'
                  spacing={4}
                >
                  <Grid item md={4}>
                    <div className={classes.customBox}>
                      <img
                        src='https://www.jodhpurifurniture.com:4000/images/testimonials/155030008546602.jpg'
                        alt='img'
                      />
                      <div className={classes.customView}>
                        <p>
                          Thank you TonTon for the urgent delivery of my dining
                          table. Loved my experience with you!
                        </p>
                        <span>
                          Tia, <u>Mumbai</u>
                        </span>
                      </div>
                    </div>
                  </Grid>
                  <Grid item md={4}>
                    <div className={classes.customBox}>
                      <img
                        src='https://www.jodhpurifurniture.com:4000/images/testimonials/155030010372301.jpg'
                        alt='img'
                      />
                      <div className={classes.customView}>
                        <p>
                          The sideboards are too classy and durable. The quality
                          was as expected and totally impressed with their
                          services.
                        </p>
                        <span>
                          Thomas, <u>Tokyo</u>
                        </span>
                      </div>
                    </div>
                  </Grid>
                  <Grid item md={4}>
                    <div className={classes.customBox}>
                      <img
                        src='https://www.jodhpurifurniture.com:4000/images/testimonials/155030009482603.jpg'
                        alt='img'
                      />
                      <div className={classes.customView}>
                        <p>
                          Had a great shopping experience at TonTon. The easy
                          process helped me to buy by products within minutes.
                          Also the delivery was too quick.
                        </p>
                        <span>
                          Adam, <u>Hanoi</u>
                        </span>
                      </div>
                    </div>
                  </Grid>
                </Grid>
              </Container>
            </Box>
          </div>
        </Paper>
      </div>
      <ScrollToTop />
    </div>
  )
}

export default Stories
