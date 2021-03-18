import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { whiteText, maxWidth, primaryText } from 'assets/css_variable/variable'
import empty from 'assets/icon/empty.png'
import {Link} from 'react-router-dom'

const usedStyles = makeStyles((theme) => ({
  root: {
    padding: '65px 0',
    marginTop: -12,
  },
  container: {
    width: maxWidth,
    margin: '0 auto 0 auto',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'column',
    '& p': {
        fontSize: '2rem',
        fontWeight: 600,
    },
    '& img': {
        width: 120,
        padding: '12px 0 16px 0',
    },
  },
  link: {
    textDecoration: 'none !important',
    background: primaryText,
    padding: '16px 8px',
    color: '#fff',
    fontSize: '1.6rem',
    cursor: 'pointer',
    width: 200,
    textAlign: 'center',
    margin: '0 auto',
    fontWeight: 500,
    border: '1px solid',
    borderColor: primaryText,
    '&:hover': {
        color: primaryText,
        background: whiteText,
    },
  },
}))
const CartEmpty = () => {
    const classes = usedStyles();
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <p>Your cart is currently empty.</p>
        <img src={empty} alt ='' />
        <Link to = '/' className = {classes.link}>
            RETURN TO HOME
        </Link>
      </div>
    </div>
  )
}

export default CartEmpty
