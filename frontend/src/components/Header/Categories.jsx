import { ListItem, ListItemText } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { mainText, maxWidth, primaryText } from 'assets/css_variable/variable'
import initOptionCategories from 'mocks/navbarItemData.js'
import React, { useState } from 'react'
import DetailCategories from './DetailCategories'

const usedStyles = makeStyles((theme) => ({
  containCategories: {
    width: maxWidth,
    display: 'flex',
    position: 'static !important',
    cursor: 'default',
  },
  categoryItem: {
    padding: '10px 16px',
    borderTop: '3px solid transparent',
    width: 'auto',
    cursor: 'pointer',
    position: 'static !important',
    '&:hover': {
      transition: '.3s ease-out',
      borderTop: '3px solid',
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
      fontWeight: '500',
      padding: '10 0',
      textAlign: 'start',
      fontFamily: "'Montserrat', sans-serif !important",
      color: mainText,
    },
  },
}))

const Categories = () => {
  const classes = usedStyles()
  const [categories, setCategories] = useState(initOptionCategories)
  const [isOpen, setIsOpen] = useState(false)
  const [index, setIndex] = useState(0)

  const getKeyCategory = (event) => {
    setIsOpen(true)
    setIndex(event.currentTarget.getAttribute('id'))
    console.log(event.currentTarget.getAttribute('id'))
  }

  return (
    <div>
      <div className={classes.containCategories}>
        {categories.map((category) => (
          <ListItem
            className={classes.categoryItem}
            key={category.idCategory}
            id={category.idCategory}
            onMouseEnter={(e) => getKeyCategory(e)}
            onMouseLeave={() => setIsOpen(false)}
          >
            <ListItemText className={classes.text} primary={category.name} />
            {index == category.idCategory && isOpen && (
              <DetailCategories category={category} />
            )}
          </ListItem>
        ))}
      </div>
    </div>
  )
}

export default Categories
