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
    '& ul': {
      fontWeight: 500,
      fontSize: '1.6rem',
      padding: '8px 24px',
      margin: '0 -8px',
      color: '#666',
      lineHeight: 1.7,
      marginLeft: -19,
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
    '& a': {
      textDecoration: 'none',
      color: primaryText,
    },
  },

  noPadding: {
    padding: 0,
  },
  noDecoration: {
    textDecoration: 'none !important',
  },
}))

const TrackOrder = () => {
  const classes = usedStyles()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div>
      <Meta title={`TonTon | Track Order`} />
      <div>
        <Paper className={classes.root} elevation={0}>
          <div className={classes.container}>
            <h1>TRACK YOUR WOODEN FURNITURE ORDERS - TONTON FURNITURE</h1>
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
                    <h2>Your order is as important to us as it is for you.</h2>
                    <p>Users can make payment using PayPal payment gateway.</p>
                    <p>
                      {' '}
                      Once your order is successfully placed, you will receive
                      an email and SMS notification of the same. You will also
                      be notified at each instance like when the order is
                      accepted, processed, shipped and delivered.{' '}
                    </p>
                  </Grid>
                  <Grid item md={12}>
                    <h2>How do I track my order?</h2>
                    <ul>
                      <ol>
                        <li>
                          {' '}
                          You can track your order my signing up and visiting My
                          Orders page. Over here you can view the entire order
                          details with its current status.{' '}
                        </li>
                        <li>
                          {' '}
                          In case you have any queries regarding the status of
                          your order, you can reach us at{' '}
                          <a href='tel:+84 903060651'> +84 903060651 </a> or
                          drop us an email at{' '}
                          <a href='mailto:info@tontonfurniture.com'>
                            {' '}
                            info@tontonfurniture.com.
                          </a>
                        </li>
                      </ol>
                    </ul>
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

export default TrackOrder
