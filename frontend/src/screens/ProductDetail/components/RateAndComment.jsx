import { Box, Container, Grid, Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Rating from '@material-ui/lab/Rating'
import { maxWidth, primaryText, whiteText } from 'assets/css_variable/variable'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Loading from 'components/Loading'
import Messages from 'components/Messages'
import Comment from './Comment'
import { useDispatch, useSelector } from 'react-redux'
import {
  listProductDetails,
  resetListProductDetails,
  createProductReview,
} from 'actions/productActions.js'
import { PRODUCT_CREATE_REVIEW_RESET } from 'constants/productConstants'

const usedStyles = makeStyles((theme) => ({
  root: {
    padding: '32px 0',
    // marginTop: 2,
  },
  container: {
    width: maxWidth,
    margin: '0 auto',
  },
  feedBack: {
    '& h1': {
      fontSize: '2rem',
      fontWeight: 700,
      color: '#333',
      letterSpacing: 1,
      margin: 0,
    },
    '& h2': {
      fontSize: '1.6rem',
      fontWeight: 600,
      color: '#666',
      paddingTop: 30,
      margin: 0,
    },
    '& p': {
      fontSize: '1.5rem',
      fontWeight: 500,
      color: '#666',
      padding: '10px 0',
      margin: 0,
    },
  },
  form: {
    borderBottom: '1px solid #e1e1e1',
    paddingBottom: 36,
    '& h3': {
      fontSize: '1.6rem',
      fontWeight: 600,
      color: '#666',
      paddingTop: 18,
      margin: 0,
    },

    '& span': {
      fontSize: '2.5rem',
      paddingTop: 4,
      marginLeft: -2,
    },
  },
  review: {
    margin: '25px 0',
    '& label': {
      fontSize: '1.6rem',
      color: '#555',
    },
    '& textarea': {
      width: 900,
      resize: 'none',
      fontSize: '1.4rem',
      color: '#555',
      lineHeight: '20px',
    },
  },
  name: {
    margin: '25px 0',
    '& input': {
      height: 16,
      width: 450,
      resize: 'none',
      fontSize: '1.4rem',
      color: '#555',
    },
    '& label': {
      fontSize: '1.6rem',
      color: '#555',
    },
  },
  email: {
    margin: '25px 0',
    '& input': {
      height: 16,
      width: 450,
      resize: 'none',
      fontSize: '1.4rem',
      color: '#555',
    },
    '& label': {
      fontSize: '1.6rem',
      color: '#555',
    },
  },
  button: {
    background: primaryText,
    outline: '0!important',
    cursor: 'pointer',
    fontSize: '1.4rem',
    fontWeight: 700,
    border: '1px solid #f6931c',
    borderRadius: 5,
    textAlign: 'center',
    padding: 0,
    width: 128,
    lineHeight: '40px',
    color: whiteText,
    '&:hover': {
      background: whiteText,
      color: primaryText,
    },
  },
  showComments: {
    // marginTop: 8,
  },
  noPadding: {
    padding: '0 !important',
  },
  condition: {
    fontSize: '1.8rem',
    '& a': {
      textDecoration: 'none',
      color: primaryText,
    },
  },
}))
const RateAndComment = (props) => {
  const { match, history } = props

  const classes = usedStyles()
  const dispatch = useDispatch()

  const [rating, setRating] = useState(0)
  const [comment, setComment] = useState('')

  const productDetails = useSelector((state) => state.productDetails)
  const { loading, error, product } = productDetails

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const productReviewCreate = useSelector((state) => state.productReviewCreate)
  const {
    success: successProductReview,
    error: errorProductReview,
  } = productReviewCreate

  useEffect(() => {
    if (successProductReview) {
      setRating(0)
      setComment('')
      dispatch({ type: PRODUCT_CREATE_REVIEW_RESET })
    }
    dispatch(listProductDetails(match.params.id))
    window.scrollTo(0, 0)

    return function cleanup() {
      dispatch(resetListProductDetails())
    }
  }, [dispatch, match, successProductReview])

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(
      createProductReview(match.params.id, {
        rating,
        comment,
      })
    )
  }
  return (
    <div>
      <Paper className={classes.root} elevation={0}>
        <div className={classes.container}>
          <div className={classes.feedBack}>
            <h1>Customer Reviews</h1>
            {errorProductReview && (
              <Messages severity={'error'} message={errorProductReview} />
            )}
            {userInfo ? (
              <form
                className={classes.form}
                noValidate
                onSubmit={submitHandler}
              >
                <h3>Your Rating *</h3>
                <Rating
                  name='simple-controlled'
                  value={rating}
                  size='large'
                  onChange={(e) => {
                    setRating(e.target.value)
                  }}
                />
                <div className={classes.review}>
                  <TextField
                    id='outlined-basic'
                    label='Your Review *'
                    variant='outlined'
                    multiline
                    value={comment}
                    rows={5}
                    rowsMax={50}
                    onChange={(e) => setComment(e.target.value)}
                  />
                </div>
                <button type='submit' className={classes.button}>
                  SUBMIT
                </button>
              </form>
            ) : (
              <p className={classes.condition}>Please <Link to={'/login'}> Sign In </Link> To Write Review</p>
            )}
          </div>
          <div className={classes.showComments}>
            <Box>
              <Container className={classes.noPadding}>
                <Grid
                  container
                  direction='colum'
                  justify='space-between'
                  alignItems='flex-start'
                  spacing={0}
                >
                  {product.reviews.length === 0 && ''}
                  {product.reviews.map((review) => (
                    <Grid item md={12} key={review._id}>
                      <Comment review={review} />
                    </Grid>
                  ))}
                </Grid>
              </Container>
            </Box>
          </div>
        </div>
      </Paper>
    </div>
  )
}

export default RateAndComment
