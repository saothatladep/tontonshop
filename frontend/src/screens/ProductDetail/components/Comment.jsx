import { makeStyles } from '@material-ui/core/styles'
import Rating from '@material-ui/lab/Rating'
import { primaryText } from 'assets/css_variable/variable'
import React from 'react'

const usedStyles = makeStyles((theme) => ({
  root: {
    borderBottom: '1px solid #e1e1e1',
  },
  container: {
    padding: '12px 0',
    margin: '0 32px',
    maxWidth: '100%',
    '& h1': {
      fontSize: '1.6rem',
    },
    '& h2': {
      fontSize: '1.3rem',
      color: '#666',
      fontWeight: 500,
    },
    '& p': {
      fontSize: '1.5rem',
      color: '#666',
      fontWeight: 500,
      lineHeight: '22px',
      wordBreak: 'break-all',
    },
    '& span': {
      fontSize: '2rem',
      color: primaryText,
      marginLeft: -1,
    },
  },
}))
const Comment = () => {
  const classes = usedStyles()
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <Rating
          name='half-rating-read'
          defaultValue={5}
          precision={0.5}
          readOnly
        />
        <h1>Vijaya</h1>
        <h2>Jan 13, 2021</h2>
        <p>
          Qualitydddddddddddddddffffffffffddddddddddddddddddddddddddghjghjghjfgjdddddddddddddddfgdfgdfgdfgdffgdfgfgdfgdgdfgdfgdfgdfgdfgdfgffffffffffffffffffffffffffddddddddddddddddddddddddddddddd.
        </p>
      </div>
    </div>
  )
}

export default Comment
