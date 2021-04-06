import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import Rating from '@material-ui/lab/Rating'
import { primaryText, whiteText } from 'assets/css_variable/variable'
import React from 'react'
const usedStyles = makeStyles((theme) => ({
  root: {},
  container: {
    border: '1px solid #e1e1e1',
    overflow: 'hidden',
    background: '#f5f5f5',
    borderRadius: 5,
    textAlign: 'left',
    cursor: 'pointer',
    position: 'relative',
    width: 378,
    '&:hover': {
      border: '1px solid',
      borderColor: primaryText,
      background: whiteText,
      '& p': {
        color: primaryText,
      },
    },
  },
  info: {
    padding: '0 10px',
    marginBottom: 12,
    '& p': {
      fontSize: '1.8rem',
      fontWeight: 600,
      color: '#333',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      margin: 0,
      padding: '12px 0 4px 0',
    },
    '& h2': {
      fontSize: '1.5rem',
      fontWeight: 600,
      color: '#a37037',
      '& span:first-child': {
        marginRight: 8,
      },
    },
    
  },

  img: {
    maxWidth: '100%',
    height: 236,
  },
  tagSalesOff: {
    position: 'absolute',
    background: primaryText,
    color: '#fff',
    height: 40,
    width: 40,
    textAlign: 'center',
    verticalAlign: 'middle',
    lineHeight: '4rem',
    fontSize: '1.4rem',
    fontWeight: '500',
    margin: '11px 11px',
    transform: 'rotate(-20deg)',
    animation: '$beat 1s ease infinite alternate',
    '&::before': {
      content: '""',
      position: 'absolute',
      background: 'inherit',
      height: 'inherit',
      width: 'inherit',
      top: 0,
      left: 0,
      zIndex: -1,
      transform: 'rotate(30deg)',
    },
    '&::after': {
      content: '""',
      position: 'absolute',
      background: 'inherit',
      height: 'inherit',
      width: 'inherit',
      top: 0,
      left: 0,
      zIndex: -1,
      transform: 'rotate(60deg)',
    },
  },
  '@keyframes beat': {
    '0%': {
      transform: 'rotate(-20deg) scale(1)',
    },
    '100%': {
      transform: 'rotate(-20deg) scale(1.1)',
    },
  },
  noPadding: {
    padding: 0,
  },
  noDecoration: {
    textDecoration: 'none !important',
  },
}))
const ProductDetail = (props) => {
  const { product } = props
  const classes = usedStyles()
  return (
    <div>
      <Link to={`/product/${product._id}`} className={classes.noDecoration}>
        <div className={classes.container}>
          {product.salesOff > 0 && (<h1 className={classes.tagSalesOff}>-{product.salesOff}%</h1>)}
          <img
            className={classes.img}
            src={product.images.length > 0 && product.images[0].img}
            alt={product.name}
          />
          <div className={classes.info}>
            <p>{product.name}</p>
            <h2>
              Price: &nbsp;
              <span style = {product.salesOff > 0 ? {textDecoration: 'line-through', color: '#929292'}: {}}>
                {new Intl.NumberFormat('vi-VN', {
                  style: 'currency',
                  currency: 'VND',
                }).format(product.price)}
              </span>
              <span style = {product.salesOff > 0 ? {}: {display: 'none'}}>
                {new Intl.NumberFormat('vi-VN', {
                  style: 'currency',
                  currency: 'VND',
                }).format(product.priceSalesOff)}
              </span>
            </h2>
            <Rating
              name='half-rating-read'
              defaultValue={product.rating}
              precision={0.5}
              readOnly
              size='large'
            />
          </div>
        </div>
      </Link>
    </div>
  )
}

export default ProductDetail
