import { Link } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Rating from '@material-ui/lab/Rating'
import { primaryText, whiteText } from 'assets/css_variable/variable'
import React, { useState, useEffect } from 'react'
import { Box, Container, Grid, Paper } from '@material-ui/core'

const usedStyles = makeStyles((theme) => ({
  root: {},
  container: {
    width: '100%',

    // border: '1px solid black',
  },
  img: {
    width: '100%',
  },
  otherImg: {
    '& img': {
      width: 91.57,
      cursor: 'pointer',
      margin: '5px 7px 0 0',
    },
  },
  noPadding: {
    padding: 0,
  },
}))
const ProductImages = (props) => {
  const { product } = props
  const classes = usedStyles()
  const [img, setImg] = useState(product.images[0].img)
  console.log(product.images[0].img)
  return (
    <div>
      <div className={classes.container}>
        <img className={classes.img} src={img} alt='' />
        <div className={classes.otherImg}>
          <Box>
            <Container className={classes.noPadding}>
              <Grid
                container
                direction='row'
                justify='flex-start'
                alignItems='center'
                // spacing={0}
              >
                {/* {product.images.map((image) => (
                  <Grid item md-2 key={image._id}>
                    <img src={image.img} alt='' />
                  </Grid>
                ))} */}
              </Grid>
            </Container>
          </Box>
        </div>
      </div>
    </div>
  )
}

export default ProductImages
