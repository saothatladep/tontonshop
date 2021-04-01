import ScrollToTop from 'components/ScrollToTop'
import React from 'react'
import MoreInfo from './components/MoreInfo'
import Product from './components/Product'
import RateAndComment from './components/RateAndComment'
import RelatedProducts from './components/RelatedProducts'
const ProductDetail = (props) => {

  const { match, history } = props
  return (
    <div>
      <Product match={match} history={history} />
      <MoreInfo />
      <RateAndComment match={match} history={history} />
      <RelatedProducts />
      <ScrollToTop />
    </div>
  )
}

export default ProductDetail
