import { Link, ListItem, ListItemText } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import AlbumIcon from '@material-ui/icons/Album'
import { primaryText } from 'assets/css_variable/variable'
import React from 'react'

const usedStyles = makeStyles((theme) => ({
  containerChoice: {
    padding: 0,
    marginBottom: 8,
  },
  choiceItemDetail: {
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

const ChoiceDetail = (props) => {
  const classes = usedStyles()
  const { listChoice } = props
  return (
    <div>
      {listChoice.map((choice) => (
        <ListItem className={classes.containerChoice} key={choice.idChoice}>
          <Link className={classes.choiceItemDetail}>
            <AlbumIcon />
            <ListItemText
              className={classes.text}
              primary={choice.titleChoice}
            />
          </Link>
        </ListItem>
      ))}
    </div>
  )
}

export default ChoiceDetail
