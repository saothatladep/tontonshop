import React, { useEffect } from 'react'
import ScrollToTop from 'components/ScrollToTop'
import { makeStyles } from '@material-ui/core/styles'
import Meta from 'components/Meta'
import { Box, Container, Grid, Paper } from '@material-ui/core'
import { maxWidth, primaryText } from 'assets/css_variable/variable'

const usedStyles = makeStyles((theme) => ({
  root: { marginTop: 2 },
  container: {
    width: maxWidth,
    margin: '0 auto',
    padding: '48px 0 48px 0',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    '& img': {
      margin: '16px auto',
    },
    '& h1': {
      fontWeight: 700,
      fontSize: '2.5rem',
      color: '#333',
      margin: 10,
    },
    '& p': {
      fontWeight: 500,
      fontSize: '1.6rem',
      lineHeight: 1.7,
      margin: '8px 0',
      padding: '0 29px',
      color: '#666',
    },
    '& h2': {
      color: primaryText,
      fontWeight: 700,
      fontSize: '2.5rem',
      marginLeft: 28,
      lineHeight: 1.5,
    },
  },
  noPadding: {
    padding: 0,
  },
  noDecoration: {
    textDecoration: 'none !important',
  },
}))

const SecurityPrivacy = () => {
  const classes = usedStyles()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div>
      <Meta title={`TonTon | Security and Privacy`} />
      <div>
        <Paper className={classes.root} elevation={0}>
          <div className={classes.container}>
            <h1>Security & privacy</h1>
            <img
              src='https://www.jodhpurifurniture.com/assets/images/border2.png'
              alt='line'
            />
            <p>
              furniture.com appreciates your trust placed in us and ensures the
              privacy protection of all it’s users. Kindly read our privacy
              policy in detail before completing your online shopping with us.
            </p>
            <p>
              This privacy policy explains how furniture.com collects personal
              and non personal information (mandatory/ voluntary) and
              uses/discloses and protects such information through the website.
            </p>
            <p>
              Personal information denotes the data that is used to uniquely
              identify or contact a single person. Personal information for the
              purpose of this policy shall include, but not limit to,
              information regarding user’s name, address, telephone no., date of
              birth, gender, email address etc. User needs to provide his/her
              personal information while using some services of furniture.com.
              For example while creating user ID/registering on the website,
              user provides information, while making an online purchase, user
              provides financial information.
            </p>
            <p>
              Note: Our privacy policy is subject to change
              regularly/periodically, without notice. To ensure the updates on
              changes, kindly review the privacy policy periodically. This
              privacy policy doesn’t apply to any of our business
              partners/franchise/associates or other third parties. Kindly
              review the privacy policy of other parties with whom you may
              interact.
            </p>
            <p>
              We collect only such personal information that we believe to be
              relevant and is required to understand customers, their interests
              and their buying behavior, their preferences to provide them a
              customized website experience/to notify them on updates, new
              activities, latest contents available on the website, special
              offers, schemes, other products/services offered by furniture.com,
              customer service or technical support issues etc.
            </p>
            <p>
              By using our website, you agree to the terms and condition of this
              policy. If you do not agree with the terms and conditions of this
              policy, please do not proceed further to use this website.
            </p>
            <p>
              We want you to feel comfortable using our website from your
              computer system/mobile sites and mobile applications. Kindly feel
              secure submitting your information to us and contact us in case of
              any question or concern regarding privacy on the site. Following
              are the FAQs regarding privacy policy that may occur in your mind.
              Kindly read the document carefully:
            </p>
            <Box>
              <Container className={classes.noPadding}>
                <Grid
                  container
                  direction='row'
                  justify='space-between'
                  alignItems='flex-start'
                  spacing={0}
                >
                  <Grid item md={12}>
                    <h2>
                      What customer information does tontonfurniture.com collect
                      while online purchase of your furniture?
                    </h2>
                    <p>
                      {' '}
                      We take customer’s contact details, e.g. your first and
                      last name, billing and shipping address, mobile phone no
                      or contact no., primary and alternate email address,
                      Postal code, tontonfurniture.com account password. While
                      using credit card payment mode we ask your banking details
                      e.g credit card number, cardholder’s name, card expiry
                      date and CVV. Our payment gateway partner (Cash Free) has
                      ensured the highest safety standards and security of your
                      information while transacting on tontonfurniture.com.{' '}
                    </p>
                    <p>
                      {' '}
                      We keep data of your previous transactions and orders
                      including product, price, date of purchase, payment and
                      transaction history etc.{' '}
                    </p>
                    <p>
                      {' '}
                      Information related to optional online surveys on our or
                      third party sites, posted by us. This information will
                      include demographic profile (gender, age, income etc.) of
                      responder and their preferred products and services,
                      opinions of features on our websites, other information as
                      per our registration process.{' '}
                    </p>
                    <p>
                      {' '}
                      Cookies (A cookie is a small amount of data that is sent
                      to a user's browser from a web server and is eventually
                      stored on a user's computer hard drive.), your session
                      logged information on our site, about the pages you
                      visit/access i.e. your navigation within the site, the
                      links you click on our site, number of times you access
                      the page, number of times you have shopped on our
                      website/mobile site/mobile applications, source of
                      traffic, IP address, browser type/language, operating
                      system, date and time of request etc. third party sign in
                      information shared on our website, such as facebook,
                      twitter, pinterest, sign in information, your information
                      stored in archive on our servers even after the deletion
                      or the termination of your account.{' '}
                    </p>
                    <p>
                      {' '}
                      Email communication by you to tontonfurniture.com
                      regarding product assistance, store inquiry, sales order
                      or post sales service related communication etc.{' '}
                    </p>
                  </Grid>
                  <Grid item md={12}>
                    <h2>
                      What customer information does tontonfurniture.com
                      consider not subject to the terms of this privacy policy?
                    </h2>
                    <p>
                      {' '}
                      Contents shared by the user on site through reviews,
                      online chat, blogs, messenger, forums, and discussion
                      rooms, testimonials etc. are not considered as personal
                      information and are not subject to the terms of this
                      privacy policy.{' '}
                    </p>
                  </Grid>
                  <Grid item md={12}>
                    <h2>
                      How does tontonfurniture.com use customer information?
                    </h2>
                    <p>
                      {' '}
                      We collect only information that is required to have a
                      smooth transaction of users while buying online furniture
                      through tontonfurniture.com. We do not share our customer
                      data/information with any other agency/third party.{' '}
                    </p>
                    <p>
                      {' '}
                      We can share the customer information with our
                      subsidiaries, business partners and affiliates, who are
                      involved in delivery of services to you while in your
                      product purchase process. We can share some or all your
                      information as governed in case of acquisition or mergers
                      with other business entities.{' '}
                    </p>
                    <p>
                      {' '}
                      We can use some of the customer information for certain
                      customer surveys/marketing research/ activities to
                      understand the customer's buying behavior, his
                      statistical/demographic profile, his past purchase history
                      to grow our business relationship with him.{' '}
                    </p>
                    <p>
                      {' '}
                      We can use customer’s personal information to provide him
                      information related to promotions/ schemes/ offers/
                      delivery/shipping/product installation/service status/
                      help us to provide personalized features/tailor our
                      sites/application to customer’s interest/to get in touch
                      with customers when necessary. We provide options to our
                      customers to opt out of these services.{' '}
                    </p>
                    <p>
                      {' '}
                      Cookies can be used to provide better/modified buying
                      experience to our customer e.g identifying recent viewed
                      items, items in wish list and cart features.{' '}
                    </p>
                    <p>
                      {' '}
                      We use session log and traffic flow information to
                      understand how customers are interacting with our site and
                      to improve on required field/s. Through this we understand
                      and analyze customer behavior, visit preference, buying
                      patterns etc.{' '}
                    </p>
                    <p>
                      {' '}
                      We use the customer's computer system’s IP address,
                      traffic sources, user navigation across the site, browser
                      and order information to measure overall site performance
                      with regards to number of users visited, time spent by
                      them on site, their engagement, their preferred product
                      etc.{' '}
                    </p>
                    <p>
                      {' '}
                      We can use user/customer information in case required in
                      for legal processes/dispute, comply with any statutory or
                      regulatory requirement, troubleshooting,
                      detecting/protecting any error/ fraud / other criminal/
                      illegal activity, collect fees owed, enforce our terms and
                      conditions, prevent abuse of our services, prevent
                      violation of the right of third parties/business
                      partners/other users/ public in general etc.{' '}
                    </p>
                    <p>
                      {' '}
                      We provide all users to opt out of receiving communication
                      from tontonfurniture.com or on behalf of our business
                      partners after creating an account with us. To remove your
                      contact information from tontonfurniture.com, please write
                      to us at info@tontonfurniture.com{' '}
                    </p>
                    <p>
                      {' '}
                      In case of any inquiry/clarification with regards to your
                      account, please write to us at info@tontonfurniture.com{' '}
                    </p>
                  </Grid>
                  <Grid item md={12}>
                    <h2>
                      What choices are available to you regarding collection,
                      use and distribution of your information?
                    </h2>
                    <p>
                      {' '}
                      You may change your interests at any time and may opt-in
                      or opt-out of any marketing / promotional / newsletters
                      mailings. TonTon Furniture reserves the right to send you
                      certain service related communication, considered to be a
                      part of your TonTon Furniture account without offering you
                      the facility to opt-out. You may update your information
                      and change your account settings at any time.{' '}
                    </p>
                    <p>
                      {' '}
                      Upon request, we will remove/block your personally
                      identifiable information from our database, thereby
                      cancelling your registration. However, your information
                      may remain stored in archive on our servers even after the
                      deletion or the termination of your account.{' '}
                    </p>
                    <p>
                      {' '}
                      If we plan to use your personally identifiable information
                      for any commercial purposes, we will notify you at the
                      time we collect that information and allow you to opt-out
                      of having your information used for those purposes.{' '}
                    </p>
                  </Grid>
                  <Grid item md={12}>
                    <h2>Who collects the information?</h2>
                    <p>
                      {' '}
                      We collect anonymous traffic information when you visit
                      our website/application. We collect personal identifiable
                      information about you as a part of a voluntary
                      registration process/contest/ any combination thereof. Our
                      advertisers may collect anonymous traffic information from
                      their owned assigned cookies to your browser. Our
                      website/application contains links to other websites
                      /applications. We are not responsible for any privacy
                      practices of such websites/applications which we do not
                      own/manage/control.{' '}
                    </p>
                  </Grid>
                  <Grid item md={12}>
                    <h2>
                      What security does tontonfurniture.com take to protect
                      customer’s information from loss, misuse or alteration?
                    </h2>
                    <p>
                      To protect against loss/misuse/alteration of information
                      under TonTon Furniture’s control, we have appropriate
                      physical/electronic/managerial processes e.g. our servers
                      are accessible to only authorized personnel and that
                      customer’s information is shared with respective personnel
                      on need to know basis to complete transaction and to
                      provide the services requested by the customer.
                    </p>
                    <p>
                      {' '}
                      Although we Endeavour to protect customer’s personal
                      identifiable information, transmission made by means of
                      internet/telecom/other networks cannot be made absolutely
                      secure. By using tontonfurniture.com customer/user agrees
                      that TonTon Furniture has no liability for disclosure of
                      your information due to error in transmission/unauthorized
                      acts of third parties.{' '}
                    </p>
                    <p>
                      {' '}
                      By submitting data to us or our agents or using the site,
                      you consent to our use of your data in the manner set out
                      in this privacy policy. We have copyright over this
                      privacy policy. Use by third parties, even by way of
                      extract, for commercial purpose is not allowed.
                      Infringement may be subject to legal action.{' '}
                    </p>
                  </Grid>
                  <Grid item md={12}>
                    <h2>Are children allowed to use tontonfurniture.com? </h2>
                    <p>
                      {' '}
                      Use of tontonfurniture.com is available only to persons
                      who can form a legally binding contract under the Indian
                      Contract Act, 1872. If you are a minor i.e. under the age
                      of 18 years, you may use tontonfurniture.com only with the
                      involvement of a parent or guardian.
                    </p>
                  </Grid>
                </Grid>
              </Container>
            </Box>
          </div>
        </Paper>
      </div>
      <ScrollToTop />
    </div>
  )
}

export default SecurityPrivacy
