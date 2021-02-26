import { Link, ListItem, ListItemText, makeStyles } from '@material-ui/core'
import { minorText, primaryText } from 'assets/css_variable/variable'
import React from 'react'

const usedStyles = makeStyles((theme) => ({
  root: {
    // marginBottom: 36,
  },
  container: {
    padding: 0,
  },
  title: {
    '& span': {
      color: minorText,
      fontSize: '1.4rem',
      letterSpacing: 0.8,
      fontWeight: 500,
      fontFamily: "'Montserrat', sans-serif !important;",
      paddingTop: 2,
    },
    '& :hover': {
      color: primaryText,
    },
  },
  link: {
    textDecoration: 'none !important',
    color: minorText,
    fontSize: '1.4rem',
    fontWeight: 500,
  },
}))
const OptionItemFooter = (props) => {
  const { itemList } = props
  const classes = usedStyles()
  return (
    <div className={classes.root}>
      {itemList.map((item) => (
        <ListItem className={classes.container} key={item.idList}>
          <Link href='#' className={classes.link}>
            <ListItemText className={classes.title}>{item.text}</ListItemText>
          </Link>
        </ListItem>
      ))}
    </div>
  )
}

export default OptionItemFooter
