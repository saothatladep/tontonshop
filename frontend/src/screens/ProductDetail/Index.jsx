import ScrollToTop from 'components/ScrollToTop'
import React, { useEffect, useState } from 'react'
import MoreInfo from './components/MoreInfo'
import Product from './components/Product'
import RateAndComment from './components/RateAndComment'
import RelatedProducts from './components/RelatedProducts'
import { listProductDetails } from 'actions/productActions.js'
import { useDispatch, useSelector } from 'react-redux'

const ProductDetail = (props) => {
  const { match, history } = props

  const dispatch = useDispatch()

  const productDetails = useSelector((state) => state.productDetails)
  const { loading, error, product } = productDetails

  useEffect(() => {
    dispatch(listProductDetails(match.params.id))
    window.scrollTo(0, 0)
  }, [dispatch, match])
  // console.log(product)
  return (
    <div>
      <Product product={product} loading={loading} error={error} match ={match} history = {history} />
      <MoreInfo />
      <RateAndComment />
      <RelatedProducts />
      <ScrollToTop />
    </div>
  )
}

export default ProductDetail
