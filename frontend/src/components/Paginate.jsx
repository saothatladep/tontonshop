import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Pagination } from '@material-ui/lab'
import { Link } from 'react-router-dom'

const usedStyles = makeStyles((theme) => ({
  pagination: {
    padding: '30px 0 8px 0',
    '& button': {
      fontSize: '1.6rem',
    },
    '& svg': {
      fontSize: '2.4rem !important',
    },
  },
}))
const Paginate = (props) => {
  const { pages, page, isAdmin = false, keyword = '' } = props
  const classes = usedStyles()

  return (
    <div>
      <Pagination className={classes.pagination} color='primary' size='large'>
        {[...Array(pages).keys()].map((x) => (
          <Link
            key={x + 1}
            to={keyword ? `/search/${keyword}/page/${x + 1}` : `/`}
          >
            {x + 1}
          </Link>
        ))}
      </Pagination>
    </div>
  )
}

export default Paginate
