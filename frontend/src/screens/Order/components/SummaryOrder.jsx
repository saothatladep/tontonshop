import { makeStyles } from '@material-ui/core/styles'
import { primaryText, whiteText } from 'assets/css_variable/variable'
import axios from 'axios'
import Loading from 'components/Loading'
import Messages from 'components/Messages'
import { Button } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { PayPalButton } from 'react-paypal-button-v2'
import { useDispatch, useSelector } from 'react-redux'
import {
  getOrderDetails,
  payOrder,
  deliverOrder,
} from 'actions/orderActions.js'
import { ORDER_PAY_RESET, ORDER_DELIVER_RESET } from 'constants/orderConstants'

const usedStyles = makeStyles((theme) => ({
  root: { paddingTop: 32 },
  container: {
    border: '1px solid',
    borderColor: primaryText,
    '& p': {
      color: '#333',
      fontWeight: 600,
      padding: '40px 0 40px 32px',
      textAlign: 'left',
      fontSize: '3rem',
      textTransform: 'uppercase',
      margin: 0,
    },
    '& button': {
      position: 'relative',
      left: 32,
      background: primaryText,
      padding: '8px 0',
      width: 318,
      margin: '24px auto',
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
  },
  fee: {
    '& h1': {
      fontSize: '1.6rem',
      fontWeight: 700,
      textTransform: 'none',
      textAlign: 'left',
      padding: '12px 32px 12px 32px',
      lineHeight: '1.5',
      borderTop: '1px solid',
      borderColor: primaryText,
      margin: 0,
      position: 'relative',
      '& span': {
        fontWeight: 500,
        color: '#666',
        position: 'absolute',
        left: '55%',
      },
    },
  },
  lastBorder: {
    borderBottom: '1px solid',
    borderColor: primaryText,
  },
}))
const SummaryOrder = (props) => {
  const classes = usedStyles()
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

  const orderDeliver = useSelector((state) => state.orderDeliver)
  const { loading: loadingDeliver, success: successDeliver } = orderDeliver

  if (!loading) {
    order.itemsPrice = order.orderItems.reduce(
      (acc, item) => acc + item.price * item.qty,
      0
    )
  }

  useEffect(() => {
    if (!userInfo) {
      history.push('/login')
    }
    const addPayPalScript = async () => {
      const { data: clientId } = await axios.get('/api/config/paypal')
      console.log(clientId)
      const script = document.createElement('script')
      script.type = 'text/javascript'
      script.src = `https://www.paypal.com/sdk/js?client-id=${clientId}`
      script.async = true
      script.onload = () => {
        setSdkReady(true)
      }
      document.body.appendChild(script)
    }

    if (!order || order._id !== orderId || successPay || successDeliver) {
      dispatch({ type: ORDER_PAY_RESET })
      dispatch({ type: ORDER_DELIVER_RESET })
      dispatch(getOrderDetails(orderId))
    } else if (!order.isPaid) {
      if (!window.paypal) {
        addPayPalScript()
      } else {
        setSdkReady(true)
      }
    }
    window.scrollTo(0, 0)
  }, [order, orderId, successPay, dispatch, successDeliver])

  const successPaymentHandler = (details, data) => {
    console.log(details, data)
    dispatch(payOrder(orderId, details))
  }

  const deliverHandler = () => {
    dispatch(deliverOrder(order))
  }

  const paidHandler = () => {
    const paymentResult = {
      id: Date.now() + Math.random(),
      status: 'COMPLETED',
      update_time: Date.now(),
      email_address: order.user.email,
    }
    dispatch(payOrder(orderId, paymentResult))
  }

  return loading ? (
    <Loading />
  ) : error ? (
    <Messages severity={'error'} message={error} />
  ) : (
    <div className={classes.root}>
      <div className={classes.container}>
        <p>order summary</p>
        <div className={classes.fee}>
          <h1>
            Items:{' '}
            <span>
              {new Intl.NumberFormat('vi-VN', {
                style: 'currency',
                currency: 'VND',
              }).format(order.itemsPrice)}
            </span>
          </h1>
          <h1>
            Shipping:{' '}
            <span>
              {new Intl.NumberFormat('vi-VN', {
                style: 'currency',
                currency: 'VND',
              }).format(order.shippingPrice)}
            </span>
          </h1>
          <h1>
            Tax:{' '}
            <span>
              {new Intl.NumberFormat('vi-VN', {
                style: 'currency',
                currency: 'VND',
              }).format(order.taxPrice)}
            </span>
          </h1>
          <h1 className={classes.lastBorder}>
            Total:{' '}
            <span>
              {new Intl.NumberFormat('vi-VN', {
                style: 'currency',
                currency: 'VND',
              }).format(order.totalPrice)}
            </span>
          </h1>
        </div>
        {!order.isPaid && order.paymentMethod == 'PayPal' && (
          <div>
            {loadingPay && <Loading />}
            {!sdkReady ? (
              <Loading />
            ) : (
              <PayPalButton
                amount={1000000}
                onSuccess={successPaymentHandler}
              />
            )}
          </div>
        )}
        {loadingDeliver && <Loading />}
        {userInfo && userInfo.isAdmin && !order.isDelivered && (
          <Button onClick={deliverHandler}> MARK AS DELIVERED</Button>
        )}
        {userInfo &&
          userInfo.isAdmin &&
          !order.isPaid &&
          order.paymentMethod === 'Cash' && (
            <Button style={{ marginTop: 0 }} onClick={paidHandler}>
              {' '}
              MARK AS PAID
            </Button>
          )}
      </div>
      {error && <Messages severity={'error'} message={error} />}
    </div>
  )
}

export default SummaryOrder
