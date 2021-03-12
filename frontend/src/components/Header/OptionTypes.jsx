import { List, Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { maxWidth } from 'assets/css_variable/variable'
import React ,{useState,useEffect} from 'react'
import Types from './Types'

const usedStyles = makeStyles((theme) => ({
  containOption: {
    width: maxWidth,
    textAlign: 'center',
    margin: '0 auto 0 auto',

  },
  list: {
    cursor: 'pointer',
    padding: 0,
    height: 'auto',
  },
  root: {
    position: 'fixed',
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    zIndex: 100,
    animationName: '$slideDown',
    animationDuration: '2s',
    animationTimingFunction: 'ease',
    webkitAnimationName: '$slideDown',
    webkitAnimationDuration: '2s',
    webkitAnimationTimingFunction: 'ease',
    maxHeight: '50px',
    // visibility: 'visible',
  },
  '@keyframes slideDown': {
    '0%': {
      transform: 'translateY(-100%)',
    },
    '50%': {
      transform: 'translateY(2%)',
    },
    '65%': {
      transform: 'translateY(-4%)',
    },
    '80%': {
      transform: 'translateY(0%)',
    },
    '90%': {
      transform: 'translateY(-2%)',
    },
    '100%': {
      transform: 'translateY(0)',
    },
  },
  container: {
    boxShadow: '0 0 4px #ccc',
  }
}))

const OptionTypes = () => {
  const classes = usedStyles()
  const [hide, setHide] = useState({
    scrollPos: window.pageYOffset,
  })
   useEffect(() => {
    const up = () => {
      window.addEventListener('scroll', () => handleScroll())
    }
    up()
    return () => {
      window.removeEventListener('scroll', () => handleScroll())
    }
  }, [])

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset
    setHide({
      scrollPos: currentScrollPos,
    })
  }
  return (
    <div className={hide.scrollPos >100 ? classes.root : ''}>
      <Paper className={classes.container} elevation={0}>
        <div className={classes.containOption}>
          <List className={classes.list}>
            <Types />
          </List>
        </div>
      </Paper>
    </div>
  )
}

export default OptionTypes
