import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { maxWidth, mainText, primaryText } from 'assets/css_variable/variable'
import { Link, Paper } from '@material-ui/core'
import { Box, Container, Grid, List } from '@material-ui/core'

const usedStyles = makeStyles((theme) => ({
  root: {},
  container: {
    height: 185,
    width: 180,
    border: '4px solid #ebebeb',
    margin: '27px 0 15px',
    padding: '30px 0',
    cursor: 'pointer',
    '&:hover': {
      boxShadow: '2px 3.464px 37.2px 2.8px rgb(0 0 0 / 8%)',
      backgroundColor: 'rgba(255, 138, 12, 0)',
      border: '4px solid transparent',
      webkitTransition: '0.5s',
      '& p': {
        color: primaryText,
      },
    },
  },
  img: {
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    height: 60,
  },
  link: {
    textDecoration: 'none !important',
    cursor: 'pointer',
    '& p': {
      fontSize: '1.3rem',
      color: '#414141',
      paddingTop: '93px',
      fontWeight: 700,
      fontFamily: "'Montserrat', sans-serif !important",
    },
  },
  noDecoration: {
    textDecoration: 'none !important',
  },
}))
const CategoryChild = (props) => {
  const { category } = props
  const classes = usedStyles()
  return (
    <div>
      <Link className={classes.noDecoration}>
        <div className={classes.container}>
          <div
            className={classes.img}
            style={{
              backgroundImage: `url(${category.img})`,
            }}
          >
            <Link className={classes.link}>
              <p>{category.name}</p>
            </Link>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default CategoryChild
