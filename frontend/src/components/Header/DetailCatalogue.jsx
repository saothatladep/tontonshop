import { List, ListItem, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { primaryText } from 'assets/css_variable/variable'
import React from 'react'
import Categories from './Categories'

const usedStyles = makeStyles((theme) => ({
  ItemDetail: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    padding: 0,
    width: 182,
    '& p': {
      fontSize: '1.1rem',
      fontWeight: '600',
      color: '#666',
      padding: theme.spacing(2, 0, 1, 0),
      cursor: 'default',
      fontFamily: "'Montserrat', sans-serif !important",
    },
  },
  noPadding: {
    padding: 0,
  },
  choiceItemDetail: {
    display: 'flex',
    cursor: 'pointer',
    alignItems: 'flex-start',
    textDecoration: 'none !important',
    padding: '8px 0 8px 0',
    '& span': {
      fontSize: '1.4rem',
      color: '#666',
      marginTop: '-6px',
    },
    '& svg': {
      color: '#615353',
      marginRight: theme.spacing(1),
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
  listCatalogue: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginTop: theme.spacing(1.5),
  },
}))

const DetailCatalogue = (props) => {
  const classes = usedStyles()
  const { listCatalogues } = props
  return (
    <div className={classes.listCatalogue}>
      {listCatalogues.map((listCatalogue) => (
        <ListItem className={classes.ItemDetail} key={listCatalogue._id}>
          <img src={listCatalogue.img}></img>
          <Typography color='inherit'>{listCatalogue.name}</Typography>
          <List>
            <Categories listCategories={listCatalogue.listCategories} />
          </List>
        </ListItem>
      ))}
    </div>
  )
}

export default DetailCatalogue
