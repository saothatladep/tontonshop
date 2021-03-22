import React from 'react'
import { primaryText, whiteText, maxWidth } from 'assets/css_variable/variable'
import { makeStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button';

const usedStyles = makeStyles((theme) => ({
  root: { 
      paddingBottom: 64
  },
  container: {
    padding: '20px 15px',
    border: '3px solid',
    borderColor: primaryText,
    marginTop: 23,
    textAlign: 'left',
  },
  price: {
    listStyle: 'none',
    margin: 0,
    padding: 0,
    '& h1': {
      margin: 0,
      padding: '0 4px 24px 0',

      fontSize: '2.5rem',
      fontWeight: 600,
      color: '#333',
    },
    '& li': {
      padding: '9px 0',
      fontSize: '1.6rem',
      fontWeight: 500,
      color: '#333',
      listStyle: 'none',
      '& span': {
        float: 'right',
      },
    },
    '& hr': {
      width: '100%',
      borderTop: '2px solid #e1e1e1',
      margin: '25px auto',
    },
    '& button': {
      border: '1px solid #ff8a0c',
      margin: '20px auto 0',
      width: '100%',
      background: primaryText,
      fontSize: '1.6rem',
      textAlign: 'center',
      fontWeight: 600,
      padding: '13px 45px',
      display: 'block',
      textDecoration: 'none',
      cursor: 'pointer',
      color: whiteText,
      '&:hover': {
        background: whiteText,
        color: primaryText,
      },
    },
  },

  totalPrice: {
    '& b': {
      fontSize: '1.8rem',
      fontWeight: 700,
      color: '#333',
    },
    '& span': {
      fontSize: '1.8rem',
      fontWeight: 700,
      color: '#333',
    },
  },

  noPadding: {
    padding: 0,
  },
  noDecoration: {
    textDecoration: 'none !important',
  },
}))
const Summary = (props) => {
  const { cartItems, history} = props
  const classes = usedStyles()
  const ship = cartItems.length ===0 ? 0 : 1000000

  const checkoutHandler = () => {
      history.push('/login?redirect=shipping')
  }
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <ul className={classes.price}>
          <h1>PRICE DETAILS</h1>
          <li>
            Sub-Total:
            <span>
              {cartItems.reduce((acc, cartItem) => acc + cartItem.qty, 0)}
            </span>
          </li>
          {/* <li>
            Shipping & Handling:
            <span>
              {new Intl.NumberFormat('vi-VN', {
                style: 'currency',
                currency: 'VND',
              }).format(ship)}
            </span>
          </li>
          <hr /> */}
          <li className={classes.totalPrice}>
            <b>Total:</b>{' '}
            <span>
              {new Intl.NumberFormat('vi-VN', {
                style: 'currency',
                currency: 'VND',
              }).format(
                cartItems.reduce(
                  (acc, cartItem) => acc + cartItem.qty * cartItem.price,
                  ship
                )
              )}
            </span>
          </li>
          <Button disabled = {cartItems.length ===0} onClick = {checkoutHandler}>PROCEED TO CHECKOUT</Button>
        </ul>
      </div>
    </div>
  )
}

export default Summary
