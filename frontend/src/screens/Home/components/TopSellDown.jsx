import { makeStyles } from '@material-ui/core/styles'
import { primaryText, whiteText } from 'assets/css_variable/variable'
import React from 'react'
import { Link } from 'react-router-dom'

const usedStyles = makeStyles((theme) => ({
  root: {},
  container: {
    height: 292,
    padding: '4px 0',
    marginBottom: 8,
    position: 'relative',
    cursor: 'pointer',
    '&:hover': {
      opacity: 0.9,
      '& $middleBox': {
        opacity: 1,
      },
    },
  },
  img: {
    opacity: 1,
    display: 'block',
    height: 296,
    verticalAlign: 'middle',
    transition: '0.5s ease',
    backfaceVisibility: 'hidden',
    webkitBackfaceVisibility: 'hidden',
  },
  middleBox: {
    transition: '0.5s ease',
    opacity: 0,
    position: 'absolute',
    top: '51%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
    textAlign: 'center',
  },
  box: {
    height: 124,
    width: 280,
    margin: '93px auto',
    display: 'block',
    border: '1px solid #656669',
  },
  boxIn: {
    height: 112,
    width: 266,
    margin: '5px auto',
    border: '1px solid #fff',
    background: 'rgba(10,15,28,.6)',
    padding: '12px 0',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    '& p': {
      fontWeight: 700,
      margin: 0,
      padding: '2px 0',
      fontSize: '1.8rem',
      color: whiteText,
    },
    '& h4': {
      fontWeight: 700,
      fontSize: '1.8rem',
      margin: 0,
      padding: 0,
      color: primaryText,
    },
  },
  noDecoration: {
    textDecoration: 'none !important',
  },
}))

const TopSellDown = (props) => {
  const { categoryDown } = props
  const classes = usedStyles()
  return (
    <div>
      <Link
        to={`/category/${categoryDown._id}`}
        className={classes.noDecoration}
      >
        <div className={classes.container}>
          <img className={classes.img} src={categoryDown.img} alt={categoryDown.img}/>
          <div className={classes.middleBox}>
            <div className={classes.box}>
              <div className={classes.boxIn}>
                <p>{categoryDown.name}</p>
                <h4>{categoryDown.title}</h4>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default TopSellDown
