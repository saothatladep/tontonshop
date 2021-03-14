import React from 'react'
import { Route, Switch } from 'react-router'
import Home from 'screens/Home/Index'
import ProductList from 'screens/ProductList/Index'
import Footer from 'components/Footer/Index'
import Header from 'components/Header/Index'

const app = () => {
  return (
    <div className='app'>
      <Header />
      <Switch>
        <Route path='/' component={Home} exact/>
        <Route path='/category/:id' component={ProductList} />
      </Switch>
      <Footer />
    </div>
  )
}

export default app
