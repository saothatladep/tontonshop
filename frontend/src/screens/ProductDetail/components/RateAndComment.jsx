import { Box, Container, Grid, Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Rating from '@material-ui/lab/Rating'
import { maxWidth, primaryText, whiteText } from 'assets/css_variable/variable'
import React, { useState } from 'react'
import Comment from './Comment'

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
      fontSize: '1.8rem',
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
}))
const RateAndComment = () => {
  const classes = usedStyles()
  const [value, setValue] = useState(0)

  return (
    <div>
      <Paper className={classes.root} elevation={0}>
        <div className={classes.container}>
          <div className={classes.feedBack}>
            <h1>Customer Reviews</h1>
            <h2>Add a review</h2>
            <p>
              Your email address will not be published. Required fields are
              marked *
            </p>
            <form className={classes.form} noValidate autoComplete='off'>
              <h3>Your Rating *</h3>
              <Rating
                name='simple-controlled'
                value={value}
                size='large'
                onChange={(e, newValue) => {
                  setValue(newValue)
                }}
              />
              <div className={classes.review}>
                <TextField
                  id='outlined-basic'
                  label='Your Review *'
                  variant='outlined'
                  multiline
                  rows={5}
                  rowsMax={50}
                />
              </div>
              <div className={classes.name}>
                <TextField
                  id='outlined-basic'
                  label='Name *'
                  variant='outlined'
                />
              </div>
              <div className={classes.email}>
                <TextField
                  id='outlined-basic'
                  label='Email *'
                  variant='outlined'
                />
              </div>
              <button className={classes.button}>SUBMIT</button>
            </form>
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
                  <Grid item md={12}>
                    <Comment />
                  </Grid>
                  <Grid item md={12}>
                    <Comment />
                  </Grid>
                  <Grid item md={12}>
                    <Comment />
                  </Grid>
                  <Grid item md={12}>
                    <Comment />
                  </Grid>
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
