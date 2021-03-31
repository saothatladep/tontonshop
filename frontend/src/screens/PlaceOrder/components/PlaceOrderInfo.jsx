import { makeStyles } from '@material-ui/core/styles'
import { primaryText } from 'assets/css_variable/variable'
import React from 'react'

const usedStyles = makeStyles((theme) => ({
  root: {},
  container: {
    paddingTop: 32,
  },
  orderInfo: {
    border: '1px solid',
    borderColor: primaryText,
    padding: '16px 0',
    '& p': {
      color: '#333',
      fontWeight: 600,
      padding: '24px 0 24px 32px',
      textAlign: 'left',
      fontSize: '3rem',
      textTransform: 'uppercase',
      margin: 0,
    },
    '& h1': {
      fontSize: '1.6rem',
      fontWeight: 700,
      textTransform: 'none',
      textAlign: 'left',
      padding: '0 32px 12px 32px',
      lineHeight: '1.5',
      '& span': {
        fontWeight: 500,
        color: '#666',
      },
    },
  },
  orderItem: {
    border: '1px solid',
    borderColor: primaryText,
    paddingTop: 16,
    margin: '24px 0px 48px 0',
    '& p': {
      color: '#333',
      fontWeight: 600,
      padding: '24px 0 24px 32px',
      textAlign: 'left',
      fontSize: '3rem',
      textTransform: 'uppercase',
      margin: 0,
    },
  },
  item: {
    display: 'flex',
    position: 'relative',
    alignItems: 'center',
    margin: '0 32px 12px 32px',
    borderTop: '1px solid #666',
    paddingTop: 12,
    '& img': {
      width: 70,
      height: 50,
    },
    '& h2': {
      marginLeft: 16,
      color: '#666',
    },
    '& h3': {
      color: '#666',
      position: 'absolute',
      left: '64%',
      fontSize: '1.3rem',
    },
  },
}))
const PlaceOrderInfo = (props) => {
  const { userInfo, cart } = props
  const { cartItems, shippingAddress, paymentMethod } = cart

  const classes = usedStyles()

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <div className={classes.orderInfo}>
          <p>order information</p>
          <h1>
            Orderer: <span>{userInfo.name}</span>
          </h1>
          <h1>
            Email: <span>{userInfo.email}</span>
          </h1>
          <h1>
            Phone: <span>{shippingAddress.phone}</span>
          </h1>
          <h1>
            Address:{' '}
            <span>
              {shippingAddress.address}, {shippingAddress.city},{' '}
              {shippingAddress.country}
            </span>
          </h1>
          <h1>
            Payment Method: <span>{paymentMethod}</span>
          </h1>
        </div>

        <div className={classes.orderItem}>
          <p>order items</p>
          {cartItems.map((cartItem, index) => (
            <div className={classes.item} key={index}>
              <img src={cartItem.image} alt={cartItem.name} />
              <h2>{cartItem.name}</h2>
              <h3>
                {cartItem.qty} x{' '}
                {new Intl.NumberFormat('vi-VN', {
                  style: 'currency',
                  currency: 'VND',
                }).format(cartItem.price)}{' '}
                ={' '}
                {new Intl.NumberFormat('vi-VN', {
                  style: 'currency',
                  currency: 'VND',
                }).format(cartItem.qty * cartItem.price)}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default PlaceOrderInfo
