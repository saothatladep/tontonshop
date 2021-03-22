import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  mainText,
  maxWidth,
  primaryText,
  whiteText,
} from 'assets/css_variable/variable'
import Paper from '@material-ui/core/Paper'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import { Link } from 'react-router-dom'

const usedStyles = makeStyles((theme) => ({
  containTypes: {
    width: maxWidth,
    display: 'flex',
    justifyContent: 'center',
    paddingBottom: 24,
    '& a': {
      textDecoration: 'none',
      '&:hover': {
        '& span': {
          color: primaryText,
        },
      },
    },
    '& span': {
      fontSize: '1.6rem',
      fontWeight: '700',
      padding: '10px 0',
      fontFamily: "'Montserrat', sans-serif !important",
      color: '#111',
    },
  },
  container: {
      border: '2px solid',
      borderColor: primaryText,
  },
  disabled: {
    pointerEvents: 'none',
    cursor: 'default',
    textDecoration: 'none',
    '& span': {
      color: '#888',
    },
  },
}))

const CheckOutSteps = (props) => {
  const { step1, step2, step3, step4 } = props

  const [value, setValue] = useState()

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }
  const classes = usedStyles()

  return (
    <div className={classes.containTypes}>
      <Paper className = {classes.container} square elevation={0}>
        <Tabs
          value={value}
          indicatorColor='primary'
          onChange={handleChange}
          aria-label='disabled tabs example'
        >
          <Link className={step1 ? '' : classes.disabled} to={'/login'}>
            <Tab label='Login' />
          </Link>
          <Link className={step2 ? '' : classes.disabled} to={'/shipping'}>
            <Tab label='Shipping' />
          </Link>
          <Link className={step3 ? '' : classes.disabled} to={'/payment'}>
            <Tab label='Payment' />
          </Link>
          <Link className={step4 ? '' : classes.disabled} to={'/placeorder'}>
            <Tab label='Place Order' />
          </Link>
        </Tabs>
      </Paper>
    </div>
  )
}

export default CheckOutSteps
