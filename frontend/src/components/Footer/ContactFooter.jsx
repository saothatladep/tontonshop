import { Link, makeStyles, fade } from '@material-ui/core'
import FacebookIcon from '@material-ui/icons/Facebook'
import MailIcon from '@material-ui/icons/Mail'
import PhoneIcon from '@material-ui/icons/Phone'
import TwitterIcon from '@material-ui/icons/Twitter'
import YouTubeIcon from '@material-ui/icons/YouTube'
import {
  mainText,
  minorText,
  primaryText,
  whiteText,
} from 'assets/css_variable/variable'
import React from 'react'
import { Button, InputBase } from '@material-ui/core'

const usedStyles = makeStyles((theme) => ({
  root: {},
  container: {
    marginTop: -10,
  },
  mainTitle: {
    fontSize: '1.8rem',
    fontWeight: 600,
    color: mainText,
    padding: '10px 0',
  },
  title: {
    color: minorText,
    fontSize: '1.5rem',
    lineHeight: 2.1,
    fontWeight: 450,
    marginBottom: 20,
  },
  containerMail: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    margin: '8px 0',
  },
  icon: {
    fontSize: '2.4rem',
    margin: '6px 8px 8px -4px',
  },
  phone: {
    display: 'flex',
    alignItems: 'center',
    padding: '8px  0',
  },
  telephoneNumber: {
    color: minorText,
    fontSize: '1.4rem',
    fontWeight: 500,
  },
  mail: {
    display: 'flex',
    alignItems: 'center',
    padding: '8px  0',
  },
  mailAddress: {
    color: minorText,
    fontSize: '1.4rem',
    fontWeight: 500,
  },
  social: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginLeft: -5,
    padding: '8px  0',
  },
  linkSocial: {
    textDecoration: 'none !important',
    paddingRight: '10px',
  },
  iconMail: {
    fontSize: '2.2rem',
    margin: '6px 8px 8px -4px',
  },
  iconFB: {
    fontSize: '2.5rem',
  },
  iconYT: {
    fontSize: '2.8rem',
    color: 'red',
  },
  iconTW: {
    fontSize: '2.8rem',
    color: '338ccc',
  },
  inputInput: {
    padding: theme.spacing(1.4, 1, 1, 0),
    paddingLeft: theme.spacing(2),
    transition: theme.transitions.create('width'),
    width: '250px',
    height: '50px',
    fontSize: '1.6rem',
    border: '1px solid #e1e1e1',
    backgroundColor: fade(whiteText, 1),
    '&:hover': {
      boxShadow: '0 1px 6px rgb(32 33 36 / 28%)',
      borderColor: 'rgba(223,225,229,0)',
    },
    // borderRadius: 50,
  },
  ButtonSub: {
    height: 50,
    backgroundColor: primaryText,
    border: '1px solid',
    borderColor: primaryText,
    '& span': {
      fontSize: '1.6rem',
      color: whiteText,
      fontWeight: '300',
    },
    '&:hover': {
      backgroundColor: 'transparent',
      '& span': {
        color: primaryText,
      },
    },
  },
}))

const ContactFooter = () => {
  const classes = usedStyles()

  return (
    <div>
      <div className={classes.container}>
        <p className={classes.mainTitle}>Subscribe Our Newsletter</p>
        <p className={classes.title}>
          Enter your email address to stay tuned with latest offers and products
        </p>
        <div className={classes.containerMail}>
          <InputBase
            className={classes.inputInput}
            placeholder='Enter your email address'
          />
          <Button className={classes.ButtonSub}>SEND</Button>
        </div>
        <div className={classes.phone}>
          <PhoneIcon className={classes.icon} />
          <span className={classes.telephoneNumber}>+84 903060651</span>
        </div>
        <div className={classes.mail}>
          <MailIcon className={classes.iconMail} />
          <span className={classes.mailAddress}>phamvantoan1903@gmail.com</span>
        </div>
        <div className={classes.social}>
          <Link
            href='https://www.facebook.com/TonTon1903'
            className={classes.linkSocial}
          >
            <FacebookIcon className={classes.iconFB} />
          </Link>
          <Link
            href='https://www.youtube.com/channel/UCpnelMPxDsGYLdYUTFRyd_w'
            className={classes.linkSocial}
          >
            <YouTubeIcon className={classes.iconYT} />
          </Link>
          <Link
            href='https://twitter.com/ToanPha16042716'
            className={classes.linkSocial}
          >
            <TwitterIcon className={classes.iconTW} />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ContactFooter
