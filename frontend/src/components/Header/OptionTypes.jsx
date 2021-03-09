import { List, Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { maxWidth } from 'assets/css_variable/variable'
import React from 'react'
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
    marginTop: 100,
    maxHeight: '50px',
  },
  container: {
    boxShadow: '0 0 4px #ccc',
  }
}))

const OptionTypes = () => {
  const classes = usedStyles()
  return (
    <div className={classes.root}>
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
