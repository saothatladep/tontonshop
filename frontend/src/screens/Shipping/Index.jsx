import { Paper } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import CssBaseline from '@material-ui/core/CssBaseline'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import { maxWidth, primaryText, whiteText } from 'assets/css_variable/variable'
import ScrollToTop from 'components/ScrollToTop'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { saveShippingAddress } from 'actions/cartActions'
import CheckOutSteps from 'components/CheckOutSteps'
import Meta from 'components/Meta'

const usedStyles = makeStyles((theme) => ({
  root: { background: '#fff' },
  container: {
    width: maxWidth,
    margin: '0 auto',
    padding: '48px 0 64px 0',
    marginTop: 2,
  },
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    '& p': {
      color: '#333',
      fontWeight: 600,
      padding: '24px 0',
      textAlign: 'center',
      fontSize: '3rem',
      textTransform: 'uppercase',
      margin: 0,
    },
    '& input': {
      borderStyle: 'none',
      height: 20,
      //   margin: '10px 0',
      outline: 0,
      boxShadow: 'none',
      background: '#f5f5f5',
      fontSize: '1.6rem',
      color: '#555',
    },
    '& a': {
      textDecoration: 'none',
      fontSize: '1.6rem',
      color: primaryText,
      fontWeight: 600,
    },
    '& span': {
      fontSize: '1.6rem',
      color: '#333',
      fontWeight: 600,
      textTransform: 'uppercase',
    },
  },
  form: {
    width: '50%',
    border: '1px solid',
    borderColor: primaryText,
    padding: '48px 64px 26px 64px',
    borderRadius: '5px',
    '& label': {
      fontSize: '2rem',
      color: 'e3e3e3',
    },
  },
  submit: {
    background: primaryText,
    padding: '12px 0',
    width: 200,
    margin: '24px 0px',
    fontSize: '1.8rem',
    border: '1px solid ',
    borderColor: primaryText,
    '& span': {
      color: whiteText,
      fontSize: '1.8rem',
    },
    '&:hover': {
      background: whiteText,
      boxShadow: 'none',
      '& span': {
        color: primaryText,
      },
    },
  },
}))

const Shipping = (props) => {
  const { history } = props
  const classes = usedStyles()

  const cart = useSelector((state) => state.cart)
  const { shippingAddress } = cart

  const [phone, setPhone] = useState(shippingAddress.phone)
  const [address, setAddress] = useState(shippingAddress.address)
  const [city, setCity] = useState(shippingAddress.city)
  const [postalCode, setPostalCode] = useState(shippingAddress.postalCode)
  const [country, setCountry] = useState(shippingAddress.country)

  const dispatch = useDispatch()

  const submitHandler = (e) => {
    e.preventDefault()

    dispatch(saveShippingAddress({ phone, address, city, postalCode, country }))

    history.push('/payment')
  }

  return (
    <div className={classes.root}>
    <Meta title={`TonTon | Shipping Address`} />
      <Paper className={classes.container} elevation={0}>
        <CheckOutSteps step1 step2 />
        <Container component='main' minWidth='xs'>
          <CssBaseline />
          <div className={classes.paper}>
            <p>Delivery And Shipping Details</p>
            <form className={classes.form} onSubmit={submitHandler} noValidate>
              <TextField
                variant='outlined'
                margin='normal'
                fullWidth
                id='phone'
                label='Phone Number'
                name='phone'
                autoComplete='phone-number'
                value={phone}
                required={true}
                onChange={(e) => setPhone(e.target.value)}
                autoFocus={true}
              />
              <TextField
                variant='outlined'
                margin='normal'
                fullWidth
                id='address'
                label='Address'
                name='address'
                autoComplete='address'
                value={address}
                required={true}
                onChange={(e) => setAddress(e.target.value)}
              />
              <TextField
                variant='outlined'
                margin='normal'
                fullWidth
                id='city'
                label='City'
                name='city'
                autoComplete='city'
                value={city}
                required={true}
                onChange={(e) => setCity(e.target.value)}
              />
              <TextField
                variant='outlined'
                margin='normal'
                fullWidth
                name='postalCode'
                label='Postal Code'
                id='postalCode'
                required={true}
                autoComplete='Postal-code'
                value={postalCode}
                onChange={(e) => setPostalCode(e.target.value)}
              />
              <TextField
                variant='outlined'
                margin='normal'
                fullWidth
                name='country'
                label='Country'
                id='country'
                required={true}
                value={country}
                autoComplete='country'
                onChange={(e) => setCountry(e.target.value)}
              />

              <Button
                type='submit'
                fullWidth
                variant='contained'
                className={classes.submit}
              >
                CONTINUE
              </Button>
            </form>
          </div>
        </Container>
      </Paper>
      <ScrollToTop />
    </div>
  )
}

export default Shipping
