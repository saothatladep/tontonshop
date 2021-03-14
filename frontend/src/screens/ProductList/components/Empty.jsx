import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { whiteText, maxWidth, primaryText } from 'assets/css_variable/variable'
import box from 'assets/icon/box.png'
import {Link} from 'react-router-dom'

const usedStyles = makeStyles((theme) => ({
  root: {
    // paddingTop: 65,
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
    padding: '12px 8px',
    color: '#fff',
    fontSize: '1.6rem',
    cursor: 'pointer',
    width: 150,
    margin: '0 auto',
    fontWeight: 500,
    border: '1px solid',
    borderColore: primaryText,
    '&:hover': {
        color: primaryText,
        background: whiteText,
    },
  },
}))
const Empty = () => {
    const classes = usedStyles();
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <p>This product is not available currently</p>
        <img src={box} />
        <Link to = '/' className = {classes.link}>
            BACK TO HOME
        </Link>
      </div>
    </div>
  )
}

export default Empty
