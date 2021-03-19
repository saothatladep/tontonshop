import { Paper } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import CssBaseline from '@material-ui/core/CssBaseline'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import { maxWidth, primaryText, whiteText } from 'assets/css_variable/variable'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { login } from 'actions/userActions.js'
import Loading from 'components/Loading'
import Alert from '@material-ui/lab/Alert'

import Messages from 'components/Messages'

const usedStyles = makeStyles((theme) => ({
  root: { background: '#fff' },
  container: {
    width: maxWidth,
    margin: '0 auto',
    padding: '48px 0',
    marginTop: 2,
  },
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    '& p': {
      color: '#333',
      fontWeight: 600,
      padding: '24px 0',
      textAlign: 'center',
      fontSize: '3rem',
      textTransform: 'uppercase',
      margin: 0,
    },
    '& input': {
      borderStyle: 'none',
      height: 20,
      outline: 0,
      boxShadow: 'none',
      background: '#f5f5f5',
      fontSize: '1.6rem',
      color: '#555',
    },
    '& a': {
      textDecoration: 'none',
      fontSize: '1.6rem',
      color: primaryText,
      fontWeight: 600,
    },
    '& span': {
      fontSize: '1.6rem',
      color: '#333',
      fontWeight: 600,
      textTransform: 'uppercase',
    },
  },
  form: {
    width: '50%',
    border: '1px solid #e1e1e1',
    padding: '48px 64px',
    borderRadius: '5px',

    '& label': {
      fontSize: '2rem',
      color: 'e3e3e3',
    },
  },
  submit: {
    background: primaryText,
    padding: '12px 0',
    width: 200,
    margin: '24px 0px',
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
}))
const Login = (props) => {
  const { location, history } = props

  const classes = usedStyles()

  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const { loading, error, userInfo } = userLogin

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const redirect = location.search ? location.search.split('=')[1] : '/'

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(login(email, password))
  }

  useEffect(() => {
    if (userInfo) {
      history.push(redirect)
    }
  }, [history, userInfo, redirect])

  return (
    <div className={classes.root}>
      <Paper className={classes.container} elevation={0}>
        <Container component='main' minWidth='xs'>
          <CssBaseline />
          <div className={classes.paper}>
            {error && (
              <Alert severity='error' variant="filled" size = 'large' style={{fontSize:'1.5rem'}}>
                {error}
              </Alert>
            )}
            {loading && <Loading />}
            <p>Sign in to your account</p>
            <form className={classes.form} onSubmit={submitHandler} noValidate>
              <TextField
                variant='outlined'
                margin='normal'
                required
                fullWidth
                id='email'
                label='Email Address'
                name='email'
                autoComplete='email'
                autoFocus
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                variant='outlined'
                margin='normal'
                required
                fullWidth
                name='password'
                label='Password'
                type='password'
                id='password'
                autoComplete='current-password'
                onChange={(e) => setPassword(e.target.value)}
              />

              <Button
                type='submit'
                fullWidth
                variant='contained'
                className={classes.submit}
              >
                Log In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link to={''} variant='body2'>
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <span>Don't have an account?</span>
                  <Link
                    to={
                      redirect ? `/register?redirect=${redirect}` : '/register'
                    }
                    variant='body2'
                  >
                    {' Register'}
                  </Link>
                </Grid>
              </Grid>
            </form>
          </div>
        </Container>
      </Paper>
    </div>
  )
}

export default Login
