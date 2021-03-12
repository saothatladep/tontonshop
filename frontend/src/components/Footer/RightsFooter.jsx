import { makeStyles, Paper } from '@material-ui/core'
import { minorText } from 'assets/css_variable/variable'
import React from 'react'

const usedStyles = makeStyles((theme) => ({
  root: {},
  container: {
    textAlign: 'center',
    // borderTop: '1px solid #e1e1e1',
    background: '#f9f9f9',

  },
  title: {
    margin: 0,
    padding: '16px 0',
    fontSize: '1.35rem',
    fontWeight: 500,
    color: minorText,
  },
}))

const RightsFooter = () => {
  const classes = usedStyles()
  return (
    <div>
      <Paper>
        <div className={classes.container}>
          <p className={classes.title}>
            © 2021 TonTon Furniture - All Rights Reserved.
          </p>
        </div>
      </Paper>
    </div>
  )
}

export default RightsFooter
