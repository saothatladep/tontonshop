import { Box, Container, Grid, Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { Pagination } from '@material-ui/lab'
import { listProducts } from 'actions/productActions.js'
import { maxWidth } from 'assets/css_variable/variable'
import Loading from 'components/Loading'
import Messages from 'components/Messages'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Empty from './Empty'
import ProductDetail from './ProductDetail'
import Meta from 'components/Meta'

const usedStyles = makeStyles((theme) => ({
  root: {
    padding: '30px 0',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
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
const Products = (props) => {
  const { match, history } = props
  const classes = usedStyles()
  const dispatch = useDispatch()

  const pageNumber = match.params.pageNumber ? match.params.pageNumber : 1

  const productList = useSelector((state) => state.productList)
  const { loading, error, products, page, pages } = productList
  useEffect(() => {
    dispatch(listProducts(match.params.id, pageNumber))
  }, [dispatch, match, pageNumber])

  const pageHandler = (e, page) => {
    history.push(`/category/${match.params.id}/page/${page}`)
  }

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
                <Meta title = {`TonTon | ${products[0].category.name}`}/>
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
            count={pages}
            page={Number(pageNumber)}
            size='large'
            onChange={pageHandler}
          ></Pagination>
        </Paper>
      )}
    </div>
  )
}

export default Products
