import { List, ListItem, ListItemText } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import React from 'react'

const usedStyles = makeStyles((theme) => ({
  root: {},
  containOption: {
    width: 1200,
    margin: '0 auto',
    height: 55,
  },
  list: {
    display: 'flex',
    justifyContent: 'space-between',
    // alignItems: 'center',
    cursor: 'pointer',
    padding: 0,
  },
  listItem: {
    '& span': {
        fontSize: '1.6rem',
        fontWeight: '500',
        padding: '10 0', 
    },
    '&:hover': {
        transition: '.3s ease-out',
        borderTop: '3px solid #ff8a0c',
        '& span': {
          transition: '.3s ease-out',
          color: '#ff8a0c',
        }
    }
  },
}))

const headerOptionCategories = () => {
  const classes = usedStyles()
  return (
    <div className={classes.containOption}>
      <List className={classes.list}>
        <ListItem className={classes.listItem}>
          <ListItemText primary='GHẾ SOFA'/>
        </ListItem>
        <ListItem className={classes.listItem}>
          <ListItemText primary='PHÒNG KHÁCH'/>
        </ListItem>
        <ListItem className={classes.listItem}>
          <ListItemText primary='PHÒNG NGỦ'/>
        </ListItem>
        <ListItem className={classes.listItem}>
          <ListItemText primary='PHÒNG ĂN'/>
        </ListItem >
        <ListItem className={classes.listItem}>
          <ListItemText primary='CHỨA ĐỒ'/>
        </ListItem>
        <ListItem className={classes.listItem}>
          <ListItemText primary='HỌC TẬP'/>
        </ListItem>
      </List>
    </div>
  )
}

export default headerOptionCategories
