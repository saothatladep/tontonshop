import { Link } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import ExploreIcon from '@material-ui/icons/Explore'
import { primaryText, whiteText } from 'assets/css_variable/variable'
import React from 'react'

const usedStyles = makeStyles((theme) => ({
  root: {},
  container: {
    width: 578,
    backgroundColor: '#f9f9f9',
    cursor: 'pointer',
    borderRadius: 5,
    overflow: 'hidden',
    '&:hover': {
      backgroundColor: whiteText,
      boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',

      '& svg': {
        color: primaryText,
      },
    },
  },
  img: {
    width: '100%',
    height: 286,
  },
  location: {
    minHeight: 123,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '& svg': {
      fontSize: '5rem',
      margin: '-50px 0 0 16px',
      color: '#a37134',
    },
  },
  detail: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginLeft: 16,
    '& p': {
      fontSize: '1.8rem',
      fontWeight: 500,
      color: '#222',
      // margin: '4 0 12 10',
      margin: 0,
      padding: '13px 0',
    },
    '& h3': {
      fontSize: '1.4rem',
      fontWeight: 500,
      color: '#707070',
      lineHeight: '2.2rem',
      margin: 0,
      textAlign: 'left',
      padding: '0 10px 16px 0',
    },
  },
  noDecoration: {
    textDecoration: 'none !important',
  },
}))

const AddressChild = (props) => {
  const { address } = props
  const classes = usedStyles()
  return (
    <div>
      <Link className={classes.noDecoration} href = {address.link}>
        <div className={classes.container}>
          <img className={classes.img} src={address.img} alt='' />
          <div className={classes.location}>
            <ExploreIcon />
            <div className={classes.detail}>
              <p>{address.name}</p>
              <h3>{address.detail}</h3>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default AddressChild
