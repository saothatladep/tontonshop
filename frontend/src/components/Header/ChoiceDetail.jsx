import { Link, ListItem, ListItemText } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import AlbumIcon from '@material-ui/icons/Album'
import { primaryText } from 'assets/css_variable/variable'
import React from 'react'

const usedStyles = makeStyles((theme) => ({
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
      alignItems: 'flex-start',
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
}))

const ChoiceDetail = (props) => {
  const classes = usedStyles()
  const { listChoice } = props
  return (
    <div className ={classes.noPadding}>
      {listChoice.map((choice) => (
        <ListItem className={classes.noPadding} key = {choice.idChoice}>
          <Link className={classes.choiceItemDetail}>
            <AlbumIcon />
            <ListItemText primary={choice.titleChoice}/>
          </Link>
        </ListItem>
      ))}
    </div>
  )
}

export default ChoiceDetail
