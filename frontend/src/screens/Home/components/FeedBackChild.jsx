import { makeStyles } from '@material-ui/core/styles'
import { primaryText, whiteText } from 'assets/css_variable/variable'
import React from 'react'

const usedStyles = makeStyles((theme) => ({
  root: {},
  container: {
    width: 563,
    position: 'relative',
    float: 'left',
    // marginRight: 45,
  },
  img: {
    maxWidth: 256,
    height: 286,
  },
  box: {
    position: 'absolute',
    width: 380,
    height: 182,
    right: 12,
    top: 60,
    padding: '29px 31px 21px 27px',
    // boxShadow: '0 5px 30px 0 rgb(172 172 172 / 15%)',
    backgroundColor: whiteText,
    border: '1px solid',
    borderColor: primaryText,
    '& img': {
      width: '40px !important',
      height: 31,
      position: 'absolute',
      bottom: 20,
      right: 23,
    },
    '& p': {
      fontSize: '1.7rem',
      fontWeight: 400,
      fontStretch: 'normal',
      fontStyle: 'italic',
      lineHeight: 1.41,
      letterSpacing: 0.34,
      textAlign: 'left',
      color: '#707070',
      margin: 0,
    },

    '& h3': {
      fontSize: '1.6rem',
      fontWeight: 500,
      lineHeight: 1.38,
      letterSpacing: 0.32,
      textAlign: 'left',
      color: '#222',
    },
    '& span': {
      fontSize: '1.6rem',
      fontWeight: 500,
      fontStretch: 'normal',
      lineHeight: 1.38,
      letterSpacing: 0.32,
      textAlign: 'left',
      color: '#707070',
    },
  },
}))

const FeedBackChild = (props) => {
  const { comment } = props
  const classes = usedStyles()
  return (
    <div>
      <div className={classes.container}>
        <img className={classes.img} src={comment.img} alt='' />
        <div className={classes.box}>
          <img
            src='https://www.jodhpurifurniture.com/assets/images/testimonial.png'
            alt=''
          />
          <p>{comment.comment}</p>
          <h3>
            {comment.name}
            <span> /{comment.location}</span>
          </h3>
        </div>
      </div>
    </div>
  )
}

export default FeedBackChild
