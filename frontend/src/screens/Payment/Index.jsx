import { Paper } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import CssBaseline from '@material-ui/core/CssBaseline'
import { makeStyles } from '@material-ui/core/styles'
import { maxWidth, primaryText, whiteText } from 'assets/css_variable/variable'
import ScrollToTop from 'components/ScrollToTop'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { savePaymentMethod } from 'actions/cartActions'
import CheckOutSteps from 'components/CheckOutSteps'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import FormLabel from '@material-ui/core/FormLabel'
import Radio from '@material-ui/core/Radio'
import Messages from 'components/Messages'

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
  },
  form: {
    width: '50%',
    border: '1px solid',
    borderColor: primaryText,
    padding: '48px 64px 26px 64px',
    borderRadius: '5px',
    display: 'flex',
    flexDirection: 'column',
    '& legend': {
      fontSize: '2rem',
      color: primaryText,
      fontWeight: 'bold',
      textTransform: 'uppercase',
      paddingBottom: 16,
    },
    '& span': {
      fontSize: '1.6rem',
      color: '#333',
      fontWeight: 600,
      textTransform: 'none',
    },
  },

  group: {
    paddingLeft: 20,
  },

  submit: {
    background: primaryText,
    padding: '12px 0',
    width: 200,
    margin: '18px 0 24px 0',
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

const Payment = (props) => {
  const { history } = props
  const classes = usedStyles()

  const cart = useSelector((state) => state.cart)
  const { shippingAddress } = cart

  if (!shippingAddress) {
    history.push('/shipping')
  }

  const [paymentMethod, setPaymentMethod] = useState()
  const [message, setMessage] = useState()

  const dispatch = useDispatch()

  const submitHandler = (e) => {
    e.preventDefault()
    if (paymentMethod) {
      dispatch(savePaymentMethod(paymentMethod))

      history.push('/placeorder')
    } else {
      setMessage('You do not choose a payment method')
    }
  }
  const handleChange = (event) => {
    setPaymentMethod(event.target.value)
  }

  return (
    <div className={classes.root}>
      <Paper className={classes.container} elevation={0}>
        <CheckOutSteps step1 step2 step3 />
        <Container component='main' minWidth='xs'>
          <CssBaseline />
          <div className={classes.paper}>
            {message && <Messages severity={'warning'} message={message} />}
            <p>Payment Method</p>
            <form className={classes.form} onSubmit={submitHandler} noValidate>
              <FormControl component='fieldset'>
                <FormLabel component='legend'>Select Payment Method</FormLabel>
                <RadioGroup
                  aria-label='Payment Methods'
                  name='paymentMethod'
                  value={paymentMethod}
                  onChange={handleChange}
                  className={classes.group}
                >
                  <FormControlLabel
                    value='PayPal'
                    control={<Radio />}
                    label='PayPal'
                  />
                  <FormControlLabel
                    value='Cash'
                    control={<Radio />}
                    label='Cash'
                  />
                </RadioGroup>
              </FormControl>
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

export default Payment
