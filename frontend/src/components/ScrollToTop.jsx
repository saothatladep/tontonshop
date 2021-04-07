import { makeStyles } from '@material-ui/core/styles'
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward'
import { primaryText, whiteText } from 'assets/css_variable/variable'
import React, { useEffect, useState } from 'react'

const usedStyles = makeStyles((theme) => ({
  root: {},
  container: {
    width: 50,
    height: 50,
    position: 'fixed',
    top: 'auto !important',
    right: 12,
    bottom: 100,
    textAlign: 'center',
    lineHeight: 6.5,
    backgroundColor: primaryText,
    border: '2px solid',
    borderColor: primaryText,
    borderRadius: '100%',
    cursor: 'pointer',
    zIndex: 9999,
    animationName: '$scroll',
    animationDuration: '1s',
    animationTimingFunction: 'ease',
    webkitAnimationName: '$slideDown',
    webkitAnimationDuration: '1s',
    webkitAnimationTimingFunction: 'ease',
    '& svg': {
      fontSize: '2.4rem',
      color: whiteText,
    },
    '&:hover': {
      background: whiteText,
      '& svg': {
        color: primaryText,
      },
    },
  },
  '@keyframes scroll': {
    '0%': {
      transform: 'translateY(150px)',
      opacity: 0,
    },

    '100%': {
      transform: 'translateY(0)',
      opacity: 1,
    },
  },
}))
const ScrollToTop = () => {
  const classes = usedStyles()
  const [isVisible, setIsVisible] = useState(false)

  // Show button when page is scorlled upto given distance
  const toggleVisibility = () => {
    if (window.pageYOffset >= 100) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  // Set the top cordinate to 0
  // make scrolling smooth
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility)
  }, [])
  return (
    <div className={classes.root}>
      {isVisible && (
        <div className={classes.container} onClick={scrollToTop}>
          <ArrowUpwardIcon />
        </div>
      )}
    </div>
  )
}

export default ScrollToTop
