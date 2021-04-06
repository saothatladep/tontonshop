import { Paper } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import Select from '@material-ui/core/Select'
import { makeStyles } from '@material-ui/core/styles'
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'
import { Pagination } from '@material-ui/lab'
import { maxWidth, primaryText, whiteText } from 'assets/css_variable/variable'
import Loading from 'components/Loading'
import Messages from 'components/Messages'
import ScrollToTop from 'components/ScrollToTop'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { PRODUCT_LIST_ALL_RESET } from 'constants/productConstants'
import { PRODUCT_CREATE_RESET } from 'constants/productConstants'
import {
  listAllProducts,
  listProducts,
  deleteProduct,
  createProduct,
} from 'actions/productActions'
import { listCategories } from 'actions/categoryActions.js'

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
          marginLeft: 4,
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
  formControl: {
    height: 50,
    marginBottom: 16,
    '& select': {
      height: 20,
      backgroundColor: '#f5f5f5',
      fontSize: '1.6rem',
      color: '#555',
    },
    '& label': {
      fontSize: '1.6rem',
      fontWeight: 600,
    },
  },
  pagination: {
    padding: '30px 0 8px 0',
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center',
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

const AdminProductList = (props) => {
  const { history, match } = props
  const classes = usedStyles()
  const [category, setCategory] = useState()

  const pageNumber = match.params.pageNumber ? match.params.pageNumber : 1

  const dispatch = useDispatch()

  const productList = useSelector((state) => state.productList)
  const { loading, error, products, page, pages } = productList

  const productDelete = useSelector((state) => state.productDelete)
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = productDelete

  const productCreate = useSelector((state) => state.productCreate)
  const {
    loading: loadingCreate,
    error: errorCreate,
    success: successCreate,
    product: createdProduct,
  } = productCreate

  const categoryList = useSelector((state) => state.categoryList)
  const {
    loading: loadingCategories,
    error: errorCategories,
    categories,
  } = categoryList

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  useEffect(() => {
    dispatch({ type: PRODUCT_CREATE_RESET })

    if (!userInfo.isAdmin) {
      history.push('/login')
    }

    if (successCreate) {
      history.push(`/admin/product/${createdProduct._id}/edit`)
    } else {
      dispatch(listCategories())
      dispatch(listProducts(category ? category : '603c9d90fafd2c4bbc488fd0', pageNumber))

      // dispatch(listAllProducts('', pageNumber))
    }
    window.scrollTo(0, 0)

    return function cleanup() {
      dispatch({ type: PRODUCT_LIST_ALL_RESET })
    }
  }, [
    dispatch,
    history,
    userInfo,
    successDelete,
    successCreate,
    createdProduct,
    pageNumber,
    category,
  ])

  console.log(category)

  const pageHandler = (e, page) => {
    history.push(`/admin/productlist/${page}`)
  }

  const deleteHandler = (id) => {
    if (window.confirm('Are you sure?')) {
      dispatch(deleteProduct(id))
    }
  }

  const createProductHandler = () => {
    dispatch(createProduct())
  }

  return (
    <Paper elevation={0} className={classes.root}>
      {loadingDelete && <Loading />}
      {errorDelete && <Messages severity={'error'} message={errorDelete} />}
      {loadingCreate && <Loading />}
      {errorCreate && <Messages severity={'error'} message={errorCreate} />}
      {loading ? (
        <Loading />
      ) : error ? (
        <Messages severity={'error'} message={error} />
      ) : (
        <div className={classes.container}>
          <div className={classes.addProduct}>
            <h1>PRODUCTS</h1>
            <FormControl variant='outlined' className={classes.formControl}>
              <InputLabel htmlFor='outlined-categories-native-simple'>
                Categories
              </InputLabel>
              {loadingCategories ? (
                <Loading />
              ) : errorCategories ? (
                <Messages severity={'error'} message={errorCategories} />
              ) : (
                <Select
                  native
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  label='Categories'
                  inputProps={{
                    name: 'Categories',
                    id: 'outlined-categories-native-simple',
                  }}
                >
                  {categories &&
                    categories.map((item) => (
                      <option key={item._id} value={item._id}>
                        {item.name}
                      </option>
                    ))}
                </Select>
              )}
            </FormControl>
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
          <Pagination
            className={classes.pagination}
            color='primary'
            count={pages}
            page={Number(pageNumber)}
            onChange={pageHandler}
            size='large'
          ></Pagination>
        </div>
      )}
      <ScrollToTop />
    </Paper>
  )
}

export default AdminProductList
