import { List, makeStyles } from '@material-ui/core'
import React from 'react'
import OptionItemFooter from 'components/Footer/OptionItemFooter'
import { mainText, maxWidth, primaryText } from 'assets/css_variable/variable'

const usedStyles = makeStyles((theme) => ({
  root: {
    marginBottom: 20,
  },
  mainTitle: {
    fontSize: '1.6rem',
    fontWeight: 600,
    color: mainText,
    paddingTop: 0,
    // marginBottom: 36,
  },
  list: {
    padding: '10 0 0 0',
  },
}))
const OptionFooter = (props) => {
  const { footer } = props
  const classes = usedStyles()
  return (
    <div className={classes.root}>
      <p className={classes.mainTitle}>{footer.titleMain}</p>
      <List className={classes.list}>
        <OptionItemFooter itemList={footer.list} />
      </List>
    </div>
  )
}

export default OptionFooter
