import React from 'react'
import { Route, Switch } from 'react-router'
import Home from 'screens/Home/Index'
import ProductList from 'screens/ProductList/Index'
import ProductDetail from 'screens/ProductDetail/Index'
import Footer from 'components/Footer/Index'
import Header from 'components/Header/Index'
import Cart from 'screens/Cart/Index'
import Login from 'screens/Login/Index'
import Register from 'screens/Register/Index'
import Profile from 'screens/Profile/Index'


const app = () => {
  return (
    <div className='app'>
      <Header />
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/category/:id' component={ProductList} />
        <Route path='/product/:id' component={ProductDetail} />
        <Route path='/cart/:id?' component={Cart} />
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
        <Route path='/profile' component={Profile} />


      </Switch>
      <Footer />
    </div>
  )
}

export default app
