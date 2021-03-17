import React from 'react'
import { Route, Switch } from 'react-router'
import Home from 'screens/Home/Index'
import ProductList from 'screens/ProductList/Index'
import ProductDetail from 'screens/ProductDetail/Index'
import Footer from 'components/Footer/Index'
import Header from 'components/Header/Index'
import Cart from 'screens/Cart/Index'
const app = () => {
  return (
    <div className='app'>
      <Header />
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/category/:id' component={ProductList} />
        <Route path='/product/:id' component={ProductDetail} />
        <Route path='/cart/:id' component={Cart} />
      </Switch>
      <Footer />
    </div>
  )
}

export default app
