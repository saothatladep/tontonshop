import { Box, Container, Grid, Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { maxWidth } from 'assets/css_variable/variable'
import React from 'react'

const usedStyles = makeStyles((theme) => ({
  root: {
    marginTop: 2,
  },
  container: {
    width: maxWidth,
    margin: '0 auto',
    padding: '48px 0 140px 0',
    '& h1': {
      fontSize: '2.5rem',
      fontWeight: 700,
      margin: '10px 0 0',
      padding: '25px 21px',
      color: '#333',
    },
    '& p': {
      fontWeight: 500,
      fontSize: '1.6rem',
      lineHeight: 1.5,
      padding: '8px 23px',
      color: '#666',
    },
    '& img': {
        maxWidth: '100%',
        height: 'auto'
    },
  },
  noPadding: {
    padding: 0,
  },
  noDecoration: {
    textDecoration: 'none !important',
  },
}))

const AboutUs = () => {
  const classes = usedStyles()
  return (
    <div>
      <Paper className={classes.root} elevation={0}>
        <div className={classes.container}>
          <Box>
            <Container className={classes.noPadding}>
              <Grid
                container
                direction='row'
                justify='space-between'
                alignItems='flex-start'
                spacing={3}
              >
                <Grid item md={6}>
                  <h1>WELCOME TO OUR COMPANY</h1>
                  <p>
                    {' '}
                    Tontonfurniture.com is a one stop shop for all your
                    furniture and household needs. We aim at providing a hassle
                    free and enjoyable shopping experience to shoppers across
                    the country.{' '}
                  </p>
                  <p>
                    Founded by <b>TonTon</b> in 1980, TonTon endeavors to
                    build an online furniture destination in India by giving
                    customers more of what they want – low prices, vast
                    selection, fast and reliable delivery and a trusted and
                    convenient experience. We strive to achieve the highest
                    level of “Customer Satisfaction” possible.
                  </p>
                </Grid>
                <Grid item md={6}>
                  <img
                    src='https://www.jodhpurifurniture.com/assets/images/about/01.jpg'
                    alt='About us'
                  />
                </Grid>
              </Grid>
            </Container>
          </Box>
        </div>
      </Paper>
    </div>
  )
}

export default AboutUs
