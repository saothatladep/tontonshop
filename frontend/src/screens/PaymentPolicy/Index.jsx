import React, { useEffect } from 'react'
import ScrollToTop from 'components/ScrollToTop'
import { makeStyles } from '@material-ui/core/styles'
import Meta from 'components/Meta'
import { Box, Container, Grid, Paper } from '@material-ui/core'
import { maxWidth, primaryText } from 'assets/css_variable/variable'

const usedStyles = makeStyles((theme) => ({
  root: { marginTop: 2 },
  container: {
    width: maxWidth,
    margin: '0 auto',
    padding: '48px 0 48px 0',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    '& img': {
      margin: '16px auto',
    },
    '& h1': {
      fontWeight: 700,
      fontSize: '2.5rem',
      color: '#333',
      margin: '0 auto',
      padding: 8,
    },
    '& ol': {
      fontWeight: 500,
      fontSize: '1.6rem',
      padding: '8px 24px',
      margin: '0 -8px',
      color: '#666',
      lineHeight: 1.7,
    },
    '& p': {
      fontWeight: 500,
      fontSize: '1.6rem',
      lineHeight: 1.7,
      margin: '8px 0',
      padding: '0 29px',
      color: '#666',
    },
    '& h2': {
      color: primaryText,
      fontWeight: 700,
      fontSize: '2.5rem',
      marginLeft: 28,
      lineHeight: 1.5,
    },
  },
  noPadding: {
    padding: 0,
  },
  noDecoration: {
    textDecoration: 'none !important',
  },
}))

const PaymentPolicy = () => {
  const classes = usedStyles()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div>
      <Meta title={`TonTon | Payment Policy`} />
      <div>
        <Paper className={classes.root} elevation={0}>
          <div className={classes.container}>
            <h1>Payment Policy</h1>
            <img
              src='https://www.jodhpurifurniture.com/assets/images/border2.png'
              alt='line'
            />
            <Box>
              <Container className={classes.noPadding}>
                <Grid
                  container
                  direction='row'
                  justify='space-between'
                  alignItems='flex-start'
                  spacing={0}
                >
                  <Grid item md={12}>
                    <h2>Which forms of payment are acceptable?</h2>
                    <p>Users can make payment using PayPal payment gateway.</p>
                    <p>
                      {' '}
                      All payments made on the Website should be in the
                      Vietnamese National.{' '}
                    </p>
                  </Grid>
                  <Grid item md={12}>
                    <h2>Is there any form of additional or hidden fee?</h2>
                    <p>
                      {' '}
                      No, there is no hidden fee on purchases made by you at
                      TonTon. We also don’t charge any Shipping or Handling fee.{' '}
                    </p>
                  </Grid>
                  <Grid item md={12}>
                    <h2>How are my electronic payments processed?</h2>
                    <p>Users can make payment using PayPal payment gateway.</p>
                    <p>
                      {' '}
                      All valid Credit/Debit Cash cards and other payment
                      instruments are processed using the payment gateway or
                      appropriate payment system infrastructure. TonTon does
                      not, in any way, store the information of your
                      Credit/Debit cards.{' '}
                    </p>
                  </Grid>
                </Grid>
              </Container>
            </Box>
          </div>
        </Paper>
      </div>
      <ScrollToTop />
    </div>
  )
}

export default PaymentPolicy
