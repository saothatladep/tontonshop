import { ListItem, ListItemText } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { mainText, maxWidth, primaryText } from 'assets/css_variable/variable'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Catalogues from './Catalogues'

const usedStyles = makeStyles((theme) => ({
  containTypes: {
    width: maxWidth,
    display: 'flex',
    position: 'static !important',
    cursor: 'default',
  },
  typeItem: {
    padding: '10px 16px',
    border: '3px solid transparent',
    width: 'auto',
    cursor: 'pointer',
    position: 'static !important',
    '&:hover': {
      transition: '.3s ease-out',
      border: '3px solid',
      borderColor: primaryText,
      '& $text': {
        '& span': {
          transition: '.3s ease-out',
          color: primaryText,
        },
      },
    },
  },
  text: {
    '& span': {
      fontSize: '1.6rem',
      fontWeight: '600',
      padding: '10 0',
      textAlign: 'start',
      fontFamily: "'Montserrat', sans-serif !important",
      color: mainText,
    },
  },
}))

const Types = () => {
  const classes = usedStyles()
  const [types, setTypes] = useState([])
  const [isOpen, setIsOpen] = useState(false)
  const [index, setIndex] = useState('')

  useEffect(() => {
    const fetchTypes = async () => {
      const { data } = await axios.get('/api/types/getAll')
      setTypes(data)
    }
    fetchTypes()
  }, [])

  const getKeyType = (event) => {
    setIsOpen(true)
    setIndex(event.currentTarget.getAttribute('id'))
  }

  return (
    <div>
      <div className={classes.containTypes}>
        {types.map((type) => (
          <ListItem
            className={classes.typeItem}
            key={type._id}
            id={type._id}
            onMouseEnter={(e) => getKeyType(e)}
            onMouseLeave={() => setIsOpen(false)}
          >
            <ListItemText className={classes.text} primary={type.name} />
            {index == type._id && isOpen && (
              <Catalogues type={type} />
            )}
          </ListItem>
        ))}
      </div>
    </div>
  )
}

export default Types
