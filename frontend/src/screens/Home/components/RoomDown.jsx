import { Link } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { mainText, primaryText,whiteText } from 'assets/css_variable/variable'
import React from 'react'
const usedStyles = makeStyles((theme) => ({
  root: {},
  container: {
    background: '#f8f8f8',
    padding: '0px !important',
    textAlign: 'left',
    borderRadius: '5px',
    border: '2px solid #ebebeb',
    // boxShadow:
    //   'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px',
    width: 370,
    marginLeft: 20,
    overflow: 'hidden',
    cursor: 'pointer',
    '&:hover': {
      border: '2px solid transparent',
      boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
      background: whiteText,
    //   backgroundColor: 'rgba(255, 138, 12, 0)',
      '& p': {
        color: primaryText,
      },
    },
    '& img': {
      width: '100%',
    },
    '& p': {
      margin: '10px 0 10px 10px',
      fontWeight: 600,
      fontSize: '1.5rem',
      color: mainText,
    },
  },
  noDecoration: {
    textDecoration: 'none !important',
  },
}))
const RoomDown = (props) => {
  const { category } = props;
  const classes = usedStyles()
  return (
    <div>
      <Link className={classes.noDecoration}>
        <div className={classes.container}>
          <img
            src= {category.img}
            alt={category.name}
          />
          <p>{category.name}</p>
        </div>
      </Link>
    </div>
  )
}

export default RoomDown
