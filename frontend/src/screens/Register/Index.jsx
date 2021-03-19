import React, { useState, useEffect } from 'react'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import { Link } from 'react-router-dom'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import { Paper } from '@material-ui/core'
import Loading from 'components/Loading'
import Alert from '@material-ui/lab/Alert'
import { useDispatch, useSelector } from 'react-redux'
import { register } from 'actions/userActions.js'

import {
  grayText,
  maxWidth,
  primaryText,
  whiteText,
} from 'assets/css_variable/variable'

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
      //   margin: '10px 0',
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
const Register = (props) => {
  const { location, history } = props

  const classes = usedStyles()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [message, setMessage] = useState(null)

  const userRegister = useSelector((state) => state.userRegister)
  const { loading, error, userInfo } = userRegister

  const redirect = location.search ? location.search.split('=')[1] : '/'

  const dispatch = useDispatch()

  useEffect(() => {
    if (userInfo) {
      history.push(redirect)
    }
  }, [history, userInfo, redirect])

  const submitHandler = (e) => {
    e.preventDefault()

    if (password !== confirmPassword) {
      setMessage('Password do not match')
    } else {
      dispatch(register(name, email, password))
    }
  }

  return (
    <div className={classes.root}>
      <Paper className={classes.container} elevation={0}>
        <Container component='main' minWidth='xs'>
          <CssBaseline />
          <div className={classes.paper}>
            {message && (
              <Alert
                severity='error'
                variant='filled'
                size='large'
                style={{ fontSize: '1.5rem' }}
              >
                {message}
              </Alert>
            )}
            {error && (
              <Alert
                severity='error'
                variant='filled'
                size='large'
                style={{ fontSize: '1.5rem' }}
              >
                {error}
              </Alert>
            )}
            {loading && <Loading />}
            <p>Sign up with us</p>
            <form className={classes.form} onSubmit={submitHandler} noValidate>
              <TextField
                variant='outlined'
                margin='normal'
                required
                fullWidth
                id='name'
                label='Name'
                name='name'
                autoComplete='name'
                autoFocus
                onChange={(e) => setName(e.target.value)}
              />
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
              <TextField
                variant='outlined'
                margin='normal'
                required
                fullWidth
                name='confirmPassword'
                label='Confirm Password'
                type='password'
                id='confirmPassword'
                autoComplete='current-password'
                onChange={(e) => setConfirmPassword(e.target.value)}
              />

              <Button
                type='submit'
                fullWidth
                variant='contained'
                className={classes.submit}
              >
                REGISTER
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link to={''} variant='body2'>
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <span>Have an account?</span>
                  <Link
                    to={redirect ? `/login?redirect=${redirect}` : '/login'}
                    variant='body2'
                  >
                    {' Log In'}
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

export default Register
