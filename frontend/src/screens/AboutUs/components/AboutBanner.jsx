import { Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import FormatQuoteIcon from '@material-ui/icons/FormatQuote'
import { primaryText } from 'assets/css_variable/variable'
import React from 'react'

const usedStyles = makeStyles((theme) => ({
  root: {
    background:
      'url(https://www.jodhpurifurniture.com/assets/images/about-banner.jpg) center center/cover',
    height: 484,
  },
  container: {
    margin: '0 auto',
    position: 'relative',
    background: primaryText,
    width: 535,
    left: -328,
    top: -106,
    borderRadius: 5,
    '& p': {
        fontStyle: 'italic',
        fontWeight: 500,
        fontSize: '2.3rem',
        lineHeight: 1.7,
        margin: '-57px 0 0 0',
        padding: '44px 51px 0 51px',
        color: '#fff',
    },
    '& svg': {
        fontSize: '7rem',
        color: '#fff',
    },
  },
  noPadding: {
    padding: 0,
  },
  noDecoration: {
    textDecoration: 'none !important',
  },
}))

const AboutBanner = () => {
  const classes = usedStyles()

  return (
    <div>
      <Paper className={classes.root} elevation={0}>
        <div className={classes.container}>
          <FormatQuoteIcon style = {{transform: 'rotate(180deg)'}} />
          <p>
            {' '}
            To be Earth’s most customer centric company; to build a place where
            people can discover virtually all types of furniture.{' '}
          </p>
          <FormatQuoteIcon style = {{margin: '0 0 0 424px'}} />
        </div>
      </Paper>
    </div>
  )
}

export default AboutBanner
