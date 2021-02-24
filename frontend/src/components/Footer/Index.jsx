import React from 'react'
import DetailFooter from './DetailFooter'
import EmailFeedBack from './EmailFeedBack'
import RightsFooter from './RightsFooter'

const footer = () => {
  return (
    <div>
      <EmailFeedBack/>
      <DetailFooter/>
      <RightsFooter/>
    </div>
  )

}

export default footer
