import NavbarHeader from 'components/Header/NavbarHeader'
import OptionTypes from 'components/Header/OptionTypes'
import React from 'react'
import { Route } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <Route render={({ history }) => <NavbarHeader history={history} />} />

      <OptionTypes />
    </div>
  )
}

export default Header
