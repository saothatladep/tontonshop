import { makeStyles } from '@material-ui/core/styles'
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button'
import { useDispatch, useSelector } from 'react-redux'
import { listMyOrders } from 'actions/orderActions'
import Loading from 'components/Loading'
import Messages from 'components/Messages'
import ClearIcon from '@material-ui/icons/Clear'
import { maxWidth, primaryText, whiteText } from 'assets/css_variable/variable'
import { Paper } from '@material-ui/core'
import ScrollToTop from 'components/ScrollToTop'

const usedStyles = makeStyles((theme) => ({
  root: {
      marginTop: 2,
  },
  container: {
    width: maxWidth,
    margin: '0 auto',
    padding: '64px 0 64px 0',
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
        '& svg': {
          color: primaryText,
          fontSize: '3rem',
          fontWeight: '600',
        },
        '& a': {
          textDecoration: 'none',
          '& button': {
            padding: '12px 12px',
            backgroundColor: primaryText,
            fontSize: '1.4rem',
            color: whiteText,
            border: '1px solid',
            borderColor: primaryText,
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
const MyOrder = (props) => {
  const { history } = props
  const classes = usedStyles()

  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const orderListMy = useSelector((state) => state.orderListMy)
  const { loading, error, orders } = orderListMy

  useEffect(() => {
    if (!userInfo) {
      history.push('/login')
    } else {
      dispatch(listMyOrders())
    }
    window.scrollTo(0, 0)
  }, [])

  return (
    <Paper elevation={0} className={classes.root}>
      {loading ? (
        <Loading />
      ) : error ? (
        <Messages severity={'error'} message={error} />
      ) : (
        <div className={classes.container}>
          <table className={classes.table}>
            <thead>
              <tr>
                <th>ID</th>
                <th>DATE</th>
                <th>TOTAL</th>
                <th>PAID</th>
                <th>DELIVERED</th>
                <th></th>
              </tr>
            </thead>

            <tbody>
              {orders.map((order, index) => (
                <tr key={index}>
                  <td>{order._id}</td>
                  <td>{order.createdAt.substring(0, 10)}</td>
                  <td>
                    {new Intl.NumberFormat('vi-VN', {
                      style: 'currency',
                      currency: 'VND',
                    }).format(order.totalPrice)}
                  </td>
                  <td style={{color: 'green'}}>
                    {order.isPaid ? (
                      order.paidAt.substring(0, 10)
                    ) : (
                      <ClearIcon />
                    )}
                  </td>
                  <td style={{color: 'green'}}> 
                    {order.isDelivered ? (
                      order.deliveredAt.substring(0, 10)
                    ) : (
                      <ClearIcon />
                    )}
                  </td>
                  <td>
                    <Link to={`/order/${order._id}`}>
                      <Button>Details</Button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      <ScrollToTop/>
    </Paper>
  )
}

export default MyOrder
