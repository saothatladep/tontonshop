import { Paper } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import CssBaseline from '@material-ui/core/CssBaseline'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import Select from '@material-ui/core/Select'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import { listCategories } from 'actions/categoryActions.js'
import { listProductDetails } from 'actions/productActions.js'
import { maxWidth, primaryText, whiteText } from 'assets/css_variable/variable'
import Loading from 'components/Loading'
import Messages from 'components/Messages'
import ScrollToTop from 'components/ScrollToTop'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const usedStyles = makeStyles((theme) => ({
  root: { background: '#fff' },
  container: {
    width: maxWidth,
    margin: '0 auto',
    padding: '40px 0 64px 0',
    marginTop: 2,
  },
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    '& p': {
      color: '#333',
      fontWeight: 600,
      padding: '24px 0',
      textAlign: 'center',
      fontSize: '3rem',
      textTransform: 'uppercase',
      margin: 0,
    },
    '& input': {
      borderStyle: 'none',
      height: 20,
      //   margin: '10px 0',
      outline: 0,
      boxShadow: 'none',
      background: '#f5f5f5',
      fontSize: '1.6rem',
      color: '#555',
    },
    '& a': {
      textDecoration: 'none',
      fontSize: '1.6rem',
      color: primaryText,
      fontWeight: 600,
    },
    '& span': {
      fontSize: '1.6rem',
      color: '#333',
      fontWeight: 600,
      textTransform: 'uppercase',
    },
  },
  form: {
    width: '50%',
    border: '1px solid',
    borderColor: primaryText,
    padding: '48px 64px 26px 64px',
    borderRadius: '5px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    '& label': {
      fontSize: '2rem',
    },
    '& span': {
      fontWeight: 600,
      color: '#555',
    },
    '& svg': {
      fontSize: '3rem',
    },
  },
  submit: {
    background: primaryText,
    padding: '12px 0',
    width: 200,
    margin: '24px 0px',
    fontSize: '1.8rem',
    border: '1px solid ',
    borderColor: primaryText,
    '& span': {
      color: whiteText,
      fontSize: '1.8rem',
    },
    '&:hover': {
      background: whiteText,
      boxShadow: 'none',
      '& span': {
        color: primaryText,
      },
    },
  },
  action: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}))
