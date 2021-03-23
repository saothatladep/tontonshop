import { Box, Container, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { primaryText } from 'assets/css_variable/variable'
import React, { useState } from 'react'
import Magnifier from 'react-magnifier'

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
    border: '2px solid',
    borderColor: primaryText,
    borderRadius: 4,
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

  const [img, setImg] = useState(0)

  return (
    <div>
        <div className={classes.container}>
          <Magnifier
            src={img === 0 ? product.images[0].img : img}
            mgShape='square'
            mgWidth={220}
            mgHeight={220}
          />
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
                      <img className={img === image.img ? classes.img : ''}
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
