import { Box, Container, Grid, Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { maxWidth } from 'assets/css_variable/variable'
import CheckOutSteps from 'components/CheckOutSteps'
import ScrollToTop from 'components/ScrollToTop'
import React from 'react'
import { useSelector } from 'react-redux'
import PlaceOrderInfo from './components/PlaceOrderInfo'
import SummaryPlaceOrder from './components/SummaryPlaceOrder'
import Meta from 'components/Meta'
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

  const cart = useSelector((state) => state.cart)
  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin
  console.log(userInfo)

  return (
    <div>
      <Meta title={`TonTon | Place Order`} />
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
                  <PlaceOrderInfo userInfo={userInfo} cart={cart} />
                </Grid>
                <Grid item md={4}>
                  <SummaryPlaceOrder
                    userInfo={userInfo}
                    cart={cart}
                    history={history}
                  />
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
