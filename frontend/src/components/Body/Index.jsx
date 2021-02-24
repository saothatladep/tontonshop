import { makeStyles } from '@material-ui/core'
import React from 'react'

const usedStyles = makeStyles((theme) => ({
  root: {
    marginTop: 154,
  },
}))
const Body = () => {
  const classes = usedStyles()
  return <div className={classes.root}>fgdfg</div>
}

export default Body
