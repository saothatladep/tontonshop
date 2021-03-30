import { makeStyles } from '@material-ui/core/styles'
import { getOrderDetails, payOrder } from 'actions/orderActions.js'
import { primaryText, whiteText } from 'assets/css_variable/variable'
import axios from 'axios'
import Loading from 'components/Loading'
import Messages from 'components/Messages'
import { ORDER_PAY_RESET } from 'constants/orderConstants'
import React, { useEffect, useState } from 'react'
import { PayPalButton } from 'react-paypal-button-v2'
import { useDispatch, useSelector } from 'react-redux'

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
}))
const SummaryOrder = (props) => {
  const classes = usedStyles()
  const { match } = props
  const orderId = match.params.id

  const [sdkReady, setSdkReady] = useState(false)

  const dispatch = useDispatch()

  const orderDetails = useSelector((state) => state.orderDetails)
  const { order, loading, error } = orderDetails

  if (!loading) {
    order.itemsPrice = order.orderItems.reduce(
      (acc, item) => acc + item.price * item.qty,
      0
    )
  }

  const orderPay = useSelector((state) => state.orderPay)
  const { loading: loadingPay, success: successPay } = orderPay

  useEffect(() => {
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
  }, [order, orderId, successPay, dispatch])

  const successPaymentHandler = (details, data) => {
    console.log(details, data)
    dispatch(payOrder(orderId, details))
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
          <h1>
            Total:{' '}
            <span>
              {new Intl.NumberFormat('vi-VN', {
                style: 'currency',
                currency: 'VND',
              }).format(order.totalPrice)}
            </span>
          </h1>
        </div>
        {!order.isPaid && (
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
      </div>
      {error && <Messages severity={'error'} message={error} />}
    </div>
  )
}

export default SummaryOrder
