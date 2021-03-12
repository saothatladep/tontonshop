import { Box, Container, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { maxWidth, whiteText } from 'assets/css_variable/variable'
import React, { useState } from 'react'
import AddressLocation from './AddressLocation'
import AddressesData from 'mocks/addressesData.js'

const usedStyles = makeStyles((theme) => ({
  root: {
    background: whiteText,
    height: 150,
    borderTop: '1px solid #e1e1e1',
  },
  container: {
    width: maxWidth,
    margin: '0 auto',
  },
  title: {
    color: '#222',
    fontSize: '2rem',
    fontWeight: 600,
    padding: '32px 0 16px 0',
    margin: 0,
  },
  noPadding: {
    padding: 0,
  },
}))

const Address = () => {
  const classes = usedStyles()
  const [addresses, setAddresses] = useState(AddressesData)
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <p className={classes.title}>TonTon Furniture Locations</p>
        <div className={classes.address}>
          <Box>
            <Container className={classes.noPadding}>
              <Grid
                container
                direction='row'
                justify='space-between'
                alignItems='center'
                // spacing={5}
              >
                {addresses.map((address) => (
                  <Grid key={address._id} item md={3}>
                    <AddressLocation address = {address} />
                  </Grid>
                ))}
              </Grid>
            </Container>
          </Box>
        </div>
      </div>
    </div>
  )
}

export default Address
