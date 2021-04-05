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
    },
    '& ol': {
      paddingLeft: 64,
    },
    '& ul': {
      paddingLeft: 64,
    },
    '& li': {
      fontWeight: 500,
      fontSize: '1.6rem',
      lineHeight: 1.7,
      padding: '4px 2px',
      color: '#666',
      '& ol': {
        marginLeft: -32,
      },
    },
  },
  noPadding: {
    padding: 0,
  },
  noDecoration: {
    textDecoration: 'none !important',
  },
}))

const Index = () => {
  const classes = usedStyles()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div>
      <Meta title={`TonTon | Term Of Use`} />
      <div>
        <Paper className={classes.root} elevation={0}>
          <div className={classes.container}>
            <h1>TERMS OF USE</h1>
            <img
              src='https://www.jodhpurifurniture.com/assets/images/border2.png'
              alt='line'
            />
            <p>
              {' '}
              Welcome to www.tontonfurniture.com. Being a user of the TonTon
              website, you agree to accept and be bound by these terms by
              accessing the website and/or placing an order to purchase
              furniture and furnishing products. Please read these terms and
              conditions carefully before placing an order on the website. If
              you do not agree with them, kindly do not continue to use the
              website. Regardless of whether you choose to register with us or
              place an order with us, you confirm your acceptance of these terms
              and conditions upon use of the website.{' '}
            </p>
            <p>
              {' '}
              For the purpose of these terms of use, wherever the context so
              require ‘you’ shall mean any natural or legal person who uses the
              website or has agreed to become a member of the website by
              providing registration data while registering on the website as
              registered user using the computer systems of
              www.tontonfurniture.com.{' '}
            </p>
            <p>
              {' '}
              PLEASE READ THE TERMS CAREFULLY BEFORE USING, VIEWING, ACCESSING
              OR REGISTERING ON THE WEBSITE OR ACCESSING ANY MATERIAL,
              INFORMATION OR SERVICES THROUGH THE WEBSITE. YOUR USE OF THE
              WEBSITE OR THE SERVICES PROVIDED BY THE WEBSITE SHALL SIGNIFY YOUR
              UNCONDITIONAL ACCEPTANCE OF THE TERMS AND YOUR AGREEMENT TO BE
              LEGALLY BOUND BY THE SAME.{' '}
            </p>
            <p>
              {' '}
              Kindly Note: In these Terms, references to 'you', 'your’, ‘user'
              shall mean the end user accessing the website, and 'we', 'us',
              'our', 'Company' shall mean Jodhpuri Furniture.{' '}
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
                    <h2>General Terms and conditions:</h2>
                    <p>
                      {' '}
                      The website is an Internet based portal owned and operated
                      by tontonfurniture.com. We offer you use of the website
                      subject to acceptance of all the terms, conditions and
                      notices contained in the Terms, along with all/any
                      amendments made by tontonfurniture.com at its sole
                      discretion and posted on the website, including by way of
                      imposing any charge for access to or use of a service
                      (defined below). By using this website/any
                      facility/service provided through this website in any way;
                      or merely browsing the website, you agree that you have
                      read, understood and agreed to be bound by these terms and
                      the privacy policy available at the homepage of
                      https://www.tontonfurniture.com. The Company shall not be
                      required to notify you of any changes made to the terms.
                      The revised terms shall be made available on the website,
                      in case of any changes made thereto. Your use of the
                      website is subject to the most current version of the
                      terms of use made available on the website at the time of
                      such use. You are requested to regularly visit the home
                      page of the website to view the most current terms. The
                      prevailing terms will only be applicable for any
                      transaction made in https://www.tontonfurniture.com. The
                      Company may require you to provide your consent to the
                      updated terms in a specified manner before any further use
                      of the website and the services. If no such separate
                      consent is sought, your continued use of the website will
                      constitute your acceptance of such changes.{' '}
                    </p>
                  </Grid>
                  <Grid item md={12}>
                    <h2>Registration Coupon Terms and Conditions:</h2>
                    <p>
                      {' '}
                      To offer special discounts to our esteemed customers/users
                      from time to time, we share coupon codes based discounts.
                      To prevent any potential misuses we have put in place a
                      few checks on the ways in which these coupon codes can be
                      used.{' '}
                    </p>
                    <p>
                      {' '}
                      To make the best use of the coupon code offers, please go
                      through the following terms and conditions applicable to
                      all coupon codes:
                    </p>
                    <ol>
                      <li>
                        {' '}
                        A coupon-based offer will be valid upon application of
                        the coupon codes at the time of the placing order.{' '}
                      </li>
                      <li>
                        {' '}
                        Coupons will be valid for 3 days or till the stock lasts
                        or till the mentioned time on the applicable products,
                        whichever happens, earlier.{' '}
                      </li>
                      <li>
                        {' '}
                        A Coupon cannot be clubbed with any other coupon or with
                        any other offer including offers running on the site
                        without using coupons.{' '}
                      </li>
                      <li>
                        {' '}
                        A Coupon will provide the stated discount or the
                        discount already stated on the product whichever is
                        higher unless otherwise mentioned.{' '}
                      </li>
                      <li>
                        {' '}
                        Coupons shared individually with a user will be
                        applicable on purchase made by that particular user
                        only.{' '}
                      </li>
                      <li>
                        {' '}
                        The website reserves the right to change the terms and
                        conditions of any coupon any time without prior
                        intimation/notification.{' '}
                      </li>
                      <li>
                        {' '}
                        The Coupons can ONLY be redeemed on
                        https://www.jodhpurifurniture.com website{' '}
                      </li>
                      <li> Coupons cannot be redeemed for cash. </li>
                      <li>
                        {' '}
                        Jodhpuri Furniture reserves the right to cancel any
                        orders placed using Coupons. Some situations where your
                        order may be cancelled include, without limitation,
                        misuse of any Coupons, unauthorized usage or
                        inaccuracies of Coupon pricing and value thresholds. The
                        Coupon amount will not be refunded for such cases.{' '}
                      </li>
                      <li>
                        {' '}
                        In case of returns of items purchased through promo
                        coupons, only the net amount will be refunded and promo
                        coupon code will not be valid.{' '}
                      </li>
                      <li>
                        {' '}
                        For a single transaction, only one Coupon can be used,
                        partial redemption is not valid.{' '}
                      </li>
                      <li>
                        {' '}
                        All disputes are subject to the jurisdiction of
                        Bengaluru courts only.{' '}
                      </li>
                    </ol>
                  </Grid>
                  <Grid item md={12}>
                    <h2>User obligations</h2>
                    <p>
                      We will do our utmost best to ensure that accessibility of
                      the site will be uninterrupted and that transmissions will
                      be error-free. However, due to the nature of the internet,
                      this cannot be guaranteed. Also, your access to the site
                      may also be occasionally suspended or restricted to allow
                      for repairs, maintenance, or the introduction of new
                      facilities or services at any time without prior notice.We
                      will attempt to limit the frequency and duration of any
                      such suspension or restriction. Subject to compliance with
                      the terms of use, jodhpurifurniture.com grants you a
                      non-exclusive, limited privilege to access and use this
                      website. You agree to use the services, website and
                      materials provided therein only for purposes that are
                      permitted by: the terms; and any applicable law,
                      regulation or generally accepted practices or guide in the
                      relevant jurisdictions. You agree to adhere to all
                      limitations on dissemination, use and reproduction of any
                      materials (such as the product catalogues) that you will
                      access the website in accordance with the terms. You agree
                      not to access (or attempt to access) the website and
                      materials/services by any means other than through the
                      interface that is provided by jodhpurifurniture.com. You
                      will not use any deep-link, robot, spider or other
                      automatic device/ program/algorithm/methodology, or any
                      similar/equivalent manual process to
                      access/acquire/copy/monitor any portion of the website or
                      content, or in any way reproduce/circumvent the
                      navigational structure/presentation of the Website/
                      materials/any Content to obtain or attempt to obtain any
                      materials, documents or information through any means not
                      specifically made available through the Website. By
                      accessing or using the website/services, you may be
                      exposed to content from other users that you may consider
                      offensive, indecent or otherwise objectionable.
                      jodhpurifurniture.com disclaims all liabilities arising in
                      relation to such offensive content on the website.If
                      website allows you to post and upload any material on the
                      website, you hereby undertake to ensure that such material
                      is not offensive and is in accordance with applicable
                      laws.
                    </p>
                    <p>Further, you oblige not to:</p>
                    <ul>
                      <li>
                        Defame, abuse, harass, threaten or otherwise violate the
                        legal rights of others;
                      </li>
                      <li>
                        Impersonate any person or entity, or falsely state or
                        otherwise misrepresent Your affiliation with a person or
                        entity;
                      </li>
                      <li>
                        {' '}
                        Publish, post, upload, distribute or disseminate any
                        inappropriate, profane, defamatory, infringing, obscene,
                        indecent or unlawful topic, name, material or
                        information through any bookmark, tag or keyword;{' '}
                      </li>
                      <li>
                        {' '}
                        Upload files that contain software or other material
                        protected by applicable intellectual property laws
                        unless You own or control the rights thereto or have
                        received all necessary consents;{' '}
                      </li>
                      <li>
                        {' '}
                        Upload/distribute files that contain viruses/corrupted
                        files or any other similar software or programs that may
                        damage the operation of the website or another's
                        computer;{' '}
                      </li>
                      <li>
                        {' '}
                        Engage in any activity that interferes with or disrupts
                        access to the website or the services (or the servers
                        and networks which are connected to the website);{' '}
                      </li>
                      <li>
                        {' '}
                        Attempt to gain unauthorized access to any portion or
                        feature of the website, any other systems or networks
                        connected to the website, to any jodhpurifurniture.com
                        server, or to any of the services offered on or through
                        the website, by any illegitimate means (including such
                        as hacking and password mining);{' '}
                      </li>
                      <li>
                        {' '}
                        Probe, scan or test the vulnerability of the website/any
                        network connected to neither website, nor breach the
                        security or authentication measures on the website or
                        any network connected to the website. You may not
                        reverse look-up, trace or seek to trace any information
                        on any other user of or visitor to the website/any other
                        customer of jodhpurifurniture.com, including any
                        jodhpurifurniture.com account not owned by you, to its
                        source, or exploit the website/service/information made
                        available/offered by/ through website, in any way
                        whether or not the purpose is to reveal any information,
                        including but not limited to personal identification
                        information;{' '}
                      </li>
                      <li>
                        {' '}
                        Disrupt or interfere with the security of, or otherwise
                        cause harm to the website, systems resources, accounts,
                        passwords, servers or networks connected to or
                        accessible through the websites or any affiliated or
                        linked sites;{' '}
                      </li>
                      <li> Collect or store data about other users. </li>
                      <li>
                        {' '}
                        Use any device or software to interfere or attempt to
                        interfere with the proper working of the website or any
                        transaction being conducted on the website or with any
                        other person's use of the website;{' '}
                      </li>
                      <li>
                        {' '}
                        Use the website/any material/content for any purpose
                        that is unlawful or prohibited by the terms, or to
                        solicit the performance of any illegal activity or other
                        activity which infringes the rights of
                        jodhpurifurniture.com or other third parties;{' '}
                      </li>
                      <li>
                        {' '}
                        Conduct or forward surveys, contests, pyramid schemes or
                        chain letters;{' '}
                      </li>
                      <li>
                        {' '}
                        Download any file posted by another user of a service
                        that you know, or reasonably should know, cannot be
                        legally distributed in such manner;{' '}
                      </li>
                      <li>
                        {' '}
                        Falsify or delete any author attributions, legal or
                        other proper notices or proprietary designations or
                        labels of the origin or source of software or other
                        material contained in a file that is uploaded;{' '}
                      </li>
                      <li>
                        {' '}
                        Violate any code of conduct or other guide, which may be
                        applicable to the service;{' '}
                      </li>
                      <li>
                        {' '}
                        Violate any applicable laws or regulations for the time
                        being in force within/ outside India;{' '}
                      </li>
                      <li>
                        {' '}
                        Violate the <i>terms</i> including but not limited to
                        any applicable additional terms; and{' '}
                      </li>
                      <li>
                        {' '}
                        Reverse engineer, modify copy, distribute, transmit,
                        display, perform, reproduce, publish, license, create
                        derivative works from, transfer, or sell any information
                        or software obtained from the Website.{' '}
                      </li>
                    </ul>
                    <p>
                      {' '}
                      You agree that you are solely responsible to
                      tontonfurniture.com and to any third party for any breach
                      of your obligations under the terms and for the
                      consequences (including any loss or damage which
                      tontonfurniture.com or its affiliates or its vendors may
                      suffer) for any such breach.{' '}
                    </p>
                  </Grid>
                  <Grid item md={12}>
                    <h2>Communications</h2>
                    <p>
                      {' '}
                      When you use the website or send emails or other data,
                      information or communication to website
                      https://www.tontonfurniture.com you agree and understand
                      that you are communicating with TonTon Furniture through
                      electronic records and you consent to receive
                      communications via electronic records from
                      https://www.tontonfurniture.com periodically and as and
                      when required. tontonfurniture.com may communicate with
                      you by email or by such other mode of communication,
                      electronic or otherwise. You will be required to provide a
                      valid phone number while placing an order with us. We may
                      communicate with you by e-mail, SMS, phone call or by any
                      other mode of communication. For contractual purposes, you
                      consent to receive communications including SMS, e-mail or
                      phone calls from us with respect to your order and
                      delivery status.{' '}
                    </p>
                    <p>
                      {' '}
                      tontonfurniture.com reserves the right, but has no
                      obligation, to monitor the materials posted on
                      https://www.tontonfurniture.com website. TonTon Furniture
                      shall have the right to remove or edit any content that in
                      its sole discretion violates, or is alleged to violate,
                      any applicable law or either the spirit or letter of these
                      terms of use. Notwithstanding this right of
                      tontonfurniture.com you remain solely responsible for the
                      content of the materials you post on the
                      tontonfurniture.com website and in your private messages.
                      Please be advised that such content posted does not
                      necessarily reflect the views of tontonfurniture.com. In
                      no event shall tontonfurniture.com assume or have any
                      responsibility or liability for any content posted or for
                      any claims, damages or losses resulting from use of
                      content and/or appearance of content on
                      tontonfurniture.com. You hereby represent and warrant that
                      you have all necessary rights in and to all content you
                      provide and all information it contains and that such
                      content shall not infringe any proprietary or other rights
                      of third parties or contain any libelous, tortuous, or
                      otherwise unlawful information.{' '}
                    </p>
                    <p>
                      {' '}
                      It is possible that other users (including unauthorized
                      users or “hackers”) may post or transmit offensive or
                      obscene materials on https://www.tontonfurniture.com and
                      that you may be involuntarily exposed to such offensive
                      and obscene materials. It is also possible for others to
                      obtain personal information about you due to your use of
                      tontonfurniture.com, and that the recipient may use such
                      information to harass or injure you. TonTon Furniture does
                      not approve of such unauthorized uses but by using the
                      tontonfurniture.com website you acknowledge and agree that
                      tontonfurniture.com is not responsible for the use of any
                      personal information that you publicly disclose or share
                      with others on tontonfurniture.com. Please carefully
                      select the type of information that you publicly disclose
                      or share with others on https://www.tontonfurniture.com{' '}
                    </p>
                  </Grid>
                  <Grid item md={12}>
                    <h2>Product and Pricing Information</h2>
                    <p>
                      The Pricing Information related to the Product will be as
                      displayed on the website and are subject to change without
                      notice. While we strive to provide you accurate
                      information related to Products and Services but typing
                      and other errors may occur. If TonTon cancels the order
                      after the payment has been processed due to any reason,
                      the amount will be remitted to your account.
                    </p>
                  </Grid>
                  <Grid item md={12}>
                    <h2>Copyright and intellectual property</h2>
                    <p>
                      The content of TonTon is protected by copyright,
                      trademarks and other intellectual property rights. You may
                      not otherwise reproduce, modify, distribute or use any of
                      the materials or content on tontonfurniture.com without
                      the written permission of this site for commercial
                      purposes.
                    </p>
                    <p>
                      TonTon Furniture shall have all the rights to take
                      necessary action and claim damages that may occur due to
                      your involvement/participation in any way on your own or
                      through group/s of people, intentionally or
                      unintentionally in denial of services/distributed denial
                      of services.
                    </p>
                  </Grid>
                  <Grid item md={12}>
                    <h2>Pricing and Payment Information</h2>
                    <p>
                      Product Prices described on our Website are incorporated
                      into these Terms by reference. All prices are in Indian
                      rupees and are inclusive of local and/or central taxes and
                      levies and taxes. Prices, products and Services may change
                      at tontonfurniture.com’s sole discretion without notice.
                    </p>
                    <p>
                      TonTon Furniture shall have all the rights to take
                      necessary action and claim damages that may occur due to
                      your involvement/participation in any way on your own or
                      through group/s of people, intentionally or
                      unintentionally in denial of services/distributed denial
                      of services.
                    </p>
                    <p>
                      {' '}
                      You agree to provide correct and accurate credit/debit
                      card details to the approved payment gateway for availing
                      services. You’ll not use a credit / debit card which is
                      not lawfully owned by you, i.e. in any transaction, you
                      must use your own credit / debit card. In case of
                      fraudulent card transactions, you are solely responsible
                      to indemnify TonTon Furniture for all purpose, cost and
                      consequences arisen thereto in future.{' '}
                    </p>
                    <p>
                      {' '}
                      The information provided by you, will not be
                      utilized/shared with any third party unless required in
                      relation to fraud verifications or by law, regulation or
                      court order. You will be solely responsible for the
                      security and confidentiality of your credit / debit card
                      details. tontonfurniture.com clearly disclaims all
                      liabilities that may arise as a consequence of any
                      unauthorized use of your credit/debit card.{' '}
                    </p>
                    <p>
                      {' '}
                      www.tontonfurniture.com shall be under no liability
                      whatsoever in respect of any loss/damage arising directly
                      or indirectly out of the fake authorization for any
                      transaction for any reason whatsoever.{' '}
                    </p>
                    <p>
                      {' '}
                      While availing any of the payment method/s offered at
                      tontonfurniture.com, tontonfurniture.com will not be
                      responsible or assume any liability, whatsoever in respect
                      of any loss or damage arising directly or indirectly to
                      you due to:{' '}
                    </p>
                    <ol>
                      <li>
                        {' '}
                        Lack of authorization for any transaction/s, and/or{' '}
                      </li>
                      <li>
                        {' '}
                        Exceeding the preset limit mutually agreed by you and
                        between your "bank/s", and/or{' '}
                      </li>
                      <li>
                        {' '}
                        Any payment issues arising out of the transaction,
                        and/or{' '}
                      </li>
                      <li> Decline of transaction for any other reason/s. </li>
                    </ol>
                    <p>
                      {' '}
                      All payments made against the purchases/services on
                      tontonfurniture.com by you shall be compulsorily in Indian
                      rupees. https://www.tontonfurniture.com does not accept
                      any other form of currency with respect to the purchases
                      made on tontonfurniture.com.{' '}
                    </p>
                  </Grid>
                  <Grid item md={12}>
                    <h2>Pricing/typographical error</h2>
                    <p>
                      If tontonfurniture.com comes across any difference in
                      pricing resulting from typographic errors with regards to
                      pricing or product information, TonTon Furniture shall
                      have the right to rectify the same or cancel the order(s)
                      and refund your money, if any, collected from the customer
                      within 10-15 business days of such corrective action
                      taken. The mode of refund will remain the same through
                      which the payment was received by TonTon Furniture.
                    </p>
                  </Grid>
                  <Grid item md={12}>
                    <h2>In case of mispricing</h2>
                    <p>
                      Despite our best efforts, there might be a chance that a
                      small number of the items in our catalogue are mispriced.
                      Though we verify prices as part of our dispatch
                      procedures, still:
                    </p>
                    <ol>
                      <li>
                        {' '}
                        If an article's correct price is lower than our stated
                        price, we charge the lower amount and send you the item
                        and you can buy anything of the remaining amount/take a
                        refund of the remaining amount.{' '}
                      </li>
                      <li>
                        {' '}
                        If a product's correct price is higher than our stated
                        price, we will cancel your order and notify you of the
                        cancellation. In such a case you need to re-order the
                        product.{' '}
                      </li>
                    </ol>
                  </Grid>
                  <Grid item md={12}>
                    <h2>Risk of loss</h2>
                    <p>
                      All items purchased from tontonfurniture.com are made
                      pursuant to a shipment contract. This means that the risk
                      of loss and title for such items pass to you upon our
                      delivery to the carrier.
                    </p>
                  </Grid>
                  <Grid item md={12}>
                    <h2>Exactness Not Guaranteed:</h2>
                    <p>
                      {' '}
                      jodhpurifurniture.com hereby disclaims any guarantees of
                      exactness as to the finish and appearance of the final
                      Product as ordered by the user. The quality of any
                      products/services/ information/other material
                      purchased/obtained by you through this website may or may
                      not meet your expectations.{' '}
                    </p>
                    <p>
                      {' '}
                      Alterations to certain aspects of your order such as the
                      merchandise brand, size, colour etc. may be required due
                      to limitations caused by availability of product
                      difference in size charts of respective brands etc. In
                      this instance you agree that a representative from
                      jodhpurifurniture.com will call you/send an approval
                      request through the email address that you submitted while
                      placing your order.{' '}
                    </p>
                    <p>
                      {' '}
                      If you do not agree with the requested change, you retain
                      the right to reject the requested production change by
                      replying to it within 05 days of it being sent to you.
                      jodhpurifurniture.com may re-request that you accept a
                      production alteration one additional time if an
                      alternative method to send your merchandise is available.
                      If you reject this 2nd request your order will be
                      cancelled and you will be fully refunded. The mode of
                      refund will remain the same through which the payment was
                      received by jodhpurifurniture.com.{' '}
                    </p>
                  </Grid>
                  <Grid item md={12}>
                    <h2>Cancellation of order</h2>
                    <p>
                      tontonfurniture.com reserves the right to cancel any order
                      without any explanation for doing so, under situations
                      where in tontonfurniture.com not able to meet the
                      requirement of the order placed or order so
                      placed/cancelled does not comply with tontonfurniture.com
                      policy or for any other reason. However
                      tontonfurniture.com will ensure that any communication of
                      cancellation of an order, so cancelled, is intimated
                      within appropriate time to the concerned person and any
                      applicable refund will be made in reasonable time.
                    </p>
                  </Grid>
                  <Grid item md={12}>
                    <h2>Limitation of liability</h2>
                    <p>
                      In no event shall tontonfurniture.com be liable for any
                      special, incidental, indirect or consequential damages of
                      any kind in connection with this agreement, even if
                      tontonfurniture.com has been informed in advance of the
                      possibility of such damages.
                    </p>
                  </Grid>
                  <Grid item md={12}>
                    <h2>Delivery:</h2>
                    <p>
                      TonTon Furniture will make a maximum of three attempts to
                      deliver your order. In case the customer is not
                      reachable/does not accept delivery of products in these
                      attempts TonTon Furniture reserves the right to cancel the
                      order(s) at its sole discretion.
                    </p>
                    <p>
                      An estimated delivery time is displayed on the order
                      summary page. On placing your order, you will receive an
                      email containing a summary of the order and also the
                      estimated delivery time to your location.
                    </p>
                    <p>Sometimes, delivery may take longer due to</p>
                    <ol>
                      <li>
                        {' '}
                        Bad weather, fire, earthquake, flood, natural
                        calamities/disasters{' '}
                      </li>
                      <li> flight delays </li>
                      <li> political disruptions </li>
                      <li>
                        {' '}
                        other unforeseen circumstances by our business partners{' '}
                      </li>
                    </ol>
                    <p>
                      In such cases, we will proactively inform the tentative
                      delivery to you. Please check your emails and SMS
                      regularly for such updates.
                    </p>
                    <p>
                      Also, we will not be able to compensate for any mental
                      agony and/or consequential losses caused due to delay in
                      delivery. The customer can cancel the order at any moment
                      before shipment of goods from our warehouse. If it is a
                      prepaid order, the customer will be refunded back in the
                      account as soon as the order is successfully cancelled.
                    </p>
                    <p>
                      Free installation applicable on delivery location only.
                    </p>
                  </Grid>
                  <Grid item md={12}>
                    <h2>
                      TonTon Furniture ONLINE EXCHANGE, RETURN & CANCELLATION
                      POLICY
                    </h2>
                    <p>
                      At TonTon Furniture, we offer high quality products at
                      affordable prices. In rare cases, a customer may want to
                      exchange or cancel the order; the request for the same
                      shall be guided by TonTon Furniture EXCHANGE, RETURN &
                      CANCELLATION POLICY as detailed below.
                    </p>
                    <p>Exchange Request:</p>
                    <ol>
                      <li>
                        {' '}
                        Exchange requests can be accepted within 14 days of
                        delivery, provided the goods are unused, uninstalled,
                        undamaged and saleable condition with original packing,
                        price tags and labels.{' '}
                      </li>
                      <li>
                        {' '}
                        The request will be at sole discretion of Jodhpuri
                        Furniture and subject to availability of new items
                        selected.{' '}
                      </li>
                      <li>
                        {' '}
                        The new item selected has to be of same or higher value
                        than the original purchase.{' '}
                      </li>
                      <li>
                        {' '}
                        An inspection may be conducted by Jodhpuri Furniture to
                        ascertain the condition of item prior to approval of
                        exchange request.{' '}
                      </li>
                      <li>
                        {' '}
                        Freight charges for both sides shall be borne by the
                        customer.{' '}
                      </li>
                    </ol>
                  </Grid>
                  <Grid item md={12}>
                    <h2>Return Request:</h2>
                    <ol>
                      <li>
                        {' '}
                        Return request can be accepted only in cases where there
                        is a material defect / damage found in the product.{' '}
                      </li>
                      <li>
                        {' '}
                        For any external damages to the packed product, please
                        document the same on the delivery acknowledgment at the
                        time of delivery.{' '}
                      </li>
                      <li>
                        {' '}
                        For upholstery / fragile items (Sofa, Glass, and Mirrors
                        etc.) please take Open Delivery and verify the same is
                        damage free before accepting the delivery and return
                        immediately if found damaged.{' '}
                      </li>
                      <li>
                        {' '}
                        For other furniture that requires installation, the
                        packing must be opened only by authorized service
                        personnel at the time of installation. If any damage /
                        defect found the same needs to be documented on the
                        Installation Job Card for processing return and fresh
                        replacement within 15 days{' '}
                      </li>
                      <li>
                        {' '}
                        Credit Note / Refund can be provided by TonTon Furniture
                        if replacement is not in stock. The same will be
                        processed within 7 working days after pick up of the
                        original item. Payment made through Credit / Debit cards
                        will be reversed to the same card, Net banking payment
                        will be reversed to the same bank account and Vouchers
                        used for payment will result in the issue of fresh
                        vouchers.{' '}
                      </li>
                    </ol>
                  </Grid>
                  <Grid item md={12}>
                    <h2>Cancellation Request:</h2>
                    <ol>
                      <li>
                        In case of cancellation within 24 hours of placing the
                        order, a full refund will be initiated.
                      </li>
                      <li>
                        {' '}
                        Post the 24-hour window, you will be charged 10% of the
                        order value as a restocking fee.{' '}
                      </li>
                      <li>
                        {' '}
                        In case cancellation occurs within 24hrs for the change
                        in mind customers have to bear the EMI discount cost (
                        in case of zero cost EMI).{' '}
                      </li>
                    </ol>
                  </Grid>
                  <Grid item md={12}>
                    <h2>Product Return Process:</h2>
                    <p> Limitation on refund amount for courier charges </p>
                    <p>
                      {' '}
                      Please do collect the Docket slip/Written confirmation
                      from the Courier company that the product return has been
                      done for a particular shipment/order.{' '}
                    </p>
                    <p>
                      {' '}
                      Docket slip to be produced in case of discrepancy between
                      customer and logistics company{' '}
                    </p>
                    <p>
                      {' '}
                      In case of any discrepancy in the status of reverse pick
                      up of a product, (where the customer claims the product
                      has been returned, while our system suggests otherwise)
                      refund will be initiated only if the customer successfully
                      furnishes the docket slip given at the time of the pick
                      up.{' '}
                    </p>
                  </Grid>
                  <Grid item md={12}>
                    <h2>Termination:</h2>
                    <ol>
                      <li>
                        {' '}
                        TonTon Furniture/ www.tontonfurniture.com may suspend or
                        terminate your use of the website or any service if it
                        believes, in its sole and absolute discretion, that you
                        have breached any of the Terms.{' '}
                      </li>
                      <li>
                        {' '}
                        If you or TonTon Furniture/ www.tontonfurniture.com
                        terminates your use of the website/any service,
                        www.tontonfurniture.com may delete any content or other
                        materials relating to your use of the service and
                        www.tontonfurniture.com will have no liability to you or
                        any third party for doing so.{' '}
                      </li>
                      <li>
                        {' '}
                        You shall be liable to pay for any service or product
                        that you have already ordered till the time of
                        termination by either party whatsoever. Further, you
                        shall be entitled to your royalty payments as per the
                        User License Agreement that has or is legally deemed
                        accrued to you.{' '}
                      </li>
                    </ol>
                  </Grid>
                  <Grid item md={12}>
                    <h2>Cancellation of Orders</h2>
                    <p>
                      tontonfurniture.com provides a protected shopping
                      experience by regularly monitoring the transactions. In
                      the event of detecting any suspicious activity,
                      tontonfurniture.com reserves the right to cancel all
                      past/pending/future orders without any liability.
                      tontonfurniture.com also reserves the right to
                      refuse/cancel orders in situations like inaccurate product
                      price on website/stock unavailability. We may also require
                      additional verification/information before accepting any
                      order. We will contact you if all/any portion of your
                      order is cancelled or if additional information is
                      required to accept your order. If your order is cancelled
                      after your card has been charged, the said amount will be
                      reversed to your Card Account. Any promotional voucher
                      used for the cancelled orders may not be refunded. The
                      descriptions of TonTon Furniture will be final and binding
                      on the user.
                    </p>
                    <p>
                      The order may be considered cancelled in following cases:
                    </p>
                    <ol>
                      <li> Invalid/Incomplete address cases </li>
                      <li>
                        {' '}
                        Customer fails to produce adequate documents during the
                        payment details verification{' '}
                      </li>
                      <li>Misuse of another customer's phone/email</li>
                      <li>Customer uses invalid email and phone no.</li>
                      <li>Overuse of a voucher code</li>
                      <li>
                        {' '}
                        Use of a special voucher not tagged to the email ID
                        used.{' '}
                      </li>
                      <li>Customer returns the wrong product</li>
                      <li>Customer refuses to pay for an order</li>
                      <li>
                        Customer is involved in the snatch and runs for any
                        order.
                      </li>
                      <li>Customer with a high product return rate</li>
                      <li>
                        Repeated request for monetary compensation for petty
                        issues
                      </li>
                    </ol>
                    <p>
                      Account for such customers may be blocked by
                      tontonfurniture.com
                    </p>
                  </Grid>
                  <Grid item md={12}>
                    <h2>Pilferage Claim Process</h2>
                    <p>
                      We may occasionally make changes to our terms and
                      conditions. If this concerns you, then you are advised to
                      check the current terms and conditions prior to every
                      purchase.
                    </p>
                  </Grid>
                  <Grid item md={12}>
                    <h2>Amendments</h2>
                    <ol>
                      <li>
                        {' '}
                        Customer must raise a complaint for partial item/partial
                        order to Customer Care pilferage within 48 hours of
                        delivery failing which the claim will not be entertained{' '}
                      </li>
                      <li>
                        {' '}
                        Customer must write to info@tontonfurniture.com
                        seeking/providing following information:{' '}
                        <ol>
                          <li>
                            Short description of the case The snapshots of the
                            packet and other box (If any) (Customer must cover
                            the sides which look tampered/damaged as per
                            customer)
                          </li>
                          <li>
                            {' '}
                            The refund for prepaid orders will be done after
                            investigation which usually requires 3-4 business
                            days. The process will include investigation with
                            the concerned departments{' '}
                          </li>
                        </ol>
                      </li>
                      <li>
                        {' '}
                        The customer may not be liable for a refund if he/she
                        falls in any of the situation stated below:{' '}
                        <ol>
                          <li>
                            {' '}
                            Customer fails to provide adequate information about
                            the case /snapshots of the packet and box(if any){' '}
                          </li>
                          <li>
                            {' '}
                            If an opened delivery was received, pilferage claims
                            must be made the same day of delivery.{' '}
                          </li>
                          <li>
                            {' '}
                            Customers must not dispose of the packaging. We need
                            to pick-up the packaging for investigation at our
                            end.{' '}
                          </li>
                        </ol>
                      </li>
                    </ol>
                  </Grid>
                  <Grid item md={12}>
                    <h2>Terms for Offers/Promotions/Campaigns/Contests</h2>
                    <ol>
                      <li>
                        {' '}
                        Prevailing discount will be applicable to merchandise
                        value including VAT and applicable taxes.{' '}
                      </li>
                      <li>
                        {' '}
                        Gift Vouchers/Gift Cards/Coupons Issuance/redemption
                        will be applied to the total value of the qualifying
                        order once all promotional discounts have been applied.{' '}
                      </li>
                      <li>
                        {' '}
                        Only one credit note/gift voucher/coupon can be used per
                        order unless otherwise stated.{' '}
                      </li>
                      <li>
                        {' '}
                        Validity Coupons will be valid for 1 month or till the
                        stock lasts on the applicable products, whichever
                        happens, earlier.{' '}
                      </li>
                      <li>
                        {' '}
                        Promotional discount vouchers may be offered from time
                        to time which may apply in respect of any, or certain
                        specified, purchases made through this Website.{' '}
                      </li>
                      <li>
                        {' '}
                        tontonfurniture.com introduces various offers, schemes
                        or contests at various times. The terms and conditions
                        for such a contest shall be separately available on the
                        Site.{' '}
                      </li>
                      <li>
                        {' '}
                        tontonfurniture.com reserves the right to
                        change/modify/add/delete any of the terms and conditions
                        prevailing on the different promotional schemes it
                        introduces in the market from time to time.
                        tontonfurniture.com, at its discretion, can withdraw a
                        particular scheme from the website or market.{' '}
                      </li>
                      <li>
                        {' '}
                        In case of any query pertaining to use of gift voucher
                        and/or credit note or regarding the schemes, please
                        email us at info@tontonfurniture.com or call @ +91 77328
                        58141{' '}
                      </li>
                      <li>
                        {' '}
                        While participating in any tontonfurniture.com contest
                        you hereby agree to release and hold tontonfurniture.com
                        (and its officers, directors, agents, subsidiaries,
                        affiliates, joint ventures, and employees) harmless from
                        any claim or demand, but not limited to reasonable
                        attorneys' fees, or arising out of or related to your
                        participation in the said contest.{' '}
                      </li>
                      <li>
                        tontonfurniture.com reserves the right to cancel any
                        orders placed using promotional vouchers. Some
                        situations where your order may be cancelled include,
                        without limitation, misuse of any promotional vouchers,
                        unauthorized usage of vouchers or inaccuracies of
                        voucher pricing, technical glitch and value thresholds.
                        The voucher/voucher-amount will not be refunded for such
                        cases.
                      </li>
                      <li>
                        {' '}
                        Suitable legal action will be taken against websites
                        involved in unauthorized publication of TonTon Furniture
                        vouchers. tontonfurniture.com will only honour vouchers
                        which are issued or published directly by us or our
                        partner websites. The vouchers usage terms can change
                        from time to time. Customers are requested to go through
                        the terms carefully before making any transactions.{' '}
                      </li>
                    </ol>
                  </Grid>
                  <Grid item md={12}>
                    <h2>Disclaimer:</h2>
                    <p>
                      {' '}
                      It is the customer's responsibility to login earlier if
                      they want to avail better products or offers because
                      tontonfurniture.com sales are "first come, first served".
                      The merchandise may or may not be restocked once sold out.
                      No information regarding the presence of any product in
                      our stock will be guaranteed and we will alert you only
                      when an item is sold out.{' '}
                    </p>
                    <p>
                      {' '}
                      The terms and conditions for such a contest shall be
                      separately available on the Site. In the event of any
                      conflict between these T&amp;C and the terms and
                      conditions pertaining to any contest, such terms and
                      conditions shall prevail.{' '}
                    </p>
                    <p>
                      {' '}
                      We as a merchant shall be under no liability whatsoever in
                      respect of any loss or damage arising directly or
                      indirectly out of the decline of authorization for any
                      transaction, on account of the cardholder having exceeded
                      the preset limit mutually agreed by us with our acquiring
                      bank from time to time.{' '}
                    </p>
                  </Grid>
                  <Grid item md={12}>
                    <h2>Violation of Terms of Use</h2>
                    <ol>
                      <li>
                        {' '}
                        tontonfurniture.com may in its sole discretion and
                        without prior notice terminate your access to the
                        Website if tontonfurniture.com determines that you have
                        violated the terms/additional terms/any other duty owed
                        to tontonfurniture.com. Any violation by you of the
                        terms will constitute an unlawful and unfair business
                        practice and will cause irreparable harm to
                        tontonfurniture.com, for which monetary damages is
                        likely to be inadequate and you consent to
                        tontonfurniture.com adder obtaining any injunctive or
                        equitable relief that tontonfurniture.com deems
                        necessary/appropriate. These remedies are in addition to
                        any other remedies tontonfurniture.com may have at law
                        or in equity.{' '}
                      </li>
                      <li>
                        {' '}
                        You agree to indemnify/defend/hold harmless
                        tontonfurniture.com/it’s associated business
                        partners/shareholders/directors and employees
                        from/against any/all losses/
                        liabilities/claims/damages/demands/costs and expenses
                        (including legal fees and disbursements in connection
                        therewith and interest chargeable thereon) asserted
                        against or incurred by tontonfurniture.com that arise
                        out of/result from/may be payable by virtue of any
                        breach of any representation/warranty/covenant/
                        agreement made/obligation to be performed by you
                        pursuant to these supply terms or any additional terms
                        applicable to product purchase.{' '}
                      </li>
                      <li>
                        {' '}
                        You agree to hold tontonfurniture.com harmless against
                        any claims made by any third party due to or arising out
                        of or in connection with your use of the Website, any
                        claim that your material caused damage to a third
                        party/your violation of the terms/ your violation of the
                        rights of any another person. tontonfurniture.com will
                        also be entitled to recover from you and you agree to
                        pay all reasonable attorneys' fees and costs of such
                        action, in addition to any other relief granted to
                        tontonfurniture.com.{' '}
                      </li>
                    </ol>
                  </Grid>
                  <Grid item md={12}>
                    <h2>Termination of terms and conditions</h2>
                    <p>
                      The terms will continue to apply until terminated by
                      either you/tontonfurniture.com as mentioned following:
                    </p>
                    <ol>
                      <li>
                        {' '}
                        If you want to terminate your agreement with
                        tontonfurniture.com, you may do so by either not
                        accessing the Website or closing your accounts (if any).{' '}
                      </li>
                      <li>
                        {' '}
                        tontonfurniture.com may at its discretion and at any
                        time with or without notice terminate or suspend the
                        terms without cause or with cause if:{' '}
                        <ol>
                          <li>
                            {' '}
                            You breach any of the provisions of the Term/Privacy
                            Policy or any other terms &amp; conditions/policies
                            that may be applicable to you.{' '}
                          </li>
                          <li>
                            {' '}
                            tontonfurniture.com is required to do so by law. For
                            example: where the provision of the Services to You
                            is, or becomes unlawful or pursuant to a request by
                            a regulatory authority.{' '}
                          </li>
                          <li>
                            {' '}
                            The provision of the services to you by
                            tontonfurniture.com is, in TonTon Furniture's
                            opinion, no longer commercially viable.{' '}
                          </li>
                          <li>
                            {' '}
                            tontonfurniture.com has chosen to discontinue, with
                            or without reason, your access to the
                            website/services (or any part thereof) either in
                            general or specifically to you.{' '}
                          </li>
                          <li>
                            {' '}
                            For technical or any other reason termination or
                            suspension may include: (a) removal of access to all
                            or portion of the offerings on the website or with
                            respect to the services/any portion thereof; (b)
                            deletion of your materials and/or account
                            information including your personal information,
                            log-in ID and password, and all related information,
                            files and materials associated with you or inside
                            your account or any part thereof; and (c) barring of
                            further use of the website/services.
                            tontonfurniture.com may also delete any content or
                            other materials relating to your use of the website.{' '}
                          </li>
                        </ol>
                      </li>
                      <li>
                        {' '}
                        tontonfurniture.com shall not be liable to you or any
                        third party for any such termination.{' '}
                      </li>
                      <li>
                        {' '}
                        Termination/suspension shall not affect your
                        liability/obligation arising prior to such
                        termination/suspension.{' '}
                      </li>
                    </ol>
                  </Grid>
                  <Grid item md={12}>
                    <h2>Report Abuse</h2>
                    <p>
                      {' '}
                      In the event you come across any abuse or violation of
                      terms or if you become aware of any objectionable content
                      on the Website, please report to info@tontonfurniture.com.{' '}
                    </p>
                  </Grid>
                  <Grid item md={12}>
                    <h2>Newsletters and Communications</h2>
                    <p>
                      You hereby agree to receive communications and newsletters
                      from tontonfurniture.com by SMS and/or e-mails. You can
                      unsubscribe / opt-out from receiving communications and
                      newsletters from tontonfurniture.com at any time by
                      following the procedure set forth in the website.
                    </p>
                  </Grid>
                  <Grid item md={12}>
                    <h2>Contents posted on site</h2>
                    <p>
                      {' '}
                      All content included on this site, such as text, graphics,
                      user interfaces, visual effects, photographs/images,
                      trademarks/logos, button icons, audio clips, digital
                      downloads, data compilations, software, artwork and
                      computer code (collectively, “content”), including but not
                      limited to the design, structure, selection, coordination,
                      expression, “look and feel” and arrangement of such
                      content, is the property of tontonfurniture.com, its
                      affiliates or its content suppliers and are controlled or
                      licensed by or to tontonfurniture.com, and is protected by
                      trade law, copyright, patent and trademark laws, and
                      various other intellectual property rights and unfair
                      competition laws.{' '}
                    </p>
                    <p>
                      {' '}
                      Except as expressly provided in these terms of use, no
                      part of the tontonfurniture.com and no content may be
                      copied, reproduced, republished, uploaded, posted,
                      publicly displayed, encoded, translated, transmitted or
                      distributed in any way (including “duplicating”) to any
                      other computer/server/website/other medium for
                      publication/distribution/for any commercial enterprise,
                      without tontonfurniture.com’s express prior written
                      consent.{' '}
                    </p>
                    <p>
                      {' '}
                      You may use information on tontonfurniture.com products
                      and services purposely made available by
                      tontonfurniture.com for downloading from the site,
                      provided that you (1) not remove any proprietary notice
                      language in all copies of such documents, (2) use such
                      information only for your personal, non-commercial
                      informational purpose and do not copy or post such
                      information on any networked computer or broadcast it in
                      any media, (3) make no modifications to any such
                      information, and (4) not make any additional
                      representations or warranties relating to such documents.{' '}
                    </p>
                    <p>
                      {' '}
                      You shall be responsible for any notes, messages, e-mails,
                      billboard postings, photos, drawings, profiles, opinions,
                      ideas, images, videos, audio files or other materials or
                      information posted or transmitted to the sites
                      (collectively, "content"). Such content will become the
                      property of tontonfurniture.com and you grant
                      tontonfurniture.com the worldwide, perpetual and
                      transferable rights in such content. tontonfurniture.com
                      shall be entitled to, consistent with our privacy policy,
                      use the content or any of its elements for any type of use
                      forever, including but not limited to promotional and
                      advertising purposes and in any media whether now known or
                      hereafter devised, including the creation of derivative
                      works that may include content you provide. You agree that
                      any content you post may be used by tontonfurniture.com,
                      consistent with our privacy policy and rules of conduct on
                      site as mentioned herein, and you are not entitled to any
                      payment or other compensation for such use.{' '}
                    </p>
                  </Grid>
                  <Grid item md={12}>
                    <h2>Breach</h2>
                    <p>
                      {' '}
                      Without limiting other resolutions, tontonfurniture.com
                      may limit your activity, immediately remove your
                      information, warn other users of your actions, immediately
                      temporarily/indefinitely suspend or terminate or block
                      your membership, and/or refuse to provide you with access
                      to the tontonfurniture.com website in the event, but not
                      limited to:{' '}
                    </p>
                    <ol>
                      <li>
                        {' '}
                        If you breach the terms of use or privacy policy or
                        other rules and policies, if any;{' '}
                      </li>
                      <li>
                        {' '}
                        If tontonfurniture.com is unable to verify or
                        authenticate any information you provide; or{' '}
                      </li>
                      <li>
                        {' '}
                        If it is believed that your actions may cause legal
                        liability for you, other users or tontonfurniture.com.
                        tontonfurniture.com may at any time at its sole
                        discretion reinstate suspended users. A user that has
                        been suspended or blocked may not register or attempt to
                        register with tontonfurniture.com or use
                        tontonfurniture.com website in any manner whatsoever
                        until such time that such user is reinstated by
                        tontonfurniture.com.{' '}
                      </li>
                      <li>
                        {' '}
                        Notwithstanding the foregoing, if you breach the terms
                        of use or privacy policy or other ruler and policies,
                        tontonfurniture.com reserves the right to recover any
                        amounts due and owing by you to tontonfurniture.com and
                        to take strict legal action including but not limited to
                        a referral to the appropriate police or other
                        authorities for initiating criminal or other proceedings
                        against you.{' '}
                      </li>
                    </ol>
                  </Grid>
                  <Grid item md={12}>
                    <h2>Other businesses</h2>
                    <p>
                      tontonfurniture.com does not take responsibility or
                      liability for the actions, products, content and services
                      on tontonfurniture.com website, which are linked to
                      affiliates and / or third party websites using
                      tontonfurniture.com or otherwise. In addition,
                      tontonfurniture.com may provide links to the third party
                      websites of affiliated companies and certain other
                      businesses for which, tontonfurniture.com assumes no
                      responsibility for examining or evaluating the products
                      and services offered by them, and tontonfurniture.com does
                      not warrant the offerings of, any of these businesses or
                      individuals or the content of such third party website(s).
                      tontonfurniture.com does not in any way endorse any third
                      party website(s) or content thereof
                    </p>
                  </Grid>
                  <Grid item md={12}>
                    <h2>Use of Materials</h2>
                    <p>
                      Except as clearly indicated to the contrary herein or in
                      any applicable additional Terms, tontonfurniture.com
                      hereby grants you a non-exclusive, freely revocable (upon
                      notice from TonTon Furniture), non-transferable access to
                      view, download and print product catalogues or any other
                      materials available on the website.
                    </p>
                  </Grid>
                  <Grid item md={12}>
                    <h2>Product description</h2>
                    <p>
                      {' '}
                      tontonfurniture.com tries to be as accurate as possible.
                      However tontonfurniture.com does not warrant that product
                      description or other content or such other information of
                      this site is 100% accurate, complete, reliable, current,
                      or error-free. Product dimensions are for indicative
                      purposes only and are subject to a tolerance of +/- 3cm.
                      For handcrafted Furniture items, marginal variances in
                      color, texture, wood grains and knots are all part of the
                      charm of the product and thus deemed acceptable. The
                      actual fabric/upholstery may have a slight variance from
                      the product image depending on your screen settings,
                      resolution and photography or fabric print.{' '}
                    </p>
                  </Grid>
                  <Grid item md={12}>
                    <h2>Privacy Policy</h2>
                    <p>
                      {' '}
                      Please review our Privacy Policy, which also governs your
                      visit to this Site to understand our practices. The
                      personal information / data provided to us by you during
                      the course of usage of the Site will be treated as
                      strictly confidential and in accordance with the Privacy
                      Notice and applicable laws and regulations. If you object
                      to your information being transferred or used, please do
                      not use the Site.{' '}
                    </p>
                    <p>
                      {' '}
                      By entering into the site and registering yourself you
                      confirm that you have read and fully understand the
                      Privacy Policy of tontonfurniture.com regarding the
                      website. You further consent that the terms and contents
                      of such Privacy Policy are acceptable to you.{' '}
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

export default Index
