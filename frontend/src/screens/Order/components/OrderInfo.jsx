import { makeStyles } from '@material-ui/core/styles'
import { primaryText } from 'assets/css_variable/variable'
import Messages from 'components/Messages'
import Loading from 'components/Loading'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getOrderDetails } from 'actions/orderActions.js'
import { ORDER_PAY_RESET } from 'constants/orderConstants'

const usedStyles = makeStyles((theme) => ({
  root: {},
  container: {
    paddingTop: 32,
  },
  orderInfo: {
    border: '1px solid',
    borderColor: primaryText,
    padding: '16px 0',
    '& p': {
      color: '#333',
      fontWeight: 600,
      padding: '24px 0 24px 32px',
      textAlign: 'left',
      fontSize: '3rem',
      textTransform: 'uppercase',
      margin: 0,
    },
    '& h1': {
      fontSize: '1.6rem',
      fontWeight: 700,
      textTransform: 'none',
      textAlign: 'left',
      padding: '0 32px 12px 32px',
      lineHeight: '1.5',
      '& span': {
        fontWeight: 500,
        color: '#666',
      },
    },
  },
  orderItem: {
    border: '1px solid',
    borderColor: primaryText,
    paddingTop: 16,
    margin: '24px 0 64px 0',
    '& p': {
      color: '#333',
      fontWeight: 600,
      padding: '24px 0 24px 32px',
      textAlign: 'left',
      fontSize: '3rem',
      textTransform: 'uppercase',
      margin: 0,
    },
  },
  item: {
    display: 'flex',
    position: 'relative',
    alignItems: 'center',
    margin: '0 32px 12px 32px',
    borderTop: '1px solid #666',
    paddingTop: 12,
    '& img': {
      width: 70,
      height: 50,
    },
    '& h2': {
      marginLeft: 16,
      color: '#666',
    },
    '& h3': {
      color: '#666',
      position: 'absolute',
      left: '64%',
      fontSize: '1.3rem',
    },
  },
  lastBorder: {
    borderBottom: '1px solid',
    borderColor: primaryText,
  },
}))
const OrderInfo = (props) => {
  const { match, history } = props
  const orderId = match.params.id

  const [sdkReady, setSdkReady] = useState(false)

  const dispatch = useDispatch()

  const orderDetails = useSelector((state) => state.orderDetails)
  const { order, loading, error } = orderDetails

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const orderPay = useSelector((state) => state.orderPay)
  const { loading: loadingPay, success: successPay } = orderPay

  useEffect(() => {
    if (!userInfo) {
      history.push('/login')
    }
    const addPayPalScript = async () => {
      const { data: clientId } = await axios.get('/api/config/paypal')
      const script = document.createElement('script')
      script.type = 'text/javascript'
      script.src = `https://www.paypal.com/sdk/js?client-id=${clientId}`
      script.async = true
      script.onload = () => {
        setSdkReady(true)
      }
      document.body.appendChild(script)
    }

    if (!order || order._id !== orderId || successPay) {
      dispatch({ type: ORDER_PAY_RESET })
      dispatch(getOrderDetails(orderId))
    } else if (!order.isPaid) {
      if (!window.paypal) {
        addPayPalScript()
      } else {
        setSdkReady(true)
      }
    }
    window.scrollTo(0, 0)
  }, [order, orderId, successPay, dispatch])

  // useEffect(() => {
  //   if (!order || order._id !== orderId) {
  //     dispatch(getOrderDetails(orderId))
  //   }
  // }, [order, orderId])

  const classes = usedStyles()

  return loading ? (
    <Loading />
  ) : error ? (
    <Messages severity={'error'} message={error} />
  ) : (
    <div className={classes.root}>
      <div className={classes.container}>
        <div className={classes.orderInfo}>
          <p>order information</p>
          <h1>
            Order: <span>{order._id}</span>
          </h1>
          <h1>
            Orderer: <span>{order.user.name}</span>
          </h1>
          <h1>
            Email: <span>{order.user.email}</span>
          </h1>
          <h1>
            Phone: <span>{order.shippingAddress.phone}</span>
          </h1>
          <h1>
            Address:{' '}
            <span>
              {order.shippingAddress.address}, {order.shippingAddress.city},{' '}
              {order.shippingAddress.country}
            </span>
          </h1>
          <h1>
            Status:{' '}
            <span
              style={
                order.isDelivered ? { color: 'green' } : { color: primaryText }
              }
            >
              {order.isDelivered
                ? `Delivered on ${order.deliveredAt}`
                : ' Not Delivered'}
            </span>
          </h1>
          <h1>
            Payment Method: <span>{order.paymentMethod}</span>
          </h1>
          <h1>
            Payment status:{' '}
            <span
              style={order.isPaid ? { color: 'green' } : { color: primaryText }}
            >
              {order.isPaid ? `Paid on ${order.paidAt}` : 'Not Paid'}
            </span>
          </h1>
        </div>

        <div className={classes.orderItem}>
          <p>order items</p>
          {order.orderItems.map((item, index) => (
            <div className={classes.item} key={index}>
              <img src={item.image} alt={item.name} />
              <h2>{item.name}</h2>
              <h3>
                {item.qty} x{' '}
                {new Intl.NumberFormat('vi-VN', {
                  style: 'currency',
                  currency: 'VND',
                }).format(item.price)}{' '}
                ={' '}
                {new Intl.NumberFormat('vi-VN', {
                  style: 'currency',
                  currency: 'VND',
                }).format(item.qty * item.price)}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default OrderInfo
