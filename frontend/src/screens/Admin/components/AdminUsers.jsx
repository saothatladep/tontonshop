import { makeStyles } from '@material-ui/core/styles'
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button'
import { useDispatch, useSelector } from 'react-redux'
import { listUsers, deleteUser } from 'actions/userActions'
import Loading from 'components/Loading'
import Messages from 'components/Messages'
import ClearIcon from '@material-ui/icons/Clear'
import DeleteIcon from '@material-ui/icons/Delete'
import DoneIcon from '@material-ui/icons/Done'
import EditIcon from '@material-ui/icons/Edit'
import { maxWidth, primaryText, whiteText } from 'assets/css_variable/variable'
import { Paper } from '@material-ui/core'
import ScrollToTop from 'components/ScrollToTop'

const usedStyles = makeStyles((theme) => ({
  root: {
    marginTop: 2,
  },
  container: {
    width: maxWidth,
    margin: '0 auto',
    padding: '64px 0 64px 0',
    '& h1': {
      fontSize: '5rem',
      fontWeight: '600',
      color: primaryText,
      margin: 0,
      paddingBottom: 24,
    },
  },
  table: {
    width: '100%',
    border: '1px solid #e1e1e1',
    '& thead': {
      fontSize: '1.6rem',
      fontWeight: '600',
      backgroundColor: primaryText,
      color: whiteText,
      '& th': {
        fontWeight: 600,
        padding: '16px 27px',
        borderSpacing: '0px',
      },
    },
    '& tbody': {
      border: '1px solid red',
      '& td': {
        padding: '17px 10px !important',
        textAlign: 'center',
        borderTop: '1px solid #ddd',
        borderLeft: '1px solid #ddd',
        fontSize: '1.6rem',
        fontWeight: '500',
        color: '#666',
        '& svg': {
          fontSize: '3rem',
          fontWeight: '600',
        },
        '& a': {
          textDecoration: 'none',
          color: '#666',
          '&:hover': {
            color: primaryText,
          },
          '& button': {
            padding: '4px 4px',
            backgroundColor: primaryText,
            fontSize: '1.2rem',
            color: whiteText,
            border: '1px solid',
            borderColor: primaryText,
            marginLeft: 4,
            '& svg': {
              fontSize: '2rem',
            },
            '&:hover': {
              backgroundColor: whiteText,
              color: primaryText,
            },
          },
        },
      },
    },
  },
  noPadding: {
    padding: 0,
  },
}))

const AdminUsers = (props) => {
  const { history } = props
  const classes = usedStyles()

  const dispatch = useDispatch()

  const userList = useSelector((state) => state.userList)
  const { loading, error, users } = userList

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const userDelete = useSelector((state) => state.userDelete)
  const { success: successDelete } = userDelete

  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      dispatch(listUsers())
    } else {
      history.push('/login')
    }
  }, [dispatch, history, successDelete, userInfo]);

  const deleteHandler = (id) => {
    if (window.confirm('Are you sure?')) {
      dispatch(deleteUser(id))
    }
  }

  return (
    <Paper elevation={0} className={classes.root}>
      {loading ? (
        <Loading />
      ) : error ? (
        <Messages severity={'error'} message={error} />
      ) : (
        <div className={classes.container}>
          <h1>USERS</h1>
          <table className={classes.table}>
            <thead>
              <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>EMAIL</th>
                <th>ADMIN</th>
                <th></th>
              </tr>
            </thead>

            <tbody>
              {users.map((user, index) => (
                <tr key={index}>
                  <td>{user._id}</td>
                  <td>{user.name}</td>
                  <td>
                    {' '}
                    <a href={`mailto:${user.email}`}>{user.email}</a>{' '}
                  </td>
                  <td>
                    {user.isAdmin ? (
                      <DoneIcon style={{ color: 'green' }} />
                    ) : (
                      <ClearIcon style={{ color: 'red' }} />
                    )}
                  </td>
                  <td>
                    <Link to={`/admin/user/${user._id}/edit`}>
                      <Button>
                        <EditIcon />
                      </Button>
                    </Link>
                    <Link onClick={() => deleteHandler(user._id)}>
                      <Button>
                        <DeleteIcon />
                      </Button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      <ScrollToTop />
    </Paper>
  )
}

export default AdminUsers
