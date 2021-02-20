import React from 'react'
import Footer from 'components/Footer/footer'
import Header from 'components/Header/header'
import HeaderOptionCategories from 'components/Header/headerOptionCategories'
const app = () => {
  return (
    <div className='app'>
      <header>
        <Header />
        <HeaderOptionCategories/>
      </header>
      <main>
        <h3>Welcome to my shop</h3>
      </main>
      <Footer />
    </div>
  )
}

export default app
