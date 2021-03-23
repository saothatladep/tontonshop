import { Box, Container, Grid, Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { maxWidth } from 'assets/css_variable/variable'
import ScrollToTop from 'components/ScrollToTop'
import React from 'react'
import OrderInfo from './components/OrderInfo'
import SummaryOrder from './components/SummaryOrder'

const usedStyles = makeStyles((theme) => ({
  root: {
    padding: '0',
    marginTop: 2,
  },
  container: {
    width: maxWidth,
    margin: '0 auto',
    paddingTop: 48,
  },
  noPadding: {
    padding: '0 !important',
  },
}))

const PlaceOrder = (props) => {
  const { match } = props

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
                <Grid item md={8}>
                  <OrderInfo match={match} />
                </Grid>
                <Grid item md={4}>
                  <SummaryOrder match={match} />
                </Grid>
              </Grid>
            </Container>
          </Box>
        </div>
      </Paper>
      <ScrollToTop />
    </div>
  )
}

export default PlaceOrder
