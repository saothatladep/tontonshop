import { Box, Container, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { maxWidth, whiteText } from 'assets/css_variable/variable'
import React from 'react'
import ContactFooter from './ContactFooter'
import OptionFooter from './OptionFooter'

const usedStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: whiteText,
  },
  container: {
    width: maxWidth,
    margin: '0 auto',
    minHeight: 500,
    display: 'block',
  },
}))
const DetailFooter = () => {
  const classes = usedStyles()
  return (
    <div className={classes.root}>
      <Box className={classes.container}>
        <Container>
          <Grid container>
            <Grid item md-3>
              <ContactFooter />
            </Grid>
            <Grid item md-3>
              <OptionFooter />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  )
}

export default DetailFooter
