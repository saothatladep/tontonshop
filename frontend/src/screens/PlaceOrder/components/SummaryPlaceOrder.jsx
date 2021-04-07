import { makeStyles } from '@material-ui/core/styles'
import { primaryText, whiteText } from 'assets/css_variable/variable'
import Button from '@material-ui/core/Button'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createOrder } from 'actions/orderActions.js'
import { CART_RESET_ITEM } from 'constants/cartConstants'
import Messages from 'components/Messages'

const usedStyles = makeStyles((theme) => ({
  root: { paddingTop: 32 },
  container: {
    border: '1px solid',
    borderColor: primaryText,
    '& p': {
      color: '#333',
      fontWeight: 600,
      padding: '40px 0 40px 32px',
      textAlign: 'left',
      fontSize: '3rem',
      textTransform: 'uppercase',
      margin: 0,
    },
    '& button': {
      position: 'relative',
      left: 32,
      background: primaryText,
      padding: '8px 0',
      width: 318,
      margin: '24px auto',
      fontSize: '1.8rem',
      border: '1px solid ',
      borderColor: primaryText,
      '& span': {
        color: whiteText,
        fontSize: '1.8rem',
      },
      '&:hover': {
        background: whiteText,
        boxShadow: 'none',
        '& span': {
          color: primaryText,
        },
      },
    },
  },
  fee: {
    '& h1': {
      fontSize: '1.6rem',
      fontWeight: 700,
      textTransform: 'none',
      textAlign: 'left',
      padding: '12px 32px 12px 32px',
      lineHeight: '1.5',
      borderTop: '1px solid',
      borderColor: primaryText,
      margin: 0,
      position: 'relative',
      '& span': {
        fontWeight: 500,
        color: '#666',
        position: 'absolute',
        left: '55%',
      },
    },
  },
  lastBorder: {
    borderBottom: '1px solid black',
  },
}))
const SummaryPlaceOrder = (props) => {
  const classes = usedStyles()

  const dispatch = useDispatch()

  const { cart, history } = props
  const { cartItems, shippingAddress, paymentMethod } = cart

  //calculate prices
  cart.itemsPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  )

  cart.shippingPrice = cart.itemsPrice > 1000000000 ? 0 : 10000000

  cart.taxPrice = Number(0.1 * cart.itemsPrice)

  cart.totalPrice =
    Number(cart.itemsPrice) + Number(cart.shippingPrice) + Number(cart.taxPrice)

  const orderCreate = useSelector((state) => state.orderCreate)
  const { order, success, error } = orderCreate

  useEffect(() => {
    if (success) {
      history.push(`/order/${order._id}`)
    }
    window.scrollTo(0, 0)

    // eslint-disable-next-line
  }, [history, success])

  const placeOrderHandler = () => {
    dispatch(
      createOrder({
        orderItems: cartItems,
        shippingAddress: shippingAddress,
        paymentMethod: paymentMethod,
        itemsPrice: cart.itemsPrice,
        shippingPrice: cart.shippingPrice,
        taxPrice: cart.taxPrice,
        totalPrice: cart.totalPrice,
      })
    )

    dispatch({ type: CART_RESET_ITEM })
    localStorage.setItem('cartItems', JSON.stringify([]))
    localStorage.setItem('shippingAddress', JSON.stringify({}))
  }

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <p>order summary</p>
        <div className={classes.fee}>
          <h1>
            Items:{' '}
            <span>
              {new Intl.NumberFormat('vi-VN', {
                style: 'currency',
                currency: 'VND',
              }).format(cart.itemsPrice)}
            </span>
          </h1>
          <h1>
            Shipping:{' '}
            <span>
              {new Intl.NumberFormat('vi-VN', {
                style: 'currency',
                currency: 'VND',
              }).format(cart.shippingPrice)}
            </span>
          </h1>
          <h1>
            Tax:{' '}
            <span>
              {new Intl.NumberFormat('vi-VN', {
                style: 'currency',
                currency: 'VND',
              }).format(cart.taxPrice)}
            </span>
          </h1>
          <h1 className={classes.lastBorder}>
            Total:{' '}
            <span>
              {new Intl.NumberFormat('vi-VN', {
                style: 'currency',
                currency: 'VND',
              }).format(cart.totalPrice)}
            </span>
          </h1>
        </div>
        <Button
          disabled={cartItems === 0}
          type='submit'
          fullWidth
          variant='contained'
          onClick={placeOrderHandler}
        >
          Place order
        </Button>
      </div>
      {error && <Messages severity={'error'} message={error} />}
    </div>
  )
}

export default SummaryPlaceOrder
