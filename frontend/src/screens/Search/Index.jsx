import { Box, Container, Grid, Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { Pagination } from '@material-ui/lab'
import { maxWidth } from 'assets/css_variable/variable'
import Loading from 'components/Loading'
import Messages from 'components/Messages'
import Empty from 'screens/ProductList/components/Empty'
import ProductDetail from 'screens/ProductList/components/ProductDetail'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { listAllProducts } from 'actions/productActions.js'

const usedStyles = makeStyles((theme) => ({
  root: {
    padding: '30px 0',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 2,
  },
  container: {
    width: maxWidth,
    textAlign: 'center',
    margin: '0 auto 0 auto',
  },
  pagination: {
    padding: '30px 0 8px 0',
    '& button': {
      fontSize: '1.6rem',
    },
    '& svg': {
      fontSize: '2.4rem !important',
    },
  },
  noPadding: {
    padding: 0,
  },
}))
const Index = (props) => {
  const { match } = props
  const classes = usedStyles()

  const keyword = match.params.keyword

  const dispatch = useDispatch()

  const productListAll = useSelector((state) => state.productListAll)
  const { loading, error, products } = productListAll

  useEffect(() => {
    dispatch(listAllProducts(keyword))
  }, [dispatch, match, keyword])

  return (
    <div>
      {loading ? (
        <Loading />
      ) : error ? (
        <Messages severity={'error'} message={error} />
      ) : (
        <Paper className={classes.root} elevation={0}>
          <div className={classes.container}>
            {products.length === 0 ? (
              <Empty />
            ) : (
              <div>
                <Box>
                  <Container className={classes.noPadding}>
                    <Grid
                      container
                      direction='row'
                      justify='flex-start'
                      alignItems='center'
                      spacing={4}
                    >
                      {products.map((product) => (
                        <Grid key={product._id} item md-4>
                          <ProductDetail product={product} />
                        </Grid>
                      ))}
                    </Grid>
                  </Container>
                </Box>
              </div>
            )}
          </div>
          <Pagination
            className={classes.pagination}
            color='primary'
            count={5}
            page={2}
            size='large'
          ></Pagination>
        </Paper>
      )}
    </div>
  )
}

export default Index
