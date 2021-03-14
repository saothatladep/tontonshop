import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import { primaryText, whiteText } from 'assets/css_variable/variable'
import React from 'react'

const usedStyles = makeStyles((theme) => ({
  root: {},
  container: {
    width: '100%',
    display: 'inline-block',
    transition: 'all 0.2s ease-in',
    transform: 'scale(1)',
    border: '1px solid #fff',
    cursor: 'pointer',
    '&:hover': {
      transition: 'all 0.2s ease-in',
      transform: 'scale(1.1)',
      border: '2px solid #fff',
      zIndex: 99,
      position: 'relative',
      '& $title': {
        display: 'block',
      },
      '& $overLayUp': {
        visibility: 'visible',
      },
    },
  },
  img: {
    heigh: 256,
    width: 297,
  },
  title: {
    width: '80%',
    position: 'absolute',
    top: '31%',
    display: 'none',
    left: '10%',
    textAlign: 'center',
    border: '1px solid #fff',
    background: 'rgba(10,15,28,0.6)',
    padding: '12px 0',
    height: 100,
    '& p': {
      fontWeight: 600,
      fontSize: '1.8rem',
      color: primaryText,
      margin: 0,
    },
    '& h4': {
      fontWeight: 400,
      fontSize: '1.4rem',
      letterSpacing: 1,
      color: whiteText,
      margin: 0,
    },
  },
  line: {
    margin: '20px auto!important',
    display: 'block',
    backgroundColor: whiteText,
    width: 58,
    height: 1,
  },
  overLayUp: {
    margin: '2.5%',
    border: '3px solid #7d7673',
    height: '96.5%',
    width: '95%',
    position: 'absolute',
    top: 0,
    visibility: 'hidden',
  },
  noDecoration: {
    textDecoration: 'none !important',
  },
}))
const TopSellUp = (props) => {
  const { categoryUp } = props
  const classes = usedStyles()

  return (
    <div>
      <Link to = {`/category/${categoryUp._id}`} className={classes.noDecoration}>
        <div className={classes.container}>
          <div>
            <img className={classes.img} src={categoryUp.img} />
            <div className={classes.title}>
              <p>{categoryUp.name}</p>
              <div className={classes.line}></div>
              <h4>UPTO 50% OFF</h4>
            </div>
          </div>
          <div className={classes.overLayUp}></div>
        </div>
      </Link>
    </div>
  )
}

export default TopSellUp
