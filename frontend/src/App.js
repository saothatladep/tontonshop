import React from 'react'
import { Route } from 'react-router'
import Home from 'screens/Home/Index'
import Footer from 'components/Footer/Index'
import Header from 'components/Header/Index'

const app = () => {
  return (
    <div className='app'>
      <Header />
        <Route path='/' component={Home} />
      <Footer />
    </div>
  )
}

export default app
