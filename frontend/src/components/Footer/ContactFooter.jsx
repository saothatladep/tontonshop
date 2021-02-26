import { Link, makeStyles } from '@material-ui/core'
import FacebookIcon from '@material-ui/icons/Facebook'
import LocationOnIcon from '@material-ui/icons/LocationOn'
import MailIcon from '@material-ui/icons/Mail'
import PhoneIcon from '@material-ui/icons/Phone'
import TwitterIcon from '@material-ui/icons/Twitter'
import YouTubeIcon from '@material-ui/icons/YouTube'
import { mainText, minorText, primaryText } from 'assets/css_variable/variable'
import React from 'react'
const usedStyles = makeStyles((theme) => ({
  root: {},
  container: {},
  mainTitle: {
    fontSize: '1.6rem',
    fontWeight: 600,
    color: mainText,
    padding: '10px 0',
  },
  title: {
    color: minorText,
    fontSize: '1.5rem',
    letterSpacing: 0.3,
    fontWeight: 500,
    padding: '8px 0',
  },
  containerAddress: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  address: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: '10px',
  },
  icon: {
    fontSize: '2.4rem',
    margin: '6px 8px 8px -4px',
  },
  linkAddress: {
    textDecoration: 'none !important',
    color: minorText,
    fontSize: '1.4rem',
    fontWeight: 500,
    '&:hover': {
      color: primaryText,
    },
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
}))

const ContactFooter = () => {
  const classes = usedStyles()

  return (
    <div>
      <div>
        <p className={classes.mainTitle}>CONTACT INFO</p>
        <p className={classes.title}>
          We at Jodhpuri would love to hear your opinion about our venture.
        </p>
        <div className={classes.containerAddress}>
          <div className={classes.address}>
            <LocationOnIcon className={classes.icon} />
            <Link
              className={classes.linkAddress}
              href='https://www.google.com/maps/place/Galaxy+Cinema+Nguy%E1%BB%85n+V%C4%83n+Qu%C3%A1/@10.8448266,106.6356593,16.94z/data=!4m13!1m7!3m6!1s0x31157a4d736a1e5f:0xb03bb0c9e2fe62be!2zVmnhu4d0IE5hbQ!3b1!8m2!3d14.058324!4d108.277199!3m4!1s0x317529809630bdb9:0x21c165d4ca1c1e42!8m2!3d10.8469098!4d106.6342516?hl=vi-VN'
            >
              119B Đường Nguyễn Văn Quá, Đông Hưng Thuận, Quận 12, Thành phố Hồ
              Chí Minh, Việt Nam
            </Link>
          </div>
          <div className={classes.address}>
            <LocationOnIcon className={classes.icon} />
            <Link
              className={classes.linkAddress}
              href='https://www.google.com/maps/place/Nh%C3%A0+h%C3%A0ng+C%E1%BA%A7n+Phong+2/@10.8448266,106.6356593,16z/data=!4m13!1m7!3m6!1s0x31157a4d736a1e5f:0xb03bb0c9e2fe62be!2zVmnhu4d0IE5hbQ!3b1!8m2!3d14.058324!4d108.277199!3m4!1s0x31752987022c5e3f:0xcb7c4e91d5f80813!8m2!3d10.8446126!4d106.6328153?hl=vi-VN'
            >
              C100 Đường Nguyễn Văn Quá, Đông Hưng Thuận, Quận 12, Thành phố Hồ
              Chí Minh, Việt Nam
            </Link>
          </div>
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
          <Link href='#' className={classes.linkSocial}>
            <FacebookIcon className={classes.iconFB} />
          </Link>
          <Link href='#' className={classes.linkSocial}>
            <YouTubeIcon className={classes.iconYT} />
          </Link>
          <Link href='#' className={classes.linkSocial}>
            <TwitterIcon className={classes.iconTW} />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ContactFooter
