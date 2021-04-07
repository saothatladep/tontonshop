import { Box, Container, Grid, Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { maxWidth } from 'assets/css_variable/variable'
import Loading from 'components/Loading'
import React, { useEffect } from 'react'
import {
  listProductDetails,
  resetListProductDetails,
} from 'actions/productActions.js'
import { useDispatch, useSelector } from 'react-redux'
import ProductImages from './ProductImages'
import ProductInfo from './ProductInfo'
import Messages from 'components/Messages'
import Meta from 'components/Meta'

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
  const { match, history } = props
  const classes = usedStyles()

  const dispatch = useDispatch()

  const productDetails = useSelector((state) => state.productDetails)
  const { loading, error, product } = productDetails

  useEffect(() => {
    dispatch(listProductDetails(match.params.id))
    window.scrollTo(0, 0)

    return function cleanup() {
      dispatch(resetListProductDetails())
    }
  }, [dispatch, match])

  return (
    <div>
      {loading ? (
        <Loading />
      ) : error ? (
        <Messages severity={'error'} message={error} />
      ) : (
        <Paper className={classes.root} elevation={0}>
          <Meta title={`TonTon | ${product.name}`} />
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
      )}
    </div>
  )
}

export default Product
