import { makeStyles } from '@material-ui/core/styles'
import {
  primaryText,
  whiteText
} from 'assets/css_variable/variable'
import React from 'react'
import { Link } from 'react-router-dom'
const usedStyles = makeStyles((theme) => ({
  root: {},
  container: {
    position: 'relative',
    textAlign: 'right',
  },
  img: {
    width: '100%',
    height: 'auto',
    verticalAlign: 'middle',
  },
  box: {
    position: 'absolute',
    background: whiteText,
    top: '20%',
    maxWidth: 320,
    height: 250,
    left: -9,
    border: '1px solid',
    borderColor: primaryText,
    textAlign: 'left',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    '& h4': {
      color: '#707070',
      marginLeft: 16,
      fontSize: '1.8rem',
      letterSpacing: 0.36,
      margin: 0,
      fontWeight: 600,
    },
    '& h2': {
      color: '#222',
      fontWeight: 300,
      marginLeft: 16,
      fontSize: '3.5rem',
      letterSpacing: 0.7,
      lineHeight: 1.2,
      margin: 0,
    },
    '& a': {
        marginLeft: 16,

      padding: '11px 26px 12px',
      backgroundColor: primaryText,
      letterSpacing: 0.32,
      color: whiteText,
      fontSize: '1.6rem',
      fontWeight: 500,
      border: '1px solid #f7941d',
      cursor: 'pointer',
      textDecoration: 'none !important',
      '&:hover': {
        backgroundColor: whiteText,
        color: primaryText,
      },
    },
  },
}))
const RoomUpLeft = () => {
  const classes = usedStyles()
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <div className={classes.box}>
          <h4>#Diningroom</h4>
          <h2>Tables & Dining Furniture</h2>
          <Link to = {'/category/603c9d90fafd2c4bbc488ff8'}>Shop Now</Link>
        </div>
        <img
          src='https://www.jodhpurifurniture.com/assets/images/banner/Tables%20&%20Dining.jpg'
          alt=''
        />
      </div>
    </div>
  )
}

export default RoomUpLeft
