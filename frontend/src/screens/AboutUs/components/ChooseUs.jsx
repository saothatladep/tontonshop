import { Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { maxWidth } from 'assets/css_variable/variable'
import React from 'react'

const usedStyles = makeStyles((theme) => ({
  root: {
    paddingBottom: 32,
  },
  container: {
    width: maxWidth,
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    '& h3': {
      fontWeight: 700,
      fontSize: '2.5rem',
      color: '#333',
      margin: 0,
      padding: '0 0 16px 0',
    },
    '& p': {
      fontWeight: 500,
      fontSize: '1.6rem',
      padding: '19px 71px',
      color: '#666',
    },
  },
  content: {
    display: 'flex',
  },
  chooseIn: {
    border: '1px solid #ebebeb',
    width: 184,
    padding: '23px 0',
    height: 164,
    minHeight: 164,
    margin: '30px 0 22px 11px',
    textAlign: 'center',
    '& h2': {
      fontWeight: 700,
      fontSize: '1.6rem',
      lineHeight: 1.7,
      color: '#333',
    },
  },
  noPadding: {
    padding: 0,
  },
  noDecoration: {
    textDecoration: 'none !important',
  },
}))

const ChooseUs = () => {
  const classes = usedStyles()

  return (
    <div>
      <Paper className={classes.root} elevation={0}>
        <div className={classes.container}>
          <h3>WHY CHOOSE US</h3>
          <img
            src='https://www.jodhpurifurniture.com/assets/images/border2.png'
            alt='line'
          />
          <p>
            {' '}
            We provide customization options to get the perfect furniture
            crafted for you with lasting durability.{' '}
          </p>
          <div className={classes.content}>
            <div className={classes.chooseIn}>
              <img
                src='https://www.jodhpurifurniture.com/assets/images/wide.png'
                alt='wide'
              />
              <h2>Wide Design Range</h2>
            </div>
            <div className={classes.chooseIn}>
              <img
                src='https://www.jodhpurifurniture.com/assets/images/quality.png'
                alt='quality'
              />
              <h2>Premium Quality</h2>
            </div>
            <div className={classes.chooseIn}>
              <img
                src='https://www.jodhpurifurniture.com/assets/images/emi.png'
                alt='EMI'
              />
              <h2>Easy EMI</h2>
            </div>
            <div className={classes.chooseIn}>
              <img
                src='https://www.jodhpurifurniture.com/assets/images/price.png'
                alt='price'
              />
              <h2>Affordable Price</h2>
            </div>
            <div className={classes.chooseIn}>
              <img
                src='https://www.jodhpurifurniture.com/assets/images/return.png'
                alt='easy'
              />
              <h2>Easy Return</h2>
            </div>
            <div className={classes.chooseIn}>
              <img
                src='https://www.jodhpurifurniture.com/assets/images/free.png'
                alt='free'
              />
              <h2>Free Installation & Delivery*</h2>
            </div>
          </div>
        </div>
      </Paper>
    </div>
  )
}

export default ChooseUs
