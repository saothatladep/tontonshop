import { makeStyles } from '@material-ui/core/styles'
import LocationOnIcon from '@material-ui/icons/LocationOn'
import { mainText, primaryText } from 'assets/css_variable/variable'
import React from 'react'
import { Link } from '@material-ui/core'

const usedStyles = makeStyles((theme) => ({
  root: {},
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    '& svg': {
      fontSize: '2.4rem',
      marginRight: theme.spacing(1),
      color: primaryText,
    },
    '& a': {
      fontSize: '1.4rem',
      color: mainText,
      lineHeight: 1.5,
      fontWeight: 450,
      '&:hover': {
        color: primaryText,
      },
    },
  },
  noDecoration: {
    textDecoration: 'none !important',
  },
}))

const AddressLocation = (props) => {
  const classes = usedStyles()
  const { address } = props
  return (
    <div className={classes.container}>
      <LocationOnIcon />
      <Link href={address.link} className={classes.noDecoration}>
        {address.address}
      </Link>
    </div>
  )
}

export default AddressLocation
