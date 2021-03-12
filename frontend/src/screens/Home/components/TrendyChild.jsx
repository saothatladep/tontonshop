import { Link, makeStyles } from '@material-ui/core'
import { primaryText, mainText } from 'assets/css_variable/variable'
import React from 'react'

const usedStyles = makeStyles((theme) => ({
  root: {
    width: '390px',
    cursor: 'pointer',
    '&:hover': {
      // boxShadow: '0 1px 6px rgb(32 33 36 / 40%)',
      // borderColor: 'rgba(223,225,229,0)',
      
      '& p': {
        color: primaryText,
      },
      '& $container': {
        border: '1px solid ',
        borderColor: primaryText,
      },
    },
  },
  container: {
    border: '1px solid #e1e1e1',
    width: '100%',
    overflow: 'hidden',
    marginBottom: 16,

    '& img': {
      marginTop: 20,
      heigh: 'auto',
      width: 'auto',
    },
    '& p': {
      fontWeight: 600,
      padding: '0 13px',
      fontSize: '1.8rem',
      color: mainText,
    },
  },
  noDecoration: {
    textDecoration: 'none !important',
  },
}))
const TrendyChild = (props) => {
  const { category } = props
  const classes = usedStyles()
  return (
    <div className={classes.root}>
      <Link className={classes.noDecoration}>
        <div className={classes.container}>
          <img src={category.img} alt={category.name} />
          <p>{category.name}</p>
        </div>
      </Link>
    </div>
  )
}

export default TrendyChild
