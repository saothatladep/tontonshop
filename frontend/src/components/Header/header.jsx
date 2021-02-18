/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react-hooks/rules-of-hooks */
import { Link } from '@material-ui/core'
import Badge from '@material-ui/core/Badge'
import InputBase from '@material-ui/core/InputBase'
import { fade, makeStyles } from '@material-ui/core/styles'
import Toolbar from '@material-ui/core/Toolbar'
import cart from 'assets/icon/cart.png'
import search from 'assets/icon/search.png'
import user from 'assets/icon/user.png'
import logo from 'assets/logo/logo.png'
import React from 'react'

const usedStyles = makeStyles((theme) => ({
  containHeader: {
    height: 100,
    zIndex: 10,
    // backgroundColor: '#ff8604',
    backgroundColor: '#fff',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottom: '1px solid #e1e1e1',
  },
  contentHeader: {
    width: 1200,
    padding: 0,
    display: 'flex',
    justifyContent: 'space-between',
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade('#757575', 0.15),
    '&:hover': {
      backgroundColor: fade('#757575', 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '500px',
    height: '40px',
    '& img': {
      width: '25px',
    },
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
    '& a': {
      fontSize: '1.6rem',
      fontWeight: 500,
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
    '& p': {
      fontSize: '1.6rem',
      marginLeft: theme.spacing(1.2),
      fontWeight: 500,
    },
    '& img': {
      width: '30px',
    },
    '& span': {
      fontSize: '1.6rem',
      color: '#fff',
    },
  },
  logo: {
    width: '100px',
  },
}))
const header = () => {
  const classes = usedStyles()
  return (
    <div className={classes.containHeader}>
      <Toolbar className={classes.contentHeader}>
        <Link href='#' color='inherit'>
          <img className={classes.logo} src={logo} />
        </Link>
        <div className={classes.search}>
          <div className={classes.searchIcon}>
          <img src={search}></img>
          </div>
          <InputBase
            placeholder='Enter Your Search...'
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
          />
        </div>
        <div className={classes.headerOptionRight}>
          <div className={classes.headerUserOption}>
            <img src={user}></img>
            <Link href='#' color='inherit'>
              Login
            </Link>
            <span> / </span>
            <Link href='#' color='inherit'>
              Register
            </Link>
          </div>
          <div>
            <Link className={classes.headerCartOption} href='/' color='inherit'>
              <Badge badgeContent={'0'} color='error'>
                <img src={cart}></img>
              </Badge>
              <p>My Cart</p>
            </Link>
          </div>
        </div>
      </Toolbar>
    </div>
  )
}

export default header
