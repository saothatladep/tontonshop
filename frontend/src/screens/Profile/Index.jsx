import { Paper } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import CssBaseline from '@material-ui/core/CssBaseline'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Alert from '@material-ui/lab/Alert'
import { getUserDetails, updateUserProfile } from 'actions/userActions.js'
import { maxWidth, primaryText, whiteText } from 'assets/css_variable/variable'
import Loading from 'components/Loading'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ScrollToTop from 'components/ScrollToTop'
import { USER_UPDATE_PROFILE_RESET } from 'constants/userConstants'
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
const Profile = (props) => {
  const { location, history } = props

  const classes = usedStyles()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [message, setMessage] = useState(null)

  const dispatch = useDispatch()

  const userDetails = useSelector((state) => state.userDetails)
  const { loading, error, user } = userDetails

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const userUpdateProfile = useSelector((state) => state.userUpdateProfile)
  const { success } = userUpdateProfile

  useEffect(() => {
    if (!userInfo) {
      history.push('/login')
    } else {
      if (!user.name) {
        dispatch({type: USER_UPDATE_PROFILE_RESET})
        dispatch(getUserDetails('profile'))
      } else {
        setName(user.name)
        setEmail(user.email)
      }
    }
    window.scrollTo(0, 0)
  }, [dispatch, history, userInfo, user, success])

  const submitHandler = (e) => {
    e.preventDefault()

    if (password !== confirmPassword) {
      setMessage('Password do not match')
    } else {
      dispatch(updateUserProfile({ id: user._id, name, email, password }))
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
            {success && (
              <Alert
                severity='success'
                variant='filled'
                size='large'
                style={{ fontSize: '1.5rem' }}
              >
                Profile updated successfully
              </Alert>
            )}
            {loading && <Loading />}
            <p>User Profile</p>
            <form className={classes.form} onSubmit={submitHandler} noValidate>
              <TextField
                variant='outlined'
                margin='normal'
                fullWidth
                id='name'
                label='Name'
                name='name'
                autoComplete='name'
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <TextField
                variant='outlined'
                margin='normal'
                fullWidth
                id='email'
                label='Email Address'
                name='email'
                autoComplete='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                variant='outlined'
                margin='normal'
                fullWidth
                name='password'
                label='Password'
                type='password'
                id='password'
                autoComplete='current-password'
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
              <TextField
                variant='outlined'
                margin='normal'
                fullWidth
                name='confirmPassword'
                label='Confirm Password'
                type='password'
                id='confirmPassword'
                autoComplete='current-password'
                onChange={(e) => setConfirmPassword(e.target.value)}
                value={confirmPassword}
              />

              <Button
                type='submit'
                fullWidth
                variant='contained'
                className={classes.submit}
              >
                UPDATE
              </Button>
            </form>
          </div>
        </Container>
      </Paper>
      <ScrollToTop />
    </div>
  )
}

export default Profile
