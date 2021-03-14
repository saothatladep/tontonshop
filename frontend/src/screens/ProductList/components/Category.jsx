import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import { primaryText } from 'assets/css_variable/variable'
import React from 'react'

const usedStyles = makeStyles((theme) => ({
  root: {},
  container: {
    maxHeight: 135,
    minHeight: 120,
    width: 180,
    height: '100%',
    border: '4px solid #ebebeb',
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
    '& img': {
      height: '100%',
      width: '60%',
      margin: '7px auto',
    },
    '& p': {
      color: '#333',
      fontSize: '1.4rem',
      padding: '2px 5px 12px 5px',
      fontWeight: 600,
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      margin: 0,
    },
  },
  focus: {
    color: '#ff8a0c !important',
  },
  noPadding: {
    padding: 0,
  },
  noDecoration: {
    textDecoration: 'none !important',
  },
}))
const Category = (props) => {
  const { category, match } = props;
  const classes = usedStyles()
  console.log(match.params.id)
  console.log(category._id)

  return (
    <div>
      <Link to = {`/category/${category._id}`} className={classes.noDecoration}>
        <div className={classes.container}>
          <img
            src={category.img}
            alt={category.name}
          />
          <p className={(category._id === match.params.id) ? classes.focus : ''}> {category.name} </p>
        </div>
      </Link>
    </div>
  )
}

export default Category
