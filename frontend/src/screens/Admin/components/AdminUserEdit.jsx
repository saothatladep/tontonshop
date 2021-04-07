import { Paper } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import CheckBox from '@material-ui/core/CheckBox'
import Container from '@material-ui/core/Container'
import CssBaseline from '@material-ui/core/CssBaseline'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import { getUserDetails, updateUser } from 'actions/userActions.js'
import { maxWidth, primaryText, whiteText } from 'assets/css_variable/variable'
import Loading from 'components/Loading'
import Messages from 'components/Messages'
import ScrollToTop from 'components/ScrollToTop'
import { USER_UPDATE_RESET } from 'constants/userConstants'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const usedStyles = makeStyles((theme) => ({
  root: { background: '#fff' },
  container: {
    width: maxWidth,
    margin: '0 auto',
    padding: '40px 0 64px 0',
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
    border: '1px solid',
    borderColor: primaryText,
    padding: '48px 64px 26px 64px',
    borderRadius: '5px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    '& label': {
      fontSize: '2rem',
    },
    '& span': {
      fontWeight: 600,
      color: '#555',
    },
    '& svg': {
      fontSize: '3rem',
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
  action: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
}))
const AdminUserEdit = (props) => {
  const { match, history } = props

  const userId = match.params.id

  const classes = usedStyles()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [isAdmin, setIsAdmin] = useState(false)

  const userDetails = useSelector((state) => state.userDetails)
  const { loading, error, user } = userDetails

  const userUpdate = useSelector((state) => state.userUpdate)
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = userUpdate

  const dispatch = useDispatch()

  useEffect(() => {
    if (successUpdate) {
      dispatch({
        type: USER_UPDATE_RESET,
      })
      history.push('/admin/userlist')
    } else {
      if (!user.name || user._id !== userId) {
        dispatch(getUserDetails(userId))
      } else {
        setName(user.name)
        setEmail(user.email)
        setIsAdmin(user.isAdmin)
      }
    }

    window.scrollTo(0, 0)
  }, [dispatch, user, userId, successUpdate, history])

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(
      updateUser({
        _id: userId,
        name,
        email,
        isAdmin,
      })
    )
  }
  console.log(isAdmin)

  return (
    <div className={classes.root}>
      <Paper className={classes.container} elevation={0}>
        <Container component='main' minWidth='xs'>
          <CssBaseline />
          <div className={classes.paper}>
            <p>Edit User</p>
            {loadingUpdate && <Loading/>}
            {errorUpdate && <Messages severity={'error'} message={errorUpdate} />}
            {loading ? (
              <Loading />
            ) : error ? (
              <Messages severity={'error'} message={error} />
            ) : (
              <form
                className={classes.form}
                onSubmit={submitHandler}
                noValidate
              >
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
                <FormControlLabel
                  control={<CheckBox />}
                  label='Is Admin'
                  checked={isAdmin}
                  onChange={(e) => setIsAdmin(e.target.checked)}
                  style={{ paddingTop: 16, width: 120 }}
                />
                <div className={classes.action}>
                  <Button
                    type='submit'
                    fullWidth
                    variant='contained'
                    className={classes.submit}
                  >
                    UPDATE
                  </Button>

                  <Link to={'/admin/userlist'}>🠔 GO BACK</Link>
                </div>
              </form>
            )}
          </div>
        </Container>
      </Paper>
      <ScrollToTop />
    </div>
  )
}

export default AdminUserEdit
