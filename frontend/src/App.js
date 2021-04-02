import React from 'react'
import { Route, Switch } from 'react-router'
import Home from 'screens/Home/Index'
import ProductList from 'screens/ProductList/Index'
import Search from 'screens/Search/Index'
import ProductDetail from 'screens/ProductDetail/Index'
import Footer from 'components/Footer/Index'
import Header from 'components/Header/Index'
import Cart from 'screens/Cart/Index'
import Login from 'screens/Login/Index'
import Register from 'screens/Register/Index'
import Profile from 'screens/Profile/Index'
import Shipping from 'screens/Shipping/Index'
import Payment from 'screens/Payment/Index'
import PlaceOrder from 'screens/PlaceOrder/Index'
import Order from 'screens/Order/Index'
import MyOrder from 'screens/MyOrder/Index'
import AdminUsers from 'screens/Admin/components/AdminUsers'
import AdminUserEdit from 'screens/Admin/components/AdminUserEdit'
import AdminProductList from 'screens/Admin/components/AdminProductList'
import AdminProductEdit from 'screens/Admin/components/AdminProductEdit'
import AdminOrdersList from 'screens/Admin/components/AdminOrdersList'

const app = () => {
  return (
    <div className='app'>
      <Header />
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/search/:keyword' component={Search} exact />
        <Route path='/page/:pageNumber' component={Search} exact />
        <Route
          path='/search/:keyword/page/:pageNumber'
          component={Search}
          exact
        />
        <Route path='/category/:id' component={ProductList} exact />
        <Route path='/category/:id?/page/:pageNumber?' component={ProductList} exact />
        <Route path='/product/:id' component={ProductDetail} />
        <Route path='/cart/:id?' component={Cart} />
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
        <Route path='/profile' component={Profile} />
        <Route path='/shipping' component={Shipping} />
        <Route path='/payment' component={Payment} />
        <Route path='/placeorder' component={PlaceOrder} />
        <Route path='/order/:id' component={Order} />
        <Route path='/myorders' component={MyOrder} />
        <Route path='/admin/userlist' component={AdminUsers} />
        <Route path='/admin/user/:id/edit' component={AdminUserEdit} />
        <Route path='/admin/productlist' component={AdminProductList} exact />
        <Route
          path='/admin/productlist/:pageNumber'
          component={AdminProductList}
          exact
        />
        <Route path='/admin/product/:id/edit' component={AdminProductEdit} />
        <Route path='/admin/orderslist' component={AdminOrdersList} />
      </Switch>
      <Footer />
    </div>
  )
}

export default app
