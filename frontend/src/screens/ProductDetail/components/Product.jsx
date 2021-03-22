import { Box, Container, Grid, Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { maxWidth } from 'assets/css_variable/variable'
import React from 'react'
import ProductImages from './ProductImages'
import ProductInfo from './ProductInfo'

const usedStyles = makeStyles((theme) => ({
  root: {
    padding: '32px 0',
    marginTop: 2,
  },
  container: {
    width: maxWidth,
    margin: '0 auto',
  },
  noPadding: {
    padding: '0 !important',
  },
  content: {
    width: 600,
  },
}))
const Product = (props) => {
  const { product, match, history } = props
  const classes = usedStyles()

  // console.log(product)

  return (
    <div>
      <Paper className={classes.root} elevation={0}>
        <div className={classes.container}>
          <Box>
            <Container className={classes.noPadding}>
              <Grid
                container
                direction='row'
                justify='space-between'
                alignItems='flex-start'
                spacing={3}
              >
                <Grid item md={7}>        
                  <ProductImages product={product} />
                </Grid>
                <Grid item md={5}>
                  <ProductInfo
                    product={product}
                    match={match}
                    history={history}
                  />
                </Grid>
              </Grid>
            </Container>
          </Box>
        </div>
      </Paper>
    </div>
  )
}

export default Product
