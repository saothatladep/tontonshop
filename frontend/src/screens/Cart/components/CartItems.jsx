import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { primaryText, whiteText, maxWidth } from 'assets/css_variable/variable'
import { Link } from 'react-router-dom'
import DeleteIcon from '@material-ui/icons/Delete'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, removeFromCart } from 'actions/cartActions'

const usedStyles = makeStyles((theme) => ({
  root: {},
  container: {
    width: '100%',
    padding: '24px 0 64px 0',
  },
  table: {
    width: '100%',
    border: '1px solid #e1e1e1',
    '& thead': {
      fontSize: '1.6rem',
      backgroundColor: '#f5f5f5',
      color: '#333',

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
      },

      '& td:nth-child(1)': {
        '& img': {
          height: 82,
          maxWidth: 100,
          textAlign: 'center',
        },
      },
      '& td:nth-child(2)': {
        '& h2': {
          fontSize: '1.8rem',
          margin: 0,
          lineHeight: '2.5rem',
          color: '#333',
          textAlign: 'left',
        },
        '& a': {
          textDecoration: 'none',
        },
      },
      '& td:nth-child(3)': {
        '& input': {
          width: '50%',
          height: 34,
          color: '#333',
          border: '1px solid #e1e1e1',
          fontSize: '1.6rem',
          fontWeight: 700,
          outline: '0 !important',
          boxShadow: 'none',
          textAlign: 'center',
        },
      },
      '& td:nth-child(4)': {
        '& h2': {
          textAlign: 'left',
        },
      },
      '& td:nth-child(5)': {
        '& svg': {
          color: primaryText,
          fontSize: '2.5rem',
          cursor: 'pointer',
        },
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
const CartItems = (props) => {
  const { cartItems } = props
  const classes = usedStyles()

  const dispatch = useDispatch()

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id))
  }
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <table className={classes.table}>
          <thead>
            <tr>
              <th>Products</th>
              <th>Products Name</th>
              <th>Quantity</th>
              <th>Price</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {cartItems.map((cartItem, index) => (
              <tr key={index}>
                <td>
                  <Link
                    className={classes.noDecoration}
                    to={`/product/${cartItem.product}`}
                  >
                    <img src={cartItem.image} alt={cartItem.name} />
                  </Link>
                </td>
                <td>
                  <Link to={`/product/${cartItem.product}`}>
                    <h2>{cartItem.name}</h2>
                  </Link>
                </td>
                <td>
                  <input
                    type='number'
                    value={cartItem.qty}
                    onChange={(e) =>
                      dispatch(
                        addToCart(cartItem.product, Number(e.target.value))
                      )
                    }
                  ></input>
                </td>
                <td>
                  <h2>
                    {new Intl.NumberFormat('vi-VN', {
                      style: 'currency',
                      currency: 'VND',
                    }).format(cartItem.price)}
                  </h2>
                </td>
                <td>
                  <DeleteIcon
                    onClick={() => removeFromCartHandler(cartItem.product)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default CartItems
