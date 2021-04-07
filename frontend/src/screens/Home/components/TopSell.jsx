import { Box, Container, Grid, Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { mainText, maxWidth } from 'assets/css_variable/variable'
import topSellCategoriesDown from 'mocks/topSellCategoriesDown'
import topSellCategoriesUp from 'mocks/topSellCategoriesUp'
import React from 'react'
import TopSellDown from './TopSellDown'
import TopSellUp from './TopSellUp'

const usedStyles = makeStyles((theme) => ({
  root: {
    paddingTop: 48,
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
      margin: '10px 0 26px 0',
    },
  },
  topSellDown: {
      marginTop: 80,
  },
  noPadding: {
    padding: 0,
  },
}))

const TopSell = () => {
  const classes = usedStyles()
  return (
    <div>
      <Paper className={classes.root} elevation={0}>
        <div className={classes.container}>
          <div className={classes.title}>
            <p>TOP SELLINGS</p>
            <img src='https://www.jodhpurifurniture.com/assets/images/border2.png' alt ='line'/>
          </div>
          <div>
            <Box>
              <Container className={classes.noPadding}>
                <Grid
                  container
                  direction='row'
                  justify='space-between'
                  alignItems='center'
                >
                  {topSellCategoriesUp.map((categoryUp) => (
                    <Grid key={categoryUp._id} item md-3>
                      <TopSellUp categoryUp={categoryUp} />
                    </Grid>
                  ))}
                </Grid>
              </Container>
            </Box>
          </div>

          <div className= {classes.topSellDown}>
            <Box>
              <Container className={classes.noPadding}>
                <Grid
                  container
                  direction='row'
                  justify='space-between'
                  alignItems='center'
                >
                  {topSellCategoriesDown.map((categoryDown) => (
                    <Grid key={categoryDown._id} item md-6>
                      <TopSellDown categoryDown={categoryDown} />
                    </Grid>
                  ))}
                </Grid>
              </Container>
            </Box>
          </div>
        </div>
      </Paper>
    </div>
  )
}

export default TopSell
