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
    alignItems: 'center',
    justifyContent: 'flex-start',
    '& img': {
      margin: '16px auto',
    },
    '& h1': {
      fontWeight: 700,
      fontSize: '2.5rem',
      color: '#333',
      margin: 10,
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

const RefundReturn = () => {
  const classes = usedStyles()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div>
      <Meta title={`TonTon | Return And Refunds`} />
      <div>
        <Paper className={classes.root} elevation={0}>
          <div className={classes.container}>
            <h1>Return And Refunds</h1>
            <img
              src='https://www.jodhpurifurniture.com/assets/images/border2.png'
              alt='line'
            />
            <p>
              Our customer’s complete satisfaction is our top priority. We want
              to ensure that you have a seamless experience each time you decide
              to transact with us. However if due to unforeseen circumstances
              you are not happy with the services then the following terms apply
              for a mutually consented resolution of the situation.
            </p>

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
                    <h2>How do I track my order?</h2>
                    <p>
                      {' '}
                      You can track your order my signing up and visiting My
                      Orders page. Over here you can view the entire order
                      details with current status, placed, accepted, in process,
                      shipment or delivered. We always try our best to deliver
                      the product within the specified or communicated time
                      limit.{' '}
                    </p>
                  </Grid>
                  <Grid item md={12}>
                    <h2>What is the estimated time for a delivery?</h2>
                    <p>
                      {' '}
                      Once the order is confirmed, products are typically
                      manufactured and dispatched within 4 - 7 weeks. We will
                      notify you once the product has been dispatched for
                      delivery.{' '}
                    </p>
                  </Grid>
                  <Grid item md={12}>
                    <h2>
                      {' '}
                      What should be done if I receive a damaged product or
                      there is a manufacturing defect?{' '}
                    </h2>
                    <p>
                      {' '}
                      We follow strict quality control measures to ensure that
                      the product is up to our standards before it is delivered.
                      In case you receive a damaged product during
                      transportation, or there is a manufacturing defect, such
                      as, balancing, finish, leveling, fabric, etc., please
                      raise this issue with the delivery boy immediately and
                      also contact Customer Support.{' '}
                    </p>
                    <p>
                      {' '}
                      Depending on the degree of the damage, we will either
                      repair the product or replace it.{' '}
                    </p>
                  </Grid>
                  <Grid item md={12}>
                    <h2>
                      {' '}
                      Are there any delivery or installation charges, or any
                      hidden fees?{' '}
                    </h2>
                    <p>
                      {' '}
                      No. Delivery and installation of product is free of charge
                      for all orders above INR 5000. We deliver all across
                      India, apart from a few non-serviceable PIN codes. Before
                      placing an order, it is recommended to check availability
                      in your area by entering your pin-code.{' '}
                    </p>
                  </Grid>
                  <Grid item md={12}>
                    <h2>Can I cancel an order?</h2>
                    <p>
                      {' '}
                      In case, you are not satisfied with the item delivered or
                      are unable to make space for it, you may request for a
                      cancellation in the following cases and manner:{' '}
                    </p>
                    <p>
                      {' '}
                      Cancellation within 12 Hours: You can cancel any order
                      within 12 hours from the time of placing the order. You
                      will return a refund within 24 working hours. If there are
                      certain design requirements that we cannot fulfill,
                      cancellation of the order will be initiated by us after
                      informing the customer.{' '}
                    </p>
                    <p>Cancellation after delivery is NOT Allowed.</p>
                  </Grid>
                  <Grid item md={12}>
                    <h2>Is there any form of cancellation fee?</h2>
                    <p>
                      {' '}
                      If you have cancelled your order during the specified
                      12-hour time limit after placing the order, the processing
                      fee on your order will be deducted and the remaining
                      amount will be returned to you.{' '}
                    </p>
                  </Grid>
                  <Grid item md={12}>
                    <h2>Can custom products be returned?</h2>
                    <p>
                      {' '}
                      Since all custom orders are manufactured as per customer
                      requirements the company will NOT ACCEPT the return of
                      such products unless there are incorrect handlings from
                      the company.{' '}
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

export default RefundReturn
