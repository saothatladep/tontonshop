import { Box, Container, Grid, Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { Pagination } from '@material-ui/lab'
import { maxWidth, primaryText } from 'assets/css_variable/variable'
import Loading from 'components/Loading'
import Messages from 'components/Messages'
import Empty from 'screens/ProductList/components/Empty'
import ProductDetail from 'screens/ProductList/components/ProductDetail'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { listAllProducts } from 'actions/productActions.js'
import Meta from 'components/Meta'

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
  const { match, history } = props
  const classes = usedStyles()

  const keyword = match.params.keyword

  const pageNumber = match.params.pageNumber ? match.params.pageNumber : 1

  const dispatch = useDispatch()

  const productListAll = useSelector((state) => state.productListAll)
  const { loading, error, products, page, pages } = productListAll

  useEffect(() => {
    dispatch(listAllProducts(keyword, pageNumber))
  }, [dispatch, match, keyword, pageNumber])

  const pageHandler = (e, page) => {
    history.push(`/search/${keyword}/page/${page}`)
    window.scrollTo(0, 0)
  }
  return (
    <div>
      {loading ? (
        <Loading />
      ) : error ? (
        <Messages severity={'error'} message={error} />
      ) : (
        <Paper className={classes.root} elevation={0}>
          <Meta title={`TonTon | Search: ${keyword}`} />
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
            count={pages}
            page={Number(pageNumber)}
            onChange={pageHandler}
            size='large'
          ></Pagination>
        </Paper>
      )}
    </div>
  )
}

export default Index
