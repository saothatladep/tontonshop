import { Paper } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'
import { listAllProducts, deleteProduct } from 'actions/productActions'
import { maxWidth, primaryText, whiteText } from 'assets/css_variable/variable'
import Loading from 'components/Loading'
import Messages from 'components/Messages'
import ScrollToTop from 'components/ScrollToTop'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { PRODUCT_LIST_ALL_RESET } from 'constants/productConstants'

const usedStyles = makeStyles((theme) => ({
  root: {
    marginTop: 2,
  },
  container: {
    width: maxWidth,
    margin: '0 auto',
    padding: '64px 0 64px 0',
    '& h1': {
      fontSize: '5rem',
      fontWeight: '600',
      color: primaryText,
      margin: 0,
      paddingBottom: 24,
    },
  },
  addProduct: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    '& a': {
      textDecoration: 'none',
      padding: '16px 12px',
      backgroundColor: primaryText,
      fontSize: '1.6rem',
      fontWeight: '600',
      borderRadius: '5px',
      color: whiteText,
      border: '1px solid',
      borderColor: primaryText,
      '&:hover': {
        backgroundColor: whiteText,
        color: primaryText,
      },
    },
  },
  table: {
    width: '100%',
    border: '1px solid #e1e1e1',
    '& thead': {
      fontSize: '1.6rem',
      fontWeight: '600',
      backgroundColor: primaryText,
      color: whiteText,
      '& th': {
        fontWeight: 600,
        padding: '16px 27px',
        borderSpacing: '0px',
      },
    },
    '& tbody': {
      border: '1px solid red',
      '& td': {
        padding: '17px 10px !important',
        textAlign: 'center',
        borderTop: '1px solid #ddd',
        borderLeft: '1px solid #ddd',
        fontSize: '1.6rem',
        fontWeight: '500',
        color: '#666',
        lineHeight: '2rem',
        '& img': {
          width: 96,
          height: 70,
        },
        '& svg': {
          fontSize: '3rem',
          fontWeight: '600',
        },
        '& a': {
          textDecoration: 'none',
          color: '#666',
          '&:hover': {
            color: primaryText,
          },
          '& button': {
            padding: '4px 4px',
            backgroundColor: primaryText,
            fontSize: '1.2rem',
            color: whiteText,
            border: '1px solid',
            borderColor: primaryText,
            marginBottom: 4,
            '& svg': {
              fontSize: '2rem',
            },
            '&:hover': {
              backgroundColor: whiteText,
              color: primaryText,
            },
          },
        },
      },
    },
  },
  noPadding: {
    padding: 0,
  },
}))

const AdminProductList = (props) => {
  const { history, match } = props
  const classes = usedStyles()

  const dispatch = useDispatch()

  const productListAll = useSelector((state) => state.productListAll)
  const { loading, error, products } = productListAll

  const productDelete = useSelector((state) => state.productDelete)
  const { loading:loadingDelete, error:errorDelete, success:successDelete } = productDelete

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      dispatch(listAllProducts())
    } else {
      history.push('/login')
    }

    return function cleanup() {
        dispatch({type: PRODUCT_LIST_ALL_RESET})
      };
  }, [dispatch, history, userInfo, successDelete])

  console.log(products)

  const deleteHandler = (id) => {
    if (window.confirm('Are you sure?')) {
      dispatch(deleteProduct(id))
    }
  }

  const createProductHandler = (product) => {
    // create product
  }

  return (
    <Paper elevation={0} className={classes.root}>
      {loadingDelete && <Loading/>}
      {errorDelete && <Messages severity={'error'} message={errorDelete} />}
      {loading ? (
        <Loading />
      ) : error ? (
        <Messages severity={'error'} message={error} />
      ) : (
        <div className={classes.container}>
          <div className={classes.addProduct}>
            <h1>PRODUCTS</h1>
            <Link onClick={createProductHandler}>+ Create Product</Link>
          </div>
          <table className={classes.table}>
            <thead>
              <tr>
                <th>SKU</th>
                <th>IMG</th>
                <th>NAME</th>
                <th>PRICE</th>
                <th>CATEGORY</th>
                <th>MATERIAL</th>
                <th>COLOR</th>
                <th></th>
              </tr>
            </thead>

            <tbody>
              {products.length > 0 &&
                products.map((product) => (
                  <tr key={product._id}>
                    <td>{product.sku}</td>
                    <td>
                      {!product.images.length > 0 ? (
                        ''
                      ) : (
                        <img src={product.images[0].img} alt={product.name} />
                      )}
                    </td>

                    <td>{product.name}</td>
                    <td>
                      {new Intl.NumberFormat('vi-VN', {
                        style: 'currency',
                        currency: 'VND',
                      }).format(product.price)}
                    </td>
                    <td>{!product.category ? '' : product.category.name}</td>
                    <td>{product.material}</td>
                    <td>{product.color}</td>
                    <td>
                      <Link to={`/admin/product/${product._id}/edit`}>
                        <Button>
                          <EditIcon />
                        </Button>
                      </Link>
                      <Link onClick={() => deleteHandler(product._id)}>
                        <Button>
                          <DeleteIcon />
                        </Button>
                      </Link>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      )}
      <ScrollToTop />
    </Paper>
  )
}

export default AdminProductList
