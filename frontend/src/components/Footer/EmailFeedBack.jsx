import { Button, InputBase } from '@material-ui/core'
import { fade, makeStyles } from '@material-ui/core/styles'
import {
  maxWidth,
  primaryText,
  whiteText,
  mainText,
} from 'assets/css_variable/variable'
import React from 'react'

const usedStyles = makeStyles((theme) => ({
  container: {
    width: maxWidth,
    height: 300,
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    zIndex: 1000,
  },
  inputInput: {
    padding: theme.spacing(1.4, 1, 1, 0),
    paddingLeft: theme.spacing(2),
    marginTop: -36,
    transition: theme.transitions.create('width'),
    width: '550px',
    height: '50px',
    fontSize: '1.6rem',
    border: '1px solid #e1e1e1',
    backgroundColor: fade(whiteText, 1),
    '&:hover': {
      boxShadow: '0 1px 6px rgb(32 33 36 / 28%)',
      borderColor: 'rgba(223,225,229,0)',
    },
    borderRadius: 50,
  },
  ButtonSub: {
    width: 110,
    height: 40,
    marginTop: -48,
    backgroundColor: primaryText,
    borderRadius: 10,
    border: '1px solid',
    borderColor: primaryText,
    '& span': {
      fontSize: '1.6rem',
      color: whiteText,
      fontWeight: '300',
    },
    '&:hover': {
      backgroundColor: 'transparent',
      '& span': {
        color: primaryText,
      },
    },
  },
  textBig: {
    fontSize: '3rem',
    fontWeight: '500',
    margin: 0,
    color: mainText,
  },
  textSmall: {
    fontSize: '1.6rem',
    color: '#666',
    marginTop: -32,
  },
}))

const EmailFeedBack = () => {
  const classes = usedStyles()

  return (
    <div className={classes.container}>
      <p className={classes.textBig} variant='h3'>
        SUBSCRIBE OUR NEWSLETTER
      </p>
      <p className={classes.textSmall} variant='h5'>
        Enter you email address to stay tuned with latest offers and products.
      </p>

      <InputBase
        className={classes.inputInput}
        placeholder='Enter your email address'
      />
      <Button className={classes.ButtonSub}>SUBSCRIBE</Button>
    </div>
  )
}

export default EmailFeedBack
