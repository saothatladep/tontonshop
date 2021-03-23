import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import AdjustIcon from '@material-ui/icons/Adjust'
import Rating from '@material-ui/lab/Rating'
import { primaryText, whiteText } from 'assets/css_variable/variable'
import React, { useState } from 'react'

const usedStyles = makeStyles((theme) => ({
  root: {},
  container: {
    width: '100%',
    marginTop: 8,
    // border: '1px solid #e1e1e1',
  },
  info: {
    '& p': {
      fontSize: '3rem',
      margin: 0,
      padding: '24px 0',
      fontWeight: 600,
      color: '#333',
      lineHeight: 1.1,
    },
    '& h2': {
      fontSize: '2.5rem',
      margin: 0,
      padding: '16px 0',
      fontWeight: 600,
      color: '#333',
      '& span': {
        color: primaryText,
      },
    },
  },
  rating: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    '& span:last-child': {
      fontSize: '1.4rem',
      fontWeight: 500,
    },
    '& span:first-child': {
      fontSize: '2.5rem',
      fontWeight: 500,
    },
  },
  description: {
    padding: '24px 0 12px 0',

    '& ul': {
      fontSize: '2.5rem',
      margin: 0,
      padding: '0',
      fontWeight: 600,
      color: '#333',
      textDecoration: 'none',

      '& li': {
        fontSize: '1.5rem',
        margin: 0,
        padding: '0',
        fontWeight: 500,
        color: '#666',
        padding: '20px 0 0 32px',
        listStyle: 'none',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        '& span:last-child': {
          position: 'absolute',
          left: 208,
        },
        '& svg': {
          fontSize: 20,
          color: primaryText,
          marginRight: 8,
        },
      },
    },
  },

  status: {
    fontSize: '2.5rem',
    margin: 0,
    padding: '0',
    fontWeight: 600,
    color: '#333',
    padding: '24px 0 32px 0',
    '& span:last-child': {
      color: primaryText,
    },
  },
  action: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    '& label': {
      fontSize: '2.5rem',
      margin: 0,
      padding: '0',
      fontWeight: 600,
      color: '#333',
    },
    '& input': {
      fontSize: '2rem',
      marginLeft: 10,
      color: '#333',
      border: '1px solid #e1e1e1',
      fontWeight: 600,
      outline: '0 !important',
      boxShadow: 'none',
      textAlign: 'center',
      height: 34,
      width: 100,
    },
    '& button': {
      height: 46,
      width: 150,
      background: primaryText,
      margin: '0 auto',
      lineHeight: 3.2,
      textAlign: 'center',
      border: '1px solid',
      borderColor: primaryText,
      fontSize: '1.4rem',
      fontWeight: 600,
      color: whiteText,
      textDecoration: 'none !important',
      cursor: 'pointer',
      borderRadius: 5,
      disable: true,
      '&:hover': {
        background: whiteText,
        color: primaryText,
      },
    },
  },
  noPadding: {
    padding: 0,
  },
  noDecoration: {
    textDecoration: 'none !important',
  },
}))
const ProductInfo = (props) => {
  const { product, match, history } = props
  const classes = usedStyles()
  const [qty, setQty] = useState(1)

  const addToCartHandler = () => {
    history.push(`/cart/${match.params.id}?qty=${qty}`)
  }

  return (
    <div>
      <div className={classes.container}>
        <div className={classes.info}>
          <div className={classes.rating}>
            <Rating
              name='half-rating-read'
              defaultValue={product.rating}
              precision={0.5}
              readOnly
              size='large'
            />
            <span style={{ paddingLeft: 12 }}>
              ({product.numReviews} customer reviews)
            </span>
          </div>
          <p>{product.name}</p>
          <h2>
            Price:{' '}
            <span>
              {new Intl.NumberFormat('vi-VN', {
                style: 'currency',
                currency: 'VND',
              }).format(product.price)}
            </span>
          </h2>
          <div className={classes.description}>
            <ul>
              Description:
              <li>
                <AdjustIcon />
                <span>SKU:</span>
                <span>{product.sku}</span>
              </li>
              <li>
                <AdjustIcon />
                <span>Category:</span>
                <span>{product.category.name}</span>
              </li>
              <li>
                <AdjustIcon />
                <span>Material:</span>
                <span>{product.material}</span>
              </li>
              <li>
                <AdjustIcon />
                <span>Color Finish:</span>
                <span>{product.color}</span>
              </li>
              <li>
                <AdjustIcon />
                <span>Dimensions:</span>
                <span>
                  {product.dimensions.length} x {product.dimensions.width} x{' '}
                  {product.dimensions.height} (inches)
                </span>
              </li>
            </ul>
          </div>

          <div className={classes.status}>
            <span>Status: </span>
            <span>
              {product.countInStock === 0 ? 'Out In Stock' : 'In Stock'}
            </span>
          </div>
        </div>

        <div className={classes.action}>
          <form>
            <label for='quantity'>Quantity:</label>
            <input
              type='number'
              id='quantity'
              name='quantity'
              value={qty}
              min={1}
              max={product.countInStock}
              onChange={(e) => setQty(e.target.value)}
            />
          </form>
          <Button
            className={''}
            disabled={product.countInStock === 0 ? true : false}
            onClick={addToCartHandler}
          >
            {' '}
            ADD TO CART{' '}
          </Button>
        </div>
      </div>
    </div>
  )
}

export default ProductInfo
