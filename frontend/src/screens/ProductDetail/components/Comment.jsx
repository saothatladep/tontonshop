import { makeStyles } from '@material-ui/core/styles'
import { Rating } from '@material-ui/lab'
import { primaryText } from 'assets/css_variable/variable'
import React from 'react'

const usedStyles = makeStyles((theme) => ({
  root: {
    borderBottom: '1px solid #ff8a0c',
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
      marginLeft: -1,
    },
  },
}))
const Comment = (props) => {
  const { review } = props
  const classes = usedStyles()

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <Rating
          name='read-only'
          size='large'
          defaultValue={review.rating}
          readOnly
        />
        <h1>{review.name}</h1>
        <h2>{review.createdAt.substring(0, 10)}</h2>
        <p>{review.comment}</p>
      </div>
    </div>
  )
}

export default Comment
