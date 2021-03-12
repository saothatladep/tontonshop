import { Link } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { mainText, primaryText, whiteText } from 'assets/css_variable/variable'
import React from 'react'

const usedStyles = makeStyles({
  root: {},
  container: {
    maxWidth: 230,
    cursor: 'pointer',
    overflow: 'hidden',
    background: '#f8f8f8',
    padding: '0px !important',
    textAlign: 'left',
    borderRadius: '5px',
    border: '2px solid #ebebeb',
    '&:hover': {
      border: '2px solid transparent',
      boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
      background: whiteText,

    //   backgroundColor: 'rgba(255, 138, 12, 0)',
      '& p': {
        color: primaryText,
        textDecoration: 'underline',
      },
    },
    paddingBottom: 8,
    '& img': {
      height: 145,
    },
    '& p': {
      margin: '10px 0 0 0',
      fontWeight: 600,
      fontSize: '1.5rem',
      color: mainText,
      padding: '0 11px',
      // letterSpacing: 0.5,
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
    },
    '& h4': {
      margin: '4px 0 6px 0',
      color: '#a37037',
      fontWeight: 600,
      padding: '6px 11px',
      fontSize: '1.3rem',
    },
  },
  noDecoration: {
    textDecoration: 'none !important',
  },
})
const HotDealChild = (props) => {
  const { product } = props
  const classes = usedStyles()
  return (
    <div>
      <Link className={classes.noDecoration}>
        <div className={classes.container}>
          <img src={product.images[0].img} alt='' />
          <p>{product.name}</p>
          <h4>
            Price: &nbsp;
            {new Intl.NumberFormat('vi-VN', {
              style: 'currency',
              currency: 'VND',
            }).format(product.price)}
          </h4>
        </div>
      </Link>
    </div>
  )
}

export default HotDealChild
