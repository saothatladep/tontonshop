/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react-hooks/rules-of-hooks */
import { Paper } from '@material-ui/core'
import Badge from '@material-ui/core/Badge'
import InputBase from '@material-ui/core/InputBase'
import { fade, makeStyles } from '@material-ui/core/styles'
import Toolbar from '@material-ui/core/Toolbar'
import { logout } from 'actions/userActions.js'
import {
  grayText,
  maxWidth,
  primaryText,
  whiteText,
} from 'assets/css_variable/variable'
import search from 'assets/icon/search.png'
import cartImg from 'assets/icon/shopping-cart.svg'
import user from 'assets/icon/user.png'
import logo from 'assets/logo/logo.png'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import {CART_RESET_ITEM} from 'constants/cartConstants'

const usedStyles = makeStyles((theme) => ({
  root: {
    height: 100,
  },
  containHeader: {
    height: '100%',
    backgroundColor: whiteText,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottom: '1px solid #e1e1e1',
    margin: '0 auto',
  },
  contentHeader: {
    width: maxWidth,
    padding: 0,
    display: 'flex',
    justifyContent: 'space-between',
  },
  search: {
    position: 'relative',
    // borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(grayText, 0.15),
    '&:hover': {
      boxShadow: '0 1px 6px rgb(32 33 36 / 40%)',
      borderColor: 'rgba(223,225,229,0)',
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '500px',
    height: '40px',
    '& img': {
      width: '25px',
    },
    borderRadius: '50px',
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '& svg': {
      fontSize: '2.5rem',
    },
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1.4, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '440px',
    height: '100%',
    fontSize: '1.6rem',
  },
  headerOptionRight: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerUserOption: {
    display: 'flex',
    alignItems: 'center',
    marginRight: theme.spacing(6),
    '& a:hover': {
      color: primaryText,
    },
    '& span': {
      fontSize: '1.6rem',
      padding: theme.spacing(0, 0.5),
    },
    '& img': {
      width: '30px',
      marginRight: theme.spacing(1),
    },
  },
  headerCartOption: {
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none !important',
    color: '#333',
    '&:hover': {
      color: primaryText,
      '& img': {
        fill: primaryText,
      },
    },
    '& p': {
      fontSize: '1.6rem',
      marginLeft: theme.spacing(1.2),
      fontWeight: 600,
    },
    '& img': {
      width: '30px',
    },
    '& span': {
      fontSize: '1.6rem',
      color: whiteText,
    },
  },
  logo: {
    width: '100px',
  },
  link: {
    fontSize: '1.6rem',
    fontWeight: 550,
    textDecoration: 'none !important',
    color: '#333',
  },
  menu: {
    marginRight: 36,
    position: 'relative',
    '&:hover $dropDown': {
      display: 'block',
    },
  },
  bridge: {
    height: 16,
    width: '100%',
    position: 'absolute',
    top: -16,
    backgroundColor: 'transparent',
  },
  dropDown: {
    display: 'none',
    position: 'absolute',
    backgroundColor: '#fff',
    minWidth: 160,
    top: 35,
    boxShadow: '0 8px 16px 0 rgb(0 0 0 / 20%)',
    zIndex: 9999999,
    border: '1px solid #e1e1e1',
    '& p': {
      color: '#333',
      padding: '12px 0 0px 14px',
      marginTop: -1,
      fontSize: 14,
      fontWeight: 600,
      borderTop: '1px solid #e1e1e1',
      letterSpacing: 0.3,
      '&:hover': {
        color: primaryText,
      },
    },
  },
}))
const NavHeader = (props) => {
  const { history } = props

  const classes = usedStyles()
  const cart = useSelector((state) => state.cart)
  const [keyword, setKeyWord] = useState('')

  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const logOutHandler = () => {
    dispatch(logout())
    dispatch({type: CART_RESET_ITEM})
    localStorage.setItem('cartItems', JSON.stringify([]))
    localStorage.setItem('shippingAddress', JSON.stringify({}))
  }

  const submitHandler = (e) => {
    e.preventDefault()
    if (keyword.trim()) {
      history.push(`/search/${keyword}`)
    } else {
      history.push(`/`)
    }
  }

  return (
    <Paper>
      <header className={classes.root}>
        <div className={classes.containHeader}>
          <Toolbar className={classes.contentHeader}>
            <Link to='/' color='inherit'>
              <img className={classes.logo} src={logo} />
            </Link>
            <form className={classes.search} onSubmit={submitHandler}>
              <div className={classes.searchIcon}>
                <img src={search}></img>
              </div>
              <InputBase
                placeholder='Enter Your Search...'
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                onChange={(e) => setKeyWord(e.target.value)}
              />
            </form>
            <div className={classes.headerOptionRight}>
              {userInfo ? (
                <div className={classes.menu}>
                  <div className={classes.headerUserOption}>
                    <img src={user} />
                    <Link className={classes.link}>{userInfo.name} ▼</Link>
                    <div className={classes.dropDown}>
                      <div className={classes.bridge}></div>

                      <Link
                        className={classes.link}
                        to={userInfo.isAdmin ? '/admin/userlist' : '/profile'}
                      >
                        <p>{userInfo.isAdmin ? 'Users' : 'My Profile'}</p>
                      </Link>
                      <Link
                        className={classes.link}
                        to={
                          userInfo.isAdmin ? '/admin/orderslist' : '/myorders'
                        }
                      >
                        <p>{userInfo.isAdmin ? 'Orders' : 'My Order'}</p>
                      </Link>
                      {userInfo.isAdmin ? (
                        <Link
                          className={classes.link}
                          to={'/admin/productlist'}
                        >
                          <p>Products</p>
                        </Link>
                      ) : (
                        ''
                      )}
                      <Link
                        to={'/'}
                        className={classes.link}
                        onClick={logOutHandler}
                      >
                        <p>Log Out</p>
                      </Link>
                    </div>
                  </div>
                </div>
              ) : (
                <div className={classes.headerUserOption}>
                  <img src={user}></img>
                  <Link to={`/login`} className={classes.link}>
                    Login
                  </Link>
                </div>
              )}

              <div>
                <Link to={`/cart/mycart`} className={classes.headerCartOption}>
                  <Badge
                    badgeContent={
                      cart.cartItems.length === 0 ? '0' : cart.cartItems.length
                    }
                    color='error'
                  >
                    <img src={cartImg}></img>
                  </Badge>
                  <p>My Cart</p>
                </Link>
              </div>
            </div>
          </Toolbar>
        </div>
      </header>
    </Paper>
  )
}

export default NavHeader
