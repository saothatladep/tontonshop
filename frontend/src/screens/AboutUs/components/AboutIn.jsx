import { Box, Container, Grid, Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { maxWidth } from 'assets/css_variable/variable'
import React from 'react'

const usedStyles = makeStyles((theme) => ({
  root: {
    padding: '32px 0',
  },
  container: {
    width: maxWidth,
    margin: '0 auto',
    padding: '48px 0 32px 0',
    '& p': {
    fontWeight: 500,
    fontSize: '1.6rem',
    lineHeight: 1.7,
    padding: '8px 9px',
    color: '#666',
    },
    '& ul': {
        marginLeft: 28,
        padding: 0,
        '& li': {
            paddingLeft: 10,
            fontWeight: 400,
            fontSize: '1.6rem',
            lineHeight: 2,
            color: '#666',
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

const AboutIn = () => {
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
                <Grid item md={12}>
                  <Grid
                    container
                    direction='row'
                    justify='space-between'
                    alignItems='flex-start'
                    spacing={1}
                  >
                    <Grid item md={6}>
                      <p>
                        {' '}
                        Our cutting edge E-commerce platform, highly experienced
                        buying team, agile warehouse systems and customer care
                        center provides customer with:{' '}
                      </p>
                      <ul>
                        <li>Broader selection of products</li>
                        <li>Superior buying experience</li>
                        <li>On-time delivery of products</li>
                        <li>Quick resolution of any concerns</li>
                      </ul>
                    </Grid>
                    <Grid item md={6}>
                      <img
                        src='https://www.jodhpurifurniture.com/assets/images/about/02.jpg'
                        alt='About Us'
                      />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item md={12}>
                  <Grid
                    container
                    direction='row'
                    justify='space-between'
                    alignItems='flex-start'
                    spacing={1}
                  >
                    <Grid item md={6}>
                      <img
                        src='https://www.jodhpurifurniture.com/assets/images/about/03.jpg'
                        alt='About Us'
                      />
                    </Grid>
                    <Grid item md={6}>
                      <p>
                        {' '}
                        TonTon Handicrafts is an exporter from <b>
                          TonTon
                        </b>{' '}
                        (Vietnam) which is the hub for handicraft and furniture
                        industry and mainly deals in Sheesham and Mango wood
                        furniture items. Our dedicated team of skilled craftsmen
                        use the latest technology to provide a complete range of
                        innovative{' '}
                        <b>bedroom, dining rooms, living rooms, kitchen</b> and
                        storage furniture to provide clients all over the world
                        with finest quality furniture.{' '}
                        <b>TonTon Handicrafts</b> has its own unique
                        reputation in the world of wooden, industrial and
                        reclaimed furniture and handicraft items. We operate in
                        the industry with the mission of providing
                        uncompromising quality products.{' '}
                      </p>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Container>
          </Box>
        </div>
      </Paper>
    </div>
  )
}

export default AboutIn
