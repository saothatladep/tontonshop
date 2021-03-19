import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { link } from 'react-router-dom'
import { addToCart } from 'actions/cartActions'
import Message from 'components/Messages'
import { makeStyles } from '@material-ui/core/styles'
import { primaryText, whiteText, maxWidth } from 'assets/css_variable/variable'
import { Box, Container, Grid, Paper } from '@material-ui/core'
import CartItems from './components/CartItems'
import Summary from './components/Summary'
import CartEmpty from './components/CartEmpty'
import ScrollToTop from 'components/ScrollToTop'

const usedStyles = makeStyles((theme) => ({
  root: {
    marginTop: 14,
  },
  container: {
    width: maxWidth,
    margin: '0 auto',
  },
  noPadding: {
    padding: 0,
  },
  noDecoration: {
    textDecoration: 'none !important',
  },
}))
const Cart = (props) => {
  const classes = usedStyles()

  const { match, location, history } = props

  const productId = match.params.id
  const qty = location.search ? Number(location.search.split('=')[1]) : 1

  const dispatch = useDispatch()
  const cart = useSelector((state) => state.cart)
  const { cartItems } = cart
  console.log(cartItems)

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty))
    }
    window.scrollTo(0, 0)
  }, [dispatch, productId, qty])

  return (
    <div>
      <Paper className={classes.root} elevation={0}>
        {cartItems.length === 0 ? (
          <CartEmpty />
        ) : (
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
                    <CartItems cartItems={cartItems} />
                  </Grid>
                  <Grid item md={4}>
                    <Summary cartItems={cartItems} history={history} />
                  </Grid>
                </Grid>
              </Container>
            </Box>
          </div>
        )}
      </Paper>
      <ScrollToTop />
    </div>
  )
}

export default Cart
