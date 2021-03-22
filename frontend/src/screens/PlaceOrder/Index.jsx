import { Box, Container, Grid, Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { maxWidth, whiteText } from 'assets/css_variable/variable'
import React from 'react'
import OrderInfo from './components/OrderInfo'
import SummaryOrder from './components/SummaryOrder'
import Messages from 'components/Messages'
import ScrollToTop from 'components/ScrollToTop'
import CheckOutSteps from 'components/CheckOutSteps'
import { useDispatch, useSelector } from 'react-redux'

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
  const { history } = props

  const classes = usedStyles()

  const cart = useSelector(state => state.cart)
  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin  
  console.log(userInfo)

  return (
    <div>
      <Paper className={classes.root} elevation={0}>
        <div className={classes.container}>
          <CheckOutSteps step1 step2 step3 step4 />
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
                  <OrderInfo userInfo={userInfo} cart={cart} />
                </Grid>
                <Grid item md={4} >
                  <SummaryOrder userInfo={userInfo} cart={cart} history={history} />
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
