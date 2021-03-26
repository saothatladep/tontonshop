import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import DetailFooter from './DetailFooter'
import Address from './Address'
import RightsFooter from './RightsFooter'

const Footer = () => {
  return (
    <div>
      <DetailFooter />
      <Address />
      <RightsFooter />
    </div>
  )
}

export default Footer
