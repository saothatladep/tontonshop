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
import { listProductDetails, updateProduct } from 'actions/productActions.js'
import { maxWidth, primaryText, whiteText } from 'assets/css_variable/variable'
import Loading from 'components/Loading'
import Messages from 'components/Messages'
import ScrollToTop from 'components/ScrollToTop'
import {
  PRODUCT_UPDATE_RESET,
  PRODUCT_DETAILS_RESET,
} from 'constants/productConstants'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import axios from 'axios'
import DeleteIcon from '@material-ui/icons/Delete'

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
      fontWeight: 600,
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
    minWidth: '100%',
    height: 50,
    marginBottom: 16,
    '& select': {
      height: 20,
      backgroundColor: '#f5f5f5',
      fontSize: '1.6rem',
      color: '#555',
    },
  },
  count: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    margin: '16px 0 8px 0',
    border: '1px solid #ccc',
    borderRadius: '4px',
    backgroundColor: '#f5f5f5',
    height: 60,
    '& div': {
      marginLeft: 12,
    },
    '& label': {
      color: '#555',
      fontSize: '1.6rem',
      padding: '0 8px 0 0',
    },
    '& input': {
      height: 40,
      width: 50,
      textAlign: 'center',
      border: '1px solid #ccc',
      color: '#555',
      fontSize: '1.6rem',
      backgroundColor: '#fff',
      borderRadius: '4px',
    },
  },
  dimensions: {
    display: 'flex',
    justifyContent: 'space-between',
  },

  images: {
    width: '100%',
    minHeight: 100,
    borderRadius: '4px',
    border: '1px solid #ccc',
    backgroundColor: '#f5f5f5',
    margin: '16px 0 0 0',
    position: 'relative',
    '& p': {
      fontSize: '1.6rem',
      fontWeight: 600,
      textTransform: 'none',
      padding: '0 4px',
      backgroundColor: 'transparent',
      color: '#555',
      position: 'absolute',
      top: -12,
      left: 10,
    },
    '& div': {
      margin: '16px',
    },
    '& img': {
      width: 96,
      margin: '5px 7px 0 0',
      border: '1px solid',
      borderColor: primaryText,
      borderRadius: '3px',
      cursor: 'pointer',
    },
    '& span': {
      position: 'relative',
      '& svg': {
        position: 'absolute',
        bottom: '80%',
        left: '30%',
        color: primaryText,
        cursor: 'pointer',
        // display: 'none',
      },
    },
  },
  files: {
    width: '100%',
    margin: '12px 0 0 0',
    '& input': {
      // height: '100%',
      // fontSize: '1.6rem',
      // width: '100%',
      // fontWeight: 500,
      // '&:hover': {
      //   backgroundColor: primaryText,
      // },
      display: 'none',
    },
    '& label': {
      padding: '8px 8px',
      backgroundColor: primaryText,
      borderRadius: 5,
      cursor: 'pointer',
      color: whiteText,
      border: '1px solid',
      borderColor: primaryText,
      fontSize: '1.6rem',
      '&:hover': {
        backgroundColor: whiteText,
        color: primaryText,
      },
    },
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
  const [uploading, setUploading] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [index, setIndex] = useState('')

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

  const productUpdate = useSelector((state) => state.productUpdate)
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = productUpdate

  const dispatch = useDispatch()

  useEffect(() => {
    if (successUpdate) {
      dispatch({ type: PRODUCT_UPDATE_RESET })
      dispatch({ type: PRODUCT_DETAILS_RESET })
      history.push('/admin/productlist')
    } else {
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
        setImages(product.images)
      }
    }

    window.scrollTo(0, 0)

    return function cleanup() {
      setCategory()
    }
  }, [dispatch, history, productId, product, successUpdate])

  const uploadFileHandler = async (e) => {
    const files = e.target.files
    const formData = new FormData()

    console.log(files)

    for (let i = 0; i < files.length; i++) {
      formData.append(`images`, files[i])
    }

    setUploading(true)

    try {
      const config = {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
      const { data } = await axios.post('/api/upload', formData, config)

      data.map((item) => {
        images.push(item)
      })

      console.log(images)

      // setImages([{ img: data }])
      setUploading(false)
    } catch (error) {
      console.error(error)
      setUploading(false)
    }
  }
  // console.log(images)

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(
      updateProduct({
        _id: productId,
        category,
        sku,
        name,
        price,
        salesOff,
        priceSalesOff,
        countInStock,
        material,
        color,
        dimensions,
        images,
      })
    )
  }

  const handleDeleteImg = (e) => {
    setImages(
      images.filter((img) => img.img !== e.currentTarget.getAttribute('id'))
    )
  }

  console.log(images)

  const getKeyType = (e) => {
    setIndex(e.currentTarget.getAttribute('id'))
    setIsOpen(true)
  }

  return (
    <div className={classes.root}>
      <Paper className={classes.container} elevation={0}>
        <Container component='main' minWidth='xs'>
          <CssBaseline />
          <div className={classes.paper}>
            <p>Edit Product</p>
            {loadingUpdate && <Loading />}
            {errorUpdate && (
              <Messages severity={'error'} message={errorUpdate} />
            )}
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
                <div className={classes.count}>
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
                    <label for='salesOff'>Sales Off:</label>
                    <input
                      type='number'
                      id='salesOff'
                      name='salesOff'
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

                <div className={classes.dimensions}>
                  <TextField
                    variant='outlined'
                    margin='normal'
                    style={{ width: 100 }}
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
                    style={{ width: 100 }}
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
                    style={{ width: 100 }}
                    id='height'
                    label='Height'
                    name='height'
                    autoComplete='height'
                    value={dimensions.height}
                    onChange={(e) => {
                      setDimensions({ ...dimensions, height: e.target.value })
                    }}
                  />
                </div>

                <div className={classes.images}>
                  <p>Images</p>
                  <div>
                    {images.length > 0 &&
                      images.map((img) => (
                        <span>
                          <img
                            key={img._id}
                            src={img.img}
                            alt={img.img}
                            id={img.img}
                            onMouseEnter={(e) => getKeyType(e)}
                            // onMouseLeave={() => setIsOpen(false)}
                          />
                          {index === img.img && isOpen && (
                            <DeleteIcon
                              id={img.img}
                              onClick={handleDeleteImg}
                              style={{ display: 'block' }}
                            />
                          )}
                        </span>
                      ))}
                  </div>
                </div>
                <form
                  className={classes.files}
                  id='uploadForm'
                  onChange={uploadFileHandler}
                >
                  <input type='file' id='imagesFile' multiple />
                  <label for='imagesFile'>Choose a files...</label>
                </form>
                {uploading && <Loading />}

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
