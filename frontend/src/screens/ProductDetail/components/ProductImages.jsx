import { Link } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Rating from '@material-ui/lab/Rating'
import { primaryText, whiteText } from 'assets/css_variable/variable'
import React, { useState, useEffect } from 'react'
import { Box, Container, Grid, Paper } from '@material-ui/core'
import Magnifier from 'react-magnifier'
import ReactImageMagnify from 'react-image-magnify'
import { useDispatch, useSelector } from 'react-redux'

const usedStyles = makeStyles((theme) => ({
  root: {},
  container: {
    width: '100%',
    '& div:nth-child(1)': {
      zIndex: 10,
    },
    // border: '1px solid black',
  },
  img: {
    // maxWidth: '100%',
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

  // const productDetails = useSelector((state) => state.productDetails)
  // const { loading, error, product } = productDetails

  // console.log(productDetails)

  const [img, setImg] = useState(0)
  // console.log(product)

  return (
    <div>
      <div className={classes.container}>
        <Magnifier src={img === 0 ? product.images[0].img : img} mgShape = 'square' mgWidth = {220} mgHeight = {220}/>
        <div className={classes.otherImg}>
          <Box>
            <Container className={classes.noPadding}>
              <Grid
                container
                direction='row'
                justify='flex-start'
                alignItems='center'
              >
                {product.images.map((image) => (
                  <Grid item md-2 key={image._id}>
                    <img
                      src={image.img}
                      alt=''
                      onClick={(e) => setImg(image.img)}
                    />
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

export default ProductImages