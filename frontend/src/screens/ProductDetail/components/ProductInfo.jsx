import React, { useState, useEffect } from 'react'
import { Link } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Rating from '@material-ui/lab/Rating'
import { primaryText, whiteText } from 'assets/css_variable/variable'
import AdjustIcon from '@material-ui/icons/Adjust'
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
      fontWeight: 600,
    },
    '& a': {
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
  const { product } = props
  const classes = usedStyles()
  const [qty, setQty] = useState(0)

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
                  <span>fsdkfhjklsd</span>
              </li>
              <li>
                <AdjustIcon />
                  <span>Material:</span>
                  <span>{product.category.name}</span>
              </li>
              <li>
                <AdjustIcon />
                  <span>Color Finish:</span>
                  <span>{product.color}</span>
              </li>
              <li>
                <AdjustIcon />
                  <span>Dimensions:</span>
                  <span>{product.dimensions.length}</span>
                  <span>{product.dimensions.width}</span>
                  <span>{product.dimensions.height}</span>
              </li>
            </ul>
          </div>

          <div className={classes.status}>
            <span>Status: </span>
            <span>In Stock</span>
          </div>
        </div>

        <div className={classes.action}>
          <form>
            <label for='quantity'>Quantity:</label>
            <input
              type='number'
              id='quantity'
              name='quantity'
              min={0}
              max={product.countInStock}
              onChange={(e) => setQty(e.target)}
            />
          </form>
          <Link> ADD TO CART </Link>
        </div>
      </div>
    </div>
  )
}

export default ProductInfo
