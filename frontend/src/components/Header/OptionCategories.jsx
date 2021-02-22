import {List,Paper} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { maxWidth, primaryText } from 'assets/css_variable/variable'
import React from 'react'
import Categories from './Categories'

const usedStyles = makeStyles((theme) => ({
  containOption: {
    width: maxWidth,
    margin: '100px auto 0 auto',
    minHeight: 345,
  },
  list: {
    cursor: 'pointer',
    padding: 0,
    height: 'auto',
  },
}))

const headerOptionCategories = () => {
  const classes = usedStyles()
  return (
    <Paper elevation={0}>
      <div className={classes.containOption}>
        <List className={classes.list}>
          <Categories />
        </List>
      </div>
      

    </Paper>
  )
}

export default headerOptionCategories
