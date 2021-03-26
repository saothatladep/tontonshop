import NavbarHeader from 'components/Header/NavbarHeader'
import OptionTypes from 'components/Header/OptionTypes'
import React, { useState } from 'react'

const Header = () => {
  return (
    <div>
      <NavbarHeader />
      <OptionTypes />
    </div>
  )
}

export default Header
