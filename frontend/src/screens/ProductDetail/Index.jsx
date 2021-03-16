import ScrollToTop from 'components/ScrollToTop'
import React from 'react'
import MoreInfo from './components/MoreInfo'
import Product from './components/Product'
import RateAndComment from './components/RateAndComment'
import RelatedProducts from './components/RelatedProducts'

const Index = (props) => {
  const { match } = props
  return (
    <div>
      <Product match={match} />
      <MoreInfo />
      <RateAndComment />
      <RelatedProducts />
      <ScrollToTop />
    </div>
  )
}

export default Index
