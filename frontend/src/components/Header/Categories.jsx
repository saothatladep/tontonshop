import { Link, ListItem, ListItemText } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import AlbumIcon from '@material-ui/icons/Album'
import { primaryText } from 'assets/css_variable/variable'
import React from 'react'

const usedStyles = makeStyles((theme) => ({
  containerCategory: {
    padding: 0,
    marginBottom: 8,
  },
  categoryItemDetail: {
    display: 'flex',
    cursor: 'pointer',
    alignItems: 'flex-start',
    textDecoration: 'none !important',
    padding: 0,
    '& span': {
      fontSize: '1.4rem',
      color: '#666',
      marginTop: '-7px',
      alignItems: 'flex-start',
      fontFamily: "'Montserrat', sans-serif !important",
    },
    '& svg': {
      color: '#615353',
      marginRight: theme.spacing(0.5),
    },
    '&:hover': {
      '& span': {
        color: primaryText,
      },
      '& svg': {
        color: primaryText,
      },
    },
  },
  text: {
    '& span': {
      fontSize: '1,3rem',
      fontWeight: '400',
    },
  },
}))

const Categories = (props) => {
  const classes = usedStyles()
  const { listCategories } = props
  return (
    <div>
      {listCategories.map((Category) => (
        <ListItem className={classes.containerCategory} key={Category._id}>
          <Link className={classes.categoryItemDetail}>
            <AlbumIcon />
            <ListItemText className={classes.text} primary={Category.name} />
          </Link>
        </ListItem>
      ))}
    </div>
  )
}

export default Categories
