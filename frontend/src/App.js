import React from 'react'
import Footer from 'components/Footer/Index'
import Header from 'components/Header/Index'
import HeaderOptionCategories from 'components/Header/OptionTypes'
import Body from 'components/Body/Index'
const app = () => {
  return (
    <div className='app'>
      <Header />
      <Body>
        <HeaderOptionCategories/>
      </Body>

      <Footer />
    </div>
  )
}

export default app
