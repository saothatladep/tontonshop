import { Box, Container, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { maxWidth, whiteText } from 'assets/css_variable/variable'
import footerItemData from 'mocks/footerItemData'
import React, { useState } from 'react'
import ContactFooter from './ContactFooter'
import OptionFooter from './OptionFooter'
const usedStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: whiteText,
    padding: 0,
  },
  container: {
    width: maxWidth,
    margin: '0 auto',
    minHeight: 450,
    display: 'block',
    paddingTop: theme.spacing(4),
  },
  wrapper: {
    padding: 0,
  },
}))
const DetailFooter = () => {
  const classes = usedStyles()
  const initDataFooter = footerItemData
  const [footerListOption, setFooterListOption] = useState(initDataFooter)
  return (
    <div className={classes.root}>
      <Box className={classes.container}>
        <Container className={classes.wrapper}>
          <Grid
            container
            direction='row'
            justify='space-between'
            alignItems='center'
            spacing={5}
          >
            <Grid item md={5}>
              <ContactFooter />
            </Grid>
            <Grid item md={7}>
              <Grid
                container
                direction='row'
                justify='flex-end'
                alignItems='baseline'
                spacing={5}
              >
                {footerListOption.map((footer) => (
                  <Grid item md={4} key={footer.id}>
                    <OptionFooter footer={footer} />
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  )
}

export default DetailFooter
