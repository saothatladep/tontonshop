import { makeStyles } from '@material-ui/core/styles'
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button'
import Loading from 'components/Loading'
import Messages from 'components/Messages'
import ClearIcon from '@material-ui/icons/Clear'
import DeleteIcon from '@material-ui/icons/Delete'
import DoneIcon from '@material-ui/icons/Done'
import EditIcon from '@material-ui/icons/Edit'
import { maxWidth, primaryText, whiteText } from 'assets/css_variable/variable'
import { Paper } from '@material-ui/core'
import ScrollToTop from 'components/ScrollToTop'
import { useDispatch, useSelector } from 'react-redux'
import { listOrders } from 'actions/orderActions'

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
          fontSize: '3rem',
          fontWeight: '600',
        },
        '& a': {
          textDecoration: 'none',
          color: '#666',
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
            marginLeft: 4,
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
  noPadding: {
    padding: 0,
  },
}))

const AdminOrdersList = (props) => {
  const { history } = props
  const classes = usedStyles()

  const dispatch = useDispatch()

  const orderList = useSelector((state) => state.orderList)
  const { loading, error, orders } = orderList

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      dispatch(listOrders())
    } else {
      history.push('/login')
    }
  }, [dispatch, history, userInfo])

  return (
    <Paper elevation={0} className={classes.root}>
      {loading ? (
        <Loading />
      ) : error ? (
        <Messages severity={'error'} message={error} />
      ) : (
        <div className={classes.container}>
          <h1>ORDERS</h1>
          <table className={classes.table}>
            <thead>
              <tr>
                <th>ID</th>
                <th>USER</th>
                <th>DATE</th>
                <th>TOTAL</th>
                <th>PAID</th>
                <th>DELIVERED</th>
                <th></th>
              </tr>
            </thead>

            <tbody>
              {orders.map((order) => (
                <tr key={order._id}>
                  <td>{order._id}</td>
                  <td>{order.user && order.user.name}</td>
                  <td>{order.createdAt.substring(0, 10)}</td>
                  <td>{order.totalPrice}</td>
                  <td style={{color: 'green'}}>
                    {order.isPaid ? (
                      order.paidAt.substring(0, 10)
                    ) : (
                      <ClearIcon style={{ color: 'red' }} />
                    )}
                  </td>
                  <td style={{color: 'green'}}>
                    {order.isDelivered ? (
                      order.deliveredAt.substring(0, 10)
                    ) : (
                      <ClearIcon style={{ color: 'red' }} />
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
      <ScrollToTop />
    </Paper>
  )
}

export default AdminOrdersList
