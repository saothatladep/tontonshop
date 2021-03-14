import { Link } from '@material-ui/core'
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
    maxWidth: 375,
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
    },
    '& span': {},
  },
  img: {
    maxWidth: '100%',
    height: 234,
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
      <Link className={classes.noDecoration}>
        <div className={classes.container}>
          <img
            className={classes.img}
            src={product.images[0].img}
            alt={product.name}
          />
          <div className={classes.info}>
            <p>{product.name}</p>
            <h2>
              Price: &nbsp;
              {new Intl.NumberFormat('vi-VN', {
                style: 'currency',
                currency: 'VND',
              }).format(product.price)}
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