const AdminProductEdit = (props) => {
  const { match, history } = props

  const productId = match.params.id

  const classes = usedStyles()

  const [category, setCategory] = useState()
  const [sku, setSku] = useState('')
  const [name, setName] = useState('')
  const [price, setPrice] = useState(0)
  const [salesOff, setSalesOff] = useState(0)
  const [priceSalesOff, setPriceSalesOff] = useState(
    price - (salesOff * price) / 100
  )
  const [countInStock, setCountInStock] = useState('')
  const [material, setMaterial] = useState('')
  const [color, setColor] = useState('')
  const [dimensions, setDimensions] = useState({
    length: 0,
    width: 0,
    height: 0,
  })
  const [images, setImages] = useState([])

  const productDetails = useSelector((state) => state.productDetails)
  const {
    loading: loadingProductDetails,
    error: errorProductDetails,
    product,
  } = productDetails

  const categoryList = useSelector((state) => state.categoryList)
  const {
    loading: loadingCategories,
    error: errorCategories,
    categories,
  } = categoryList

  const dispatch = useDispatch()

  useEffect(() => {
    if (!product.name || product._id !== productId) {
      dispatch(listProductDetails(productId))
    } else {
      dispatch(listCategories())
      setCategory(product.category._id)
      setSku(product.sku)
      setName(product.name)
      setPrice(product.price)
      setCountInStock(product.countInStock)
      setSalesOff(product.salesOff)
      setPriceSalesOff(product.priceSalesOff)
      setMaterial(product.material)
      setColor(product.color)
      setDimensions({
        length: product.dimensions.length,
        width: product.dimensions.width,
        height: product.dimensions.height,
      })
    }
    window.scrollTo(0, 0)

    return function cleanup() {
      setCategory()
    }
  }, [dispatch, history, productId, product])

  //   console.log(categories)
  //   console.log(category)
  //   console.log(product)

  console.log(dimensions)

  const submitHandler = (e) => {
    e.preventDefault()
  }

  return (
    <div className={classes.root}>
      <Paper className={classes.container} elevation={0}>
        <Container component='main' minWidth='xs'>
          <CssBaseline />
          <div className={classes.paper}>
            <p>Edit Product</p>
            {loadingProductDetails ? (
              <Loading />
            ) : errorProductDetails ? (
              <Messages severity={'error'} message={errorProductDetails} />
            ) : (
              <form
                className={classes.form}
                onSubmit={submitHandler}
                noValidate
              >
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

                <TextField
                  variant='outlined'
                  margin='normal'
                  fullWidth
                  id='sku'
                  label='SKU'
                  name='sku'
                  autoComplete='sku'
                  value={sku}
                  onChange={(e) => setSku(e.target.value)}
                />
                <TextField
                  variant='outlined'
                  margin='normal'
                  fullWidth
                  id='name'
                  label='Name'
                  name='name'
                  autoComplete='name'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <TextField
                  variant='outlined'
                  margin='normal'
                  fullWidth
                  id='price'
                  label='Price'
                  name='price'
                  autoComplete='price'
                  value={price}
                  onChange={(e) => {
                    setPrice(e.target.value)
                  }}
                />
                <div>
                  <div>
                    <label for='quantity'>Count in stock:</label>
                    <input
                      type='number'
                      id='quantity'
                      name='quantity'
                      value={countInStock}
                      min={0}
                      max={100}
                      onChange={(e) => setCountInStock(e.target.value)}
                    />
                  </div>

                  <div>
                    <label for='salesoff'>Sales Off:</label>
                    <input
                      type='number'
                      id='salesoff'
                      name='salesoff'
                      value={salesOff}
                      min={0}
                      max={100}
                      onChange={(e) => {
                        setSalesOff(e.target.value)
                      }}
                    />
                  </div>
                </div>

                <TextField
                  variant='outlined'
                  margin='normal'
                  disabled
                  fullWidth
                  id='priceSalesOff'
                  label='Price Sales Off'
                  name='priceSalesOff'
                  autoComplete='priceSalesOff'
                  value={priceSalesOff}
                />

                <TextField
                  variant='outlined'
                  margin='normal'
                  fullWidth
                  id='material'
                  label='Material'
                  name='material'
                  autoComplete='material'
                  value={material}
                  onChange={(e) => {
                    setMaterial(e.target.value)
                  }}
                />

                <TextField
                  variant='outlined'
                  margin='normal'
                  fullWidth
                  id='color'
                  label='Color'
                  name='color'
                  autoComplete='color'
                  value={color}
                  onChange={(e) => {
                    setColor(e.target.value)
                  }}
                />

                <TextField
                  variant='outlined'
                  margin='normal'
                  fullWidth
                  id='length'
                  label='Length'
                  name='length'
                  autoComplete='length'
                  value={dimensions.length}
                  onChange={(e) => {
                    setDimensions({ ...dimensions, length: e.target.value })
                  }}
                />

                <TextField
                  variant='outlined'
                  margin='normal'
                  fullWidth
                  id='width'
                  label='Width'
                  name='width'
                  autoComplete='width'
                  value={dimensions.width}
                  onChange={(e) => {
                    setDimensions({ ...dimensions, width: e.target.value })
                  }}
                />

                <TextField
                  variant='outlined'
                  margin='normal'
                  fullWidth
                  id='height'
                  label='Height'
                  name='height'
                  autoComplete='height'
                  value={dimensions.height}
                  onChange={(e) => {
                    setDimensions({ ...dimensions, height: e.target.value })
                  }}
                />

                <div className={classes.action}>
                  <Button
                    type='submit'
                    fullWidth
                    variant='contained'
                    className={classes.submit}
                  >
                    UPDATE
                  </Button>

                  <Link to={'/admin/productlist'}>🠔 GO BACK</Link>
                </div>
              </form>
            )}
          </div>
        </Container>
      </Paper>
      <ScrollToTop />
    </div>
  )
}

export default AdminProductEdit
